import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.scss';

export default class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      editorState: EditorState.createEmpty()
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onEditorStateChange = editorState => {
    this.setState({ editorState })
  }

  onSubmit = () => {
    this.props.createBlog(this.state);
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
