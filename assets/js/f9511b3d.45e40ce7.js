"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4274],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),r=n(67294),l=n(72389),i=n(79443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(83039),p=n(86010),s="tabItem_vU9c";function d(e){var t,n,a,l=e.lazy,i=e.block,d=e.defaultValue,c=e.values,h=e.groupId,f=e.className,m=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=c?c:m.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,u.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=m[0])?void 0:a.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=o(),g=k.tabGroupChoices,T=k.setTabGroupChoices,x=(0,r.useState)(b),F=x[0],N=x[1],w=[],_=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=g[h];null!=E&&E!==F&&y.some((function(e){return e.value===E}))&&N(E)}var $=function(e){var t=e.currentTarget,n=w.indexOf(t),a=y[n].value;a!==F&&(_(t),N(a),null!=h&&T(h,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},f)},y.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:F===t?0:-1,"aria-selected":F===t,className:(0,p.Z)("tabs__item",s,{"tabs__item--active":F===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:$,onClick:$},null!=n?n:t)}))),l?(0,r.cloneElement)(m.filter((function(e){return e.props.value===F}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==F})}))))}function c(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},10592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return f}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(55064),o=n(58215),u=["components"],p={id:"extend_input_type",title:"Extending an input type",sidebar_label:"Extending an input type"},s=void 0,d={unversionedId:"extend_input_type",id:"version-3.0/extend_input_type",isDocsHomePage:!1,title:"Extending an input type",description:"Available in GraphQLite 4.0+",source:"@site/versioned_docs/version-3.0/extend_input_type.mdx",sourceDirName:".",slug:"/extend_input_type",permalink:"/docs/3.0/extend_input_type",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/extend_input_type.mdx",tags:[],version:"3.0",lastUpdatedBy:"michael-vostrikov",lastUpdatedAt:1636673466,formattedLastUpdatedAt:"11/11/2021",frontMatter:{id:"extend_input_type",title:"Extending an input type",sidebar_label:"Extending an input type"}},c=[],h={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("small",null,"Available in GraphQLite 4.0+"),(0,l.kt)("div",{class:"alert alert--info"},"If you are not familiar with the ",(0,l.kt)("code",null,"@Factory")," tag, ",(0,l.kt)("a",{href:"input-types"},'read first the "input types" guide'),"."),(0,l.kt)("p",null,"Fields exposed in a GraphQL input type do not need to be all part of the factory method."),(0,l.kt)("p",null,"Just like with output type (that can be ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.0/extend_type"},"extended using the ",(0,l.kt)("inlineCode",{parentName:"a"},"ExtendType")," annotation"),"), you can extend/modify\nan input type using the ",(0,l.kt)("inlineCode",{parentName:"p"},"@Decorate")," annotation."),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"@Decorate")," annotation to add additional fields to an input type that is already declared by a ",(0,l.kt)("inlineCode",{parentName:"p"},"@Factory")," annotation,\nor to modify the returned object."),(0,l.kt)("div",{class:"alert alert--info"},"The ",(0,l.kt)("code",null,"@Decorate")," annotation is very useful in scenarios where you cannot touch the ",(0,l.kt)("code",null,"@Factory")," method. This can happen if the ",(0,l.kt)("code",null,"@Factory")," method is defined in a third-party library or if the ",(0,l.kt)("code",null,"@Factory")," method is part of auto-generated code."),(0,l.kt)("p",null,"Let's assume you have a ",(0,l.kt)("inlineCode",{parentName:"p"},"Filter")," class used as an input type. You most certainly have a ",(0,l.kt)("inlineCode",{parentName:"p"},"@Factory")," to create the input type."),(0,l.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class MyFactory\n{\n    #[Factory]\n    public function createFilter(string $name): Filter\n    {\n        // Let's assume you have a flexible 'Filter' class that can accept any kind of filter\n        $filter = new Filter();\n        $filter->addFilter('name', $name);\n        return $filter;\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class MyFactory\n{\n    /**\n     * @Factory()\n     */\n    public function createFilter(string $name): Filter\n    {\n        // Let's assume you have a flexible 'Filter' class that can accept any kind of filter\n        $filter = new Filter();\n        $filter->addFilter('name', $name);\n        return $filter;\n    }\n}\n")))),(0,l.kt)("p",null,"Assuming you ",(0,l.kt)("strong",{parentName:"p"},"cannot"),' modify the code of this factory, you can still modify the GraphQL input type generated by\nadding a "decorator" around the factory.'),(0,l.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class MyDecorator\n{\n    #[Decorate(inputTypeName: \"FilterInput\")]\n    public function addTypeFilter(Filter $filter, string $type): Filter\n    {\n        $filter->addFilter('type', $type);\n        return $filter;\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class MyDecorator\n{\n    /**\n     * @Decorate(inputTypeName=\"FilterInput\")\n     */\n    public function addTypeFilter(Filter $filter, string $type): Filter\n    {\n        $filter->addFilter('type', $type);\n        return $filter;\n    }\n}\n")))),(0,l.kt)("p",null,'In the example above, the "Filter" input type is modified. We add an additional "type" field to the input type.'),(0,l.kt)("p",null,"A few things to notice:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The decorator takes the object generated by the factory as first argument"),(0,l.kt)("li",{parentName:"ul"},"The decorator MUST return an object of the same type (or a sub-type)"),(0,l.kt)("li",{parentName:"ul"},"The decorator CAN contain additional parameters. They will be added to the fields of the GraphQL input type."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"@Decorate")," annotation must contain a ",(0,l.kt)("inlineCode",{parentName:"li"},"inputTypeName")," attribute that contains the name of the GraphQL input type\nthat is decorated. If you did not specify this name in the ",(0,l.kt)("inlineCode",{parentName:"li"},"@Factory"),' annotation, this is by default the name of the\nPHP class + "Input" (for instance: "Filter" => "FilterInput")')),(0,l.kt)("div",{class:"alert alert--warning"},(0,l.kt)("strong",null,"Heads up!")," The ",(0,l.kt)("code",null,"MyDecorator")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,l.kt)("br",null),(0,l.kt)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."))}f.isMDXComponent=!0}}]);