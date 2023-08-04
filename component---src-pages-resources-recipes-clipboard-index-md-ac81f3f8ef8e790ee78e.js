"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[5027],{8174:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return d},default:function(){return x}});var a=r(87462),o=r(45987),t=(r(15007),r(64983)),i=r(91515);const l=["components"],d={},s=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.mdx)("div",n)},m=s("InlineAlert"),p=s("CodeBlock"),c={_frontmatter:d},u=i.Z;function x(e){let{components:n}=e,r=(0,o.Z)(e,l);return(0,t.mdx)(u,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"clipboard"},"Clipboard"),(0,t.mdx)("p",null,"Read and write content from and to the clipboard."),(0,t.mdx)("h2",{id:"system-requirements"},"System requirements"),(0,t.mdx)("p",null,"Please make sure your local environment uses the following application versions before proceeding."),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"InDesign v18.5 or higher"),(0,t.mdx)("li",{parentName:"ul"},"UXP version v7.1 or higher"),(0,t.mdx)("li",{parentName:"ul"},"Manifest version v5 or higher")),(0,t.mdx)(m,{variant:"info",slots:"header, text1, text2",mdxType:"InlineAlert"}),(0,t.mdx)("p",null,"Plugins and Scripts"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"In plugins"),", you should seek permission for ",(0,t.mdx)("inlineCode",{parentName:"p"},"clipboard")," access in the manifest. ",(0,t.mdx)("br",null)," IMPORTANT: Read about the ",(0,t.mdx)("a",{parentName:"p",href:"../../../plugins/concepts/manifest/#permissionsdefinition"},"manifest permissions")," before you proceed."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"In scripts"),", the permission for ",(0,t.mdx)("inlineCode",{parentName:"p"},"clipboard")," is fixed. You can ignore the manifest details in the following examples. Learn about these values in the ",(0,t.mdx)("a",{parentName:"p",href:"../../fundamentals/manifest/"},"manifest fundamentals section"),"."),(0,t.mdx)("h2",{id:"example"},"Example"),(0,t.mdx)(p,{slots:"heading, code",repeat:"2",languages:"JavaScript, JSON",mdxType:"CodeBlock"}),(0,t.mdx)("h4",{id:"javascript"},"JavaScript"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},'async function foo() {\n    const clipboard = navigator.clipboard;\n\n    // Setting content for clipboard\n    clipboard.setContent({ \'text/plain\': "Test string to validate clipboard setContent" })\n        .then(() => {\n            console.log("Data successfully set on clipboard");\n        }, (error) => {\n            console.error("Error while setting data on clipboard:", error);\n        });\n\n\n    // Reading from clipboard and printing\n    clipboard.getContent()\n        .then((result) => {\n            console.log(`Data from clipboard: ${result["text/plain"]}`);\n        }, (error) => {\n            console.error("Error while reading data from clipboard:", error);\n        });\n}\n')),(0,t.mdx)("h4",{id:"manifest"},"manifest"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "requiredPermissions": {\n        "clipboard": "readAndWrite"\n    }\n}\n')),(0,t.mdx)("h2",{id:"additional-notes"},"Additional notes"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},'Set the permission to "read" if your script/plugin only intends to read from the clipboard.')),(0,t.mdx)("h2",{id:"reference-material"},"Reference material"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/Clipboard/"},"Clipboard")," APIs")))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-recipes-clipboard-index-md-ac81f3f8ef8e790ee78e.js.map