type HeroContentProps = {
  title: string;
  subtitle: string;
  content: string;
};

export function HeroContent({ title, subtitle, content }: HeroContentProps) {
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-md text-muted-foreground">{subtitle}</p>
      <p className="text-lg">{content}</p>
    </div>
  );
}
