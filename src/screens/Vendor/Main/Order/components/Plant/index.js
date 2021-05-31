import React, { useCallback, useMemo, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BASE_URL } from '@env'
import { colors, SCREEN_WIDTH } from '../../../../../../styles/vars'
import Button from '../../../../../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../../../../store/actions/cartActions'
import { useNavigation } from '@react-navigation/native'

export default function Plant({ item: { imageId, name, id, ...item } }) {
    const countOrder = useSelector((s) => s.cart.order[id]?.count) || 0
    const [count, setCount] = useState(countOrder)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const NavToVeg = useCallback(() => navigation.navigate('VegInfo', { imageId, name, ...item }), [id])
    const placeHolderImg = useMemo(() => require('../../../../../../../assets/img/veg-place-holder.png'), [])

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={NavToVeg}>
                <Text numberOfLines={2} adjustsFontSizeToFit style={styles.plantName}>
                    {name}
                </Text>
                <Image
                    width={SCREEN_WIDTH / 3.5}
                    height={SCREEN_WIDTH / 3.5}
                    resizeMode={'contain'}
                    style={styles.vegImg}
                    defaultSource={placeHolderImg}
                    source={
                        imageId
                            ? {
                                  uri: `${BASE_URL}/images/vegetables/${imageId}@3x.jpg`
                              }
                            : placeHolderImg
                    }
                />
            </TouchableOpacity>
            <View style={styles.bottomRow}>
                <Button
                    containerStyle={styles.bottomRowButton}
                    text={'-'}
                    onPress={() => setCount((prev) => prev - 1)}
                    disabled={!count}
                    textStyle={styles.bottomRowButtonTextStyle}
                />
                <Text style={styles.countText}>{count}</Text>
                <Button
                    containerStyle={styles.bottomRowButton}
                    text={'+'}
                    onPress={() => setCount((prev) => prev + 1)}
                    textStyle={styles.bottomRowButtonTextStyle}
                />
                <Button
                    disabled={count == countOrder}
                    containerStyle={styles.bottomRowButton}
                    text={'V'}
                    onPress={() => dispatch(addToCart(imageId, name, id, count))}
                    textStyle={styles.bottomRowButtonTextStyle}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        width: SCREEN_WIDTH / 3,
        marginEnd: SCREEN_WIDTH / 7.5
    },
    plantName: {
        textAlign: 'center',
        color: colors.brown,
        fontWeight: '500',
        height: 33,
        alignItems: 'center',
        justifyContent: 'center'
    },
    vegImg: {
        height: SCREEN_WIDTH / 3.5,
        width: SCREEN_WIDTH / 3.5,
        resizeMode: 'contain',
        borderRadius: 25,
        margin: 7
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    bottomRowButton: {
        width: SCREEN_WIDTH / 13,
        height: SCREEN_WIDTH / 14
    },
    bottomRowButtonTextStyle: { padding: 0 },
    countText: { color: colors.brown, paddingHorizontal: 5, fontWeight: '700' }
})
