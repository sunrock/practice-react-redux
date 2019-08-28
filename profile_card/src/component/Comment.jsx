import React from 'react';
import faker from 'faker';

const Comment = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>

      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="datetime"> Today 4:00 pm</span>
        </div>
        <div className="text">[Content] My post.</div>
      </div>
    </div>
  );
};

// class Comment extends Component {
//   render() {
//     return (
//       <div className="comment">
//         <a href="/" className="avatar">
//           <img alt="avatar" src={faker.image.avatar()}/>
//         </a>

//         <div className="content">
//           <a href="/" className="author">
//             { this.props.author }
//           </a>
//           <div className="metadata">
//             <span className="datetime"> Today 4:00 pm</span>
//           </div>
//           <div className="text">[Content] My post.</div>
//         </div>
//       </div>
//     );
//   }
// }

export default Comment;
