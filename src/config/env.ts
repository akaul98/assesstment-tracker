import { z, ZodError } from 'zod';

const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().min(1, {
    message: 'DATABASE_URL must be a valid PostgreSQL connection string',
  }),

  // Node environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

type EnvSchema = z.infer<typeof envSchema>;

// Parse and validate environment variables
function validateEnv(): EnvSchema {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof ZodError) {
      console.error('❌ Environment validation failed:');
      error.issues.forEach((err) => {
        console.error(`  - ${err.path.join('.')}: ${err.message}`);
      });
      throw new Error('Invalid environment variables. Please check your .env file.');
    }
    throw error;
  }
}

export const env = validateEnv();
