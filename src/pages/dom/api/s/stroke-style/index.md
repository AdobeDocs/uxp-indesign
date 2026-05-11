# StrokeStyle
A stroke style.

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
> The unique ID of the StrokeStyle.
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
> The parent of the StrokeStyle (a Document or Application).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the StrokeStyle within its containing object.
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
> The name of the StrokeStyle.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> StrokeStyle **duplicate**()
> 
> Duplicates the StrokeStyle.
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
> Generates a string which, if executed, will return the StrokeStyle.
*** 
> StrokeStyle **getElements**()
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


