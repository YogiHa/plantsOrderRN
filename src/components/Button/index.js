import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, SCREEN_WIDTH } from '../../styles/vars'

export default function Button({ text = '', onPress = () => {}, containerStyle = {}, textStyle = {} }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.defaultContainer, containerStyle]}>
            <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    defaultContainer: {
        borderRadius: 25,
        minWidth: SCREEN_WIDTH / 2.5,
        borderColor: colors.brown,
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    defaultText: { padding: 10, color: colors.brown }
})
