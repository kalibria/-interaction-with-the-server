import axios, {AxiosRequestConfig} from "axios";

const config: AxiosRequestConfig = {
    baseURL:'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {'API-KEY': '2b51a744-206a-4e4b-bd70-9b68bff7bc37'}
}

const instance = axios.create(config)

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}



type FieldErrorType = {
    error: string
    field: string
}


type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: FieldErrorType[]
    data: T
}

type TaskType = {
    description: string,
    title: string,
    completed: boolean,
    status: number,
    priority: number,
    startDate: string,
    deadline: string,
    id: string,
    todoListId: string,
    order: number,
    addedDate:string
}

type ResponseTaskType = {
    items: TaskType[],
    totalCount: number,
    error: string | null
}

export const todoListAPI = {

    getTodoLists(){
        return instance.get<TodolistType[]>('/todo-lists')
    },

    createTodoList() {
        return  instance.post<ResponseType<{title: TodolistType}>>('/todo-lists', {title: 'MOBX'})
    },

    deleteTodoList(todolistId: string){
        return instance.delete<ResponseType>(`/todo-lists/${todolistId}`)
    },

    updateTodoList(todolistId: string, title: string){
        return  instance.put<ResponseType>(`/todo-lists/${todolistId}`,{title})
    },

    getTasks(todolistId: string){
        return instance.get<ResponseTaskType>(`/todo-lists/${todolistId}/tasks`)
    }
}