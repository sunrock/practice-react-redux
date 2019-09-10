import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class Field extends Component {
  render() {
    // const text = this.context === 'english' ? 'Name' : '姓名';
    // <label>{text}: </label>

    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {value => (value === 'english' ? 'Name' : '姓名')}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

// Field.contextType = LanguageContext;
