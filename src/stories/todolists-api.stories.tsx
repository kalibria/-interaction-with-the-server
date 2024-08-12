import React, {useEffect, useState} from 'react'
import axios, {AxiosRequestConfig} from "axios";

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
        const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', config)

        promise.then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'MOBX'}, config)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div>{JSON.stringify(state)}</div>
}