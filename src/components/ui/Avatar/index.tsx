import Image from 'next/image';

type AvatarProps = {
  src: string;
  alt: string;
};

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-border dark:border-border-hover relative">
      <Image src={src} alt={alt} fill priority className="object-cover" />
    </div>
  );
}
