import { Pressable, StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native'
import { colors } from '../global/colors'
import Feather from '@expo/vector-icons/Feather'

const Header = ({title}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
    backgroundColor:colors.grey1,
    width: "100%",
    height: 120,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    position:"relative"
  },
  text:{
    color:"white",
    fontFamily:'RobotoB',
    fontSize:23
  },
  icon:{
    position:"absolute",
    left:15
  }
  
})
