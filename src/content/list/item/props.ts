import { ListRenderItemInfo } from "react-native";

interface todo {
    key: string,
    todo: string
}
export interface IProps {
    todo: ListRenderItemInfo<todo>,
}