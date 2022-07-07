"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),l=n(67294),r=n(86010),o=n(72389),i=n(67392),u=n(7094),s=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n;const{lazy:o,block:m,defaultValue:d,values:y,groupId:h,className:g}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=y?y:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:q}=(0,u.U)(),[w,T]=(0,l.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:_}=(0,s.o5)();if(null!=h){const e=N[h];null!=e&&e!==w&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==w&&(_(t),T(a),null!=h&&q(h,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var l;const t=x.indexOf(e.currentTarget)-1;n=null!=(l=x[t])?l:x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},g)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:S,onFocus:O,onClick:O},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},47694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),l=(n(67294),n(3905)),r=n(65488),o=n(85162);const i={id:"symfony-bundle-advanced",title:"Symfony bundle: advanced usage",sidebar_label:"Symfony specific features",original_id:"symfony-bundle-advanced"},u=void 0,s={unversionedId:"symfony-bundle-advanced",id:"version-4.1/symfony-bundle-advanced",title:"Symfony bundle: advanced usage",description:"The Symfony bundle comes with a number of features to ease the integration of GraphQLite in Symfony.",source:"@site/versioned_docs/version-4.1/symfony-bundle-advanced.mdx",sourceDirName:".",slug:"/symfony-bundle-advanced",permalink:"/docs/4.1/symfony-bundle-advanced",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/symfony-bundle-advanced.mdx",tags:[],version:"4.1",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1657176742,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"symfony-bundle-advanced",title:"Symfony bundle: advanced usage",sidebar_label:"Symfony specific features",original_id:"symfony-bundle-advanced"},sidebar:"version-4.1/docs",previous:{title:"Class with multiple output types",permalink:"/docs/4.1/multiple_output_types"},next:{title:"Laravel specific features",permalink:"/docs/4.1/laravel-package-advanced"}},p={},c=[{value:"Login and logout",id:"login-and-logout",level:2},{value:"Schema and request security",id:"schema-and-request-security",level:2},{value:"Login using the &quot;login&quot; mutation",id:"login-using-the-login-mutation",level:3},{value:"Get the current user with the &quot;me&quot; query",id:"get-the-current-user-with-the-me-query",level:3},{value:"Logout using the &quot;logout&quot; mutation",id:"logout-using-the-logout-mutation",level:3},{value:"Injecting the Request",id:"injecting-the-request",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Symfony bundle comes with a number of features to ease the integration of GraphQLite in Symfony."),(0,l.kt)("h2",{id:"login-and-logout"},"Login and logout"),(0,l.kt)("p",null,'Out of the box, the GraphQLite bundle will expose a "login" and a "logout" mutation as well\nas a "me" query (that returns the current user).'),(0,l.kt)("p",null,'If you need to customize this behaviour, you can edit the "graphqlite.security" configuration key.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: auto # Default setting\n    enable_me: auto # Default setting\n")),(0,l.kt)("p",null,'By default, GraphQLite will enable "login" and "logout" mutations and the "me" query if the following conditions are met:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'the "security" bundle is installed and configured (with a security provider and encoder)'),(0,l.kt)("li",{parentName:"ul"},'the "session" support is enabled (via the "framework.session.enabled" key).')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: on\n")),(0,l.kt)("p",null,"By settings ",(0,l.kt)("inlineCode",{parentName:"p"},"enable_login=on"),", you are stating that you explicitly want the login/logout mutations.\nIf one of the dependencies is missing, an exception is thrown (unlike in default mode where the mutations\nare silently discarded)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: off\n")),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"enable_login=off")," to disable the mutations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    firewall_name: main # default value\n")),(0,l.kt)("p",null,'By default, GraphQLite assumes that your firewall name is "main". This is the default value used in the\nSymfony security bundle so it is likely the value you are using. If for some reason you want to use\nanother firewall, configure the name with ',(0,l.kt)("inlineCode",{parentName:"p"},"graphqlite.security.firewall_name"),"."),(0,l.kt)("h2",{id:"schema-and-request-security"},"Schema and request security"),(0,l.kt)("p",null,"You can disable the introspection of your GraphQL API (for instance in production mode) using\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"introspection")," configuration properties."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    introspection: false\n")),(0,l.kt)("p",null,"You can set the maximum complexity and depth of your GraphQL queries using the ",(0,l.kt)("inlineCode",{parentName:"p"},"maximum_query_complexity"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"maximum_query_depth")," configuration properties"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    maximum_query_complexity: 314\n    maximum_query_depth: 42\n")),(0,l.kt)("h3",{id:"login-using-the-login-mutation"},'Login using the "login" mutation'),(0,l.kt)("p",null,"The mutation below will log-in a user:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation login {\n  login(userName:"foo", password:"bar") {\n    userName\n    roles\n  }\n}\n')),(0,l.kt)("h3",{id:"get-the-current-user-with-the-me-query"},'Get the current user with the "me" query'),(0,l.kt)("p",null,'Retrieving the current user is easy with the "me" query:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  me {\n    userName\n    roles\n  }\n}\n")),(0,l.kt)("p",null,"In Symfony, user objects implement ",(0,l.kt)("inlineCode",{parentName:"p"},"Symfony\\Component\\Security\\Core\\User\\UserInterface"),".\nThis interface is automatically mapped to a type with 2 fields:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"userName: String!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"roles: [String!]!"))),(0,l.kt)("p",null,"If you want to get more fields, just add the ",(0,l.kt)("inlineCode",{parentName:"p"},"@Type")," annotation to your user class:"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass User implements UserInterface\n{\n    #[Field]\n    public function getEmail() : string\n    {\n        // ...\n    }\n\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass User implements UserInterface\n{\n    /**\n     * @Field\n     */\n    public function getEmail() : string\n    {\n        // ...\n    }\n\n}\n")))),(0,l.kt)("p",null,"You can now query this field using an ",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#inline-fragments"},"inline fragment"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  me {\n    userName\n    roles\n    ... on User {\n      email\n    }\n  }\n}\n")),(0,l.kt)("h3",{id:"logout-using-the-logout-mutation"},'Logout using the "logout" mutation'),(0,l.kt)("p",null,'Use the "logout" mutation to log a user out'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation logout {\n  logout\n}\n")),(0,l.kt)("h2",{id:"injecting-the-request"},"Injecting the Request"),(0,l.kt)("p",null,"You can inject the Symfony Request object in any query/mutation/field."),(0,l.kt)("p",null,"Most of the time, getting the request object is irrelevant. Indeed, it is GraphQLite's job to parse this request and\nmanage it for you. Sometimes yet, fetching the request can be needed. In those cases, simply type-hint on the request\nin any parameter of your query/mutation/field."),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"use Symfony\\Component\\HttpFoundation\\Request;\n\n#[Query]\npublic function getUser(int $id, Request $request): User\n{\n    // The $request object contains the Symfony Request.\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"use Symfony\\Component\\HttpFoundation\\Request;\n\n/**\n * @Query\n */\npublic function getUser(int $id, Request $request): User\n{\n    // The $request object contains the Symfony Request.\n}\n")))))}d.isMDXComponent=!0}}]);