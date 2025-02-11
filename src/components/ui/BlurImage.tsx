'use client';

import { cn } from '@/lib/utils';
import NextImage from 'next/image';
import { useState } from 'react';

type ImageProps = {
  imageClassName?: string;
  lazy?: boolean;
} & React.ComponentProps<typeof NextImage>;

export function BlurImage(props: ImageProps) {
  const { alt, src, className, imageClassName, lazy = true, ...rest } = props;
  const [isLoading, setIsLoading] = useState(true);

  const loadingAnimate = isLoading ? 'animate-pulse' : '';
  const loadingScale = isLoading ? 'scale-[1.02]' : '';

  return (
    <div className={cn('overflow-hidden', loadingAnimate, className)}>
      <NextImage
        className={cn(loadingScale, imageClassName)}
        style={{
          transition: 'filter 700ms ease, scale 150ms ease',
        }}
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : undefined}
        priority={!lazy}
        quality={100}
        onLoad={() => {
          setIsLoading(false);
        }}
        {...rest}
      />
    </div>
  );
}
