import {z} from "zod";

export const NewTaskSchema = z.object({
    title: z
        .string()
        .min(1, { message: 'Title is required.' })
        .max(255, { message: 'Title must not exceed 255 characters.' }),
    assignee: z.string()
        .min(1, { message: 'Assignee is required.' })
        .max(100, { message: 'Assignee must not exceed 100 characters.' }),
    description: z.string()
        .min(1, { message: 'Description is required.' })
})