import { resolveLayers, type CharacterConfig } from '@/constants/character';

interface CharacterProps {
  config: CharacterConfig;
  className?: string;
  label?: string;
}

export default function Character({ config, className = '', label }: CharacterProps) {
  const layers = resolveLayers(config);

  return (
    <div
      role="img"
      aria-label={label ?? '티키타카 캐릭터'}
      className={`relative aspect-square ${className}`}
    >
      {layers.map((src) => (
        <img
          key={src}
          src={src}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain select-none"
        />
      ))}
    </div>
  );
}
