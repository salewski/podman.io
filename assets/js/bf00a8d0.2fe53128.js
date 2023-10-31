"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[5510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Podman and NFS",layout:"default",author:"adrianr",categories:["blogs"],tags:["podman","containers","hpc","nfs"]},i=void 0,l={permalink:"/blogs/2019/10/28/podman-with-nfs",source:"@site/blog/2019-10-28-podman-with-nfs.md",title:"Podman and NFS",description:"podman logo",date:"2019-10-28T00:00:00.000Z",formattedDate:"October 28, 2019",tags:[{label:"podman",permalink:"/blogs/tags/podman"},{label:"containers",permalink:"/blogs/tags/containers"},{label:"hpc",permalink:"/blogs/tags/hpc"},{label:"nfs",permalink:"/blogs/tags/nfs"}],readingTime:2.49,hasTruncateMarker:!0,authors:[{name:"adrianr"}],frontMatter:{title:"Podman and NFS",layout:"default",author:"adrianr",categories:["blogs"],tags:["podman","containers","hpc","nfs"]},prevItem:{title:"Podman and NFS",permalink:"/blogs/2019/10/28/new"},nextItem:{title:"PMM Server + podman&#58; Running a Container Without root Privileges",permalink:"/blogs/2019/10/23/Perona-PMM"}},c={authorsImageUrls:[void 0]},p=[{value:"By Adrian Reber GitHub",id:"by-adrian-reber-github",level:2}],s={toc:p},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"podman-and-nfs"},"Podman and NFS"),(0,a.kt)("h2",{id:"by-adrian-reber-github"},"By Adrian Reber ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/adrianreber"},"GitHub")),(0,a.kt)("p",null,"In my previous ",(0,a.kt)("a",{parentName:"p",href:"https://podman.io/blogs/2019/09/26/podman-in-hpc.html"},"Podman in HPC\nenvironments")," article I\nintroduced how Podman can be used to run containers under the control of Open\nMPI. In this article I want to extend my HPC environment to use a shared NFS\nhome directory."))}m.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);