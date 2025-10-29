"use client";
import { UsersDataTable } from "@/components/users/users-data-table";
import { useQuery } from "@tanstack/react-query";
  async function getAllUsers() {
    const res = await fetch('/api/users');
    return res.json();
  }

export default function Page() {

  const { data, isLoading } =  useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers,
  })

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>

     <pre>{JSON.stringify(data, null, 2)}</pre>
    <UsersDataTable/>
  </div>;
}