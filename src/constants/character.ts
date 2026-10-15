// 앱(TikiTaka-app)의 캐릭터 파츠 에셋을 그대로 쓴다. 모든 파츠는 같은 1:1 캔버스에 정위치로
// export 되어 있어 같은 크기로 겹치기만 하면 정렬이 맞는다. 레이어 순서도 앱의 `LAYERS`와 같다.

const ASSETS = import.meta.glob<string>('../assets/character/**/*.webp', {
  eager: true,
  import: 'default',
});

export type EyesColor = 'GREEN' | 'ORANGE' | 'PINK' | 'SKY' | 'BLUE';
export type HairColor = 'BLACK' | 'BLOND' | 'BROWN' | 'PINK';

export interface CharacterConfig {
  body: string;
  eyes: string;
  eyesColor: EyesColor;
  mouth: string;
  hairBack: string;
  hairFront: string;
  hairColor: HairColor;
  clothing?: string;
  accessory?: string;
}

function asset(path: string): string | undefined {
  return ASSETS[`../assets/character/${path}.webp`];
}

/** 아래 → 위 순서로 그릴 이미지 목록. 매핑된 에셋이 없는 파츠는 건너뛴다. */
export function resolveLayers(config: CharacterConfig): string[] {
  const hair = config.hairColor.toLowerCase();
  const eyes = config.eyesColor.toLowerCase();
  const paths = [
    `hair-back/${config.hairBack}/${hair}`,
    `body/${config.body}`,
    config.clothing && `clothing/${config.clothing}`,
    `eyes/${config.eyes}/${eyes}`,
    `mouth/${config.mouth}`,
    `hair-front/${config.hairFront}/${hair}`,
    config.accessory && `accessory/${config.accessory}`,
    `hair-highlights/${eyes}`,
  ];
  return paths.flatMap((path) => {
    const src = path ? asset(path) : undefined;
    return src ? [src] : [];
  });
}

/** 앱 홈 배너의 기본 캐릭터. */
export const HERO_CHARACTER: CharacterConfig = {
  body: 'body-02',
  eyes: 'eyes-01',
  eyesColor: 'ORANGE',
  mouth: 'mouth-01',
  hairBack: 'hair-back-long',
  hairFront: 'hair-front-basic',
  hairColor: 'BLACK',
  clothing: 'clothing-01',
};

export const SHOWCASE_CHARACTERS: CharacterConfig[] = [
  {
    body: 'body-01',
    eyes: 'eyes-01',
    eyesColor: 'SKY',
    mouth: 'mouth-02',
    hairBack: 'hair-back-bob',
    hairFront: 'hair-front-basic',
    hairColor: 'BROWN',
    clothing: 'clothing-03',
    accessory: 'accessory-glasses',
  },
  {
    body: 'body-02',
    eyes: 'eyes-01',
    eyesColor: 'PINK',
    mouth: 'mouth-01',
    hairBack: 'hair-back-low-pigtails',
    hairFront: 'hair-front-basic',
    hairColor: 'PINK',
    clothing: 'clothing-05',
    accessory: 'accessory-red-glasses-hair-pin',
  },
  {
    body: 'body-01',
    eyes: 'eyes-01',
    eyesColor: 'GREEN',
    mouth: 'mouth-01',
    hairBack: 'hair-back-short',
    hairFront: 'hair-front-basic',
    hairColor: 'BLOND',
    clothing: 'clothing-02',
    accessory: 'accessory-plaster',
  },
  {
    body: 'body-02',
    eyes: 'eyes-01',
    eyesColor: 'BLUE',
    mouth: 'mouth-02',
    hairBack: 'hair-back-side-tail',
    hairFront: 'hair-front-basic',
    hairColor: 'BLACK',
    clothing: 'clothing-06',
  },
];
