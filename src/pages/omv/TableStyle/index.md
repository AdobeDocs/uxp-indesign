# TableStyle
A table style.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the TableStyle.
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
> The parent of the TableStyle (a Document, Application or TableStyleGroup).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the TableStyle within its containing object.
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
> Measurement Unit (Number or String)=any **graphicLeftInset** 
>
> The left inset of the graphic cell.
*** 
> Measurement Unit (Number or String)=any **graphicTopInset** 
>
> The top inset of the graphic cell.
*** 
> Measurement Unit (Number or String)=any **graphicRightInset** 
>
> The right inset of the graphic cell.
*** 
> Measurement Unit (Number or String)=any **graphicBottomInset** 
>
> The bottom inset of the graphic cell.
*** 
> Boolean **clipContentToGraphicCell** 
>
> If true, clips the graphic cell's content to width and height of the cell.
*** 
> Measurement Unit (Number or String)=any **textTopInset** 
>
> The top inset of the text cell.
*** 
> Measurement Unit (Number or String)=any **textLeftInset** 
>
> The left inset of the text cell.
*** 
> Measurement Unit (Number or String)=any **textBottomInset** 
>
> The bottom inset of the text cell.
*** 
> Measurement Unit (Number or String)=any **textRightInset** 
>
> The right inset of the text cell.
*** 
> Boolean **clipContentToTextCell** 
>
> If true, clips the text cell's content to width and height of the cell.
*** 
> String **name** 
>
> The name of the TableStyle.
*** 
> Mixed **basedOn** 
>
> The style that this style is based on. Can return: TableStyle or String.
*** 
> StrokeOrderTypes **strokeOrder** 
>
> The order in which to display row and column strokes at corners.
*** 
> Measurement Unit (Number or String)=any **topBorderStrokeWeight** 
>
> The stroke weight of the table's top border stroke.
*** 
> StrokeStyle **topBorderStrokeType** 
>
> The stroke type of the top border. Can also accept: String.
*** 
> Swatch **topBorderStrokeColor** 
>
> The color, specified as a swatch (color, gradient, tint, or mixed ink), of the table's top border stroke.
*** 
> Number **topBorderStrokeTint** 
>
> The tint (as a percentage) of the table's top border stroke. (Range: 0 to 100)
*** 
> Boolean **topBorderStrokeOverprint** 
>
> If true, the top border strokes will overprint.
*** 
> Swatch **topBorderStrokeGapColor** 
>
> The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the table's top border stroke. Note: Valid only when top border stroke type is not solid.
*** 
> Number **topBorderStrokeGapTint** 
>
> The tint (as a percentage) of the gap color of the table's top border stroke. (Range: 0 to 100) Note: Valid only when top border stroke type is not solid.
*** 
> Boolean **topBorderStrokeGapOverprint** 
>
> If true, the gap of the top border stroke will overprint. Note: Valid only when top border stroke type is not solid.
*** 
> Measurement Unit (Number or String)=any **leftBorderStrokeWeight** 
>
> The stroke weight of the left border stroke.
*** 
> StrokeStyle **leftBorderStrokeType** 
>
> The stroke type of the left border. Can also accept: String.
*** 
> Swatch **leftBorderStrokeColor** 
>
> The color, specified as a swatch (color, gradient, tint, or mixed ink), of the left border stroke.
*** 
> Number **leftBorderStrokeTint** 
>
> The tint (as a percentage) of the left border stroke. (Range: 0 to 100)
*** 
> Boolean **leftBorderStrokeOverprint** 
>
> If true, the left border stroke will overprint.
*** 
> Swatch **leftBorderStrokeGapColor** 
>
> The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the left border stroke. Note: Valid only when left border stroke type is not solid.
*** 
> Number **leftBorderStrokeGapTint** 
>
> The tint (as a percentage) of the gap color of the left border stroke. (Range: 0 to 100) Note: Valid only when left border stroke type is not solid.
*** 
> Boolean **leftBorderStrokeGapOverprint** 
>
> If true, the gap of the left border stroke will overprint. Note: Valid only when left border stroke type is not solid.
*** 
> Measurement Unit (Number or String)=any **bottomBorderStrokeWeight** 
>
> The stroke weight of the bottom border stroke.
*** 
> StrokeStyle **bottomBorderStrokeType** 
>
> The stroke type of the bottom border. Can also accept: String.
*** 
> Swatch **bottomBorderStrokeColor** 
>
> The color, specified as a swatch (color, gradient, tint, or mixed ink), of the bottom border stroke.
*** 
> Number **bottomBorderStrokeTint** 
>
> The tint (as a percentage) of the bottom border stroke. (Range: 0 to 100)
*** 
> Boolean **bottomBorderStrokeOverprint** 
>
> If true, the bottom border stroke will overprint.
*** 
> Swatch **bottomBorderStrokeGapColor** 
>
> The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the bottom border stroke. Note: Valid only when bottom border stroke type is not solid.
*** 
> Number **bottomBorderStrokeGapTint** 
>
> The tint (as a percentage) of the gap color of the bottom border stroke. (Range: 0 to 100) Note: Valid only when bottom border stroke type is not solid.
*** 
> Boolean **bottomBorderStrokeGapOverprint** 
>
> If true, the gap of the bottom border stroke will overprint. Note: Valid only when bottom border stroke type is not solid.
*** 
> Measurement Unit (Number or String)=any **rightBorderStrokeWeight** 
>
> The stroke weight of the right border stroke.
*** 
> StrokeStyle **rightBorderStrokeType** 
>
> The stroke type of the right border. Can also accept: String.
*** 
> Swatch **rightBorderStrokeColor** 
>
> The color, specified as a swatch (color, gradient, tint, or mixed ink), of the right border stroke.
*** 
> Number **rightBorderStrokeTint** 
>
> The tint (as a percentage) of the right border stroke. (Range: 0 to 100)
*** 
> Boolean **rightBorderStrokeOverprint** 
>
> If true, the right border stroke will overprint.
*** 
> Swatch **rightBorderStrokeGapColor** 
>
> The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of the right border stroke. Note: Valid only when right border stroke type is not solid.
*** 
> Number **rightBorderStrokeGapTint** 
>
> The tint (as a percentage) of the gap color of the right border stroke. (Range: 0 to 100) Note: Valid only when right border stroke type is not solid.
*** 
> Boolean **rightBorderStrokeGapOverprint** 
>
> If true, the gap color of the right border stroke will overprint. Note: Valid only when right border stroke type is not solid.
*** 
> Measurement Unit (Number or String)=any **spaceBefore** 
>
> The space above the table.
*** 
> Measurement Unit (Number or String)=any **spaceAfter** 
>
> The space below the table.
*** 
> Number **skipFirstAlternatingStrokeRows** 
>
> The number of body rows at the beginning of the table in which to skip border stroke formatting. Note: Valid when start row stroke count is 1 or greater and/or end row stroke count is 1 or greater.
*** 
> Number **skipLastAlternatingStrokeRows** 
>
> The number of body rows at the end of the table in which to skip border stroke formatting. Note: Valid when start row stroke count is 1 or greater and/or end row stroke count is 1 or greater.
*** 
> Number **startRowStrokeCount** 
>
> The number of rows in the first alternating row strokes group.
*** 
> Swatch **startRowStrokeColor** 
>
> The color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the first alternating row strokes group. Note: Valid when start row stroke count is 1 or greater.
*** 
> Measurement Unit (Number or String)=any **startRowStrokeWeight** 
>
> The stroke weight of row borders in the first alternating row strokes group. Note: Valid when start row stroke count is 1 or greater.
*** 
> StrokeStyle **startRowStrokeType** 
>
> The stroke type of rows in the first alternating strokes group. Can also accept: String.
*** 
> Number **startRowStrokeTint** 
>
> The tint (as a percentage) of the borders in the first alternating row strokes group. (Range: 0 to 100) Note: Valid when start row stroke count is 1 or greater.
*** 
> Boolean **startRowStrokeGapOverprint** 
>
> If true, the gap color of the row border stroke in the first alternating row strokes group will overprint. Note: Valid when start row stroke count is 1 or greater.
*** 
> Swatch **startRowStrokeGapColor** 
>
> The stroke gap color of row borders in the first alternating row strokes group, specified as a swatch (color, gradient, tint, or mixed ink). Note: Valid when start row stroke count is 1 or greater.
*** 
> Number **startRowStrokeGapTint** 
>
> The tint (as a percentage) of the gap color of row borders in the first alternating rows group. (Range: 0 to 100) Note: Valid when start row stroke count is 1 or greater.
*** 
> Boolean **startRowStrokeOverprint** 
>
> If true, the row borders in the first alternating row strokes group will overprint. Note: Valid when start row stroke count is 1 or greater.
*** 
> Number **endRowStrokeCount** 
>
> The number of rows in the second alternating row strokes group.
*** 
> Swatch **endRowStrokeColor** 
>
> The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the second alternating row strokes group. Note: Valid when end row stroke count is 1 or greater.
*** 
> Measurement Unit (Number or String)=any **endRowStrokeWeight** 
>
> The stroke weight of row borders in the second alternating row strokes group. Note: Valid when end row stroke count is 1 or greater.
*** 
> StrokeStyle **endRowStrokeType** 
>
> The stroke type of rows in the second alternating strokes group. Can also accept: String.
*** 
> Number **endRowStrokeTint** 
>
> The tint (as a percentage) of the row borders in the second alternating strokes group. (Range: 0 to 100) Note: Valid when end row stroke count is 1 or greater.
*** 
> Boolean **endRowStrokeOverprint** 
>
> If true, the rows in the second alternating rows group will overprint. Note: Valid when end row stroke count is 1 or greater.
*** 
> Swatch **endRowStrokeGapColor** 
>
> The gap color, specified as a swatch (color, gradient, tint, or mixed ink), of row borders in the second alternating rows group. Note: Valid when end row stroke count is 1 or greater.
*** 
> Number **endRowStrokeGapTint** 
>
> The tint (as a percentage) of the gap color of rows in the second alternating strokes group. (Range: 0 to 100) Note: Valid when end row stroke count is 1 or greater and end row stroke type is not solid.
*** 
> Boolean **endRowStrokeGapOverprint** 
>
> If true, the gap of the row borders in the second alternating rows group will overprint. Note: Valid when end row stroke count is 1 or greater.
*** 
> Number **skipFirstAlternatingStrokeColumns** 
>
> The number of columns on the left of the table in which to skip border stroke formatting. Note: Valid when start column stroke count is 1 or greater and/or end column stroke count is 1 or greater.
*** 
> Number **skipLastAlternatingStrokeColumns** 
>
> The number of columns on the right side of the table in which to skip border stroke formatting. Note: Valid when start column stroke count is 1 or greater and/or end column stroke count is 1 or greater.
*** 
> Number **startColumnStrokeCount** 
>
> The number of columns in the first alternating column strokes group.
*** 
> Swatch **startColumnStrokeColor** 
>
> The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the first alternating column strokes group.
*** 
> Measurement Unit (Number or String)=any **startColumnStrokeWeight** 
>
> The stroke weight of column borders in the first alternating column strokes group. Note: Valid when start column stroke count is 1 or greater.
*** 
> StrokeStyle **startColumnStrokeType** 
>
> The stroke type of columns in the first alternating strokes group. Can also accept: String.
*** 
> Number **startColumnStrokeTint** 
>
> The tint (as a percentage) of column borders in the first alternating column strokes group. (Range: 0 to 100) Note: Valid when start column stroke count is 1 or greater.
*** 
> Boolean **startColumnStrokeOverprint** 
>
> If true, the column borders in the first alternating column strokes group will overprint. Note: Valid when start column stroke count is 1 or greater.
*** 
> Swatch **startColumnStrokeGapColor** 
>
> The stroke gap color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the first alternating column strokes group. Note: Valid when start column stroke count is 1 or greater.
*** 
> Number **startColumnStrokeGapTint** 
>
> The tint (as a percentage) of the gap color of column borders in the first alternating column strokes group. (Range: 0 to 100) Note: Valid when start column stroke count is 1 or greater.
*** 
> Boolean **startColumnStrokeGapOverprint** 
>
> If true, the gap of the column borders in the first alternating column strokes group will overprint. Note: Valid when start column stroke count is 1 or greater.
*** 
> Number **endColumnStrokeCount** 
>
> The number of columns in the second alternating column strokes group.
*** 
> Swatch **endColumnStrokeColor** 
>
> The stroke color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater.
*** 
> Measurement Unit (Number or String)=any **endColumnStrokeWeight** 
>
> The stroke weight of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater.
*** 
> StrokeStyle **endColumnLineStyle** 
>
> The stroke type of columns in the second alternating strokes group. Can also accept: String.
*** 
> Number **endColumnStrokeTint** 
>
> The tint (as a percentage) of column borders in the second alternating column strokes group. (Range: 0 to 100) Note: Valid when end column stroke count is 1 or greater.
*** 
> Boolean **endColumnStrokeOverprint** 
>
> If true, the column borders in the second alternating column strokes group will overprint. Note: Valid when end column stroke count is 1 or greater.
*** 
> Swatch **endColumnStrokeGapColor** 
>
> The stroke gap color, specified as a swatch (color, gradient, tint, or mixed ink), of column borders in the second alternating column strokes group. Note: Valid when end column stroke count is 1 or greater.
*** 
> Number **endColumnStrokeGapTint** 
>
> The tint (as a percentage) of the gap color of column borders in the second alternating column strokes group. (Range: 0 to 100) Note: Valid when end column stroke count is 1 or greater.
*** 
> Boolean **endColumnStrokeGapOverprint** 
>
> If true, the gap of the column border stroke in the second alternating column strokes group will overprint. Note: Valid when end column stroke count is 1 or greater.
*** 
> Boolean **columnFillsPriority** 
>
> If true, hides alternating row fills. If false, hides alternating column fills.
*** 
> Number **skipFirstAlternatingFillRows** 
>
> The number of body rows at the beginning of the table to skip before applying the row fill color. Note: Valid when alternating fills are defined for table rows.
*** 
> Number **skipLastAlternatingFillRows** 
>
> The number of body rows at the end of the table in which to not apply the row fill color. Note: Valid when alternating fills are defined for table rows.
*** 
> Swatch **startRowFillColor** 
>
> The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of rows in the first alternating fills group. Note: Valid when alternating fills are defined for table rows.
*** 
> Number **startRowFillCount** 
>
> The number of rows in the first alternating fills group. Note: Valid when alternating fills are defined for table rows.
*** 
> Number **startRowFillTint** 
>
> The tint (as a percentage) of the rows in the first alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table rows.
*** 
> Boolean **startRowFillOverprint** 
>
> If true, the rows in the first alternating fills group will overprint. Note: Valid when alternating fills are defined for table rows.
*** 
> Number **endRowFillCount** 
>
> The number of rows in the second alternating fills group. Note: Valid when alternating fills are defined for table rows.
*** 
> Swatch **endRowFillColor** 
>
> The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of rows in the second alternating fills group. Note: Valid when alternating fills are defined for table rows.
*** 
> Number **endRowFillTint** 
>
> The tint (as a percentage) of the rows in the second alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table rows.
*** 
> Boolean **endRowFillOverprint** 
>
> If true, the rows in the second alternating fills group will overprint. Note: Valid when alternating fills are defined for table rows.
*** 
> Number **skipFirstAlternatingFillColumns** 
>
> The number of columns on the left side of the table to skip before applying the column fill color. Note: Valid when alternating fills are defined for table columns.
*** 
> Number **skipLastAlternatingFillColumns** 
>
> The number columns on the right side of the table in which to not apply the column fill color. Note: Valid when alternating fills are defined for table columns.
*** 
> Number **startColumnFillCount** 
>
> The number of columns in the first alternating fills group. Note: Valid when alternating fills are defined for table columns.
*** 
> Swatch **startColumnFillColor** 
>
> The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of columns in the first alternating fills group. Note: Valid when alternating fills are defined for table columns.
*** 
> Number **startColumnFillTint** 
>
> The tint (as a percentage) of the columns in the first alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table columns.
*** 
> Boolean **startColumnFillOverprint** 
>
> If true, the columns in the first alternating fills group will overprint. Note: Valid when alternating fills are defined for table columns.
*** 
> Number **endColumnFillCount** 
>
> The number of columns in the second alternating fills group. Note: Valid when alternating fills are defined for table columns.
*** 
> Swatch **endColumnFillColor** 
>
> The fill color, specified as a swatch (color, gradient, tint, or mixed ink), of columns in the second alternating fill group. Note: Valid when alternating fills are defined for table columns.
*** 
> Number **endColumnFillTint** 
>
> The tint (as a percentage) of the columns in the second alternating fills group. (Range: 0 to 100) Note: Valid when alternating fills are defined for table columns.
*** 
> Boolean **endColumnFillOverprint** 
>
> If true, the columns in the second alternating fills group will overprint. Note: Valid when alternating fills are defined for table columns.
*** 
> Boolean **headerRegionSameAsBodyRegion** 
>
> If true, use the cell style of the body region for the header region.
*** 
> Boolean **footerRegionSameAsBodyRegion** 
>
> If true, uses the cell style of the body region for the footer region.
*** 
> Boolean **leftColumnRegionSameAsBodyRegion** 
>
> If true, uses the cell style of the body region for the left column region.
*** 
> Boolean **rightColumnRegionSameAsBodyRegion** 
>
> If true, uses the cell style of the body region for the right column region.
*** 
> CellStyle **headerRegionCellStyle** 
>
> The cell style of the header region. Can also accept: String.
*** 
> CellStyle **footerRegionCellStyle** 
>
> The cell style of the footer region. Can also accept: String.
*** 
> CellStyle **leftColumnRegionCellStyle** 
>
> The cell style of the left column region. Can also accept: String.
*** 
> CellStyle **rightColumnRegionCellStyle** 
>
> The cell style of the right column region. Can also accept: String.
*** 
> CellStyle **bodyRegionCellStyle** 
>
> The cell style of the body region. Can also accept: String.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**( TableStyle **replacingWith** )
> 
> Deletes the style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TableStyle | replacingWith | The style to apply in place of the deleted style. (Optional) |

*** 
> TableStyle **duplicate**()
> 
> Duplicates the TableStyle.
*** 
> TableStyle **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the style to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location relative to the reference object or within the containing object. |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional) |

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
> Generates a string which, if executed, will return the TableStyle.
*** 
> TableStyle **getElements**()
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


