import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Order from './Order'
// import PrevOreders from './PrevOreders'
// import Profile from './Profile'
// import VegInfo from './VegInfo'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function Main() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Order" component={Order} />
            {/* <Drawer.Screen name="PrevOreders" component={PrevOreders} />
            <Drawer.Screen name="Profile" component={Profile} /> */}
        </Drawer.Navigator>
    )
}
export default function Vendor() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Main"
        >
            <Stack.Screen name="Main" component={Main} />
            {/* <Stack.Screen name="VegInfo" component={VegInfo} /> */}
        </Stack.Navigator>
    )
}
