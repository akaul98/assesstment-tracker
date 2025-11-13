import { userRepository } from '@/server/api/repository/users/user.repository';
import { getAllUsersDto, type GetAllUsersDto } from '@/server/api/dto/users';
import { ZodError } from 'zod';

export class UserService {
  /**
   * Get all users with validation
   * @returns Promise<GetAllUsersDto[]>
   * @throws Error if database query fails or validation fails
   */
  async getAllUsers(): Promise<GetAllUsersDto[]> {
    try {
      const users = await userRepository.getAllUsers();

      // Validate each user against the DTO schema
      const validatedUsers = users.map(user => {
        try {
          return getAllUsersDto.parse(user);
        } catch (error) {
          if (error instanceof ZodError) {
            console.error(`Validation failed for user ${user.Id}:`, error.errors);
            throw new Error(`Invalid user data for user ID ${user.Id}`);
          }
          throw error;
        }
      });

      return validatedUsers;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed to fetch users:', error.message);
        throw new Error(`Failed to fetch users: ${error.message}`);
      }
      throw new Error('An unexpected error occurred while fetching users');
    }
  }

  // Additional business logic methods can be added here
  // Example: createUser, updateUser, deleteUser, getUserById, etc.
}

export const userService = new UserService();
