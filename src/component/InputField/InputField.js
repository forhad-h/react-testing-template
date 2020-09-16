import React from 'react'

export default props => {

  const { label, type } = props;

  return <div className="single_input" data-testid="input-field">
    <label>{label}</label>
    <input type={type} />
  </div>
}