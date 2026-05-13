# AlignDistributePreference
Preferences for alignment and distribution.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the AlignDistributePreference (a Application).
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
> AlignDistributeBounds **alignDistributeBounds** 
>
> The bounds to use as a basis for aligning or distributing page items.
<HorizontalLine />
> Boolean **distributeAbsolute** 
>
> If true, distribute space between page items and ignore the bounds setting.
<HorizontalLine />
> Measurement Unit (Number or String)=any **distributeAbsoluteMeasurement** 
>
> The distance to use when distributing page items.
<HorizontalLine />
> Boolean **distributeSpaceAbsolute** 
>
> If true, distribute space between page items and ignore the bounds setting.
<HorizontalLine />
> Measurement Unit (Number or String)=any **distributeSpaceAbsoluteMeasurement** 
>
> The distance to use when distributing page items.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the AlignDistributePreference.
<HorizontalLine />
> AlignDistributePreference **getElements**()
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


