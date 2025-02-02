import { Container } from '@/components/ui/Container';

export type FooterProps = {
  text: string;
};

export function Footer({ text }: FooterProps) {
  return (
    <footer className="w-full py-6 bg-white border-t border-border/40 dark:border-0 dark:bg-background">
      <Container>
        <div className="text-center">
          <p className="text-sm text-muted-foreground/80">{text}</p>
        </div>
      </Container>
    </footer>
  );
}
