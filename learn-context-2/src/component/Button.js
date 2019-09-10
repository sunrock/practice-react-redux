import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class Button extends Component {
  render() {
    // console.log(this.context);
    const text = this.context.language === 'english' ? 'Submit' : '提交';
    return <button className="ui primary button">{text}</button>;
  }
}

Button.contextType = LanguageContext;
