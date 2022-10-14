# XMLExportMap
A mapping object that maps a style (paragraph, character, table, or cell) to an XML tag.

## Instance
> *Read Only* 
> 
> Mixed **mappedStyle** 
>
> The style mapped to the XML tag. Can return: ParagraphStyle, CharacterStyle, TableStyle or CellStyle. Can also accept: String.
*** 
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
> The parent of the XMLExportMap (a Application or Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the XMLExportMap within its containing object.
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
> XMLTag **markupTag** 
>
> The XML tag applied to the element. Can also accept: String.
*** 
> Boolean **includeMasterPageStories** 
>
> If true, includes stories on master spreads when mapping styles to tags.
*** 
> Boolean **includePasteboardStories** 
>
> If true, includes stories on the pasteboard when mapping styles to tags.
*** 
> Boolean **includeEmptyStories** 
>
> If true, includes empty stories when mapping styles to tags.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the XMLExportMap.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLExportMap.
*** 
> XMLExportMap **getElements**()
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


