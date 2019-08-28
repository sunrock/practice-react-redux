import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './component/Comment';
import Approval from './component/Approval';

const App = () => {
  return (
    // <div>Hi, I'm Rock.</div>
    <div className="ui container comments">
      <Approval>
        <Comment author="Sam" />
      </Approval>
      <Comment author="Tom" />
      <Comment author="Peter" />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.querySelector('#root'));
