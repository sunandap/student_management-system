
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";

interface AppItem {
  name: string;
  models: number;
  isInstalled: boolean;
}

interface AppListCardProps {
  apps: AppItem[];
}

export function AppListCard({ apps }: AppListCardProps) {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-1">
          <CardTitle>Applications</CardTitle>
          <CardDescription>Your Django applications</CardDescription>
        </div>
        <div className="ml-auto bg-muted p-2 rounded-full">
          <Package className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {apps.map((app) => (
            <div key={app.name} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium">{app.name.charAt(0).toUpperCase()}</span>
                </div>
                <div>
                  <div className="font-medium">{app.name}</div>
                  <div className="text-sm text-muted-foreground">{app.models} models</div>
                </div>
              </div>
              <div>
                {app.isInstalled ? (
                  <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">Installed</Badge>
                ) : (
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">Not Installed</Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
