(this.webpackJsonptickertron=this.webpackJsonptickertron||[]).push([[0],{109:function(t,e,r){},110:function(t,e,r){},222:function(t,e,r){},224:function(t,e,r){},230:function(t,e,r){"use strict";r.r(e);r(104);var a=r(0),n=r.n(a),c=r(33),i=r.n(c),s=(r(109),r(11)),o=r(24),l=(r(110),r(10)),u=r.n(l),h=r(16),j=r(233),d=r(99),b=r(5),p=r(7),m=r(9),k=r(8),f=r(237),x=r(238),O=r(47),y=r(232),g=r(2);var v=function(){return Object(g.jsx)(y.a,{animation:"border",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})},T=(r(64),function(t){Object(m.a)(r,t);var e=Object(k.a)(r);function r(t){var a;return Object(b.a)(this,r),(a=e.call(this,t)).state={ticker:a.props.tickerToUse,todayStart:a.props.todayStart,currentTime:a.props.currentTime,stockPrices:[],associatedTimestamp:[],realTimes:[],loading:!0},a}return Object(p.a)(r,[{key:"getData",value:function(){var t=Object(h.a)(u.a.mark((function t(e,r,a){var n,c,i=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a-r,!e){t.next=5;break}return c="https://finnhub.io/api/v1/stock/candle?symbol="+e.toUpperCase()+"&resolution="+(n>2820?"15":"1")+"&from="+r+"&to="+a+"&token=c1ljc2i37fkt2msk6vng",t.next=5,fetch(c).then((function(t){return t.json()})).then((function(t){i.setState({stockPrices:t.c,associatedTimestamp:t.t,loading:!1})}));case 5:case"end":return t.stop()}}),t)})));return function(e,r,a){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getData(this.state.ticker,this.state.todayStart,this.state.currentTime);case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t={labels:this.state.associatedTimestamp,datasets:[{label:"Price",data:this.state.stockPrices,fill:!1,backgroundColor:"white",borderColor:"white",tension:.2,pointRadius:0}]};return Object(g.jsx)("div",{children:this.state.loading?Object(g.jsx)(v,{}):Object(g.jsx)(O.a,{data:t,options:{responsive:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{yAxis:{display:!1},xAxis:{display:!1}}},width:125,height:40})})}}]),r}(a.Component));T.displayName=T.name;var S=function(t){Object(m.a)(r,t);var e=Object(k.a)(r);function r(t){var a;return Object(b.a)(this,r),(a=e.call(this,t)).state={ticker:a.props.tickerToUse,todayStart:a.props.todayStart,currentTime:a.props.currentTime,stockPrices:[],associatedTimestamp:[],realTimes:[],loading:!0},a}return Object(p.a)(r,[{key:"getData",value:function(){var t=Object(h.a)(u.a.mark((function t(e,r,a){var n,c=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=4;break}return n="https://finnhub.io/api/v1/stock/candle?symbol="+e.toUpperCase()+"&resolution=1&from="+r+"&to="+a+"&token=c1ljc2i37fkt2msk6vng",t.next=4,fetch(n).then((function(t){return t.json()})).then((function(t){c.setState({stockPrices:t.c,associatedTimestamp:t.t})}));case 4:case"end":return t.stop()}}),t)})));return function(e,r,a){return t.apply(this,arguments)}}()},{key:"getRealTime",value:function(){var t=Object(h.a)(u.a.mark((function t(e){var r,a,n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{for(r=0;r<e.length;r++)a=new Date(1e3*e[r]),n=new Date(a),c=n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),this.state.realTimes.push(c);this.setState({loading:!1})}catch(i){}case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getData(this.state.ticker,this.state.todayStart,this.state.currentTime);case 2:return t.next=4,this.getRealTime(this.state.associatedTimestamp);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t={labels:this.state.realTimes,datasets:[{label:"Price",data:this.state.stockPrices,fill:!1,backgroundColor:"rgb(34, 139, 34)",borderColor:"rgb(34, 139, 34)",tension:.2,pointRadius:0}]};return Object(g.jsxs)("div",{children:[this.state.loading?Object(g.jsx)(v,{}):Object(g.jsx)(O.a,{data:t,options:{plugins:{legend:{display:!1}},scales:{yAxis:{beginAtZero:!1,grid:{color:"transparent",lineWidth:1},ticks:{color:"rgb(190, 190, 190)",callback:function(t){return"$"+t}}},xAxis:{beginAtZero:!1,grid:{color:"transparent",lineWidth:1},ticks:{display:!1}}}},width:600,height:100}),Object(g.jsx)("hr",{})]})}}]),r}(a.Component);S.displayName=S.name,r(91).config();var M=function(t){Object(m.a)(r,t);var e=Object(k.a)(r);function r(t){var a;return Object(b.a)(this,r),(a=e.call(this,t)).state={ticker:a.props.tickerToUse,stockPrice:"",stockName:"",stockPC:"",allTickers:a.props.allTickers,todayStart:a.props.todayStart,currentTime:a.props.currentTime,gainOrLoss:""},a}return Object(p.a)(r,[{key:"getPrice",value:function(){var t=Object(h.a)(u.a.mark((function t(e){var r,a=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=4;break}return r="https://finnhub.io/api/v1/quote?symbol="+e.toUpperCase()+"&token=c1ljc2i37fkt2msk6vng",t.next=4,fetch(r).then((function(t){return t.json()})).then((function(t){a.setState({stockPrice:t.c,stockPC:t.pc})}));case 4:this.state.stockPC<this.state.stockPrice?this.setState({gainOrLoss:!0}):this.setState({gainOrLoss:!1});case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getName",value:function(){var t=Object(h.a)(u.a.mark((function t(e,r){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=0;a<r.length;a++)r[a].displaySymbol===e.toUpperCase()&&this.setState({stockName:r[a].description});""===this.state.stockName&&this.setState({stockName:"Not Real"});case 2:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getPrice(this.state.ticker);case 2:return t.next=4,this.getName(this.state.ticker,this.state.allTickers);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=Math.abs((100*(this.state.stockPrice/this.state.stockPC-1)).toFixed(2));return Object(g.jsx)("div",{className:"tickerline",children:Object(g.jsx)(f.a,{children:Object(g.jsxs)(x.a,{children:[Object(g.jsxs)(f.a.Toggle,{as:x.a.Body,eventKey:"1",children:[Object(g.jsxs)(j.a,{xs:1,md:2,lg:2,children:[Object(g.jsx)(d.a,{xl:1,children:this.state.ticker.toUpperCase()}),Object(g.jsx)(d.a,{xl:3,style:{color:"white",fontSize:"99%"},children:this.state.stockName}),Object(g.jsx)(d.a,{xl:2,children:Object(g.jsx)(T,{tickerToUse:this.state.ticker,todayStart:this.state.todayStart,currentTime:this.state.currentTime})}),Object(g.jsxs)(d.a,{xl:2,style:this.state.gainOrLoss?{color:"forestgreen"}:{color:"darkred"},children:["$",this.state.stockPrice]}),Object(g.jsxs)(d.a,{xl:2,style:this.state.gainOrLoss?{color:"forestgreen"}:{color:"darkred"},children:[t,"%"]}),Object(g.jsxs)(d.a,{xl:2,style:{color:"white"},children:["$",this.state.stockPC]})]}),Object(g.jsx)("hr",{})]}),Object(g.jsx)(f.a.Collapse,{eventKey:"1",children:Object(g.jsx)(S,{tickerToUse:this.state.ticker,todayStart:this.state.todayStart,currentTime:this.state.currentTime})})]})})})}}]),r}(n.a.Component);M.displayName=M.name;r(222);r(91).config();var N=function(t){var e=Object(a.useState)(),r=Object(o.a)(e,2),n=r[0],c=r[1],i=Object(a.useState)(!1),s=Object(o.a)(i,2),l=s[0],b=s[1],p=Object(a.useState)(),m=Object(o.a)(p,2),k=m[0],f=m[1],x=Object(a.useState)(),O=Object(o.a)(x,2),y=O[0],T=O[1],S=function(){var t=new Date;t.setDate(t.getDate()),t.setHours(8,30,1,0);var e=Math.floor(t.getTime()/1e3);f({todayStart:e})},N=function(){var t=new Date,e=Math.floor(t.getTime()/1e3);T({currentTime:e})};return Object(a.useEffect)((function(){(function(){var t=Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c1ljc2i37fkt2msk6vng",t.next=3,fetch("https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c1ljc2i37fkt2msk6vng").then((function(t){return t.json()})).then((function(t){c({allTickers:t}),b({tickersLoaded:!0})}));case 3:N(),S();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(g.jsxs)("div",{className:"tickerContainer",children:[l?Object(g.jsxs)(j.a,{xs:1,md:2,lg:2,children:[Object(g.jsx)(d.a,{xl:1,style:{color:"gray"},children:"Ticker"}),Object(g.jsx)(d.a,{xl:3,style:{color:"gray"},children:"Company"}),Object(g.jsx)(d.a,{xl:2,style:{color:"gray"},children:"Intraday"}),Object(g.jsx)(d.a,{xl:2,style:{color:"gray"},children:"Mark"}),Object(g.jsx)(d.a,{xl:2,style:{color:"gray"},children:"% G/L"}),Object(g.jsx)(d.a,{xl:2,style:{color:"gray"},children:"Previous Close"})]}):Object(g.jsx)(v,{}),t.tickerlist.map((function(t){return Object(g.jsx)(M,{tickerToUse:t,allTickers:n.allTickers,todayStart:k.todayStart,currentTime:y.currentTime},t)}))]})},A=r(236),w=r(235),C=r(100),D=r(234);r(93);var I=function(){var t=function(){var t=new Date,e=t.getTime()+6e4*t.getTimezoneOffset(),r=new Date(e+-144e5);return!(r.getHours()>=16||r.getHours()<=6)&&(r.getHours()>8||r.getHours()>=8&&r.getMinutes()>=30)};return Object(g.jsxs)("div",{className:"clock",style:t()?{color:"forestgreen"}:{color:"darkred"},children:["NYSE: ",t()?function(){var t=new Date,e=t.getTime()+6e4*t.getTimezoneOffset();return new Date(e+-144e5).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}()+" OPEN":"CLOSED"]})};document.addEventListener("keypress",(function(t){"/"===t.key&&(document.getElementById("ticker-bar").select(),t.preventDefault())}));var Y=function(t){var e=Object(a.useState)(""),r=Object(o.a)(e,2),n=r[0],c=r[1];return Object(g.jsx)("div",{className:"commandBar",children:Object(g.jsxs)(A.a,{className:"container-fluid",children:[Object(g.jsx)(w.a,{inline:!0,onSubmit:function(e){t.tickerCallback(n),e.preventDefault(),e.target.reset(),c({ticker:""})},id:"tickerForm",children:Object(g.jsx)(C.a,{autoComplete:"off",autoCorrect:"off",spellCheck:"false",placeholder:"/tickertron","aria-label":"ticker",id:"ticker-bar",value:n.value,onChange:function(t){c({ticker:t.target.value})}})}),Object(g.jsx)(D.a,{className:"ml-auto",children:Object(g.jsx)(I,{})})]})})};r(224);var E=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(A.a,{fixed:"bottom",className:"justify-content-end",children:Object(g.jsx)(A.a.Brand,{href:"https://github.com/jhiney/tickertron",children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwQTM4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwQTI4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMyOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBNDE0QUJDOTlBMTExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8kSqyAAADD5JREFUeNrsXQ2QlVUZfllYUBe2YCuQFNel9Q9EcVEQSA3xB2pTSVcESjELnZomBW0ya5w0m1GyzKSmtEYDc6hGohRDrUGQZUko0EARCAXK+FEwXFz2yvY+fO/d+fbu/fm++533+7n3PDPPwC6Xc77zPvc7P+95z3t6dHR0kEXpoleJtGMwcwTzE8w6Zi1zELNG2JfZJ+P/tDEPMPcK32JuY25lbmauZ/476YbpkcA3+BjmucxxwlHMAUp1vc18ifmisJnZagU2jyHMKcxJzPOzvI1hAW/9MuYS5pPMN6zAxeNjzOnMq5mjY/qMLcyFzPnMXVZgb7iQOYt5ObMyIT1hO/MPzJ8xn7cCZ5/sTWXeKpOlJAOTs/uYTzBT5S4whJ3BvIM5tMRWKFuYd0v3nSpHgT/NnMs8pcSXoq8xZzOfKheBT2I+wLy0zHwOzzC/LoKHhooQ68KE6XYZo8pNXJI2rxMbVJbaG3wa83HmGWRBIvQ05oakv8E9mF9hrrHidsEZYpOvio0S+QbD//tL5lVWz7z4HXMmOX7xxAhcz1wkXbNFYWxkXsZ8PQld9HjmKiuuL5wqNhsfd4GbyHHVDbCa+cYAsV1TXAXGOPIbZm+rVdHoLTa8Pm4C3yQTqgqrkRFNHhGbxmKSNVPEtTCPLwa1bVCBm6RLsW+uDg4zryFnzzl0gcfLpMCOubo4RM4e+YowBa6Xab2dLYcDxIaNKWadXIzA8FCtlrWbRXiAM+Qc8unx8jt2wm/6KytuJDhVbN9DU2BsHFwZ8EH3keNof1n+XurYJ21Fm/cHLOtK0UCli4brcS0FD1n9DHWNbjhOJhHYL4U/9uiEC3qQnAC8Z2QSusP1b43MxQHLR+huA/OfJgXGBvXfKPiWHyYLOHHQnuPfq8mJ0UJUZdKC7/CWIqoSMVjv5rHjf5n9A9aF/eSz89jRdxd9G5nZz11S4KFgmHlSF4LcWxIg7Gp51hHy7O/m+Wy72CAoYJ9vmBqDT2Z+25AxXvDxWXRxOKLyOXLOC8UNW2VMHCPP6hXLDdV/h2gTuIv+M/NiQw/VIOO4X2DcnyNftFxzgDdkXHqVuZOcg2MgDpa9J2Njm6s8jPVV5BxOGyz8ODlRnsOYJ+QZA+9h3st8v0gbvGTInkuZlwQRGKGtfzL0MO1i0PYAZcDBAkf8cOZK6RGWy/hnOiIC6/3TyfHYnUfOQTd8gW6gYJGRlfKFMxV4lzlp9SxwL2nQSYYe5M08b4XftTh4OOQuOT2cmah3u6weTOB1WeGk/I7BMwyKC7xlqJyOCMRNC2uq3v8YfK560crXJKtSBnHT60MLB6bPGEOr3n4ExkGwoVaHxABaXe1H4DkKD3GU1aETGt66W70KPJF0vEgnWF07MUShzNNFu4IC36jUqIHMflbbIzYYqFT2TYUERtqEzypVjqXNWVbfIzbQOq7SKBrmFHgG6Z58m2j1VbVBZeaSKVPgJuXGNVp91W3QlEtgJBDTzmZzt9VX3Qaj3Utct8CXK1d8Fzkn6codsMF3leu4LJvAkxQrXBVCo5KEu8QmWpjcObOVzQakB0S0hUYGuQ9kjbbR6toF2JbELphGvlBsaSKkuTX9Bo8jvfSAD1lxs+JVsY0G+oimnV30WKWKsCH+PatlTtxDxQUNeMFYt8DjlCr5NcU0h2NMsEtspIFx7jF4L+kcQ8GUfbXVMS9wWkEjuBBzqhoIjDikHQoVbCW75egVW8QPYRrHoYvWij9+2urmGUuUyh0BgeuVCl9hdYvcVvUQuFapcDv2Rm+rWi2BERr7ptXNM2CrlJbAgxQKRljoB1Y3z4C4OxXKHQSBaxQK/p/VzDc0jtLWaAm83+rlGwe0BNaIk+pp9fINjU2HfhBYI0tOX6uXb2iEFffWym9VZfXyjWqNQrUEtrmzYmIz+KI1EkYfki7HXm3q/UXDtmGlRsEppW/jYKubZwwmnXDlVIXikuZEq5tn1CmVu7+C9HJV1VndIn8Z9kHg3UqFj7K6ecbZSuXuhsA7lQofa3WL3FY7NQU+k5xwXIvCPoMRmgJvVioc7soJVr+CmEB6rt3NEHiT4sNPsfoVxBWKZW+CowPpfLYrVYBtQ+w3t1odswJDGLIPaR2MPx5vMCIq9ypVgAefbnXMiemK4iJsdkfaF71GsRG3kL20Ixt6iW20cCRdYtrwKxUrwiGra62e3fB50r39vNkt8IvKjcEZnGqraSeqxSaaWOEWGD+0KVaGidb9VtdO/Ih0gh3TaMsUGFtVy5UbhVu8plltjyRJmalcx3LRtMvk548hNO5hcpJ8lytw4u/nIdTTmQLanU4Ymei2hVA5Ut4jwXhLmYmLk5ZLQ5qL1JKTIL3LG4xfhHHcpFoaenEZiYv8J8+GJO7qtLiUZX26IMRZJE7U3UmlHWKLtiFt0lMUXhrHx90/ZGZ8/yg5u0uVIRoBSzRc9rSuxMRFysJ5pJ97zA2cCYPreVeuNxib/4simHjAk/YT0snCGjYQnfELcjxJo0OuexFlpMzIdmfDBcy/+ii0WWZtKBjZArB5jS2wXkV+AzFM/JSSdfwUyUU/SU6m3qYIh50JmdrlupQDV9+M9FAgbg/5EHU/SYiu/mbmbCo+3hepl56QL8/fKX4huD1lyYekY1Mp+iBDDHFndvvm5RAYi3Gv2V9uZ34/y0IbnpTH5I0cGfDhcR3cC9Jb4Iq9Vyj8iy0xtuE6n1HSS0HcD8foCwff9nyvAqN7RaIur0lUHiDnqrU215pvgMyUEZKykFzp9QwB25xbZD39TTJ/Ewsmmj+WttRJTxVXwA7YuOge4w6Bc/DaDn/YyByZUcYVzGXMY+VP0ziQpU6TbGC+3xF/XJerDfkaV8Fc77OiVuYlrjKGMXczJzFrmNsNN2yWorhpfi3m4r4sWmV9/kJX28ED4zcdEu5HQlbzbHvMkynPNWxFTCrOIv1LsjCZQtLQuN56PpnypGEqFGmxhPzfXYgrY35PXe8OqBJXHcaIRw017D4K5wY0rBDujam4T1OBHFtebh/FRAt3GPrNRovdqfQFH8fIpAj37OG2TORKPjlAwxDMN5DCu02trziB4nT3Eya0w2SCRcW+wekZ2neKeIBG18y5VTxWt8nyppGCBdz/hcK9Ku+A1Bkn3FlIXK8CA/dTcXfe/sBVBxwXy6S7xloSV9duKLJxKyMwaJwy98G1O9fLB70KnBLnh9+35hTqfssI7uPFjseD5By6wpfgkI8yEai/NAKjxiWp+UHRImVSYOA1cT/6xeyMn58jJ7LjoHTdc8TN9y1ydpYyg+T3iGcM9xyMkS/NPyIw7LaYCHyzOKG8oYh14fwi1mrn5invROazzAeZR8nv+jOHMPu5PjeKOZd5fghr32ysjcGad4Hf5y6moVXMdT4frJnZM0d5dcw98rkG+d158rsNIjZ+t1Y+Mz8igT8SsbhwOvX1+9zFnDh4T5Y/fg6Oj5FZXzYgcfjx5ISRrnGNM0jQ+S+Xfxt3AV3KvD6irjEVYbe8R2zuOxuel3VwLmA35XnydxcuIjfmUTKBnaN3IppUTSx25RDkzBC27qb69CY9JNP7ygQKHMUzw7bTgiwLgx4KW8z8gk+RMatGQMFFCRO4KgJxYdtAIVQmTv0tkHHRj8jDZS2Lvdwbyd8xjmOp9JOdwpazyECUa5AxOBM46/pYgC8N3G6vyHpzn6yHEeuEdMfYuKgl54o8BBL0p/AjOmpl0hfWm2skhNlkCls8EJKqLfQ58UpjKHmPIOlTom/uQZnXLDZVoOmD2dha/BTp33Z2dAmKC5tdaFJcDYFJxtVzInInJhXrxWbNpgvWSq2AszHYVHjUalcQiF4dS67zREkQGIDH6zrmDfJ3i+72+ZJMqNTsE0ZylEfICchusZp2GcYQT/awdkVhZb9BNj1EdNxC4UZixHGWPEdssSmMCsNMb4TgtR+SE534ZBmKizafRk6AQ2iXhkWRvwqTiSmyJFhbBsLiXNVF0uZtYVceZYIyBLEhNusa8h8Ok4SUTBulbWjjc1E9RNQZ6OAnxQlC+KZx7HKVx//3dgTP6jXNVIu0Zbi07XCUBjbpizYFBAekz9lm81itoeiyySOytCGH+L8l51zzyjgZM44Cp4EN9qvI2cRAcAE2HnC4+ctaTgEPqCXn9P4F8maix1kg4r4TRyPGWWCLEhiDLZTxfwEGAIg2ItsKhKpcAAAAAElFTkSuQmCC",width:"30",height:"30",className:"d-inline-block align-bottom",alt:"GitHub logo"})})})})};var Z=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),r=e[0],n=e[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)(Y,{tickerCallback:function(t){if(t.ticker.includes(",")){var e=t.ticker.split(",");n([].concat(Object(s.a)(r),Object(s.a)(e)))}else n([].concat(Object(s.a)(r),[t.ticker]))}}),Object(g.jsx)(N,{tickerlist:r}),Object(g.jsx)(E,{})]})},V=r(101),z=r(12);i.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(V.a,{children:Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(z.a,{path:"/tickertron",exact:!0,component:Z})})})}),document.getElementById("root"))},64:function(t,e,r){},93:function(t,e,r){}},[[230,1,2]]]);
//# sourceMappingURL=main.558974ae.chunk.js.map