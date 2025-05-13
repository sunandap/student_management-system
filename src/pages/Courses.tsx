
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";

const Courses = () => {
  // Mock data - would be fetched from Django backend in a real application
  const courses = [
    { id: 1, name: "Computer Science", duration: "4 years", totalSeats: 120, filledSeats: 85 },
    { id: 2, name: "Information Technology", duration: "4 years", totalSeats: 100, filledSeats: 72 },
    { id: 3, name: "Data Science", duration: "3 years", totalSeats: 80, filledSeats: 65 },
    { id: 4, name: "Artificial Intelligence", duration: "4 years", totalSeats: 60, filledSeats: 42 },
    { id: 5, name: "Cybersecurity", duration: "3 years", totalSeats: 50, filledSeats: 38 },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Courses Management</h1>
        <p className="text-muted-foreground">Manage all courses in the system</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Courses</CardTitle>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" /> Add Course
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Total Seats</TableHead>
                <TableHead>Filled Seats</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>{course.id}</TableCell>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.duration}</TableCell>
                  <TableCell>{course.totalSeats}</TableCell>
                  <TableCell>{course.filledSeats}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500">
                        <Trash2 className="h-4 w-4" />
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

export default Courses;
