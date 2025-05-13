
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ModelListCard } from "@/components/dashboard/ModelListCard";
import { AppListCard } from "@/components/dashboard/AppListCard";
import { Database, Package, Server, Users } from "lucide-react";

const Index = () => {
  // Mock data - would be fetched from Django backend in a real application
  const stats = {
    models: 15,
    apps: 7,
    endpoints: 23,
    users: 42
  };

  const mockModels = [
    { name: "User", app: "auth", fields: 8, isAdmin: true },
    { name: "Product", app: "store", fields: 12, isAdmin: true },
    { name: "Order", app: "store", fields: 15, isAdmin: true },
    { name: "Category", app: "store", fields: 5, isAdmin: false },
    { name: "Profile", app: "accounts", fields: 10, isAdmin: true },
  ];

  const mockApps = [
    { name: "admin", models: 1, isInstalled: true },
    { name: "auth", models: 3, isInstalled: true },
    { name: "contenttypes", models: 1, isInstalled: true },
    { name: "sessions", models: 1, isInstalled: true },
    { name: "store", models: 4, isInstalled: true },
    { name: "accounts", models: 2, isInstalled: true },
    { name: "api", models: 0, isInstalled: true },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your Django app dashboard</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Models" 
          value={stats.models} 
          icon={<Database className="h-4 w-4" />} 
          description="Registered Django models"
        />
        <StatCard 
          title="Applications" 
          value={stats.apps} 
          icon={<Package className="h-4 w-4" />} 
          description="Installed Django apps"
        />
        <StatCard 
          title="API Endpoints" 
          value={stats.endpoints} 
          icon={<Server className="h-4 w-4" />} 
          description="Available API routes"
        />
        <StatCard 
          title="Users" 
          value={stats.users} 
          icon={<Users className="h-4 w-4" />} 
          description="Registered users"
          trend={{ value: 12, label: "this month", positive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-6 mt-8">
        <ModelListCard models={mockModels} />
        <AppListCard apps={mockApps} />
      </div>
    </DashboardLayout>
  );
};

export default Index;
