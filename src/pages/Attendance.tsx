
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarIcon, Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Attendance = () => {
  // Mock data - would be fetched from Django backend in a real application
  const attendanceRecords = [
    { id: 1, studentName: "John Doe", course: "Computer Science", date: "2023-05-10", status: "Present" },
    { id: 2, studentName: "Jane Smith", course: "Information Technology", date: "2023-05-10", status: "Present" },
    { id: 3, studentName: "Alex Johnson", course: "Data Science", date: "2023-05-10", status: "Absent" },
    { id: 4, studentName: "Samantha Lee", course: "Artificial Intelligence", date: "2023-05-10", status: "Present" },
    { id: 5, studentName: "Michael Brown", course: "Computer Science", date: "2023-05-10", status: "Absent" },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Attendance Management</h1>
        <p className="text-muted-foreground">View and manage student attendance</p>
      </div>

      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Take Attendance</CardTitle>
          <Button className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" /> Select Date
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div>
              <label className="text-sm font-medium">Select Course:</label>
              <select className="ml-2 border p-1 rounded">
                <option>Computer Science</option>
                <option>Information Technology</option>
                <option>Data Science</option>
                <option>Artificial Intelligence</option>
              </select>
            </div>
            <Button>Load Students</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Attendance Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.id}</TableCell>
                  <TableCell>{record.studentName}</TableCell>
                  <TableCell>{record.course}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>
                    {record.status === "Present" ? (
                      <Badge className="bg-green-100 text-green-800">Present</Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800">Absent</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="bg-green-500 text-white hover:bg-green-600">
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="bg-red-500 text-white hover:bg-red-600">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Attendance;
