# CompositeFontEntry
A composite font entry.

## Instance
> *Read Only* 
> 
> Boolean **locked** 
>
> If true, the CompositeFontEntry is locked.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the CompositeFontEntry.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> CompositeFont **parent** 
>
> The parent of the CompositeFontEntry (a CompositeFont).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the CompositeFontEntry within its containing object.
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
> The name of the CompositeFontEntry.
<HorizontalLine />
> Mixed **appliedFont** 
>
> The font applied to the CompositeFontEntry, specified as either a font object or the name of font family. Can return: Font or String.
<HorizontalLine />
> String **fontStyle** 
>
> The name of the font style.
<HorizontalLine />
> Number **relativeSize** 
>
> The size of the entry relative to the base entry. Note: The base entry cannot be modified.
<HorizontalLine />
> Number **horizontalScale** 
>
> The horizontal scaling applied to the CompositeFontEntry.
<HorizontalLine />
> Number **verticalScale** 
>
> The vertical scaling applied to the CompositeFontEntry.
<HorizontalLine />
> String **customCharacters** 
>
> The characters that the set affects.
<HorizontalLine />
> Boolean **scaleOption** 
>
> If true, scales characters from the center.
<HorizontalLine />
> Number **baselineShift** 
>
> The amount of baseline shift.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the CompositeFontEntry.
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
> Generates a string which, if executed, will return the CompositeFontEntry.
<HorizontalLine />
> CompositeFontEntry **getElements**()
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


