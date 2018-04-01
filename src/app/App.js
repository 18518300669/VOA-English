import React, { Component } from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import 'whatwg-fetch'
import { Provider } from 'react-redux';
import {View as Header } from '../components/header';
import {View as Home } from '../pages/home/'
import {View as Detail } from '../pages/detail/'
import {View as Nav } from '../components/nav/'


import './reset.css'
import 'antd/dist/antd.css'
import app_css from './app.mcss'
import store from '../store/'

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
          	<div className={app_css.wrap}>

           	  <BrowserRouter>
           	  	<div>
           	  		<Route path='/' component={Header}></Route>
                    <Route path='/' component={Nav}></Route>
           	  		<Switch>
           	  			<Route path='/detail/:id' component={Detail}></Route>
           	 			<Route path='/' component={Home}></Route>
           	 		</Switch>
           	 	</div>

           	  </BrowserRouter>
          	</div>
        </Provider>
    );
  }
}

export default App;
