import React, { Component } from 'react';
import UserForm from './UserForm';
import LanguageContext from '../context/LanguageContext';
import '../App.css';

export default class App extends Component {
  state = { language: 'english' };
  onSelectLanguage = language => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          <b>Select your language: </b>
          <i
            className="flag us first"
            onClick={() => this.setState({ language: 'english' })}
          />
          <i
            className="flag cn"
            // onClick={() => this.setState({ language: 'chinese' })}
            onClick={() => this.onSelectLanguage('chinese')}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserForm />
        </LanguageContext.Provider>
      </div>
    );
  }
}
