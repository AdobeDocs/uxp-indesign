"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[82394],{73825:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return d}});var n=a(87462),r=a(63366),i=(a(15007),a(64983)),s=a(91515),o=["components"],m={},p={_frontmatter:m},l=s.Z;function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.mdx)(l,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"indesign-code-recipes"},"InDesign Code Recipes"),(0,i.mdx)("p",null,"This page outlines various methods available with InDesign Scripting. "),(0,i.mdx)("h2",{id:"alert"},"Alert"),(0,i.mdx)("p",null,"Alert can be achieved by having the below method in script. This is using scripting DOM of InDesign to generate the dialog box."),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)("hr",null),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'function alert(msg) {\n    theDialog = app.dialogs.add();\n    col = theDialog.dialogColumns.add();\n    colText = col.staticTexts.add();\n    colText.staticLabel = "" + msg;\n    theDialog.canCancel = false;\n    theDialog.show();\n    theDialog.destroy();\n    return;\n}\n')),(0,i.mdx)("p",null,"Note: JavaScript alert isn't supported."),(0,i.mdx)("h2",{id:"math-operators"},"Math operators"),(0,i.mdx)("p",null,"Operators use variables or values to perform calculations (addition, subtraction, multiplication, and division) and return a value. For example:\nMyWidth/2"),(0,i.mdx)("p",null,"This returns a value equal to half of the content of the variable myWidth."),(0,i.mdx)("p",null,"You also can use operators to perform comparisons: equal to ",(0,i.mdx)("inlineCode",{parentName:"p"},"=="),", not equal to ",(0,i.mdx)("inlineCode",{parentName:"p"},"<>"),", greater than ",(0,i.mdx)("inlineCode",{parentName:"p"},">"),", or less than ",(0,i.mdx)("inlineCode",{parentName:"p"},"<"),". "),(0,i.mdx)("p",null,"For example: ",(0,i.mdx)("inlineCode",{parentName:"p"},"MyWidth > myHeight")),(0,i.mdx)("p",null,"This returns true (or 1) if myWidth is greater than myHeight; otherwise, false (0)."),(0,i.mdx)("h2",{id:"conditional-statements"},"Conditional statements"),(0,i.mdx)("p",null,'Conditional statements make a decision based on an evaluation. For example, "If the selected object is a rectangle, set its stroke weight to 12 points" is a conditional statement. Conditional statements make decisions; they give your scripts a way to evaluate something (like the color of the selected object, the number of pages in the publication, or the date) and act based on the result. Conditional statements almost always start with if.'),(0,i.mdx)("p",null,"Note: Conditional statements often make logical comparisons. In UXP Script, the equal sign assigns a value to a variable; to compare objects, use a double equal sign ",(0,i.mdx)("inlineCode",{parentName:"p"},"=="),"."),(0,i.mdx)("p",null,"This simple example uses a conditional statement to evaluate whether any documents are open. If one or more documents are open  the code that is pasted instead of the comment is executed. If no documents are open, a message window opens. It can be a useful way to check if the script is being used in the context that it should be."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'if (app.documents.length > 0) {\n//Your code goes here.\n}else{\nalert ("No documents are open. Please open a document and try again.");\n}\n')),(0,i.mdx)("h2",{id:"control-structures"},"Control structures"),(0,i.mdx)("p",null,'If you could talk to InDesign, you might say, "Repeat the following procedure 20 times." In scripting terms, this is a control structure. Control structures provide repetitive processes or loops. The idea of a loop is to repeat an action repeatedly with or without changes between instances (or iterations) of the loop, until a specific condition is met. Control structures usually start with for in UXPScript.'),(0,i.mdx)("p",null,"Note: Code examples for control structures. Loops a procedure 20 times."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"for (var myCounter = 0; myCounter < 20; myCounter++) {\n//Your procedure goes here\n}\n")),(0,i.mdx)("h2",{id:"functions-and-handlers"},"Functions and handlers"),(0,i.mdx)("p",null,"Functions are scripting modules to which you can refer from within your script. Typically, you send a value or series of values to a function (or handler) and get back some other value or values. The code used in functions and handlers is simply a convenience to avoid typing the same lines of code repeatedly in your script."),(0,i.mdx)("p",null,"In UXP Script, functions start with ",(0,i.mdx)("strong",{parentName:"p"},"function"),"."),(0,i.mdx)("p",null,"Using parameters and/or return values is entirely optional. To use the code below, assign a value to myReturnValue, substitute the comment with a procedure and call the function."),(0,i.mdx)("p",null,"If you don't want your function to return anything, remove the line with myReturnValue variable."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"function myFunction(myParameter){\n//Your procedure goes here\nreturn myReturnValue; (optional)\n}\n")),(0,i.mdx)("h2",{id:"measurements-and-positioning"},"Measurements and positioning"),(0,i.mdx)("p",null,"All items and objects in InDesign are positioned on the page according to the measurements you choose. It's helpful to know how the InDesign coordinate system works and what measurement units it uses."),(0,i.mdx)("h3",{id:"coordinates"},"Coordinates"),(0,i.mdx)("p",null,"InDesign, like every other page layout and drawing program, uses simple, two-dimensional geometry to set the position of objects on a page or spread. The horizontal component of a coordinate pair is referred to as x; the vertical component as y. You can see these coordinates in the Transform panel or Control when you select an object using the Selection tool. As in the InDesign user interface, coordinates are measured relative to the current location of the ruler's zero point."),(0,i.mdx)("p",null,"There is one difference between the coordinates used in InDesign and the coordinate system used in a Geometry textbook: on InDesign's vertical (or y) axis, coordinates below the zero point are positive numbers; coordinates above the zero point are negative numbers."),(0,i.mdx)("p",null,"Note: When you ask InDesign for the location of a path point, the coordinates are returned in x and y order. When you set the location of a path point, InDesign expects you to provide the coordinates in the same order. InDesign returns some coordinates in a different order, but it expects you to supply them in that order. Geometric bounds and visible bounds are arrays containing four coordinates, which define (in order) the top, left, bottom, and right edges of the object's bounding box (or y1, x1, y2,x2)."),(0,i.mdx)("h3",{id:"working-with-measurement-units"},"Working with measurement units"),(0,i.mdx)("p",null,'When you send measurement values to InDesign, you can send numbers (for example, 14.65) or measurement strings (for example, "1p7.1"). If you send numbers, InDesign uses the publication\'s current units of measurement. If you send measurement strings (see the table below), InDesign uses the units of measurement specified in the string.'),(0,i.mdx)("p",null,'InDesign returns coordinates and other measurement values using the publication\'s current measurement units. In some cases, these units don\'t resemble the measurement values shown in the InDesign Transform panel. For example, if the current measurement system is picas, InDesign returns fractional values as decimals rather than using the picas-and-points notation used by the Transform panel. "1p6," for example, is returned as "1.5." InDesign does this because your scripting system would have trouble trying to perform arithmetic operations using measurement strings; for instance, trying to add "0p3.5" to "13p4" produces a script error while adding .2916 to 13.333 (the converted pica measurements) does not.'),(0,i.mdx)("p",null,"If your script depends on adding, subtracting, multiplying, or dividing specific measurement values, you might want to set the corresponding measurement units at the beginning of the script. At the end of the script, you can set the measurement units back to whatever they were before you ran the script. Alternately, you can use measurement overrides, like many of the sample scripts. A measurement override is a string containing a special character, as shown in the following table:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Override"),(0,i.mdx)("th",{parentName:"tr",align:null},"Meaning"),(0,i.mdx)("th",{parentName:"tr",align:null},"Example"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Override"),(0,i.mdx)("td",{parentName:"tr",align:null},"Meaning"),(0,i.mdx)("td",{parentName:"tr",align:null},"Example")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"c"),(0,i.mdx)("td",{parentName:"tr",align:null},"Ciceros (add didots after the c, if necessary)"),(0,i.mdx)("td",{parentName:"tr",align:null},"1.4c")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"cm"),(0,i.mdx)("td",{parentName:"tr",align:null},"Centimeters"),(0,i.mdx)("td",{parentName:"tr",align:null},".635cm")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"i (or in)"),(0,i.mdx)("td",{parentName:"tr",align:null},"Inches"),(0,i.mdx)("td",{parentName:"tr",align:null},".25i")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"mm"),(0,i.mdx)("td",{parentName:"tr",align:null},"Millimeters"),(0,i.mdx)("td",{parentName:"tr",align:null},"6.35mm")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"p"),(0,i.mdx)("td",{parentName:"tr",align:null},"Picas (add points after the p, if necessary)"),(0,i.mdx)("td",{parentName:"tr",align:null},"1p6")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"pt"),(0,i.mdx)("td",{parentName:"tr",align:null},"Points"),(0,i.mdx)("td",{parentName:"tr",align:null},"18pt")))),(0,i.mdx)("h2",{id:"packaged-sample-scripts"},"Packaged Sample Scripts"),(0,i.mdx)("p",null,"Sample UXP Scripts are packaged along with InDesign and can be found under the Scripts Panel."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"313px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"87.8594249201278%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/64bb408fecc2c7c59886225838fed047/0d091/1.webp 313w"],sizes:"(max-width: 313px) 100vw, 313px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/64bb408fecc2c7c59886225838fed047/8e749/1.png 313w"],sizes:"(max-width: 313px) 100vw, 313px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/64bb408fecc2c7c59886225838fed047/8e749/1.png",alt:"Packaged sample scripts",title:"Packaged sample scripts",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"setting-up-measurement-units-and-master-spread-margins"},"Setting up measurement units and master spread margins"),(0,i.mdx)("p",null,"The following script shows how to create a new document and set the margins of the first master spread. In this section, we show how to build a complex script using simple building blocks of scripting code. Start your script editor and enter the following lines in the scripting language of your choice."),(0,i.mdx)("p",null,"Enter the following code in the text editor, or open the DocumentConstruction.idjs tutorial script:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"//Create a new document.\nvar myDocument = app.documents.add();\n \n//Set the measurement units and ruler origin.\nmyDocument.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.points;\nmyDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.points;\nmyDocument.viewPreferences.rulerOrigin = RulerOrigin.pageOrigin;\n \n//Get a reference to the first master spread.\nvar myMasterSpread = myDocument.masterSpreads.item(0);\n \n//Get a reference to the margin preferences of the first page in the master spread.\nvar myMarginPreferences = myMasterSpread.pages.item(0).marginPreferences;\n \n//Now set up the page margins and columns.\nmyMarginPreferences.left = 84;\nmyMarginPreferences.top = 70;\nmyMarginPreferences.right = 70;\nmyMarginPreferences.bottom = 78;\nmyMarginPreferences.columnCount = 3;\nmyMarginPreferences.columnGutter = 14;\n \n//Page margins and columns for the right-hand page.\nvar myMarginPreferences = myMasterSpread.pages.item(1).marginPreferences;\nmyMarginPreferences.left = 84;\nmyMarginPreferences.top = 70;\nmyMarginPreferences.right = 70;\nmyMarginPreferences.bottom = 78;\nmyMarginPreferences.columnCount = 3;\nmyMarginPreferences.columnGutter = 14;\n")),(0,i.mdx)("h2",{id:"adding-a-baseline-grid"},"Adding a baseline grid"),(0,i.mdx)("p",null,"Now that we have a master spread set up, we add a baseline grid. Add the following script lines (from the appropriate language) to the end of the script you created earlier. Here is a diagram (with the scripting terms shown in their JavaScript form):"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"268px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.91044776119403%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/bda92c41b7cc0b8220a4e258c92331d8/0b413/2.webp 268w"],sizes:"(max-width: 268px) 100vw, 268px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/bda92c41b7cc0b8220a4e258c92331d8/baf7c/2.png 268w"],sizes:"(max-width: 268px) 100vw, 268px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/bda92c41b7cc0b8220a4e258c92331d8/baf7c/2.png",alt:"Add a baseline grid",title:"Add a baseline grid",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"var myGridPreferences = myDocument.gridPreferences;\nmyGridPreferences.baselineDivision = 14;\nmyGridPreferences.baselineStart = 70;\nmyGridPreferences.baselineGridShown = true;\n")),(0,i.mdx)("h2",{id:"adding-master-page-items"},"Adding master page items"),(0,i.mdx)("p",null,"Next, we add two text frames to the master pages. These frames will contain the auto-page-number special character and be positioned at the bottom of the page."),(0,i.mdx)("p",null,'In the "Hello World" example, we created a text frame and specified its position and size using the geometric bounds property-an array containing the top, left, bottom, and right coordinates for the frame. The coordinates correspond to the corners of the frame, just as they would appear in the Control panel.'),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"var myMasterSpread = myDocument.masterSpreads.item(0);\nvar myLeftPage = myMasterSpread.pages.item(0);\nvar myRightPage = myMasterSpread.pages.item(1);\nvar myLeftFooter = myLeftPage.textFrames.add();\nmyLeftFooter.geometricBounds = [63, 3, 66, 9];\nmyLeftFooter.textFramePreferences.firstBaselineOffset = FirstBaseline.leadingOffset;\nmyLeftFooter.contents = SpecialCharacters.autoPageNumber;\nmyLeftFooter.parentStory.characters.item(0).pointSize = 11;\nmyLeftFooter.parentStory.characters.item(0).leading = 14;\nvar myRightFooter = myRightPage.textFrames.add();\nmyRightFooter.geometricBounds = [63, 92, 66, 99];\nmyRightFooter.textFramePreferences.firstBaselineOffset = FirstBaseline.leadingOffset;\nmyRightFooter.contents = SpecialCharacters.autoPageNumber;\nmyRightFooter.parentStory.characters.item(0).pointSize = 11;\nmyRightFooter.parentStory.characters.item(0).leading = 14;\nmyRightFooter.parentStory.characters.item(0).justification = Justification.rightAlign;\n")),(0,i.mdx)("h2",{id:"adding-master-text-frames"},"Adding master text frames"),(0,i.mdx)("p",null,"Next, we add master text frames. The following block diagram shows the objects and properties with which we will work (the diagram uses the JavaScript form of the scripting terms):"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"385px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/b4226a4f857d626a97ab773abca15fd5/5530d/3.webp 320w","/uxp-indesign/static/b4226a4f857d626a97ab773abca15fd5/93e08/3.webp 385w"],sizes:"(max-width: 385px) 100vw, 385px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/b4226a4f857d626a97ab773abca15fd5/dd4a7/3.png 320w","/uxp-indesign/static/b4226a4f857d626a97ab773abca15fd5/8daf4/3.png 385w"],sizes:"(max-width: 385px) 100vw, 385px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/b4226a4f857d626a97ab773abca15fd5/8daf4/3.png",alt:"Adding master text frames",title:"Adding master text frames",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'var myLeftPage = myMasterSpread.pages.item(0);\nvar myRightPage = myMasterSpread.pages.item(1);\nvar myLeftTextFrame = myLeftPage.textFrames.add();\nmyLeftTextFrame.geometricBounds = [3, 3, 25, 43];\nmyLeftTextFrame.textFramePreferences.firstBaselineOffset = FirstBaseline.leadingOffset;\nmyLeftTextFrame.textFramePreferences.textColumnCount = 3;\nmyLeftTextFrame.textFramePreferences.textColumnGutter = 14;\n//Add a label to make the frame easier to find later on.\nmyLeftTextFrame.label = "BodyTextFrame";\nvar myRightTextFrame = myRightPage.textFrames.add();\nmyRightTextFrame.geometricBounds = [3, 54, 25, 91];\nmyRightTextFrame.textFramePreferences.firstBaselineOffset = FirstBaseline.leadingOffset;\nmyRightTextFrame.textFramePreferences.textColumnCount = 3;\nmyRightTextFrame.textFramePreferences.textColumnGutter = 14;\n//Add a label to make the frame easier to find later on.\nmyRightTextFrame.label = "BodyTextFrame";\n//Link the two frames using the nextTextFrame property.\nmyLeftTextFrame.nextTextFrame = myRightTextFrame;\n')),(0,i.mdx)("h2",{id:"overriding-master-page-items-and-adding-text"},"Overriding master page items and adding text"),(0,i.mdx)("p",null,"Next, we override one of the master text frames we created and add text to it. Again, add this script to the end of the script we have been working on."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'var myTextFrame = myDocument.masterSpreads.item(0).pages.item(1).textFrames.item(0).override(myDocument.pages.item(0));\n//Add text by setting the contents of an insertion point to a string.\n//In JavaScript, "\\r" is a return character.\nmyTextFrame.insertionPoints.item(0).contents = "Headline!\\r";\n')),(0,i.mdx)("h2",{id:"adding-and-applying-a-paragraph-style"},"Adding and applying a paragraph style"),(0,i.mdx)("p",null,"Our headline looks plain, so we format it using a paragraph style. First, we must create the paragraph style. The following diagram shows the objects and properties we will work with (again, the text in this diagram uses the JavaScript form of the scripting terms):"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"295px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.13559322033898%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/a023edc3f4a8b380aad9c25b03697ece/66888/4.webp 295w"],sizes:"(max-width: 295px) 100vw, 295px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/a023edc3f4a8b380aad9c25b03697ece/60cc9/4.png 295w"],sizes:"(max-width: 295px) 100vw, 295px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/a023edc3f4a8b380aad9c25b03697ece/60cc9/4.png",alt:"Adding and applying a paragraph style",title:"Adding and applying a paragraph style",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'//First, check to see if the paragraph style already exists.\nvar myParagraphStyle = myDocument.paragraphStyles.item("Heading 1");\ntry {\n    var myName = myParagraphStyle.name;\n}\ncatch (myError){\n    //The paragraph style did not exist, so create it.\n    myParagraphStyle = myDocument.paragraphStyles.add({name:"Heading 1"});\n}\n//We\'ll need to create a color. Check to see if the color already exists.\nvar myColor = myDocument.colors.item("Red");\ntry {\n    myName = myColor.name;\n}\ncatch (myError){\n    //The color did not exist, so create it.\n    myColor = myDocument.colors.add({name:"Red", model:ColorModel.process,\n    colorValue:[0,100,100,0]});\n}\n//Now set the formatting of the paragraph style.\nmyParagraphStyle.appliedFont = "Arial";\nmyParagraphStyle.fontStyle = "Bold";\nmyParagraphStyle.pointSize = 24;\nmyParagraphStyle.spaceAfter = 24;\nmyParagraphStyle.spaceBefore = 24;\nmyParagraphStyle.fillColor = myDocument.colors.item("Red");\n//Apply the style to the paragraph.\nmyDocument.pages.item(0).textFrames.item(0).paragraphs.item(0).applyParagraphStyle(\nmyParagraphStyle, true);\n//You could also use:\n//myDocument.pages.item(0).textFrames.item(0).paragraphs.item(0).appliedParagraphStyle = myParagraphStyle;\n')),(0,i.mdx)("h2",{id:"placing-a-text-file"},"Placing a text file"),(0,i.mdx)("p",null,"Next, we import a text file. We add the text after the headline in the first text frame on the first page. The script displays a dialog box you can use to select the text file you want to import. Again, add this script to the end of the script we have been working on."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'//Display a standard open file dialog box to select a text file.\nvar myTextFile = <File Path of txt file>\n //Example : var myTextFile = "C://IDS/myText.txt";\n //If a text file was selected, and if you didn\'t press Cancel,\n//place the text file at the first insertion point after the headline.\nif((myTextFile != "")&&(myTextFile != null)){\n    myTextFrame.insertionPoints.item(-1).place(myTextFile);\n}\n')),(0,i.mdx)("h2",{id:"place-a-graphic"},"Place a graphic"),(0,i.mdx)("p",null,"Placing a graphic is like importing a text file. Again, the script displays a dialog box you can use to select the graphic you want to place. When we place the graphic, InDesign Server returns a reference to the graphic itself, rather than to the frame containing the graphic. To get a reference to the frame, use the parent property of the graphic. Once we have that reference, we can apply an object style to the frame. Again, add this script to the end of the script we have been working on."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'//Display a standard open file dialog box to select a graphic file.\n var myGraphicFile = <File Path of graphic file>\n//Example : var myGraphicFile = "C://IDS/myImage.PNG";\n //If a graphic file was selected, and if you didn\'t press Cancel,\n//place the graphic file on the page.\nif((myGraphicFile != "")&&(myGraphicFile != null)){\n    var myGraphic = myDocument.pages.item(0).place(myGraphicFile);\n    //Since you can place multiple graphics at once, the place method\n    //returns an array. To get the graphic you placed, get the first\n    //item in the array (JavaScript arrays start with item 0).\n    myGraphic = myGraphic[0];\n    //Create an object style to apply to the graphic frame.\n    var myObjectStyle = myDocument.objectStyles.item("GraphicFrame");\n    try {\n        var myName = myObjectStyle.name;\n    }\n    catch (myError){\n        //The object style did not exist, so create it.\n        myObjectStyle = myDocument.objectStyles.add({name:"GraphicFrame"});\n    }\n    myObjectStyle.enableStroke = true;\n    myObjectStyle.strokeWeight = 3;\n    myObjectStyle.strokeType = myDocument.strokeStyles.item("Solid");\n    myObjectStyle.strokeColor = myDocument.colors.item("Red");\n    //The frame containing the graphic is the parent of the graphic.\n    var myFrame = myGraphic.parent;\n    myFrame.applyObjectStyle(myObjectStyle, true);\n    //Resize the frame to a specific size.\n    myFrame.geometricBounds = [0,0,144,144];\n    //Fit the graphic to the frame proportionally.\n    myFrame.fit(FitOptions.proportionally);\n    //Next, fit frame to the resized graphic.\n    myFrame.fit(FitOptions.frameToContent);\n    var myBounds = myFrame.geometricBounds;\n    var myGraphicWidth = myBounds[3]-myBounds[1];\n    //Move the graphic frame.\n    var myPageWidth = myDocument.documentPreferences.pageWidth;\n    var myTopMargin = myDocument.pages.item(0).marginPreferences.top;\n    myFrame.move([myPageWidth-myGraphicWidth, myTopMargin]);\n    //Apply a text wrap to the graphic frame.\n    myFrame.textWrapPreferences.textWrapMode = TextWrapModes.BOUNDING_BOX_TEXT_WRAP;\n    myFrame.textWrapPreferences.textWrapOffset = [24, 12, 24, 12];\n}\n')))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-recipes-index-md-089f8d794c7a210eb34f.js.map