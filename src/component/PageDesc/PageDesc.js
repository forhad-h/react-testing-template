import React from 'react'

export default props => {
  const { descArr } = props;

  if (!descArr) return null;
  if (descArr.length < 1) return null;

  const items = descArr.map((item, index) => <p data-testid="each-item" key={index}>{item}</p>)

  return <div>
    {items}
  </div>
}