# ChangeGlyphPreference
Change glyph preferences.

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
> The parent of the ChangeGlyphPreference (a Application).
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
> Mixed **designAxes** 
>
> Value of Design Axes. Can return: Array of Reals or NothingEnum enumerator.
*** 
> Mixed **glyphID** 
>
> The GID/CID of the glyph. Can return: Long Integer or NothingEnum enumerator.
*** 
> Mixed **appliedFont** 
>
> The font applied to the ChangeGlyphPreference, specified as either a font object or the name of font family. Can return: Font, String or NothingEnum enumerator.
*** 
> Mixed **fontStyle** 
>
> The name of the font style. Can return: String or NothingEnum enumerator.
*** 
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

*** 
> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
> 
> If true, Nth design axis of variable font is hidden.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | nthAxisIndex | Index of design axis. |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ChangeGlyphPreference.
*** 
> ChangeGlyphPreference **getElements**()
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


