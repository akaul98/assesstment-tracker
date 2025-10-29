import { pgTable, unique, varchar, integer } from "drizzle-orm/pg-core"
export const users = pgTable("users", {
    Id: integer("Id").primaryKey().generatedAlwaysAsIdentity({ name: "users_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
    Name: varchar("Name", { length: 255 }).notNull(),
    Email: varchar("Email", { length: 255 }).notNull(),
    Department: varchar("Department", { length: 255 }).notNull(),
    Designation: varchar("Designation", { length: 255 }).notNull(),
    Status: varchar("Status", { length: 50 }).default('active').notNull(),
}, (table) => [
  unique("users_email_unique").on(table.Email),
]);
