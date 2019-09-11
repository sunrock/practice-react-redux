// import React, { Component } from 'react';
import axios from 'axios';

// class ResourceList extends Component {
//   state = { items: [] };
//   async componentDidMount() {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/${this.props.resource}`
//     );
//     this.setState({ item: response.data });
//   }

//   async componentDidUpdate(prevProps, prevState) {
//     if (prevProps.resource !== this.props.resource) {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/${this.props.resource}`
//       );
//       this.setState({ items: response.data });
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div>ResourceList: {this.state.items.length}</div>
//         <div>{this.props.resource}</div>
//       </div>
//     );
//   }
// }

import React, { useState, useEffect } from 'react';

const ResourceList = ({ resource }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems(resource);
    // (async resource => {
    //   const response = await axios.get(
    //     `https://jsonplaceholder.typicode.com/${resource}`
    //   );
    //   setItems(response.data);
    // })(resource);
  }, [resource]);

  const fetchItems = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setItems(response.data);
  };

  // <div>ResourceList: {items.length}</div>
  // <div>{resource}</div>
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
