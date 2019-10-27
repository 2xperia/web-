import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'

export default class Todolist extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            todo:[]
            
        };
    }   

    addItem = (e) => {
        //按下回车的时候在增加

        if (e.keyCode === 13) {
            // alert(title);
            let title = e.target.value;
            let tempList = this.state.todo;
            tempList.push({
                title: title,
                checked: false
            })
            //改变后的值赋值给list
            this.setState({
                todo: tempList
            })
            console.log(this.state.todo);
            localStorage.setItem('todolist',JSON.stringify(tempList));
            //表单置为空
            e.target.value = '';
        }
    }

    check=(key)=>{

        // alert('111');
        let tempList=this.state.todo;

        tempList[key].checked=!tempList[key].checked;


        this.setState({

            todo:tempList
        })
        console.log(tempList)

        //执行缓存数据
        localStorage.setItem('todolist',JSON.stringify(tempList));

    }
    del=(key)=>{

        let tempList=this.state.todo;


        tempList.splice(key,1);


         this.setState({

            todo:tempList
        })
        //执行缓存数据
        localStorage.setItem('todolist',JSON.stringify(tempList));


    }

    componentDidMount(){

        //获取缓存的数据

        var todolist=JSON.parse(localStorage.getItem('todolist'));   /*字符串*/

        if(todolist){

            this.setState({

                todo:todolist
            })
        }

    }
    render() {
        return (
            <div>   
                <div>TodoList:</div>
                <Todoinput add={this.addItem}/>  
                <Todoing del={this.del} todo={this.state.todo} check={this.check}/>    
            </div>
        );
    }
}
 