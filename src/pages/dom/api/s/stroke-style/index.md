# StrokeStyle
A stroke style.

## Instance
> *Read Only* 
> 
> String **strokeStyleType** 
>
> The stroke style type.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the StrokeStyle.
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
> The parent of the StrokeStyle (a Document or Application).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the StrokeStyle within its containing object.
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
> The name of the StrokeStyle.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> StrokeStyle **duplicate**()
> 
> Duplicates the StrokeStyle.
<HorizontalLine />
> **remove**( Mixed **replacingWith** )
> 
> Deletes the stroke style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | replacingWith | The stroke style to apply in place of the deleted style. . Can accept: StrokeStyle or String. (Optional) |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the StrokeStyle.
<HorizontalLine />
> StrokeStyle **getElements**()
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


