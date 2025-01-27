import { screen } from '@testing-library/react';
import { renderTheme } from '@/styles/render-theme';
import { ThemeToggle } from '.';

describe('<ThemeToggle />', () => {
  it('should render theme toggle button', () => {
    renderTheme(<ThemeToggle />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(<ThemeToggle />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
