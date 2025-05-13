
import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Database,
  LayoutDashboard,
  Settings,
  Users,
  BookOpen,
  UserCheck,
  CalendarCheck,
  GraduationCap,
  Command,
} from "lucide-react";

export function Sidebar() {
  return (
    <div className="hidden lg:flex lg:flex-col bg-card text-card-foreground w-64 p-4 border-r shadow-sm">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="flex items-center justify-center w-8 h-8 rounded-sm bg-primary">
          <Command className="w-5 h-5 text-primary-foreground" />
        </div>
        <h1 className="text-xl font-bold">Student Management</h1>
      </div>
      
      <nav className="space-y-1">
        <NavItem to="/" icon={<LayoutDashboard className="h-4 w-4" />} label="Dashboard" />
        <NavItem to="/students" icon={<Users className="h-4 w-4" />} label="Students" />
        <NavItem to="/courses" icon={<BookOpen className="h-4 w-4" />} label="Courses" />
        <NavItem to="/staff" icon={<GraduationCap className="h-4 w-4" />} label="Staff" />
        <NavItem to="/attendance" icon={<CalendarCheck className="h-4 w-4" />} label="Attendance" />
        <NavItem to="/settings" icon={<Settings className="h-4 w-4" />} label="Settings" />
      </nav>
    </div>
  );
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

function NavItem({ to, icon, label }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
          isActive
            ? "bg-primary text-primary-foreground font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
        )
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
