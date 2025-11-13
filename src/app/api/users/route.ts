import { NextResponse } from 'next/server';
import { userService } from '@/server/api/services/users/user.service';

export async function GET() {
  try {
    const users = await userService.getAllUsers();
    return NextResponse.json(users);
  } catch (error) {
    console.error('API Error - GET /api/users:', error);

    const errorMessage = error instanceof Error
      ? error.message
      : 'An unexpected error occurred';

    return NextResponse.json(
      {
        error: 'Failed to fetch users',
        message: errorMessage
      },
      { status: 500 }
    );
  }
}
