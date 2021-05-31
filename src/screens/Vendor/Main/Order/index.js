import React, { Fragment, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, completeOrder, setOrderDevice } from '../../../../store/actions/cartActions'
import { getCatalog } from '../../../../store/actions/catalogActions'
import globalStyles from '../../../../styles/globalStyles'
import Button from '../../../../components/Button'
import { colors, SCREEN_WIDTH } from '../../../../styles/vars'
import useBackButton from '../../../../utils/useBackButton'
import Loading from '../../../../components/Loading'
import Category from './components/Category'

export default function Order() {
    const userDevices = useSelector((s) => s.user.devices)
    const { device: cartDevice, order: currentOrder } = useSelector((s) => s.cart)
    const catalog = useSelector((s) => s.catalog)
    const dispatch = useDispatch()
    useBackButton(() => (cartDevice.id ? dispatch(clearCart()) : false))

    useEffect(() => {
        dispatch(getCatalog())
    }, [])

    return (
        <View style={globalStyles.container}>
            {!cartDevice.id ? (
                <Fragment>
                    <Text style={styles.title}>Choose for which device you're ordering</Text>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={userDevices}
                        renderItem={({ item }) => (
                            <Button
                                textStyle={globalStyles.fullButtonTextPadding}
                                containerStyle={styles.buttonItem}
                                text={item.name}
                                onPress={() => dispatch(setOrderDevice(item))}
                            />
                        )}
                    />
                </Fragment>
            ) : (
                <Fragment>
                    {!catalog.length && <Loading />}
                    <Button containerStyle={styles.backButton} text={'<-'} onPress={() => dispatch(clearCart())} />
                    <View style={styles.step2Header}>
                        <View style={globalStyles.row}>
                            <Text style={styles.title}>{cartDevice.name}</Text>
                        </View>
                        <Button
                            disabled={!Object.keys(currentOrder).length}
                            containerStyle={styles.completeOrderBtn}
                            text={'Complete order'}
                            onPress={() => dispatch(completeOrder())}
                        />
                    </View>
                    <FlatList
                        contentContainerStyle={styles.categoriesFlatlist}
                        keyExtractor={(item) => item.id}
                        data={catalog}
                        renderItem={Category}
                    />
                </Fragment>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    title: { color: colors.brown, fontSize: 22, textAlign: 'center', marginVertical: 35 },
    buttonItem: { marginBottom: 20 },
    categoriesFlatlist: { paddingHorizontal: 25 },
    step2Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: SCREEN_WIDTH * 0.05,
        alignItems: 'center',
        marginStart: 52
    },
    backButton: { height: 22, width: 22, position: 'absolute', top: 6, left: 3 },
    completeOrderBtn: { height: 22, width: SCREEN_WIDTH / 3 }
})
