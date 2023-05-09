"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(n),u=o,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,p[1]=i;for(var m=2;m<a;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const a={},p=void 0,i={unversionedId:"commands/podman-port",id:"commands/podman-port",title:"podman-port",description:"% podman-port 1",source:"@site/docs/commands/podman-port.md",sourceDirName:"commands",slug:"/commands/podman-port",permalink:"/docs/commands/podman-port",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-port.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-pod-unpause",permalink:"/docs/commands/podman-pod/podman-pod-unpause"},next:{title:"podman-ps",permalink:"/docs/commands/podman-ps"}},l={},m=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--all</strong>, <strong>-a</strong>",id:"--all--a",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],s={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"% podman-port 1"),(0,o.kt)("h2",{id:"name"},"NAME"),(0,o.kt)("p",null,"podman","-","port - List port mappings for a container"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman port")," ","[",(0,o.kt)("em",{parentName:"p"},"options"),"]"," ",(0,o.kt)("em",{parentName:"p"},"container")," [",(0,o.kt)("em",{parentName:"p"},"private-port"),"[/",(0,o.kt)("em",{parentName:"p"},"proto"),"]","]"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman container port")," ","[",(0,o.kt)("em",{parentName:"p"},"options"),"]"," ",(0,o.kt)("em",{parentName:"p"},"container")," [",(0,o.kt)("em",{parentName:"p"},"private-port"),"[/",(0,o.kt)("em",{parentName:"p"},"proto"),"]","]"),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"List port mappings for the ",(0,o.kt)("em",{parentName:"p"},"container")," or look up the public-facing port that is NAT-ed to the ",(0,o.kt)("em",{parentName:"p"},"private-port"),"."),(0,o.kt)("h2",{id:"options"},"OPTIONS"),(0,o.kt)("h4",{id:"--all--a"},(0,o.kt)("strong",{parentName:"h4"},"--all"),", ",(0,o.kt)("strong",{parentName:"h4"},"-a")),(0,o.kt)("p",null,"List all known port mappings for running containers; when using this option, container names or private ports/protocols filters cannot be used."),(0,o.kt)("p",null,"@@option latest"),(0,o.kt)("h2",{id:"example"},"EXAMPLE"),(0,o.kt)("p",null,"List all port mappings"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# podman port -a\nb4d2f05432e482e017b1a4b2eae15fa7b4f6fb7e9f65c1bde46294fdef285906\n80/udp -> 0.0.0.0:44327\n80/tcp -> 0.0.0.0:44327\n#\n")),(0,o.kt)("p",null,"List port mappings for a specific container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# podman port b4d2f054\n80/udp -> 0.0.0.0:44327\n80/tcp -> 0.0.0.0:44327\n#\n")),(0,o.kt)("p",null,"List the port mappings for the latest container and port 80"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# podman port b4d2f054 80\n 0.0.0.0:44327\n#\n")),(0,o.kt)("p",null,"List the port mappings for a specific container for port 80 and the tcp protocol."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# podman port b4d2f054 80/tcp\n0.0.0.0:44327\n#\n")),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/podman"},"podman(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/commands/podman-inspect"},"podman-inspect(1)"))),(0,o.kt)("h2",{id:"history"},"HISTORY"),(0,o.kt)("p",null,"January 2018, Originally compiled by Brent Baude ",(0,o.kt)("a",{parentName:"p",href:"mailto:bbaude@redhat.com"},"bbaude@redhat.com")))}d.isMDXComponent=!0}}]);