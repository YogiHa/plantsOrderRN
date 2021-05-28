import React, { useRef, Fragment } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Vendor from './Vendor'
// import Auth from './Auth'
import Welcome from './Welcome'
import useBackgroundNavigation from '../utils/useBackgroundNavigation'
import Loading from '../components/Loading'

const Stack = createStackNavigator()
export default function Screens() {
    let navContainerRef = useRef()
    let isInitLoading = useBackgroundNavigation(navContainerRef)
    return (
        <Fragment>
            {isInitLoading && <Loading />}
            <NavigationContainer ref={navContainerRef}>
                <Stack.Navigator
                    initialRouteName="Welcome"
                    screenOptions={() => ({
                        headerShown: false
                    })}
                    headerMode="none"
                >
                    <Stack.Screen options={{ gestureEnabled: false }} name="Vendor" component={Vendor} />
                    {/* <Stack.Screen name="Auth" component={Auth} /> */}
                    <Stack.Screen name="Welcome" component={Welcome} />
                </Stack.Navigator>
            </NavigationContainer>
        </Fragment>
    )
}
