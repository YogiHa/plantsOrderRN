import { SET_ORDER_DEVICE } from '../../consts/cart'
import initalState from '../initialState'

export default (state = initalState.cart, action) => {
    switch (action.type) {
        case SET_ORDER_DEVICE:
            return { [action.device]: {} }
        default:
            return state
    }
}
