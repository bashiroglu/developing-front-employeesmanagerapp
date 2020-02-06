import React from 'react';

function Input({
  onChange,
  type,
  id,
  additionaltextid,
  label,
  additionaltext,
  name,
  value,
  element,
  disabled
}) {
  const renderElement = element ? (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        disabled={disabled}
        value={value}
        type={type}
        className="form-control"
        id={id}
        aria-describedby={additionaltextid}
        name={name}
        onChange={onChange}
      />
      {additionaltext && (
        <small id={additionaltextid} className="form-text text-muted">
          {additionaltext}
        </small>
      )}
    </div>
  ) : (
    <div className="form-group ">
      <label htmlFor={id}>{label}</label>
      <textarea
        className="form-control"
        onChange={onChange}
        id={id}
        rows="3"
        name={name}
        value={value}
      ></textarea>
    </div>
  );

  return renderElement;
}

export default Input;
