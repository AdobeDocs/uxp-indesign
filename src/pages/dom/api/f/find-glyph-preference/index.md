# FindGlyphPreference
Find glyph preferences.

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
> The parent of the FindGlyphPreference (a Application).
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
> Mixed **designAxes** 
>
> Value of Design Axes. Can return: Array of Reals or NothingEnum enumerator.
<HorizontalLine />
> Mixed **glyphID** 
>
> The GID/CID of the glyph. Can return: Long Integer or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rosFontGroup** 
>
> The Registry Ordered font group. Can return: Array of 2 Strings or NothingEnum enumerator.
<HorizontalLine />
> Mixed **appliedFont** 
>
> The font applied to the FindGlyphPreference, specified as either a font object or the name of font family. Can return: Font, String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **fontStyle** 
>
> The name of the font style. Can return: String or NothingEnum enumerator.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
> 
> Set Nth design axis of a variable font.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | nthAxisIndex | Index of design axis. |
| Number | nthAxisValue | Value of nth design axis. |

<HorizontalLine />
> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
> 
> If true, Nth design axis of variable font is hidden.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | nthAxisIndex | Index of design axis. |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the FindGlyphPreference.
<HorizontalLine />
> FindGlyphPreference **getElements**()
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


