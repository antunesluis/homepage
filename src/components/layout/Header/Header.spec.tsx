import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { Header } from '.';
import { renderTheme } from '@/styles/render-theme';

describe('<Header />', () => {
  it('should render the header with all components', () => {
    renderTheme(<Header />);

    expect(screen.getByText('Luis Fernando Antunes')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /modo/i })).toBeInTheDocument();
  });

  it('should have the correct link to home', () => {
    renderTheme(<Header />);

    const homeLink = screen.getByText('Luis Fernando Antunes').closest('a');
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(<Header />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
