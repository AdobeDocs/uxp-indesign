# XMLImportPreference
XML import preferences.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the XMLImportPreference (a Application or Document).
*** 
> *Read Only* 
> 
> Events **events** 
>
> A collection of events.
*** 
> *Read Only* 
> 
> EventListeners **eventListeners** 
>
> A collection of event listeners.
*** 
> Boolean **createLinkToXML** 
>
> If true, creates a link to the imported XML file. If false, embeds the file.
*** 
> Boolean **repeatTextElements** 
>
> If true, repeating text elements inherit the formatting applied to placeholder text. Note: Valid only when import style is merge.
*** 
> Boolean **ignoreUnmatchedIncoming** 
>
> If true, ignores elements that do not match the existing structure. Note: Valid only when import style is merge.
*** 
> Boolean **importTextIntoTables** 
>
> If true, imports text into tables if tags match placeholder tables and their cells. Note: Valid only when import style is merge.
*** 
> Boolean **ignoreWhitespace** 
>
> If true, leaves existing content in place if the matching XML content contains only whitespace characters such as a carriage return or a tab character. Note: Valid only when import style is merge.
*** 
> Boolean **removeUnmatchedExisting** 
>
> If true, deletes existing elements or placeholders in the document that do not have matches in the XML file. Note: Valid only when import style is merge.
*** 
> Boolean **importToSelected** 
>
> If true, imports into the selected XML element. If false, imports at the root element.
*** 
> XMLImportStyles **importStyle** 
>
> The style of incorporating imported XML content into the document.
*** 
> Boolean **allowTransform** 
>
> If true, transforms the XML using an XSLT file.
*** 
> Mixed **transformFilename** 
>
> The name of the XSLT file. Note: Valid when allow transform is true. Can return: File or XMLTransformFile enumerator.
*** 
> Mixed **transformParameters** 
>
> Stylesheet parameters as a list of name/value pairs in the format [[name, value], [name, value], ...]. Can return: Ordered array containing name:String, value:String.
*** 
> Boolean **importCALSTables** 
>
> If true, imports CALS tables as InDesign tables.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLImportPreference.
*** 
> XMLImportPreference **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
*** 
> String **toSpecifier**()
> 
> Retrieves the object specifier.
*** 
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Adds an event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

*** 
> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Removes the event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |


