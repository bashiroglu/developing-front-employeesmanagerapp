import React, { Component } from 'react';

export class NotficationPage extends Component {
  static defaultProps = {
    notfications: [
      {
        who: 'Hasan',
        what: 'deleted',
        message: 'his booking',
        time: '1:7:2020'
      }
    ]
  };
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-10">
            <div class="alert alert-danger" role="alert">
              A simple danger alert—check it out!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotficationPage;
