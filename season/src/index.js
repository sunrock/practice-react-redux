import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {  }

  render() { 
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      err => console.log(err.error)
    );

    return ( <div>Latitude：</div> );
  }
}

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     err => console.log(err.error)
//   )
//   return (
//     <div>Hi, there.</div>
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'));