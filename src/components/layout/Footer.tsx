import { Container } from '@/components/shared/Container';
import { Paragraph } from '@/components/ui/Typography';

export type FooterProps = {
  text: string;
};

export function Footer({ text }: FooterProps) {
  return (
    <footer className="w-full py-6 bg-white border-t border-border/40 dark:border-0 dark:bg-background">
      <Container>
        <div className="text-center">
          <Paragraph variant="muted">{text}</Paragraph>
        </div>
      </Container>
    </footer>
  );
}
