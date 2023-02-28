"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[588],{92447:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return p}});var o=t(87462),s=t(63366),r=(t(15007),t(64983)),i=t(91515),a=["components"],c={},d={_frontmatter:c},u=i.Z;function p(e){var n=e.components,t=(0,s.Z)(e,a);return(0,r.mdx)(u,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"reference"},"Reference"),(0,r.mdx)("p",null,"UXP for Adobe InDesign Server Reference"),(0,r.mdx)("p",null,"This page presents scripts that show how to create simple documents using InDesign Server. The bulk of the scripting documentation for InDesign Server, however, is in the documentation for the desktop (that is, nonserver) version of InDesign."),(0,r.mdx)("p",null,"We assume that you are developing your InDesign Server scripts using InDesign 2023, and that you have read Adobe InDesign Scripting Tutorial and Adobe InDesign Scripting Guide for the scripting language you want to use."),(0,r.mdx)("p",null,"We also assume that you are familiar with the details of your InDesign Server installation. For the purposes of this document, we present sample scripts that work with a copy of InDesign Server on the same system as your scripting development environment."),(0,r.mdx)("p",null,"InDesign is an essential tool for developing scripts for InDesign Server. We assume that you will develop scripts using InDesign before using them with InDesign Server, because it is much easier to test and debug scripts when you can see the objects being created. To see the result of your script in InDesign Server, you would have to save the document and open it using InDesign, or export the document and view the exported file in another program (like Acrobat ® or Adobe Reader®). If you use InDesign to develop your InDesign Server scripts, you can reduce your development time dramatically."),(0,r.mdx)("p",null,"Though the two programs are very similar, their scripting object models differ slightly. The following sections discuss objects, properties, and methods in InDesign that are not in InDesign Server. Keep these in mind as you convert scripts from InDesign to InDesign Server."),(0,r.mdx)("h2",{id:"active-document"},"Active document"),(0,r.mdx)("p",null,"Many InDesign scripts refer to the front-most document in the user interface using the active document property of the application object. This property does not exist in InDesign Server. Instead, you can refer to documents by their index or name."),(0,r.mdx)("h2",{id:"active-script"},"Active script"),(0,r.mdx)("p",null,"Many InDesign scripts refer to the currently running script to locate other script files or resources. InDesign Server does not have this property. Instead, locate the assets the script will need in specific locations on your server or system, then refer to those locations using complete file paths."),(0,r.mdx)("h2",{id:"active-windows-and-spreads"},"Active windows and spreads"),(0,r.mdx)("p",null,"InDesign scripts often refer to the active window or the active spread of the active window. These user-interface properties are not supported by InDesign server."),(0,r.mdx)("h2",{id:"selection"},"Selection"),(0,r.mdx)("p",null,"As you would expect, InDesign server does not have an object corresponding to the user selection. When you convert scripts from InDesign, you must remove any reference to the selection and provide references to objects based on other qualities (like the object id, index, or label)."),(0,r.mdx)("h2",{id:"dialogs"},"Dialogs"),(0,r.mdx)("p",null,"InDesign can create modal dialog boxes using the dialog object and populate them with common user-interface controls, like check boxes, text-entry fields, and radio buttons. InDesign server does not support the dialog object or any user-interface controls."),(0,r.mdx)("h2",{id:"copy-and-paste"},"Copy and paste"),(0,r.mdx)("p",null,"Because InDesign Server has no user interface, it also lacks the copy and paste features of InDesign. Instead of using copy and paste, use duplicate and move. Both methods can create copies of objects, and can move objects from one document to another.         "))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-server-reference-index-md-f546612163eda4fb4126.js.map