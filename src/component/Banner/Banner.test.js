import React from 'react'
import { render, screen } from '@testing-library/react'

import Banner from './Banner'

describe('<Banner />', () => {

  it('should render lottie animation section', () => {
    render(<Banner />)

    const banner = screen.getByTestId('banner')

    expect(banner).toHaveClass('ch_banner')

  })

})