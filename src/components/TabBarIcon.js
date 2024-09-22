import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const TabBarIcon = ({text, icon, focused}) => {
  return (
    <View style={styles.container}>
        <Ionicons 
            style={styles.icon} 
            name={icon} size={24} 
            color={focused ? "skyblue" : "white"}  
        />
        <Text style={{color:focused ? "skyblue" : "white"}}>{text}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        gap:5
    },
    icon:{}   
    
})