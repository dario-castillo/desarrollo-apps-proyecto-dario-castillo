import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import { StyleSheet } from 'react-native'
import { colors } from '../global/colors'
import TabBarIcon from '../components/TabBarIcon'

const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarStyle:styles.tabBar
            }}
        >
            <Tab.Screen 
                name='HomeStack' 
                component={ShopStack}
                options={{
                    tabBarIcon:({focused}) => {
                        return <TabBarIcon focused={focused} text="Tienda" icon="storefront"/>
                    }
                }}
            />
            <Tab.Screen 
                name='CartStack' 
                component={CartStack}
                options={{
                    tabBarIcon:({focused}) => {
                        return <TabBarIcon focused={focused} text="Carrito" icon="cart"/>
                    }
                }}
            />
            <Tab.Screen 
                name='OrdersStack' 
                component={OrdersStack}
                options={{
                    tabBarIcon:({focused}) => {
                        return <TabBarIcon focused={focused} text="Ordenes" icon="reorder-three-sharp"/>
                    }
                }}
            />
        </Tab.Navigator>
  </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.grey1,
        height:80
    }
})