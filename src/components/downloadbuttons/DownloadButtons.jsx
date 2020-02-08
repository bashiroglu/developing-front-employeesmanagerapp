import React from 'react';

import Button from '../../components/elements/formelements/button/Button';
import SelectInput from '../elements/formelements/input/SelectInput';

function DownloadButtons({ onChange, onSubmit, downloadType }) {
  return (
    <form onSubmit={onSubmit} className="form-inline container mb-4">
      <SelectInput
        id="filterselect"
        name="filterselect"
        element="select"
        onChange={onChange}
        value={downloadType}
        filterOptions={['Export as a pdf file', 'Export as a excell file']}
      />
      <Button type="submit" classes="ml-auto  btn-success">
        Download
      </Button>
    </form>
  );
}

export default DownloadButtons;
