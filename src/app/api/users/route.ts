import { NextResponse } from 'next/server';
import { userRepository } from '@/server/api/repository/users/user.repository';
import { getAllUsersDto } from '@/server/api/dto/users';

export async function GET() {
  const result = await userRepository.getAllUsers();
  const parsed = result.map(user => getAllUsersDto.parse(user));
  return NextResponse.json(parsed);
}
