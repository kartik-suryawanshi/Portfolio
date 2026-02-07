import { useTypingAnimation } from '@/hooks/useTypingAnimation';

interface TerminalTypingProps {
  command: string;
  prefix?: string;
  promptSymbol?: string;
  typeSpeed?: { min: number; max: number };
  deleteSpeed?: { min: number; max: number };
  pauseAfterType?: number;
  pauseAfterDelete?: number;
  loop?: boolean;
  className?: string;
  showCaret?: boolean;
  caretGlow?: boolean;
}

export function TerminalTyping({
  command,
  prefix = '~/portfolio',
  promptSymbol = '$',
  typeSpeed = { min: 60, max: 120 },
  deleteSpeed = { min: 40, max: 70 },
  pauseAfterType = 1000,
  pauseAfterDelete = 300,
  loop = true,
  className = '',
  showCaret = true,
  caretGlow = true,
}: TerminalTypingProps) {
  const { displayText, isComplete } = useTypingAnimation({
    text: command,
    typeSpeed,
    deleteSpeed,
    pauseAfterType,
    pauseAfterDelete,
    loop,
  });

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm ${className}`}
    >
      {/* Terminal icon */}
      <svg
        className="w-4 h-4 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>

      {/* Terminal text */}
      <span className="font-mono text-sm text-muted-foreground">
        {prefix}{' '}
        <span className="text-primary">{promptSymbol}</span>{' '}
        <span className="text-foreground">{displayText}</span>
      </span>

      {/* Blinking caret */}
      {showCaret && (
        <span
          className={`
            inline-block w-2 h-4 bg-primary animate-blink
            ${caretGlow ? 'shadow-[0_0_8px_hsl(var(--primary)/0.6)]' : ''}
            motion-reduce:animate-none motion-reduce:opacity-100
          `}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
