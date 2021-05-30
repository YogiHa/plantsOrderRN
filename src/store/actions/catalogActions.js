import axios from 'axios'
import { GET_CATALOG } from '../consts/catalog'

export const getCatalog = () => async (dispatch) => {
    dispatch({ type: GET_CATALOG, catalog: [] })

    const {
        data: { plants }
    } = await axios.get('plants.json')
    const {
        data: { categories }
    } = await axios.get('agwafarm.json')
    dispatch({
        type: GET_CATALOG,
        catalog: categories.map((category) => ({
            ...category,
            plants: category.plants.flatMap((plant) => {
                let plantInfo = plants.find((p) => p.id == plant.id)
                return plantInfo ? [plantInfo] : []
            })
        }))
    })
}
