# AlignDistributePreference
Preferences for alignment and distribution.

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
> The parent of the AlignDistributePreference (a Application).
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
> AlignDistributeBounds **alignDistributeBounds** 
>
> The bounds to use as a basis for aligning or distributing page items.
*** 
> Boolean **distributeAbsolute** 
>
> If true, distribute space between page items and ignore the bounds setting.
*** 
> Measurement Unit (Number or String)=any **distributeAbsoluteMeasurement** 
>
> The distance to use when distributing page items.
*** 
> Boolean **distributeSpaceAbsolute** 
>
> If true, distribute space between page items and ignore the bounds setting.
*** 
> Measurement Unit (Number or String)=any **distributeSpaceAbsoluteMeasurement** 
>
> The distance to use when distributing page items.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the AlignDistributePreference.
*** 
> AlignDistributePreference **getElements**()
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


