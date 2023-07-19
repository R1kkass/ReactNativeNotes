import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRef, useState, useEffect, FC } from 'react';
import {View, Text, Button, TextInput, StyleSheet, ScrollView, TouchableOpacityBase, TouchableOpacity} from 'react-native';
import Post from '../../entities/Post/Post';

export interface INotes{
    id: number,
    text: string,
    time: string
}

const Home:FC<{navigation: any}> = ({navigation})=>{

    const [notes,  setNotes] = useState<INotes[]>([])

    const [input, setInput] = useState<string>('')

    useEffect(()=>{
        AsyncStorage.getItem('TASKS')
        .then((e:any)=>{
            setNotes(JSON.parse(e))
        })
    },[notes])

   
    
    const deleteNote =async (id: number)=>{
        let res = notes.filter((note)=>{
            return note.id!=id
        })
        await AsyncStorage.setItem('TASKS', JSON.stringify(res));
        AsyncStorage.getItem('TASKS')
        .then((e:any)=>{
            setNotes(JSON.parse(e))
        })
    }

    return(
        <View style={styles.container}>
            <Button onPress = {()=>navigation.navigate('AddNote')} title='Добавить запись' />
            <ScrollView style={styles.scroll}>
                {notes?.map(({id,text, time})=>(
                    <Post navigation={navigation} id={id} text={text} time={time} callback={()=>deleteNote(id)}/>
                ))}
            </ScrollView>            
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
    padding:5,
      backgroundColor: '#fff',
      flex: 1,
      height: '100%',
      width: '100%'
    },
    scroll: {
        width: '100%'
    },
    block: {
        marginTop: 10,
        overflow:'hidden',
        padding: 10,
        borderColor: '#007bff',
        borderWidth: 5,
        borderRadius: 20,
        borderBottomRightRadius: 20,
    },
   
  });