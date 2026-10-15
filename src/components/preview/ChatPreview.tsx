import Character from '@/components/ui/Character';
import Typography from '@/components/ui/Typography';
import type { CharacterConfig } from '@/constants/character';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

interface Props {
  character: CharacterConfig;
  messages: Message[];
}

/**
 * 앱 지도 화면의 `ChatPanel` 말풍선. 그림자 대신 얇은 테두리를 쓰고,
 * 꼬리 쪽 모서리만 덜 둥글게 해 누가 한 말인지 보이게 한다.
 */
export default function ChatPreview({ character, messages }: Props) {
  return (
    <div className="flex w-full flex-col gap-sm">
      <div className="flex items-center gap-sm">
        <Character config={character} className="h-10 w-10 rounded-full bg-primary-100" />
        <Typography variant="h3" className="text-gray-800">
          동네 챗봇
        </Typography>
      </div>
      {messages.map((message) => {
        const isUser = message.role === 'user';
        return (
          <div
            key={message.text}
            className={`max-w-[80%] rounded-lg px-md py-sm ${
              isUser
                ? 'self-end rounded-br-xs bg-primary-600'
                : 'self-start rounded-bl-xs border border-gray-100 bg-white'
            }`}
          >
            <Typography
              variant="body3"
              className={`leading-relaxed ${isUser ? 'text-white' : 'text-gray-800'}`}
            >
              {message.text}
            </Typography>
          </div>
        );
      })}
      <div className="mt-xs flex items-center gap-sm rounded-full border border-gray-100 bg-white py-xs pr-xs pl-lg">
        <span className="flex-1 py-sm text-sm text-gray-400">궁금한 걸 물어보세요</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden>
            <path d="M12 4 5 11l1.4 1.4L11 7.8V20h2V7.8l4.6 4.6L19 11z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
