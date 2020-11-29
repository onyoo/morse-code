(this["webpackJsonpmorse-code"]=this["webpackJsonpmorse-code"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),r=a.n(s),i=a(10),o=a.n(i),c=(a(16),a(17),a(8)),l=a(4),d=a(5),u=a(7),p=a(6),h=a(2),m=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={keybindings:{backspace:"Clear & Reset",esc:"Start/Stop session","any other key":"Clicker"}},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("table",{style:{width:"30%"},children:Object(n.jsx)("tbody",{children:Object.keys(this.state.keybindings).map((function(t,a){return Object(n.jsxs)("tr",{children:[Object(n.jsxs)("td",{style:{textAlign:"right"},children:[t,": "]}),Object(n.jsx)("td",{style:{textAlign:"center"},children:e.state.keybindings[t]})]},a)}))})}),Object(n.jsx)("div",{children:this.props.settings.sections.map((function(t,a){return Object(n.jsxs)("div",{class:"tooltip",children:[Object(n.jsx)("span",{class:"tooltiptext",children:t.hotkey}),Object(n.jsx)("button",{onClick:function(){return e.props.changeSettings({settings:Object(c.a)(Object(c.a)({},e.props.settings),{},{displayMode:t.label})})},children:t.label})]})}))}),Object(n.jsx)("input",{type:"range",min:"0.05",max:"0.5",value:this.props.settings.dotTime,className:"slider",id:"myRange",step:"0.01",onChange:function(t){e.props.changeSettings({dotTime:t.target.value})}}),Object(n.jsx)("div",{children:this.props.settings.displayMode})]})}}]),a}(r.a.Component),j=a(3),b=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).componentDidMount=function(e){window.onblur=function(e){n.stopListening()},document.body.addEventListener("keydown",(function(e){"Backspace"===e.key?n.reset():"Escape"===e.key?n.onOff():n.state.key!==e.key&&n.state.reading&&n.recordKeyDown(e)})),document.body.addEventListener("keyup",(function(e){"Escape"!==e.key&&n.recordKeyUp(e)}))},n.onOff=function(){var e=Object(j.a)(n.state.morseCode);n.props.setCode&&n.props.setCode({reading:!n.props.reading}),n.setState({reading:!n.state.reading,morseCode:e})},n.stopListening=function(){var e=Object(j.a)(n.state.morseCode);n.props.setCode&&n.props.setCode({reading:!1}),n.setState({reading:!1,tapStart:null,tapLastEnd:null,morseCode:e})},n.recordKeyDown=function(e){var t=[];if(n.state.tapLastEnd){var a=Math.round((e.timeStamp-n.state.tapLastEnd)/1e3*n.props.dotTime);t=a<=1*n.props.dotTime?[" "]:a<=3*n.props.dotTime?["   "]:["       "]}var s=[].concat(Object(j.a)(n.state.morseCode),Object(j.a)(t));n.setState({key:e.key,morseCode:s,tapLastEnd:null,tapStart:e.timeStamp})},n.recordKeyUp=function(e){if(n.state.reading){var t=(e.timeStamp-n.state.tapStart)/1e3,a=[].concat(Object(j.a)(n.state.tapDurations),[t]),s=a.reduce((function(e,t){return e+t}))/a.length,r=t<=n.props.dotTime?"*":t<=3.5*n.props.dotTime?"-":"",i=[].concat(Object(j.a)(n.state.morseCode),[r]),o=function(e){var t=e.reduce((function(e,t){if(console.log(e,t)," "===t)return Object(j.a)(e);if("   "===t||"       "===t)return[].concat(Object(j.a)(e),[t]);var a=e[e.length-1]?e[e.length-1]:"",n="   "===a||"       "===a?[a,t]:[a+t];return[].concat(Object(j.a)(e.slice(0,e.length-1)),n)}),[]),a=t.map((function(e){return e in h.morse?h.morse[e]:"   "!==e?e:""}));return{parsedLetters:t,translation:a}}(i),c=o.parsedLetters,l=o.translation;n.props.setCode&&n.props.setCode({translation:l}),n.setState({key:null,tapStart:null,tapLastEnd:e.timeStamp,tapDurations:a,lastDuration:t,lastSymbol:r,morseCode:i,parsedLetters:c,translation:l,averageTap:s})}},n.changeSettings=function(e){n.setState(Object(c.a)({},e))},n.reset=function(e){n.props.setCode&&n.props.setCode({reading:!1}),n.setState({tapStart:null,tapLastEnd:null,key:null,tapN:0,tapDurations:[],morseCode:[],lastDuration:null,lastSymbol:null,averageTap:0,reading:!1})},n.state={tapStart:null,tapLastEnd:null,key:null,tapN:0,tapDurations:[],morseCode:[],lastDuration:null,lastSymbol:null,parsedLetters:[],averageTap:0,reading:!1,values:Object.values(h.morse),currentChar:Object.values(h.morse)[0],currentSubmission:null},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.tapDurations,a=(e.translation,e.parsedLetters);return Object(n.jsxs)("div",{children:[a.join(""),Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{className:"stat-item",children:["Selected Dot Time: ",this.props.dotTime]}),Object(n.jsxs)("span",{className:"stat-item",children:["Selected Dash Time: ",3*this.props.dotTime]}),Object(n.jsxs)("span",{className:"stat-item",children:["Last Duration: ",this.state.lastDuration]}),Object(n.jsxs)("span",{className:"stat-item",children:["Last Symbol: ",this.state.lastSymbol]}),Object(n.jsxs)("span",{className:"stat-item",children:["Average:",t.reduce((function(e,t){return e+t}),0)/t.length/1e3]})]}),Object(n.jsx)("button",{onClick:this.reset,children:"Clear"})]})}}]),a}(r.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setCode=function(e){n.setState(e)},n.state={values:Object.values(h.morse),currentChar:Object.values(h.morse)[0],currentSubmission:null,translation:null,reading:!1},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.reading?"reading-class":"not-reading-class";return Object(n.jsxs)("div",{children:["Morse School",Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Character:"}),Object(n.jsx)("div",{children:this.state.currentChar}),Object(n.jsx)("h4",{children:"Input:"}),Object(n.jsx)("div",{children:this.state.currentSubmission}),Object(n.jsx)(b,{dotTime:this.props.dotTime,setCode:this.setCode,reading:this.state.reading}),Object(n.jsxs)("div",{children:["School Translation",Object(n.jsx)("br",{}),Object(n.jsxs)("div",{id:"morse-display",class:e,children:[this.state.translation,Object(n.jsx)("br",{}),e]})]})]})]})}}]),a}(r.a.Component),O=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changeSettings=function(e){n.setState(Object(c.a)({},e))},n.state={settings:{dotTime:.5,sections:[{label:"Freestyle",hotkey:"ctrl + f"},{label:"Training",hotkey:"ctrl + t"},{label:"Decryption",hotkey:"ctrl + d"}],displayMode:"Freestyle"}},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.settings.displayMode,t=this.state.reading?"reading-class":"not-reading-class";return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{settings:this.state.settings,changeSettings:this.changeSettings}),"Freestyle"===e?Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{dotTime:this.state.settings.dotTime,setCode:this.changeSettings,reading:this.state.reading}),Object(n.jsxs)("div",{id:"morse-display",className:t,children:[this.state.translation,Object(n.jsx)("br",{}),t]})]}):"Training"===e?Object(n.jsx)(g,{dotTime:this.state.settings.dotTime}):null,Object(n.jsx)("table",{style:{width:"100%"},children:Object(n.jsx)("tbody",{style:{width:"100%",float:"left"},className:"centered has-border",children:Object.keys(h.remember).map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsxs)("td",{style:{textAlign:"right"},children:[e,": "]}),Object(n.jsx)("td",{style:{textAlign:"center"},children:h.remember[e]})]},t)}))})})]})}}]),a}(r.a.Component);var y=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(O,{hi:!0})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),v()},2:function(e){e.exports=JSON.parse('{"units":[{"name":"Dit","time":1,"explanation":""},{"name":"Dah","time":3,"explanation":""},{"name":"Intra-character space","time":1,"explanation":"the gap between dits and dahs within a character"},{"name":"Inter-character space","time":3,"explanation":"the gap between the characters of a word"},{"name":"Word space","time":7,"explanation":"the gap between two words"}],"morse":{"*-":"A","-***":"B","-*-*":"C","-**":"D","*":"E","**-*":"F","--*":"G","****":"H","**":"I","*---":"J","-*-":"K","*-**":"L","--":"M","-*":"N","---":"O","*--*":"P","--*-":"Q","*-*":"R","***":"S","-":"T","**-":"U","***-":"V","*--":"W","-**-":"X","-*--":"Y","--**":"Z","*----":"1","**---":"2","***--":"3","****-":"4","*****":"5","-****":"6","--***":"7","---**":"8","----*":"9","-----":"0","*-*-*-":"Period","--**--":"Comma","---***":"Colon","**--**":"Question Mark","*----*":"Apostrophe","-****-":"Hyphen","-**-*":"Fraction Bar","-*--*-":"Parentheses","*-**-*":"Quotation Marks"},"remember":{"A":"a paart","B":"Booob-is-the-man","C":"Cooo-ca Cooo-la","D":"Dooog-did-it","E":"Eh","F":"Fetch-a-fiiire-man","G":"Good graa-vy","H":"Hi-ppi-dy-hop","I":"I-bid","J":"In jaws jaws jaws","K":"Kaaan-ga-roooo","L":"Los Aaan-ge-les","M":"MMM MMM","N":"Nuuu dist","O":"Oooh myyyy goood","P":"A poooo pyyy smell","Q":"gooood saaave the queeen","R":"ro-taaa-tion","S":"si si si","T":"tall","U":"u-ni-fooorm","V":"vic-tor-y veee","W":"the wooorld war","X":"eeex marks the spooot","Y":"yoou\'re a coool duuude","Z":"ziink zooo kee-per"},"other":{"NATO":{"A":"Alfa","B":"Bravo","C":"Charlie","D":"Delta","E":"Echo","F":"Foxtrot","G":"Golf","H":"Hotel","I":"India","J":"Juliett","K":"Kilo","L":"Lima","M":"Mike","N":"November","O":"Oscar","P":"Papa","Q":"Quebec","R":"Romeo","S":"Sierra","T":"Tango","U":"Uniform","V":"Victor","W":"Whiskey","X":"X-ray","Y":"Yankee","Z":"Zulu"},"English":{"A":"Andrew","B":"Benjamin","C":"Charlie","D":"David","E":"Edward","F":"Fredrick","G":"George","H":"Harry","I":"Isaac","J":"Jack","K":"King","L":"Lucy","M":"Mary","N":"Nelli","O":"Oliver","P":"Peter","Q":"Queenie","R":"Robert","S":"Sugar","T":"Tommy","U":"Uncle","V":"Victor","W":"William","X":"Xmas","Y":"Yellow","Z":"Zebra"},"American":{"A":"Able","B":"Baker","C":"Charlie","D":"Dog","E":"Easy","F":"Fox","G":"George","H":"How","I":"Item","J":"Jig","K":"King","L":"Love","M":"Mike","N":"Nan","O":"Oboe","P":"Peter","Q":"Queen","R":"Roger","S":"Sugar","T":"Tare","U":"Uncle","V":"Victor","W":"William","X":"X-ray","Y":"Yoke","Z":"Zebra"},"Italian":{"A":"Ancona","B":"Bologna","C":"Como","D":"Domodossola","E":"Empoli","F":"Firenze","G":"Genova","H":"Hotel","I":"Imola","J":"I lunga","K":"Kursaal","L":"Livorno","M":"Milano","N":"Napoli","O":"Otranto","P":"Padova","Q":"Quarto","R":"Roma","S":"Savona","T":"Torino","U":"Udine","V":"Venezia","W":"Washington","X":"Ics","Y":"York","Z":"Zara"},"German":{"A":"Anton","B":"Berta","C":"Casar","D":"Dora","E":"Emil","F":"Friedrich","G":"Gustav","H":"Heinrich","I":"Ida","J":"Julius","K":"Kaufmann","L":"Ludwig","M":"Martha","N":"Nordpol","O":"Otto","P":"Paula","Q":"Quelle","R":"Richard","S":"Samuel","T":"Theodor","U":"Ulrich","V":"Viktor","W":"Wilhelm","X":"Xanthippe","Y":"Ypsilon","Z":"Zeppelin"},"International":{"A":"Amsterdam","B":"Baltimore","C":"Casablanca","D":"Denmark","E":"Edision","F":"Florida","G":"Gallipoli","H":"Havana","I":"Italy","J":"Jerusalem","K":"Kilogram","L":"Liverpool","M":"Madagascar","N":"New York","O":"Oslo","P":"Paris","Q":"Quebec","R":"Roma","S":"Santiago","T":"Tripoli","U":"Uppsala","V":"Valencia","W":"Washington","X":"Xanthippe","Y":"Yokohama","Z":"Zurich"}}}')}},[[18,1,2]]]);
//# sourceMappingURL=main.827c1858.chunk.js.map