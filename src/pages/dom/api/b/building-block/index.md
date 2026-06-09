# BuildingBlock
A cross reference building block object.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> CrossReferenceFormat **parent** 
>
> The parent of the BuildingBlock (a CrossReferenceFormat).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the BuildingBlock within its containing object.
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
> BuildingBlockTypes **blockType** 
>
> Type of the building block.
<HorizontalLine />
> CharacterStyle **appliedCharacterStyle** 
>
> Character style to be applied to the building block.
<HorizontalLine />
> String **customText** 
>
> Building block custom text. Currently this is only useful in custom string building block. It is ignored for other types of building blocks.
<HorizontalLine />
> String **appliedDelimiter** 
>
> Delimiter character for paragraph text and full paragraph building blocks. It is ignored for other types of building blocks.
<HorizontalLine />
> Boolean **includeDelimiter** 
>
> If true, the source generated for the building block includes the delimiter. It is ignored if no delimiter is specified on the building block.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the BuildingBlock.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the BuildingBlock.
<HorizontalLine />
> BuildingBlock **getElements**()
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


