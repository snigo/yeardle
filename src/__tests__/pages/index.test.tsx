import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import IndexPage from '@internal/pages/index';

describe('Index page', () => {
  test('renders a heading', () => {
    render(<IndexPage />);

    const heading = screen.getByRole('heading', {
      name: /next app/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
