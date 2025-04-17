
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  type: string;
  downloadUrl?: string;
  externalUrl?: string;
}

const ResourceCard = ({ 
  title, 
  description, 
  type, 
  downloadUrl, 
  externalUrl 
}: ResourceCardProps) => {
  return (
    <Card className="vintage-paper h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-anne-sepia" />
          <span className="text-xs uppercase tracking-wider text-anne-gray-dark">
            {type}
          </span>
        </div>
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
      </CardContent>
      
      <CardFooter className="pt-2 flex flex-wrap gap-2">
        {downloadUrl && (
          <Button variant="outline" size="sm" className="text-anne-blue">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        )}
        {externalUrl && (
          <Button variant="outline" size="sm" className="text-anne-blue">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Resource
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
