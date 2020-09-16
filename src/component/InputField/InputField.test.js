import React from 'react'
import { render, screen } from '@testing-library/react'

import InputField from './InputField'

describe('<InputField />', () => {


  it('should render input field', () => {

    render(<InputField />)

    const inputField = screen.getByTestId('input-field')

    expect(inputField).toHaveClass('single_input')

  })

})