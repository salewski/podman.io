"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[5809],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var m=n.createContext({}),l=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=l(t.components);return n.createElement(m.Provider,{value:e},t.children)},i="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,m=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),i=l(a),u=o,k=i["".concat(m,".").concat(u)]||i[u]||c[u]||r;return a?n.createElement(k,p(p({ref:e},s),{},{components:a})):n.createElement(k,p({ref:e},s))}));function k(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,p=new Array(r);p[0]=u;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d[i]="string"==typeof t?t:o,p[1]=d;for(var l=2;l<r;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8093:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={},p=void 0,d={unversionedId:"commands/podman-pod/podman-pod",id:"commands/podman-pod/podman-pod",title:"podman-pod",description:"% podman-pod 1",source:"@site/docs/commands/podman-pod/podman-pod.md",sourceDirName:"commands/podman-pod",slug:"/commands/podman-pod/",permalink:"/docs/commands/podman-pod/",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-pod/podman-pod.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-pause",permalink:"/docs/commands/podman-pause"},next:{title:"podman-pod-clone",permalink:"/docs/commands/podman-pod/podman-pod-clone"}},m={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"SUBCOMMANDS",id:"subcommands",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],s={toc:l},i="wrapper";function c(t){let{components:e,...a}=t;return(0,o.kt)(i,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"% podman-pod 1"),(0,o.kt)("h2",{id:"name"},"NAME"),(0,o.kt)("p",null,"podman","-","pod - Management tool for groups of containers, called pods"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman pod")," ",(0,o.kt)("em",{parentName:"p"},"subcommand")),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"podman pod is a set of subcommands that manage pods, or groups of containers."),(0,o.kt)("h2",{id:"subcommands"},"SUBCOMMANDS"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command"),(0,o.kt)("th",{parentName:"tr",align:null},"Man Page"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"clone"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-clone"},"podman-pod-clone(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Creates a copy of an existing pod.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"create"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-create"},"podman-pod-create(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Create a new pod.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"exists"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-exists"},"podman-pod-exists(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Check if a pod exists in local storage.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"inspect"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-inspect"},"podman-pod-inspect(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Displays information describing a pod.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kill"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-kill"},"podman-pod-kill(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Kill the main process of each container in one or more pods.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"logs"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-logs"},"podman-pod-logs(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Displays logs for pod with one or more containers.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pause"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-pause"},"podman-pod-pause(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Pause one or more pods.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"prune"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-prune"},"podman-pod-prune(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Remove all stopped pods and their containers.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ps"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-ps"},"podman-pod-ps(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Prints out information about pods.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"restart"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-restart"},"podman-pod-restart(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Restart one or more pods.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rm"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-rm"},"podman-pod-rm(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Remove one or more stopped pods and containers.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"start"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-start"},"podman-pod-start(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Start one or more pods.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"stats"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-stats"},"podman-pod-stats(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Display a live stream of resource usage stats for containers in one or more pods.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"stop"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-stop"},"podman-pod-stop(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Stop one or more pods.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"top"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-top"},"podman-pod-top(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Display the running processes of containers in a pod.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"unpause"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/commands/podman-pod/podman-pod-unpause"},"podman-pod-unpause(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Unpause one or more pods.")))),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/podman"},"podman(1)"))),(0,o.kt)("h2",{id:"history"},"HISTORY"),(0,o.kt)("p",null,"July 2018, Originally compiled by Peter Hunt ",(0,o.kt)("a",{parentName:"p",href:"mailto:pehunt@redhat.com"},"pehunt@redhat.com")))}c.isMDXComponent=!0}}]);