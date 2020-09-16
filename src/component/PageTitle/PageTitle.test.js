import React from 'react';
import { render, screen } from '@testing-library/react';

import PageTitle from './PageTitle'

describe('<PageTitle />', () => {
  let getByText, rerender;
  beforeEach(() => {
    ({ getByText, rerender } = render(<PageTitle />));
  });

  it('should not render without props', () => {

    expect(screen.textContent).toBe(undefined);

  });

  it('should render the title', () => {
    rerender(<PageTitle title="Superpowers for video content creators" />);

    const title = getByText(/video content creators/i);
    expect(title).toBeInTheDocument();

  });


})