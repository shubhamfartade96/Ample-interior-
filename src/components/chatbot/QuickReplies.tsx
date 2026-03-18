'use client';

type QuickRepliesProps = {
  replies: string[];
  onSelect: (reply: string) => void;
};

export function QuickReplies({ replies, onSelect }: QuickRepliesProps) {
  if (!replies.length) return null;

  return (
    <div className="flex flex-wrap gap-2 px-4 py-2">
      {replies.map(reply => (
        <button
          key={reply}
          onClick={() => onSelect(reply)}
          className="rounded-full border border-gray-700 bg-gray-800 px-4 py-1.5 text-sm text-gray-300 transition-colors hover:bg-gray-700"
        >
          {reply}
        </button>
      ))}
    </div>
  );
}
