import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from '../global/colors'


const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
        <View style={styles.containerText}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.price}>$ {item.price}</Text>
        </View>
        <Ionicons name="trash-outline" size={24} color="black" />
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        width:"90%",
        marginHorizontal:"5%",
        marginVertical:10,
        padding:15,
        backgroundColor:colors.grey3,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    containerText:{
        width:"70%",
        gap:5
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:colors.grey1
    },
    categroy:{
        fontSize:15
    },
    price:{
        fontSize:20,
        fontWeight:"bold"
    }
})