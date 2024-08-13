import React, {useEffect, useState} from 'react'
import {AxiosRequestConfig} from "axios";
import {todoListAPI} from "../api/api";

export default {
    title: 'API',
}

const config: AxiosRequestConfig = {
    withCredentials: true,
    headers: {'API-KEY': '2b51a744-206a-4e4b-bd70-9b68bff7bc37'}
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const promise = todoListAPI.getTodoLists()

        promise.then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
       todoListAPI.createTodoList()
            .then((res) => {
                setState(res.data.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "86e6b861-02a7-4577-b3da-b97c785c7037";
        todoListAPI.deleteTodoList(todolistId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "fd8995ba-e0c1-4152-9026-342c7b46a261";

       todoListAPI.updateTodoList(todolistId, 'React')
            .then((res) => {

            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "fd8995ba-e0c1-4152-9026-342c7b46a261";
        const promise = todoListAPI.getTasks(todolistId)

        promise.then((res) => {
            setState(res.data.items)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "fd8995ba-e0c1-4152-9026-342c7b46a261";
        todoListAPI.createTask(todolistId, 'React')
            .then((res) => {
                setState(res.data.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}