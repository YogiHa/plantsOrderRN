import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setOrderDevice } from '../../../store/actions/cartActions'
import { getCatalog } from '../../../store/actions/catalogActions'
import globalStyles from '../../../styles/globalStyles'
import Button from '../../../components/Button'

export default function Order() {
    const userDevices = useSelector((s) => s.user.devices)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCatalog())
    }, [])

    return (
        <View style={globalStyles.container}>
            <Text>Choose for which device you're ordering</Text>
            <FlatList
                keyExtractor={(item) => item.id}
                data={userDevices}
                renderItem={({ item: { id, name } }) => (
                    <Button text={name} onPress={() => dispatch(setOrderDevice(id))} />
                )}
            />
        </View>
    )
}
