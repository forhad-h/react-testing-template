import React from 'react'
import { render, screen } from '@testing-library/react'

import PageDesc from './PageDesc'

describe('<PageDesc />', () => {

  let getAllByTestId, rerender;
  beforeEach(() => {
    ({ getAllByTestId, rerender } = render(<PageDesc />));
  });

  it('should not render without props', () => {

    expect(screen.textContent).toBe(undefined);

  });

  it('should render page description', () => {
    rerender(<PageDesc descArr={['Line one',
      'Line two',
      'Line three']} />)

    const pageDesc = getAllByTestId('each-item')

    expect(pageDesc).toHaveLength(3)

  })

})
