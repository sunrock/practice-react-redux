import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div className="ui container">
      <div className="ui content">
        <button
          className="ui primary button"
          onClick={() => setResource('posts')}
        >
          Posts
        </button>

        <button
          className="ui secondary button"
          onClick={() => setResource('todos')}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;

// import React, { Component } from 'react';

// export default class App extends Component {
//   state = { resource: 'posts' };

//   onSwitchResource = resource => {
//     this.setState({ resource });
//   };

//   render() {
//     return (
//       <div className="ui container">
//         <div className="ui content">
//           <button
//             className="ui primary button"
//             onClick={() => this.onSwitchResource('posts')}
//           >
//             Posts
//           </button>

//           <button
//             className="ui secondary button"
//             onClick={() => this.onSwitchResource('todos')}
//           >
//             Todos
//           </button>
//         </div>
//         {this.state.resource}
//       </div>
//     );
//   }
// }
