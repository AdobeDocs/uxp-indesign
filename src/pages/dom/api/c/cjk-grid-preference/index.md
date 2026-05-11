# CjkGridPreference
Character grid preferences.

## Instance
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
> The parent of the CjkGridPreference (a Application or Document).
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
> Boolean **showAllLayoutGrids** 
>
> If true, displays the layout grids.
*** 
> Boolean **showAllFrameGrids** 
>
> If true, displays the frame (story) grids.
*** 
> Number **minimumScale** 
>
> The view magnification (as a percentage) less than which grids do not appear. (Range: 5 to 4000)
*** 
> Boolean **snapToLayoutGrid** 
>
> If true, objects snap to the layout grid.
*** 
> Mixed **layoutGridColorIndex** 
>
> The layout grid color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> Number **colorEveryNthCell** 
>
> Applies the grid color to every nth cell, where n is the value of this property.
*** 
> Boolean **singleLineColorMode** 
>
> If true, applies the grid color from the the edge of the line. If false, applies the grid color from the corner of the frame.
*** 
> Boolean **icfMode** 
>
> If true, uses ICF mode for grid cells. If false, uses virtual body mode.
*** 
> Boolean **useCircularCells** 
>
> If true, cell shape is circular. If false, cell shape is rectangular.
*** 
> Boolean **showCharacterCount** 
>
> If true, displays the character count for the frame.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the CjkGridPreference.
*** 
> CjkGridPreference **getElements**()
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


