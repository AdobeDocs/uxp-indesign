# BuildingBlock
A cross reference building block object.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> CrossReferenceFormat **parent** 
>
> The parent of the BuildingBlock (a CrossReferenceFormat).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the BuildingBlock within its containing object.
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
> BuildingBlockTypes **blockType** 
>
> Type of the building block.
*** 
> CharacterStyle **appliedCharacterStyle** 
>
> Character style to be applied to the building block.
*** 
> String **customText** 
>
> Building block custom text. Currently this is only useful in custom string building block. It is ignored for other types of building blocks.
*** 
> String **appliedDelimiter** 
>
> Delimiter character for paragraph text and full paragraph building blocks. It is ignored for other types of building blocks.
*** 
> Boolean **includeDelimiter** 
>
> If true, the source generated for the building block includes the delimiter. It is ignored if no delimiter is specified on the building block.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the BuildingBlock.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the BuildingBlock.
*** 
> BuildingBlock **getElements**()
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


