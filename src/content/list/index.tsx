import { useContext, useEffect, useState } from "react";
// import { TodoContext } from "../../contexts";
import { TodoContext } from "@src/contexts";
import type { ITodo } from "@src/interfaces/models";
import View from "./view"

export default () => {
    const { get, set } = useContext(TodoContext)
    const todos = get('todos') as ITodo[]
    
    useEffect(() => {
        const initialTodos : ITodo[] =[
            { key: 1, todo: 'Complete task 1',},
            { key: 2, todo: 'Read a book' },
            { key: 3, todo: 'Go for a run' },
        ]
        set('todos', initialTodos)
    }, [])
    return (
        <View
            todos={todos}
        />
    )
}