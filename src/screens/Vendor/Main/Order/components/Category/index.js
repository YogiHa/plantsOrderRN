import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { colors } from '../../../../../../styles/vars'
import Plant from '../Plant'

export default function Category({ item: { name, plants } }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <FlatList
                keyExtractor={(item) => item.id}
                horizontal
                data={plants}
                renderItem={({ item }) => <Plant item={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, marginBottom: 15 },
    title: {
        color: colors.brown,
        fontSize: 17,
        fontWeight: '600',
        textDecorationLine: 'underline',
        marginBottom: 10
    }
})
