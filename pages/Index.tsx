import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Home from "./Home/Index"
import Note from "./Note/Index"
import AddNote from "./AddNote"

const Stack = createNativeStackNavigator()

const Routing = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Note" component={Note} initialParams={{ id:0, title: '32' }}/>
                <Stack.Screen name="AddNote" component={AddNote} options={{title: 'Добавить запись'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routing