"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3699],{5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(6010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(7462),n=r(7294),s=r(6010),i=r(2389),l=r(7392),o=r(7094),u=r(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:t,block:r,defaultValue:i,values:c,groupId:m,className:h}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=c??k.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),f=(0,l.l)(y,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,o.U)(),[x,w]=(0,n.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=g[m];null!=e&&e!==x&&y.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,r=N.indexOf(t),a=y[r].value;a!==x&&(T(t),w(a),null!=m&&v(m,String(a)))},Z=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const r=N.indexOf(e.currentTarget)+1;t=N[r]??N[0];break}case"ArrowLeft":{const r=N.indexOf(e.currentTarget)-1;t=N[r]??N[N.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},h)},y.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:Z,onClick:E},i,{className:(0,s.Z)("tabs__item",d,i?.className,{"tabs__item--active":x===t})}),r??t)}))),t?(0,n.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return n.createElement(c,(0,a.Z)({key:String(t)},e))}},3068:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(814),s=r(3612);const i=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:l}=i;function o(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:i="uppy.min.js"}=e,o=[];a.Children.toArray(t).forEach((e=>{o=[...o,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=o.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${l}/${i}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(s.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(n.Z,{language:"html"},d))}},7129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>m,toc:()=>k});var a=r(7462),n=r(7294),s=r(3905),i=r(5488),l=r(5162),o=r(814);function u(){return n.createElement(n.Fragment,null,n.createElement(o.Z,{language:"js",title:"index.js"},"\nimport Uppy from '@uppy/core'\nimport Dashboard from '@uppy/dashboard'\nimport Tus from '@uppy/tus'\n\nconst uppy = new Uppy()\n  .use(Dashboard, { target: '#uppy', inline: true })\n  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })\n  .on('complete', (result) => {\n    console.log('Upload result:', result)\n  })\n"),n.createElement(o.Z,{language:"html",title:"index.html"},'\n<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8"/>\n    <title>dashboard example</title>\n    <script defer type="module" src="index.js"><\/script>\n  </head>\n  <body>\n    <div id="uppy"></div>\n  </body>\n</html>\n</code>\n'))}var p=r(3068);const d={sidebar_position:1},c="Quick start",m={unversionedId:"quick-start",id:"quick-start",title:"Quick start",description:"Uppy is an uploader and (optionally) an user interface, tied together by the core library,",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/uppy.io/pr-preview/pr-61/docs/quick-start",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/quick-start.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Choosing the uploader you need",permalink:"/uppy.io/pr-preview/pr-61/docs/guides/choosing-uploader"}},h={},k=[{value:"Next steps",id:"next-steps",level:2}],y={toc:k};function f(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"quick-start"},"Quick start"),(0,s.kt)("p",null,"Uppy is an uploader and (optionally) an user interface, tied together by the ",(0,s.kt)("a",{parentName:"p",href:"/docs/uppy-core"},"core library"),",\nwith lots of plugins to gradually add more functionality."),(0,s.kt)("p",null,"In this quick start we will build a small yet powerful example with ",(0,s.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"@uppy/dashboard")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/uploaders/tus"},"@uppy/tus"),"."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can take Uppy for a walk with the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"#"},"Stackblitz"))," or ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"#"},"CodeSandbox"))," examples.\nBoth examples can also be cloned with Git for a kickstart locally.")),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/core @uppy/dashboard @uppy/tus\n")),(0,s.kt)(u,{mdxType:"QuickStartBoilerPlate"})),(0,s.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/core @uppy/dashboard @uppy/tus\n")),(0,s.kt)(u,{mdxType:"QuickStartBoilerPlate"})),(0,s.kt)(l.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, DragDrop, Tus } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(DragDrop, { target: '#uppy' })\n        uppy.use(Tus, { endpoint: '//tusd.tusdemo.net/files/' })\n      "))),(0,s.kt)("h2",{id:"next-steps"},"Next steps"),(0,s.kt)("p",null,"That\u2019s it! You tried Uppy for the first time.\nThis was a taste of what Uppy can do, its power comes from modularity and versatility."),(0,s.kt)("p",null,"Here are some interesting things:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/guides/choosing-uploader"},"Choosing the uploader you need"),"."),(0,s.kt)("li",{parentName:"ul"},"With ",(0,s.kt)("a",{parentName:"li",href:"/docs/companion"},"Companion")," your users will be able to select files from remote sources, such as Instagram,\nGoogle Drive and Dropbox. It bypasses the client (so a 5 GB video isn\u2019t eating into your users\u2019 data plans)\nand uploads to your preferred final destination."),(0,s.kt)("li",{parentName:"ul"},"Recover files from accidental refreshes or closed tabs with ",(0,s.kt)("a",{parentName:"li",href:"/docs/golden-retriever"},"Golden Retriever"),"."),(0,s.kt)("li",{parentName:"ul"},"Add ",(0,s.kt)("a",{parentName:"li",href:"/docs/user-interfaces/elements/image-editor"},"image editing")," to ",(0,s.kt)("a",{parentName:"li",href:"/docs/user-interfaces/dashboard"},"Dashboard"),".")))}f.isMDXComponent=!0}}]);