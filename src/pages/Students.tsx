
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";

const Students = () => {
  // Mock data - would be fetched from Django backend in a real application
  const students = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", course: "Computer Science", gender: "Male", dob: "1999-05-15" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", course: "Information Technology", gender: "Female", dob: "2000-03-22" },
    { id: 3, name: "Alex Johnson", email: "alex.j@example.com", course: "Data Science", gender: "Male", dob: "1998-11-07" },
    { id: 4, name: "Samantha Lee", email: "sam.lee@example.com", course: "Artificial Intelligence", gender: "Female", dob: "2001-01-30" },
    { id: 5, name: "Michael Brown", email: "michael.b@example.com", course: "Computer Science", gender: "Male", dob: "1999-08-12" },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Students Management</h1>
        <p className="text-muted-foreground">Manage all students in the system</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Students</CardTitle>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" /> Add Student
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell>{student.gender}</TableCell>
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

export default Students;
