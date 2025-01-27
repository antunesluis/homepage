import { screen } from '@testing-library/react';
import { renderTheme } from '@/styles/render-theme';
import { Button } from '.';

describe('<Button />', () => {
  it('renders correctly with default props', () => {
    renderTheme(<Button>Test</Button>);

    const button = screen.getByRole('button', { name: /test/i });
    expect(button).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = renderTheme(<Button variant="primary">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary');

    rerender(<Button variant="secondary">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-secondary');

    rerender(<Button variant="outline">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('border-border');
  });

  it('applies size styles correctly', () => {
    const { rerender } = renderTheme(<Button size="sm">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-8 px-3 text-sm');

    rerender(<Button size="md">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-10 px-4 text-sm');

    rerender(<Button size="lg">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-12 px-6 text-base');
  });

  it('renders with icons', () => {
    const leftIcon = <span data-testid="left-icon" />;
    const rightIcon = <span data-testid="right-icon" />;
    renderTheme(
      <Button leftIcon={leftIcon} rightIcon={rightIcon}>
        With Icons
      </Button>,
    );

    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(<Button />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
