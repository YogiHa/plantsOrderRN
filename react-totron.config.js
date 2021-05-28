import AsyncStorage from '@react-native-community/async-storage'
import { reactotronRedux } from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'

global.console.log = Reactotron.log
global.console.warn = Reactotron.warn
global.console.error = Reactotron.error

Reactotron.setAsyncStorageHandler(AsyncStorage).configure().useReactNative().use(reactotronRedux()).connect()
