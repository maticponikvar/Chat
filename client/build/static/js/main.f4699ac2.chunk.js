(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),c=n.n(s),o=(n(93),n(14)),l=n(10),i=n(16),u=n(15),m=n(17),d=n(37),p=n(47),h=(n(94),function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"}))});function E(){return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(d.c,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/addpost"},"Add Post")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/signout"},"Sign out")))}var f=n(25),b=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"nav-wrapper left-align blue darken-4"},r.a.createElement("div",{className:"cointainer"},r.a.createElement("a",{href:"#",class:"brand-logo left"},"Chat Room"),r.a.createElement("ul",{className:"right"},this.props.loggedin?r.a.createElement(E,null):r.a.createElement(h,null))))}}]),t}(a.Component),g=Object(f.b)(function(e,t){return{loggedin:e.auth.loggedin}})(b),O=n(40),S=n.n(O),v=function(e,t){return{type:"POSTS_SUCCESS",status:"successful",posts:e,username:t}},y=function(e){return{type:"POSTS_ERROR",status:"error",error:e}},j=function(){return{type:"POSTS_REQUEST",status:"pending"}},C=function(){return function(e){S.a.get("/api/posts",{withCredentials:!0}).then(function(t){var n=t.data.posts,a=t.data.username;console.log(t),e(v(n,a))}).catch(function(t){e(y(t))}),e(j())}},N=function(e){return console.log(e),{type:"USERS_SUCCESS",status:"successful",usernames:e}},T=function(e){return{type:"USERS_ERROR",status:"error",error:e}},R=function(){return{type:"USERS_REQUEST",status:"pending"}},_=function(){return function(e){S.a.get("/api/auth/users",{withCredentials:!0}).then(function(t){var n=t.data.usernames;e(N(n))}).catch(function(t){e(T(t))}),e(R())}},w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.requestPosts(),this.props.requestUsers()}},{key:"render",value:function(){var e=this,t=this.props,n=t.postsdata,a=t.status,s=n.slice(0).reverse().map(function(t){console.log(e.props),e.props.loggedIn();var n=new Date(t.date);return n=n.toDateString(),r.a.createElement("div",{className:"post card",key:t._id},r.a.createElement("div",{className:"card-content"},r.a.createElement(d.b,{to:"/proposal/"+t._id,className:"black-text"},r.a.createElement("span",{className:"card-title blue-text"},t.title)," "),r.a.createElement("span",{className:"card-body"},t.content),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"right-align"},r.a.createElement("span",{style:{possition:"relative",float:"left"}},r.a.createElement("i",{className:"material-icons"},"comment"),t.comments?t.comments.length:"0"),r.a.createElement("span",{className:"card-body"},"Posted by ",t.author," "),r.a.createElement("span",{className:"card-footer"},"on ",n," "))))});return r.a.createElement("div",{className:"container"},"pending"===a?r.a.createElement("p",null,"loading"):s)}}]),t}(a.Component),k=Object(f.b)(function(e){return{loggedin:e.auth.loggedin,postsdata:e.postsdata.posts,users:e.users.users}},function(e){return{requestPosts:function(){return e(C())},requestUsers:function(){return e(_())},loggedIn:function(){e({type:"LOGGEDIN",loggedin:!0})}}})(w),U=n(38),D=function(){return{type:"CREATION_REQUEST",status:"pending"}},I=function(e,t){return console.log(t,"GETETETETSTATATA"),{type:"CREATION_SUCCESS",status:"successfulCreation",post:e}},P=function(e){return{type:"CREATION_ERROR",status:"errorPost",error:e}},A=function(e){return function(t,n){var a={title:e.title,content:e.content,permissions:e.selected};fetch("/api/posts/submitPost",{credentials:"include",method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then(function(a){t(I(e,n))}).catch(function(e){t(P(e))}),t(D())}},L=n(171),x=n(170),G=n(167),M=n(172),Q=n(165),q=n(174),W=n(175),F=n(169),J=function(e){function t(e){var n;Object(o.a)(this,t);var a=e.users,r=e.username,s=a.filter(function(e){return e!==r});return console.log(s,"Selcetion"),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSelection=function(e){n.setState({selected:e.target.value})},n.handleClose=function(){n.setState({open:!1})},n.handleOpen=function(){n.setState({open:!0})},n.handleChange=function(e){n.setState(Object(U.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.dispatch(A(n.state)),n.setState({content:"",title:"",selected:n.mmbrs})},n.mmbrs=a,n.state={title:"",content:"",author:"",open:!1,visibleFor:s,selected:a},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props,"PROPS"),r.a.createElement("div",{className:"container"},r.a.createElement("div",null,"successfulCreation"===this.props.status?r.a.createElement("h2",{className:"center-align"},"Successfully created"):"errorPost"===this.props.status?r.a.createElement("h2",{className:"center-align"},"Something went wrong"):r.a.createElement("h2",null," ")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-field"},r.a.createElement(L.a,{name:"title",onChange:this.handleChange,required:!0,value:this.state.title,placeholder:"Titile",multiline:!0,fullWidth:!0})),r.a.createElement("div",{className:"input-field"},r.a.createElement(L.a,{name:"content",onChange:this.handleChange,required:!0,value:this.state.content,placeholder:"Content",multiline:!0,fullWidth:!0})),r.a.createElement("div",null,r.a.createElement(G.a,null,r.a.createElement(F.a,{id:"openMenu",className:"blue darken-4 white-text z-depth-0",onClick:this.handleOpen,variant:"contained"},"Choose participants"),r.a.createElement(x.a,{multiple:!0,required:!0,name:"slected",value:this.state.selected,onChange:this.handleSelection,input:r.a.createElement(Q.a,{id:"select-multiple-checkbox "}),style:{display:"none"},open:this.state.open,onClose:this.handleClose,MenuProps:{anchorEl:document.getElementById("openMenu"),style:{marginTop:60}}},this.state.visibleFor.map(function(t,n){return r.a.createElement(W.a,{key:t+n,value:t},r.a.createElement(M.a,{checked:e.state.selected.indexOf(t)>-1}),r.a.createElement(q.a,{primary:t}))})))),r.a.createElement("br",null),r.a.createElement("div",{className:"center"},r.a.createElement("button",{className:"btn blue darken-4 z-depth-0",onClick:this.handleSubmit},"Sumbit"))))}}]),t}(a.Component),z=Object(f.b)(function(e){return console.log(e.postsdata.status,"state"),{users:e.users.users,username:e.postsdata.username,status:e.postsdata.status}})(J),B=function(){return{type:"CREATION_REQUEST",status:"pending"}},X=function(e,t){return console.log(t,"GETETETETSTATATA"),{type:"COMMENTCREATION_SUCCESS",status:"successful",comment:e}},H=function(e){return{type:"CREATION_ERROR",status:"error",error:e}},V=function(e){return console.log(e),function(t,n){console.log(n,"getstate");var a={comment:e,id:e.id};console.log(a,"DARA"),fetch("/api/posts/submitComment",{credentials:"include",method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then(function(n){t(X(e))}).catch(function(e){t(H(e))}),t(B())}},$=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(U.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.createComment(n.state),n.setState({comment:""})},n.state={comment:"",id:n.props.id},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-field"},r.a.createElement(L.a,{onSubmit:this.handleSubmit,name:"comment",onChange:this.handleChange,value:this.state.comment,required:!0,placeholder:"Write here",multiline:!0,fullWidth:!0})),r.a.createElement("div",{className:"center"},r.a.createElement("button",{className:"btn blue darken-4"},"Sumbit"))))))}}]),t}(a.Component),K=Object(f.b)(null,function(e,t){return{createComment:function(t){return e(V(t))}}})($),Y=function(e,t){return{type:"DELETION_SUCCESS",status:"successfulDeletion",id:e}},Z=function(e){return{type:"DELETION_ERROR",status:"error",error:e}},ee=function(){return{type:"DELETION_REQUEST",status:"pending"}},te=function(e){return function(t){var n={id:e};fetch("/api/posts/deletePost",{credentials:"include",method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then(function(n){t(Y(e))}).catch(function(e){t(Z(e))}),t(ee())}},ne=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(U.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.createComment(n.state)},n.handleDelete=function(e){n.props.dispatch(te(n.props.match.params.path_id)),n.props.history.push("/")},n.state={title:"",content:"",post:n.props.post},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.post,t=e.comments.map(function(t){var n=new Date(e.date);return n=n.toDateString(),r.a.createElement("div",{className:"post card",key:t._id},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-body"},t.comment),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"right-align"},r.a.createElement("span",{className:"card-footer",style:{float:"left"}},"Posted by ",e.author," on ",n),r.a.createElement("span",{className:"card-footer"},r.a.createElement("i",{className:"material-icons"},"thumb_up")))))}),n=this.props.match.params.path_id,a=this.props.post.author,s=this.props.username,c=new Date(e.date);return c=c.toDateString(),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"post card",key:e._id},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},e.title),r.a.createElement("span",{className:"card-body"},e.content),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"right-align"},r.a.createElement("span",{className:"card-footer",style:{float:"left"}},"Posted by ",e.author," on ",c),r.a.createElement("span",{className:"card-footer"},a===s?r.a.createElement("button",{onClick:this.handleDelete,className:"btn card-footer blue darken-4"},"Delete"):r.a.createElement("i",{class:"material-icons"},"reply"))))),r.a.createElement("div",null,t),r.a.createElement(K,{id:n}))}}]),t}(a.Component),ae=Object(f.b)(function(e,t){var n=t.match.params.path_id;return{post:e.postsdata.posts.find(function(e){return e._id===n}),status:e.postsdata.status,users:e.users.usernames,username:e.postsdata.username}})(ne),re=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleChange=function(e){n.setState(Object(U.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),fetch("/api/auth/authenticate",{credentials:"include",method:"POST",body:JSON.stringify(n.state),headers:{"Content-Type":"application/json"}}).then(function(e){if(200!==e.status)throw new Error(e.error);console.log("resss poglej cookie",e),n.props.history.push("/")}).catch(function(e){console.error(e),alert("Error logging in please try again")})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",id:"username",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn blue darken-4 z-depth-0"},"Login"),r.a.createElement("div",{className:"center red-text"}))))}}]),t}(a.Component),se=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.get("/api/auth/signOut",{withCredentials:!0}).then(function(t){console.log(t,"bodyyyy"),console.log(e.props),e.props.loggedIn(),localStorage.removeItem("persist:root"),e.props.history.push("/signin")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Logging out..."))}}]),t}(a.Component),ce=Object(f.b)(null,function(e){return{loggedIn:function(){e({type:"LOGGEDOUT"})}}})(se);function oe(e){return function(t){function n(e){var t;return Object(o.a)(this,n),(t=Object(i.a)(this,Object(u.a)(n).call(this))).state={loading:!0,redirect:!1},t}return Object(m.a)(n,t),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;S.a.get("/api/auth/checkToken",{withCredentials:!0}).then(function(t){if(200!==t.status)throw new Error(t.error);e.setState({loading:!1})}).catch(function(t){console.error(t),e.setState({loading:!1,redirect:!0})})}},{key:"render",value:function(){var t=this.state,n=t.loading,a=t.redirect;return n?null:a?r.a.createElement(p.a,{to:"/signin"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(e,this.props))}}]),n}(a.Component)}var le=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(g,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:oe(k)}),r.a.createElement(p.b,{path:"/AddPost",component:oe(z)}),r.a.createElement(p.b,{path:"/signin",component:re}),r.a.createElement(p.b,{path:"/signout",component:oe(ce)}),r.a.createElement(p.b,{path:"/proposal/:path_id",component:oe(ae)})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=n(81),ue=n(82),me=n(83),de=n(31),pe=n(66),he=n(84),Ee=n(50),fe=n(19),be={posts:[],status:""},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POSTS_REQUEST":case"CREATION_REQUEST":case"DELETION_REQUEST":return Object(fe.a)({},e,{status:t.status});case"POSTS_SUCCESS":return Object(fe.a)({},e,{status:t.status,posts:t.posts,username:t.username});case"CREATION_SUCCESS":return Object(fe.a)({},e,{posts:[].concat(Object(Ee.a)(e.posts),[t.post]),status:t.status});case"DELETION_SUCCESS":return Object(fe.a)({},e,{status:t.status,posts:e.posts.filter(function(e){return e.id!==t.data})});case"POSTS_ERROR":case"CREATION_ERROR":case"DELETION_ERROR":return Object(fe.a)({},e,{status:t.status});case"COMMENTCREATION_SUCCESS":var n=t.comment.id,a=e.posts.find(function(e){return e._id===n}),r=e.posts.indexOf(a);return Object(fe.a)({},e,{posts:[].concat(Object(Ee.a)(e.posts.slice(0,r)),[Object(fe.a)({},e.posts[r],{comments:[].concat(Object(Ee.a)(e.posts[r].comments),[t.comment])})],Object(Ee.a)(e.posts.slice(r)))});default:return e}},Oe={usernames:[],status:""},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS_REQUEST":return Object(fe.a)({},e,{status:t.status});case"USERS_SUCCESS":return Object(fe.a)({},e,{users:t.usernames});case"USERS_ERROR":return Object(fe.a)({},e,{status:t.status});default:return e}},ve={loggedin:!1},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t,"6"),t.type){case"LOGGEDIN":return Object(fe.a)({},e,{loggedin:!0});case"LOGGEDOUT":return console.log("signout success"),Object(fe.a)({},e,{loggedin:!1});default:return e}},je=Object(de.c)({postsdata:ge,users:Se,auth:ye}),Ce=Object(me.createLogger)(),Ne=[ue.a,Ce],Te=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.d)(de.a.apply(void 0,Ne))(de.e),Re={key:"root",storage:he.a},_e=Object(pe.a)(Re,je),we=function(){var e=Te(_e);return{persistor:Object(pe.b)(e),store:e}},ke=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"LOADING..."))}}]),t}(a.Component),Ue=we(),De=Ue.persistor,Ie=Ue.store;c.a.render(r.a.createElement(f.a,{store:Ie},r.a.createElement(ie.PersistGate,{loading:r.a.createElement(ke,null),persistor:De},r.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},88:function(e,t,n){e.exports=n(132)},93:function(e,t,n){},94:function(e,t,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.f4699ac2.chunk.js.map