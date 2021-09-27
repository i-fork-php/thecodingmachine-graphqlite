"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4623],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return t?a.createElement(m,o(o({ref:n},s),{},{components:t})):a.createElement(m,o({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(67294),r=t(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(86010),l="tabItem_1uMI",u="tabItemActive_2DSg";var c=37,s=39;var p=function(e){var n=e.lazy,t=e.block,r=e.defaultValue,p=e.values,d=e.groupId,h=e.className,m=i(),y=m.tabGroupChoices,f=m.setTabGroupChoices,g=(0,a.useState)(r),k=g[0],b=g[1],v=a.Children.toArray(e.children),T=[];if(null!=d){var w=y[d];null!=w&&w!==k&&p.some((function(e){return e.value===w}))&&b(w)}var N=function(e){var n=e.currentTarget,t=T.indexOf(n),a=p[t].value;b(a),null!=d&&(f(d,a),setTimeout((function(){var e,t,a,r,i,o,l,c;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,t>=0&&i<=c&&r<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},P=function(e){var n,t;switch(e.keyCode){case s:var a=T.indexOf(e.target)+1;t=T[a]||T[0];break;case c:var r=T.indexOf(e.target)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},h)},p.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":k===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:N,onClick:N},t)}))),n?(0,a.cloneElement)(v.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},79443:function(e,n,t){var a=(0,t(67294).createContext)(void 0);n.Z=a},1349:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=t(55064),l=t(58215),u=["components"],c={id:"external-type-declaration",title:"External type declaration",sidebar_label:"External type declaration"},s=void 0,p={unversionedId:"external-type-declaration",id:"version-4.3/external-type-declaration",isDocsHomePage:!1,title:"External type declaration",description:"In some cases, you cannot or do not want to put an annotation on a domain class.",source:"@site/versioned_docs/version-4.3/external-type-declaration.mdx",sourceDirName:".",slug:"/external-type-declaration",permalink:"/docs/external-type-declaration",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/external-type-declaration.mdx",tags:[],version:"4.3",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1632775459,formattedLastUpdatedAt:"9/27/2021",frontMatter:{id:"external-type-declaration",title:"External type declaration",sidebar_label:"External type declaration"},sidebar:"version-4.3/docs",previous:{title:"Extending a type",permalink:"/docs/extend-type"},next:{title:"Input types",permalink:"/docs/input-types"}},d=[{value:"<code>@Type</code> annotation with the <code>class</code> attribute",id:"type-annotation-with-the-class-attribute",children:[]},{value:"<code>@SourceField</code> annotation",id:"sourcefield-annotation",children:[]},{value:"<code>@MagicField</code> annotation",id:"magicfield-annotation",children:[{value:"Authentication and authorization",id:"authentication-and-authorization",children:[]}]},{value:"Declaring fields dynamically (without annotations)",id:"declaring-fields-dynamically-without-annotations",children:[]}],h={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In some cases, you cannot or do not want to put an annotation on a domain class."),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The class you want to annotate is part of a third party library and you cannot modify it"),(0,i.kt)("li",{parentName:"ul"},"You are doing domain-driven design and don't want to clutter your domain object with annotations from the view layer"),(0,i.kt)("li",{parentName:"ul"},"etc.")),(0,i.kt)("h2",{id:"type-annotation-with-the-class-attribute"},(0,i.kt)("inlineCode",{parentName:"h2"},"@Type")," annotation with the ",(0,i.kt)("inlineCode",{parentName:"h2"},"class")," attribute"),(0,i.kt)("p",null,"GraphQLite allows you to use a ",(0,i.kt)("em",{parentName:"p"},"proxy")," class thanks to the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Type")," annotation with the ",(0,i.kt)("inlineCode",{parentName:"p"},"class")," attribute:"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n#[Type(class: Product::class)]\nclass ProductType\n{\n    #[Field]\n    public function getId(Product $product): string\n    {\n        return $product->getId();\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n */\nclass ProductType\n{\n    /**\n     * @Field()\n     */\n    public function getId(Product $product): string\n    {\n        return $product->getId();\n    }\n}\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ProductType")," class must be in the ",(0,i.kt)("em",{parentName:"p"},"types")," namespace. You configured this namespace when you installed GraphQLite."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ProductType")," class is actually a ",(0,i.kt)("strong",{parentName:"p"},"service"),". You can therefore inject dependencies in it."),(0,i.kt)("div",{class:"alert alert--warning"},(0,i.kt)("strong",null,"Heads up!")," The ",(0,i.kt)("code",null,"ProductType")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,i.kt)("br",null),(0,i.kt)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."),(0,i.kt)("p",null,"In methods with a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field")," annotation, the first parameter is the ",(0,i.kt)("em",{parentName:"p"},"resolved object")," we are working on. Any additional parameters are used as arguments."),(0,i.kt)("h2",{id:"sourcefield-annotation"},(0,i.kt)("inlineCode",{parentName:"h2"},"@SourceField")," annotation"),(0,i.kt)("p",null,"If you don't want to rewrite all ",(0,i.kt)("em",{parentName:"p"},"getters")," of your base class, you may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@SourceField")," annotation:"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n#[Type(class: Product::class)]\n#[SourceField(name: "name")]\n#[SourceField(name: "price")]\nclass ProductType\n{\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n * @SourceField(name="name")\n * @SourceField(name="price")\n */\nclass ProductType\n{\n}\n')))),(0,i.kt)("p",null,"By doing so, you let GraphQLite know that the type exposes the ",(0,i.kt)("inlineCode",{parentName:"p"},"getName")," method of the underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," object."),(0,i.kt)("p",null,"Internally, GraphQLite will look for methods named ",(0,i.kt)("inlineCode",{parentName:"p"},"name()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getName()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"isName()"),")."),(0,i.kt)("h2",{id:"magicfield-annotation"},(0,i.kt)("inlineCode",{parentName:"h2"},"@MagicField")," annotation"),(0,i.kt)("p",null,"If your object has no getters, but instead uses magic properties (using the magic ",(0,i.kt)("inlineCode",{parentName:"p"},"__get")," method), you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@MagicField")," annotation:"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n#[Type]\n#[MagicField(name: "name", outputType: "String!")]\n#[MagicField(name: "price", outputType: "Float")]\nclass ProductType\n{\n    public function __get(string $property) {\n        // return some magic property\n    }\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n/**\n * @Type()\n * @MagicField(name="name", outputType="String!")\n * @MagicField(name="price", outputType="Float")\n */\nclass ProductType\n{\n    public function __get(string $property) {\n        // return some magic property\n    }\n}\n')))),(0,i.kt)("p",null,'By doing so, you let GraphQLite know that the type exposes "name" and the "price" magic properties of the underlying ',(0,i.kt)("inlineCode",{parentName:"p"},"Product")," object."),(0,i.kt)("p",null,"This is particularly useful in frameworks like Laravel, where Eloquent is making a very wide use of such properties."),(0,i.kt)("p",null,"Please note that GraphQLite has no way to know the type of a magic property. Therefore, you have specify the GraphQL type\nof each property manually."),(0,i.kt)("h3",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,i.kt)("p",null,'You may also check for logged users or users with a specific right using the "annotations" property.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\nuse TheCodingMachine\\GraphQLite\\Annotations\\FailWith;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n * @SourceField(name="name")\n * @SourceField(name="price", annotations={@Logged, @Right(name="CAN_ACCESS_Price", @FailWith(null)}))\n */\nclass ProductType extends AbstractAnnotatedObjectType\n{\n}\n')),(0,i.kt)("p",null,"Any annotations described in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/authentication-authorization"},"Authentication and authorization page"),", or any annotation this is actually a ",(0,i.kt)("a",{parentName:"p",href:"/docs/field-middlewares"},'"field middleware"')," can be used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@SourceField"),' "annotations" attribute.'),(0,i.kt)("div",{class:"alert alert--warning"},(0,i.kt)("strong",null,"Heads up!"),' The "annotation" attribute in @SourceField and @MagicField is only available as a ',(0,i.kt)("strong",null,"Doctrine annotations"),". You cannot use it in PHP 8 attributes (because PHP 8 attributes cannot be nested)"),(0,i.kt)("h2",{id:"declaring-fields-dynamically-without-annotations"},"Declaring fields dynamically (without annotations)"),(0,i.kt)("p",null,"In some very particular cases, you might not know exactly the list of ",(0,i.kt)("inlineCode",{parentName:"p"},"@SourceField")," annotations at development time.\nIf you need to decide the list of ",(0,i.kt)("inlineCode",{parentName:"p"},"@SourceField")," at runtime, you can implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"FromSourceFieldsInterface"),":"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\FromSourceFieldsInterface;\n\n#[Type(class: Product::class)]\nclass ProductType implements FromSourceFieldsInterface\n{\n    /**\n     * Dynamically returns the array of source fields\n     * to be fetched from the original object.\n     *\n     * @return SourceFieldInterface[]\n     */\n    public function getSourceFields(): array\n    {\n        // You may want to enable fields conditionally based on feature flags...\n        if (ENABLE_STATUS_GLOBALLY) {\n            return [\n                new SourceField(['name'=>'status', 'logged'=>true]),\n            ];\n        } else {\n            return [];\n        }\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\FromSourceFieldsInterface;\n\n/**\n * @Type(class=Product::class)\n */\nclass ProductType implements FromSourceFieldsInterface\n{\n    /**\n     * Dynamically returns the array of source fields\n     * to be fetched from the original object.\n     *\n     * @return SourceFieldInterface[]\n     */\n    public function getSourceFields(): array\n    {\n        // You may want to enable fields conditionally based on feature flags...\n        if (ENABLE_STATUS_GLOBALLY) {\n            return [\n                new SourceField(['name'=>'status', 'logged'=>true]),\n            ];\n        } else {\n            return [];\n        }\n    }\n}\n")))))}m.isMDXComponent=!0},86010:function(e,n,t){function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);