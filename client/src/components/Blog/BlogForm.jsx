import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { createPost, updatingPostStart, updatePost, updatingPostEnd } from '../../actions/blogActions';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.scss';
import { Redirect } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post))
  }
}

class BlogForm extends Component {
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
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  redirectToTarget = target => {
    this.context.router.history.push(target);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onEditorStateChange = editorState => {
    this.setState({ editorState })
  }

  onSubmit = e => {
    e.preventDefault();
    let editorState = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));

    if(this.props.post.isEditing) {
      this.props.updatePost({ _id: this.props.post._id, title: this.state.title, editorState: editorState });
    } else {
      this.props.createPost({ title: this.state.title, editorState: editorState })
      this.redirectToTarget('/blog');
    }
  }

  stopEditing = () => {
    this.props.updatingPostEnd();
  }

  render() {
    const editorState = this.state.editorState;
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="title">Title</label>
        <input name="title" placeholder="Tittle" type="text" value={this.state.title} onChange={this.onChange}/>
        <label htmlFor="body">Body</label>
        <Editor
          editorState={editorState}
          wrapperClassname="editor-wrapper"
          editorClassname="editor"
          onEditorStateChange={this.onEditorStateChange}
        />
      <input type="submit" value="Publish"/>
      <button onClick={this.stopEditing}>cancel</button>
      </form>
    )
  }
}

export default connect(null, mapDispatchToProps)(BlogForm);
