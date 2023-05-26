import axios from 'axios'
import config from '../config'


export const getProductApi = async (params) => {

    const response = await axios({
        method: 'get',
        url: `${config.api.base_url}products`,
        params: params,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${config.api.token}`
        }
    })
    return response
}

export default getProductApi