'use client';

import { UsesItemCard } from '@/components/ui/cards/UsesItemCard';
import { Heading, Paragraph } from '@/components/ui/Typography';
import { UsesCategory } from '@/types/content';

type UsesCategoryProps = {
  category: UsesCategory;
};

export function UsesCategoryComponent({ category }: UsesCategoryProps) {
  return (
    <div className="mb-12">
      <Heading level="h2" className="mb-4">
        {category.title}
      </Heading>

      {category.description && (
        <Paragraph variant="muted" className="mb-6">
          {category.description}
        </Paragraph>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {category.items.map((item, index) => (
          <UsesItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
