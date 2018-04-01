import  * as actionTypes  from './actionTypes'

export const changeDetail = value => ({
	type:actionTypes.CHANGE_DETAIL,
    title: value.title,
    date: value.date,
    content:value.content
})
