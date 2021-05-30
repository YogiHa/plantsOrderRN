import { useCallback } from 'react'
import { BackHandler } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

export default function useBackButton(listener = () => true) {
    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener('hardwareBackPress', listener)
            return () => {
                BackHandler.removeEventListener('hardwareBackPress', listener)
            }
        }, [listener])
    )
}
