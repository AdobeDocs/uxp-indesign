# DTD
The document DTD.

## Instance
> *Read Only* 
> 
> String **systemId** 
>
> The system ID of the DOCTYPE declaration. Note: Valid only when the DTD is an external subset.
<HorizontalLine />
> *Read Only* 
> 
> String **publicId** 
>
> The public ID of the DOCTYPE declaration. Note: Valid only when the DTD is an external subset.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **contents** 
>
> The contents of the text. Can return: String or SpecialCharacters enumerator.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the DTD.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the DTD (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the DTD within its containing object.
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
> XMLTag **rootTag** 
>
> The tag of the root object.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the DTD.
<HorizontalLine />
> **select**( SelectionOptions **existingSelection** )
> 
> Selects the object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SelectionOptions | existingSelection | The selection status of the DTD in relation to previously selected objects. (Optional) |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the DTD.
<HorizontalLine />
> DTD **getElements**()
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


