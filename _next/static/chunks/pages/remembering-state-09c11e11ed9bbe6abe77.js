_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[185],{Fb6X:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/remembering-state",function(){return r("wmqQ")}])},wmqQ:function(e,n,r){"use strict";r.r(n),r.d(n,"meta",(function(){return S})),r.d(n,"default",(function(){return N}));var t=r("wx14"),a=r("h4VS"),m=r("Ff2n"),s=r("q1tI"),i=r.n(s),o=r("7ljp"),u=r("B+lO"),l=r.n(u),f=r("5Yp1"),c=r("SrvX");r("qKvR"),i.a.createElement;function b(){var e=Object(a.a)(["\n        import { useForm } from '@inertiajs/inertia-svelte'\n\n        const form = useForm('CreateUser', data)\n        const form = useForm(`EditUser:${user.id}`, data)\n      "],["\n        import { useForm } from '@inertiajs/inertia-svelte'\\n\n        const form = useForm('CreateUser', data)\n        const form = useForm(\\`EditUser:\\${user.id}\\`, data)\n      "]);return b=function(){return e},e}function p(){var e=Object(a.a)(["\n        import { useForm } from '@inertiajs/inertia-react'\n\n        const form = useForm('CreateUser', data)\n        const form = useForm(`EditUser:${user.id}`, data)\n      "],["\n        import { useForm } from '@inertiajs/inertia-react'\\n\n        const form = useForm('CreateUser', data)\n        const form = useForm(\\`EditUser:\\${user.id}\\`, data)\n      "]);return p=function(){return e},e}function d(){var e=Object(a.a)(["\n        import { useForm } from '@inertiajs/inertia-vue3'\n\n        const form = useForm('CreateUser', data)\n        const form = useForm(`EditUser:${user.id}`, data)\n      "],["\n        import { useForm } from '@inertiajs/inertia-vue3'\\n\n        const form = useForm('CreateUser', data)\n        const form = useForm(\\`EditUser:\\${user.id}\\`, data)\n      "]);return d=function(){return e},e}function j(){var e=Object(a.a)(["\n        this.$inertia.form('CreateUser', data)\n        this.$inertia.form(`EditUser:${this.user.id}`, data)\n      "],["\n        this.$inertia.form('CreateUser', data)\n        this.$inertia.form(\\`EditUser:\\${this.user.id}\\`, data)\n      "]);return j=function(){return e},e}function _(){var e=Object(a.a)(["\n          import { page, remember } from '@inertiajs/inertia-svelte'\n\n          let form = remember({\n            first_name: $page.props.user.first_name,\n            last_name: $page.props.user.last_name,\n          }, `Users/Edit:${$page.props.user.id}`)\n      "],["\n          import { page, remember } from '@inertiajs/inertia-svelte'\\n\n          let form = remember({\n            first_name: $page.props.user.first_name,\n            last_name: $page.props.user.last_name,\n          }, \\`Users/Edit:\\${$page.props.user.id}\\`)\n      "]);return _=function(){return e},e}function O(){var e=Object(a.a)(["\n        import { useRemember } from '@inertiajs/inertia-react'\n        import React from 'react'\n\n        export default function Profile() {\n          const [formState, setFormState] = useRemember({\n            first_name: props.user.first_name,\n            last_name: props.user.last_name,\n          }, `Users/Edit:${this.user.id}`)\n        }\n      "],["\n        import { useRemember } from '@inertiajs/inertia-react'\n        import React from 'react'\\n\n        export default function Profile() {\n          const [formState, setFormState] = useRemember({\n            first_name: props.user.first_name,\n            last_name: props.user.last_name,\n          }, \\`Users/Edit:\\${this.user.id}\\`)\n        }\n      "]);return O=function(){return e},e}function g(){var e=Object(a.a)(["\n        import { useRemember } from '@inertiajs/inertia-vue3'\n\n        export default {\n          setup({ user }) {\n            const form = useRemember({\n                first_name: null,\n                last_name: null,\n            }, `Users/Edit:${user.id}`)\n\n            return { form }\n          },\n        }\n      "],["\n        import { useRemember } from '@inertiajs/inertia-vue3'\\n\n        export default {\n          setup({ user }) {\n            const form = useRemember({\n                first_name: null,\n                last_name: null,\n            }, \\`Users/Edit:\\${user.id}\\`)\\n\n            return { form }\n          },\n        }\n      "]);return g=function(){return e},e}function R(){var e=Object(a.a)(["\n        {\n          remember: {\n            data: ['form'],\n            key() {\n              return `Users/Edit:${this.user.id}`\n            }\n          },\n          data() {\n            return {\n              form: {\n                first_name: this.user.first_name,\n                last_name: this.user.last_name,\n              },\n            }\n          },\n        }\n      "],["\n        {\n          remember: {\n            data: ['form'],\n            key() {\n              return \\`Users/Edit:\\${this.user.id}\\`\n            }\n          },\n          data() {\n            return {\n              form: {\n                first_name: this.user.first_name,\n                last_name: this.user.last_name,\n              },\n            }\n          },\n        }\n      "]);return R=function(){return e},e}function v(){var e=Object(a.a)(["\n          import { page, remember } from '@inertiajs/inertia-svelte'\n\n          let form = remember({\n            first_name: null,\n            last_name: null,\n          }, 'Users/Create')\n\n      "],["\n          import { page, remember } from '@inertiajs/inertia-svelte'\\n\n          let form = remember({\n            first_name: null,\n            last_name: null,\n          }, 'Users/Create')\\n\n      "]);return v=function(){return e},e}function h(){var e=Object(a.a)(["\n        import { useRemember } from '@inertiajs/inertia-react'\n        import React from 'react'\n\n        export default function Profile() {\n          const [formState, setFormState] = useRemember({\n            first_name: null,\n            last_name: null,\n          }, 'Users/Create')\n\n        }\n      "],["\n        import { useRemember } from '@inertiajs/inertia-react'\n        import React from 'react'\\n\n        export default function Profile() {\n          const [formState, setFormState] = useRemember({\n            first_name: null,\n            last_name: null,\n          }, 'Users/Create')\\n\n        }\n      "]);return h=function(){return e},e}function U(){var e=Object(a.a)(["\n        import { useRemember } from '@inertiajs/inertia-vue3'\n\n        export default {\n          setup() {\n            const form = useRemember({\n                first_name: null,\n                last_name: null,\n            }, 'Users/Create')\n\n            return { form }\n          },\n        }\n      "],["\n        import { useRemember } from '@inertiajs/inertia-vue3'\\n\n        export default {\n          setup() {\n            const form = useRemember({\n                first_name: null,\n                last_name: null,\n            }, 'Users/Create')\\n\n            return { form }\n          },\n        }\n      "]);return U=function(){return e},e}function x(){var e=Object(a.a)(["\n        {\n          remember: {\n            data: ['form'],\n            key: 'Users/Create',\n          },\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n              },\n            }\n          },\n        }\n      "]);return x=function(){return e},e}function F(){var e=Object(a.a)(["\n        import { remember } from '@inertiajs/inertia-svelte'\n\n        let form = remember({\n          first_name: null,\n          last_name: null,\n        })\n\n        // ...\n      "],["\n        import { remember } from '@inertiajs/inertia-svelte'\\n\n        let form = remember({\n          first_name: null,\n          last_name: null,\n        })\\n\n        // ...\n      "]);return F=function(){return e},e}function C(){var e=Object(a.a)(["\n        import { useRemember } from '@inertiajs/inertia-react'\n        import React from 'react'\n\n        export default function Profile() {\n          const [formState, setFormState] = useRemember({\n            first_name: null,\n            last_name: null,\n            // ...\n          })\n\n          // ...\n        }\n      "],["\n        import { useRemember } from '@inertiajs/inertia-react'\n        import React from 'react'\\n\n        export default function Profile() {\n          const [formState, setFormState] = useRemember({\n            first_name: null,\n            last_name: null,\n            // ...\n          })\\n\n          // ...\n        }\n      "]);return C=function(){return e},e}function E(){var e=Object(a.a)(["\n        import { useRemember } from '@inertiajs/inertia-vue3'\n\n        export default {\n          setup() {\n            const form = useRemember({\n                first_name: null,\n                last_name: null,\n            })\n\n            return { form }\n          },\n        }\n      "],["\n        import { useRemember } from '@inertiajs/inertia-vue3'\\n\n        export default {\n          setup() {\n            const form = useRemember({\n                first_name: null,\n                last_name: null,\n            })\\n\n            return { form }\n          },\n        }\n      "]);return E=function(){return e},e}function $(){var e=Object(a.a)(["\n        {\n          // \u0412\u0430\u0440\u0438\u0430\u043d\u0442 1: \u041e\u0431\u044a\u0435\u043a\u0442\n          remember: {\n            data: ['form'],\n          },\n\n          // \u0412\u0430\u0440\u0438\u0430\u043d\u0442 2: \u041c\u0430\u0441\u0441\u0438\u0432\n          remember: ['form'],\n\n          // \u0412\u0430\u0440\u0438\u0430\u043d\u0442 3: \u0421\u0442\u0440\u043e\u043a\u0430\n          remember: 'form',\n\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n                // ...\n              },\n            }\n          },\n        }\n      "],["\n        {\n          // \u0412\u0430\u0440\u0438\u0430\u043d\u0442 1: \u041e\u0431\u044a\u0435\u043a\u0442\n          remember: {\n            data: ['form'],\n          },\\n\n          // \u0412\u0430\u0440\u0438\u0430\u043d\u0442 2: \u041c\u0430\u0441\u0441\u0438\u0432\n          remember: ['form'],\\n\n          // \u0412\u0430\u0440\u0438\u0430\u043d\u0442 3: \u0421\u0442\u0440\u043e\u043a\u0430\n          remember: 'form',\\n\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n                // ...\n              },\n            }\n          },\n        }\n      "]);return $=function(){return e},e}var S={title:"Remembering state",links:[{url:"#top",name:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},{url:"#\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435-\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e-\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f",name:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f"},{url:"#\u043c\u0443\u043b\u044c\u0442\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b",name:"\u041c\u0443\u043b\u044c\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b"},{url:"#\u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a-\u0444\u043e\u0440\u043c\u044b",name:"\u041f\u043e\u043c\u043e\u0449\u043d\u0438\u043a \u0444\u043e\u0440\u043c\u044b"},{url:"#\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435-\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f-\u0432\u0440\u0443\u0447\u043d\u0443\u044e",name:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e"}]},y={meta:S},w=f.b;function N(e){var n=e.components,r=Object(m.a)(e,["components"]);return Object(o.b)(w,Object(t.a)({},y,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f"),Object(o.b)("p",null,"\u041f\u0440\u0438 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043f\u043e \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 Inertia \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0434\u0430\u043d\u043d\u044b\u0435, \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438. \u041e\u0434\u043d\u0430\u043a\u043e Inertia \u043d\u0435 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u044d\u0442\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044e \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0412\u0430\u0448\u0435\u0433\u043e \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."),Object(o.b)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0444\u043e\u0440\u043c\u0443, \u0437\u0430\u0442\u0435\u043c \u0443\u0445\u043e\u0434\u0438\u0442, \u0430 \u0437\u0430\u0442\u0435\u043c \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e, \u0444\u043e\u0440\u043c\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0431\u0440\u043e\u0448\u0435\u043d\u0430, \u0438 \u0435\u0433\u043e \u0440\u0430\u0431\u043e\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u0430."),Object(o.b)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u043c\u044f\u0433\u0447\u0438\u0442\u044c \u044d\u0442\u0443 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443, \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c Inertia, \u043a\u0430\u043a\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."),Object(o.b)("h2",null,"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f"),Object(o.b)("p",null,"To save local component state to the history state, use the ",Object(o.b)("inlineCode",{parentName:"p"},"remember")," feature to tell Inertia which data it should remember."),Object(o.b)(c.a,{examples:[{name:"Vue 2",description:'\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e "remember".',language:"js",code:l()($())},{name:"Vue 3",description:'Use the "useRemember" hook.',language:"js",code:l()(E())},{name:"React",description:'\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0445\u0443\u043a "useRemember".',language:"jsx",code:l()(C())},{name:"Svelte",description:'\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u0442\u043e\u0440 "remember".',language:"js",code:l()(F())}],mdxType:"TabbedCodeExamples"}),Object(o.b)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c, \u043a\u043e\u0433\u0434\u0430 \u0412\u0430\u0448\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430 ",Object(o.b)("inlineCode",{parentName:"p"},"form")," \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f, Inertia \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u044d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0438\u0445 \u043f\u0440\u0438 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043f\u043e \u0438\u0441\u0442\u043e\u0440\u0438\u0438."),Object(o.b)("h2",null,"\u041c\u0443\u043b\u044c\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b"),Object(o.b)("p",null,"\u0415\u0441\u043b\u0438 \u0412\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f, \u0412\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430, \u0447\u0442\u043e\u0431\u044b Inertia \u0437\u043d\u0430\u043b\u0430, \u043a\u0430\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."),Object(o.b)(c.a,{examples:[{name:"Vue 2",description:'\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043a\u043b\u044e\u0447, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e "remember.key".',language:"js",code:l()(x())},{name:"Vue 3",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043a\u043b\u044e\u0447 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 useRemember().",language:"js",code:l()(U())},{name:"React",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043a\u043b\u044e\u0447 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 useRemember().",language:"jsx",code:l()(h())},{name:"Svelte",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043a\u043b\u044e\u0447 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 useRemember().",language:"js",code:l()(v())}],mdxType:"TabbedCodeExamples"}),Object(o.b)("p",null,"\u0415\u0441\u043b\u0438 \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u0432 \u043e\u0434\u043d\u043e\u0433\u043e \u0438 \u0442\u043e\u0433\u043e \u0436\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0435\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f, \u043d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0442\u0430\u043a\u0436\u0435 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."),Object(o.b)(c.a,{examples:[{name:"Vue 2",description:'\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u043a\u043b\u044e\u0447\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 "remember.key".',language:"js",code:l()(R())},{name:"Vue 3",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043a\u043b\u044e\u0447 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 useRemember().",language:"js",code:l()(g())},{name:"React",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043a\u043b\u044e\u0447 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 useRemember().",language:"jsx",code:l()(O())},{name:"Svelte",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043a\u043b\u044e\u0447 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 useRemember().",language:"js",code:l()(_())}],mdxType:"TabbedCodeExamples"}),Object(o.b)("h2",null,"\u041f\u043e\u043c\u043e\u0449\u043d\u0438\u043a \u0444\u043e\u0440\u043c\u044b"),Object(o.b)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 ",Object(o.b)("a",{href:"/forms#form-helper"},"\u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a \u0444\u043e\u0440\u043c\u044b"),", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u0444\u043e\u0440\u043c\u044b \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 \u0444\u043e\u0440\u043c\u044b, \u0438 \u044d\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u044b \u0438 \u043e\u0448\u0438\u0431\u043a\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u044e\u0442\u0441\u044f."),Object(o.b)(c.a,{examples:[{name:"Vue 2",language:"js",code:l()(j())},{name:"Vue 3",language:"js",code:l()(d())},{name:"React",language:"js",code:l()(p())},{name:"Svelte",language:"js",code:l()(b())}],mdxType:"TabbedCodeExamples"}),Object(o.b)("h2",null,"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e"),Object(o.b)("p",null,"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",Object(o.b)("inlineCode",{parentName:"p"},"remember")," \u0432\u043e Vue 2 \u0438 \u0445\u0443\u043a ",Object(o.b)("inlineCode",{parentName:"p"},"useRemember")," \u0432\u043e Vue 3, React \u0438 Svelte \u0441\u043b\u0435\u0434\u044f\u0442 \u0437\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044e\u0442 \u044d\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0438 \u0438\u0441\u0442\u043e\u0440\u0438\u0438, \u0430 \u0437\u0430\u0442\u0435\u043c \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044e\u0442 \u0435\u0433\u043e \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b."),Object(o.b)("p",null,"\u041e\u0434\u043d\u0430\u043a\u043e \u043c\u043e\u0436\u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u044d\u0442\u0438\u043c \u0432\u0440\u0443\u0447\u043d\u0443\u044e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b ",Object(o.b)("inlineCode",{parentName:"p"},"remember()")," \u0438 ",Object(o.b)("inlineCode",{parentName:"p"},"restore()")," \u0432 Inertia."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import { Inertia } from '@inertiajs/inertia'\n\n// \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u0438\nInertia.remember(data, 'my-key')\n\n// \u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0438\u0437 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u0438\nlet data = Inertia.restore('my-key')\n")))}N.isMDXComponent=!0}},[["Fb6X",0,2,5,1,3,4]]]);