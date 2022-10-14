# GridPreference
Grid preferences.

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
> The parent of the GridPreference (a Application or Document).
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
> Boolean **documentGridShown** 
>
> If true, displays the document grid.
*** 
> Boolean **documentGridSnapto** 
>
> If true, an object snaps to the nearest grid line when the object is created, moved, or resized.
*** 
> Measurement Unit (Number or String)=any **horizontalGridlineDivision** 
>
> The amount of space between major horizontal lines in the document grid.
*** 
> Measurement Unit (Number or String)=any **verticalGridlineDivision** 
>
> The amount of space between major vertical lines in the document grid.
*** 
> Number **horizontalGridSubdivision** 
>
> The number of rows into which to subdivide the space between horizontal document grid lines.
*** 
> Number **verticalGridSubdivision** 
>
> The number of columns into which to subdivide the space between vertical document grid lines.
*** 
> Mixed **gridColor** 
>
> The color of the document grid, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> Boolean **gridsInBack** 
>
> If true, places grids behind all other objects on the spread.
*** 
> Boolean **baselineGridShown** 
>
> If true, displays the baseline grid.
*** 
> Measurement Unit (Number or String)=any **baselineStart** 
>
> The amount to offset the baseline grid from the zero point.
*** 
> Measurement Unit (Number or String)=any **baselineDivision** 
>
> The amount of space between baseline grid lines.
*** 
> Number **baselineViewThreshold** 
>
> The magnification (as a percentage) less than which ruler guides do not appear. (Range: 5 to 4000)
*** 
> Mixed **baselineColor** 
>
> The color of the baseline grid, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> BaselineGridRelativeOption **baselineGridRelativeOption** 
>
> The zero point for the baseline grid offset.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the GridPreference.
*** 
> GridPreference **getElements**()
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


