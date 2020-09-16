import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('<Header />', () => {

  beforeEach(() => {
    render(<Header />)
  })

  it('should render placeholder', () => {
    const header = screen.getByTestId('header')
    expect(header).toHaveClass('ch_header')
  })

})