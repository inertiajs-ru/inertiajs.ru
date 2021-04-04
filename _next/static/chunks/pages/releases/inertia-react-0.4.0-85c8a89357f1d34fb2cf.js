_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[116],{"0tDc":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/releases/inertia-react-0.4.0",function(){return n("dMkF")}])},dMkF:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n("wx14"),i=n("Ff2n"),o=n("q1tI"),r=n.n(o),b=n("7ljp"),c=n("5Yp1"),l=(n("qKvR"),r.a.createElement,{title:"inertia-react@v0.4.0"}),s={meta:l},p=c.b;function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(b.b)(p,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",null,"inertia-react@v0.4.0"),Object(b.b)("div",{className:"-mt-8 mb-12 text-base font-medium text-gray-600"},"Published on October 20, 2020"),Object(b.b)("h2",null,"Changes"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Add Inertia link ",Object(b.b)("inlineCode",{parentName:"li"},"as")," option to render the component as a different element (",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/inertiajs/inertia/pull/271"}),"#271"),")."),Object(b.b)("li",{parentName:"ul"},"Update Inertia link ",Object(b.b)("inlineCode",{parentName:"li"},"preserveState")," default to be based on the method (",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/inertiajs/inertia/pull/263"}),"#263"),")."),Object(b.b)("li",{parentName:"ul"},"Update Inertia link to merge data into the URL query string (",Object(b.b)("inlineCode",{parentName:"li"},"href"),") for ",Object(b.b)("inlineCode",{parentName:"li"},"GET")," requests (",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/inertiajs/inertia/pull/264"}),"#264"),").")),Object(b.b)("h2",null,"Deprecations"),Object(b.b)("p",null,"Inertia now shows a console warning if you create an Inertia link that uses a method other than ",Object(b.b)("inlineCode",{parentName:"p"},"GET")," and you also don't change the link element to something other than an ",Object(b.b)("inlineCode",{parentName:"p"},"<a>")," tag. This is due to accessibility issues that come with using anchor links for non-GET requests, which you can read more about here: #268."),Object(b.b)("p",null,"To hide this console warning, use the new ",Object(b.b)("inlineCode",{parentName:"p"},"as")," option to set a more appropriate element, such as a ",Object(b.b)("inlineCode",{parentName:"p"},"<button>"),". For example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),'- <InertiaLink href="/logout" method="post">Logout</InertiaLink>\n+ <InertiaLink href="/logout" method="post" as="button" type="button">Logout</InertiaLink>\n')),Object(b.b)("h2",null,"Breaking changes"),Object(b.b)("p",null,"This release depends on changes made to the internals of Inertia, which requires updating ",Object(b.b)("inlineCode",{parentName:"p"},"@inertiajs/inertia")," to ",Object(b.b)("inlineCode",{parentName:"p"},"^0.5.0"),". The peer dependencies have been updated to reflect this."))}u.isMDXComponent=!0}},[["0tDc",0,2,5,1,3,4]]]);