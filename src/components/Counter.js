import { useState } from 'react'
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementByAmount } from '../features/counter/counterSlice'

const Counter = () => {

    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
    const [input,setInput] = useState(0)

    const handelInput =(t) => {
        setInput(Number(t))
    }

  return (
    <View style={styles.container}>
        <View style={styles.containerCounter}>
            <Pressable onPress={()=>dispatch(decrement())} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <View style={styles.count}>
                <Text>{count}</Text>
            </View>
            <Pressable onPress={()=>dispatch(increment())} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
        <View style={styles.containerInput}>
            <TextInput
                style={styles.input}
                value={String(input)}
                onChangeText={handelInput}
            />
            <Pressable onPress={()=>dispatch(incrementByAmount(input))} style={styles.button}>
                <Text style={styles.buttonText}>Agregar</Text>
            </Pressable>
        </View>
    </View>

  )
}

export default Counter

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        margin:10
    },
    containerCounter:{
        flexDirection:"row"
    },
    button:{
        backgroundColor:colors.grey3,
        minWidth:80,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        borderRadius:5,
        margin:5
    },
    buttonText:{
        fontSize:20,
        fontWeight:"bold"
    },
    count:{
        alignItems:"center",
        justifyContent:"center",
        width:100,
        textAlign:"center"
    },
    containerInput:{
        flexDirection:"row",
        margin:10
    },
    input:{
        width:80,
        textAlign:"center",
        borderWidth:1,
        borderRadius:5
    }
})