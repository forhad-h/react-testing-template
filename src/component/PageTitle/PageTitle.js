import React from 'react'

import './PageTitle.css'

export default props => {
  const { title } = props

  if (!title) return null

  return <div className="page_title_wrapper" data-testid="page-title">
    <h1 className="page_title">{title}</h1>
  </div>
}
