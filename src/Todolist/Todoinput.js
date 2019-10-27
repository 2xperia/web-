import React,{Component} from 'react'
//受控组件：value值被react控制的表单元素
//可以实时获取表单元素的值

export default class Todoinput extends Component{

    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);


    }

    handleInput=(e)=>{
        //绑定this，时间处理函数写成箭头函数，或者用bind
        console.log(e.keyCode)
        this.props.add(e);
        
    }

    render(){
        return(
            <div>    
               <input ref="title" onKeyUp={this.handleInput}/>
            </div>
        )
    }
}
 