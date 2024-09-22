import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from '../global/colors'

const OrderItem = ({item}) => {
  return (
    <View style={styles.container}>
        <View style={styles.containerText}>
            <Text style={styles.date}>{new Date(item.createdAt).toLocaleString()}</Text>
            <Text style={styles.total}>Total: ${item.total}</Text>
        </View>
        <Ionicons name="search-sharp" size={24} color="black" />
    </View>
  )
}

export default OrderItem

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
    date:{
        fontSize:20,
        fontWeight:"bold",
        color:colors.grey1
    },
    total:{
        fontSize:20,
        fontWeight:"bold"
    }
})