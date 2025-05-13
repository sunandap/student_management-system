
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CalendarCheck, GraduationCap, Users } from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer 
} from 'recharts';

const Index = () => {
  // Mock data - would be fetched from Django backend in a real application
  const stats = {
    students: 450,
    courses: 8,
    staff: 35,
    attendanceRate: 92
  };

  const courseEnrollmentData = [
    { name: "Computer Science", students: 120 },
    { name: "Information Technology", students: 100 },
    { name: "Data Science", students: 80 },
    { name: "Artificial Intelligence", students: 60 },
    { name: "Cybersecurity", students: 50 },
    { name: "Web Development", students: 40 },
  ];

  const recentActivity = [
    { id: 1, action: "New student registered", date: "10 minutes ago", user: "Sarah Johnson" },
    { id: 2, action: "Attendance marked for CS101", date: "1 hour ago", user: "Prof. Williams" },
    { id: 3, action: "New course added", date: "3 hours ago", user: "Admin" },
    { id: 4, action: "Staff meeting scheduled", date: "Yesterday", user: "Dean Roberts" },
    { id: 5, action: "Exam results published", date: "2 days ago", user: "Prof. Anderson" },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the Student Management System</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Students" 
          value={stats.students} 
          icon={<Users className="h-4 w-4" />} 
          description="Registered students"
          trend={{ value: 5, label: "this month", positive: true }}
        />
        <StatCard 
          title="Courses" 
          value={stats.courses} 
          icon={<BookOpen className="h-4 w-4" />} 
          description="Active courses"
        />
        <StatCard 
          title="Staff Members" 
          value={stats.staff} 
          icon={<GraduationCap className="h-4 w-4" />} 
          description="Academic staff"
        />
        <StatCard 
          title="Attendance Rate" 
          value={`${stats.attendanceRate}%`} 
          icon={<CalendarCheck className="h-4 w-4" />} 
          description="Average attendance"
          trend={{ value: 2, label: "this week", positive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-6 mt-8">
        <Card className="col-span-6 md:col-span-4">
          <CardHeader>
            <CardTitle>Course Enrollment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={courseEnrollmentData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <RechartsTooltip />
                  <Bar dataKey="students" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-6 md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="border-b pb-2 last:border-0">
                  <div className="font-medium">{activity.action}</div>
                  <div className="text-sm text-muted-foreground">
                    by {activity.user} · {activity.date}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
