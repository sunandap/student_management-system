
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";

const Staff = () => {
  // Mock data - would be fetched from Django backend in a real application
  const staffMembers = [
    { id: 1, name: "Dr. Robert Johnson", email: "robert.j@example.com", department: "Computer Science", position: "Professor", joinDate: "2015-06-10" },
    { id: 2, name: "Dr. Emily Clark", email: "emily.c@example.com", department: "Information Technology", position: "Associate Professor", joinDate: "2017-03-22" },
    { id: 3, name: "Prof. David Wilson", email: "david.w@example.com", department: "Data Science", position: "Assistant Professor", joinDate: "2018-08-15" },
    { id: 4, name: "Dr. Sarah Martinez", email: "sarah.m@example.com", department: "Artificial Intelligence", position: "Professor", joinDate: "2016-01-05" },
    { id: 5, name: "Prof. James Taylor", email: "james.t@example.com", department: "Cybersecurity", position: "Associate Professor", joinDate: "2019-04-30" },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Staff Management</h1>
        <p className="text-muted-foreground">Manage all staff members in the system</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Staff Members</CardTitle>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" /> Add Staff
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staffMembers.map((staff) => (
                <TableRow key={staff.id}>
                  <TableCell>{staff.id}</TableCell>
                  <TableCell>{staff.name}</TableCell>
                  <TableCell>{staff.email}</TableCell>
                  <TableCell>{staff.department}</TableCell>
                  <TableCell>{staff.position}</TableCell>
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

export default Staff;
