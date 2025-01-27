import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '@/styles/render-theme';

describe('<NavLinks />', () => {
  it('should render all navigation items', () => {
    renderTheme(<NavLinks />);

    const navItems = ['Home', 'Projetos', 'Sobre', 'Contato'];
    navItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('should have correct href attributes', () => {
    renderTheme(<NavLinks />);

    const navLinks = {
      Home: '/',
      Projetos: '/projects',
      Sobre: '/about',
      Contato: '/contact',
    };

    Object.entries(navLinks).forEach(([text, href]) => {
      expect(screen.getByText(text).closest('a')).toHaveAttribute('href', href);
    });
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(<NavLinks />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
