import { useState } from 'react';
import { FlatList, Text } from "react-native";
import Item from '../item'
import { IProps } from './props';

export default (props: IProps) => {
    const { todos } = props

    return (
        <>
            <Text>This is the listsss!!</Text>
            <FlatList
                data={todos}
                renderItem={(todo) => 
                    <Item
                       todo={todo} 
                    />
                }
            />
        </>
    )
}