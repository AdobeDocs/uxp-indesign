# ViewPreference
View preferences.

## Instance
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
> The parent of the ViewPreference (a Application or Document).
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
> Number **pointsPerInch** 
>
> The number of points per inch, typically 72. (Range: 60 to 80)
<HorizontalLine />
> Number **horizontalCustomPoints** 
>
> The distance (in points) between major tick marks on the horizontal ruler. (Range: 4 to 256) Valid only when horizontal measurement units is custom.
<HorizontalLine />
> Number **verticalCustomPoints** 
>
> The distance (in points) between major tick marks on the vertical ruler. (Range: 4 to 256) Valid only when vertical measurement units is custom.
<HorizontalLine />
> MeasurementUnits **strokeMeasurementUnits** 
>
> The measurement unit for stroke measurements.
<HorizontalLine />
> Number **guideSnaptoZone** 
>
> The range (in pixels) within which an object snaps to guides. (Range: 1 to 36) Note: Snapping occurs only when guides are shown.
<HorizontalLine />
> Measurement Unit (Number or String)=any **cursorKeyIncrement** 
>
> The distance to move a specified object when an arrow key is pressed. (Range depends on the measurement unit. For points: 0.001 to 100; picas: 0p0.001 to 8p4; mm: 0 to 35.278; cm: 0 to 3.5278; inches: 0 to 1.3889; ciceros: 0c0.001 to 7c9.839)
<HorizontalLine />
> MeasurementUnits **horizontalMeasurementUnits** 
>
> The measurement unit for the horizontal ruler and other horizontally-measured spaces such as grid columns, horizontal offsets, column gutters, or others.
<HorizontalLine />
> MeasurementUnits **verticalMeasurementUnits** 
>
> The measurement unit for the vertical ruler and other vertically-measured spaces such as grid rows, vertical offsets, row heights, or others.
<HorizontalLine />
> RulerOrigin **rulerOrigin** 
>
> The default zero point at the intersection of the vertical and horizontal rulers and the scope of the horizontal ruler.
<HorizontalLine />
> Boolean **showRulers** 
>
> If true, displays the horizontal and vertical rulers.
<HorizontalLine />
> Boolean **showFrameEdges** 
>
> If true, displays borders of unselected frames and the diagonal lines in empty unselected frames.
<HorizontalLine />
> MeasurementUnits **typographicMeasurementUnits** 
>
> The measurement units for typography.
<HorizontalLine />
> MeasurementUnits **textSizeMeasurementUnits** 
>
> The measurement unit for text size measurements.
<HorizontalLine />
> MeasurementUnits **printDialogMeasurementUnits** 
>
> The measurement unit for the print dialog.
<HorizontalLine />
> Boolean **showNotes** 
>
> If true, notes are displayed.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the ViewPreference.
<HorizontalLine />
> ViewPreference **getElements**()
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


