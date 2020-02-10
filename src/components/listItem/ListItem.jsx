import React from 'react';
import uuid from 'uuid';
import EquipmentDisplayer from '../equipmentDisplayer/EquipmentDisplayer';
function ListItem({ item, tableColumns }) {
  const normalFlow = i => <td key={uuid()}>{item[tableColumns[i]]}</td>;

  return (
    <tr key={uuid()}>
      {Object.keys(item).map((bookingObjKey, i) => {
        if (tableColumns[i] === 'equipments') {
          return (
            <td key={uuid()}>
              <EquipmentDisplayer
                shoe={item[tableColumns[i]].includes('shoe')}
                tshirt={item[tableColumns[i]].includes('t-shirt')}
              />
            </td>
          );
        }
        return normalFlow(i);
      })}
    </tr>
  );
}
// import EquipmentDisplayer from '../equipmentDisplayer/EquipmentDisplayer';

export default ListItem;
