'use client'

import React, {useEffect, useRef, useState} from "react";
import axios from "@/lib/axios";
import {CardColumn} from "@/components/card-column";
import {CreateTask} from "@/components/create-task";
import {ITasks} from "@/types/global";
import {TaskCard} from "@/components/task-card";
import {Loader} from "@/components/ui/loader";
import {Input} from "@/components/ui/input";
import {useDebounce} from "use-debounce";

export const HomeLayout = () => {
    const [loading, setLoading] = useState(false)
    const [toDoTasks, setToDoTasks] = useState<ITasks | null>(null)
    const [allTasks, setAllTasks] = useState<ITasks | null>(null)
    const [search, setSearch] = useState('')
    const socketRef = useRef<WebSocket | null>(null)
    const [debouncedSearch] = useDebounce(search, 300)
    const inProgress = allTasks?.tasks.filter((item) => item.status === 'IN_PROGRESS')
    const done = allTasks?.tasks.filter((item) => item.status === 'DONE')
    const getAllTasks = () => {
        axios.get('/tasks/all/')
            .then(({data}) => setAllTasks(data))
            .catch((error) => console.error('Error loading all tasks:', error))
    }

    const getToDoTasks = () => {
        axios
            .get('/tasks/', {params: {search: search.length > 0 ? search : null}})
            .then(({data}) => setToDoTasks(data))
            .catch((error) => console.error('Error loading to-do tasks:', error))
    }

    useEffect(() => {
        getToDoTasks()
    }, [debouncedSearch])

    useEffect(() => {
        setLoading(true)
        Promise.all([getAllTasks(), getToDoTasks()]).finally(() => setLoading(false))

        const ws = new WebSocket(`${process.env.NEXT_PUBLIC_WS_URL}/tasks/`)
        socketRef.current = ws

        ws.onopen = () => {
            console.log('WebSocket connected')
        }

        ws.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data)
                if (message.type === 'task_claimed' || message.type === 'task_created') {
                    console.log('📨 WebSocket update received:', message)
                    getAllTasks()
                    getToDoTasks()
                }
            } catch (e) {
                console.error('Invalid WS message', e)
            }
        }

        ws.onerror = (err) => {
            console.error('WebSocket error:', err)
        }

        ws.onclose = () => {
            console.warn('WebSocket closed')
        }

        return () => {
            ws.close()
        }
    }, [])


    return (
        <div className={'flex items-start gap-5 h-full min-w-full'}>
            <CardColumn title={'To do'} count={toDoTasks ? toDoTasks.tasks.length : 0}>
                <Input type={'text'} onInput={(e) => setSearch(e.currentTarget.value)} placeholder={'Search task'}/>
                {toDoTasks && toDoTasks.tasks.map((item) => (
                    <TaskCard key={item.id} item={item}/>
                ))}
                <CreateTask/>
            </CardColumn>
            <CardColumn title={'In progress'} count={inProgress ? inProgress.length : 0}>
                {inProgress && inProgress.map((item) => (
                    <TaskCard key={item.id} item={item}/>
                ))}
            </CardColumn>
            <CardColumn title={'Done'} count={done ? done.length : 0}>
                {done && done.map((item) => (
                    <TaskCard key={item.id} item={item}/>
                ))}
            </CardColumn>
            {loading && <Loader className={'fixed m-10 bottom-0 right-0'}/>}
        </div>
    )
}