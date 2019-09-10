import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class Field extends Component {
  renderLabel = ({ language }) => {
    return language === 'english' ? 'Name' : '姓名';
  };

  render() {
    // const text = this.context === 'english' ? 'Name' : '姓名';
    // <label>{text}: </label>

    // <LanguageContext.Consumer>
    //   {value => (value.language === 'english' ? 'Name' : '姓名')}
    // </LanguageContext.Consumer>

    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {value => this.renderLabel(value)}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

// Field.contextType = LanguageContext;
