import { createStore, applyMiddleware, compose } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import appReducer from './reducers'

const storageConfig = {
    key: 'rootState',
    storage: AsyncStorage,
    whitelist: ['cart'],
    timeout: 0
}

const reducer = persistReducer(storageConfig, appReducer)

export const store = createStore(reducer, compose(applyMiddleware(thunk)))

export const persistor = persistStore(store)
