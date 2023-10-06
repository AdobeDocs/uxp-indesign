# XML

### Importing XML

Once you set the XML import preferences using the [XMLImportPreference](https://developer.adobe.com/indesign/dom/api/x/XMLImportPreference/) API, you can import an XML file, as shown in the following script fragment:

```js
const { app } = require("indesign");
let ufs = require("uxp").storage.localFileSystem;
let myDocument = app.documents.item(0);
//You'll have to fill in a valid file path for your system.
let folder =  await ufs.getEntryWithUrl("file:c:/Users/uxp/Desktop");
let filePath;
try {
    filePath = await folder.getEntry("sampleXML.xml");
}
catch (error){
    filePath = await folder.createEntry("sampleXML.xml");
}
myDocument = app.documents.item(0);
myDocument.xmlElements.item(0).importXML(filePath);
```

When you need to import the contents of an XML file into a specific XML element, use the importXML method of the XML element, rather than the corresponding method of the document. See the following script fragment (from the ImportXMLIntoElement tutorial script):

```js
const { app, SelectionOptions } = require("indesign");
let ufs = require("uxp").storage.localFileSystem;
let myDocument = app.documents.item(0);
//You'll have to fill in a valid file path for your system.
let folder =  await ufs.getEntryWithUrl("file:c:/Users/uxp/Desktop");
let filePath;
try {
    filePath = await folder.getEntry("sampleXML.xml");
}
catch (error){
    filePath = await folder.createEntry("sampleXML.xml");
}
myDocument = app.documents.item(0);
let myPage = app.activeWindow.activePage;
myDocument.importXML(filePath);
let myRootXMLElement = myDocument.xmlElements.item(0);
let myLastXMLElement = myRootXMLElement.xmlElements.item(-1);
//Select the XML element
myDocument.select(myLastXMLElement, SelectionOptions.replaceWith);
myDocument.xmlImportPreferences.importToSelected = true;
myDocument.importXML(filePath);
```

You also can set the importToSelected property of the xmlImportPreferences object to true, then select the XML element, and then import the XML file, as shown in the following script fragment (from the ImportXMLIntoSelectedElement tutorial script):

```js
const { app } = require("indesign");
let myDocument = app.documents.item(0);
let myXMLTag = myDocument.xmlTags.item("xml_element");
let myXMLElement = myDocument.xmlElements.item(0).xmlElements.add(myXMLTag);
myDocument.select(myXMLElement);
myDocument.xmlImportPreferences.importToSelected = true;
//Import into the selected XML element.
myDocument.importXML(filePath);
```

### Loading XML tags

You can import XML tags from an XML file without importing the XML contents of the file. You might want to do this to work out a tag-to-style or style-to-tag mapping before you import the XML data., as shown in the following script fragment (from the LoadXMLTags tutorial script):

```js
const { app } = require("indesign");
let ufs = require("uxp").storage.localFileSystem;
let myDocument = app.documents.item(0);
//You'll have to fill in a valid file path for your system.
let folder =  await ufs.getEntryWithUrl("file:c:/Users/uxp/Desktop");
let filePath;
try {    
    filePath = await folder.getEntry("sampleXML.indd");
} 
catch (error){    
    filePath = await folder.createEntry("sampleXML.indd");
}
myDocument.loadXMLTags (filePath);
```

### Saving XML tags

Just as you can load XML tags from a file, you can save XML tags to a file, as shown in the following script. When you do this, only the tags themselves are saved in the XML file; document data is not included. As you would expect, this process is much faster than exporting XML, and the resulting file is much smaller. The following sample script shows how to save XML tags (for the complete script, see SaveXMLTags):

```js
//You'll have to fill in a valid file path for your system.
myDocument.saveXMLTags(filePath);
```

# XML Rules

### Setting up a sample document

```js
const { app } = require("indesign");
let ufs = require("uxp").storage.localFileSystem;
let myDocument = app.documents.item(0);
let folder =  await ufs.getEntryWithUrl("file:c:/Users/uxp/Desktop");
let filePath;
try {
    filePath = await folder.getEntry("sampleXML.xml");
}
catch (error){
    filePath = await folder.createEntry("sampleXML.xml");
}
 
main();
function main(){
    let myDocument = app.documents.add();
    myDocument.xmlImportPreferences.allowTransform = false;
    myDocument.xmlImportPreferences.ignoreWhitespace = true;
    myDocument.importXML(filePath);
    let myBounds = myGetBounds(myDocument, myDocument.pages.item(0));
    myDocument.xmlElements.item(0).placeIntoFrame(myDocument.pages.item(0), myBounds);
    function myGetBounds(myDocument, myPage){
        let myWidth = myDocument.documentPreferences.pageWidth;
        let myHeight = myDocument.documentPreferences.pageHeight;
        let myX1 = myPage.marginPreferences.left;
        let myY1 = myPage.marginPreferences.top;
        let myX2 = myWidth - myPage.marginPreferences.right;
        let myY2 = myHeight - myPage.marginPreferences.bottom;
        return [myY1, myX1, myY2, myX2];
    }
    function myGetScriptPath() {
        try {
            return app.activeScript;
        }
        catch(myError){
            console.log(myError);
        }
    }
}
```