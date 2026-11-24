import Typography from '@/components/ui/Typography';

// 미리보기 안의 동 이름·점수·포인트는 화면 예시다.

/** 앱 `map/challenge-result`의 `VersusPhotos`. 내 사진(주황)과 지키던 대표 사진(파랑)을 기울여 맞붙인다. */
export function ChallengeVersus() {
  return (
    <div className="flex w-full flex-col items-center gap-lg">
      <Typography
        as="span"
        variant="h4"
        className="rotate-[-3deg] rounded-full bg-primary-600 px-md py-xs text-white"
      >
        땅 차지!
      </Typography>
      <div className="relative flex w-full gap-lg px-sm">
        <Fighter tone="me" name="나" score={88} win />
        <Fighter tone="rival" name="지키던 대표" score={81} />
        <span className="absolute inset-0 flex items-center justify-center pb-2xl">
          <span className="flex h-14 w-14 rotate-[-8deg] items-center justify-center rounded-full border-4 border-white bg-gray-800 shadow-lg">
            <Typography as="span" variant="h3" className="text-white">
              VS
            </Typography>
          </span>
        </span>
      </div>
    </div>
  );
}

function Fighter({
  tone,
  name,
  score,
  win,
}: {
  tone: 'me' | 'rival';
  name: string;
  score: number;
  win?: boolean;
}) {
  const me = tone === 'me';
  return (
    <div
      className={`flex flex-1 flex-col gap-sm ${me ? 'rotate-[-3deg]' : 'rotate-[3deg] opacity-60'}`}
    >
      <div
        className={`aspect-[3/4] w-full rounded-md border-4 border-white shadow-md ${
          me
            ? 'bg-linear-to-br from-primary-300 to-primary-600'
            : 'bg-linear-to-br from-secondary-200 to-secondary-500'
        }`}
      />
      <div className="flex flex-col items-center gap-xs">
        <Typography as="span" variant="caption" className="text-gray-500">
          {name}
        </Typography>
        <Typography
          as="span"
          variant="h2"
          className={me ? 'text-primary-600' : 'text-secondary-500'}
        >
          {score}점{win && ' 승'}
        </Typography>
      </div>
    </div>
  );
}

/** 앱 `TerritorySheet` + `TerritoryStats`. 지도에서 동을 누르면 뜨는 시트다. */
export function TerritorySheetPreview() {
  return (
    <div className="flex w-full flex-col gap-lg rounded-md border border-gray-100 bg-white p-lg">
      <div className="flex items-center gap-sm">
        <Typography
          as="span"
          variant="h4"
          className="rounded-full bg-secondary-100 px-md py-xs text-secondary-500"
        >
          상대 땅
        </Typography>
        <Typography as="span" variant="h2" className="text-gray-800">
          윗동네 1동
        </Typography>
      </div>
      <div className="flex flex-col gap-xs">
        <Typography variant="caption" className="text-gray-400">
          이 땅의 미션
        </Typography>
        <Typography variant="body1" className="text-gray-800">
          노을 지는 골목
        </Typography>
      </div>
      <div className="flex rounded-sm border border-gray-200 bg-gray-50 py-md">
        <Stat label="방어 점수" value="81" highlight />
        <span className="w-px bg-gray-200" />
        <Stat label="땅값" value="1,200" />
        <span className="w-px bg-gray-200" />
        <Stat label="통행료" value="120" />
      </div>
      <span className="flex h-12 items-center justify-center rounded-sm bg-primary-600">
        <Typography as="span" variant="h3" className="text-white">
          콕! 도전하기
        </Typography>
      </span>
    </div>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-sm">
      <Typography variant="caption" className="text-gray-400">
        {label}
      </Typography>
      <Typography variant="h2" className={highlight ? 'text-primary-600' : 'text-gray-600'}>
        {value}
      </Typography>
    </div>
  );
}

/** 앱 `WageDialog`. 매일 가진 땅값에 비례한 일급이 들어온다. */
export function WagePreview() {
  return (
    <div className="flex w-full flex-col gap-xl rounded-xl border border-gray-100 bg-white p-xl">
      <div className="flex flex-col items-center gap-sm">
        <Typography variant="h2" className="text-gray-800">
          오늘의 일급이 들어왔어요
        </Typography>
        <Typography variant="h1" className="text-primary-600">
          +1,350 P
        </Typography>
      </div>
      <div className="flex flex-col gap-sm rounded-md bg-gray-50 p-lg">
        <Row label="가진 땅" value="3곳" />
        <Row label="땅값 합계" value="2,700 P" />
        <Row label="지급 비율" value="50%" />
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <Typography as="span" variant="body3" className="text-gray-500">
        {label}
      </Typography>
      <Typography as="span" variant="body3" className="text-gray-800">
        {value}
      </Typography>
    </div>
  );
}

/** 앱 랭킹 탭의 `TeamRankingRow`. 구(팀)마다 가진 땅값을 합쳐 순위를 매긴다. */
export function TeamRankingPreview() {
  const teams = [
    { name: '우리 구', count: 7, price: 9840 },
    { name: '옆 구', count: 6, price: 8120 },
    { name: '윗 구', count: 4, price: 5310 },
  ];
  return (
    <ol className="w-full divide-y divide-gray-100 rounded-md border border-gray-100 bg-white">
      {teams.map((team, i) => (
        <li key={team.name} className="flex items-center gap-md px-lg py-lg">
          <Typography as="span" variant="body1" className="w-6 text-center text-primary-600">
            {i + 1}
          </Typography>
          <Typography as="span" variant="body1" className="flex-1 text-gray-800">
            {team.name} · 땅 {team.count}곳
          </Typography>
          <Typography as="span" variant="body1" className="text-primary-600">
            {team.price.toLocaleString()}
          </Typography>
        </li>
      ))}
    </ol>
  );
}
