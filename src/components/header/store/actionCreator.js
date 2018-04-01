import  * as actionTypes  from './actionTypes'

export const changeList = value => ({
	type:actionTypes.CHANGE_LIST,
	value:value
})
export const changeShowModal = () => ({
	type:actionTypes.CHANGE_SHOWMODAL,

})
export const login = () => ({
	type:actionTypes.LOGIN,

})

export const logout = () => ({
	type:actionTypes.LOGOUT,

})
