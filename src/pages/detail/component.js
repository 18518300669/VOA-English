import React, { Component } from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

export default class Detail extends Component {

	componentWillReceiveProps(nextProps) {							//详情页与详情页之间跳转时地址已经改变，但是内容没有请求，在这个钩子里解决这个问题
		if( nextProps.match.params.id !== this.props.match.params.id ){
			this.getDetailInfo(nextProps.match.params.id)
		}
	}


	render(){
		const title = this.props.title + '('+ this.props.date + ')'

		return (
			<div>
				<Card title={ title } style={{marginTop:"15px"}}>
			    	<p dangerouslySetInnerHTML={{__html:this.props.content}}></p>
					<Link to='/detail/0001'>跳转到0001详情页</Link>
				</Card>
			</div>

		)

	}

	componentDidMount(){

		this.getDetailInfo(this.props.match.params.id)



	}
	getDetailInfo(id){

		fetch('/api/detail.json?id=' + id)
			.then( res => res.json())
			.then( res => {
				if(res && res.ret && res.data){
					this.props.changeDetail(res.data);
				}

			})
	}

}
