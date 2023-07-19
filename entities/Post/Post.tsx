import { FC, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { NestableDraggableFlatList } from "react-native-draggable-flatlist"
import { INotes } from "../../pages/Home/Index"

interface IPost extends INotes{
    navigation: any,
    callback: ()=>void
}



const Post:FC<IPost> = ({id, text, time, navigation, callback})=>{

    const [visible, setVisible] = useState<boolean>(false)

    const dragStart = (e:React.DragEvent, post: INotes)=>{
        alert(post);
        
    } 

    return(

        
        <TouchableOpacity
            onPress={()=>navigation.navigate('Note', {id, title: text, time})}
            onLongPress={()=>setVisible(p=>!p)}
            
           
        >
        <View style = {styles.block}
         >
            
                <Text>{time}</Text>
                <Text>{text}</Text>
                {visible ? 
                <TouchableOpacity onPress={callback} style={styles.button} >
                    <Text style={{color: 'white'}}>X</Text>
                </TouchableOpacity>                
                : ''}

        </View>
        </TouchableOpacity>
    )
}

export default Post

const styles = StyleSheet.create({
    button:{
        width: '100%',
        height: 30,
        color: 'white',
        backgroundColor: '#007bff',
        textAlign: 'center',
        flex: 1, 
        display:'flex',
        justifyContent:'center',
        alignItems: 'center'
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
})