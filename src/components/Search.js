import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Feather from '@expo/vector-icons/Feather'


const Search = ({onSearch}) => {

    const [input,setInput] = useState("")
    const [error,setError] = useState("")

    const handleInputChange = (t) => {
        setInput(t)
    }

    const handleRemoveInput = () => {
        setInput("")
        onSearch("")
        setError("")
    }

    const search = () => {

        const regex = /[^a-zA-Z0-9\s]/
        if(regex.test(input)){
          setError("Contiene caracteres no permitidos")
        }else{
          setError("")
          onSearch(input)
        }


    }

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>  
        <TextInput
          style={styles.input}
          placeholderTextColor="#000000"
          placeholder='Buscar dibujo'
          value={input}
          onChangeText={handleInputChange}
        />
      <View style={styles.buttonContainer}>
        <Pressable onPress={search}>
          <MaterialIcons name="search" size={30} color="black"/>
        </Pressable>
        <Pressable onPress={handleRemoveInput}>
          <Feather name="x-circle" size={30} color="black" />
        </Pressable>
      </View>

    </View>
    <Text style={styles.error}>{error}</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        margin:10,
        marginTop:20
    },
    containerInput:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",

    },
    input:{
        backgroundColor:colors.grey3,
        marginHorizontal:8, 
        padding:10,
        borderRadius:10,
        width:"80%",
        fontSize:20
    },
    buttonContainer:{
        flexDirection:"row",
    },
    error:{
      color:"red",
      fontWeight:"bold",
      marginLeft:19
    }

})