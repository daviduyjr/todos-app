import type { ITodo } from "@src/interfaces/models";
interface todo {
    key: string,
    todo: string
}

export interface IProps {
    todos: ITodo[];
}