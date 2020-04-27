import React, { Component } from 'react';
import '../App.css';

class TextInput extends Component {
  render() {
    return (
      <section class="editor-container">
        <h2 id="editor-title">Type your Markdown code here:</h2>
        <textarea
          aria-labelledby="editor-title" 
          id="editor"
          name="input" 
          cols="30" 
          rows="5" 
          placeholder="Type here.."
          value={this.props.value}
          onChange={this.props.handleInput}>
          </textarea>
      </section>
    );
  }
}

export default TextInput;