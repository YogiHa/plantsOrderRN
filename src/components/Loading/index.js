import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { colors, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../styles/vars'

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.brown} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        zIndex: 99,
        top: 0,
        left: 0,
        backgroundColor: colors.grey,
        opacity: 0.9,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})
