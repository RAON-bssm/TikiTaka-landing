import fireIcon from '@/assets/icons/fire.svg';
import Icon from '@/components/ui/Icon';
import Typography from '@/components/ui/Typography';

interface Team {
  name: string;
  score: number;
}

interface Props {
  team1: Team;
  team2: Team;
  className?: string;
}

/** 앱 `components/ui/MatchCard.tsx`를 옮긴 장식용 카드. team1은 파랑, team2는 주황. */
export default function MatchCard({ team1, team2, className = '' }: Props) {
  const leaderIsTeam1 = team1.score > team2.score;
  const leader = leaderIsTeam1 ? team1 : team2;

  return (
    <div
      className={`flex w-[250px] flex-col items-center gap-lg rounded-md border border-gray-100 bg-white px-lg py-md ${className}`}
    >
      <div
        className={`flex items-center gap-xs rounded-full px-md py-xs ${
          leaderIsTeam1 ? 'bg-secondary-100' : 'bg-primary-100'
        }`}
      >
        <Icon
          src={fireIcon}
          className={`h-4 w-4 ${leaderIsTeam1 ? 'bg-secondary-500' : 'bg-primary-600'}`}
        />
        <span className="text-xs font-medium text-gray-700">{leader.name}가 우세합니다!</span>
      </div>

      <div className="flex w-full items-center justify-center gap-md">
        <TeamScore team={team1} nameClass="text-secondary-500" />
        <Typography as="span" variant="h4" className="text-gray-700">
          VS
        </Typography>
        <TeamScore team={team2} nameClass="text-primary-600" />
      </div>
    </div>
  );
}

function TeamScore({ team, nameClass }: { team: Team; nameClass: string }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-xs">
      <span className={`text-xs font-medium ${nameClass}`}>{team.name}</span>
      <Typography as="span" variant="h2" className="text-center text-gray-800">
        {team.score}점
      </Typography>
    </div>
  );
}
