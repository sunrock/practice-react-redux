import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from "../actions";

class UserHeader extends Component {
  render() {
    // const user = this.props.users.find(user => user.id === this.props.userId);
    const { user } = this.props;
    if (!user) {
      return <div className="header">User Name</div>;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // return { users: state.users };
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
