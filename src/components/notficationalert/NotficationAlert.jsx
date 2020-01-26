import React, { Component } from 'react';

function NotficationAlert(props) {
  const { who, message, what } = props.notfication;
  const alertType = what === 'delete' ? 'danger' : 'success';
  return (
    <div>
      <div className={`alert row alert-${alertType}`} role="alert">
        {`${who} ${what}d ${message}`}
        <div className=" ml-auto">
          <button className="btn btn-warning mx-3">Edit action</button>
          <button className="btn btn-success mx-3">Okay</button>
        </div>
      </div>
    </div>
  );
}

export default NotficationAlert;
