(this.webpackJsonpmession1=this.webpackJsonpmession1||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),l=n.n(c),r=(n(14),n(1)),i=n(2),d=n(4),u=n(3),s=n(5),h=n(6),p=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).handleInput=function(t){console.log(t.keyCode),e.props.add(t)},e.handleInput=e.handleInput.bind(Object(h.a)(e)),e}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("input",{ref:"title",onKeyUp:this.handleInput}))}}]),t}(a.Component),m=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleDel=function(e){console.log(e.keyCode),n.props.del(e)},n.handleCheck=function(e){n.props.check(e)},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todo;return o.a.createElement("div",null,o.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c"),o.a.createElement("ul",null,t.map((function(t,n){if(!t.checked)return o.a.createElement("li",null,o.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:e.handleCheck.bind(e,n)}),t.title,o.a.createElement("button",{onClick:e.handleDel.bind(e,n)},"\u5220\u9664"))}))),o.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210"),o.a.createElement("ul",null,t.map((function(t,n){if(t.checked)return o.a.createElement("li",null,o.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:e.handleCheck.bind(e,n)}),t.title,"-- ",o.a.createElement("button",{onClick:e.handleDel.bind(e,n)},"\u5220\u9664"))}))))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).addItem=function(e){if(13===e.keyCode){var t=e.target.value,a=n.state.todo;a.push({title:t,checked:!1}),n.setState({todo:a}),console.log(n.state.todo),localStorage.setItem("todolist",JSON.stringify(a)),e.target.value=""}},n.check=function(e){var t=n.state.todo;t[e].checked=!t[e].checked,n.setState({todo:t}),console.log(t),localStorage.setItem("todolist",JSON.stringify(t))},n.del=function(e){var t=n.state.todo;t.splice(e,1),n.setState({todo:t}),localStorage.setItem("todolist",JSON.stringify(t))},n.state={todo:[]},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todolist"));e&&this.setState({todo:e})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,"TodoList:"),o.a.createElement(p,{add:this.addItem}),o.a.createElement(m,{del:this.del,todo:this.state.todo,check:this.check}))}}]),t}(a.Component);l.a.render(o.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.6cb0f6ce.chunk.js.map