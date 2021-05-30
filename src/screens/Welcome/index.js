import React from 'react'
import { Text, View } from 'react-native'
import Button from '../../components/Button'
import globalStyles from '../../styles/globalStyles'
import styles from './styles'

export default function Welcome({ navigation }) {
    return (
        <View style={[globalStyles.container, styles.container]}>
            <Text style={styles.title}>Welcome!</Text>
            <Button
                textStyle={globalStyles.fullButtonTextPadding}
                text={'continue as guest'}
                onPress={() => navigation.navigate('Vendor')}
            />
        </View>
    )
}
