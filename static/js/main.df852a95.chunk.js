(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{20:function(t,e,n){t.exports=n(31)},25:function(t,e,n){},26:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(17),c=n.n(o),r=(n(25),n(19)),l=n(7),s=n(8),u=n(10),d=n(9),v=(n(26),n(12)),p=n(11),h=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{id:"notesList"},i.a.createElement("h1",null,"Your Notes"),i.a.createElement("div",null,this.props.notes.map((function(e){return i.a.createElement(v.a,null,i.a.createElement(v.a.Body,null,i.a.createElement(v.a.Title,null,e.title,i.a.createElement(p.a,{variant:"light",onClick:function(){return t.props.setEditingNoteFunc(e.index)}},"Edit"),i.a.createElement(p.a,{variant:"danger",onClick:function(){return t.props.deleteNoteFunc(e.index)}},"Delete")),i.a.createElement(v.a.Text,null,e.text)))}))))}}]),n}(a.Component),m=n(6),x=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={title:"",text:""},a}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{id:"addNote"},i.a.createElement("h1",null," ",this.props.editing?"Editing Note":"Create Note"," "),i.a.createElement(m.a,null,i.a.createElement(m.a.Group,{controlId:"createTitle"},i.a.createElement(m.a.Label,null,"Title"),i.a.createElement(m.a.Control,{type:"textarea",placeholder:"Title",onChange:this.props.setActiveTitleFunc,value:this.props.activeTitle})),i.a.createElement(m.a.Group,{controlId:"setText"},i.a.createElement(m.a.Label,null,"Text"),i.a.createElement(m.a.Control,{as:"textarea",rows:"8",placeholder:"Text",onChange:this.props.setActiveTextFunc,id:"noteText",value:this.props.activeText})),i.a.createElement(p.a,{variant:"primary",onClick:this.props.editing?function(){return t.props.editNoteFunc()}:function(){return t.props.addNoteFunc()}},this.props.editing?"Edit Note":"Create Note")))}}]),n}(a.Component),T=(n(30),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).clearNote=function(){a.setState({activeTitle:""}),a.setState({activeText:""})},a.addNote=function(){var t={title:a.state.activeTitle,text:a.state.activeText,index:a.state.notes.length};a.setState((function(e){return{notes:[].concat(Object(r.a)(e.notes),[t])}})),a.clearNote(),a.setState({editing:!1})},a.setEditingNote=function(t){a.setState({editing:!0}),a.setState({editIndex:t}),a.setState({activeTitle:a.state.notes[t].title}),a.setState({activeText:a.state.notes[t].text})},a.setActiveTitle=function(t){a.setState({activeTitle:t.target.value})},a.setActiveText=function(t){a.setState({activeText:t.target.value})},a.editNote=function(){console.log("editing note");var t=a.state.notes;t[a.state.editIndex].title=a.state.activeTitle,t[a.state.editIndex].text=a.state.activeText,a.setState({notes:t}),a.setState({editing:!1}),a.clearNote()},a.deleteNote=function(t){var e=a.state.notes;e.splice(t,1),a.setState({notes:e})},a.state={notes:[{title:"placeholder title",text:"placeholder text",index:0}],activeTitle:"",activeText:"",editing:!1,editIndex:0},a}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(x,{addNoteFunc:this.addNote,setActiveTitleFunc:this.setActiveTitle,setActiveTextFunc:this.setActiveText,editing:this.state.editing,activeTitle:this.state.activeTitle,activeText:this.state.activeText,editNoteFunc:this.editNote}),i.a.createElement(h,{notes:this.state.notes,setEditingNoteFunc:this.setEditingNote,deleteNoteFunc:this.deleteNote}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.df852a95.chunk.js.map