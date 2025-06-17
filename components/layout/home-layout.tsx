'use client'

import React from "react";
import {CardColumn} from "@/components/card-column";
import {CreateTask} from "@/components/create-task";
import {ITaskCard} from "@/types/global";
import {TaskCard} from "@/components/task-card";

export const HomeLayout = () => {
    const cardsToDo: ITaskCard[] = [
        {title: 'Task 1', id: 1, is_claimed: false, assignee: 'John Doe'},
        {title: 'Task 2', id: 2, is_claimed: false, assignee: 'John Doe'},
        {title: 'Task 1', id: 3, is_claimed: false, assignee: 'John Doe'},
        {title: 'Task 2', id: 4, is_claimed: false, assignee: 'John Doe'},
        {title: 'Task 1', id: 5, is_claimed: false, assignee: 'John Doe'},
        {title: 'Task 2', id: 6, is_claimed: false, assignee: 'John Doe'},
        {title: 'Task 1', id: 7, is_claimed: false, assignee: 'John Doe'},
        {title: 'Task 2', id: 8, is_claimed: false, assignee: 'John Doe'},
    ]

    const cardsInProgress: ITaskCard[] = [
        {title: 'Task 3', id: 9, is_claimed: true, assignee: 'John Doe'},
        {title: 'Task 4', id: 10, is_claimed: true, assignee: 'John Doe'},
    ]

    const cardsDone: ITaskCard[] = [
        {title: 'Task 5', id: 11, is_claimed: true, assignee: 'John Doe'},
    ]

    return (
        <div className={'flex items-start gap-5 h-full min-w-full'}>
            <CardColumn title={'To do'} count={cardsToDo.length}>
                {cardsToDo.map((item) => (
                    <TaskCard key={item.id} item={item}/>
                ))}
                <CreateTask />
            </CardColumn>
            <CardColumn title={'In progress'} count={cardsInProgress.length}>
                {cardsInProgress.map((item) => (
                    <TaskCard key={item.id} item={item}/>
                ))}
            </CardColumn>
            <CardColumn title={'Done'} count={cardsDone.length}>
                {cardsDone.map((item) => (
                    <TaskCard key={item.id} item={item}/>
                ))}
            </CardColumn>
        </div>
    )
}