# TrapPreset
A trap preset.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the TrapPreset.
<HorizontalLine />
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
> The parent of the TrapPreset (a Application or Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the TrapPreset within its containing object.
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
> String **name** 
>
> The name of the TrapPreset.
<HorizontalLine />
> Measurement Unit (Number or String)=any **defaultTrapWidth** 
>
> The default width for trapping all colors except those involving solid black. (Range depends on unit. For points: 0.0 to 8.0; picas: 0p0 to 0p8; inches: 0 to 0.1111; mm: 0 to 2.822; cm: 0 to .2822; ciceros: 0c0 to 0c7.507)
<HorizontalLine />
> Measurement Unit (Number or String)=any **blackWidth** 
>
> The black width. (Range depends on unit. For points: 0.0 to 8.0; picas: 0p0 to 0p8; inches: 0 to 0.1111; mm: 0 to 2.822; cm: 0 to .2822; ciceros: 0c0 to 0c7.507)
<HorizontalLine />
> EndJoin **trapJoin** 
>
> The join type of the trap preset.
<HorizontalLine />
> TrapEndTypes **trapEnd** 
>
> The shape to use at the intersection of three-way traps.
<HorizontalLine />
> Boolean **objectsToImages** 
>
> If true, ensures that vector objects overlap bitmap images.
<HorizontalLine />
> Boolean **imagesToImages** 
>
> If true, turns on trapping along the boundary of overlapping or abutting bitmap images.
<HorizontalLine />
> Boolean **internalImages** 
>
> If true, turns on trapping among colors within individual bitmap images.
<HorizontalLine />
> Boolean **oneBitImages** 
>
> If true, ensures that one-bit images trap to abutting objects.
<HorizontalLine />
> TrapImagePlacementTypes **imagePlacement** 
>
> The trap placement between vector objects and bitmap images.
<HorizontalLine />
> Number **stepThreshold** 
>
> The amount (as a percentage) that components of abutting colors must vary before a trap is created. (Range: 1 to 100)
<HorizontalLine />
> Number **blackColorThreshold** 
>
> The minimum amount (as a percentage) of black ink required before the black width setting is applied. (Range: 0 to 100)
<HorizontalLine />
> Number **blackDensity** 
>
> The neutral density value at or above which an ink is considered black. (Range: .001 to 10)
<HorizontalLine />
> Number **slidingTrapThreshold** 
>
> The difference (as a percentage) between the neutral densities of abutting colors at which the trap is moved from the darker side of a color edge toward the centerline. (Range: 0 to 100)
<HorizontalLine />
> Number **colorReduction** 
>
> The degree (as a percentage) to which components from abutting colors are used to reduce the trap color. (Range: 0 to 100) Note: 0% makes a trap whose neutral density is equal to the neutral density of the darker color.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> TrapPreset **duplicate**()
> 
> Duplicates the TrapPreset.
<HorizontalLine />
> **remove**( TrapPreset **replacingWith** )
> 
> Deletes the trap preset.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TrapPreset | replacingWith | The trap preset to apply in place of the deleted preset. |

<HorizontalLine />
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

<HorizontalLine />
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the TrapPreset.
<HorizontalLine />
> TrapPreset **getElements**()
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


