import { SET_ORDER_DEVICE } from '../consts/cart'

export const setOrderDevice = (device) => (dispatch) => dispatch({ type: SET_ORDER_DEVICE, device })
