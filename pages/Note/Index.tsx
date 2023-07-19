import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FC, useEffect, useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import Home, { INotes } from "../Home/Index"

interface INote {
    route:{
        params:{
            id: number
            title: string
            time: string
        }
    },
    navigation: any
}

const Stack = createNativeStackNavigator()

const Note:FC<INote> = ({route, navigation})=>{

    const {id,title, time}=route?.params

    const [input, setInput] = useState<string>(title)

    const editNote =async ()=>{
        let value = await AsyncStorage.getItem('TASKS')
        let res = JSON.parse(value || '[]')
        let key;
        for(let i=0; i< res.length; i++){
            if(res[i].id==id){
                res[i].text=input
            }
        }
        await AsyncStorage.setItem('TASKS', JSON.stringify(res))
        value = await AsyncStorage.getItem('TASKS')
        console.log(value);
        
    }

    return(
        <View>
            <Text>{time}</Text>
            <TextInput numberOfLines={10} multiline={true} onChangeText={(e)=>setInput(e)} defaultValue={title}></TextInput>
            <Button onPress={editNote} title="Сохранить"/>
        </View>
    )
}

export default Note 