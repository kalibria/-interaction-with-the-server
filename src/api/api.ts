import axios, {AxiosRequestConfig} from "axios";

const config: AxiosRequestConfig = {
    withCredentials: true,
    headers: {'API-KEY': '2b51a744-206a-4e4b-bd70-9b68bff7bc37'}
}

export const todoListAPI = {

    getTodoLists(){
        return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', config)
    };

    createTodoList() {
        return  axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'MOBX'}, config)
    };

    deleteTodoList(todolistId: string){
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, config)
    };

    updateTodoList(todolistId: string, title: string){
        return  axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,{title}, config)
    }
}