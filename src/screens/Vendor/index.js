import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Main from './Main'
import VegInfo from './VegInfo'

const Stack = createStackNavigator()

export default function Vendor() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Main"
        >
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="VegInfo" component={VegInfo} />
        </Stack.Navigator>
    )
}
