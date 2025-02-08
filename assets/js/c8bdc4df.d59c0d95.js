"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5316],{82513:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>s});var o=t(58168),i=(t(96540),t(15680));t(67443);const r={id:"file-uploads",title:"File uploads",sidebar_label:"File uploads",original_id:"file-uploads"},l=void 0,n={unversionedId:"file-uploads",id:"version-4.0/file-uploads",title:"File uploads",description:"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed",source:"@site/versioned_docs/version-4.0/file_uploads.md",sourceDirName:".",slug:"/file-uploads",permalink:"/docs/4.0/file-uploads",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/file_uploads.md",tags:[],version:"4.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1735156155,formattedLastUpdatedAt:"Dec 25, 2024",frontMatter:{id:"file-uploads",title:"File uploads",sidebar_label:"File uploads",original_id:"file-uploads"},sidebar:"version-4.0/docs",previous:{title:"Prefetching records",permalink:"/docs/4.0/prefetch-method"},next:{title:"Pagination",permalink:"/docs/4.0/pagination"}},p={},s=[{value:"If you are using the Symfony bundle",id:"if-you-are-using-the-symfony-bundle",level:2},{value:"If you are using a PSR-15 compatible framework",id:"if-you-are-using-a-psr-15-compatible-framework",level:2},{value:"If you are using another framework not compatible with PSR-15",id:"if-you-are-using-another-framework-not-compatible-with-psr-15",level:2},{value:"Usage",id:"usage",level:2}],u={toc:s},d="wrapper";function h(e){let{components:a,...t}=e;return(0,i.yg)(d,(0,o.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed\nto add support for ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec"},"multipart requests"),"."),(0,i.yg)("p",null,"GraphQLite supports this extension through the use of the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"Ecodev/graphql-upload")," library."),(0,i.yg)("h2",{id:"if-you-are-using-the-symfony-bundle"},"If you are using the Symfony bundle"),(0,i.yg)("p",null,"If you are using our Symfony bundle, the file upload middleware is managed by the bundle. You have nothing to do\nand can start using it right away."),(0,i.yg)("h2",{id:"if-you-are-using-a-psr-15-compatible-framework"},"If you are using a PSR-15 compatible framework"),(0,i.yg)("p",null,"In order to use this, you must first be sure that the ",(0,i.yg)("inlineCode",{parentName:"p"},"ecodev/graphql-upload")," PSR-15 middleware is part of your middleware pipe."),(0,i.yg)("p",null,"Simply add ",(0,i.yg)("inlineCode",{parentName:"p"},"GraphQL\\Upload\\UploadMiddleware")," to your middleware pipe."),(0,i.yg)("h2",{id:"if-you-are-using-another-framework-not-compatible-with-psr-15"},"If you are using another framework not compatible with PSR-15"),(0,i.yg)("p",null,"Please check the Ecodev/graphql-upload library ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"documentation"),"\nfor more information on how to integrate it in your framework."),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("p",null,"To handle an uploaded file, you type-hint against the PSR-7 ",(0,i.yg)("inlineCode",{parentName:"p"},"UploadedFileInterface"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Mutation\n     */\n    public function saveDocument(string $name, UploadedFileInterface $file): Document\n    {\n        // Some code that saves the document.\n        $file->moveTo($someDir);\n    }\n}\n")),(0,i.yg)("p",null,"Of course, you need to use a GraphQL client that is compatible with multipart requests."),(0,i.yg)("p",null,"See ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec#client"},"jaydenseric/graphql-multipart-request-spec")," for a list of compatible clients."))}h.isMDXComponent=!0}}]);