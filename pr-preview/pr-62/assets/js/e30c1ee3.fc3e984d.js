"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2377],{4138:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var t=a(7462),p=(a(7294),a(3905)),r=a(5488),o=a(5162),l=a(3068);const s={},i="Angular",u={unversionedId:"framework-integrations/angular",id:"framework-integrations/angular",title:"Angular",description:"Angular components for Uppy UI plugins.",source:"@site/docs/framework-integrations/angular.mdx",sourceDirName:"framework-integrations",slug:"/framework-integrations/angular",permalink:"/uppy.io/pr-preview/pr-62/docs/framework-integrations/angular",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/framework-integrations/angular.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"XHR",permalink:"/uppy.io/pr-preview/pr-62/docs/uploader/xhr"},next:{title:"React",permalink:"/uppy.io/pr-preview/pr-62/docs/framework-integrations/react"}},d={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"CSS",id:"css",level:3}],c={toc:m};function k(e){let{components:n,...a}=e;return(0,p.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"angular"},"Angular"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://angular.io"},"Angular")," components for Uppy UI plugins."),(0,p.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,p.kt)("p",null,"When you are using the Angular framework and you wouldl like to use on of the UI\ncomponents."),(0,p.kt)("h2",{id:"install"},"Install"),(0,p.kt)(r.Z,{mdxType:"Tabs"},(0,p.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/angular\n"))),(0,p.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/angular\n"))),(0,p.kt)(o.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,p.kt)(l.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Box } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Box, {\n          // Options\n        })\n      '))),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},"You also need to install the UI plugin you want to use. For instance,\n",(0,p.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard"),".")),(0,p.kt)("h2",{id:"use"},"Use"),(0,p.kt)("p",null,"Instead of adding a UI plugin to an Uppy instance with ",(0,p.kt)("inlineCode",{parentName:"p"},".use()"),", the Uppy\ninstance can be passed into components as a ",(0,p.kt)("inlineCode",{parentName:"p"},"props")," prop."),(0,p.kt)("p",null,"The following plugins are available as Angular component wrappers:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<uppy-dashboard />")," renders\n",(0,p.kt)("a",{parentName:"li",href:"/docs/user-interfaces/dashboard"},(0,p.kt)("inlineCode",{parentName:"a"},"@uppy/dashboard"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<uppy-drag-drop />")," renders\n",(0,p.kt)("a",{parentName:"li",href:"/docs/user-interfaces/drag-drop"},(0,p.kt)("inlineCode",{parentName:"a"},"@uppy/drag-drop"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<uppy-progress-bar />")," renders\n",(0,p.kt)("a",{parentName:"li",href:"/docs/user-interfaces/progress-bar"},(0,p.kt)("inlineCode",{parentName:"a"},"@uppy/progress-bar"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<uppy-status-bar />")," renders\n",(0,p.kt)("a",{parentName:"li",href:"/docs/user-interfaces/status-bar"},(0,p.kt)("inlineCode",{parentName:"a"},"@uppy/status-bar")))),(0,p.kt)("p",null,"Each component takes a ",(0,p.kt)("inlineCode",{parentName:"p"},"props")," prop that will be passed to the UI Plugin."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="app.module.ts" showLineNumbers',title:'"app.module.ts"',showLineNumbers:!0},"import { NgModule } from '@angular/core';\nimport { UppyAngularDashboardModule } from '@uppy/angular';\n\nimport { BrowserModule } from '@angular/platform-browser';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n    declarations: [AppComponent],\n    imports: [BrowserModule, UppyAngularDashboardModule],\n    providers: [],\n    bootstrap: [AppComponent],\n})\nclass {}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html" showLineNumbers',title:'"app.component.html"',showLineNumbers:!0},'<uppy-dashboard [uppy]="uppy"> </uppy-dashboard>\n')),(0,p.kt)("p",null,"You should initialize Uppy as a property of your component."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="app.component.ts" showLineNumbers',title:'"app.component.ts"',showLineNumbers:!0},"import { Component } from '@angular/core';\nimport { Uppy } from '@uppy/core';\n\n@Component({\n    selector: 'app-root',\n})\nexport class AppComponent {\n    uppy: Uppy = new Uppy({ debug: true, autoProceed: true });\n}\n")),(0,p.kt)("h3",{id:"css"},"CSS"),(0,p.kt)("p",null,"All components have their own styling and should be added to your component\ndecorator. You can find the CSS import statements in the docs of the UI plugin\nyou want to use. For instance, for ",(0,p.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"@Component({\n  // ...\n  styleUrls: [\n    '../node_modules/@uppy/core/dist/style.css',\n    '../node_modules/@uppy/dashboard/dist/style.css',\n  ],\n})\n")))}k.isMDXComponent=!0}}]);