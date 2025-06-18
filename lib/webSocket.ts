import React, { useEffect } from 'react'

export const useTaskSocket = (
    setUpdateAll: React.Dispatch<React.SetStateAction<boolean>>,
    setUpdateToDo: React.Dispatch<React.SetStateAction<boolean>>
) => {
    useEffect(() => {
        const ws = new WebSocket(`${process.env.NEXT_PUBLIC_WS_URL}/tasks/`)

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data)

            if (message.type === 'task_updated') {
                setUpdateAll(true)
                setUpdateToDo(true)
            }
        }

        ws.onerror = (error) => console.error('WebSocket error:', error)

        return () => ws.close()
    }, [setUpdateAll, setUpdateToDo])
}