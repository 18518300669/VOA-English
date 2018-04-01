import { connect } from 'react-redux'
import Nav from './component'
import * as actionCreator from './store/actionCreator'

const mapStateToProps = (state) => ({
    data:state.nav.data
})

const mapDispatchToProps = (dispatch) => ({
    changeData(data) {
        const action = actionCreator.changeDataa(data)
		dispatch(action)
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
