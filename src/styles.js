import {StyleSheet} from 'react-native';


const main = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'#212121',
        paddingTop:10,
    },
    banner:{
        flexDirection:'row', 
        justifyContent:'space-between',
        padding:10,
        alignItems:'center'
    },
    todoText:{
        fontSize:50,
        fontWeight:'bold',
        color:'#ffe97d',
        fontStyle:'italic',
        
    },
    todoCount:{
       fontSize:35,
       fontWeight:'500',
       color:'#ffe97d', 
       
    },
})

const todo_Input = StyleSheet.create ({
    inputContainer:{
        backgroundColor:'#ffddc1',
        margin:5,
        padding:3,
        borderRadius:12,

    },
    container:{
        backgroundColor:'#9e9e9e',
        margin:15,
        padding:8,
        borderRadius:12,

    }
})

export {main, todo_Input};