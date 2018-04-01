import { connect } from 'react-redux'
import Home from './component'
import * as actionCreator from './store/actionCreator'


const mapStateToProps = state => ({
	list:state.home.list
})

const mapDispatchToProps = dispatch => ({
	changeList(list) {
		const action = actionCreator.changeList(list)
		dispatch(action)
	}
	
		
	
})

export default connect(mapStateToProps , mapDispatchToProps)(Home)
