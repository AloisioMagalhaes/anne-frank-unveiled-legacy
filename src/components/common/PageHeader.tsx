
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, className }: PageHeaderProps) => {
  return (
    <header className={cn("mb-8 md:mb-12 animate-fade-in", className)}>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anne-ink mb-2 md:mb-4 tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-anne-gray-dark font-serif italic">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default PageHeader;
