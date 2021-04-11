_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[61],{LMTW:function(e,a,t){"use strict";t.r(a),t.d(a,"meta",(function(){return p})),t.d(a,"default",(function(){return d}));var n=t("wx14"),r=t("Ff2n"),o=t("q1tI"),i=t.n(o),l=t("7ljp"),s=t("5Yp1"),p=(t("qKvR"),i.a.createElement,{title:"inertia@v0.8.0"}),b={meta:p},c=s.b;function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)(c,Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"inertia@v0.8.0"),Object(l.b)("div",{className:"-mt-8 mb-12 text-base font-medium text-gray-600"},"Published on December 23, 2020"),Object(l.b)("h2",null,"Automatic FormData conversion"),Object(l.b)("p",null,"Previously to upload files via with Inertia, you had to manually convert your data from an object to a ",Object(l.b)("inlineCode",{parentName:"p"},"FormData")," object, since that's what's required to submit a ",Object(l.b)("inlineCode",{parentName:"p"},"multipart/form-data")," request. This process was particularly painful, as it meant manually converting booleans, null values, and more to a ",Object(l.b)("inlineCode",{parentName:"p"},"FormData")," compatible version."),Object(l.b)("p",null,"Inertia now handles this all for you automatically. Simply pass your data as an object, and Inertia will detect if any files are present (even nested files), and it will automatically convert the data to a ",Object(l.b)("inlineCode",{parentName:"p"},"FormData")," object."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),"- const data = new FormData()\n- data.append('name', form.name || '')\n- data.append('email', form.email || '')\n- data.append('is_admin', form.is_admin ? '1' : '0')\n- data.append('photo', form.photo || '')\n\nInertia.post('/users', data)\n")),Object(l.b)("h2",null,"Improved validation error handling - BREAKING CHANGE \u26a0\ufe0f"),Object(l.b)("p",null,"This release of Inertia improves on how validation errors are handled. In particular, the ",Object(l.b)("inlineCode",{parentName:"p"},"onSuccess")," callback is no longer called when validation errors are present. We've also added a new ",Object(l.b)("inlineCode",{parentName:"p"},"onError")," callback, which runs when validation errors are present."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Inertia.post('/users', data, {\n  onSuccess() {\n    // Only called when no validation errors are present\n  },\n  onError(errors) {\n    // Called when validation errors are present\n  },\n})\n")),Object(l.b)("p",null,"By default, Inertia detects if validation errors are present by looking at the ",Object(l.b)("inlineCode",{parentName:"p"},"$page.prop.errors")," property. This can be customized using a new (optional) ",Object(l.b)("inlineCode",{parentName:"p"},"resolveErrors")," setting, applied at the adapter level."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"new Vue({\n  render: (h) =>\n    h(App, {\n      props: {\n        initialPage: JSON.parse(el.dataset.page),\n        resolveComponent: (name) => require(`./Pages/${name}`).default,\n        resolveErrors: (page) => page.props.errors || {}, // Customize if needed\n      },\n    }),\n}).$mount(el)\n")),Object(l.b)("p",null,"To maintain parity between the visit callbacks and the global events, we've repurposed the existing global ",Object(l.b)("inlineCode",{parentName:"p"},"error")," event for validation errors, and the previous global ",Object(l.b)("inlineCode",{parentName:"p"},"error")," event has been renamed to ",Object(l.b)("inlineCode",{parentName:"p"},"exception"),", which in hindsight is a more appropriate name anyway."),Object(l.b)("p",null,"Finally, we've added a new ",Object(l.b)("inlineCode",{parentName:"p"},"errorBag")," option when making Inertia visits. The purpose of this feature is to allow you to automatically scope the validation errors returned from the server within a key you specify. For example, instead of getting ",Object(l.b)("inlineCode",{parentName:"p"},"$page.props.errors"),", you can get ",Object(l.b)("inlineCode",{parentName:"p"},"$page.props.loginCredentialsForm.errors"),". This can be really helpful in situations where you have multiple forms on a single page, and don't want validation errors from one form to leak into another."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Inertia.put('/profile', data, {\n  errorBag: loginCredentialsForm,\n})\n")),Object(l.b)("p",null,"Note that your server-side adapter must also support this feature in order for this to work. The Laravel adapter has already been updated to support this, so be sure to upgrade to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/inertiajs/inertia-laravel/releases/tag/v0.3.5"}),"version 0.3.5"),"."),Object(l.b)("h2",null,"Adapter upgrade required - BREAKING CHANGE \u26a0\ufe0f"),Object(l.b)("p",null,"When upgrading to this release, be sure to also upgrade your Vue/React/Svelte adapter to the following version:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"@inertiajs/inertia-react": "0.5.0"')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"@inertiajs/inertia-svelte": "0.6.0"')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"@inertiajs/inertia-vue": "0.5.0"')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"@inertiajs/inertia-vue3": "0.3.0"'))))}d.isMDXComponent=!0},nr4F:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/releases/inertia-0.8.0",function(){return t("LMTW")}])}},[["nr4F",0,2,5,1,3,4]]]);