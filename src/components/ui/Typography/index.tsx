import { forwardRef, HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
      h6: 'scroll-m-20 text-base font-semibold tracking-tight',
      p: 'leading-7',
      lead: 'text-xl text-foreground/80',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-foreground/60',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    font: {
      default: 'font-sans',
      mono: 'font-mono',
      poppins: 'font-poppins',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    gradient: {
      true: 'bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent',
    },
  },
  defaultVariants: {
    variant: 'p',
    weight: 'normal',
    font: 'default',
    align: 'left',
  },
});

interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: string;
  className?: string;
  variant?: string;
  font?: 'default' | 'mono' | 'poppins';
  align?: string;
  gradient?: boolean;
  weight?: string;
}

// Componente base
const TypographyBase = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      className,
      variant,
      weight,
      font,
      align,
      gradient,
      as,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = as || (variant?.match(/h[1-6]/) ? variant : 'p');

    return (
      <Component
        ref={ref}
        className={cn(
          typographyVariants({ variant, weight, font, align, gradient }),
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

// Criando o componente composto
const Typography = Object.assign(TypographyBase, {
  h1: forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant' | 'as'>>(
    (props, ref) => (
      <TypographyBase ref={ref} variant="h1" as="h1" {...props} />
    ),
  ),
  h2: forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant' | 'as'>>(
    (props, ref) => (
      <TypographyBase ref={ref} variant="h2" as="h2" {...props} />
    ),
  ),
  h3: forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant' | 'as'>>(
    (props, ref) => (
      <TypographyBase ref={ref} variant="h3" as="h3" {...props} />
    ),
  ),
  h4: forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant' | 'as'>>(
    (props, ref) => (
      <TypographyBase ref={ref} variant="h4" as="h4" {...props} />
    ),
  ),
  p: forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant' | 'as'>>(
    (props, ref) => <TypographyBase ref={ref} variant="p" as="p" {...props} />,
  ),
  lead: forwardRef<
    HTMLParagraphElement,
    Omit<TypographyProps, 'variant' | 'as'>
  >((props, ref) => (
    <TypographyBase ref={ref} variant="lead" as="p" {...props} />
  )),
  large: forwardRef<HTMLDivElement, Omit<TypographyProps, 'variant' | 'as'>>(
    (props, ref) => (
      <TypographyBase ref={ref} variant="large" as="div" {...props} />
    ),
  ),
  small: forwardRef<HTMLSpanElement, Omit<TypographyProps, 'variant' | 'as'>>(
    (props, ref) => (
      <TypographyBase ref={ref} variant="small" as="span" {...props} />
    ),
  ),
  muted: forwardRef<
    HTMLParagraphElement,
    Omit<TypographyProps, 'variant' | 'as'>
  >((props, ref) => (
    <TypographyBase ref={ref} variant="muted" as="p" {...props} />
  )),
});

TypographyBase.displayName = 'Typography';
Typography.h1.displayName = 'Typography.h1';
Typography.h2.displayName = 'Typography.h2';
Typography.h3.displayName = 'Typography.h3';
Typography.h4.displayName = 'Typography.h4';
Typography.p.displayName = 'Typography.p';
Typography.lead.displayName = 'Typography.lead';
Typography.large.displayName = 'Typography.large';
Typography.small.displayName = 'Typography.small';
Typography.muted.displayName = 'Typography.muted';

export { Typography, typographyVariants };
