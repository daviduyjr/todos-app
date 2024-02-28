import View from "./view";
import { IProps } from "./props";

export default (props: IProps) => {
    return (
        <View 
            todo={props.todo.item}
        />
    )
}