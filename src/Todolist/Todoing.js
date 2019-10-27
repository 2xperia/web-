import React,{Component} from 'react'
//受控组件：value值被react控制的表单元素
//可以实时获取表单元素的值

export default class Todoing extends Component{
    handleDel=(e)=>{
        //绑定this，时间处理函数写成箭头函数，或者用bind
        console.log(e.keyCode);
        this.props.del(e);
        
    }
    handleCheck=(e)=>{
        this.props.check(e);
    }
    

    render(){
        var {todo} = this.props;
        return(
            <div>    
               <h2>正在进行</h2>
                <ul>
                    {   // eslint-disable-next-line
                        todo.map((value, key) => {
                            if (!value.checked) {
                                return (
                                    <li>
                                        <input type="checkbox" checked={value.checked} onChange={this.handleCheck.bind(this, key)}/>
                                        {value.title}
                                        <button onClick={this.handleDel.bind(this, key)}>删除</button>
                                    </li>
                                )
                            }
                        })

                    }
                </ul>
                <h2>已经完成</h2>
                <ul>
                    {   // eslint-disable-next-line
                        todo.map((value, key) => {
                            if (value.checked) {
                                return (
                                    <li>
                                        <input type="checkbox" checked={value.checked} onChange={this.handleCheck.bind(this, key)}/>
                                        {value.title}
                                        -- <button onClick={this.handleDel.bind(this, key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}
