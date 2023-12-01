"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3207],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},h=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,d=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(d,l(l({ref:t},h),{},{components:r})):n.createElement(d,l({ref:t},h))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1810:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={id:"about",title:"Homeless Shelter Volunteer Scheduling Application",custom_edit_url:null},l=void 0,o={unversionedId:"project_shelter_volunteers/about",id:"project_shelter_volunteers/about",title:"Homeless Shelter Volunteer Scheduling Application",description:"Overview",source:"@site/docs/project_shelter_volunteers/about.md",sourceDirName:"project_shelter_volunteers",slug:"/project_shelter_volunteers/about",permalink:"/docs/project_shelter_volunteers/about",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"about",title:"Homeless Shelter Volunteer Scheduling Application",custom_edit_url:null}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Information",id:"information",level:3},{value:"Users",id:"users",level:2},{value:"Technical Information",id:"technical-information",level:2},{value:"Software Architecture Overview",id:"software-architecture-overview",level:2},{value:"Development Priorities",id:"development-priorities",level:2},{value:"Get Involved",id:"get-involved",level:2}],h={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Homeless shelters rely on volunteers' help. When inclement weather strikes, homeless shelters get filled with people that need a place to stay, and volunteers' help becomes even more important. There are many people willing to volunteer, but knowing which shelter lacks help is a challenge. The purpose of this application is to simplify the process of scheduling work shifts for volunteers, and to give homeless shelters visibility into their upcoming staffing. The application allows volunteers to select shelters and times when they want to work, see which shelters (and which times) urgently need help, and cancel/reschedule their shifts. The application will also allow shelter staff to see who is scheduled to help at their shelter on different dates and different times, and issue a 'call for help' when help is needed urgently."),(0,i.kt)("h3",{id:"information"},"Information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Source Code:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/oss-slu/shelter_volunteers"},"https://github.com/oss-slu/shelter_volunteers")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/oss-slu/shelter_volunteers"},(0,i.kt)("img",{src:"/img/git-alt.svg",alt:"git",width:"25",height:"25"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Client")," Tim Huffman (House Everyone StL)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"External Mentors")," Women in Technology Group (WWT), GetHelp"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Current Tech Lead:")," Kate Holdener ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kate-holdener"},(0,i.kt)("img",{src:"/img/github.svg",alt:"github",width:"25",height:"25"}))," ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/kate-holdener-ba032a3/"},(0,i.kt)("img",{src:"/img/linkedin.svg",alt:"linkedin",width:"25",height:"25"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Developers:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Abhilash Kotha ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AbhilashKotha"},(0,i.kt)("img",{src:"/img/github.svg",alt:"github",width:"25",height:"25"}))),(0,i.kt)("li",{parentName:"ul"},"Logan Wyas ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/loganwyas"},(0,i.kt)("img",{src:"/img/github.svg",alt:"github",width:"25",height:"25"}))),(0,i.kt)("li",{parentName:"ul"},"Saiteja Gollapalli ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Sai9797"},(0,i.kt)("img",{src:"/img/github.svg",alt:"github",width:"25",height:"25"}))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Start Date:")," August, 2023"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Adoption Date:")," August, 2023"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Technologies Used:")," ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"React"),(0,i.kt)("li",{parentName:"ul"},"Flask"),(0,i.kt)("li",{parentName:"ul"},"MongoDB"),(0,i.kt)("li",{parentName:"ul"},"pytest, pylint"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type:")," Web Application"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"License:")," ",(0,i.kt)("a",{parentName:"li",href:"https://opensource.org/license/mit"},"MIT"))),(0,i.kt)("h2",{id:"users"},"Users"),(0,i.kt)("p",null,"The software will be deployed as a web application, and users will access the application through a web browswer. They will create an account,\nsign in and navigate the user interface to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Schedule work shifts"),(0,i.kt)("li",{parentName:"ul"},"See upcoming work shifts (possibly cancel some of them)"),(0,i.kt)("li",{parentName:"ul"},"See previous work shifts"),(0,i.kt)("li",{parentName:"ul"},"See the impact they have created (number of hours served, number of shelters helped, number of lives touched).")),(0,i.kt)("h2",{id:"technical-information"},"Technical Information"),(0,i.kt)("p",null,"The application is integraed with ",(0,i.kt)("a",{parentName:"p",href:"https://gethelp.com/"},"GetHelp")," API, for retrieving shelter information and user authentication.\nIntegrating with GetHelp authentication API requires an API key. The development version of the application can be run in a 'bypass authentication'\nmode, that will bypass GetHelp authentication API and allow anyone to run the code in a development environment."),(0,i.kt)("h2",{id:"software-architecture-overview"},"Software Architecture Overview"),(0,i.kt)("p",null,"We defie the context of our software system in the diagram below. Users (volunteers) and shelter staff will access the application through a web browser, and sign-in to their account with their own credentials. Our application relies on GetHelp system for shelter specific data and for authentication."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Software Architecture Context Diagram",src:r(5262).Z,width:"332",height:"589"})),(0,i.kt)("p",null,"The details of the different containers within our system are shown in the picture below. The user interface of the application (the client side of our system) is written in React. The client side uses GetHelp API to locate nearby shelters. The client side of the application sends requests to sign in, save/retrieve user specific work shift data, and calculate the times when shelters need the most help to our server-side application. The server-side application communicates with the database to read/write user specific data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Software Architecture Container Diagram",src:r(2137).Z,width:"551",height:"986"})),(0,i.kt)("h2",{id:"development-priorities"},"Development Priorities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Complete volunteer scheduling functionality"),(0,i.kt)("li",{parentName:"ul"},"Improve UI/UX"),(0,i.kt)("li",{parentName:"ul"},"Deploy application for user testing"),(0,i.kt)("li",{parentName:"ul"},"User testing"),(0,i.kt)("li",{parentName:"ul"},"Develop shelter staff dashboard"),(0,i.kt)("li",{parentName:"ul"},"Deploy application for general use")),(0,i.kt)("h2",{id:"get-involved"},"Get Involved"),(0,i.kt)("p",null,"Developers joining the project should follow the instructions in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oss-slu/shelter_volunteers/blob/main/README.md"},"README"),"\nfile of the project repository to run the application in a development environment."))}u.isMDXComponent=!0},2137:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/container-ffc722a91e2fdfb8ccae35d14e6a1070.png"},5262:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/context-169d70bba38116b6bae9b96909d6fb0b.png"}}]);