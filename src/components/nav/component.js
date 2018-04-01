import React, { Component } from 'react';

import nav_css from './nav.mcss'

export default class Nav extends Component {

    shouldComponentUpdate(nextProps) {                            //除了这几个条件外，Nav如果没有发生改变，头部不重新加载
        if (nextProps.data.list.length !== this.props.data.list.length) {
            return true

        }else{
            return false
        }
    }

    render(){

        return (

            <table className={nav_css.tableWrap} rules="all" >
                <tbody>
                    <tr>
                        {this.props.data.list.map( (item,index) => {
                            return (

                                    <th key={index}><a href="javascript:;">{item.title}</a></th>


                            )
                        })}
                    </tr>
                    <tr>
                        {this.props.data.list.map( (item,inde) => {
                            return (
                                <td key={inde}>
                                    {item.content.map( (it,ind) => {
                                        return (
                                            <p key={ind}><a href="javascript:;">{it}</a></p>
                                        )
                                    })}
                                </td>
                            )



                        })}

                    </tr>
                </tbody>
            </table>
        )
    }

    componentDidMount(){						//写在生命周期里
      fetch('/api/nav.json')
          .then(res => res.json())			//fetch返回的值是链式，直接拿不到，必须做这一步
          .then(res => {
              if(res ){
                  this.props.changeData(res)
              }
          })

    }
}
