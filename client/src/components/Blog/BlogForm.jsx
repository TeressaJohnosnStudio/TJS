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
import Upload from '../Upload';
import axios from 'axios';

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post))
  }
}

class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      image: null,
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
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onImageChange = e => {
    console.log(e.target.files[0])
    this.setState({
      image: e.target.files[0]
    })
  }

  onEditorStateChange = editorState => {
    this.setState({ editorState })
  }

  onSubmit = e => {
    e.preventDefault();
    let data = new FormData();
    let editorState = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));

    data.append('image', this.state.image);
    data.append('title', this.state.title);
    data.append('editorState', this.state.title);
    console.log('onSubmit this.state.image  ', this.state.image);

    this.props.createPost(data)
    this.redirectToTarget('/blog');
  }

  stopEditing = () => {
    this.props.updatingPostEnd();
  }

  render() {
    const editorState = this.state.editorState;
    return (
      <form encType="multipart/form-data" onSubmit={this.onSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" placeholder="Tittle" type="text" value={this.state.title} onChange={this.onChange}/>
        <input type="file" onChange={this.onImageChange} name="image" />
        <label htmlFor="body">Body</label>
        <Editor
          editorState={editorState}
          wrapperClassname="editor-wrapper"
          editorClassname="editor"
          toolbar={{
            image: {urlEnabled: false, uploadEnabled: true}
          }}
          onEditorStateChange={this.onEditorStateChange}
        />
      <input type="submit" value="Publish"/>
      <button onClick={this.stopEditing}>cancel</button>
      </form>
    )
  }
}

export default connect(null, mapDispatchToProps)(BlogForm);
