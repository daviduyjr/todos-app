import { FlatList, Text } from "react-native";
import { IProps } from "./props";

export default (props: IProps) => {
    console.log("🚀 ~ props:", props)
    const {todo} = props;
    return (
        <Text>{todo.todo}</Text>
    )
}