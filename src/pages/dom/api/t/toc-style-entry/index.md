# TOCStyleEntry
A TOC entry definition.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> TOCStyle **parent** 
>
> The parent of the TOCStyleEntry (a TOCStyle).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the TOCStyleEntry within its containing object.
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
> String **name** 
>
> The name of the TOCStyleEntry.
*** 
> Mixed **formatStyle** 
>
> The paragraph style applied to the TOC entry. Can return: ParagraphStyle or String.
*** 
> Number **level** 
>
> The indent level of the entry in the TOC.
*** 
> Mixed **pageNumberStyle** 
>
> The character style applied to the page number of the entry. Can return: CharacterStyle or String.
*** 
> PageNumberPosition **pageNumberPosition** 
>
> The page number placement for the TOC entry style.
*** 
> String **separator** 
>
> The string to insert between the entry text and the page numbers.
*** 
> Mixed **separatorStyle** 
>
> The character style applied to the string separating the TOC entry text and the page numbers. Can return: CharacterStyle or String.
*** 
> Boolean **sortAlphabet** 
>
> If true, sorts the entries alphabetically.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the TOCStyleEntry.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TOCStyleEntry.
*** 
> TOCStyleEntry **getElements**()
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


