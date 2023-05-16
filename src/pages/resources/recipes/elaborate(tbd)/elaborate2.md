## Adding features to your Hello World InDesign Server Script
Next, we create a script that creates another "Hello World" document. Our second script will do the following:

* Use a function to get the page dimensions and page margins of a document.
* Resize a text frame.
* Change the formatting of the text in the text frame.
* Export as PDF.

1. Using the text editor, enter the following script:

```js
//ImprovedHelloWorld.idjs
//An InDesign JavaScript
//
//Enter the name of a font on your system, if necessary.
var myFont = app.fonts.item("Arial");
var myDocument = app.documents.item(0);
var myPage = myDocument.pages.item(0);
//Get page width and page height using the function "myGetBounds".
var myBounds = myGetBounds(myDocument, myPage);
var myTextFrame = myPage.textFrames.item(0);
//Resize the text frame to match the publication margins.
myTextFrame.geometricBounds = myBounds;
var myParagraph = myTextFrame.paragraphs.item(0);
//Change the font, size, and alignment.
myParagraph.appliedFont = myFont;
myParagraph.pointSize = 48;
myParagraph.justification = Justification.centerAlign;
function myGetBounds(myDocument, myPage){
var myPageWidth = myDocument.documentPreferences.pageWidth;
var myPageHeight = myDocument.documentPreferences.pageHeight
if(myPage.side == PageSideOptions.leftHand){
var myX2 = myPage.marginPreferences.left;
var myX1 = myPage.marginPreferences.right;
}
else{
var myX1 = myPage.marginPreferences.left;
var myX2 = myPage.marginPreferences.right;
}
var myY1 = myPage.marginPreferences.top;
var myX2 = myPageWidth - myX2;
var myY2 = myPageHeight - myPage.marginPreferences.bottom;
return [myY1, myX1, myY2, myX2];
}
```

Open and view the exported PDF with Acrobat or Adobe Reader