import React, { Component } from 'react';
import NotficationAlert from '../../components/notficationalert/NotficationAlert';

export class NotficationPage extends Component {
  static defaultProps = {
    notfications: [
      {
        who: 'Hasan',
        what: 'delete',
        message: 'his booking',
        time: '1:7:2020'
      },
      {
        who: 'Hasan',
        what: 'changed',
        message: 'his booking',
        time: '1:7:2020'
      }
    ]
  };
  render() {
    const { notfications } = this.props;
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-10">
            {notfications.map(notfication => (
              <NotficationAlert notfication={notfication} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default NotficationPage;
