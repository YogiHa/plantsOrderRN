if (__DEV__) import('./react-totron.config')

import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './src/store'
import Loading from './src/components/Loading'
import Screens from './src/screens'
import globalStyles from './src/styles/globalStyles'
import axios from 'axios'
import { BASE_URL } from '@env'

export default function App() {
    axios.defaults.baseURL = `${BASE_URL}/data/catalogs`
    return (
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <SafeAreaView style={globalStyles.safeAreaTop} />
                <SafeAreaView style={globalStyles.safeAreaBottom}>
                    <StatusBar barStyle="dark-content" />
                    <Screens />
                </SafeAreaView>
            </PersistGate>
        </Provider>
    )
}
