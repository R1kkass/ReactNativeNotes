import { View, Button } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import {useState, FC} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"

const AddNote:FC<{navigation: any}> = ({navigation})=>{

    const [input, setInput] = useState<string>('')

    const addNote = async ()=>{
        const notes = JSON.parse(await AsyncStorage.getItem('TASKS') || '[]')
        notes.push({
            id: Date.now(),
            text: input,
            time: new Date().toLocaleString('en-GB', { timeZone: 'UTC' })
        })
        
        await AsyncStorage.setItem('TASKS', JSON.stringify(notes));
        navigation.navigate('Home')
    }
    return(
        <View>
            <TextInput numberOfLines={2} multiline={true} onChangeText={(e)=>setInput(e)} />
            <Button onPress={addNote} title = "Добавить задачу"/>
        </View>
    )
}

export default AddNote