import Typography from '@/components/ui/Typography';

interface Team {
  name: string;
  score: number;
}

interface Props {
  myTeam: Team;
  opponentTeam: Team;
}

/** 앱 홈의 `DistrictBattleStatus`. 막대는 우리 팀 점수 비율만큼 채운다. */
export default function BattleStatus({ myTeam, opponentTeam }: Props) {
  const total = myTeam.score + opponentTeam.score;
  const myRatio = total === 0 ? 0.5 : myTeam.score / total;
  const diff = myTeam.score - opponentTeam.score;

  return (
    <div className="flex w-full flex-col items-center gap-lg rounded-md border border-gray-100 bg-white p-lg">
      <Typography variant="h4" className="text-gray-600">
        우리 팀의 현재 상황
      </Typography>
      <div className="flex w-full items-center justify-center gap-2xl">
        <TeamColumn label="우리팀" team={myTeam} />
        <Typography as="span" variant="h3" className="text-primary-600">
          VS
        </Typography>
        <TeamColumn label="상대팀" team={opponentTeam} />
      </div>
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div className="bg-primary-600" style={{ flex: myRatio }} />
      </div>
      <Typography variant="body3" className="text-gray-600">
        <span className="text-primary-600">{diff > 0 ? `+${diff}점` : `${-diff}점`}</span>
        {diff > 0 ? ' 앞서나가고 있어요!' : ' 뒤지고 있어요'}
      </Typography>
    </div>
  );
}

function TeamColumn({ label, team }: { label: string; team: Team }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-xs">
      <Typography variant="caption" className="text-gray-500">
        {label}
      </Typography>
      <Typography variant="h1" className="text-center text-gray-800">
        {team.name}
      </Typography>
      <Typography variant="h3" className="text-primary-600">
        {team.score}
      </Typography>
    </div>
  );
}
