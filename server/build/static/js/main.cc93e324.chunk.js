(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,n,t){e.exports=t(318)},318:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(6),i=t.n(o),c=(t(107),t(79)),l=t.n(c),s=t(70),u=t(71),p=t(80),g=t(73),d=t(81),h=(t(108),t(27)),m=t.n(h),f=t(47),v="add_list_item",b="get_init_list",x="get_total_count",w="get_change_list",_="geted_change_list",y="change_loading",O="login",C="login_loading",E="delete_msg_by_id",k=function(e){return{type:"geted_init_list",value:e}},j=function(e){return{type:"geted_total_count",value:e}},L=function(){return{type:"added_list_item"}},N=function(){return{type:"login_success"}},S=(t(167),t(106)),V=t.n(S),P=(t(178),t(152)),T=t.n(P),D=(t(110),t(100)),I=t.n(D),B=(t(60),t(55)),J=t.n(B),M=(t(59),t(30)),R=t.n(M),U=(t(180),t(151)),X=t.n(U),z=(t(111),t(15)),$=t.n(z),H=(t(183),t(105)),Q=t.n(H),q=t(57),A=t(58);function F(){var e=Object(q.a)(["\n    margin: 30px 200px;\n    @media screen and (max-width: 960px) {\n        margin: 30px 100px;\n    }\n    @media screen and (max-width: 670px) {\n        margin: 30px 50px;\n    }\n    .login_modal {\n        .ant-modal-footer{\n            text-align: center;\n        }\n    }\n"]);return F=function(){return e},e}function G(){var e=Object(q.a)(["\n\n"]);return G=function(){return e},e}function K(){var e=Object(q.a)(["\n    display: block;\n    text-align: right;\n    padding: 5px;\n    font-size: 12px;\n    line-height: 12px;\n    margin-bottom: -15px;\n    b {\n        color: #eee;\n    }\n    span {\n        color: #999;\n        padding-right: 10px;\n    }\n    a {\n        color: #40a9ff;\n        padding-left: 10px;\n    }\n"]);return K=function(){return e},e}function W(){var e=Object(q.a)(["\n    font-size: 20px;\n"]);return W=function(){return e},e}var Y=A.a.div(W()),Z=A.a.div(K()),ee=A.a.div(G()),ne=A.a.div(F()),te=function(e){function n(){return Object(s.a)(this,n),Object(p.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement(J.a,{placeholder:"Enter your username",style:{marginBottom:"20px"},type:"text",prefix:r.a.createElement($.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),maxLength:16,value:this.props.userName,onChange:this.props.onChangeUserName}),r.a.createElement(J.a,{placeholder:"Enter your password",type:"password",prefix:r.a.createElement($.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),maxLength:16,value:this.props.password,onChange:this.props.onChangePassword}))}}]),n}(a.Component),ae=Object(f.b)(function(e){return{userName:e.userName,password:e.password}},function(e){return{onChangeUserName:function(n){var t={type:"change_username",value:n.target.value};e(t)},onChangePassword:function(n){var t={type:"change_password",value:n.target.value};e(t)}}})(te);var re=function(e){var n,t=r.a.createElement(Q.a,null,r.a.createElement(Q.a.Item,{key:"1",onClick:e.logout},"\u6ce8\u9500"));return n=e.loginSuccess?r.a.createElement(X.a,{overlay:t,trigger:["click"]},r.a.createElement("span",{style:{userSelect:"none",fontSize:"16px",color:"#999",lineHeight:"16px"}},r.a.createElement($.a,{type:"user"}),e.userName)):r.a.createElement(R.a,{onClick:e.handleLoginShow},"\u767b\u9646"),r.a.createElement(ne,null,r.a.createElement(J.a,{value:e.inputValue,onChange:function(n){e.change(n)},placeholder:"Leaving a message",maxLength:64,style:{width:"300px",marginRight:"20px"}}),r.a.createElement(R.a,{type:"primary",onClick:function(){e.handleBtnClick(e.inputValue)}},"\u7559\u8a00"),r.a.createElement("div",{style:{float:"right",cursor:"pointer"}},n),r.a.createElement(V.a,{style:{margin:"30px 0 10px 0"},dataSource:e.list,itemLayout:"vertical",footer:r.a.createElement(I.a,{showQuickJumper:!0,hideOnSinglePage:!0,defaultCurrent:1,total:e.totalCount,showTotal:function(e){return"\u5171  ".concat(e,"  \u6761\u7559\u8a00")},onChange:e.onPageChange}),renderItem:function(n){return r.a.createElement(V.a.Item,{style:{margin:"10px 0"},"data-ind":n.id,extra:r.a.createElement(Z,null,r.a.createElement("span",null,n.date.replace("T","  ").replace(/\.\w*$/,"")),r.a.createElement("b",null,"|"),r.a.createElement("a",{href:"#",onClick:function(t){t.preventDefault(),e.handleDelete(n.id,e.loginSuccess,n.content,e.curPage)}},"\u5220\u9664"))},r.a.createElement(T.a,{loading:e.loading,active:!0},r.a.createElement(Y,null,n.content)))}}),r.a.createElement(l.a,{title:"\u767b\u9646",bodyStyle:{paddingLeft:"40px",paddingRight:"40px"},visible:e.loginVisible,width:350,wrapClassName:"login_modal",onOk:function(){e.handleLogin({userName:e.userName,password:e.password})},onCancel:e.handleLoginCancel,footer:[r.a.createElement(R.a,{key:"submit",type:"primary",loading:e.loginLoading,onClick:function(){e.handleLogin({userName:e.userName,password:e.password})}},"\u767b\u9646")]},r.a.createElement(ee,null,r.a.createElement(ae,null))))};t(297);m.a.config({top:100,duration:2,maxCount:3});var oe=function(e){function n(){return Object(s.a)(this,n),Object(p.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(re,{inputValue:this.props.inputValue,list:this.props.list,change:this.props.change,handleBtnClick:this.props.handleBtnClick,totalCount:this.props.totalCount,onPageChange:this.props.onPageChange,loading:this.props.loading,loginVisible:this.props.loginVisible,handleLoginCancel:this.props.handleLoginCancel,handleLoginShow:this.props.handleLoginShow,handleLogin:this.props.handleLogin,userName:this.props.userName,password:this.props.password,loginLoading:this.props.loginLoading,loginSuccess:this.props.loginSuccess,handleDelete:this.props.handleDelete,curPage:this.props.curPage,logout:this.props.logout})}},{key:"componentDidMount",value:function(){this.props.init(),this.props.getTotalCount()}}]),n}(a.Component),ie=Object(f.b)(function(e){return{inputValue:e.inputValue,list:e.list,totalCount:e.totalCount,loading:e.loading,loginVisible:e.loginVisible,loginLoading:e.loginLoading,userName:e.userName,password:e.password,loginSuccess:e.loginSuccess,curPage:e.curPage}},function(e){return{logout:function(){e({type:"logout"})},change:function(n){var t={type:"change_input_value",value:n.target.value};e(t)},handleBtnClick:function(n){if(!(n=n.replace(/(^\s*)|(\s*$)/g,"")))return m.a.error("sorry,\u60a8\u7684\u7559\u8a00\u5185\u5bb9\u4e0d\u89c4\u8303\u5662~"),void e(L());var t=function(e){return{type:v,value:e}}(n);e(t)},init:function(){var n;e({type:b,value:n})},onPageChange:function(n){var t={type:w,value:n};e({type:y}),e({type:"update_curpage",page:n}),e(t)},getTotalCount:function(){e({type:x})},handleLoginCancel:function(){m.a.destroy(),e({type:"visible_false"}),e({type:"init_login_input"})},handleLogin:function(n){var t=function(e){return{type:O,loginInfo:e}}(n);e({type:C,value:!0}),e(t)},handleLoginShow:function(){m.a.destroy(),e({type:"visible_true"})},handleDelete:function(n,t,a,r){t?l.a.confirm({title:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u6761\u7559\u8a00\u5417\uff1f",content:'"'.concat(a,'"'),okText:"\u5220\u9664",okType:"danger",cancelText:"\u518d\u60f3\u4e00\u4e0b",onOk:function(){var t={type:E,value:{id:n,curPage:r}};e(t)},onCancel:function(){console.log("Cancel")}}):m.a.warning("\u975e\u5e38\u62b1\u6b49~~\u767b\u9646\u540e\u624d\u80fd\u8fdb\u884c\u5220\u9664\u64cd\u4f5c")}}})(oe),ce=t(48),le={inputValue:"",list:[],curPage:1,totalPage:1,totalCount:1,loading:!0,loginVisible:!1,loginLoading:!1,userName:"",password:"",loginSuccess:!1},se=t(153),ue=t(19),pe=t.n(ue),ge=t(13),de=t(40),he=t.n(de),me=pe.a.mark(ye),fe=pe.a.mark(Oe),ve=pe.a.mark(Ce),be=pe.a.mark(Ee),xe=pe.a.mark(ke),we=pe.a.mark(je),_e=pe.a.mark(Le);function ye(){return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ge.c)(b,Oe);case 2:return e.next=4,Object(ge.c)(x,Ce);case 4:return e.next=6,Object(ge.c)(w,Ee);case 6:return e.next=8,Object(ge.c)(v,ke);case 8:return e.next=10,Object(ge.c)(O,je);case 10:return e.next=12,Object(ge.c)(E,Le);case 12:case"end":return e.stop()}},me)}function Oe(){var e,n,t;return pe.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=window.btoa("page=1"),a.next=4,he.a.get("/list?"+e);case 4:return n=a.sent,console.log(n),t=k(n.data),a.next=9,Object(ge.b)({type:y});case 9:return a.next=11,Object(ge.b)(t);case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),console.log("can not get /data",a.t0);case 16:case"end":return a.stop()}},fe,null,[[0,13]])}function Ce(){var e,n;return pe.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,he.a.get("/totalCount");case 3:return e=t.sent,console.log(e),n=j(e.data[0].totalCount),t.next=8,Object(ge.b)(n);case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("can not get totalCount",t.t0);case 13:case"end":return t.stop()}},ve,null,[[0,10]])}function Ee(e){var n,t;return pe.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n="page=".concat(e.value),console.log(e,n),n=window.btoa(n),a.next=6,he.a.get("/list?".concat(n));case 6:return t=a.sent,a.next=9,Object(ge.b)({type:_,value:t.data});case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log("can not get changeList",a.t0);case 14:case"end":return a.stop()}},be,null,[[0,11]])}function ke(e){var n;return pe.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=L(),t.next=3,he.a.post("/addMessage",{msg:e.value});case 3:return t.next=5,Object(ge.a)(Oe);case 5:return t.next=7,Object(ge.b)(n);case 7:case"end":return t.stop()}},xe)}function je(e){return pe.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,he.a.post("/login",{userName:e.loginInfo.userName,password:e.loginInfo.password});case 2:if(n.sent.data.length){n.next=8;break}m.a.error("\u5bf9\u4e0d\u8d77\uff0c\u60a8\u8f93\u5165\u7684\u7528\u6237\u4fe1\u606f\u4e0d\u6b63\u786e~"),n.next=11;break;case 8:return m.a.success("\u767b\u9646\u6210\u529f\uff01"),n.next=11,Object(ge.b)(N());case 11:return n.next=13,Object(ge.b)({type:C,value:!1});case 13:case"end":return n.stop()}},we)}function Le(e){var n,t,a;return pe.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.value,t=n.id,a=n.curPage,r.next=3,he.a.post("/delete",{id:t});case 3:return r.next=5,Object(ge.a)(Ce);case 5:return r.next=7,Object(ge.a)(Ee,{value:a});case 7:case"end":return r.stop()}},_e)}var Ne=ye,Se=Object(se.a)(),Ve=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):ce.c)(Object(ce.a)(Se)),Pe=Object(ce.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,n=arguments.length>1?arguments[1]:void 0,t=JSON.parse(JSON.stringify(e));switch(n.type){case"init_login_input":return t.userName=t.password="",t;case"logout":return t.userName=t.password="",t.loginSuccess=!1,t;case"login_success":return t.password="",t.loginLoading=t.loginVisible=!1,t.loginSuccess=!0,t;case"change_input_value":return t.inputValue=n.value,t;case"geted_init_list":case"initList":return t.list=n.value,t.loading=!1,t;case"added_list_item":return t.inputValue="",t.loading=!1,t;case"delete_list_item":return t.list.splice(n.value,1),t.loading=!1,t;case"geted_total_count":return t.totalCount=n.value,console.log(n.value),t;case _:return t.list=n.value,t.loading=!1,t;case y:return t.loading=!0,t;case"visible_false":return t.loginVisible=!1,t;case"visible_true":return t.loginVisible=!0,t;case"change_username":return t.userName=n.value,t;case"change_password":return t.password=n.value,t;case C:return t.loginLoading=n.value,t;case"update_curpage":return t.curPage=n.page,t;default:return t}},Ve);Se.run(Ne);var Te=Pe;i.a.render(r.a.createElement(f.a,{store:Te},r.a.createElement(ie,null)),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.cc93e324.chunk.js.map