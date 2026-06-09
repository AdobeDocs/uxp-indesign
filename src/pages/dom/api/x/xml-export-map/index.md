# XMLExportMap
A mapping object that maps a style (paragraph, character, table, or cell) to an XML tag.

## Instance
> *Read Only* 
> 
> Mixed **mappedStyle** 
>
> The style mapped to the XML tag. Can return: ParagraphStyle, CharacterStyle, TableStyle or CellStyle. Can also accept: String.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the XMLExportMap (a Application or Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the XMLExportMap within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> Events **events** 
>
> A collection of events.
<HorizontalLine />
> *Read Only* 
> 
> EventListeners **eventListeners** 
>
> A collection of event listeners.
<HorizontalLine />
> XMLTag **markupTag** 
>
> The XML tag applied to the element. Can also accept: String.
<HorizontalLine />
> Boolean **includeMasterPageStories** 
>
> If true, includes stories on master spreads when mapping styles to tags.
<HorizontalLine />
> Boolean **includePasteboardStories** 
>
> If true, includes stories on the pasteboard when mapping styles to tags.
<HorizontalLine />
> Boolean **includeEmptyStories** 
>
> If true, includes empty stories when mapping styles to tags.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the XMLExportMap.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLExportMap.
<HorizontalLine />
> XMLExportMap **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
<HorizontalLine />
> String **toSpecifier**()
> 
> Retrieves the object specifier.
<HorizontalLine />
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Adds an event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

<HorizontalLine />
> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Removes the event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |


