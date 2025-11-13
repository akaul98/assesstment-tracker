# Database Schema Migration Guide

## Overview
The current database schema uses PascalCase for column names (Id, Name, Email, etc.), which is non-standard. This guide explains how to migrate to snake_case naming convention.

## Current Schema Issues
- **Column Names**: `Id`, `Name`, `Email`, `Department`, `Designation`, `Status` (PascalCase)
- **Standard Practice**: Database columns should use `snake_case` (e.g., `user_id`, `email_address`)
- **Impact**: Creates confusion between database layer and application layer

## Recommended Migration Steps

### Option 1: Fresh Migration (No Data to Preserve)
If you don't have production data to preserve:

1. **Create new migration file**:
   ```bash
   npm run drizzle-kit generate
   ```

2. **Update schema** (`src/server/db/schema/users.ts`):
   ```typescript
   import { pgTable, varchar, integer } from "drizzle-orm/pg-core"

   export const users = pgTable("users", {
     id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
     name: varchar("name", { length: 255 }).notNull(),
     email: varchar("email", { length: 255 }).notNull(),
     department: varchar("department", { length: 255 }).notNull(),
     designation: varchar("designation", { length: 255 }).notNull(),
     status: varchar("status", { length: 50 }).default('active').notNull(),
   }, (table) => ({
     emailUnique: unique("users_email_unique").on(table.email),
   }));
   ```

3. **Update DTOs** (`src/server/api/dto/users/index.ts`):
   ```typescript
   export const getAllUsersDto = z.object({
     id: z.number(),
     name: z.string(),
     email: z.string().email(),
     department: z.string(),
     designation: z.string(),
     status: z.enum(["active", "inactive"]),
   });
   ```

4. **Update repository and service layer**

5. **Drop and recreate database**:
   ```bash
   npm run drizzle-kit push
   ```

### Option 2: Data Preservation Migration
If you have production data:

1. Create a new migration with column renaming
2. Use `ALTER TABLE` statements to rename columns
3. Update all application code
4. Test thoroughly before deploying

## Status
⚠️ **Not Yet Implemented** - This requires careful consideration of existing data.

---
*Created as part of architecture improvements on 2025-11-13*
