import React, { useMemo } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import globalStyles from '../../../styles/globalStyles'
import { colors, SCREEN_WIDTH } from '../../../styles/vars'
import { BASE_URL } from '@env'

export default function VegInfo({
    route: {
        params: { name, imageId, description, lifeCycle, yield: vegYield, seedToCrop }
    }
}) {
    const placeHolderImg = useMemo(() => require('../../../../assets/img/veg-place-holder.png'), [])

    return (
        <View style={globalStyles.container}>
            <Text style={styles.title}>{name}</Text>
            <Image
                width={SCREEN_WIDTH * 0.8}
                height={SCREEN_WIDTH * 0.8}
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
            <Text style={styles.description}>{description}</Text>
            <View style={styles.extraDataRow}>
                <Text style={[styles.extraData, styles.extraDataT]}>Life cycle</Text>
                <Text style={styles.extraData}>{lifeCycle}</Text>
            </View>
            <View style={styles.extraDataRow}>
                <Text style={[styles.extraData, styles.extraDataT]}>yield</Text>
                <Text style={styles.extraData}>{vegYield}</Text>
            </View>
            <View style={styles.extraDataRow}>
                <Text style={[styles.extraData, styles.extraDataT]}>From seed to crop</Text>
                <Text style={styles.extraData}>{seedToCrop}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginVertical: 25,
        color: colors.brown,
        textDecorationLine: 'underline',
        fontSize: 28,
        textAlign: 'center'
    },
    vegImg: {
        resizeMode: 'contain',
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_WIDTH * 0.8,
        marginHorizontal: SCREEN_WIDTH * 0.1,
        borderRadius: 90
    },
    description: {
        marginHorizontal: SCREEN_WIDTH * 0.05,
        lineHeight: 30,
        color: colors.lightBrown,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600'
    },
    extraDataRow: {
        marginHorizontal: SCREEN_WIDTH * 0.15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    extraData: { color: colors.brown, fontSize: 18 },
    extraDataT: { textDecorationLine: 'underline' }
})
