import { connect } from 'react-redux'
import Detail from './component'
import * as actionCreator from './store/actionCreator'

const mapStateToProps = state =>({
	 title: state.detail.title,
	 date: state.detail.date,
	 content: state.detail.content,
})

const mapDispatch = dispatch => ({
	changeDetail(data) {
		const action = actionCreator.changeDetail(data)
		dispatch(action)
	}
})

export default connect( mapStateToProps , mapDispatch)( Detail )
