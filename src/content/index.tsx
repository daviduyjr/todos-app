import View from "./view";
import { TodoContext } from "../contexts";
import { useEffect, useState } from "react";
import _, { get as getProperty, set as setProperty } from 'lodash';

export default () => {
    const [fields, setFields] = useState<any>({
        initializing: true,
    });

    const set = (key: string, value: any) => {
        setProperty(fields, key, value);
        setFields({
            ...fields,
        });
    };
    
    const get = (key: string, defaultValue?: any) => getProperty(fields, key, defaultValue);
    const contextValue = {
        set, get,
    };

    return (
        <TodoContext.Provider value={contextValue}>
            <View />
        </TodoContext.Provider>
    )
}