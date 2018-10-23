/**
 * system settings related service
 */
import {get} from '@/utils/http'
import api from '@/config/api.conf'

/**
 * search user list
 * @param  {Object} params query params
 * @return {Promise}
 */
export const queryUsers = (params) => {
    return get(api.USER_LIST, params)
}
