_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{Gn28:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/asset-versioning",function(){return a("HX+P")}])},"HX+P":function(n,e,a){"use strict";a.r(e),a.d(e,"meta",(function(){return f})),a.d(e,"default",(function(){return j}));var t=a("wx14"),i=a("h4VS"),r=a("Ff2n"),s=a("q1tI"),o=a.n(s),u=a("7ljp"),l=a("B+lO"),c=a.n(l),b=a("5Yp1"),d=a("SrvX");a("qKvR"),o.a.createElement;function p(){var n=Object(i.a)(["\n        InertiaRails.configure do |config|\n          config.version = '1.0'\n        end\n\n        # You can also use lazy evaluation\n        InertiaRails.configure do |config|\n          config.version = lambda { InertiaRails::Version.last }\n        end\n      "],["\n        InertiaRails.configure do |config|\n          config.version = '1.0'\n        end\\n\n        # You can also use lazy evaluation\n        InertiaRails.configure do |config|\n          config.version = lambda { InertiaRails::Version.last }\n        end\n      "]);return p=function(){return n},n}function v(){var n=Object(i.a)(["\n        /*\n        |----------------------------------------------------------------\n        | \u0427\u0435\u0440\u0435\u0437 \u043c\u0438\u0434\u043b\u0432\u0430\u0440 HandleInertiaRequests (\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f)\n        |----------------------------------------------------------------\n        */\n\n        class HandleInertiaRequests extends Middleware\n        {\n            public function version(Request $request)\n            {\n                return parent::version($request);\n            }\n        }\n\n        /*\n        |----------------------------------------------------------------\n        | \u0412\u0440\u0443\u0447\u043d\u0443\u044e\n        |----------------------------------------------------------------\n        */\n\n        use Inertia\\Inertia;\n\n        Inertia::version($version);\n        Inertia::version(fn () => $version); // \u041e\u0442\u043b\u043e\u0436\u0435\u043d\u043d\u043e\n      "],["\n        /*\n        |----------------------------------------------------------------\n        | \u0427\u0435\u0440\u0435\u0437 \u043c\u0438\u0434\u043b\u0432\u0430\u0440 HandleInertiaRequests (\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f)\n        |----------------------------------------------------------------\n        */\\n\n        class HandleInertiaRequests extends Middleware\n        {\n            public function version(Request $request)\n            {\n                return parent::version($request);\n            }\n        }\\n\n        /*\n        |----------------------------------------------------------------\n        | \u0412\u0440\u0443\u0447\u043d\u0443\u044e\n        |----------------------------------------------------------------\n        */\\n\n        use Inertia\\\\Inertia;\\n\n        Inertia::version($version);\n        Inertia::version(fn () => $version); // \u041e\u0442\u043b\u043e\u0436\u0435\u043d\u043d\u043e\n      "]);return v=function(){return n},n}var f={title:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0430\u043a\u0442\u0438\u0432\u043e\u0432",links:[{url:"#top",name:"\u0412\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435"},{url:"#\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",name:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"},{url:"#\u043e\u0447\u0438\u0441\u0442\u043a\u0430-\u043a\u0435\u0448\u0430",name:"\u041e\u0447\u0438\u0441\u0442\u043a\u0430 \u043a\u0435\u0448\u0430"}]},m={meta:f},I=b.b;function j(n){var e=n.components,a=Object(r.a)(n,["components"]);return Object(u.b)(I,Object(t.a)({},m,a,{components:e,mdxType:"MDXLayout"}),Object(u.b)("h1",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438 \u0430\u043a\u0442\u0438\u0432\u043e\u0432"),Object(u.b)("p",null,"\u041e\u0434\u043d\u0430 \u0438\u0437 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441 \u043e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u043c\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c\u0438 - \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0441\u0430\u0439\u0442\u0430, \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0438 \u0431\u044b\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u044b. Inertia \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u044d\u0442\u043e, \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u044f \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0412\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0430\u043a\u0442\u0438\u0432\u0430 Inertia \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442 \u0436\u0435\u0441\u0442\u043a\u043e\u0435 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0432\u043c\u0435\u0441\u0442\u043e \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u044f ajax \u043f\u0440\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435."),Object(u.b)("h2",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"),Object(u.b)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u0412\u0430\u043c \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u044c Inertia, \u043a\u0430\u043a\u0430\u044f \u0443 \u0412\u0430\u0441 \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u044e\u0431\u0430\u044f ",Object(u.b)("inlineCode",{parentName:"p"},"string")," (\u0431\u0443\u043a\u0432\u044b, \u0447\u0438\u0441\u043b\u0430 \u0438\u043b\u0438 \u0445\u0435\u0448 \u0444\u0430\u0439\u043b\u0430), \u0435\u0441\u043b\u0438 \u043e\u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0412\u0430\u0448\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432."),Object(u.b)(d.a,{examples:[{name:"Laravel",language:"php",code:c()(v()),description:'\u041f\u043e\u0441\u0440\u0435\u0434\u043d\u0438\u043a HandleInertiaRequests \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u0443\u043c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 Laravel, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043b\u0438\u0431\u043e \u0445\u0435\u0448 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 "app.asset_url", \u043b\u0438\u0431\u043e \u0444\u0430\u0439\u043b mix-manifest.json.'},{name:"Rails",language:"ruby",code:c()(p())}],mdxType:"TabbedCodeExamples"}),Object(u.b)("h2",null,"\u041e\u0447\u0438\u0441\u0442\u043a\u0430 \u043a\u0435\u0448\u0430"),Object(u.b)("p",null,"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0430\u043a\u0442\u0438\u0432\u043e\u0432 \u0432 Inertia \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0438, \u0447\u0442\u043e \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0435 \u0436\u0435\u0441\u0442\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0412\u0430\u0448\u0438\u0445 \u0430\u043a\u0442\u0438\u0432\u043e\u0432. \u041e\u0434\u043d\u0430\u043a\u043e Inertia \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u0435\u043b\u0430\u0435\u0442 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e. \u041e\u0431\u044b\u0447\u043d\u043e \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0442\u043e\u0439 \u0438\u043b\u0438 \u0438\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u043a\u0435\u0448\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432\u0435\u0440\u0441\u0438\u0438 \u0432 \u043a\u043e\u043d\u0435\u0446 URL-\u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0412\u0430\u0448\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432."),Object(u.b)("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 Laravel Mix, \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438, \u0432\u043a\u043b\u044e\u0447\u0438\u0432 ",Object(u.b)("a",Object(t.a)({parentName:"p"},{href:"https://laravel.com/docs/mix#versioning-and-cache-busting"}),"\u0432\u0435\u0440\u0441\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435")," \u0432 \u0412\u0430\u0448\u0435\u043c \u0444\u0430\u0439\u043b\u0435 ",Object(u.b)("inlineCode",{parentName:"p"},"webpack.mix.js"),"."))}j.isMDXComponent=!0}},[["Gn28",0,2,5,1,3,4]]]);