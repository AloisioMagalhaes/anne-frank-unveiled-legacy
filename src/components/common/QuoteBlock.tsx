
import { cn } from "@/lib/utils";

interface QuoteBlockProps {
  text: string;
  source: string;
  className?: string;
}

const QuoteBlock = ({ text, source, className }: QuoteBlockProps) => {
  return (
    <blockquote className={cn("diary-entry my-8", className)}>
      <p className="text-xl mb-4">"{text}"</p>
      <footer className="text-right text-anne-gray-dark">
        — {source}
      </footer>
    </blockquote>
  );
};

export default QuoteBlock;
