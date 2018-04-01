
import { connect } from 'react-redux'
import Header from './component'
import * as actionCreator from './store/actionCreator'

const mapStateToProps = (state) => ({
	list : state.header.list,
	showModal: state.header.showModal,
	isLogin: state.header.isLogin
})

const mapDispatchToProps = (dispatch) => ({
	changeList(list) {
		const action = actionCreator.changeList(list)
		dispatch(action)
	},
	toggleModal(){
		const action = actionCreator.changeShowModal()
		dispatch(action)
	},
	login(){
		const action = actionCreator.login()
		dispatch(action)
	},
	logout(){
		const action = actionCreator.logout()
		dispatch(action)
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
