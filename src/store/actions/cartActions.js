import { ADD_TO_CART, CLEAR_CART, SET_ORDER_DEVICE } from '../consts/cart'

export const setOrderDevice = (device) => (dispatch) => dispatch({ type: SET_ORDER_DEVICE, device })

export const addToCart = (imageId, name, id, count) => (dispatch) => {
    dispatch({ type: ADD_TO_CART, id, data: { imageId, name, count } })
}

export const clearCart = () => (dispatch) => dispatch({ type: CLEAR_CART })

export const completeOrder = () => (dispatch, getState) => {
    const currentOrder = getState().cart.order
    dispatch({ type: CLEAR_CART, currentOrder })
}
