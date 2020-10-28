_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{bUay:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t("wx14"),r=t("Ff2n"),i=t("q1tI"),s=t.n(i),l=t("7ljp"),o=(t("B+lO"),t("5Yp1")),c=(t("SrvX"),t("qKvR"),s.a.createElement,{title:"Events",links:[{url:"#registering-listeners",name:"Registering listeners"},{url:"#removing-listeners",name:"Removing listeners"},{url:"#cancelling-events",name:"Cancelling events"},{url:"#start",name:"Start"},{url:"#progress",name:"Progress"},{url:"#success",name:"Success"},{url:"#invalid",name:"Invalid"},{url:"#error",name:"Error"},{url:"#finish",name:"Finish"},{url:"#navigate",name:"Navigate"},{url:"#event-callbacks",name:"Event callbacks"}]}),b={meta:c},p=o.b;function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)(p,Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Events"),Object(l.b)("p",null,'Inertia provides an event system that allows you to "hook into" the various lifecycle events of the library.'),Object(l.b)("h2",null,"Registering listeners"),Object(l.b)("p",null,"To register an event listener, use the ",Object(l.b)("inlineCode",{parentName:"p"},"Inertia.on()")," method."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('start', event => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n})\n")),Object(l.b)("p",null,"Under the hood Inertia uses native browser events, so you can also work with them that way as well. Just be sure to append ",Object(l.b)("inlineCode",{parentName:"p"},"inertia:")," to the event name."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document.addEventListener('inertia:start', event => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n})\n")),Object(l.b)("h2",null,"Removing listeners"),Object(l.b)("p",null,"When you register an event listener, Inertia automatically returns you a callback to remove the event listener."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let removeStartEventListener = Inertia.on('start', event => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n})\n\n// Remove the listener\nremoveStartEventListener()\n")),Object(l.b)("p",null,"Combined with a destroyed hook, you can automatically remove the event listener when you navigate to a different page."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export default {\n  mounted() {\n    this.$once(\n      'hook:destroyed',\n      Inertia.on('start', event => {\n        console.log(`Starting a visit to ${event.detail.visit.url}`)\n      })\n    )\n  },\n}\n")),Object(l.b)("p",null,"Alternatively, if you're using native browser events, you can remove the event listener using ",Object(l.b)("inlineCode",{parentName:"p"},"removeEventListener()"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let startEventListener = event => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n}\n\ndocument.addEventListener('inertia:start', startEventListener)\n\n// Remove the listener\ndocument.removeEventListener('inertia:start', startEventListener)\n")),Object(l.b)("h2",null,"Cancelling events"),Object(l.b)("p",null,"Some events (",Object(l.b)("inlineCode",{parentName:"p"},"start"),", ",Object(l.b)("inlineCode",{parentName:"p"},"invalid"),", ",Object(l.b)("inlineCode",{parentName:"p"},"error"),") support cancellation, allowing you to prevent Inertia's default behaviour. Just like native events, if only one event listener calls ",Object(l.b)("inlineCode",{parentName:"p"},"event.preventDefault()"),", the event will be cancelled."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('start', event => {\n  if (!confirm('Are you sure you want to navigate away?')) {\n    event.preventDefault()\n  }\n})\n")),Object(l.b)("p",null,"As a convenience, if you register your event listener using ",Object(l.b)("inlineCode",{parentName:"p"},"Inertia.on()"),", you can also cancel the event by returning ",Object(l.b)("inlineCode",{parentName:"p"},"false")," from the listener."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('start', event => {\n  return confirm('Are you sure you want to navigate away?')\n})\n")),Object(l.b)("h2",null,"Start"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"start")," event fires before a request is made to the server. This is useful for displaying loading indicators and for intercepting visits."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('start', event => {\n  console.log(`Starting a visit to ${event.detail.visit.url}`)\n})\n")),Object(l.b)("p",null,"Cancel the ",Object(l.b)("inlineCode",{parentName:"p"},"start")," event to prevent the visit from happening."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('start', event => {\n  return confirm('Are you sure you want to navigate away?')\n})\n")),Object(l.b)("h2",null,"Progress"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"progress")," event fires as progress increments during file uploads."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('progress', event => {\n  this.form.progress = event.detail.progress.percentage\n})\n")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"progress")," event is not cancelable."),Object(l.b)("h2",null,"Success"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"success")," event fires on successful page visits. Note, this does ",Object(l.b)("em",{parentName:"p"},"not")," include history visits."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('success', event => {\n  console.log(`Successfully made a visit to ${event.detail.page.url}`)\n})\n")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"success")," event is not cancelable."),Object(l.b)("h2",null,"Invalid"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"invalid")," event fires when a non-Inertia response is received from the server, such as an ",Object(l.b)("inlineCode",{parentName:"p"},"html")," or ",Object(l.b)("inlineCode",{parentName:"p"},"json")," response. A valid Inertia response is one that has the ",Object(l.b)("inlineCode",{parentName:"p"},"X-Inertia")," header set to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," with a ",Object(l.b)("inlineCode",{parentName:"p"},"json")," payload containing ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/the-protocol#the-page-object"}),"the page object"),"."),Object(l.b)("p",null,"This event is fired for all response types, including ",Object(l.b)("inlineCode",{parentName:"p"},"200"),", ",Object(l.b)("inlineCode",{parentName:"p"},"400"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"500")," response codes."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('invalid', event => {\n  console.log(`An invalid Inertia response was received.`)\n  console.log(event.detail.response)\n})\n")),Object(l.b)("p",null,"Cancel the ",Object(l.b)("inlineCode",{parentName:"p"},"invalid")," event to prevent Inertia from showing the non-Inertia response modal."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('invalid', event => {\n  event.preventDefault()\n  // Handle the invalid response yourself\n})\n")),Object(l.b)("h2",null,"Error"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"error")," event fires on unexpected XHR errors, such as network interruptions, and for errors generated in the ",Object(l.b)("inlineCode",{parentName:"p"},"resolveComponent()")," callback."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('error', event => {\n  console.log(`An unexpected error occurred during an Inertia visit.`)\n  console.log(event.detail.error)\n})\n")),Object(l.b)("p",null,"Cancel the ",Object(l.b)("inlineCode",{parentName:"p"},"error")," event to prevent the error from being thrown."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('error', event => {\n  event.preventDefault()\n  // Handle the error yourself\n})\n")),Object(l.b)("p",null,"Note, this event will ",Object(l.b)("em",{parentName:"p"},"not")," fire for XHR requests that receive ",Object(l.b)("inlineCode",{parentName:"p"},"400")," and ",Object(l.b)("inlineCode",{parentName:"p"},"500")," level responses, or for non-Inertia responses, as these situations are handled in other ways by Inertia. See the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/error-handling"}),"error handling")," page for more information."),Object(l.b)("h2",null,"Finish"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"finish")," event fires after an XHR request has completed for both successful and unsuccessful responses. This event is useful for hiding loading indicators."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('finish', event => {\n  NProgress.done()\n})\n")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"finish")," event is not cancelable."),Object(l.b)("h2",null,"Navigate"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"navigate")," event fires on successful page visits, as well as when navigating through history. This event is useful for tracking analytics and things of that nature."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Inertia } from '@inertiajs/inertia'\n\nInertia.on('navigate', event => {\n  console.log(`Navigated to ${event.detail.page.url}`)\n})\n")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"navigate")," event is not cancelable."),Object(l.b)("h2",null,"Event callbacks"),Object(l.b)("p",null,"In addition to the global events, Inertia also provides a number of event callbacks when manually making Inertia visits."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Inertia.visit(url, {\n  onCancelToken: cancelToken => {},\n  onCancel: () => {},\n  onStart: visit => {},\n  onProgress: progress => {},\n  onSuccess: page => {},\n  onFinish: () => {},\n})\n")))}u.isMDXComponent=!0},xk6G:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return t("bUay")}])}},[["xk6G",0,2,5,1,3,4]]]);