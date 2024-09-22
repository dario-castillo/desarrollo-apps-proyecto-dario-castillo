import { Pressable, StyleSheet, Text, View } from 'react-native' 
import products from '../data/products.json'
import { Image } from 'react-native'
import { colors } from '../global/colors'

const ItemDetail = ({route}) => {
  
  const {id} = route.params

  return (
    <View style={styles.container}> 
      <View style={styles.containerDetail}>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={{uri:products[id].thumbnail}}
          />
        <View style={styles.containerText}>
          <Text style={styles.title}>{products[id].title}</Text>
          <Text style={styles.description}>{products[id].description}</Text>
          <Text style={styles.price}>Precio: ${products[id].price}</Text>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container:{
    width:"100%"
  },
  containerDetail:{},
  containerText:{
    width:"50%",
    gap:10,
    margin:10,
    marginHorizontal:"25%"
  },
  title:{
    fontSize:25
  },
  description:{
    fontSize:12
  },
  price:{
    fontSize:20,
    fontWeight:'bold',
  },
  image:{
    width:"100%",
    height:250,
    marginVertical:10
  },
  button:{
    width:"40%",
    marginHorizontal:"30%",
    backgroundColor:colors.grey3,
    color:"white",
    borderRadius:5,
    padding:10,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonText:{
    color:"white"
  }
})
