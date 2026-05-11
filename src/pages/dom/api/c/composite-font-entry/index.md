# CompositeFontEntry
A composite font entry.

## Instance
> *Read Only* 
> 
> Boolean **locked** 
>
> If true, the CompositeFontEntry is locked.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the CompositeFontEntry.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> CompositeFont **parent** 
>
> The parent of the CompositeFontEntry (a CompositeFont).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the CompositeFontEntry within its containing object.
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
> The name of the CompositeFontEntry.
*** 
> Mixed **appliedFont** 
>
> The font applied to the CompositeFontEntry, specified as either a font object or the name of font family. Can return: Font or String.
*** 
> String **fontStyle** 
>
> The name of the font style.
*** 
> Number **relativeSize** 
>
> The size of the entry relative to the base entry. Note: The base entry cannot be modified.
*** 
> Number **horizontalScale** 
>
> The horizontal scaling applied to the CompositeFontEntry.
*** 
> Number **verticalScale** 
>
> The vertical scaling applied to the CompositeFontEntry.
*** 
> String **customCharacters** 
>
> The characters that the set affects.
*** 
> Boolean **scaleOption** 
>
> If true, scales characters from the center.
*** 
> Number **baselineShift** 
>
> The amount of baseline shift.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the CompositeFontEntry.
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
> Generates a string which, if executed, will return the CompositeFontEntry.
*** 
> CompositeFontEntry **getElements**()
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


