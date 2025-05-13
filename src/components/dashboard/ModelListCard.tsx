
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database } from "lucide-react";

interface ModelItem {
  name: string;
  app: string;
  fields: number;
  isAdmin: boolean;
}

interface ModelListCardProps {
  models: ModelItem[];
}

export function ModelListCard({ models }: ModelListCardProps) {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-1">
          <CardTitle>Models</CardTitle>
          <CardDescription>Your registered Django models</CardDescription>
        </div>
        <div className="ml-auto bg-muted p-2 rounded-full">
          <Database className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {models.map((model) => (
            <div key={`${model.app}.${model.name}`} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium">{model.name.charAt(0).toUpperCase()}</span>
                </div>
                <div>
                  <div className="font-medium">{model.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {model.app} • {model.fields} fields
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                {model.isAdmin && <Badge variant="outline">Admin</Badge>}
                <Badge className="bg-primary hover:bg-primary/80">View</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
