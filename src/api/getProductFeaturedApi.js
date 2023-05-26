import axios from 'axios'
import config from '../config'


export const getProductFeaturedApi = async (params) => {
    const response = await axios({
        method: 'get',
        url: `${config.api.base_url}featured`,
        params: params,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${config.api.token}`
        }
    })
    return response
}

export default getProductFeaturedApi