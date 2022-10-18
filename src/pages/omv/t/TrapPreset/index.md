# TrapPreset
A trap preset.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the TrapPreset.
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
> The parent of the TrapPreset (a Application or Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the TrapPreset within its containing object.
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
> The name of the TrapPreset.
*** 
> Measurement Unit (Number or String)=any **defaultTrapWidth** 
>
> The default width for trapping all colors except those involving solid black. (Range depends on unit. For points: 0.0 to 8.0; picas: 0p0 to 0p8; inches: 0 to 0.1111; mm: 0 to 2.822; cm: 0 to .2822; ciceros: 0c0 to 0c7.507)
*** 
> Measurement Unit (Number or String)=any **blackWidth** 
>
> The black width. (Range depends on unit. For points: 0.0 to 8.0; picas: 0p0 to 0p8; inches: 0 to 0.1111; mm: 0 to 2.822; cm: 0 to .2822; ciceros: 0c0 to 0c7.507)
*** 
> EndJoin **trapJoin** 
>
> The join type of the trap preset.
*** 
> TrapEndTypes **trapEnd** 
>
> The shape to use at the intersection of three-way traps.
*** 
> Boolean **objectsToImages** 
>
> If true, ensures that vector objects overlap bitmap images.
*** 
> Boolean **imagesToImages** 
>
> If true, turns on trapping along the boundary of overlapping or abutting bitmap images.
*** 
> Boolean **internalImages** 
>
> If true, turns on trapping among colors within individual bitmap images.
*** 
> Boolean **oneBitImages** 
>
> If true, ensures that one-bit images trap to abutting objects.
*** 
> TrapImagePlacementTypes **imagePlacement** 
>
> The trap placement between vector objects and bitmap images.
*** 
> Number **stepThreshold** 
>
> The amount (as a percentage) that components of abutting colors must vary before a trap is created. (Range: 1 to 100)
*** 
> Number **blackColorThreshold** 
>
> The minimum amount (as a percentage) of black ink required before the black width setting is applied. (Range: 0 to 100)
*** 
> Number **blackDensity** 
>
> The neutral density value at or above which an ink is considered black. (Range: .001 to 10)
*** 
> Number **slidingTrapThreshold** 
>
> The difference (as a percentage) between the neutral densities of abutting colors at which the trap is moved from the darker side of a color edge toward the centerline. (Range: 0 to 100)
*** 
> Number **colorReduction** 
>
> The degree (as a percentage) to which components from abutting colors are used to reduce the trap color. (Range: 0 to 100) Note: 0% makes a trap whose neutral density is equal to the neutral density of the darker color.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> TrapPreset **duplicate**()
> 
> Duplicates the TrapPreset.
*** 
> **remove**( TrapPreset **replacingWith** )
> 
> Deletes the trap preset.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TrapPreset | replacingWith | The trap preset to apply in place of the deleted preset. |

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
> Generates a string which, if executed, will return the TrapPreset.
*** 
> TrapPreset **getElements**()
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


