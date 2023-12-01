"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2329],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),h=i,g=c["".concat(s,".").concat(h)]||c[h]||m[h]||n;return a?r.createElement(g,l(l({ref:t},u),{},{components:a})):r.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={id:"about",title:"Gallery Of Glosses",custom_edit_url:null},l=void 0,o={unversionedId:"project_gallery_of_glosses/about",id:"project_gallery_of_glosses/about",title:"Gallery Of Glosses",description:"Overview",source:"@site/docs/project_gallery_of_glosses/about.md",sourceDirName:"project_gallery_of_glosses",slug:"/project_gallery_of_glosses/about",permalink:"/docs/project_gallery_of_glosses/about",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"about",title:"Gallery Of Glosses",custom_edit_url:null}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Information",id:"information",level:3},{value:"User Guide",id:"user-guide",level:3},{value:"Technical Information",id:"technical-information",level:2},{value:"Technical Overview",id:"technical-overview",level:3},{value:"Development Priorities",id:"development-priorities",level:3},{value:"Get Involved",id:"get-involved",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Gallery of Glosses is a combination of interfaces that allow non-technical users to perform research and classify Glosses (on-page commentary) from the Gospel of Matthew and other source manuscripts. There is a NextJS interface for the ",(0,i.kt)("a",{parentName:"p",href:"https://gog-public-site.vercel.app/"},"public-facing website")," bootstrapped with style. This interface can be used by anyone to view information regarding glosses and manuscripts. There is another interface built which is used by researchers and administration for adding and editing gloss and manuscript information. The data for these interfaces is stored in ",(0,i.kt)("a",{parentName:"p",href:"https://rerum.io"},"RERUM"),"."),(0,i.kt)("h3",{id:"information"},"Information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Source Code:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/CenterForDigitalHumanities/glossing-entries"},"Data entry website")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/CenterForDigitalHumanities/Gallery-of-Glosses"},"Public Website")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Client")," Dr Atria Larson")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Current Tech Leads:")," "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bryan Haberberger (Research computing group)  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/thehabes"},(0,i.kt)("img",{src:"/img/github.svg",alt:"github",width:"25",height:"25"})),"   ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/bryan-haberberger-7033a0b3/"},(0,i.kt)("img",{src:"/img/linkedin.svg",alt:"LinkedIn",width:"25",height:"25"}))," "),(0,i.kt)("li",{parentName:"ul"},"Patrick Cuba (Research computing group)  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cubap"},(0,i.kt)("img",{src:"/img/github.svg",alt:"github",width:"25",height:"25"})),"   ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/patrick-cuba-9539334/"},(0,i.kt)("img",{src:"/img/linkedin.svg",alt:"LinkedIn",width:"25",height:"25"}))," "),(0,i.kt)("li",{parentName:"ul"},"Abhilash Kotha (Capstone) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AbhilashKotha"},(0,i.kt)("img",{src:"/img/github.svg",alt:"github",width:"25",height:"25"})),"   ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/abhilashkotha/"},(0,i.kt)("img",{src:"/img/linkedin.svg",alt:"LinkedIn",width:"25",height:"25"}))," "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Developers:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tu Tran (capstone) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/TheTuTran"},(0,i.kt)("img",{src:"/img/github.svg",alt:"github",width:"25",height:"25"}))),(0,i.kt)("li",{parentName:"ul"},"Kameron Bustos (capstone) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KamBustos"},(0,i.kt)("img",{src:"/img/github.svg",alt:"github",width:"25",height:"25"}))),(0,i.kt)("li",{parentName:"ul"},"Josh Cohen (capstone) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cohen-j"},(0,i.kt)("img",{src:"/img/github.svg",alt:"github",width:"25",height:"25"}))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Start Date:")," Aug, 2020 ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Adoption Date:")," Jul, 2023")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Technologies Used:")," "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"HTML5 - CSS - Javascript"),(0,i.kt)("li",{parentName:"ul"},"DEER Framework"),(0,i.kt)("li",{parentName:"ul"},"Next JS"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type:")," Web Applications")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"License:")," NA"))),(0,i.kt)("h3",{id:"user-guide"},"User Guide"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Public Website:")," Users can visit the public website using this ",(0,i.kt)("a",{parentName:"p",href:"https://gog-public-site.vercel.app/"},"link"),".  They can read more about the application and glossing terminology as well as browse through the public glosses.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Data entry Website")," Researchers and contributors can access the data entry application ",(0,i.kt)("a",{parentName:"p",href:"https://glossing.rerum.io/"},"here"),".  Note you must be a registered user and must sign in, as this data entry portal is not public.  Verified users can "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"view, add, and edit glosses"),(0,i.kt)("li",{parentName:"ul"},"attach and edit witnesses "),(0,i.kt)("li",{parentName:"ul"},"manage gloss public visibility for the public website")),(0,i.kt)("h2",{id:"technical-information"},"Technical Information"),(0,i.kt)("h3",{id:"technical-overview"},"Technical Overview"),(0,i.kt)("p",null,"Overview of the software architecture.\n",(0,i.kt)("img",{alt:"Software Architecture",src:a(7854).Z,width:"462",height:"1065"})),(0,i.kt)("h3",{id:"development-priorities"},"Development Priorities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Feature to add a reference to any witness added"),(0,i.kt)("li",{parentName:"ul"},"Add clear instructions for users on all the user forms"),(0,i.kt)("li",{parentName:"ul"},"A new interface for summarizing the metadata for manuscripts"),(0,i.kt)("li",{parentName:"ul"},"Read and display metadata fields from TPEN project")),(0,i.kt)("h2",{id:"get-involved"},"Get Involved"),(0,i.kt)("p",null,"If you would like to contribute to this project, please visit our GitHub pages for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CenterForDigitalHumanities/glossing-entries"},"data entry website")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CenterForDigitalHumanities/Gallery-of-Glosses"},"public website")," to create your own issues or pull requests."))}c.isMDXComponent=!0},7854:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/architecture-60e6aba6c25c3422f8854388bd380571.png"}}]);