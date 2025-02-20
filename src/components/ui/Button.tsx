import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import Link from 'next/link';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-[1px]',
  {
    variants: {
      variant: {
        primary:
          'bg-primary hover:bg-primary-hover text-white focus-visible:ring-primary/50',
        secondary:
          'bg-secondary hover:bg-secondary-hover text-white focus-visible:ring-secondary/50',
        outline:
          'border border-border hover:border-border-hover hover:bg-muted bg-transparent',
        ghost: 'hover:bg-surface bg-transparent',
        link: 'text-primary hover:text-primary-hover underline-offset-4 hover:underline bg-transparent p-0 h-auto',
        danger:
          'bg-accent hover:bg-accent-hover text-white focus-visible:ring-accent/50',
      },
      size: {
        sm: 'h-8 px-3 text-xs sm:text-sm gap-1.5 rounded-md',
        md: 'h-10 px-4 text-sm sm:text-base gap-2',
        lg: 'h-10 px-6 text-base md:h-12 sm:text-lg gap-2.5',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      leftIcon,
      rightIcon,
      children,
      href,
      external = false,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    if (href) {
      const LinkComponent = external ? 'a' : Link;

      return (
        <LinkComponent
          href={href}
          className={cn(
            buttonVariants({ variant, size, fullWidth, className }),
          )}
          {...(external && {
            target: '_blank',
            rel: 'noopener noreferrer',
          })}
        >
          {leftIcon}
          {children}
          {rightIcon}
        </LinkComponent>
      );
    }

    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
