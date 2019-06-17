(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(e,t,a){"use strict";a.r(t);var n,l,r=a(0),c=a.n(r),i=a(58),s=a.n(i),o=a(1),u=a(2),m=a(4),h=a(3),d=a(5),p=a(16),b=a.n(p),E=a(11),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).getData=function(){var e=[],t=[];return a.props.intensity_factors.map(function(a){Object.entries(a).map(function(a){a[1]>0&&(e.push(a[0]),t.push(a[1]))})}),{labels:e,datasets:[{label:"Intensity (units)",data:t,backgroundColor:"rgba(88, 211, 144,0.8)"}]}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"content"},c.a.createElement("section",{className:"columns"},c.a.createElement("section",{className:"column is-three-quarters"},c.a.createElement(E.a,{data:this.getData,options:{responsive:!0,title:{display:!0,text:"Intensity Factors Chart"},maintainAspectRatio:!0,scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{ticks:{beginAtZero:!0,stepSize:200},gridLines:{color:"rgba(0,0,0,0.05)"}}]}}})),c.a.createElement("section",{className:"column is-one-quarter"},c.a.createElement("h3",null,"Intensity Factors"),c.a.createElement("p",{className:"customcode help"},"Data available via the /intensity/factors route. Data with 0 value has been omitted."),c.a.createElement("hr",null),this.props.intensity_factors.map(function(e){return c.a.createElement("table",{className:"table is-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Factor"),c.a.createElement("th",null,"Value"))),c.a.createElement("tbody",null,Object.entries(e).map(function(e){if(e[1]>0)return c.a.createElement("tr",null,c.a.createElement("td",null,e[0]),c.a.createElement("td",{className:"customcode"},e[1]))})))})))))}}]),t}(r.Component),g=a(60),y=a.n(g),v=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"content"},c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column"},c.a.createElement("h3",null,"Intensity"),c.a.createElement("p",{className:"customcode help"},"Data available via the /intensity route"),c.a.createElement("hr",null),this.props.intensity.map(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{className:"table is-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Attribute"),c.a.createElement("th",null,"Value"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Date (from)"),c.a.createElement("td",{className:"customcode"},e.from)),c.a.createElement("tr",null,c.a.createElement("td",null,"Date (to)"),c.a.createElement("td",{className:"customcode"},e.to)),Object.entries(e.intensity).map(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",null,c.a.createElement("td",null,e[0]),c.a.createElement("td",{className:"customcode"},e[1])))}))))})),c.a.createElement("div",{className:"column"},c.a.createElement("img",{src:y.a,alt:""}))))}}]),t}(r.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"content"},c.a.createElement("h1",null,"Carbon Intensity National Report (United Kingdom)"),c.a.createElement("p",null,"By: Daniel Corcoran"),c.a.createElement("p",{className:"customcode help"},"Last updated: ",this.props.updated),c.a.createElement("hr",null),c.a.createElement("p",null,"This report was built for the purpose of learning how to integrate third party APIs with a React application. This project takes an open-source approach and costed nothing to create. Key information for this project is listed below:"),c.a.createElement("ul",null,c.a.createElement("li",null,"Data from this report is ingested from the Carbon Intensity API, a third party, publicly available API service. The data is live."),c.a.createElement("li",null,"Data is processed using Javascripts axios library"),c.a.createElement("li",null,"React.js was used to build the front-end and handle the API calls."),c.a.createElement("li",null,"Chart.js was used to generate the visualizations."),c.a.createElement("li",null,"HTML styled with Bulma CSS Framework"))),c.a.createElement("section",{className:"content"},c.a.createElement("h3",null,"Introduction"),c.a.createElement("hr",null),c.a.createElement("p",null,"The Carbon Intensity API was built in order to allow developers to produce applications that will enable consumers to optimise their behaviour and minimise CO2 emissions. The API holds data relating to emissions from electricity generation only; including large metered power stations, interconnector imports, transmission and distribution losses. For more information please visit the official ",c.a.createElement("a",{href:"https://carbonintensity.org.uk/"},"here."))))}}]),t}(r.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).getData=function(){var e=[],t=[];return a.props.generation.map(function(a){a.perc>0&&(e.push(a.fuel),t.push(a.perc))}),{labels:e,datasets:[{label:"Percentage (%)",data:t,backgroundColor:"rgba(88, 211, 144,0.8)"}]}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"content"},c.a.createElement("section",{className:"columns"},c.a.createElement("section",{className:"column is-one-quarter"},c.a.createElement("h3",null,"Generation Mix"),c.a.createElement("p",{className:"customcode help"},"Data available via the /generation route. Data with 0 value has been omitted."),c.a.createElement("hr",null),c.a.createElement("table",{className:"table is-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Fuel"),c.a.createElement("th",null,"Percent"))),c.a.createElement("tbody",null,this.props.generation.map(function(e){if(e.perc>0)return c.a.createElement("tr",{key:e.fuel},c.a.createElement("td",null,e.fuel),c.a.createElement("td",{className:"customcode"},e.perc))})))),c.a.createElement("section",{className:"column is-three-quarters"},c.a.createElement(E.a,{data:this.getData,options:{title:{display:!0,text:"Generation Mix Chart"},maintainAspectRatio:!0,scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{ticks:{beginAtZero:!0,stepSize:15},gridLines:{color:"rgba(0,0,0,0.05)"}}]}}}))))}}]),t}(r.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer has-text-centered"},c.a.createElement("div",{className:"container"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"https://carbonintensity.org.uk/"},"Learn more")," about the Carbon Intensity API"),c.a.createElement("li",null,"Visit the Carbon API ",c.a.createElement("a",{href:"https://carbon-intensity.github.io/api-definitions/?javascript#carbon-intensity-api-v2-0-0"},"Documentation")),c.a.createElement("li",null,"List of other publicly available ",c.a.createElement("a",{href:"https://github.com/public-apis/public-apis"},"APIs")),c.a.createElement("li",null,"Built with ",c.a.createElement("a",{href:"https://reactjs.org/"},"React.js")),c.a.createElement("li",null,"Illustrations from ",c.a.createElement("a",{href:"https://undraw.co/illustrations"},"undraw")))))}}]),t}(r.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"content"},c.a.createElement("h3",null,"Comparison"),c.a.createElement("hr",null),c.a.createElement("p",null,"This section will compare building data analytics in a web based approach vs bi tools."),c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column"},c.a.createElement("article",{className:"content"},c.a.createElement("h6",null,"Web Based Analytics"),c.a.createElement("ul",null,c.a.createElement("li",null,"Reliant on users browser, typically involves API calls and browser/client-side rendering."),c.a.createElement("li",null,"No license fees, use of open source libraries, cost effective."),c.a.createElement("li",null,"Large amount of flexibility in visualization, there are dozens of free frameworks."),c.a.createElement("li",null,"Requires programming knowledge"),c.a.createElement("li",null,"Code becomes resuable and scalable"),c.a.createElement("li",null,"Unlimited design flexibility, with availability of CSS/HTML")))),c.a.createElement("div",{className:"column"},c.a.createElement("article",{className:"content"},c.a.createElement("h6",null,"Business Intelligence Tools"),c.a.createElement("ul",null,c.a.createElement("li",null,"Can have costly license fees"),c.a.createElement("li",null,"Does not require much programming knowledge"),c.a.createElement("li",null,"Solutions are not reusable and have to be rebuilt"),c.a.createElement("li",null,"Integration with wider range of data sources"),c.a.createElement("li",null,"Limited in design flexibility by the software"))))))}}]),t}(r.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"section"},c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"content"},c.a.createElement("h3",null,"License"),c.a.createElement("hr",null),c.a.createElement("p",null,"The Carbon Intensity API is licensed under the terms of the CC BY 4.0. The terms of which, can be viewed ",c.a.createElement("a",{href:"https://creativecommons.org/licenses/by/4.0/"},"here"),"."))))}}]),t}(r.Component),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).getData=function(){var e=[],t=[],n=[];return a.props.timeseries.map(function(a){n.push(a.from),t.push(a.intensity.forecast),e.push(a.intensity.actual)}),{labels:n,datasets:[{label:"Actual",data:t,borderColor:"rgba(88, 211, 144,0.8)",backgroundColor:"rgba(88, 211, 144,0.8)",pointRadius:0,fill:!1},{label:"Forecast",data:e,borderColor:"rgba(147, 35, 153,0.8)",backgroundColor:"rgba(147, 35, 153,0.8)",pointRadius:0,fill:!1}]}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"content"},c.a.createElement("section",{className:"columns"},c.a.createElement("section",{className:"column is-three-quarters"},c.a.createElement(E.b,{data:this.getData,options:{title:{display:!0,text:"Time Series Chart"},maintainAspectRatio:!0,scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:50},gridLines:{color:"rgba(0,0,0,0.05)"}}],xAxes:[{ticks:{maxTicksLimit:10},gridLines:{display:!1}}]}}})),c.a.createElement("section",{className:"column is-one-quarter"},c.a.createElement("h3",null,"Intensity Time Series"),c.a.createElement("p",{className:"customcode help"},"Data available via the /intensity/fromDate/toDate/ route."),c.a.createElement("hr",null),c.a.createElement("p",null,"The following data backtracks approximately 5 days, and includes forecasts and actual figures."))))}}]),t}(r.Component),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={intensity:[],intensity_factors:[],generation:[],timeseries:[],updated:"Mon Jun 17 2019 09:24:20 GMT+1000 (Australian Eastern Standard Time)"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.carbonintensity.org.uk/intensity").then(function(t){e.setState({intensity:t.data.data})}).catch(function(e){console.log("An error has occured with the intensity call ".concat(e))}),b.a.get("https://api.carbonintensity.org.uk/intensity/factors").then(function(t){e.setState({intensity_factors:t.data.data})}).catch(function(e){console.log("An error has occured with the factors call ".concat(e))}),b.a.get("https://api.carbonintensity.org.uk/generation").then(function(t){console.log(t.data.data.generationmix),e.setState({generation:t.data.data.generationmix})}).catch(function(e){console.log("An error has occured with the generation call ".concat(e))});var t=new Date,a=t.getTime(),r=new Date(a-432e6);l=r.toJSON(),n=t.toJSON();var c="https://api.carbonintensity.org.uk/intensity/".concat(l,"/").concat(n);b.a.get(c).then(function(t){return e.setState({timeseries:t.data.data})}).catch(function(e){return console.log("There was an error retrieving data from the timeseries route ".concat(e))})}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"section"},c.a.createElement("section",{className:"container"},c.a.createElement(j,{updated:this.state.updated}),c.a.createElement(v,{intensity:this.state.intensity}),c.a.createElement(f,{intensity_factors:this.state.intensity_factors}),c.a.createElement(O,{generation:this.state.generation}),c.a.createElement(A,{timeseries:this.state.timeseries}),c.a.createElement(N,null),c.a.createElement(k,null))),c.a.createElement(w,null))}}]),t}(r.Component);s.a.render(c.a.createElement(C,null),document.getElementById("root"))},60:function(e,t,a){e.exports=a.p+"static/media/undraw_metrics_gtu7.6231c5fb.svg"},61:function(e,t,a){e.exports=a(175)}},[[61,1,2]]]);
//# sourceMappingURL=main.158d4028.chunk.js.map