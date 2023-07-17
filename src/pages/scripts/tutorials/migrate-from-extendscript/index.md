<!-- 
TODO Q: Are these applicable to plugins as well?
-->

# ExtendScript to UXP Script
ExtendScript uses an older version of JavaScript (ES3). In contrast, UXP uses the V8 JavaScript engine which supports ES6; this has several notable features lacking in ExtendScript. 

Not all the newer features of ES6 are used and/or supported in the UXP world, but as an ExtendScript developer, you should familiarize yourself with ECMAScript ES6 so you can understand the sample code.

This page goes over how ExtendScript can be converted to UXP script in simple steps.

1. Save the file with `.idjs` extension.
2. Update the script for unsupported methods

<table columnWidths="30,30,30, 10">
    <thead>
        <tr>
            <th>Differences</th>
            <th>ExtendScript</th>
            <th>UXP</th>
            <th>Applicable To</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>subscript operator [ ]</b> <br></br>
                Collection objects returned by InDesign like documents and paragraphs will not support subscript operator [ ] to access element at a particular index. The alternative is to use the method by name item()Objects like app.selection which is of type Array will support subscript operator. 
            </td>
            <td>
<code class="language-javascript">{`
for (j = 0; j < app.selection[0].paragraphs.length; j++) {
    var item = app.selection[0].paragraphs[j];
}
`}</code>
            </td>
            <td>
<code class="language-javascript">{`
for (j = 0; j < app.selection[0].paragraphs.length; j++) {
    var item = app.selection[0].paragraphs.item(j);
}
`}</code>
            </td>
            <td>All Versions</td>
        </tr>
        <tr>
            <td><b>Object.constructor.name</b> <br></br>
                <inlineCode>Object.constructor.name</inlineCode> which is a standard property in JS will return an empty string ("") for DOM objects. Alternatively, use the <inlineCode>object.constructorName</inlineCode> property.
            </td>
            <td>
<code class="language-javascript">{`
switch(myPageItem.constructor.name) {
    case "Rectangle":
    case "Oval":
        ...
        break; 
}
`}</code>
            </td>
            <td>
<code class="language-javascript">{`
switch(myPageItem.constructorName) {
    case "Rectangle":
    case "Oval":
        ...
        break; 
}
`}</code>
            </td>
            <td>Prior to v18.4</td>
        </tr>
        <tr>
            <td><b>Comparison operators(== and ===)</b><br></br>
                Comparison operators(== and ===) on InDesign DOM objects will always return false unless the objects have same reference. Instead use method equals()
            </td>
            <td>
<code class="language-javascript">{`
if (myPath.pathType == PathType.closedPath) { ... }
`}</code>
            </td>
            <td>
<code class="language-javascript">{`
if (myPath.pathType.equals(PathType.closedPath)) { ... }
`}</code>
            </td>
            <td> All Versions</td>
        </tr>
        <tr>
            <td><b>instanceof</b> <br></br>
The <inlineCode>instanceof</inlineCode> keyword isn't supported for InDesign DOM objects. Instead using <inlineCode>object.constructorName</inlineCode> property.
            </td>
            <td>
<code class="language-javascript">{`
if (app.selection[0].paragraphs[0].appliedParagraphStyle.parent instanceofParagraphStyleGroup) { ... }
`}</code>
            </td>
            <td>
<code class="language-javascript">{`
if (app.selection[0].paragraphs.item(0).parent.constructorName == "ParagraphStyleGroup") { ... } 
`}</code>
            </td>
            <td> Prior to v18.4</td>
        </tr>
        <tr>
            <td><b>Global object 'document'</b><br></br>
Global object 'document' is not supported now. Instead, use <inlineCode>app.activeDocument</inlineCode>
            </td>
            <td>
<code class="language-javascript">{`
document.findText()
`}</code>
            </td>
            <td>
<code class="language-javascript">{`
app.activeDocument.findText()
`}</code>
            </td>
            <td> All Versions</td>
        </tr>
        <tr>
            <td>ActiveScript <inlineCode>app.activeScript</inlineCode>
            </td>
            <td><inlineCode>app.activeScript</inlineCode> returns the current running script as a file object on which you can access other properties.
            </td>
            <td><inlineCode>app.activeScript</inlineCode> returns the path of the current script as a string. No other properties can be accessed on <inlineCode>app.activeScript</inlineCode>
            </td>
            <td>Prior to v18.4</td>
        </tr>
        <tr>
            <td>Fetching the InDesign Server arguments passed to a script.
            </td>
            <td><inlineCode>var myArg = app.scriptArgs.getValue("*argumentName*");</inlineCode>
            </td>
            <td><inlineCode>let arguments = script.args;</inlineCode> <a href={`../arguments/`}>Learn More</a>
            </td>
            <td>v18.4 Onwards</td>
        </tr>
    </tbody>
</table>
