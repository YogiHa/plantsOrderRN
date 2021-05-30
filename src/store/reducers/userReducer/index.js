import { CLEAR_CART } from '../../consts/cart'
import initalState from '../initialState'

export default (state = initalState.user, action) => {
    switch (action.type) {
        case CLEAR_CART:
            const { currentOrder } = action
            if (currentOrder) return { ...state, prevOrders: [...state.prevOrders, currentOrder] }
            else return state
        default:
            return state
    }
}
