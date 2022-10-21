var G=Object.defineProperty;var o=(r,e)=>G(r,"name",{value:e,configurable:!0});import"./index.696d880a.js";import{c as l,A as $,M as N}from"./Props.4adbc6ba.js";import{j as v,a as x}from"./jsx-runtime.7bac2782.js";import"./iframe.a5d94251.js";import{b as B}from"./index.11e244dc.js";import"./string.b39aabde.js";import"./index.aca579a6.js";import"./es.map.constructor.8c70f713.js";import"./es.number.to-fixed.b6866462.js";const D={ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},L={default:"Roboto, sans-serif",batata:"monospace"},z={title:"Ignite",colors:D,fonts:L},H={flix300:"#00B37E",flix500:"#00875F",flix700:"#015F43",flix900:"#00291D"},K={default:"Roboto, sans-serif",heading:"Montserrat, sans-serif"},X={title:"Memberflix",colors:H,fonts:K};function Y(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}o(Y,"_assertThisInitialized");function h(r,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():o(function(a,n){return a.__proto__=n,a},"_setPrototypeOf"),h(r,e)}o(h,"_setPrototypeOf");function V(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,h(r,e)}o(V,"_inheritsLoose");function O(r){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():o(function(t){return t.__proto__||Object.getPrototypeOf(t)},"_getPrototypeOf"),O(r)}o(O,"_getPrototypeOf");function W(r){return Function.toString.call(r).indexOf("[native code]")!==-1}o(W,"_isNativeFunction");function J(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}o(J,"_isNativeReflectConstruct");function F(r,e,t){return J()?F=Reflect.construct.bind():F=o(function(n,f,i){var s=[null];s.push.apply(s,f);var c=Function.bind.apply(n,s),d=new c;return i&&h(d,i.prototype),d},"_construct"),F.apply(null,arguments)}o(F,"_construct");function C(r){var e=typeof Map=="function"?new Map:void 0;return C=o(function(a){if(a===null||!W(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(a))return e.get(a);e.set(a,n)}function n(){return F(a,arguments,O(this).constructor)}return o(n,"Wrapper"),n.prototype=Object.create(a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,a)},"_wrapNativeSuper"),C(r)}o(C,"_wrapNativeSuper");var w=function(r){V(e,r);function e(t){var a;return a=r.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,Y(a)}return o(e,"PolishedError"),e}(C(Error));function I(r){return Math.round(r*255)}o(I,"colorToInt");function Q(r,e,t){return I(r)+","+I(e)+","+I(t)}o(Q,"convertToInt");function R(r,e,t,a){if(a===void 0&&(a=Q),e===0)return a(t,t,t);var n=(r%360+360)%360/60,f=(1-Math.abs(2*t-1))*e,i=f*(1-Math.abs(n%2-1)),s=0,c=0,d=0;n>=0&&n<1?(s=f,c=i):n>=1&&n<2?(s=i,c=f):n>=2&&n<3?(c=f,d=i):n>=3&&n<4?(c=i,d=f):n>=4&&n<5?(s=i,d=f):n>=5&&n<6&&(s=f,d=i);var p=t-f/2,b=s+p,u=c+p,_=d+p;return a(b,u,_)}o(R,"hslToRgb");var M={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function U(r){if(typeof r!="string")return r;var e=r.toLowerCase();return M[e]?"#"+M[e]:r}o(U,"nameToHex");var Z=/^#[a-fA-F0-9]{6}$/,ee=/^#[a-fA-F0-9]{8}$/,re=/^#[a-fA-F0-9]{3}$/,te=/^#[a-fA-F0-9]{4}$/,k=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,ae=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,ne=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,oe=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function fe(r){if(typeof r!="string")throw new w(3);var e=U(r);if(e.match(Z))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(ee)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(re))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(te)){var a=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:a}}var n=k.exec(e);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var f=ae.exec(e.substring(0,50));if(f)return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])};var i=ne.exec(e);if(i){var s=parseInt(""+i[1],10),c=parseInt(""+i[2],10)/100,d=parseInt(""+i[3],10)/100,p="rgb("+R(s,c,d)+")",b=k.exec(p);if(!b)throw new w(4,e,p);return{red:parseInt(""+b[1],10),green:parseInt(""+b[2],10),blue:parseInt(""+b[3],10)}}var u=oe.exec(e.substring(0,50));if(u){var _=parseInt(""+u[1],10),q=parseInt(""+u[2],10)/100,A=parseInt(""+u[3],10)/100,j="rgb("+R(_,q,A)+")",y=k.exec(j);if(!y)throw new w(4,e,j);return{red:parseInt(""+y[1],10),green:parseInt(""+y[2],10),blue:parseInt(""+y[3],10),alpha:parseFloat(""+u[4])>1?parseFloat(""+u[4])/100:parseFloat(""+u[4])}}throw new w(5)}o(fe,"parseToRgb");function E(r){if(r==="transparent")return 0;var e=fe(r),t=Object.keys(e).map(function(i){var s=e[i]/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)}),a=t[0],n=t[1],f=t[2];return parseFloat((.2126*a+.7152*n+.0722*f).toFixed(3))}o(E,"getLuminance");function P(r,e){var t=E(r),a=E(e);return parseFloat((t>a?(t+.05)/(a+.05):(a+.05)/(t+.05)).toFixed(2))}o(P,"getContrast");function m({theme:r}){return r?Object.entries(r.colors).map(([e,t])=>v("div",{style:{backgroundColor:t,padding:"2rem"},children:x("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"monospace",color:P(t,"#FFF")<3.5?"#000":"#FFF"},children:[x("strong",{children:["$",e]}),v("span",{children:t})]})},e)):Object.entries(B).map(([e,t])=>v("div",{style:{backgroundColor:t,padding:"2rem"},children:x("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"monospace",color:P(t,"#FFF")<3.5?"#000":"#FFF"},children:[x("strong",{children:["$",e]}),v("span",{children:t})]})},e))}o(m,"ColorsGrid");try{m.displayName="ColorsGrid",m.__docgenInfo={description:"",displayName:"ColorsGrid",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"{ title: string; colors: { color: string; }; fonts: { font: string; }; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ColorsGrid.tsx#ColorsGrid"]={docgenInfo:m.__docgenInfo,name:"ColorsGrid",path:"src/components/ColorsGrid.tsx#ColorsGrid"})}catch{}function T(){return T=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])}return r},T.apply(this,arguments)}o(T,"_extends");const ie={},se="wrapper";function S({components:r,...e}){return l(se,T({},ie,e,{components:r,mdxType:"MDXLayout"}),l(N,{title:"Tokens/Colors",mdxType:"Meta"}),l("h1",null,"Colors"),l("p",null,"Essas s\xE3o as cores base usadas em qualquer aplica\xE7\xE3o. "),l(m,{mdxType:"ColorsGrid"}),l("h2",null,"Temas"),l("h3",null,"Ignite"),l("p",null,"Essas s\xE3o as cores utilizadas no tema ignite. "),l(m,{theme:z,mdxType:"ColorsGrid"}),l("h3",null,"Memberflix"),l("p",null,"Essas s\xE3o as cores utilizadas no tema Memberflix. "),l(m,{theme:X,mdxType:"ColorsGrid"}))}o(S,"MDXContent");S.isMDXComponent=!0;const le=o(()=>{throw new Error("Docs-only story")},"__page");le.parameters={docsOnly:!0};const g={title:"Tokens/Colors",includeStories:["__page"]},de={};g.parameters=g.parameters||{};g.parameters.docs={...g.parameters.docs||{},page:()=>l($,{mdxStoryNameToKey:de,mdxComponentAnnotations:g},l(S,null))};const we=["__page"];export{we as __namedExportsOrder,le as __page,g as default};
//# sourceMappingURL=colors.stories.4f9f0fad.js.map