(this.webpackJsonptickertron=this.webpackJsonptickertron||[]).push([[0],{109:function(t,e,a){},123:function(t,e,a){},124:function(t,e,a){},236:function(t,e,a){},238:function(t,e,a){},249:function(t,e,a){"use strict";a.r(e);a(118);var r=a(0),n=a.n(r),c=a(27),i=a.n(c),s=(a(123),a(13)),o=a(25),l=(a(124),a(12)),u=a.n(l),h=a(19),j=a(263),d=a(112),b=a(6),p=a(7),m=a(10),k=a(9),f=a(268),x=a(269),O=a(61),y=a(262),g=a(2);var v=function(){return Object(g.jsx)(y.a,{animation:"border",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})},T=(a(79),function(t){Object(m.a)(a,t);var e=Object(k.a)(a);function a(t){var r;return Object(b.a)(this,a),(r=e.call(this,t)).state={ticker:r.props.tickerToUse,todayStart:r.props.todayStart,currentTime:r.props.currentTime,stockPrices:[],associatedTimestamp:[],realTimes:[],loading:!0},r}return Object(p.a)(a,[{key:"getData",value:function(){var t=Object(h.a)(u.a.mark((function t(e,a,r){var n,c,i=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r-a,!e){t.next=5;break}return c="https://finnhub.io/api/v1/stock/candle?symbol="+e.toUpperCase()+"&resolution="+(n>2820?"15":"1")+"&from="+a+"&to="+r+"&token=c1ljc2i37fkt2msk6vng",t.next=5,fetch(c).then((function(t){return t.json()})).then((function(t){i.setState({stockPrices:t.c,associatedTimestamp:t.t,loading:!1})}));case 5:case"end":return t.stop()}}),t)})));return function(e,a,r){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getData(this.state.ticker,this.state.todayStart,this.state.currentTime);case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t={labels:this.state.associatedTimestamp,datasets:[{label:"Price",data:this.state.stockPrices,fill:!1,backgroundColor:"white",borderColor:"white",tension:.2,pointRadius:0}]};return Object(g.jsx)("div",{children:this.state.loading?Object(g.jsx)(v,{}):Object(g.jsx)(O.a,{data:t,options:{responsive:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{yAxis:{display:!1},xAxis:{display:!1}}},width:125,height:40})})}}]),a}(r.Component));T.displayName=T.name;var w=function(t){Object(m.a)(a,t);var e=Object(k.a)(a);function a(t){var r;return Object(b.a)(this,a),(r=e.call(this,t)).state={ticker:r.props.tickerToUse,todayStart:r.props.todayStart,currentTime:r.props.currentTime,stockPrices:[],associatedTimestamp:[],realTimes:[],loading:!0},r}return Object(p.a)(a,[{key:"getData",value:function(){var t=Object(h.a)(u.a.mark((function t(e,a,r){var n,c=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=4;break}return n="https://finnhub.io/api/v1/stock/candle?symbol="+e.toUpperCase()+"&resolution=1&from="+a+"&to="+r+"&token=c1ljc2i37fkt2msk6vng",t.next=4,fetch(n).then((function(t){return t.json()})).then((function(t){c.setState({stockPrices:t.c,associatedTimestamp:t.t})}));case 4:case"end":return t.stop()}}),t)})));return function(e,a,r){return t.apply(this,arguments)}}()},{key:"getRealTime",value:function(){var t=Object(h.a)(u.a.mark((function t(e){var a,r,n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{for(a=0;a<e.length;a++)r=new Date(1e3*e[a]),n=new Date(r),c=n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),this.state.realTimes.push(c);this.setState({loading:!1})}catch(i){}case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getData(this.state.ticker,this.state.todayStart,this.state.currentTime);case 2:return t.next=4,this.getRealTime(this.state.associatedTimestamp);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t={labels:this.state.realTimes,datasets:[{label:"Price",data:this.state.stockPrices,fill:!1,backgroundColor:"rgb(34, 139, 34)",borderColor:"rgb(34, 139, 34)",tension:.2,pointRadius:0}]};return Object(g.jsxs)("div",{children:[this.state.loading?Object(g.jsx)(v,{}):Object(g.jsx)(O.a,{data:t,options:{plugins:{legend:{display:!1}},scales:{yAxis:{beginAtZero:!1,grid:{color:"transparent",lineWidth:1},ticks:{color:"rgb(190, 190, 190)",callback:function(t){return"$"+t}}},xAxis:{beginAtZero:!1,grid:{color:"transparent",lineWidth:1},ticks:{display:!1}}}},width:600,height:100}),Object(g.jsx)("hr",{})]})}}]),a}(r.Component);w.displayName=w.name,a(107).config();var S=function(t){Object(m.a)(a,t);var e=Object(k.a)(a);function a(t){var r;return Object(b.a)(this,a),(r=e.call(this,t)).state={ticker:r.props.tickerToUse,stockPrice:"",stockName:"",stockPC:"",allTickers:r.props.allTickers,todayStart:r.props.todayStart,currentTime:r.props.currentTime,gainOrLoss:""},r}return Object(p.a)(a,[{key:"getPrice",value:function(){var t=Object(h.a)(u.a.mark((function t(e){var a,r=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=4;break}return a="https://finnhub.io/api/v1/quote?symbol="+e.toUpperCase()+"&token=c1ljc2i37fkt2msk6vng",t.next=4,fetch(a).then((function(t){return t.json()})).then((function(t){r.setState({stockPrice:t.c,stockPC:t.pc})}));case 4:this.state.stockPC<this.state.stockPrice?this.setState({gainOrLoss:!0}):this.setState({gainOrLoss:!1});case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getName",value:function(){var t=Object(h.a)(u.a.mark((function t(e,a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=0;r<a.length;r++)a[r].displaySymbol===e.toUpperCase()&&this.setState({stockName:a[r].description});""===this.state.stockName&&this.setState({stockName:"Not Real"});case 2:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getPrice(this.state.ticker);case 2:return t.next=4,this.getName(this.state.ticker,this.state.allTickers);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=Math.abs((100*(this.state.stockPrice/this.state.stockPC-1)).toFixed(2));return Object(g.jsx)("div",{className:"tickerline",children:Object(g.jsx)(f.a,{children:Object(g.jsxs)(x.a,{children:[Object(g.jsxs)(f.a.Toggle,{as:x.a.Body,eventKey:"1",children:[Object(g.jsxs)(j.a,{xs:1,md:2,lg:2,children:[Object(g.jsx)(d.a,{xl:1,children:this.state.ticker.toUpperCase()}),Object(g.jsx)(d.a,{xl:3,style:{color:"white",fontSize:"99%"},children:this.state.stockName}),Object(g.jsx)(d.a,{xl:2,children:Object(g.jsx)(T,{tickerToUse:this.state.ticker,todayStart:this.state.todayStart,currentTime:this.state.currentTime})}),Object(g.jsxs)(d.a,{xl:2,style:this.state.gainOrLoss?{color:"forestgreen"}:{color:"darkred"},children:["$",this.state.stockPrice]}),Object(g.jsxs)(d.a,{xl:2,style:this.state.gainOrLoss?{color:"forestgreen"}:{color:"darkred"},children:[t,"%"]}),Object(g.jsxs)(d.a,{xl:2,style:{color:"white"},children:["$",this.state.stockPC]})]}),Object(g.jsx)("hr",{})]}),Object(g.jsx)(f.a.Collapse,{eventKey:"1",children:Object(g.jsx)(w,{tickerToUse:this.state.ticker,todayStart:this.state.todayStart,currentTime:this.state.currentTime})})]})})})}}]),a}(n.a.Component);S.displayName=S.name;a(236);a(107).config();var A=function(t){var e=Object(r.useState)(),a=Object(o.a)(e,2),n=a[0],c=a[1],i=Object(r.useState)(!1),s=Object(o.a)(i,2),l=s[0],b=s[1],p=Object(r.useState)(),m=Object(o.a)(p,2),k=m[0],f=m[1],x=Object(r.useState)(),O=Object(o.a)(x,2),y=O[0],T=O[1],w=function(){var t=new Date;t.setDate(t.getDate()),t.setHours(8,30,1,0);var e=Math.floor(t.getTime()/1e3);f({todayStart:e})},A=function(){var t=new Date,e=Math.floor(t.getTime()/1e3);T({currentTime:e})};return Object(r.useEffect)((function(){var t=function(){var t=Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c1ljc2i37fkt2msk6vng",t.next=3,fetch("https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c1ljc2i37fkt2msk6vng").then((function(t){return t.json()})).then((function(t){c({allTickers:t}),b({tickersLoaded:!0})}));case 3:A(),w();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(g.jsxs)("div",{className:"tickerContainer",children:[l?Object(g.jsxs)(j.a,{xs:1,md:2,lg:2,children:[Object(g.jsx)(d.a,{xl:1,style:{color:"gray"},children:"Ticker"}),Object(g.jsx)(d.a,{xl:3,style:{color:"gray"},children:"Company"}),Object(g.jsx)(d.a,{xl:2,style:{color:"gray"},children:"Intraday"}),Object(g.jsx)(d.a,{xl:2,style:{color:"gray"},children:"Mark"}),Object(g.jsx)(d.a,{xl:2,style:{color:"gray"},children:"% G/L"}),Object(g.jsx)(d.a,{xl:2,style:{color:"gray"},children:"Previous Close"})]}):Object(g.jsx)(v,{}),t.tickerlist.map((function(t){return Object(g.jsx)(S,{tickerToUse:t,allTickers:n.allTickers,todayStart:k.todayStart,currentTime:y.currentTime},t)}))]})},M=a(267),N=a(266),C=a(113),D=a(264);a(109);var I=function(){var t=function(){var t=new Date,e=t.getTime()+6e4*t.getTimezoneOffset(),a=new Date(e+-144e5);return!(a.getHours()>=16||a.getHours()<=6)&&(a.getHours()>9||a.getHours()>=9&&a.getMinutes()>=30)};return Object(g.jsxs)("div",{className:"clock",style:t()?{color:"forestgreen"}:{color:"darkred"},children:["NYSE: ",t()?function(){var t=new Date,e=t.getTime()+6e4*t.getTimezoneOffset();return new Date(e+-144e5).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}()+" OPEN":"CLOSED"]})};document.addEventListener("keypress",(function(t){"/"===t.key&&(document.getElementById("ticker-bar").select(),t.preventDefault())}));var E=function(t){var e=Object(r.useState)(""),a=Object(o.a)(e,2),n=a[0],c=a[1];return Object(g.jsx)("div",{className:"commandBar",children:Object(g.jsxs)(M.a,{className:"container-fluid",children:[Object(g.jsx)(N.a,{inline:!0,onSubmit:function(e){t.tickerCallback(n),e.preventDefault(),e.target.reset(),c({ticker:""})},id:"tickerForm",children:Object(g.jsx)(C.a,{autoComplete:"off",autoCorrect:"off",spellCheck:"false",placeholder:"/tickertron","aria-label":"ticker",id:"ticker-bar",value:n.value,onChange:function(t){c({ticker:t.target.value})}})}),Object(g.jsx)(D.a,{className:"ml-auto",children:Object(g.jsx)(I,{})})]})})},Y=(a(238),a(265)),Z=a(114),B=a.n(Z);function z(){var t=Object(r.useState)(!1),e=Object(o.a)(t,2),a=e[0],n=e[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(B.a,{style:{fontSize:35,color:"white"},onClick:function(){return n(!0)}}),Object(g.jsxs)(Y.a,{show:a,onHide:function(){return n(!1)},children:[Object(g.jsx)(Y.a.Header,{closeButton:!0,children:Object(g.jsx)(Y.a.Title,{children:"Tickertron Quick Start"})}),Object(g.jsxs)(Y.a.Body,{children:[Object(g.jsx)("p",{children:'"/" will activate Tickertron.'}),Object(g.jsx)("p",{children:'Tickers are case-insensitive. Example: "aapl", "AAPL", "aApL" will all show the same result.'}),Object(g.jsx)("p",{children:"Entering a new ticker will automatically add it to the list and retain previously entered tickers."}),Object(g.jsx)("p",{children:'Adding multiple tickers at a single time may be done with comma-seperated tickers. Example: "aapl,msft,gs,net" will add Apple, Microsoft, Goldman Sachs, and Cloudflare.'}),Object(g.jsx)("p",{children:"Clicking a ticker line will open a graph of the current day's intraday activity."})]})]})]})}var G=function(){return Object(g.jsx)("div",{children:Object(g.jsxs)(M.a,{fixed:"bottom",className:"justify-content-end",children:[Object(g.jsx)(M.a.Brand,{href:"https://github.com/jhiney/tickertron",children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwQTM4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwQTI4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMyOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBNDE0QUJDOTlBMTExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8kSqyAAADD5JREFUeNrsXQ2Q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",width:"30",height:"30",className:"d-inline-block align-bottom",alt:"GitHub logo"})}),Object(g.jsx)(z,{})]})})};var H=function(){var t=Object(r.useState)([]),e=Object(o.a)(t,2),a=e[0],n=e[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)(E,{tickerCallback:function(t){if(t.ticker.includes(",")){var e=t.ticker.split(",");n([].concat(Object(s.a)(a),Object(s.a)(e)))}else n([].concat(Object(s.a)(a),[t.ticker]))}}),Object(g.jsx)(A,{tickerlist:a}),Object(g.jsx)(G,{})]})},V=a(116),J=a(14);i.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(V.a,{children:Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(J.a,{path:"/tickertron",exact:!0,component:H})})})}),document.getElementById("root"))},79:function(t,e,a){}},[[249,1,2]]]);
//# sourceMappingURL=main.3fbad019.chunk.js.map