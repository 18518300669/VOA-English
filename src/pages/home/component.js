import React, { Component } from 'react'
import { List, Avatar } from 'antd'
import home_css from './home.mcss'
import { Link } from 'react-router-dom'   //跳转用

export default class Home extends Component {
	render(){

		return  <List
					header={<div>VOA英文学习</div>}
					className={home_css.wrap}
					bordered={true}
				    itemLayout="horizontal"
				    dataSource={this.props.list}
				    renderItem={item => (
				      <List.Item>
				        <List.Item.Meta
				          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
				          title={<Link to={'/detail/' + item.id }>[ {item.category } ]{item.title} ( {item.date} )</Link>}
				          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
				        />
				      </List.Item>
				    )}
				  />
	}

	componentDidMount() {
		if( !this.props.list.length ){							//页面刚打开时候，首页请求数据，以后跳回到首页就不请求数据了
			fetch('/api/home.json')
				.then( res => res.json())
				.then(res => {
					if(res && res.ret && res.data) {
						this.props.changeList(res.data.list)
					}
				})
		}

	}
}
