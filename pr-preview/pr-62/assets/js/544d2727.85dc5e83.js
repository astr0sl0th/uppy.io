"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8190],{7259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var a=r(7462),s=(r(7294),r(3905)),n=r(5488),i=r(5162),p=r(3068);const o={sidebar_position:5},l="Progress bar",d={unversionedId:"user-interfaces/elements/progress-bar",id:"user-interfaces/elements/progress-bar",title:"Progress bar",description:"@uppy/progress-bar is a minimalist plugin that shows the current upload",source:"@site/docs/user-interfaces/elements/progress-bar.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/progress-bar",permalink:"/uppy.io/pr-preview/pr-62/docs/user-interfaces/elements/progress-bar",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/progress-bar.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Status bar",permalink:"/uppy.io/pr-preview/pr-62/docs/user-interfaces/elements/status-bar"},next:{title:"Drop target",permalink:"/uppy.io/pr-preview/pr-62/docs/user-interfaces/elements/drop-target"}},u={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>fixed</code>",id:"fixed",level:4},{value:"<code>hideAfterFinish</code>",id:"hideafterfinish",level:4}],h={toc:m};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"progress-bar"},"Progress bar"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"@uppy/progress-bar")," is a minimalist plugin that shows the current upload\nprogress in a thin bar element, like the ones used by YouTube and GitHub when\nnavigating between pages."),(0,s.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,s.kt)("p",null,"When you need a minimalistec progress indicator and you\u2019re\n",(0,s.kt)("a",{parentName:"p",href:"/docs/guides/building-your-own-ui-with-uppy"},"building your own UI"),". For most\ncases, ",(0,s.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," or\n",(0,s.kt)("a",{parentName:"p",href:"/docs/user-interfaces/drag-drop"},"Drag & Drop")," (with\n",(0,s.kt)("a",{parentName:"p",href:"/docs/user-interfaces/elements/status-bar"},"Status Bar"),") is more likely what you\nneed."),(0,s.kt)("h2",{id:"install"},"Install"),(0,s.kt)(n.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/progress-bar\n"))),(0,s.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/progress-bar\n"))),(0,s.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, ProgressBar } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(ProgressBar, { target: '#progress-bar' })\n      "))),(0,s.kt)("h2",{id:"use"},"Use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core';\nimport ProgressBar from '@uppy/progress-bar';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/progress-bar/dist/style.min.css';\n\nnew Uppy().use(ProgressBar, { target: '#progres-bar' });\n")),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("h4",{id:"id"},(0,s.kt)("inlineCode",{parentName:"h4"},"id")),(0,s.kt)("p",null,"A unique identifier for this Status Bar (",(0,s.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,s.kt)("inlineCode",{parentName:"p"},"'ProgressBar'"),")."),(0,s.kt)("p",null,"Use this if you need to add several ProgressBar instances."),(0,s.kt)("h4",{id:"target"},(0,s.kt)("inlineCode",{parentName:"h4"},"target")),(0,s.kt)("p",null,"DOM element, CSS selector, or plugin to mount the Status Bar into (",(0,s.kt)("inlineCode",{parentName:"p"},"Element"),",\n",(0,s.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,s.kt)("h4",{id:"fixed"},(0,s.kt)("inlineCode",{parentName:"h4"},"fixed")),(0,s.kt)("p",null,"Show the progress bar at the top of the page with ",(0,s.kt)("inlineCode",{parentName:"p"},"position: fixed")," (",(0,s.kt)("inlineCode",{parentName:"p"},"boolean"),",\ndefault: ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,s.kt)("p",null,"When set to false, show the progress bar inline wherever it\u2019s mounted."),(0,s.kt)("h4",{id:"hideafterfinish"},(0,s.kt)("inlineCode",{parentName:"h4"},"hideAfterFinish")),(0,s.kt)("p",null,"Hides the progress bar after the upload has finished (",(0,s.kt)("inlineCode",{parentName:"p"},"boolean"),", default:\n",(0,s.kt)("inlineCode",{parentName:"p"},"true"),")."))}c.isMDXComponent=!0}}]);