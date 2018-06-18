import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { createPost } from '../../actions/blogActions';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.scss';
import { Redirect } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  }
}

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      editorState: EditorState.createEmpty()
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
    console.log(this.state);
    this.props.createPost(this.state)
    this.redirectToTarget('/blog');
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
      </form>
    )
  }
}

export default connect(null, mapDispatchToProps)(BlogForm);
