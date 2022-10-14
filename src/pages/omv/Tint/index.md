# Tint
A tint swatch.

## Instance
> *Read Only* 
> 
> Color **baseColor** 
>
> The color that the tint is based on.
*** 
> *Read Only* 
> 
> String **name** 
>
> The name of the Tint.
*** 
> *Read Only* 
> 
> ColorModel **model** 
>
> The color model.
*** 
> *Read Only* 
> 
> ColorSpace **space** 
>
> The color space.
*** 
> *Read Only* 
> 
> Number **colorValue** 
>
> The ink values that create the color, specified as a percentage for each ink. Note: The number of values required and the range depends on the color space. For RGB, specify three values, with each value in the range 0 to 255; for CMYK, specify four values representing C, M, Y, and K, with each value in the range 0 to 100; for LAB, specify three values representing L (Range: 0 to 100), A (Range: -128 to 127), and B (Range: -128 to 127); for mixed ink, specify values for each ink in the ink list, with each value in the range 0 to 100.
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
> The unique ID of the Tint.
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
> The parent of the Tint (a Application or Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Tint within its containing object.
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
> Number **tintValue** 
>
> The percent of the base color. (Range: 0 to 100)
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
> Tint **duplicate**()
> 
> Duplicates the Tint.
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
> Generates a string which, if executed, will return the Tint.
*** 
> Tint **getElements**()
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


