# MixedInk
A mixed ink swatch.

## Instance
> *Read Only* 
> 
> Ink **inkList** 
>
> The component inks.
*** 
> *Read Only* 
> 
> MixedInkGroup **baseColor** 
>
> The mixed ink group that a mixed ink swatch is based on.
*** 
> *Read Only* 
> 
> ColorGroup **parentColorGroup** 
>
> The color group that a swatch belongs to
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the MixedInk.
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
> The parent of the MixedInk (a Application or Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the MixedInk within its containing object.
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
> ColorModel **model** 
>
> The color model.
*** 
> ColorSpace **space** 
>
> The color space.
*** 
> Number **inkPercentages** 
>
> The array of tint percentages for inks in the ink list. Note: Specify a value for each ink.
*** 
> String **name** 
>
> The name of the MixedInk.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**( Swatch **replacingWith** )
> 
> Deletes the swatch.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Swatch | replacingWith | The swatch to apply in place of the deleted swatch. (Optional) |

*** 
> MixedInk **duplicate**()
> 
> Duplicates the MixedInk.
*** 
> Swatch **merge**( Mixed **with** )
> 
> Merges the specified swatches with the swatch.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | with | The swatches to merge. Can accept: Array of Swatches, Swatch or String. |

*** 
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

*** 
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the MixedInk.
*** 
> MixedInk **getElements**()
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


