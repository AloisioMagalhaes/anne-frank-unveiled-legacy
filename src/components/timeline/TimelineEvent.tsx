
import { cn } from "@/lib/utils";

export interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  isPersonal?: boolean;
  imageSrc?: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const TimelineEvent = ({
  date,
  title,
  description,
  isPersonal = false,
  imageSrc,
  isFirst = false,
  isLast = false
}: TimelineEventProps) => {
  return (
    <div className={cn(
      "timeline-item", 
      isFirst && "pt-0",
      isLast && "border-0 pb-0"
    )}>
      <span className="timeline-date">{date}</span>
      <div className={cn(
        "timeline-dot",
        isPersonal ? "bg-anne-hope" : "bg-anne-blue"
      )}>
        <span className="h-2 w-2 rounded-full bg-white"></span>
      </div>
      
      <div className="ml-6 animate-fade-in">
        <h3 className={cn(
          "text-lg md:text-xl font-serif font-semibold mb-1",
          isPersonal ? "text-anne-hope" : "text-anne-blue"
        )}>
          {title}
        </h3>
        
        <div className="mb-3 space-y-2">
          <p className="text-anne-gray-dark">{description}</p>
        </div>
        
        {imageSrc && (
          <div className="mt-2 mb-4">
            <img 
              src={imageSrc} 
              alt={title} 
              className="rounded-lg shadow-md max-w-full md:max-w-[320px] h-auto" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineEvent;
