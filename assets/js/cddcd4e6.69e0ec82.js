"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9212],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r=n(79443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",u="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=o(),h=f.tabGroupChoices,y=f.setTabGroupChoices,g=(0,a.useState)(r),b=g[0],v=g[1],k=a.Children.toArray(e.children),N=[];if(null!=m){var q=h[m];null!=q&&q!==b&&p.some((function(e){return e.value===q}))&&v(q)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),a=p[n].value;v(a),null!=m&&(y(m,a),setTimeout((function(){var e,n,a,r,o,i,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},78100:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(55064),l=n(58215),u=["components"],s={id:"symfony-bundle-advanced",title:"Symfony bundle: advanced usage",sidebar_label:"Symfony specific features"},c=void 0,p={unversionedId:"symfony-bundle-advanced",id:"version-3.0/symfony-bundle-advanced",isDocsHomePage:!1,title:"Symfony bundle: advanced usage",description:"The Symfony bundle comes with a number of features to ease the integration of GraphQLite in Symfony.",source:"@site/versioned_docs/version-3.0/symfony-bundle-advanced.mdx",sourceDirName:".",slug:"/symfony-bundle-advanced",permalink:"/docs/3.0/symfony-bundle-advanced",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/symfony-bundle-advanced.mdx",tags:[],version:"3.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1632775459,formattedLastUpdatedAt:"9/27/2021",frontMatter:{id:"symfony-bundle-advanced",title:"Symfony bundle: advanced usage",sidebar_label:"Symfony specific features"}},m=[{value:"Login and logout",id:"login-and-logout",children:[]},{value:"Schema and request security",id:"schema-and-request-security",children:[{value:"Login using the &quot;login&quot; mutation",id:"login-using-the-login-mutation",children:[]},{value:"Get the current user with the &quot;me&quot; query",id:"get-the-current-user-with-the-me-query",children:[]},{value:"Logout using the &quot;logout&quot; mutation",id:"logout-using-the-logout-mutation",children:[]}]},{value:"Injecting the Request",id:"injecting-the-request",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Symfony bundle comes with a number of features to ease the integration of GraphQLite in Symfony."),(0,o.kt)("h2",{id:"login-and-logout"},"Login and logout"),(0,o.kt)("p",null,'Out of the box, the GraphQLite bundle will expose a "login" and a "logout" mutation as well\nas a "me" query (that returns the current user).'),(0,o.kt)("p",null,'If you need to customize this behaviour, you can edit the "graphqlite.security" configuration key.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: auto # Default setting\n    enable_me: auto # Default setting\n")),(0,o.kt)("p",null,'By default, GraphQLite will enable "login" and "logout" mutations and the "me" query if the following conditions are met:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'the "security" bundle is installed and configured (with a security provider and encoder)'),(0,o.kt)("li",{parentName:"ul"},'the "session" support is enabled (via the "framework.session.enabled" key).')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: on\n")),(0,o.kt)("p",null,"By settings ",(0,o.kt)("inlineCode",{parentName:"p"},"enable_login=on"),", you are stating that you explicitly want the login/logout mutations.\nIf one of the dependencies is missing, an exception is thrown (unlike in default mode where the mutations\nare silently discarded)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: off\n")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"enable_login=off")," to disable the mutations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    firewall_name: main # default value\n")),(0,o.kt)("p",null,'By default, GraphQLite assumes that your firewall name is "main". This is the default value used in the\nSymfony security bundle so it is likely the value you are using. If for some reason you want to use\nanother firewall, configure the name with ',(0,o.kt)("inlineCode",{parentName:"p"},"graphqlite.security.firewall_name"),"."),(0,o.kt)("h2",{id:"schema-and-request-security"},"Schema and request security"),(0,o.kt)("p",null,"You can disable the introspection of your GraphQL API (for instance in production mode) using\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"introspection")," configuration properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    introspection: false\n")),(0,o.kt)("p",null,"You can set the maximum complexity and depth of your GraphQL queries using the ",(0,o.kt)("inlineCode",{parentName:"p"},"maximum_query_complexity"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"maximum_query_depth")," configuration properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    maximum_query_complexity: 314\n    maximum_query_depth: 42\n")),(0,o.kt)("h3",{id:"login-using-the-login-mutation"},'Login using the "login" mutation'),(0,o.kt)("p",null,"The mutation below will log-in a user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation login {\n  login(userName:"foo", password:"bar") {\n    userName\n    roles\n  }\n}\n')),(0,o.kt)("h3",{id:"get-the-current-user-with-the-me-query"},'Get the current user with the "me" query'),(0,o.kt)("p",null,'Retrieving the current user is easy with the "me" query:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  me {\n    userName\n    roles\n  }\n}\n")),(0,o.kt)("p",null,"In Symfony, user objects implement ",(0,o.kt)("inlineCode",{parentName:"p"},"Symfony\\Component\\Security\\Core\\User\\UserInterface"),".\nThis interface is automatically mapped to a type with 2 fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"userName: String!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"roles: [String!]!"))),(0,o.kt)("p",null,"If you want to get more fields, just add the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Type")," annotation to your user class:"),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass User implements UserInterface\n{\n    #[Field]\n    public function getEmail() : string\n    {\n        // ...\n    }\n\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass User implements UserInterface\n{\n    /**\n     * @Field\n     */\n    public function getEmail() : string\n    {\n        // ...\n    }\n\n}\n")))),(0,o.kt)("p",null,"You can now query this field using an ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#inline-fragments"},"inline fragment"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  me {\n    userName\n    roles\n    ... on User {\n      email\n    }\n  }\n}\n")),(0,o.kt)("h3",{id:"logout-using-the-logout-mutation"},'Logout using the "logout" mutation'),(0,o.kt)("p",null,'Use the "logout" mutation to log a user out'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation logout {\n  logout\n}\n")),(0,o.kt)("h2",{id:"injecting-the-request"},"Injecting the Request"),(0,o.kt)("p",null,"You can inject the Symfony Request object in any query/mutation/field."),(0,o.kt)("p",null,"Most of the time, getting the request object is irrelevant. Indeed, it is GraphQLite's job to parse this request and\nmanage it for you. Sometimes yet, fetching the request can be needed. In those cases, simply type-hint on the request\nin any parameter of your query/mutation/field."),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use Symfony\\Component\\HttpFoundation\\Request;\n\n#[Query]\npublic function getUser(int $id, Request $request): User\n{\n    // The $request object contains the Symfony Request.\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use Symfony\\Component\\HttpFoundation\\Request;\n\n/**\n * @Query\n */\npublic function getUser(int $id, Request $request): User\n{\n    // The $request object contains the Symfony Request.\n}\n")))))}f.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);