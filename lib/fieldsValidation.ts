import {z} from "zod";

export const NewTaskSchema = z.object({
    title: z
        .string()
        .min(1, { message: 'Title is required.' })
        .max(512, { message: 'Title must not exceed 512 characters.' }),
    assignee: z.string()
        .min(1, { message: 'Assignee is required.' })
        .max(512, { message: 'Assignee must not exceed 512 characters.' }),
    description: z.string()
        .min(1, { message: 'Description is required.' })
        .max(512, { message: 'Description must not exceed 1024 characters.' }),
})