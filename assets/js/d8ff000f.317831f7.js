"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8845],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:e},c),{},{components:n})):a.createElement(m,i({ref:e},c))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(t,e,n){var a=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},26396:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(87462),r=n(67294),o=n(72389),i=n(79443);var l=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},s=n(63616),u=n(86010),c="tabItem_vU9c";function p(t){var e,n,o,i=t.lazy,p=t.block,d=t.defaultValue,h=t.values,m=t.groupId,f=t.className,b=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),g=(0,s.lx)(v,(function(t,e){return t.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(e=null!=d?d:null==(n=b.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(o=b[0])?void 0:o.props.value;if(null!==y&&!v.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),w=k.tabGroupChoices,P=k.setTabGroupChoices,T=(0,r.useState)(y),A=T[0],N=T[1],C=[],L=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=w[m];null!=D&&D!==A&&v.some((function(t){return t.value===D}))&&N(D)}var O=function(t){var e=t.currentTarget,n=C.indexOf(e),a=v[n].value;a!==A&&(L(e),N(a),null!=m&&P(m,a))},E=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=C.indexOf(t.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(t.currentTarget)-1;n=C[r]||C[C.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},f)},v.map((function(t){var e=t.value,n=t.label,o=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===e?0:-1,"aria-selected":A===e,key:e,ref:function(t){return C.push(t)},onKeyDown:E,onFocus:O,onClick:O},o,{className:(0,u.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":A===e})}),null!=n?n:e)}))),i?(0,r.cloneElement)(b.filter((function(t){return t.props.value===A}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==A})}))))}function d(t){var e=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(e)},t))}},86912:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(26396),l=n(58215),s=["components"],u={id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"},c=void 0,p={unversionedId:"doctrine-annotations-attributes",id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",description:"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+).",source:"@site/docs/doctrine-annotations-attributes.mdx",sourceDirName:".",slug:"/doctrine-annotations-attributes",permalink:"/docs/next/doctrine-annotations-attributes",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/doctrine-annotations-attributes.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1649105785,formattedLastUpdatedAt:"4/4/2022",frontMatter:{id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"},sidebar:"docs",previous:{title:"Migrating",permalink:"/docs/next/migrating"},next:{title:"Annotations reference",permalink:"/docs/next/annotations-reference"}},d=[{value:"Doctrine annotations",id:"doctrine-annotations",children:[],level:2},{value:"PHP 8 attributes",id:"php-8-attributes",children:[],level:2},{value:"Migrating from Doctrine annotations to PHP 8 attributes",id:"migrating-from-doctrine-annotations-to-php-8-attributes",children:[],level:2}],h={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+)."),(0,o.kt)("h2",{id:"doctrine-annotations"},"Doctrine annotations"),(0,o.kt)("div",{class:"alert alert--warning"},(0,o.kt)("strong",null,"Deprecated!")," Doctrine annotations are deprecated in favor of native PHP 8 attributes. Support will be dropped in a future release."),(0,o.kt)("p",null,'Historically, attributes were not available in PHP and PHP developers had to "trick" PHP to get annotation support.  This was the purpose of the ',(0,o.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-annotations/en/latest/index.html"},"doctrine/annotation")," library."),(0,o.kt)("p",null,"Using Doctrine annotations, you write annotations in your docblocks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type\n */\nclass MyType\n{\n}\n")),(0,o.kt)("p",null,"Please note that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The annotation is added in a ",(0,o.kt)("strong",{parentName:"li"},"docblock"),' (a comment starting with "',(0,o.kt)("inlineCode",{parentName:"li"},"/**"),'")'),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Type")," part is actually a class. It must be declared in the ",(0,o.kt)("inlineCode",{parentName:"li"},"use")," statements at the top of your file.")),(0,o.kt)("div",{class:"alert alert--info"},(0,o.kt)("strong",null,"Heads up!"),(0,o.kt)("p",null,"Some IDEs provide support for Doctrine annotations:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"PhpStorm via the ",(0,o.kt)("a",{href:"https://plugins.jetbrains.com/plugin/7320-php-annotations"},"PHP Annotations Plugin")),(0,o.kt)("li",null,"Eclipse via the ",(0,o.kt)("a",{href:"https://marketplace.eclipse.org/content/symfony-plugin"},"Symfony 2 Plugin")),(0,o.kt)("li",null,"Netbeans has native support")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"We strongly recommend using an IDE that has Doctrine annotations support.\n"))),(0,o.kt)("h2",{id:"php-8-attributes"},"PHP 8 attributes"),(0,o.kt)("p",null,'Starting with PHP 8, PHP got native annotations support. They are actually called "attributes" in the PHP world.'),(0,o.kt)("p",null,"The same code can be written this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass MyType\n{\n}\n")),(0,o.kt)("p",null,"GraphQLite v4.1+ has support for PHP 8 attributes."),(0,o.kt)("p",null,"The Doctrine annotation class and the PHP 8 attribute class is ",(0,o.kt)("strong",{parentName:"p"},"the same")," (so you will be using the same ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," statement at the top of your file)."),(0,o.kt)("p",null,"They support the same attributes too."),(0,o.kt)("p",null,"A few notable differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PHP 8 attributes do not support nested attributes (unlike Doctrine annotations). This means there is no equivalent to the ",(0,o.kt)("inlineCode",{parentName:"li"},"annotations")," attribute of ",(0,o.kt)("inlineCode",{parentName:"li"},"@MagicField")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"@SourceField"),"."),(0,o.kt)("li",{parentName:"ul"},'PHP 8 attributes can be written at the parameter level. Any attribute targeting a "parameter" must be written at the parameter level.')),(0,o.kt)("p",null,"Let's take an example with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/autowiring"},(0,o.kt)("inlineCode",{parentName:"a"},"#Autowire")," attribute"),":"),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"#[Field]\npublic function getProduct(#[Autowire] ProductRepository $productRepository) : Product {\n    //...\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Field\n * @Autowire(for="$productRepository")\n */\npublic function getProduct(ProductRepository $productRepository) : Product {\n    //...\n}\n')))),(0,o.kt)("h2",{id:"migrating-from-doctrine-annotations-to-php-8-attributes"},"Migrating from Doctrine annotations to PHP 8 attributes"),(0,o.kt)("p",null,"The good news is that you can easily migrate from Doctrine annotations to PHP 8 attributes using the amazing, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rectorphp/rector"},"Rector library"),".  To do so, you'll want to use the following rector configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="rector.php"',title:'"rector.php"'},"<?php\n\nuse Rector\\Core\\Configuration\\Option;\nuse Rector\\Php80\\Rector\\Class_\\AnnotationToAttributeRector;\nuse Rector\\Php80\\ValueObject\\AnnotationToAttribute;\nuse Rector\\Set\\ValueObject\\SetList;\nuse Symfony\\Component\\DependencyInjection\\Loader\\Configurator\\ContainerConfigurator;\nuse TheCodingMachine\\GraphQLite\\Annotations as GraphQLite;\n\nreturn static function (ContainerConfigurator $containerConfigurator): void {\n    // Here we can define, what sets of rules will be applied\n    // tip: use \"SetList\" class to autocomplete sets\n    // $containerConfigurator->import(SetList::CODE_QUALITY);\n\n    // Set parameters\n    $parameters = $containerConfigurator->parameters();\n    $parameters->set(Option::PATHS, [\n        __DIR__ . '/src',\n        __DIR__ . '/tests',\n    ]);\n\n    $services = $containerConfigurator->services();\n\n    // @Validate and @Assertion are part of other libraries, include if necessary\n    $services->set(AnnotationToAttributeRector::class)\n        ->configure([\n            new AnnotationToAttribute(GraphQLite\\Query::class),\n            new AnnotationToAttribute(GraphQLite\\Mutation::class),\n            new AnnotationToAttribute(GraphQLite\\Type::class),\n            new AnnotationToAttribute(GraphQLite\\ExtendType::class),\n            new AnnotationToAttribute(GraphQLite\\Input::class),\n            new AnnotationToAttribute(GraphQLite\\Field::class),\n            new AnnotationToAttribute(GraphQLite\\SourceField::class),\n            new AnnotationToAttribute(GraphQLite\\MagicField::class),\n            new AnnotationToAttribute(GraphQLite\\Logged::class),\n            new AnnotationToAttribute(GraphQLite\\Right::class),\n            new AnnotationToAttribute(GraphQLite\\FailWith::class),\n            new AnnotationToAttribute(GraphQLite\\HideIfUnauthorized::class),\n            new AnnotationToAttribute(GraphQLite\\InjectUser::class),\n            new AnnotationToAttribute(GraphQLite\\Security::class),\n            new AnnotationToAttribute(GraphQLite\\Factory::class),\n            new AnnotationToAttribute(GraphQLite\\UseInputType::class),\n            new AnnotationToAttribute(GraphQLite\\Decorate::class),\n            new AnnotationToAttribute(GraphQLite\\Autowire::class),\n            new AnnotationToAttribute(GraphQLite\\HideParameter::class),\n            new AnnotationToAttribute(GraphQLite\\EnumType::class),\n        ]);\n};\n")))}m.isMDXComponent=!0}}]);