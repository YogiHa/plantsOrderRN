import AsyncStorage from '@react-native-community/async-storage'
import { CommonActions } from '@react-navigation/routers'
import { useEffect, useState } from 'react'

export default function (navRef) {
    const [isLoading, setIsLoading] = useState(true)
    let registerForBGNavigation = async () => {
        if (!navRef.current) return setTimeout(registerForBGNavigation, 150)

        navRef.current?.addListener('state', ({ data: { state } }) =>
            AsyncStorage.setItem('navigationState', JSON.stringify(state))
        )
        const navigationState = await AsyncStorage.getItem('navigationState')
        if (!!navigationState) {
            await AsyncStorage.removeItem('navigationState')
            navRef.current.dispatch(CommonActions.reset({ ...JSON.parse(navigationState) }))
        }
        setIsLoading(false)
    }
    useEffect(() => {
        registerForBGNavigation()
        return () => {
            navRef.current.removeListener('state')
        }
    }, [])

    return isLoading
}
