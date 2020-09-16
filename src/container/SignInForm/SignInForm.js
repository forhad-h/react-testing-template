import React from 'react'

import { InputField } from '../../component'

export default () => {

  return <div data-testid="sign-in-form" className="sign_in_form_wrapper">
    <form>
      <InputField label="Email Address" type="email" />
      <InputField label="Password" type="password" />
    </form>
  </div>

}