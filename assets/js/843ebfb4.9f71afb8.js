"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[772],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),r=n(67294),i=n(72389),o=n(79443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(63616),u=n(86010),p="tabItem_vU9c";function d(e){var t,n,i,o=e.lazy,d=e.block,c=e.defaultValue,h=e.values,m=e.groupId,y=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),w=k.tabGroupChoices,N=k.setTabGroupChoices,T=(0,r.useState)(g),C=T[0],$=T[1],x=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=w[m];null!=E&&E!==C&&f.some((function(e){return e.value===E}))&&$(E)}var V=function(e){var t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==C&&(I(t),$(a),null!=m&&N(m,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},y)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:V,onClick:V},i,{className:(0,u.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},13989:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(26396),l=n(58215),s=["components"],u={id:"validation",title:"Validation",sidebar_label:"User input validation"},p=void 0,d={unversionedId:"validation",id:"validation",title:"Validation",description:"GraphQLite does not handle user input validation by itself. It is out of its scope.",source:"@site/docs/validation.mdx",sourceDirName:".",slug:"/validation",permalink:"/docs/next/validation",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/validation.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1649105785,formattedLastUpdatedAt:"4/4/2022",frontMatter:{id:"validation",title:"Validation",sidebar_label:"User input validation"},sidebar:"docs",previous:{title:"Error handling",permalink:"/docs/next/error-handling"},next:{title:"Authentication and authorization",permalink:"/docs/next/authentication-authorization"}},c=[{value:"Validating user input with Laravel",id:"validating-user-input-with-laravel",children:[],level:2},{value:"Validating user input with Symfony validator",id:"validating-user-input-with-symfony-validator",children:[{value:"Using the Symfony validator bridge",id:"using-the-symfony-validator-bridge",children:[],level:3},{value:"Using the validator directly on a query / mutation / factory ...",id:"using-the-validator-directly-on-a-query--mutation--factory-",children:[],level:3}],level:2},{value:"Custom InputType Validation",id:"custom-inputtype-validation",children:[],level:2}],h={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"GraphQLite does not handle user input validation by itself. It is out of its scope."),(0,i.kt)("p",null,"However, it can integrate with your favorite framework validation mechanism. The way you validate user input will\ntherefore depend on the framework you are using."),(0,i.kt)("h2",{id:"validating-user-input-with-laravel"},"Validating user input with Laravel"),(0,i.kt)("p",null,"If you are using Laravel, jump directly to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/laravel-package-advanced#support-for-laravel-validation-rules"},"GraphQLite Laravel package advanced documentation"),"\nto learn how to use the Laravel validation with GraphQLite."),(0,i.kt)("h2",{id:"validating-user-input-with-symfony-validator"},"Validating user input with Symfony validator"),(0,i.kt)("p",null,"GraphQLite provides a bridge to use the ",(0,i.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/validation.html"},"Symfony validator")," directly in your application."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you are using Symfony and the Symfony GraphQLite bundle, the bridge is available out of the box")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'If you are using another framework, the "Symfony validator" component can be used in standalone mode. If you want to\nadd it to your project, you can require the ',(0,i.kt)("em",{parentName:"p"},"thecodingmachine/graphqlite-symfony-validator-bridge")," package:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer require thecodingmachine/graphqlite-symfony-validator-bridge\n")))),(0,i.kt)("h3",{id:"using-the-symfony-validator-bridge"},"Using the Symfony validator bridge"),(0,i.kt)("p",null,"Usually, when you use the Symfony validator component, you put annotations in your entities and you validate those entities\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Validator")," object."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="UserController.php"',title:'"UserController.php"'},"use Symfony\\Component\\Validator\\Validator\\ValidatorInterface;\nuse TheCodingMachine\\GraphQLite\\Validator\\ValidationFailedException\n\nclass UserController\n{\n    private $validator;\n\n    public function __construct(ValidatorInterface $validator)\n    {\n        $this->validator = $validator;\n    }\n\n    #[Mutation]\n    public function createUser(string $email, string $password): User\n    {\n        $user = new User($email, $password);\n\n        // Let's validate the user\n        $errors = $this->validator->validate($user);\n\n        // Throw an appropriate GraphQL exception if validation errors are encountered\n        ValidationFailedException::throwException($errors);\n\n        // No errors? Let's continue and save the user\n        // ...\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="UserController.php"',title:'"UserController.php"'},"use Symfony\\Component\\Validator\\Validator\\ValidatorInterface;\nuse TheCodingMachine\\GraphQLite\\Validator\\ValidationFailedException\n\nclass UserController\n{\n    private $validator;\n\n    public function __construct(ValidatorInterface $validator)\n    {\n        $this->validator = $validator;\n    }\n\n    /**\n     * @Mutation\n     */\n    public function createUser(string $email, string $password): User\n    {\n        $user = new User($email, $password);\n\n        // Let's validate the user\n        $errors = $this->validator->validate($user);\n\n        // Throw an appropriate GraphQL exception if validation errors are encountered\n        ValidationFailedException::throwException($errors);\n\n        // No errors? Let's continue and save the user\n        // ...\n    }\n}\n")))),(0,i.kt)("p",null,"Validation rules are added directly to the object in the domain model:"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="User.php"',title:'"User.php"'},'use Symfony\\Component\\Validator\\Constraints as Assert;\n\nclass User\n{\n    #[Assert\\Email(message: "The email \'{{ value }}\' is not a valid email.", checkMX: true)]\n    private $email;\n\n    /**\n     * The NotCompromisedPassword assertion asks the "HaveIBeenPawned" service if your password has already leaked or not.\n     */\n    #[Assert\\NotCompromisedPassword]\n    private $password;\n\n    public function __construct(string $email, string $password)\n    {\n        $this->email = $email;\n        $this->password = $password;\n    }\n\n    // ...\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="User.php"',title:'"User.php"'},'use Symfony\\Component\\Validator\\Constraints as Assert;\n\nclass User\n{\n    /**\n     * @Assert\\Email(\n     *     message = "The email \'{{ value }}\' is not a valid email.",\n     *     checkMX = true\n     * )\n     */\n    private $email;\n\n    /**\n     * The NotCompromisedPassword assertion asks the "HaveIBeenPawned" service if your password has already leaked or not.\n     * @Assert\\NotCompromisedPassword\n     */\n    private $password;\n\n    public function __construct(string $email, string $password)\n    {\n        $this->email = $email;\n        $this->password = $password;\n    }\n\n    // ...\n}\n')))),(0,i.kt)("p",null,'If a validation fails, GraphQLite will return the failed validations in the "errors" section of the JSON response:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errors": [\n        {\n            "message": "The email \'\\"foo@thisdomaindoesnotexistatall.com\\"\' is not a valid email.",\n            "extensions": {\n                "code": "bf447c1c-0266-4e10-9c6c-573df282e413",\n                "field": "email",\n                "category": "Validate"\n            }\n        }\n    ]\n}\n')),(0,i.kt)("h3",{id:"using-the-validator-directly-on-a-query--mutation--factory-"},"Using the validator directly on a query / mutation / factory ..."),(0,i.kt)("p",null,'If the data entered by the user is mapped to an object, please use the "validator" instance directly as explained in\nthe last chapter. It is a best practice to put your validation layer as close as possible to your domain model.'),(0,i.kt)("p",null,"If the data entered by the user is ",(0,i.kt)("strong",{parentName:"p"},"not")," mapped to an object, you can directly annotate your query, mutation, factory..."),(0,i.kt)("div",{class:"alert alert--warning"},"You generally don't want to do this. It is a best practice to put your validation constraints on your domain objects. Only use this technique if you want to validate user input and user input will not be stored in a domain object."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Assertion")," annotation to validate directly the user input."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use Symfony\\Component\\Validator\\Constraints as Assert;\nuse TheCodingMachine\\GraphQLite\\Validator\\Annotations\\Assertion;\n\n/**\n * @Query\n * @Assertion(for="email", constraint=@Assert\\Email())\n */\npublic function findByMail(string $email): User\n{\n    // ...\n}\n')),(0,i.kt)("p",null,'Notice that the "constraint" parameter contains an annotation (it is an annotation wrapped in an annotation).'),(0,i.kt)("p",null,"You can also pass an array to the ",(0,i.kt)("inlineCode",{parentName:"p"},"constraint")," parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'@Assertion(for="email", constraint={@Assert\\NotBlank(), @Assert\\Email()})\n')),(0,i.kt)("div",{class:"alert alert--warning"},(0,i.kt)("strong",null,"Heads up!"),' The "@Assertion" annotation is only available as a ',(0,i.kt)("strong",null,"Doctrine annotations"),". You cannot use it as a PHP 8 attributes"),(0,i.kt)("h2",{id:"custom-inputtype-validation"},"Custom InputType Validation"),(0,i.kt)("p",null,"GraphQLite also supports a fully custom validation implementation for all input types defined with an ",(0,i.kt)("inlineCode",{parentName:"p"},"@Input")," annotation or PHP8 ",(0,i.kt)("inlineCode",{parentName:"p"},"#[Input]")," attribute.  This offers a way to validate input types before they're available as a method parameter of your query and mutation controllers.  This way, when you're using your query or mutation controllers, you can feel confident that your input type objects have already been validated."),(0,i.kt)("div",{class:"alert alert--warning"},(0,i.kt)("p",null,"It's important to note that this validation implementation does not validate input types created with a factory.  If you are creating an input type with a factory, or using primitive parameters in your query/mutation controllers, you should be sure to validate these independently.  This is strictly for input type objects."),(0,i.kt)("p",null,"You can use one of the framework validation libraries listed above or implement your own validation for these cases.  If you're using input type objects for most all of your query and mutation controllers, then there is little additional validation concerns with regards to user input.  There are many reasons why you should consider defaulting to an InputType object, as opposed to individual arguments, for your queries and mutations.  This is just one additional perk.")),(0,i.kt)("p",null,"To get started with validation on input types defined by an ",(0,i.kt)("inlineCode",{parentName:"p"},"@Input")," annotation, you'll first need to register your validator with the ",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaFactory"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$factory = new SchemaFactory($cache, $this->container);\n$factory->addControllerNamespace('App\\\\Controllers');\n$factory->addTypeNamespace('App');\n// Register your validator\n$factory->setInputTypeValidator($this->container->get('your_validator'));\n$factory->createSchema();\n")),(0,i.kt)("p",null,"Your input type validator must implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Types\\InputTypeValidatorInterface"),", as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"interface InputTypeValidatorInterface\n{\n    /**\n     * Checks to see if the Validator is currently enabled.\n     */\n    public function isEnabled(): bool;\n\n    /**\n     * Performs the validation of the InputType.\n     *\n     * @param object $input     The input type object to validate\n     */\n    public function validate(object $input): void;\n}\n")),(0,i.kt)("p",null,"The interface is quite simple.  Handle all of your own validation logic in the ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," method.  For example, you might use Symfony's annotation based validation in addition to some other custom validation logic.  It's really up to you on how you wish to handle your own validation.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," method will receive the input type object populated with the user input."),(0,i.kt)("p",null,"You'll notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," method has a ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," return.  The purpose here is to encourage you to throw an Exception or handle validation output however you best see fit.  GraphQLite does it's best to stay out of your way and doesn't make attempts to handle validation output.  You can, however, throw an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLException")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLAggregateException")," as usual (see ",(0,i.kt)("a",{parentName:"p",href:"error-handling"},"Error Handling")," for more details)."),(0,i.kt)("p",null,"Also available is the ",(0,i.kt)("inlineCode",{parentName:"p"},"isEnabled")," method.  This method is checked before executing validation on an InputType being resolved.  You can work out your own logic to selectively enable or disable validation through this method.  In most cases, you can simply return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to keep it always enabled."),(0,i.kt)("p",null,"And that's it, now, anytime an input type is resolved, the validator will be executed on that input type immediately after it has been hydrated with user input."))}m.isMDXComponent=!0}}]);