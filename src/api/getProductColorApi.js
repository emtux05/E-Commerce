import axios from 'axios'
import config from '../config'


export const getProductColorApi = async (params) => {
    const response = await axios({
        method: 'get',
        url: `${config.api.base_url}colors`,
        params: params,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${config.api.token}`
        }
    })
    return response
}

export default getProductColorApi