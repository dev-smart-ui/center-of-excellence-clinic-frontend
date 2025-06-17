"use client"

import {z} from 'zod'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription, DialogFooter
} from "@/components/ui/dialog";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {NewTaskSchema} from "@/lib/fieldsValidation";
import {useForm} from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {Plus} from "lucide-react";

export const CreateTask = () => {
    const [open, setOpen] = useState(false)
    const form = useForm<z.infer<typeof NewTaskSchema>>({
        resolver: zodResolver(NewTaskSchema),
        defaultValues: {
            title: '',
            assignee: '',
            description: ''
        },
    })

    const onSubmit = (values: z.infer<typeof NewTaskSchema>) => {
        console.log(values)
    }

    return (
        <>
            <Button type={'button'} variant={'ghost'} onClick={() => setOpen(true)} className={'w-full'}>
                <Plus /> Create
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create new task</DialogTitle>
                        <DialogDescription />
                    </DialogHeader>
                    <Form {...form}>
                        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                            <div className={`grid gap-4`}>
                                <FormField
                                    control={form.control}
                                    name={'title'}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={'capitalize'}>Title</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={'assignee'}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={'capitalize'}>Assignee</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={'description'}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={'capitalize'}>Description</FormLabel>
                                            <FormControl>
                                                <Textarea {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <DialogFooter>
                                <Button type="submit">Create</Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>

    )
}