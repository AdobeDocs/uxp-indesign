# OpacityGradientStop
An opacity gradient stop.

## Instance
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
> The parent of the OpacityGradientStop (a GradientFeatherSetting or FindChangeGradientFeatherSetting).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the OpacityGradientStop within its containing object.
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
> Number **opacity** 
>
> The opacity of the opacity gradient stop (as a percentage). (Range: 0 to 100)
<HorizontalLine />
> Number **location** 
>
> The location of the opacity gradient stop, as a percentage of the OpacityGradientStop size. (Range: 0 to 100)
<HorizontalLine />
> Number **midpoint** 
>
> The mid-point of the opacity gradient stop, as a percentage of the OpacityGradientStop size. (Range: 13 to 87)
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the OpacityGradientStop.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the OpacityGradientStop.
<HorizontalLine />
> OpacityGradientStop **getElements**()
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


