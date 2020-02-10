import React from 'react';
import SvgTshirt from './SvgTshirt';
import SvgShoe from './SvgShoe';
import './tshirt.css';

function EquipmentDisplayer({ shoe, tshirt }) {
  return (
    <div className="ml-4 d-flex flex-row ">
      <div className={tshirt ? 'green' : 'red'}>
        <SvgTshirt />
      </div>
      <div className={shoe ? 'green' : 'red'}>
        <SvgShoe />
      </div>
    </div>
  );
}

export default EquipmentDisplayer;
