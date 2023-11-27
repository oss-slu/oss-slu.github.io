"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[799],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),h=n,d=c["".concat(p,".").concat(h)]||c[h]||m[h]||i;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={id:"about",title:"Speech Transcription (Saltify)",custom_edit_url:null},o=void 0,l={unversionedId:"project_saltify/about",id:"project_saltify/about",title:"Speech Transcription (Saltify)",description:"Overview",source:"@site/docs/project_saltify/about.md",sourceDirName:"project_saltify",slug:"/project_saltify/about",permalink:"/docs/project_saltify/about",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"about",title:"Speech Transcription (Saltify)",custom_edit_url:null}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Information",id:"information",level:3},{value:"User Guide",id:"user-guide",level:2},{value:"Technical Information",id:"technical-information",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Development Priorities",id:"development-priorities",level:3},{value:"Get Involved",id:"get-involved",level:2}],u={toc:s};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt",src:r(8593).Z,width:"100",height:"100"})," Children naturally produce speech sound errors, language errors, and language features, such as disfluencies. Language errors and features are diagnostically meaningful to speech-language pathologists (SLPs) and need to be maintained in the transcription. The primary purpose of the application is to transcribe an audio sample into a written format that is accepted by SALT software. SALT software is commercially-licensed software that analyzes the speech of children and scores it according to their metrics. Our application can currently transcribe audio samples of a conversation between a child and an adult into text. It also allows users to add grammar checking to the transcription, which looks for possible errors in grammar within the text."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: careful review by a knowledgeable speech-language pathologist is required for an accurate final product.")),(0,n.kt)("h3",{id:"information"},"Information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Source Code:")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/oss-slu/SpeechTranscription"},"https://github.com/oss-slu/SpeechTranscription"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Clients:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.slu.edu/doisy/faculty/steele-sara.php"},"Dr. Sara Steele")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.slu.edu/doisy/faculty/roepke-elizabeth.php"},"Dr. Elizabeth Roepke")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Current Tech Lead:")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/loganwyas"},"Logan Wyas"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Developers:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cbush201"},"Colin Bush")," (capstone)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/TravisHerrick7"},"Travis Herrick")," (capstone)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JackPifer"},"Jack Pifer")," (capstone)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/OmarAlAkkad"},"Omar Al Akkad")," (alumni, previous tech lead)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gertysr"},"Sean Gerty")," (alumni)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ahediger"},"Drew Hediger")," (alumni)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jakewahle"},"Jake Wahle")," (alumni)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Start Date:")," September 2022")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Adoption Date:")," September 2022")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Technologies Used:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Python",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Tkinter / CustomTkinter"),(0,n.kt)("li",{parentName:"ul"},"NLTK"),(0,n.kt)("li",{parentName:"ul"},"PyAudio"),(0,n.kt)("li",{parentName:"ul"},"OpenAI Whisper"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.saltsoftware.com/"},"SALT")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type:")," Desktop")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"License:")," ",(0,n.kt)("a",{parentName:"p",href:"https://opensource.org/license/gpl-3-0/"},"GNU General Public License v3.0")))),(0,n.kt)("h2",{id:"user-guide"},"User Guide"),(0,n.kt)("p",null,'Upon running the software, you will be given the option to either upload an audio file, or record one yourself. If choosing to upload a file, you can upload either an MP3 or a WAV file. Assuming that the audio is successfully added, you are ready to transcribe it. You will then click the "Transcribe" button to start the transcription process. After the transcribing finishes, the transcription will appear on the screen. You can play the audio file and look over the transcription at the same time, checking if there are any errors. You will then decide whether you want to do manual/automatic grammar checking through the program, or you can let the program add morphemes to the transcription. Once everything with the transcription is complete, you can export the transcription to a Word document.'),(0,n.kt)("h2",{id:"technical-information"},"Technical Information"),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("p",null,"Overview of the software architecture.\n",(0,n.kt)("img",{alt:"Software Architecture",src:r(2838).Z,width:"708",height:"1052"})),(0,n.kt)("h3",{id:"development-priorities"},"Development Priorities"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improve the user interface"),(0,n.kt)("li",{parentName:"ul"},"Add diarization to the transcription"),(0,n.kt)("li",{parentName:"ul"},"Fix the errors when adding morphemes"),(0,n.kt)("li",{parentName:"ul"},"Implement automated testing"),(0,n.kt)("li",{parentName:"ul"},"Address the freezing of certain processes")),(0,n.kt)("h2",{id:"get-involved"},"Get Involved"),(0,n.kt)("p",null,"If you would like to contribute to this project, please visit our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/oss-slu/SpeechTranscription/"},"GitHub page")," to create your own issues or pull requests."))}c.isMDXComponent=!0},8593:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},2838:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/architecture-bc4c9304476f623bfc4d8048e1e13644.png"}}]);