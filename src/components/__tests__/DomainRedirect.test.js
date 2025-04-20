import { render, screen } from '@testing-library/react';
import DomainRedirect from '../js/url_checks';

describe('DomainRedirect', () => {
  it('should not render in test environment', () => {
    render(<DomainRedirect />);
    expect(
      screen.queryByRole('alert')
    ).not.toBeInTheDocument();
  });
});