import z from "zod";

export const getAllUsersDto=
 z.object({
    Name:z.string(),
    Email:z.string(),
    Department:z.string(),
    Designation:z.string(),
    Status:z.enum(["Active","Inactive"]),
    Id:z.number()
});
export type GetAllUsersDto= z.infer<typeof getAllUsersDto>;
