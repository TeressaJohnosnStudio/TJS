import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import BlogForm from './BlogForm';
import { updatePost } from '../../actions/blogActions';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import './style.scss';

class Post extends Component {
  constructor(props) {
    super(props);

    const html = this.props.post.editorState || '';
    const contentBlock = htmlToDraft(html);
    let editorState = null;

    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      editorState = EditorState.createWithContent(contentState);
    }

    this.state = {
      title: this.props.post.title || '',
      editorState: editorState || EditorState.createEmpty(),
      isEditingTitle: false,
      isEditingContent: false
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  redirectToTarget = target => {
    this.context.router.history.push(target);
  }

  onEditorStateChange = editorState => {
    this.setState({ editorState })
  }

  deletePost = () => {
    this.props.removePost(this.props.post._id);
    this.redirectToTarget('/blog');
  }

  renderContentForm = () => {
    const editorState = this.state.editorState;
    return (
      <form onSubmit={this.editContent}>
        <Editor
          editorState={editorState}
          wrapperClassname="editor-wrapper"
          editorClassname="editor"
          onEditorStateChange={this.onEditorStateChange}
        />
      <input type="submit" value="Save"/>
      <button onClick={this.toggleEditContent}>cancel</button>
      </form>
    )
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  editPost = e => {
    e.preventDefault();
    this.props.updatePost({ _id: this.props.post._id, title: this.state.title });
    this.toggleEditTitle();
  }

  editContent = e => {
    e.preventDefault();
    let editorState = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));

    this.props.updatePost({ _id: this.props.post._id, editorState });
    this.toggleEditContent();
  }

  toggleEditTitle = () => {
    this.setState({ isEditingTitle: !this.state.isEditingTitle });
  }

  toggleEditContent = () => {
    this.setState({ isEditingContent: !this.state.isEditingContent })
  }

  renderEditFor = (fieldName, prop) => {
    return (
      <form className={fieldName} onSubmit={this.editPost}>
        <input id="title" type="text" name={fieldName} onChange={this.onChange} value={prop} autoFocus />
        <input className="save" type="submit" value="save"/>
        <button className="cancel" onClick={this.toggleEditTitle}>cancel</button>
      </form>
    )
  }

  render() {
    return (
      <div id="post">
        {this.state.isEditingTitle
          ? this.renderEditFor('title', this.state.title)
          : <h1>{this.state.title}<button className="edit" onClick={this.toggleEditTitle}><Fa icon={fa.faPencilAlt}/></button></h1>
        }

        {this.state.isEditingContent
          ? this.renderContentForm()
          : <React.Fragment>
              <button className="edit" onClick={this.toggleEditContent}><Fa icon={fa.faPencilAlt} /></button>
              <article dangerouslySetInnerHTML={{ __html: this.props.post.editorState }} />
            </React.Fragment>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePost: post => dispatch(updatePost(post)),
    startEditing: () => dispatch(startEditing())
  }
}

const mapStateToProps = (state, ownProps) => {
  let isEditing = state.posts.isEditing;
  let post = { _id: '', title: '', editorState: '', date: '' };
  let postId = ownProps.match.params._id;

  if(postId && state.posts.posts.length > 0) {
    post = state.posts.posts.find(post => postId === post._id)
  }

  return {
    post: { _id: postId, title: post.title, editorState: post.editorState, date: post.date, isEditing: isEditing }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
