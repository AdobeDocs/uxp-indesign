# GradientStop
A gradient stop in a gradient.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Gradient **parent** 
>
> The parent of the GradientStop (a Gradient).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the GradientStop within its containing object.
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
> Mixed **stopColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gradient stop. Can return: MixedInk or Color.
<HorizontalLine />
> Number **location** 
>
> The starting location (as a percentage of the gradient length) of the gradient stop on the gradient. (Range: 0 to 100).
<HorizontalLine />
> Number **midpoint** 
>
> The mid-point (as a percentage of the gradient length) of the gradient stop. (Range: 13 to 87)
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the GradientStop.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the GradientStop.
<HorizontalLine />
> GradientStop **getElements**()
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


