'use client';

import { UsesCategoryComponent } from '@/components/layout/UsesCategory';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { UsesSection } from '@/types/content';

export function Uses({ data }: { data: UsesSection }) {
  return (
    <SectionContainer id="uses">
      <Container>
        {/* Cabeçalho da Seção */}
        <SectionHeader title={data.title} subtitle={data.subtitle} />

        {/* Categorias */}
        {data.categories.map((category, index) => (
          <UsesCategoryComponent key={index} category={category} />
        ))}
      </Container>
    </SectionContainer>
  );
}
