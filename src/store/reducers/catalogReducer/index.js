import { GET_CATALOG } from '../../consts/catalog'
import initalState from '../initialState'

export default (state = initalState.catalog, action) => {
    switch (action.type) {
        case GET_CATALOG:
            return action.catalog
        default:
            return state
    }
}
