"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[71878],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(t),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=t(87462),r=(t(67294),t(3905));const o={title:"Podman v0.12.1.1 Released",layout:"default",author:"mheon",categories:["releases"],tags:["community","open source","podman"]},l=void 0,i={permalink:"/release/2018/12/12/podman-alpha-v0.12.1.1",source:"@site/release/2018-12-12-podman-alpha-v0.12.1.1.md",title:"Podman v0.12.1.1 Released",description:"podman logo",date:"2018-12-12T00:00:00.000Z",formattedDate:"December 12, 2018",tags:[{label:"community",permalink:"/release/tags/community"},{label:"open source",permalink:"/release/tags/open-source"},{label:"podman",permalink:"/release/tags/podman"}],readingTime:1.2,hasTruncateMarker:!0,authors:[{name:"mheon"}],frontMatter:{title:"Podman v0.12.1.1 Released",layout:"default",author:"mheon",categories:["releases"],tags:["community","open source","podman"]},prevItem:{title:"Podman v1.0.0 Released",permalink:"/release/2019/01/16/podman-release-v1.0.0"},nextItem:{title:"Podman Alpha version 0.8.3 Release Announcement",permalink:"/release/2018/08/20/podman-alpha-v0.8.3"}},s={authorsImageUrls:[void 0]},m=[{value:"Changes",id:"changes",level:2}],p={toc:m},u="wrapper";function c(e){let{components:n,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:t(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"podman-release-01211"},"Podman Release 0.12.1.1"),(0,r.kt)("p",null,"We're happy to announce the availability of Podman 0.12.1.1, our latest version. We've been very busy over the last month, and it shows! We've merged over 150 new commits since our 0.11 releases, including major new functionality and several critical bugfixes. Pods, Kubernetes compatibility, and container volumes all saw major improvements."),(0,r.kt)("p",null,"We hope everyone enjoys the release, and stays with us in the future as Podman gets closer to 1.0. As always, many thanks to everyone who contributed to this release!"),(0,r.kt)("h2",{id:"changes"},"Changes"),(0,r.kt)("p",null,"This release comes with many exciting new features. To highlight a few of our biggest changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"podman generate kube")," command was added by Brent Baude, which generates Kubernetes pod and service YAML from Podman containers and pods."),(0,r.kt)("li",{parentName:"ul"},"Initial support for named volumes using the ",(0,r.kt)("inlineCode",{parentName:"li"},"podman volume")," set of commands was landed by Urvashi Mohnani"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"podman rm")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"podman rmi")," commands can now prune unused containers and images with the ",(0,r.kt)("inlineCode",{parentName:"li"},"--prune")," flag"),(0,r.kt)("li",{parentName:"ul"},"Ports can now be published to the host from pods")),(0,r.kt)("p",null,"Numerous bugs were fixed as well, including a breaking change in rootless Podman found in 0.11.x releases."),(0,r.kt)("p",null,"To see the full changelog, please visit our release notes on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/blob/main/RELEASE_NOTES.md"},"GitHub")),(0,r.kt)("p",null,"Some of this work, like the ",(0,r.kt)("inlineCode",{parentName:"p"},"podman volume")," command, is still very early. We'd greatly appreciate feedback! If you have an enhancement request or a bug report, please file them on our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/issues"},"issue page"),"."))}c.isMDXComponent=!0},1382:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);