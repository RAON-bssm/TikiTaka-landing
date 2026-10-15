import pointIcon from '@/assets/icons/point.svg';
import Character from '@/components/ui/Character';
import Typography from '@/components/ui/Typography';
import type { CharacterConfig } from '@/constants/character';

const TABS = ['머리', '눈', '입', '코스튬'];

interface Props {
  characters: CharacterConfig[];
  point: number;
}

/** 앱 캐릭터 꾸미기·상점의 `CategoryTabs` + 아이템 그리드 + `PointBadge`. */
export default function ShopPreview({ characters, point }: Props) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-end justify-between gap-sm">
        <div className="flex gap-sm">
          {TABS.map((label, i) => (
            <Typography
              key={label}
              as="span"
              variant={i === 3 ? 'h4' : 'body3'}
              className={`w-[60px] rounded-t-lg py-sm text-center ${
                i === 3 ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-primary-600'
              }`}
            >
              {label}
            </Typography>
          ))}
        </div>
        <span className="mb-sm hidden items-center gap-xs rounded-full bg-secondary-100 px-md py-xs sm:flex">
          <img src={pointIcon} alt="" className="h-3 w-3" />
          <Typography as="span" variant="body3" className="text-secondary-600">
            {point.toLocaleString()}
          </Typography>
        </span>
      </div>
      <ul className="grid grid-cols-2 gap-md rounded-tr-lg rounded-b-lg border border-gray-100 bg-white p-lg sm:grid-cols-4">
        {characters.map((config, i) => (
          <li
            key={`${config.hairBack}-${config.clothing}`}
            className={`overflow-hidden rounded-lg pt-sm ${
              i === 1 ? 'bg-primary-100 ring-2 ring-primary-600' : 'bg-gray-100'
            }`}
          >
            <Character
              config={config}
              label="꾸민 캐릭터 예시"
              className="w-full translate-y-[6%] transition-transform duration-300 hover:translate-y-0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
