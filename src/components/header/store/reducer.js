import * as actionTypes from './actionTypes'

const defaultState = {
  		list:[],
        showModal: false,
        isLogin:false
  	}

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.CHANGE_LIST:
			return {
				...state,
				list:action.value
			}
        case actionTypes.CHANGE_SHOWMODAL:
			return {
				...state,
				showModal:!state.showModal
			}
        case actionTypes.LOGIN:
			return {
				...state,
				isLogin:true,
                showModal: false
			}
        case actionTypes.LOGOUT:
			return {
				...state,
				isLogin:false,
			}

		default:
			return state
	}

}
