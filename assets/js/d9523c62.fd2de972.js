"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1126],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},s),{},{components:n})):a.createElement(m,r({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8514:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={id:"external_type_declaration",title:"External type declaration",sidebar_label:"External type declaration",original_id:"external_type_declaration"},c=void 0,p={unversionedId:"external_type_declaration",id:"version-4.0/external_type_declaration",title:"External type declaration",description:"In some cases, you cannot or do not want to put an annotation on a domain class.",source:"@site/versioned_docs/version-4.0/external_type_declaration.mdx",sourceDirName:".",slug:"/external_type_declaration",permalink:"/docs/4.0/external_type_declaration",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/external_type_declaration.mdx",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1654917509,formattedLastUpdatedAt:"6/11/2022",frontMatter:{id:"external_type_declaration",title:"External type declaration",sidebar_label:"External type declaration",original_id:"external_type_declaration"},sidebar:"version-4.0/docs",previous:{title:"Extending a type",permalink:"/docs/4.0/extend_type"},next:{title:"Input types",permalink:"/docs/4.0/input-types"}},s={},u=[{value:"<code>@Type</code> annotation with the <code>class</code> attribute",id:"type-annotation-with-the-class-attribute",level:2},{value:"<code>@SourceField</code> annotation",id:"sourcefield-annotation",level:2},{value:"<code>@MagicField</code> annotation",id:"magicfield-annotation",level:2},{value:"Authentication and authorization",id:"authentication-and-authorization",level:3},{value:"Declaring fields dynamically (without annotations)",id:"declaring-fields-dynamically-without-annotations",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In some cases, you cannot or do not want to put an annotation on a domain class."),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The class you want to annotate is part of a third party library and you cannot modify it"),(0,i.kt)("li",{parentName:"ul"},"You are doing domain-driven design and don't want to clutter your domain object with annotations from the view layer"),(0,i.kt)("li",{parentName:"ul"},"etc.")),(0,i.kt)("h2",{id:"type-annotation-with-the-class-attribute"},(0,i.kt)("inlineCode",{parentName:"h2"},"@Type")," annotation with the ",(0,i.kt)("inlineCode",{parentName:"h2"},"class")," attribute"),(0,i.kt)("p",null,"GraphQLite allows you to use a ",(0,i.kt)("em",{parentName:"p"},"proxy")," class thanks to the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Type")," annotation with the ",(0,i.kt)("inlineCode",{parentName:"p"},"class")," attribute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n */\nclass ProductType\n{\n    /**\n     * @Field()\n     */\n    public function getId(Product $product): string\n    {\n        return $product->getId();\n    }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ProductType")," class must be in the ",(0,i.kt)("em",{parentName:"p"},"types")," namespace. You configured this namespace when you installed GraphQLite."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ProductType")," class is actually a ",(0,i.kt)("strong",{parentName:"p"},"service"),". You can therefore inject dependencies in it."),(0,i.kt)("div",{class:"alert alert--warning"},(0,i.kt)("strong",null,"Heads up!")," The ",(0,i.kt)("code",null,"ProductType")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,i.kt)("br",null),(0,i.kt)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."),(0,i.kt)("p",null,"In methods with a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field")," annotation, the first parameter is the ",(0,i.kt)("em",{parentName:"p"},"resolved object")," we are working on. Any additional parameters are used as arguments."),(0,i.kt)("h2",{id:"sourcefield-annotation"},(0,i.kt)("inlineCode",{parentName:"h2"},"@SourceField")," annotation"),(0,i.kt)("p",null,"If you don't want to rewrite all ",(0,i.kt)("em",{parentName:"p"},"getters")," of your base class, you may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@SourceField")," annotation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n * @SourceField(name="name")\n * @SourceField(name="price")\n */\nclass ProductType\n{\n}\n')),(0,i.kt)("p",null,"By doing so, you let GraphQLite know that the type exposes the ",(0,i.kt)("inlineCode",{parentName:"p"},"getName")," method of the underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," object."),(0,i.kt)("p",null,"Internally, GraphQLite will look for methods named ",(0,i.kt)("inlineCode",{parentName:"p"},"name()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getName()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"isName()"),")."),(0,i.kt)("h2",{id:"magicfield-annotation"},(0,i.kt)("inlineCode",{parentName:"h2"},"@MagicField")," annotation"),(0,i.kt)("p",null,"If your object has no getters, but instead uses magic properties (using the magic ",(0,i.kt)("inlineCode",{parentName:"p"},"__get")," method), you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@MagicField")," annotation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n/**\n * @Type()\n * @MagicField(name="name", outputType="String!")\n * @MagicField(name="price", outputType="Float")\n */\nclass ProductType\n{\n    public function __get(string $property) {\n        // return some magic property\n    }\n}\n')),(0,i.kt)("p",null,'By doing so, you let GraphQLite know that the type exposes "name" and the "price" magic properties of the underlying ',(0,i.kt)("inlineCode",{parentName:"p"},"Product")," object."),(0,i.kt)("p",null,"This is particularly useful in frameworks like Laravel, where Eloquent is making a very wide use of such properties."),(0,i.kt)("p",null,"Please note that GraphQLite has no way to know the type of a magic property. Therefore, you have specify the GraphQL type\nof each property manually."),(0,i.kt)("h3",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,i.kt)("p",null,'You may also check for logged users or users with a specific right using the "annotations" property.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\nuse TheCodingMachine\\GraphQLite\\Annotations\\FailWith;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n * @SourceField(name="name")\n * @SourceField(name="price", annotations={@Logged, @Right(name="CAN_ACCESS_Price", @FailWith(null)}))\n */\nclass ProductType extends AbstractAnnotatedObjectType\n{\n}\n')),(0,i.kt)("p",null,"Any annotations described in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.0/authentication_authorization"},"Authentication and authorization page")," can be used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@SourceField"),' "annotations" attribute.'),(0,i.kt)("h2",{id:"declaring-fields-dynamically-without-annotations"},"Declaring fields dynamically (without annotations)"),(0,i.kt)("p",null,"In some very particular cases, you might not know exactly the list of ",(0,i.kt)("inlineCode",{parentName:"p"},"@SourceField")," annotations at development time.\nIf you need to decide the list of ",(0,i.kt)("inlineCode",{parentName:"p"},"@SourceField")," at runtime, you can implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"FromSourceFieldsInterface"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\FromSourceFieldsInterface;\n\n/**\n * @Type(class=Product::class)\n */\nclass ProductType implements FromSourceFieldsInterface\n{\n    /**\n     * Dynamically returns the array of source fields\n     * to be fetched from the original object.\n     *\n     * @return SourceFieldInterface[]\n     */\n    public function getSourceFields(): array\n    {\n        // You may want to enable fields conditionally based on feature flags...\n        if (ENABLE_STATUS_GLOBALLY) {\n            return [\n                new SourceField(['name'=>'status', 'logged'=>true]),\n            ];\n        } else {\n            return [];\n        }\n    }\n}\n")))}h.isMDXComponent=!0}}]);