"use client";
import { UsersDataTable } from "@/components/users/users-data-table";
import { useQuery } from "@tanstack/react-query";

async function getAllUsers() {
  const res = await fetch('/api/users');
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}

export default function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-muted-foreground">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-destructive">Error loading users: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <UsersDataTable data={data} />
    </div>
  );
}