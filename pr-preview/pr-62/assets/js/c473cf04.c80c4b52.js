"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8929],{6069:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>y,frontMatter:()=>n,metadata:()=>u,toc:()=>c});var o=t(7462),p=(t(7294),t(3905)),s=t(5488),i=t(5162),l=t(3068);const n={sidebar_position:7},a="Supporting IE11",u={unversionedId:"guides/browser-support",id:"guides/browser-support",title:"Supporting IE11",description:"We officially support recent versions of Chrome, Firefox, Safari and Edge.",source:"@site/docs/guides/browser-support.mdx",sourceDirName:"guides",slug:"/guides/browser-support",permalink:"/uppy.io/pr-preview/pr-62/docs/guides/browser-support",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/guides/browser-support.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Migrate to 2.0",permalink:"/uppy.io/pr-preview/pr-62/docs/guides/migrate-2.0"},next:{title:"Using custom stores",permalink:"/uppy.io/pr-preview/pr-62/docs/guides/custom-stores"}},d={},c=[{value:"Polyfills",id:"polyfills",level:2},{value:"Legacy CDN bundle",id:"legacy-cdn-bundle",level:2}],m={toc:c};function y(e){let{components:r,...t}=e;return(0,p.kt)("wrapper",(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"supporting-ie11"},"Supporting IE11"),(0,p.kt)("p",null,"We officially support recent versions of Chrome, Firefox, Safari and Edge."),(0,p.kt)("p",null,"Internet Explorer is not officially supported, as in we don\u2019t run tests for it,\nbut you can be mostly confident it works with the right polyfills. But it does\ncome with a risk of unexpected results in styling or functionality."),(0,p.kt)("h2",{id:"polyfills"},"Polyfills"),(0,p.kt)(s.Z,{mdxType:"Tabs"},(0,p.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"npm install core-js whatwg-fetch abortcontroller-polyfill md-gum-polyfill resize-observer-polyfill\n"))),(0,p.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add core-js whatwg-fetch abortcontroller-polyfill md-gum-polyfill resize-observer-polyfill\n")))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"import 'core-js';\nimport 'whatwg-fetch';\nimport 'abortcontroller-polyfill/dist/polyfill-patch-fetch';\n// Order matters: AbortController needs fetch which needs Promise (provided by core-js).\n\nimport 'md-gum-polyfill';\nimport ResizeObserver from 'resize-observer-polyfill';\n\nwindow.ResizeObserver ??= ResizeObserver;\n\nexport { default } from '@uppy/core';\nexport * from '@uppy/core';\n")),(0,p.kt)("h2",{id:"legacy-cdn-bundle"},"Legacy CDN bundle"),(0,p.kt)(l.Z,{uppyJsName:"uppy.legacy.min.js",mdxType:"UppyCdnExample"},"\n    import { Uppy, DragDrop, Tus } from \"{{UPPY_JS_URL}}\"\n    const uppy = new Uppy()\n    uppy.use(DragDrop, { target: '#uppy' })\n    uppy.use(Tus, { endpoint: '//tusd.tusdemo.net/files/' })\n  "))}y.isMDXComponent=!0}}]);