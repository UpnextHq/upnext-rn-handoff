import { useEffect } from 'react';
import { NativeModules } from 'react-native'

const { RnHandoff } = NativeModules;

export const Handoff =({type, title, url})=> {

    useEffect(()=>{
        const id = Date.now();

        RnHandoff.becomeCurrent(id, type, title, url);

        return ()=> RnHandoff.invalidate(id);
    }, []);

    return null;
}