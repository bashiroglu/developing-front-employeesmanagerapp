import React  from 'react';
import NotficationAlert from '../../components/notficationalert/NotficationAlert';

function NotficationPage({ notfications }) {
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
NotficationPage.defaultProps = {
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
export default NotficationPage;
