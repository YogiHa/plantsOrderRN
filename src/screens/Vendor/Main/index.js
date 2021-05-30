import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Order from './Order'
import { View } from 'react-native'
// import PrevOreders from './PrevOreders'
// import Profile from './Profile'

const Tab = createBottomTabNavigator()
export default function Main() {
    const TabBar = () => <View />
    return (
        <Tab.Navigator initialRouteName="Order" tabBar={TabBar}>
            <Tab.Screen options={{ tabBarLabel: 'Order' }} name="Order" component={Order} />
            {/* <Tab.Screen name="PrevOreders" component={PrevOreders} />
            <Tab.Screen name="Profile" component={Profile} /> */}
        </Tab.Navigator>
    )
}
