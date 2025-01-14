import { FlatList, StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'
import products from '../data/products.json'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'

const ItemListCategory = ({route}) => {

  const {category} = route.params
  const [productsFiltered,setProductsFiltered] = useState([])

  useEffect(()=>{
    setProductsFiltered(products.filter(product => product.category === category))
  },[category])

  const onSearch = (input) => {
    if(input){
      setProductsFiltered(productsFiltered.filter(product => product.title.includes(input)))
    }else{
      setProductsFiltered(products.filter(product => product.category === category))
    }

    }

  return (
    <View style={styles.container}>
      <Search onSearch={onSearch}/>
        <FlatList
          data={productsFiltered}
          keyExtractor={item=>item.id}
          renderItem={({item})=> <ProductItem product={item}/>}
        />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container:{
    width:"100%"
  }
})