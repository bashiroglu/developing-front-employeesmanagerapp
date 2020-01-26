import React from 'react';

import Input from '../../components/elements/formelements/input/Input';
import Button from '../../components/elements/formelements/button/Button';

function DownloadButtons() {
  return (
    <form className="form-inline container mb-4">
      <Input
        id="filterselect"
        name="filterselect"
        // onChange={onChange}
        FilterOptions={['Export as a pdf file', 'Export as a excell file']}
        // value={value}
        element="select"
      />
      <Button type="submit" classes="ml-auto  btn-success">
        Download
      </Button>
    </form>
  );
}

export default DownloadButtons;
