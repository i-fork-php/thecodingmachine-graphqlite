"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9549],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>v});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),v=i,m=d["".concat(s,".").concat(v)]||d[v]||u[v]||a;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function v(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60847:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=t(87462),i=(t(67294),t(3905));const a={id:"universal_service_providers",title:"Getting started with a framework compatible with container-interop/service-provider",sidebar_label:"Universal service providers",original_id:"universal_service_providers"},o=void 0,p={unversionedId:"universal_service_providers",id:"version-3.0/universal_service_providers",title:"Getting started with a framework compatible with container-interop/service-provider",description:"container-interop/service-provider is an experimental project",source:"@site/versioned_docs/version-3.0/universal_service_providers.md",sourceDirName:".",slug:"/universal_service_providers",permalink:"/docs/3.0/universal_service_providers",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/universal_service_providers.md",tags:[],version:"3.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1657176742,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"universal_service_providers",title:"Getting started with a framework compatible with container-interop/service-provider",sidebar_label:"Universal service providers",original_id:"universal_service_providers"},sidebar:"version-3.0/docs",previous:{title:"Laravel package",permalink:"/docs/3.0/laravel-package"},next:{title:"Other frameworks / No framework",permalink:"/docs/3.0/other-frameworks"}},s={},l=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Integration",id:"integration",level:2},{value:"Sample usage",id:"sample-usage",level:2}],c={toc:l};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/container-interop/service-provider/"},"container-interop/service-provider")," is an experimental project\naiming to bring interoperability between framework module systems."),(0,i.kt)("p",null,"If your framework is compatible with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/container-interop/service-provider/"},"container-interop/service-provider"),",\nGraphQLite comes with a service provider that you can leverage."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Open a terminal in your current project directory and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite-universal-service-provider\n")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"In order to bootstrap GraphQLite, you will need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A PSR-16 cache")),(0,i.kt)("p",null,"Additionally, you will have to route the HTTP requests to the underlying GraphQL library."),(0,i.kt)("p",null,"GraphQLite relies on the ",(0,i.kt)("a",{parentName:"p",href:"http://webonyx.github.io/graphql-php/"},"webonyx/graphql-php")," library internally.\nThis library plays well with PSR-7 requests and there is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/phps-cans/psr7-middleware-graphql"},"PSR-15 middleware available"),"."),(0,i.kt)("h2",{id:"integration"},"Integration"),(0,i.kt)("p",null,"Webonyx/graphql-php library requires a ",(0,i.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/type-system/schema/"},"Schema")," in order to resolve\nGraphQL queries. The service provider provides this ",(0,i.kt)("inlineCode",{parentName:"p"},"Schema")," class."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite-universal-service-provider"},"Checkout the the service-provider documentation")),(0,i.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"composer.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "require": {\n    "mnapoli/simplex": "^0.5",\n    "thecodingmachine/graphqlite-universal-service-provider": "^3",\n    "thecodingmachine/symfony-cache-universal-module": "^1"\n  },\n  "minimum-stability": "dev",\n  "prefer-stable": true\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"index.php")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Simplex\\Container;\nuse TheCodingMachine\\GraphQLite\\Schema;\nuse TheCodingMachine\\SymfonyCacheServiceProvider;\nuse TheCodingMachine\\DoctrineAnnotationsServiceProvider;\nuse TheCodingMachine\\GraphQLiteServiceProvider;\n\n$container = new Container([\n    new SymfonyCacheServiceProvider(),\n    new DoctrineAnnotationsServiceProvider,\n    new GraphQLiteServiceProvider()]);\n$container->set('graphqlite.namespace.types', ['App\\\\Types']);\n$container->set('graphqlite.namespace.controllers', ['App\\\\Controllers']);\n\n$schema = $container->get(Schema::class);\n")))}u.isMDXComponent=!0}}]);