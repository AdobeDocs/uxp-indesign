# XMLImportMap
A mapping object that maps an XML tag to a style (paragraph, character, table, or cell).

## Instance
> *Read Only* 
> 
> XMLTag **markupTag** 
>
> The XML tag applied to the element. Can also accept: String.
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
> The parent of the XMLImportMap (a Application or Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the XMLImportMap within its containing object.
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
> Mixed **mappedStyle** 
>
> The style mapped to the XML tag. Can return: ParagraphStyle, CharacterStyle, TableStyle or CellStyle. Can also accept: String.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the XMLImportMap.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLImportMap.
*** 
> XMLImportMap **getElements**()
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


