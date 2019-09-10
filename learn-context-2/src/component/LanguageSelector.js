import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class LanguageSelector extends Component {
  render() {
    return (
      <div>
        <b>Select your language: </b>
        <i
          className="flag us first"
          onClick={() => this.context.onLanguageChange('english')}
          // onClick={() => this.props.onSelectLanguage('english')}
        />
        <i
          className="flag cn"
          onClick={() => this.context.onLanguageChange('chinese')}
          // onClick={() => this.props.onSelectLanguage('chinese')}
        />
      </div>
    );
  }
}

LanguageSelector.contextType = LanguageContext;
