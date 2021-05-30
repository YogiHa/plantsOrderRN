import { ADD_TO_CART, CLEAR_CART, SET_ORDER_DEVICE } from '../../consts/cart'
import initalState from '../initialState'

export default (state = initalState.cart, action) => {
    switch (action.type) {
        case SET_ORDER_DEVICE:
            return { ...state, device: action.device }
        case ADD_TO_CART:
            const {
                id,
                data: { count }
            } = action
            if (!!count) return { ...state, order: { ...state.order, [id]: action.data } }
            else {
                let modState = { ...state }
                delete modState.order[id]
                return modState
            }
        case CLEAR_CART:
            return initalState.cart
        default:
            return state
    }
}
