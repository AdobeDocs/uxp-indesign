# TransformPreference
Transform preferences.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the TransformPreference (a Application).
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
> Boolean **dimensionsIncludeStrokeWeight** 
>
> If true, includes the stroke weight when displaying object dimensions. If false, measures objects from the path or frame.
*** 
> Boolean **transformationsAreTotals** 
>
> If true, transformation values are relative to the parent object. If false, the transformation values are absolute values.
*** 
> Boolean **showContentOffset** 
>
> If true, measures the x and y values of the object relative to the containing frame. If false, measures the x and y values relative to the rulers.
*** 
> Boolean **adjustEffectsWhenScaling** 
>
> If true, transparency effects are scaled when objects are scaled.
*** 
> WhenScalingOptions **whenScaling** 
>
> The method used to scale a page item.
*** 
> Boolean **adjustStrokeWeightWhenScaling** 
>
> If true, strokes are scaled when objects are scaled.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the TransformPreference.
*** 
> TransformPreference **getElements**()
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


