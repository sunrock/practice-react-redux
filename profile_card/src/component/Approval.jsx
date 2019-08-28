import React from 'react';

const Approval = props => {
  return (
    <div className="ui card">
      <div className="content">
        {
          /* Are you sure? */
          props.children
        }
      </div>
      <div className="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Approve</div>
          <div class="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  );
};

export default Approval;
