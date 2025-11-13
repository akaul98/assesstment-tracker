import { users, db } from "@/server/db";

export const userRepository={
    async getAllUsers(){
        return await db.select().from(users);
    }
}