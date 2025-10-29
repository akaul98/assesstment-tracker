import { users } from "@/server/db/schema/users";
import  {db}  from "@/index";

export const userRepository={
    async getAllUsers(){
        return await db.select().from(users);
    }
}