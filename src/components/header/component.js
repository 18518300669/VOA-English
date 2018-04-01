import React, { Component } from 'react';

import header_css from './header.mcss'
import {Form, Input, Row, Col, Menu, Icon, Button, Modal  } from 'antd';

const FormItem = Form.Item;

class Header extends Component {

    shouldComponentUpdate(nextProps) {                            //除了这几个条件外，头部如果没有发生改变，头部不重新加载   
        if (nextProps.list.length !== this.props.list.length) {
            return true
        }else if (nextProps.isLogin !== this.props.isLogin){
            return true
        }else if (nextProps.showModal !== this.props.showModal){
            return true
        }else{
            return false
        }
    }

  render() {
    const { getFieldDecorator } = this.props.form;
  	const logo = require("../../assets/logo.png")
  	const menu_item = this.props.list.map( (item, index) => {
  		return (
  			<Menu.Item className={header_css.li_height} key={item.id}>
		    	<Icon type="appstore" />{item.title}
		   	</Menu.Item>
		   	)
  	} )

    let button=null
    if(this.props.isLogin){
        button = <Button onClick={this.props.logout} className={header_css.btn} type="primary">退出</Button>

    }else{
        button = <Button onClick={this.props.toggleModal} className={header_css.btn} type="primary">登陆</Button>

    }


    return (
      <div>
        <Row>
	        <Col span={4}>
	        	<img alt="logo" onClick={this.handleClick.bind(this)} className={header_css.logo}  src={logo}/>
	        </Col>
	        <Col span={18}>
	       		<Menu mode="horizontal">
				 	{menu_item}

				</Menu>
	        </Col>
            <Col span={2}>
                {button}
	        </Col>
	    </Row>

        <Modal
            visible={this.props.showModal}
            title="登陆"
            onOk={this.handleSubmit.bind(this)}
            onCancel={this.props.toggleModal}
            okText="登陆"
            cancelText="取消"
        >
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                      rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: '请输入密码!' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>

            </Form>
        </Modal>
      </div>
    );
  }

  componentDidMount(){						//写在生命周期里
	fetch('/api/header.json')
		.then(res => res.json())			//fetch返回的值是链式，直接拿不到，必须做这一步
		.then(res => {
			if(res && res.ret && res.data){
				this.props.changeList(res.data.list)
			}
		})

  }
  handleClick(){
  	this.props.history.push("/")
  }
  handleSubmit(){
      this.props.form.validateFields((err, values) => {
     if (!err) {
         console.log(values);
       fetch('api/login.json?username=' + values.userName + "&password=" +values.password)
        .then( res => res.json() )
        .then( res => {
            if( res && res.ret && res.data) {
                this.props.login()
            }
        })
     }
   });
  }
}


export default  Form.create()(Header)
