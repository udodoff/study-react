import * as types from './types'

export const changeName = (data) => ({
    type: types.CHANGE_NAME,
    payload: data
})
export const tooggleProfile = () => ({
    type: types.TOGGLE_PROFILE
})
export const auth = (auth) => ({
    type: types.IS_AUTH,
    payload: auth
})