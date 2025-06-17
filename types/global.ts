import React from "react";

export interface ITaskCard{
    id: number
    title: string
    assignee: string
    is_claimed: boolean
}

export interface ICardColumn{
    title: string
    children: React.ReactNode
    count: number
}