"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5091],{53554:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),l=["components"],o={id:"changelog",title:"Changelog",sidebar_label:"Changelog"},d=void 0,p={unversionedId:"changelog",id:"version-4.2/changelog",isDocsHomePage:!1,title:"Changelog",description:"4.2.0",source:"@site/versioned_docs/version-4.2/CHANGELOG.md",sourceDirName:".",slug:"/changelog",permalink:"/docs/4.2/changelog",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/CHANGELOG.md",tags:[],version:"4.2",lastUpdatedBy:"michael-vostrikov",lastUpdatedAt:1636673466,formattedLastUpdatedAt:"11/11/2021",frontMatter:{id:"changelog",title:"Changelog",sidebar_label:"Changelog"},sidebar:"version-4.2/docs",previous:{title:"Semantic versioning",permalink:"/docs/4.2/semver"}},s=[{value:"4.2.0",id:"420",children:[{value:"Breaking change:",id:"breaking-change",children:[],level:4},{value:"New features:",id:"new-features",children:[],level:4}],level:2},{value:"4.1.0",id:"410",children:[{value:"Breaking change:",id:"breaking-change-1",children:[],level:4},{value:"New features:",id:"new-features-1",children:[],level:4},{value:"Minor changes:",id:"minor-changes",children:[],level:4},{value:"Miscellaneous:",id:"miscellaneous",children:[],level:4}],level:2},{value:"4.0.0",id:"400",children:[{value:"New features:",id:"new-features-2",children:[],level:4},{value:"Symfony:",id:"symfony",children:[],level:4},{value:"Laravel:",id:"laravel",children:[],level:4},{value:"Internals:",id:"internals",children:[],level:4}],level:2}],u={toc:s};function c(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"420"},"4.2.0"),(0,r.kt)("h4",{id:"breaking-change"},"Breaking change:"),(0,r.kt)("p",null,"The method signature for ",(0,r.kt)("inlineCode",{parentName:"p"},"toGraphQLOutputType")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"toGraphQLInputType")," have been changed to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @param \\ReflectionMethod|\\ReflectionProperty $reflector\n */\npublic function toGraphQLOutputType(Type $type, ?OutputType $subType, $reflector, DocBlock $docBlockObj): OutputType;\n\n/**\n * @param \\ReflectionMethod|\\ReflectionProperty $reflector\n */\npublic function toGraphQLInputType(Type $type, ?InputType $subType, string $argumentName, $reflector, DocBlock $docBlockObj): InputType;\n")),(0,r.kt)("h4",{id:"new-features"},"New features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/4.2/annotations-reference#input-annotation"},"@Input")," annotation is introduced as an alternative to ",(0,r.kt)("inlineCode",{parentName:"li"},"@Factory"),". Now GraphQL input type can be created in the same manner as ",(0,r.kt)("inlineCode",{parentName:"li"},"@Type")," in combination with ",(0,r.kt)("inlineCode",{parentName:"li"},"@Field")," - ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.2/input-types#input-annotation"},"example"),"."),(0,r.kt)("li",{parentName:"ul"},"New attributes has been added to ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.2/annotations-reference#field-annotation"},"@Field")," annotation: ",(0,r.kt)("inlineCode",{parentName:"li"},"for"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"inputType")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"description"),"."),(0,r.kt)("li",{parentName:"ul"},"The following annotations now can be applied to class properties directly: ",(0,r.kt)("inlineCode",{parentName:"li"},"@Field"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"@Logged"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"@Right"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"@FailWith"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"@HideIfUnauthorized")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"@Security"),".")),(0,r.kt)("h2",{id:"410"},"4.1.0"),(0,r.kt)("h4",{id:"breaking-change-1"},"Breaking change:"),(0,r.kt)("p",null,"There is one breaking change introduced in the minor version (this was important to allow PHP 8 compatibility)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"ecodev/graphql-upload"),' package (used to get support for file uploads in GraphQL input types) is now a "recommended" dependency only.\nIf you are using GraphQL file uploads, you need to add ',(0,r.kt)("inlineCode",{parentName:"li"},"ecodev/graphql-upload")," to your ",(0,r.kt)("inlineCode",{parentName:"li"},"composer.json"),".")),(0,r.kt)("h4",{id:"new-features-1"},"New features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All annotations can now be accessed as PHP 8 attributes"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"@deprecated")," annotation in your PHP code translates into deprecated fields in your GraphQL schema"),(0,r.kt)("li",{parentName:"ul"},"You can now specify the GraphQL name of the Enum types you define"),(0,r.kt)("li",{parentName:"ul"},"Added the possibility to inject pure Webonyx objects in GraphQLite schema")),(0,r.kt)("h4",{id:"minor-changes"},"Minor changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Migrated from ",(0,r.kt)("inlineCode",{parentName:"li"},"zend/diactoros")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"laminas/diactoros")),(0,r.kt)("li",{parentName:"ul"},"Making the annotation cache directory configurable")),(0,r.kt)("h4",{id:"miscellaneous"},"Miscellaneous:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Migrated from Travis to Github actions")),(0,r.kt)("h2",{id:"400"},"4.0.0"),(0,r.kt)("p",null,"This is a complete refactoring from 3.x. While existing annotations are kept compatible, the internals have completely\nchanged."),(0,r.kt)("h4",{id:"new-features-2"},"New features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can directly ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.2/inheritance-interfaces#mapping-interfaces"},"annotate a PHP interface with ",(0,r.kt)("inlineCode",{parentName:"a"},"@Type")," to make it a GraphQL interface")),(0,r.kt)("li",{parentName:"ul"},"You can autowire services in resolvers, thanks to the new ",(0,r.kt)("inlineCode",{parentName:"li"},"@Autowire")," annotation"),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.2/validation"},"user input validation")," (using the Symfony Validator or the Laravel validator or a custom ",(0,r.kt)("inlineCode",{parentName:"li"},"@Assertion")," annotation"),(0,r.kt)("li",{parentName:"ul"},"Improved security handling:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Unauthorized access to fields can now generate GraphQL errors (rather that schema errors in GraphQLite v3)"),(0,r.kt)("li",{parentName:"ul"},"Added fine-grained security using the ",(0,r.kt)("inlineCode",{parentName:"li"},"@Security")," annotation. A field can now be ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.2/fine-grained-security"},"marked accessible or not depending on the context"),'.\nFor instance, you can restrict access to the field "viewsCount" of the type ',(0,r.kt)("inlineCode",{parentName:"li"},"BlogPost")," only for post that the current user wrote."),(0,r.kt)("li",{parentName:"ul"},"You can now inject the current logged user in any query / mutation / field using the ",(0,r.kt)("inlineCode",{parentName:"li"},"@InjectUser")," annotation"))),(0,r.kt)("li",{parentName:"ul"},"Performance:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can inject the ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.2/query-plan"},"Webonyx query plan in a parameter from a resolver")),(0,r.kt)("li",{parentName:"ul"},"You can use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.2/prefetch-method"},'dataloader pattern to improve performance drastically via the "prefetchMethod" attribute')))),(0,r.kt)("li",{parentName:"ul"},"Customizable error handling has been added:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can throw ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.2/error-handling#many-errors-for-one-exception"},"many errors in one exception")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLAggregateException")))),(0,r.kt)("li",{parentName:"ul"},"You can force input types using ",(0,r.kt)("inlineCode",{parentName:"li"},'@UseInputType(for="$id", inputType="ID!")')),(0,r.kt)("li",{parentName:"ul"},"You can extend an input types (just like you could extend an output type in v3) using ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.2/extend-input-type"},"the new ",(0,r.kt)("inlineCode",{parentName:"a"},"@Decorate")," annotation")),(0,r.kt)("li",{parentName:"ul"},"In a factory, you can ",(0,r.kt)("a",{parentName:"li",href:"input-types#ignoring-some-parameters"},"exclude some optional parameters from the GraphQL schema"))),(0,r.kt)("p",null,"Many extension points have been added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Added a "root type mapper" (useful to map scalar types to PHP types or to add custom annotations related to resolvers)'),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.2/field-middlewares"},'"field middlewares"')," (useful to add middleware that modify the way GraphQL fields are handled)"),(0,r.kt)("li",{parentName:"ul"},"Added a ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.2/argument-resolving"},'"parameter type mapper"')," (useful to add customize parameter resolution or add custom annotations related to parameters)")),(0,r.kt)("p",null,"New framework specific features:"),(0,r.kt)("h4",{id:"symfony"},"Symfony:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The Symfony bundle now provides a "login" and a "logout" mutation (and also a "me" query)')),(0,r.kt)("h4",{id:"laravel"},"Laravel:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/4.2/laravel-package-advanced#support-for-pagination"},"Native integration with the Laravel paginator")," has been added")),(0,r.kt)("h4",{id:"internals"},"Internals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"FieldsBuilder")," class has been split in many different services (",(0,r.kt)("inlineCode",{parentName:"li"},"FieldsBuilder"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"TypeHandler"),", and a\nchain of ",(0,r.kt)("em",{parentName:"li"},"root type mappers"),")"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"FieldsBuilderFactory")," class has been completely removed."),(0,r.kt)("li",{parentName:"ul"},"Overall, there is not much in common internally between 4.x and 3.x. 4.x is much more flexible with many more hook points\nthan 3.x. Try it out!")))}c.isMDXComponent=!0}}]);