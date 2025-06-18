import React from "react";

export interface ITask{
    id: number
    title: string
    assignee: string
    description: string
    status: 'TO_DO' | 'IN_PROGRESS' | 'DONE'
    created_at: string
    updated_at: string
}

export interface ITasks {
    count: number
    success: boolean
    tasks: ITask[]
}

export interface ICardColumn{
    title: string
    children: React.ReactNode
    count: number
}