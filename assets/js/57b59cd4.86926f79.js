"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[849],{1320:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),n=a(2074),s=a(8201);const o=e=>{let{grid:t,display:a,layout:n,title:o,description:r}=e;return l.createElement("div",{className:`${t} ${a} ${n}`},l.createElement("h1",{className:"mb-6 max-w-sm text-purple-700 dark:text-purple-500 lg:max-w-lg "},o),l.createElement(s.Z,{text:r,styles:"leading-relaxed"}))},r=e=>{let{grid:t,display:a,layout:n,image:s={path:"images/raw/podman-2-196w-172h.png",alt:"Podman Logo"}}=e;return l.createElement("div",null,l.createElement("img",{src:s.path,alt:s.alt,className:`${t} ${a} ${n}`}))};const i=function(e){let{title:t,description:a,image:s,lightColor:i="white",darkColor:m="gray-900"}=e;return l.createElement("header",{className:`h-5/6  xl:h-96 bg-${i} dark:bg-${m}`},l.createElement("div",{className:"bg-gradient-to-r from-blue-500 to-blue-700 pt-2 dark:from-purple-700 dark:to-blue-900 lg:pt-8"},l.createElement(n.Z,null)),l.createElement("div",{className:"container grid justify-items-center gap-3 md:grid-cols-2"},l.createElement(o,{title:t,description:a,layout:"mt-12 lg:mt-0"}),l.createElement(r,{image:s,layout:"mb-8 lg:mb-0"})))}},3198:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(8201);const s=function(e){let{title:t,description:a,textGradientStops:s="from-blue-700 via-blue-700 to-blue-900 dark:from-blue-500  dark:to-blue-700",textGradient:o=!1,textColor:r="text-gray-900",fontWeight:i,layout:m,bgColor:c}=e;const d=o?`bg-gradient-radial bg-clip-text text-transparent dark:bg-gradient-radial dark:text-transparent ${s}`:`${r}`;return l.createElement("header",{className:`${c}  ${m}`},l.createElement("div",{className:"container mx-auto mb-4 mt-12 text-center  lg:mt-16"},l.createElement("h2",{className:`${d} ${i}`},t),l.createElement(n.Z,{text:a,styles:"mx-auto my-4 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-100"})))}},2074:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294);const n=function(e){let{light:t="fill-white",dark:a="dark:fill-gray-900",width:n="100",height:s="130",grid:o,layout:r}=e;return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${o} ${r}`,width:`${n}%`,viewBox:`-8620 -1968 1400 ${s}`},l.createElement("path",{className:`${t} ${a}`,d:"M-8629-1935v-10.614s78.25-20.752 155.47-20.752c131.788 0 169.95 23.309 233.125 23.309 108.108 0 138.56-21.268 208.573-21.268s108.701 25.151 233.283 25.151c124.581 0 120.881-43.085 251.082-22.031 112.227 18.148 187.023 22.031 264.45 7.825 76.957-14.12 79.117 14.113 79.014 18.38l.003 258h-1425v-258Z"}))}},7528:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(1954),s=a(8201);const o=function(e){let{title:t,description:a,image:o,styles:r,icon:i,bgColor:m="from-blue-700 via-blue-700 to-blue-900 dark:from-blue-500  dark:to-blue-700",titleColor:c="text-purple-700 dark:text-purple-500",marginHeight:d="mt-8 lg:mt-16"}=e;return l.createElement("section",{className:`${r} ${m} ${d} mx-auto w-full`},l.createElement("div",{className:"mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-4 py-4 md:py-8 lg:gap-8 xl:max-w-fit"},l.createElement("div",null,i?l.createElement(n.JO,{icon:i,className:"text-4xl text-white dark:text-gray-50"}):o?l.createElement("img",{src:o.src,alt:o.alt}):l.createElement("p",null,"No image or icon")),t?l.createElement("div",{className:"mx-auto text-center md:text-start lg:pl-4"},l.createElement("h3",{className:`mx-auto mb-4 text-3xl font-bold ${c}`},t),l.createElement(s.Z,{text:a,styles:"mx-auto max-w-4xl leading-relaxed text-gray-700"})):l.createElement(s.Z,{text:a,styles:"mx-auto leading-relaxed"})))}},4307:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(1954);const s=function(e){let{as:t="link",outline:a,colors:s,icon:o,text:r,method:i,path:m}=e;const c="h-fit my-2 block max-w-fit cursor-pointer rounded-md px-6 py-2 font-semibold transition duration-150 ease-in-out hover:no-underline hover:shadow-md",d=a?` dark:bg-white text-purple-700 dark:text-purple-900 hover:dark:bg-purple-900 hover:dark:text-white ${s}`:`bg-purple-700 dark:bg-purple-900 text-white dark:text-gray-50 hover:bg-purple-900 hover:dark:bg-purple-700 hover:text-white ${s}`;return"button"===t?l.createElement("button",{onClick:i,className:`${c} ${d}`},o?l.createElement("span",{className:"flex items-center gap-2"},r," ",l.createElement(n.JO,{icon:o})):l.createElement("span",null,r)):l.createElement("a",{href:m,className:`${c} ${d}`},o?l.createElement("span",{className:"flex items-center gap-2"},r," ",l.createElement(n.JO,{icon:o})):l.createElement("span",null,r))}},4544:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(1954);const s=function(e){const t=(0,l.useRef)(),[a,s]=(0,l.useState)(!1);var o,r;return o=t,r=()=>s(!1),(0,l.useEffect)((()=>{const e=e=>{o.current&&!o.current.contains(e.target)&&r(e)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[o,r]),l.createElement("div",{ref:t},l.createElement("button",{"data-dropdown-toggle":"dropdown",onClick:()=>s((e=>!e)),className:"my-2 flex items-center gap-2 rounded-md bg-white px-4 py-2 font-bold text-purple-700 transition duration-150 ease-linear hover:bg-purple-700 hover:text-white focus:shadow-md dark:text-purple-900 dark:hover:text-white"},l.createElement("span",null,e.text),l.createElement(n.JO,{icon:"ion:caret-down-outline"})),a&&l.createElement("div",{className:"absolute mt-2 max-w-fit rounded-md bg-white shadow-md dark:bg-gray-900"},e.option))}},8201:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),n=a(1262),s=a(9998);const o=(0,l.lazy)((()=>a.e(851).then(a.bind(a,1851))));const r=function(e){let{text:t,styles:a}=e;return l.createElement(n.Z,null,(()=>l.createElement(l.Suspense,{fallback:l.createElement("p",null,"text loading...")},l.createElement(o,{children:t,className:a,rehypePlugins:[s.Z]}))))}},673:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var l=a(7462),n=a(7294),s=a(7961),o=a(1954),r=a(8201),i=a(1320),m=a(3198);const c=[{label:"Red Hat",href:"https://www.redhat.com/",src:"logos/raw/red-hat-120w-77h.png",alt:"Red Hat Logo"},{label:"Debian",href:"https://www.debian.org/",src:"logos/raw/debian-68w-90h.png",alt:"Debian Logo"},{label:"Amadeus",href:"https://www.amadeus.com/",src:"logos/raw/amadeus-171w-22h.png",alt:"Amadeus Logo"},{label:"Suse",href:"https://www.suse.com",src:"logos/raw/suse-167w-30h.png",alt:"Suse Logo"},{label:"NTT",href:"https://www.global.ntt",src:"logos/raw/ntt-145w-50h.png",alt:"NTT Logo"},{label:"IBM",href:"https://www.ibm.com",src:"logos/raw/ibm-92w-37h.png",alt:"IBM Logo"}];const d=function(){const[e,t,...a]=c;return n.createElement("section",{className:"my-8 lg:my-12"},n.createElement("header",{className:"container my-4 text-center lg:my-8"},n.createElement("h2",{className:"mb-3 text-blue-700 dark:text-purple-500"},"Special thanks to our contributors"),n.createElement("p",{className:"text-gray-900"},"The Podman community has contributors from many different organizations, including:")),n.createElement("div",{className:"relative mx-auto my-8 flex items-center"},n.createElement("button",{onClick:()=>{const e=document.getElementById("slider");e.scrollLeft=e.scrollLeft-500},className:"lg:hidden"},n.createElement(o.JO,{icon:"fa-solid:arrow-circle-left",className:"text-4xl text-gray-500 opacity-25 transition duration-150 ease-linear hover:text-purple-900 hover:opacity-100 dark:hover:text-purple-700"})),n.createElement("div",{id:"slider",className:"mx-auto h-full w-full grid-flow-col place-items-center gap-6 overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar scrollbar-track-purple-500 lg:container lg:grid lg:grid-rows-2"},n.createElement("a",{href:e.href,target:"_blank",className:"mx-4 mb-4 inline-block rounded-md p-4  dark:bg-gray-100 lg:row-span-2 lg:row-start-1 lg:mb-0"},n.createElement("img",(0,l.Z)({},e,{className:"mx-auto h-20 p-4 lg:h-32"}))),a.map(((e,t)=>n.createElement("a",{href:e.href,key:t,target:"_blank",className:"mx-4 mb-4 inline-block rounded-md p-4  dark:bg-gray-100 lg:mb-0"},n.createElement("img",(0,l.Z)({},e,{className:"mx-auto h-20 max-w-xs p-4 lg:h-32"}))))),n.createElement("a",{href:t.href,target:"_blank",className:"mx-4 mb-4 inline-block rounded-md p-4  dark:bg-gray-100  lg:row-span-2 lg:row-start-1 lg:mb-0"},n.createElement("img",(0,l.Z)({},t,{className:"mx-auto h-20 p-4 lg:h-32"})))),n.createElement("button",{onClick:()=>{const e=document.getElementById("slider");e.scrollLeft=e.scrollLeft+500},className:"lg:hidden"},n.createElement(o.JO,{icon:"fa-solid:arrow-circle-right",className:"dark:hover-text-purple-700 text-4xl text-gray-500 opacity-25 transition duration-150 ease-linear hover:text-purple-900 hover:opacity-100"}))))};var u=a(4307);function p(e){const{title:t,subtitle:a,details:l}=e;return n.createElement("div",{className:"mx-2 mt-4"},n.createElement("h3",{className:"mb-3 font-bold text-gray-700 dark:text-gray-50"},t),n.createElement(r.Z,{text:a,styles:"text-gray-700"}),n.createElement(r.Z,{text:l,styles:"text-gray-700"}))}function h(e){const{text:t}=e;return n.createElement("div",{className:"mx-2 my-6 lg:my-8"},n.createElement("p",{className:"max-w-sm text-gray-700 dark:text-gray-100"},t))}function g(e){let{data:t=[{text:"button text"}]}=e;return n.createElement("div",{className:" mx-2 mb-4 flex justify-center gap-2 lg:mb-8"},t.map(((e,t)=>n.createElement("div",{key:t},0==t?n.createElement(u.Z,(0,l.Z)({as:"link"},e)):n.createElement(u.Z,(0,l.Z)({as:"link",outline:!0},e))))))}const x=function(e){return n.createElement("article",{className:"m-4 flex flex-col justify-between rounded-lg bg-gray-50 p-4 shadow-xl dark:bg-gray-700 dark:shadow-none lg:m-2"},n.createElement(p,e),n.createElement(h,e),n.createElement(g,e))};const b=function(e){let{cards:t}=e;return n.createElement("div",{className:"mb-8 flex flex-wrap justify-center gap-4 lg:mb-12 lg:gap-8"},t.map(((e,t)=>n.createElement(x,{key:t,title:e.title,subtitle:e.date,details:e.timeZone,text:e.subtitle,data:e.buttons}))))};const f=function(e){const{title:t,subtitle:a,button:s}=e;return n.createElement("article",{className:" my-4 flex max-w-xs flex-col justify-between"},n.createElement("h4",{className:"text-gray-700"},t),n.createElement(r.Z,{text:a,styles:"mb-4 mt-2 w-[198px] md:w-64"}),n.createElement(u.Z,(0,l.Z)({outline:!0,as:"link"},s)))};const w=function(){const e=new Date,t=[e.toLocaleString("en-US",{timeZone:"Europe/Paris",hour:"numeric",minute:"numeric",hour12:!1}),Intl.DateTimeFormat("en-US",{timeZone:"Europe/Paris",timeZoneName:"long"}).format().split(",")[1]],a=[e.toLocaleString("en-US",{timeZone:"America/New_York",hour:"numeric",minute:"numeric",hour12:!1}),Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",timeZoneName:"long"}).format().split(",")[1]];return n.createElement("article",{className:"mb-10 max-w-lg rounded-lg bg-aqua shadow-md dark:bg-purple-900"},n.createElement("div",{className:"m-4 grid grid-cols-2 gap-x-4 lg:m-8"},n.createElement("div",{className:"col-span-full mb-5 text-center"},n.createElement("h3",{className:"font-bold text-gray-300 dark:text-gray-100"},"Current Time")),n.createElement("div",{className:"text-center"},n.createElement("h4",{className:"mb-2 text-3xl font-extrabold text-purple-500 dark:text-gray-100"},t[0]),n.createElement("p",{className:"w-40 font-bold text-blue-900"},t[1])),n.createElement("div",{className:"text-center"},n.createElement("h4",{className:"mb-2 text-3xl font-extrabold text-purple-500 dark:text-gray-100"},a[0]),n.createElement("p",{className:"w-40 font-bold text-blue-900"},a[1]))))};const E=function(e){let{title:t,text:a,darkBg:l="dark:bg-purple-900"}=e;return n.createElement("aside",{className:`rounded-lg bg-aqua ${l} max-w-lg px-6 py-8 text-gray-700 shadow-xl dark:shadow-md dark:shadow-gray-900`},n.createElement("h4",{className:"mx-auto mb-2 max-w-md font-bold dark:text-gray-50"},t),n.createElement("p",{className:"mx-auto max-w-md dark:text-gray-100"},a))};var y=a(7528);const k=function(e){let{text:t,path:a,icon:l,image:s,textLogo:r}=e;return n.createElement("a",{href:a,className:"mx-auto flex flex-col items-center text-center"},n.createElement("div",{className:"max-w-fit rounded-full bg-white p-8 shadow-sm  dark:bg-gray-900"},l?n.createElement(o.JO,{icon:l,className:"text-5xl"}):r?n.createElement("span",{className:"block py-2 font-display text-4xl font-extrabold"},r):n.createElement("img",{src:s.path,alt:s.alt,className:"w-16"})),n.createElement("span",{className:"underline-offset-6 duration-149 mt-4 block text-blue-700 underline transition ease-linear hover:text-blue-900"},t))};var N=a(4544),v=a(2074);const Z="Community",C="We want your feedback, issues, patches, and involvement in the development of Podman. **Chat** with us on Slack, IRC, or on our **mailing list**. Submit **issues & pull requests** (see our [CONTRIBUTING guide]() on how.) Participate in one of our twice-monthly community meetings. You are welcome in our community!",P={text:"To help ensure all feel welcome in the Podman community, we expect all who participate to adhere to our [Code of Conduct](https://github.com/containers/common/blob/main/CODE-OF-CONDUCT.md)",icon:"fa6-regular:handshake"},I={title:"Chat with the Podman community",subtitle:"The Podman developers are generally around during CEST and Eastern Time business hours, so please be patient if you\u2019re in another time zone!",links:[{text:"#podman:matrix.org",path:"https://www.redhat.com/architect/hpc-containers-scale-using-podman",image:{path:"logos/raw/element-56w-59h.png",alt:"Element Matrix Logo"}},{text:"#podman on libera.chat",path:"https://web.libera.chat/#podman-desktop",textLogo:"IRC"},{text:"Podman Discord",path:"https://discord.gg/vwpj7K6gW5",icon:"logos:discord-icon"},{text:"Slack",path:"https://slack.k8s.io/",icon:"logos:slack-icon"}]},S={title:"Podman Community Meetings",subtitle:"Many of the maintainers for the Podman project attend both of these meetings, so it's a great chance for community members like you to ask them questions or address concerns directly. If you have a topic that you\u2019d like to propose for either meeting, please send a note to the [Mailing List]().",image:{path:"images/optimized/community-call-554w-219h.webp",alt:"An image of podman team members in a virtual meeting"},cards:[{title:"Podman Community Meeting",subtitle:"This meeting is used to show demos for or to have general discussions about Podman or other related container technologies. It is also used to make announcements about Podman and the other projects in the [Containers repository on GitHub](https://github.com/containers).",date:"**1st Tuesday** every month",timeZone:"11 AM US ET /5 PM CET",buttons:[{text:"Join Meeting",path:"#"},{text:"Meeting Agenda",path:"#"}]},{title:"Podman Community Cabal",subtitle:"The focus of the cabal meeting is the planning and discussion of possible future changes to Podman or the [related Containers projects](https://github.com/containers) and discussing any outstanding issues that might need solving.",date:"**3rd Thursday** every month",timeZone:"11 AM US ET /5 PM CET",buttons:[{text:"Join Meeting",path:"#"},{text:"Meeting Agenda",path:"#"}]}]},T={title:"Mailing List",subtitle:"The Podman Mailing list is available for your questions, concerns or comments about Podman.",browseInfo:{title:"Browse the mailing list",subtitle:"Simply visit [the Podman mailing list website](https://lists.podman.io/archives/list/podman@lists.podman.io/) to browse or search previous postings to the Podman mailing list."},subscribeInfo:{title:"Subscribe or post to the mailing list",subtitle:"Simply visit [the Podman mailing list website](#) to browse or search previous postings to the Podman mailing list.",description:"Regardless of which method you use, a confirmation email will be sent to you. After you reply back to that confirmation email, you'll then be able to send mail directly to [podman@lists.podman.io](). You can then also go to [the list's web page]() and manage your subscription.",options:[{title:"Option 1",subtitle:'Send an email to [podman-join@lists.podman.io](mailto:podman-join@lists.podman.io) with the word "Subscribe" in the subject.',button:{text:"Send email",path:"mailto:podman-join@lists.podman.io"}},{title:"Option 2",subtitle:'Enter your email at the bottom of [the mailing list sign up page](https://lists.podman.io/admin/lists/podman.lists.podman.io/), and hit the "Subscribe" button.',button:{text:"Sign up page",path:"https://lists.podman.io/admin/lists/podman.lists.podman.io/"}}]},extraInfo:{image:{path:"images/optimized/mailing-list-screenshot-580w-376h.webp",alt:"A screenshot of the Podman mailing list home screen."},note:{title:"Please note:",text:"If you have a bug that you\u2019d like to report, it\u2019s best to report it here by creating a \u201cNew issue\u201d rather than sending an email to the list."}}},$=[{title:"Submitting Issues & Pull Requests",subtitle:"The following is a quick cheat-sheet of sorts on how to submit issues and pull requests to the Podman project. For the most up-to-date and more comprehensive information, please take a look at  [CONTRIBUTING.md](https://github.com/containers/common/blob/main/CONTRIBUTING.md) in the Podman repo."},{title:"Submitting Issues",subtitle:"Don't include private / sensitive info in issues!",sections:[{text:"**Before reporting an issue**, [check our backlog of open issues](#) to see if someone else has already reported it. If so:",checkList:["Feel free to add your scenario, or additional information, to the discussion.","Subscribe to the issue to be notified when it is updated."],button:{text:"Check Open Issues",links:[{text:"Check open Podman issues",path:"https://github.com/containers/podman/issues"},{text:"Check open Podman Desktop issues",path:"https://github.com/containers/podman-desktop/issues"},{text:"Check open Buildah issues",path:"https://github.com/containers/buildah/issues"},{text:"Check open Skopeo issues",path:"https://github.com/containers/skopeo/issues"},{text:"Check open Cri-o issues",path:"#"}]}},{text:"**If you find a new issue**, we'd love to hear about it! The most important aspect of a bug report is that it includes enough information for us to reproduce it. So, please:",checkList:["Include as much detail as possible","Try to remove any extra stuff that doesn't really relate to the issue itself"],button:{text:"File a New Issue",links:[{text:"File a new Podman issue",path:"https://github.com/containers/podman/issues/new/choose"},{text:"File a new Podman Desktop issue",path:"https://github.com/containers/podman-desktop/issues/new/choose"},{text:"File a new Buildah issue",path:"https://github.com/containers/buildah/issues/new/choose"},{text:"File a new Skopeo issue",path:"https://github.com/containers/skopeo/issues/new/choose"},{text:"File a new Cri-o issue",path:"#"}]}}]},{title:"Submitting Pull Requets",subtitle:"No Pull Request (PR) is too small! Typos, additional comments in the code, new test cases, bug fixes, new features, more documentation, **...it's all welcome!** ",description:['While bug fixes can first be identified via an "issue", that is not required. It\'s ok to just open up a PR with the fix, but make sure you include the same information you would have included in an issue - like how to reproduce it.',"PRs for new features should include some background on what use cases the new code is trying to address. When possible and when it makes sense, try to break-up larger PRs into smaller ones - it's easier to review smaller code changes. But only if those smaller ones make sense as stand-alone PRs. Regardless of the type of PR, all PRs should include:"],checkList:["Well-documented code changes.","Additional testcases. Ideally m they should fail w/o your code change applied.","Documentation changes."],button:{text:"More PR Submission Details",path:"#"}}],L=()=>{const e=I.links.map((e=>e));return n.createElement("ul",{className:"mb-12 flex flex-wrap items-end justify-around gap-8 lg:gap-16"},e.map(((e,t)=>n.createElement("li",{key:t},n.createElement(k,e)))))},j=()=>n.createElement("section",{className:"bg-gray-50 dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-gray-900 "},n.createElement(m.Z,{title:I.title}),n.createElement("div",{className:"mx-4 mt-8 flex flex-wrap justify-around gap-4 sm:mx-8 lg:mx-auto lg:mt-16 lg:max-w-6xl"},n.createElement("div",{className:""},n.createElement("p",{className:"max-w-sm text-center text-gray-700 md:max-w-md md:text-start lg:max-w-xl"},I.subtitle)),n.createElement(w,null)),n.createElement("div",{className:"container pt-12 lg:pt-20"},n.createElement(L,null)),n.createElement(v.Z,null)),R=()=>n.createElement("section",{className:"bg-gradient-to-b from-white via-gray-50 to-gray-100 pb-8 dark:from-gray-900 dark:to-gray-900"},n.createElement("div",{className:"container flex flex-col"},n.createElement(m.Z,{title:S.title,description:S.subtitle,textColor:"from-purple-500 to-purple-700 dark:text-purple-500"}),n.createElement("img",{src:S.image.path,alt:S.image.alt,className:"order-first mx-auto object-cover lg:max-w-lg"}),n.createElement(b,{cards:S.cards}))),M=()=>n.createElement("section",null,n.createElement("div",{className:"container grid gap-4 lg:grid-cols-2"},n.createElement(m.Z,{title:T.title,description:T.subtitle,layout:"col-span-full",textColor:"dark:text-blue-700"}),n.createElement("section",{className:"container mb-8"},n.createElement("h3",{className:"mb-2 font-medium text-purple-700 dark:text-purple-500"},T.browseInfo.title),n.createElement("p",{className:"max-w-prose text-gray-500"},T.browseInfo.subtitle)),n.createElement("section",{className:"container mb-8"},n.createElement("h3",{className:"mb-2 font-medium text-purple-700 dark:text-purple-500"},T.subscribeInfo.title),n.createElement(r.Z,{text:T.subscribeInfo.subtitle,styles:"max-w-prose "}),n.createElement("div",{className:"flex flex-wrap gap-6"},T.subscribeInfo.options.map(((e,t)=>n.createElement(f,(0,l.Z)({},e,{key:t}))))),n.createElement("div",{className:"my-4 max-w-prose"},n.createElement(r.Z,{text:T.subscribeInfo.description}))),n.createElement("section",{className:"mb-8 lg:col-start-2 lg:row-span-2 lg:row-start-2"},n.createElement("div",null,n.createElement("img",{src:T.extraInfo.image.path,alt:T.extraInfo.image.alt,className:"w-full  object-cover"})),n.createElement("div",{className:"ml-8 xl:ml-10"},n.createElement(E,{title:T.extraInfo.note.title,text:T.extraInfo.note.text}))))),O=()=>n.createElement("section",{className:"max-w-lg rounded-md bg-white px-10 pt-10 shadow-lg dark:bg-gray-900"},n.createElement("header",{className:"mb-10"},n.createElement("h3",{className:"mb-4 text-center text-blue-700 dark:text-blue-500"},$[1].title),n.createElement("div",{className:"bg-blue-100/25 px-3 py-2"},n.createElement("p",{className:"flex items-center gap-2 rounded-md"},n.createElement(o.JO,{icon:"fa-solid:exclamation-circle",className:"text-purple-700"}),n.createElement("span",null,$[1].subtitle)))),n.createElement("div",null,$[1].sections.map(((e,t)=>{return n.createElement("div",{key:t,className:"mb-12"},n.createElement(r.Z,{text:e.text}),n.createElement("ul",{className:"mb-8 ml-5 mt-4 list-disc"},e.checkList.map(((e,t)=>n.createElement("li",{key:t},e)))),n.createElement(N.Z,{text:e.button.text,option:(a=e.button.links,n.createElement("div",{className:"rounded-md p-4 shadow-md"},n.createElement("ul",null,a.map(((e,t)=>n.createElement("li",{className:"my-2 rounded-md px-2 transition duration-150 ease-linear hover:bg-purple-700 hover:text-white"},n.createElement("a",{href:e.path,className:" w-full hover:text-white hover:no-underline"},e.text)))))))}));var a})))),B=()=>n.createElement("section",{className:"max-w-lg rounded-md bg-white p-10 shadow-lg dark:bg-gray-900"},n.createElement("header",{className:"mx-auto mb-10"},n.createElement("h3",{className:"mb-3 text-center text-blue-700 dark:text-blue-500"},$[2].title),n.createElement(r.Z,{text:$[2].subtitle})),n.createElement("div",null,$[2].description.map(((e,t)=>n.createElement("p",{key:t,className:"my-3"},e))),n.createElement("ul",{className:"my-4 ml-5 list-disc"},$[2].checkList.map(((e,t)=>n.createElement("li",{key:t},e)))),n.createElement(u.Z,{as:"link",outline:!0,text:$[2].button.text}))),D=()=>n.createElement("section",{className:"bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"},n.createElement(m.Z,{title:$[0].title,description:$[0].subtitle,textGradientStops:"from-purple-500 to-purple-700 dark:text-blue-700",textGradient:!0}),n.createElement("div",{className:"mx-auto mb-20 mt-16 flex flex-wrap justify-center gap-20 px-8 lg:container"},n.createElement(O,null),n.createElement(B,null)));const A=function(){return n.createElement(s.Z,null,n.createElement(i.Z,{title:Z,description:C}),n.createElement(y.Z,{description:P.text,icon:P.icon,styles:"bg-purple-500 dark:bg-purple-700 text-white"}),n.createElement(j,null),n.createElement(R,null),n.createElement(M,null),n.createElement(D,null),n.createElement(d,null))}}}]);