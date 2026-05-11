# StripedStrokeStyle
A striped stroke style.

## Instance
> *Read Only* 
> 
> String **strokeStyleType** 
>
> The stroke style type.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the StripedStrokeStyle.
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
> The parent of the StripedStrokeStyle (a Document or Application).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the StripedStrokeStyle within its containing object.
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
> Number **stripeArray** 
>
> The width and position of stripes in a striped stroke pattern. Each stripe is specified by a start-end pair in the format [start1, end1, start2, end2]; each value indicates a percentage of the stroke weight. Each value must be greater than the previous value. (Range: 0 to 100).
*** 
> String **name** 
>
> The name of the StripedStrokeStyle.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> StripedStrokeStyle **duplicate**()
> 
> Duplicates the StripedStrokeStyle.
*** 
> **remove**( Mixed **replacingWith** )
> 
> Deletes the stroke style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | replacingWith | The stroke style to apply in place of the deleted style. . Can accept: StrokeStyle or String. (Optional) |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the StripedStrokeStyle.
*** 
> StripedStrokeStyle **getElements**()
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


