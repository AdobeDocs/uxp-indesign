# TOCStyleEntry
A TOC entry definition.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> TOCStyle **parent** 
>
> The parent of the TOCStyleEntry (a TOCStyle).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the TOCStyleEntry within its containing object.
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
> String **name** 
>
> The name of the TOCStyleEntry.
<HorizontalLine />
> Mixed **formatStyle** 
>
> The paragraph style applied to the TOC entry. Can return: ParagraphStyle or String.
<HorizontalLine />
> Number **level** 
>
> The indent level of the entry in the TOC.
<HorizontalLine />
> Mixed **pageNumberStyle** 
>
> The character style applied to the page number of the entry. Can return: CharacterStyle or String.
<HorizontalLine />
> PageNumberPosition **pageNumberPosition** 
>
> The page number placement for the TOC entry style.
<HorizontalLine />
> String **separator** 
>
> The string to insert between the entry text and the page numbers.
<HorizontalLine />
> Mixed **separatorStyle** 
>
> The character style applied to the string separating the TOC entry text and the page numbers. Can return: CharacterStyle or String.
<HorizontalLine />
> Boolean **sortAlphabet** 
>
> If true, sorts the entries alphabetically.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the TOCStyleEntry.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the TOCStyleEntry.
<HorizontalLine />
> TOCStyleEntry **getElements**()
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


