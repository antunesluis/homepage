#!/bin/bash

# Checa se o nome do componente foi fornecido
if [ -z "$1" ]; then
  echo "Por favor, forneça o nome do componente."
  echo "Uso: ./create-component.sh NomeDoComponente"
  exit 1
fi

# Define o nome do componente e caminho
COMPONENT_NAME=$1
COMPONENT_DIR="./src/components/ui/$COMPONENT_NAME"

# Cria a estrutura de diretórios
mkdir -p "$COMPONENT_DIR"

# Conteúdo do componente TypeScript
COMPONENT_CONTENT="import { cn } from '@/lib/utils'

interface ${COMPONENT_NAME}Props {
  children: React.ReactNode
  className?: string
}

export function ${COMPONENT_NAME}({ children, className }: ${COMPONENT_NAME}Props) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  )
}
"

# Conteúdo do arquivo de testes
TEST_CONTENT="import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ${COMPONENT_NAME} } from '.'

describe('<${COMPONENT_NAME} />', () => {
  it('renders correctly', () => {
    render(<${COMPONENT_NAME}>Test Component</${COMPONENT_NAME}>)
    expect(screen.getByText('Test Component')).toBeInTheDocument()
  })
})
"

# Conteúdo do arquivo Storybook
STORYBOOK_CONTENT="import type { Meta, StoryObj } from '@storybook/react'
import { ${COMPONENT_NAME} } from '.'

const meta: Meta<typeof ${COMPONENT_NAME}> = {
  title: 'UI/${COMPONENT_NAME}',
  component: ${COMPONENT_NAME},
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof ${COMPONENT_NAME}>

export const Default: Story = {
  args: {
    children: '${COMPONENT_NAME} Component'
  }
}
"

# Cria os arquivos
echo "$COMPONENT_CONTENT" >"$COMPONENT_DIR/index.tsx"
echo "$TEST_CONTENT" >"$COMPONENT_DIR/${COMPONENT_NAME}.spec.tsx"
echo "$STORYBOOK_CONTENT" >"$COMPONENT_DIR/${COMPONENT_NAME}.stories.tsx"

# Formata os arquivos
npx eslint "$COMPONENT_DIR"/*.tsx --fix
npx eslint "$COMPONENT_DIR"/*.ts --fix

echo "Componente $COMPONENT_NAME criado com sucesso em $COMPONENT_DIR."
