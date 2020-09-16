import React from 'react'
import { render, screen } from '@testing-library/react'

import SignInForm from './SignInForm'

describe('<SignInForm />', () => {

  it('should render SignIn Form', () => {
    render(<SignInForm />)

    const form = screen.getByTestId('sign-in-form')

    expect(form).toHaveClass('sign_in_form_wrapper')

  })

})