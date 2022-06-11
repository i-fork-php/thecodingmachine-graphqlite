"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5745],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(h,i(i({ref:n},s),{},{components:t})):a.createElement(h,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294),r=t(86010),l="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(87462),r=t(67294),l=t(86010),i=t(72389),o=t(67392),u=t(7094),p=t(12466),s="tabList__CuJ",c="tabItem_LNqP";function d(e){var n,t,i=e.lazy,d=e.block,m=e.defaultValue,h=e.values,f=e.groupId,g=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,o.l)(y,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(n=null!=m?m:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),N=T.tabGroupChoices,x=T.setTabGroupChoices,P=(0,r.useState)(k),w=P[0],E=P[1],$=[],S=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=N[f];null!=C&&C!==w&&y.some((function(e){return e.value===C}))&&E(C)}var I=function(e){var n=e.currentTarget,t=$.indexOf(n),a=y[t].value;a!==w&&(S(n),E(a),null!=f&&x(f,String(a)))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=$.indexOf(e.currentTarget)+1;t=null!=(a=$[r])?a:$[0];break;case"ArrowLeft":var l,i=$.indexOf(e.currentTarget)-1;t=null!=(l=$[i])?l:$[$.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},y.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return $.push(e)},onKeyDown:O,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function m(e){var n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},62417:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=t(65488),o=t(85162),u=["components"],p={id:"extend-type",title:"Extending a type",sidebar_label:"Extending a type"},s=void 0,c={unversionedId:"extend-type",id:"version-4.2/extend-type",title:"Extending a type",description:"Fields exposed in a GraphQL type do not need to be all part of the same class.",source:"@site/versioned_docs/version-4.2/extend-type.mdx",sourceDirName:".",slug:"/extend-type",permalink:"/docs/4.2/extend-type",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/extend-type.mdx",tags:[],version:"4.2",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1654917509,formattedLastUpdatedAt:"6/11/2022",frontMatter:{id:"extend-type",title:"Extending a type",sidebar_label:"Extending a type"},sidebar:"version-4.2/docs",previous:{title:"Autowiring services",permalink:"/docs/4.2/autowiring"},next:{title:"External type declaration",permalink:"/docs/4.2/external-type-declaration"}},d={},m=[],h={toc:m};function f(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Fields exposed in a GraphQL type do not need to be all part of the same class."),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"@ExtendType")," annotation to add additional fields to a type that is already declared."),(0,l.kt)("div",{class:"alert alert--info"},"Extending a type has nothing to do with type inheritance. If you are looking for a way to expose a class and its children classes, have a look at the ",(0,l.kt)("a",{href:"inheritance-interfaces"},"Inheritance")," section"),(0,l.kt)("p",null,"Let's assume you have a ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," class. In order to get the name of a product, there is no ",(0,l.kt)("inlineCode",{parentName:"p"},"getName()")," method in\nthe product because the name needs to be translated in the correct language. You have a ",(0,l.kt)("inlineCode",{parentName:"p"},"TranslationService")," to do that."),(0,l.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getId(): string\n    {\n        return $this->id;\n    }\n\n    #[Field]\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getId(): string\n    {\n        return $this->id;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"// You need to use a service to get the name of the product in the correct language.\n$name = $translationService->getProductName($productId, $language);\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"@ExtendType"),", you can add an additional ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," field to your product:"),(0,l.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\ExtendType;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n#[ExtendType(class: Product::class)]\nclass ProductType\n{\n    private $translationService;\n\n    public function __construct(TranslationServiceInterface $translationService)\n    {\n        $this->translationService = $translationService;\n    }\n\n    #[Field]\n    public function getName(Product $product, string $language): string\n    {\n        return $this->translationService->getProductName($product->getId(), $language);\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\ExtendType;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n/**\n * @ExtendType(class=Product::class)\n */\nclass ProductType\n{\n    private $translationService;\n\n    public function __construct(TranslationServiceInterface $translationService)\n    {\n        $this->translationService = $translationService;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getName(Product $product, string $language): string\n    {\n        return $this->translationService->getProductName($product->getId(), $language);\n    }\n}\n")))),(0,l.kt)("p",null,"Let's break this sample:"),(0,l.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"#[ExtendType(class: Product::class)]\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @ExtendType(class=Product::class)\n */\n")))),(0,l.kt)("p",null,"With the ",(0,l.kt)("inlineCode",{parentName:"p"},"@ExtendType")," annotation, we tell GraphQLite that we want to add fields in the GraphQL type mapped to\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," PHP class."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class ProductType\n{\n    private $translationService;\n\n    public function __construct(TranslationServiceInterface $translationService)\n    {\n        $this->translationService = $translationService;\n    }\n\n    // ...\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"ProductType")," class must be in the types namespace. You configured this namespace when you installed GraphQLite."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"ProductType")," class is actually a ",(0,l.kt)("strong",{parentName:"li"},"service"),". You can therefore inject dependencies in it (like the ",(0,l.kt)("inlineCode",{parentName:"li"},"$translationService")," in this example)")),(0,l.kt)("div",{class:"alert alert--warning"},(0,l.kt)("strong",null,"Heads up!")," The ",(0,l.kt)("code",null,"ProductType")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,l.kt)("br",null),(0,l.kt)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."),(0,l.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"#[Field]\npublic function getName(Product $product, string $language): string\n{\n    return $this->translationService->getProductName($product->getId(), $language);\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field()\n */\npublic function getName(Product $product, string $language): string\n{\n    return $this->translationService->getProductName($product->getId(), $language);\n}\n")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@Field"),' annotation is used to add the "name" field to the ',(0,l.kt)("inlineCode",{parentName:"p"},"Product")," type."),(0,l.kt)("p",null,'Take a close look at the signature. The first parameter is the "resolved object" we are working on.\nAny additional parameters are used as arguments.'),(0,l.kt)("p",null,'Using the "',(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"Type language"),'" notation, we defined a type extension for\nthe GraphQL "Product" type:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"Extend type Product {\n    name(language: !String): String!\n}\n")),(0,l.kt)("div",{class:"alert alert--success"},"Type extension is a very powerful tool. Use it to add fields that needs to be computed from services not available in the entity."))}f.isMDXComponent=!0}}]);