import React, { Component } from 'react';
import '../App.css';

const marked = require('marked');
marked.setOptions({
  breaks: true
});

class TextOutput extends Component {
  translateMarkdown(a) {
    return {__html: a}
  }
  render() {
    return (
      <section class="preview-container">
        <h2>This is how your Markdown code looks in the browser:</h2>
        <div id="preview" dangerouslySetInnerHTML = {this.translateMarkdown(marked(this.props.value))}/>
      </section>
    );
  }
}

export default TextOutput;