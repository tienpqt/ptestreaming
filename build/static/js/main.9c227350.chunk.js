(this["webpackJsonpamazonivs-vqa"]=this["webpackJsonpamazonivs-vqa"]||[]).push([[0],{111:function(e){e.exports=JSON.parse('[[{"OutputKey":"CognitoUserPoolId","OutputValue":"us-east-1_b3HBFYbqN"},{"OutputKey":"CognitoClientId","OutputValue":"1a158jqrhth9ms6gh5a5muaj11"},{"OutputKey":"HttpApiEndpoint","OutputValue":"https://e2ifym1bgh.execute-api.us-east-1.amazonaws.com/test"},{"OutputKey":"Region","OutputValue":"us-east-1"},{"OutputKey":"WebsocketApiEndpoint","OutputValue":"wss://1icfp77o2j.execute-api.us-east-1.amazonaws.com/test"}]]')},220:function(e,t,n){},226:function(e,t){},228:function(e,t){},239:function(e,t){},241:function(e,t){},268:function(e,t){},270:function(e,t){},271:function(e,t){},276:function(e,t){},278:function(e,t){},284:function(e,t){},286:function(e,t){},305:function(e,t){},317:function(e,t){},320:function(e,t){},379:function(e,t,n){},380:function(e,t,n){"use strict";n.r(t);var a=n(5),s=n.n(a),r=n(191),o=n.n(r),c=(n(220),n(110)),i=n(111);function u(e){var t=i[0].findIndex((function(t){return t.OutputKey===e}));return i[0][t].OutputValue}var d=u("HttpApiEndpoint"),l=u("WebsocketApiEndpoint"),j=u("CognitoUserPoolId"),b=u("CognitoClientId"),p=u("Region");c.default.configure({Auth:{region:p,userPoolId:j,userPoolWebClientId:b,authenticationFlowType:"USER_PASSWORD_AUTH"}});var h=s.a.createContext(),O=n(3);function f(e){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[.+*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}var v=function(e){var t=e.children,n={channelArn:window.atob(f("channel")),playbackUrl:window.atob(f("playback"))};return Object(O.jsx)(h.Provider,{value:n,children:t})},m=n(12),x=s.a.createContext(),S="SET_SIGNED_IN_USER_ACTION",g="SET_SIGNED_OUT_USER_ACTION",q=function(e,t){switch(t.type){case S:return Object(m.a)(Object(m.a)({},e),{},{isSignedIn:!0,isModerator:t.isModerator,accessJWTToken:t.accessJWTToken});case g:return Object(m.a)({},y);default:throw new Error("unexpected action type")}},y={isSignedIn:!1,isModerator:!1,accessToken:""},C=function(e){var t=e.children,n=s.a.useReducer(q,y);return Object(O.jsx)(x.Provider,{value:n,children:t})},I=s.a.createContext(),w="CLIENT_ADD_QUESTION_ACTION",T="CLIENT_DELETE_QUESTION_ACTION",N="CLIENT_INCREMENT_VOTE_ACTION",E="CLIENT_DECREMENT_VOTE_ACTION",_="SERVER_UPDATE_QUESTIONS_ACTION",k="SERVER_SET_QUESTIONS_ACTION";function A(e){return{Id:e.Id,Content:e.Content,Votes:e.Votes,Answered:e.Answered,Current:e.Current}}function V(e,t){return t.question.Votes-e.question.Votes}var M=function(e,t){switch(t.type){case w:var n={question:{Id:t.id,Content:t.content,Votes:0,Answered:!1,Current:!1},timeStamp:0,removed:!1};return Object(m.a)(Object(m.a)({},e),{},{questionStates:e.questionStates.concat([n]).sort(V)});case T:return Object(m.a)(Object(m.a)({},e),{},{questionStates:e.questionStates.map((function(e){return e.question.Id===t.id&&(e.removed=!0),e})).sort(V)});case N:return Object(m.a)(Object(m.a)({},e),{},{questionStates:e.questionStates.map((function(e){return e.question.Id===t.id&&(e.question.Votes=e.question.Votes+1),e})).sort(V)});case E:return Object(m.a)(Object(m.a)({},e),{},{questionStates:e.questionStates.map((function(e){return e.question.Id===t.id&&(e.question.Votes=e.question.Votes-1),e})).sort(V)});case _:return t.updates.forEach((function(t){var n=e.questionStates.findIndex((function(e){return t.question.Id===e.question.Id}));if(!(-1!==n&&t.timeStamp<e.questionStates[n].timeStamp))switch(t.change){case"INSERT":-1===n?e.questionStates=e.questionStates.concat([{question:A(t.question),timeStamp:t.timeStamp,removed:!1}]):e.questionStates[n].timeStamp=t.timeStamp;break;case"MODIFY":-1===n?e.questionStates=e.questionStates.concat([{question:A(t.question),timeStamp:t.timeStamp,removed:!1}]):(e.questionStates[n].timeStamp=t.timeStamp,e.questionStates[n].question=A(t.question));break;case"REMOVE":-1===n?e.questionStates=e.questionStates.concat([{question:A(t.question),timeStamp:t.timeStamp,removed:!0}]):(e.questionStates[n].timeStamp=t.timeStamp,e.questionStates[n].removed=!0);break;default:return}})),Object(m.a)(Object(m.a)({},e),{},{questionStates:e.questionStates.sort(V)});case k:return Object(m.a)(Object(m.a)({},e),{},{questionStates:t.questions.map((function(e){return{question:A(e),timeStamp:0,removed:!1}})).sort(V)});default:throw new Error("unexpected action type")}},L={questionStates:[]},R=function(e){var t=e.children,n=s.a.useReducer(M,L);return Object(O.jsx)(I.Provider,{value:n,children:t})},P=s.a.createContext(),U="SET_CURRENT_QUESTION_ACTION",D=function(e,t){switch(t.type){case U:return Object(m.a)(Object(m.a)({},e),{},{currentQuestion:t.question});default:throw new Error("unexpected action type")}},H={currentQuestion:null},J=function(e){var t=e.children,n=s.a.useReducer(D,H);return Object(O.jsx)(P.Provider,{value:n,children:t})},W=n(78),z=s.a.createContext(),Q="ADD_VOTE_ACTION",F="DELETE_VOTE_ACTION",B="SET_VOTES_ACTION",K="CLEAR_VOTES_ACTION",Z=function(e,t){switch(t.type){case Q:return Object(m.a)(Object(m.a)({},e),{},{questionIdMap:Object(m.a)(Object(m.a)({},e.questionIdMap),{},Object(W.a)({},t.questionId,!0))});case F:var n=e.questionIdMap;return delete n[t.questionId],Object(m.a)(Object(m.a)({},e),{},{questionIdMap:Object(m.a)({},n)});case B:return Object(m.a)(Object(m.a)({},e),{},{questionIdMap:t.questionIdMap});case K:return Object(m.a)(Object(m.a)({},e),{},{questionIdMap:{}});default:throw new Error("unexpected action type")}},G={questionIdMap:{}},$=function(e){var t=e.children,n=s.a.useReducer(Z,G);return Object(O.jsx)(z.Provider,{value:n,children:t})},Y=n(10),X=n(200),ee=n(201),te=n(205),ne=n(204),ae=function(e){Object(te.a)(n,e);var t=Object(ne.a)(n);function n(){var e;return Object(X.a)(this,n),(e=t.call(this)).channelArn="",e}return Object(ee.a)(n,[{key:"setupWebSocket",value:function(e){var t=this;if(this.channelArn!==e){this.channelArn=e;var n=l+"?channelarn="+e;this.ws=new WebSocket(n),this.ws.onmessage=function(e){var n=Object(Y.a)(t.context,2)[1],a=JSON.parse(e.data);switch(a.type){case"INITIAL_STATE":console.debug("INIT STATE",a.questions),n({type:k,questions:a.questions});break;case"UPDATES":console.debug("UPDATE",a.updates),n({type:_,updates:a.updates});break;default:return}}}}},{key:"render",value:function(){var e=this;return Object(O.jsx)(h.Consumer,{children:function(t){var n=t.channelArn;return e.setupWebSocket(n)}})}}]),n}(s.a.Component);ae.contextType=I;var se=ae;var re=function(){var e,t,n=s.a.useContext(I),a=Object(Y.a)(n,1)[0].questionStates,r=s.a.useContext(P),o=Object(Y.a)(r,1)[0].currentQuestion,c=!0;if(null===o){var i=a.findIndex((function(e){return e.question.Current}));-1===i?c=!1:(e=a[i].question.Content,t=a[i].question.Votes)}else e=o.Content,t=o.Votes;return c?Object(O.jsx)("div",{className:"current-question",children:Object(O.jsx)("div",{className:"c-item",children:Object(O.jsxs)("div",{className:"c-item__card",children:[Object(O.jsxs)("div",{className:"c-item__votes",children:[Object(O.jsx)("svg",{className:"upvote-btn__svg",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{d:"M3.66797 11L4.96047 12.2925L10.0846 7.1775V18.3333H11.918V7.1775L17.033 12.3017L18.3346 11L11.0013 3.66666L3.66797 11Z"})}),Object(O.jsx)("span",{className:"upvote-btn__count",children:t})]}),Object(O.jsxs)("div",{className:"c-item__content",children:[Object(O.jsx)("strong",{children:"Current question"}),Object(O.jsx)("p",{children:e})]})]})})}):null};var oe=function(){var e=s.a.useContext(h).playbackUrl,t=s.a.useContext(P),n=Object(Y.a)(t,2)[1];return s.a.useEffect((function(){var t=window.videojs,a=window.registerIVSTech,s=window.registerIVSQualityPlugin;t.getPlugin("getIVSPlayer")||(a(t),s(t));var r=t("amazon-ivs-videojs",{techOrder:["AmazonIVS"],autoplay:!0,muted:!0}),o=r.getIVSPlayer(),c=r.getIVSEvents().PlayerEventType;return o.addEventListener(c.TEXT_METADATA_CUE,(function(e){var t=e.text;console.log("Timed metadata: ",t),n({type:U,question:JSON.parse(t)})})),r.ready((function(){r.enableIVSQualityPlugin(),r.src(e),r.play()})),function(){r.dispose()}}),[]),Object(O.jsxs)("div",{className:"player-wrapper",children:[Object(O.jsx)(re,{}),Object(O.jsx)("div",{"data-vjs-player":!0,children:Object(O.jsx)("video",{id:"amazon-ivs-videojs",className:"video-js vjs-fluid",playsInline:!0})})]})},ce=n(18),ie=n.n(ce),ue=n(27),de="DELETE_VOTE",le="NONE",je=d+"/deleteVote",be=d+"/addVote";var pe=function(e){var t=e.votes,n=e.questionId,a=e.disabled,r=s.a.useContext(I),o=Object(Y.a)(r,2)[1],c=s.a.useContext(z),i=Object(Y.a)(c,2),u=i[0].questionIdMap,d=i[1],l=s.a.useContext(h).channelArn,j=s.a.useContext(x),b=Object(Y.a)(j,1)[0].accessJWTToken,p=s.a.useState(le),f=Object(Y.a)(p,2),v=f[0],m=f[1];s.a.useEffect((function(){v!==le&&function(){var e=Object(ue.a)(ie.a.mark((function e(){var t;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o({type:v===de?E:N,id:n}),d({type:v===de?F:Q,questionId:n}),t=v===de?je:be,e.next=6,fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:b},body:JSON.stringify({channelArn:l,questionId:n})});case 6:if(200===e.sent.status){e.next=9;break}throw new Error;case 9:e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Failed to add/delete vote",e.t0),o({type:v===de?N:E,id:n}),d({type:v===de?Q:F,questionId:n});case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()()}),[v]);var S=!!u[n],g="";return g=S?"btn rounded upvote-btn has-voted":a?"btn rounded upvote-btn":"btn btn--primary rounded upvote-btn",Object(O.jsxs)("button",{className:g,onClick:function(){return m(S?de:"ADD_VOTE")},disabled:a,children:[Object(O.jsx)("svg",{className:"upvote-btn__svg",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{d:"M3.66797 11L4.96047 12.2925L10.0846 7.1775V18.3333H11.918V7.1775L17.033 12.3017L18.3346 11L11.0013 3.66666L3.66797 11Z"})}),Object(O.jsx)("span",{className:"upvote-btn__count",children:t})]})};var he=function(e,t){s.a.useEffect((function(){function n(n){e.current&&!e.current.contains(n.target)&&t()}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t])},Oe=d+"/deleteQuestion";var fe=function(e){var t=e.questionId,n=e.onHideModal,a=s.a.useContext(I),r=Object(Y.a)(a,2)[1],o=s.a.useContext(h).channelArn,c=s.a.useContext(x),i=Object(Y.a)(c,1)[0].accessJWTToken,u=s.a.useState(!1),d=Object(Y.a)(u,2),l=d[0],j=d[1],b=s.a.useRef(null);return he(b,n),s.a.useEffect((function(){l&&function(){var e=Object(ue.a)(ie.a.mark((function e(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(Oe,{method:"POST",headers:{"Content-Type":"application/json",Authorization:i},body:JSON.stringify({channelArn:o,id:t})});case 3:if(200!==e.sent.status){e.next=8;break}r({type:T,id:t}),e.next=9;break;case 8:throw new Error;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Failure in deleting question",e.t0);case 14:n();case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()()}),[l]),Object(O.jsxs)("div",{className:"modal",children:[Object(O.jsxs)("div",{className:"modal__el",ref:b,children:[Object(O.jsx)("h2",{className:"mg-b-1",children:"Are you sure you want to delete this question?"}),Object(O.jsxs)("div",{className:"grid grid--responsive grid--2",children:[Object(O.jsx)("button",{type:"button",className:"btn btn--secondary mg-t-1",onClick:n,children:"Cancel"}),Object(O.jsx)("button",{type:"button",className:"btn btn--destruct mg-t-1",onClick:function(){return j(!0)},children:"Delete"})]})]}),Object(O.jsx)("div",{className:"modal__overlay"})]})};var ve=function(e){var t=e.questionId,n=s.a.useState(!1),a=Object(Y.a)(n,2),r=a[0],o=a[1],c=r?Object(O.jsx)(fe,{questionId:t,onHideModal:function(){return o(!1)}}):null;return Object(O.jsxs)(s.a.Fragment,{children:[c,Object(O.jsx)("button",{onClick:function(){return o(!0)},className:"btn btn--icon btn--destruct",title:"Delete",children:Object(O.jsx)("svg",{className:"icon icon--24 icon--inverted",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{d:"M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"})})})]})},me=d+"/setCurrentQuestion";var xe=function(e){var t=e.questionId,n=e.onHideModal,a=s.a.useContext(h).channelArn,r=s.a.useContext(x),o=Object(Y.a)(r,1)[0].accessJWTToken,c=s.a.useState(!1),i=Object(Y.a)(c,2),u=i[0],d=i[1],l=s.a.useRef(null);return he(l,n),s.a.useEffect((function(){u&&function(){var e=Object(ue.a)(ie.a.mark((function e(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(me,{method:"POST",headers:{"Content-Type":"application/json",Authorization:o},body:JSON.stringify({channelArn:a,id:t})});case 3:if(200===e.sent.status){e.next=6;break}throw new Error;case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Failure in setting current question",e.t0);case 11:n();case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[u]),Object(O.jsxs)("div",{className:"modal",children:[Object(O.jsxs)("div",{className:"modal__el",ref:l,children:[Object(O.jsx)("h2",{className:"mg-b-1",children:"Mark this question as current?"}),Object(O.jsxs)("div",{className:"grid grid--responsive grid--2",children:[Object(O.jsx)("button",{type:"button",className:"btn btn--secondary mg-t-1",onClick:n,children:"Cancel"}),Object(O.jsx)("button",{type:"button",className:"btn btn--confirm mg-t-1",onClick:function(){return d(!0)},children:"Mark as current"})]})]}),Object(O.jsx)("div",{className:"modal__overlay"})]})};var Se=function(e){var t=e.questionId,n=s.a.useState(!1),a=Object(Y.a)(n,2),r=a[0],o=a[1],c=r?Object(O.jsx)(xe,{questionId:t,onHideModal:function(){return o(!1)}}):null;return Object(O.jsxs)(s.a.Fragment,{children:[c,Object(O.jsx)("button",{onClick:function(){return o(!0)},className:"btn btn--icon btn--confirm",title:"Mark as current",children:Object(O.jsx)("svg",{className:"icon icon--24",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{d:"M18.99 20.4998L19 9.49976C19 8.82976 18.67 8.22976 18.16 7.86976L12 3.49976L5.84 7.86976C5.33 8.22976 5 8.82976 5 9.49976L5.01 20.4998L12 15.6598L18.99 20.4998Z"})})})]})};var ge=function(e){var t=e.content,n=e.id,a=e.votes,r=s.a.useContext(x),o=Object(Y.a)(r,1)[0],c=o.isSignedIn,i=o.isModerator;return Object(O.jsxs)("div",{className:"q-item",children:[Object(O.jsxs)("div",{className:"q-item__card",children:[Object(O.jsx)(pe,{votes:a,questionId:n,disabled:!c}),Object(O.jsx)("p",{className:"q-item__content",children:t})]}),i&&Object(O.jsxs)("div",{className:"q-item__moderation",children:[Object(O.jsx)(Se,{questionId:n}),Object(O.jsx)(ve,{questionId:n})]})]})};var qe=function(){var e=s.a.useContext(I),t=Object(Y.a)(e,1)[0].questionStates,n=s.a.useContext(P),a=Object(Y.a)(n,1)[0].currentQuestion,r=[];return t.forEach((function(e){(function(e,t){return!e.removed&&!e.question.Answered&&(!e.question.Current||null!==t&&t.Id!==e.question.Id)})(e,a)&&r.push(Object(O.jsx)(ge,{content:e.question.Content,votes:e.question.Votes,id:e.question.Id},"".concat(e.question.Id)))})),Object(O.jsx)("div",{className:"questions",children:r})},ye=d+"/addQuestion",Ce=d+"/addVote";var Ie=function(e){var t=e.onHideModal,n=s.a.useContext(I),a=Object(Y.a)(n,2)[1],r=s.a.useContext(z),o=Object(Y.a)(r,2)[1],c=s.a.useContext(h).channelArn,i=s.a.useContext(x),u=Object(Y.a)(i,1)[0].accessJWTToken,d=s.a.useState(!1),l=Object(Y.a)(d,2),j=l[0],b=l[1],p=s.a.useState(""),f=Object(Y.a)(p,2),v=f[0],m=f[1],S=s.a.useRef(null);return he(S,t),s.a.useEffect((function(){j&&function(){var e=Object(ue.a)(ie.a.mark((function e(){var n,s,r;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(ye,{method:"POST",headers:{"Content-Type":"application/json",Authorization:u},body:JSON.stringify({channelArn:c,question:v})});case 3:if(200!==(n=e.sent).status){e.next=16;break}return e.next=7,n.json();case 7:return s=e.sent,r=s.id,a({type:w,id:r,content:v}),e.next=12,fetch(Ce,{method:"POST",headers:{"Content-Type":"application/json",Authorization:u},body:JSON.stringify({channelArn:c,questionId:r})});case 12:200===e.sent.status&&(a({type:N,id:r}),o({type:Q,questionId:r})),e.next=17;break;case 16:throw new Error;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log("Failure in adding and voting new question",e.t0);case 22:t();case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}()()}),[j]),Object(O.jsxs)("div",{className:"modal",children:[Object(O.jsxs)("div",{className:"modal__el",ref:S,children:[Object(O.jsx)("h2",{className:"mg-b-1",children:"Submit a question"}),Object(O.jsx)("form",{children:Object(O.jsxs)("fieldset",{children:[Object(O.jsx)("textarea",{rows:"8",placeholder:"Type here...",onChange:function(e){return m(e.target.value)},disabled:j,value:v}),Object(O.jsx)("p",{children:Object(O.jsx)("em",{children:"Submissions are anonymous"})}),Object(O.jsx)("button",{type:"submit",className:"btn btn--primary mg-t-1",onClick:function(e){e.preventDefault(),b(!0)},children:"Submit"})]})})]}),Object(O.jsx)("div",{className:"modal__overlay"})]})};var we=function(){var e=s.a.useState(!1),t=Object(Y.a)(e,2),n=t[0],a=t[1],r=s.a.useContext(x),o=Object(Y.a)(r,1)[0].isSignedIn;return Object(O.jsxs)(s.a.Fragment,{children:[n?Object(O.jsx)(Ie,{onHideModal:function(){return a(!1)}}):null,o?Object(O.jsx)("button",{onClick:function(){return a(!0)},className:"btn btn--floating btn--fixed",children:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Object(O.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(O.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})]})}):null]})},Te=n(55);var Ne=function(e){var t=e.onHideModal,n=s.a.useRef(null);return he(n,t),Object(O.jsxs)("div",{className:"modal",children:[Object(O.jsx)("div",{className:"modal__el modal__el--auth",ref:n,children:Object(O.jsxs)(Te.a,{theme:{sectionHeaderContent:{fontSize:"2.4rem",fontWeight:"bold"},sectionBody:{width:"100%",margin:"2rem 0",display:"flex",flexDirection:"column",flexGrow:"1"},formField:{margin:"0.5rem 0"},input:{width:"100%"},a:{fontWeight:"bold",cursor:"pointer",paddingLeft:"0.5rem"},sectionFooter:{width:"100%"},sectionFooterPrimaryContent:{display:"flex"},button:{display:"flex",width:"100%",alignItems:"center",alignContent:"center",justifyContent:"center",fontWeight:"bold",color:"var(--color-text-inverted)",background:"var(--color-bg-button-primary-default)"},selectInput:{display:"grid",gridTemplateColumns:"auto 1fr",gridGap:"1rem"},sectionFooterSecondaryContent:{display:"flex",margin:"1rem 0 0 0"}},hideDefault:!0,onStateChange:function(e){"signedIn"===e&&t()},children:[Object(O.jsx)(Te.d,{}),Object(O.jsx)(Te.e,{}),Object(O.jsx)(Te.b,{}),Object(O.jsx)(Te.c,{})]})}),Object(O.jsx)("div",{className:"modal__overlay"})]})},Ee=n(203),_e=n(330),ke=d+"/getVotes";function Ae(e,t,n,a){return Ve.apply(this,arguments)}function Ve(){return(Ve=Object(ue.a)(ie.a.mark((function e(t,n,a,s){var r,o,c;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:S,isModerator:Me(a),accessJWTToken:a.accessToken.jwtToken}),e.next=3,fetch(ke,{method:"POST",headers:{"Content-Type":"application/json",Authorization:a.accessToken.jwtToken},body:JSON.stringify({channelArn:s})});case 3:if(200!==(r=e.sent).status){e.next=10;break}return e.next=7,r.json();case 7:o=e.sent,c=o.reduce((function(e,t){return e[t.QuestionId]=!0,e}),{}),n({type:B,questionIdMap:c});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Me(e){var t=e.idToken.payload["cognito:groups"];return void 0!==t&&-1!==t.indexOf("moderator")}var Le=function(){var e=s.a.useState(!1),t=Object(Y.a)(e,2),n=t[0],a=t[1],r=s.a.useContext(x),o=Object(Y.a)(r,2),c=o[0].isSignedIn,i=o[1],u=s.a.useContext(h).channelArn,d=s.a.useContext(z),l=Object(Y.a)(d,2)[1];return s.a.useEffect((function(){function e(){return(e=Object(ue.a)(ie.a.mark((function e(){var t;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _e.a.listen("auth",(function(e){var t=e.payload;switch(t.event){case"signIn":Ae(i,l,t.data.signInUserSession,u);break;default:i({type:g}),l({type:K})}})),e.prev=1,e.next=4,Ee.a.currentAuthenticatedUser();case 4:t=e.sent,Ae(i,l,t.signInUserSession,u),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),i({type:g}),l({type:K});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)(s.a.Fragment,{children:[n&&Object(O.jsx)(Ne,{onHideModal:function(){return a(!1)}}),Object(O.jsx)("button",{className:c?"btn":"btn btn--primary",onClick:function(){c?Ee.a.signOut():a(!0)},children:c?"Sign out":"Sign in"})]})};n(379);var Re=function(){return Object(O.jsx)(v,{children:Object(O.jsx)(J,{children:Object(O.jsx)($,{children:Object(O.jsx)(R,{children:Object(O.jsxs)(C,{children:[Object(O.jsx)(se,{}),Object(O.jsxs)("header",{children:[Object(O.jsx)("h1",{children:"Interactive Live Q&A"}),Object(O.jsx)(Le,{})]}),Object(O.jsxs)("section",{children:[Object(O.jsx)(oe,{}),Object(O.jsx)(qe,{}),Object(O.jsx)(we,{})]})]})})})})})};o.a.render(Object(O.jsx)(Re,{}),document.getElementById("root"))}},[[380,1,2]]]);
//# sourceMappingURL=main.9c227350.chunk.js.map