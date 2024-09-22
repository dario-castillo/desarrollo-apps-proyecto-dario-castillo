import { useState } from 'react'
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../global/colors'

const CounterLocal = () => {

    const [count,setCount] = useState(0)
    const [input,setInput] = useState(0)

    const handelInput =(t) => {
        setInput(Number(t))
    }

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () =>{
        setCount(count - 1)
    }

    const incrementByAmount = () => {
        setCount(count + input)
        setInput(0)
    }

  return (
    <View style={styles.container}>
        <View style={styles.containerCounter}>
            <Pressable onPress={decrement} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <View style={styles.count}>
                <Text>{count}</Text>
            </View>
            <Pressable onPress={increment} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
        <View style={styles.containerInput}>
            <TextInput
                style={styles.input}
                value={String(input)}
                onChangeText={handelInput}
            />
            <Pressable onPress={incrementByAmount} style={styles.button}>
                <Text style={styles.buttonText}>Agregar</Text>
            </Pressable>
        </View>
    </View>

  )
}

export default CounterLocal 

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