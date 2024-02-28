import { useState } from 'react';
import { FlatList, Text } from "react-native";
import Item from '../item'
export default () => {
    const [todos, setTodos] = useState([
        { key: 1, todo: 'Complete task 1' },
        { key: 2, todo: 'Read a book' },
        { key: 3, todo: 'Go for a run' },
      ])
    return (
        <>
            <Text>This is the list!!</Text>
            <FlatList
                data={todos}
                renderItem={() => <Item />}
            />
        </>
    )
}