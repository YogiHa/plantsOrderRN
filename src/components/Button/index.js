import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, SCREEN_WIDTH } from '../../styles/vars'

export default function Button({
    text = '',
    onPress = () => {},
    containerStyle = {},
    textStyle = {},
    disabled = false
}) {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[styles.defaultContainer, disabled ? styles.disabled : {}, containerStyle]}
        >
            <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    defaultContainer: {
        borderRadius: 25,
        width: SCREEN_WIDTH * 0.9,
        marginHorizontal: SCREEN_WIDTH * 0.05,
        borderColor: colors.brown,
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    defaultText: { color: colors.brown },
    disabled: { backgroundColor: colors.lightBrown, opacity: 0.4 }
})
