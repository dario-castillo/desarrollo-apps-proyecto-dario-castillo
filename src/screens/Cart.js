import { FlatList, StyleSheet, Text, View } from 'react-native'
import cart from '../data/cart.json'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import Counter from '../components/Counter'

const Cart = () => {
  return (
    <View style={styles.container}>
        <Counter/>
        <FlatList
            data={cart.items}
            keyExtractor={item => item.id}
            renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.containerConfirm}>
            <Text style={styles.textConfirm}>Confirmar</Text>
            <Text style={styles.total}>Total: $ {cart.total}</Text>

        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        flex:1
    },
    containerConfirm:{
        backgroundColor:colors.grey3,
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textConfirm:{
        fontSize:20
    },
    total:{
        fontSize:20
    }
})