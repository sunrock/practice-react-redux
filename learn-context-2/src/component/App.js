import React, { Component } from 'react';
import UserForm from './UserForm';
import { LanguageStore } from '../context/LanguageContext';
import '../App.css';
import LanguageSelector from './LanguageSelector';

export default class App extends Component {
  // state = { language: 'english' };

  // onSelectLanguage = language => {
  //   this.setState({ language });
  // };

  // <LanguageSelector onLanguageChange={this.onLanguageChange} />

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <UserForm />
        </LanguageStore>
      </div>
    );
  }
}
