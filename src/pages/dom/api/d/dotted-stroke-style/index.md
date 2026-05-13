# DottedStrokeStyle
A dotted stroke style.

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
> The unique ID of the DottedStrokeStyle.
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
> The parent of the DottedStrokeStyle (a Document or Application).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the DottedStrokeStyle within its containing object.
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
> Measurement Unit (Number or String)=any **dotArray** 
>
> The length of gaps between dots. Define up to five values.
<HorizontalLine />
> StrokeCornerAdjustment **strokeCornerAdjustment** 
>
> The corner adjustment applied to the DottedStrokeStyle.
<HorizontalLine />
> String **name** 
>
> The name of the DottedStrokeStyle.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> DottedStrokeStyle **duplicate**()
> 
> Duplicates the DottedStrokeStyle.
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
> Generates a string which, if executed, will return the DottedStrokeStyle.
<HorizontalLine />
> DottedStrokeStyle **getElements**()
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


