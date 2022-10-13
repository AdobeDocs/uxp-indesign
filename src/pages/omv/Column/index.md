# Column
A table column.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the Column.
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Column within its containing object.
*** 
> *Read Only* 
> 
> Number **rowSpan** 
>
> The number of rows that the object spans.
*** 
> *Read Only* 
> 
> Number **columnSpan** 
>
> The number of columns that the object spans.
*** 
> *Read Only* 
> 
> Boolean **overflows** 
>
> If true, the story has overset text.
*** 
> *Read Only* 
> 
> Row **parentRow** 
>
> The parent row of the cell.
*** 
> *Read Only* 
> 
> Column **parentColumn** 
>
> The parent column of the cell.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Table **parent** 
>
> The parent of the Column (a Table).
*** 
> *Read Only* 
> 
> Cells **cells** 
>
> A collection of table cells.
*** 
> *Read Only* 
> 
> Rows **rows** 
>
> A collection of table rows.
*** 
> *Read Only* 
> 
> Columns **columns** 
>
> A collection of table columns.
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
> Measurement Unit (Number or String)=any **height** 
>
> The height of the Column. For a table or column, specifies the sum of the row heights.
*** 
> Measurement Unit (Number or String)=any **width** 
>
> The width of the Column. For a table or row, specifies the sum of the column widths.
*** 
> Mixed **contents** 
>
> The text contents. For rows or columns, when specified as a string, the sting populates each cell in the row or column; when specified as an array, the first value in the array populates the left-most cell in the row or the top-most cell in the column; the next value populates the next cell to the right (for rows) or the next lowest cell (for columns), and so on. Can return: PageItem, String, SpecialCharacters enumerator or Array of Strings, SpecialCharacters enumerators or PageItems. Can also accept: PageItem, NothingEnum enumerator or Array of Strings, SpecialCharacters enumerators, NothingEnum enumerators or PageItems.
*** 
> Number **gradientFillLength** 
>
> The length (of a linear gradient) or radius (of a radial gradient) applied to the fill of the object.
*** 
> Number **gradientFillAngle** 
>
> The angle of a linear gradient applied to the fill of the object. (Range: -180 to 180)
*** 
> Measurement Unit (Number or String)=any **gradientFillStart** 
>
> The starting point (in page coordinates) of a gradient applied to the fill of the Column, in the format [x, y].
*** 
> Measurement Unit (Number or String)=any **topInset** 
>
> The top inset of the cell. The API has been deprecated. Use TextTopInset or GraphicTopInset
*** 
> Measurement Unit (Number or String)=any **leftInset** 
>
> The left inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicLeftInset
*** 
> Measurement Unit (Number or String)=any **bottomInset** 
>
> The bottom inset of the cell.The API has been deprecated. Use TextBottomInset or GraphicBottomInset
*** 
> Measurement Unit (Number or String)=any **rightInset** 
>
> The right inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicRightInset
*** 
> Swatch **fillColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of the object. Can also accept: String.
*** 
> Number **fillTint** 
>
> The tint (as a percentage) of the fill of the object.
*** 
> Boolean **overprintFill** 
>
> If true, the fill of the object will overprint.
*** 
> Boolean **topLeftDiagonalLine** 
>
> If true, draws a diagonal line starting from the top left.
*** 
> Boolean **topRightDiagonalLine** 
>
> If true, draws a diagonal line starting from the top right.
*** 
> Boolean **diagonalLineInFront** 
>
> If true, draws the diagonal line in front of cell contents.
*** 
> Measurement Unit (Number or String)=any **diagonalLineStrokeWeight** 
>
> The diagonal line stroke weight.
*** 
> StrokeStyle **diagonalLineStrokeType** 
>
> The stroke type of the diagonal line(s). Can also accept: String.
*** 
> Swatch **diagonalLineStrokeColor** 
>
> The diagonal line color, specified as a swatch.
*** 
> Number **diagonalLineStrokeTint** 
>
> The diagonal line tint (as a percentage). (Range: 0 to 100)
*** 
> Boolean **diagonalLineStrokeOverprint** 
>
> If true, the diagonal line stroke will overprint.
*** 
> Swatch **diagonalLineStrokeGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the diagonal line stroke. Note: Not valid when diagonal line stroke type is solid.
*** 
> Number **diagonalLineStrokeGapTint** 
>
> The tint (as a percentage) of the diagonal line stroke gap color. Note: Not valid when diagonal line stroke type is solid.
*** 
> Boolean **diagonalLineStrokeGapOverprint** 
>
> If true, the stroke gap of the diagonal line will overprint. Note: Not valid when diagonal line stroke type is solid.
*** 
> Boolean **clipContentToCell** 
>
> If true, clips the cell's content to width and height of the cell. The API has been deprecated. Use ClipContentsToTextCell or ClipContentsToPageItemCell
*** 
> FirstBaseline **firstBaselineOffset** 
>
> The distance between the baseline of the text and the top inset of the cell.
*** 
> VerticalJustification **verticalJustification** 
>
> The vertical alignment of cell.
*** 
> Measurement Unit (Number or String)=any **paragraphSpacingLimit** 
>
> The maximum space that can be added between paragraphs in a cell. Note: Valid only when vertical justification is justified.
*** 
> Measurement Unit (Number or String)=any **minimumFirstBaselineOffset** 
>
> The space between the baseline of the text and the top inset of the frame or cell.
*** 
> Number **rotationAngle** 
>
> The rotation angle (in degrees) of the cell, specified as one of the following values: 0, 90, 180, or 270.
*** 
> Measurement Unit (Number or String)=any **leftEdgeStrokeWeight** 
>
> The stroke weight of the left edge border stroke.
*** 
> StrokeStyle **leftEdgeStrokeType** 
>
> The stroke type of the left edge. Can also accept: String.
*** 
> Swatch **leftEdgeStrokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the left edge border stroke.
*** 
> Number **leftEdgeStrokeTint** 
>
> The tint (as a percentage) of the left edge border stroke. (Range: 0 to 100)
*** 
> Boolean **leftEdgeStrokeOverprint** 
>
> If true, the left edge border stroke will overprint.
*** 
> Swatch **leftEdgeStrokeGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the left edge border stroke. Note: Not valid when left edge stroke type is solid.
*** 
> Number **leftEdgeStrokeGapTint** 
>
> The tint (as a percentage) of the left edge border stroke gap color. (Range: 0 to 100) Note: Not valid when left edge stroke type is solid.
*** 
> Boolean **leftEdgeStrokeGapOverprint** 
>
> If true, the gap color of the left edge border stroke will overprint. Note: Not valid when left edge stroke type is solid.
*** 
> Measurement Unit (Number or String)=any **topEdgeStrokeWeight** 
>
> The stroke weight of the top edge border stroke.
*** 
> StrokeStyle **topEdgeStrokeType** 
>
> The stroke type of the top edge. Can also accept: String.
*** 
> Swatch **topEdgeStrokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the top edge border stroke.
*** 
> Number **topEdgeStrokeTint** 
>
> The tint (as a percentage) of the top edge border stroke. (Range: 0 to 100)
*** 
> Boolean **topEdgeStrokeOverprint** 
>
> If true, the top edge border stroke will overprint.
*** 
> Swatch **topEdgeStrokeGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the top edge border stroke. Note: Not valid when top edge stroke type is solid.
*** 
> Number **topEdgeStrokeGapTint** 
>
> The tint (as a percentage) of the top edge border stroke gap color. (Range: 0 to 100) Note: Not valid when top edge stroke type is solid.
*** 
> Boolean **topEdgeStrokeGapOverprint** 
>
> If true, the gap color of the top edge border stroke will overprint. Note: Not valid when top edge stroke type is solid.
*** 
> Measurement Unit (Number or String)=any **rightEdgeStrokeWeight** 
>
> The stroke weight of the right edge border stroke.
*** 
> StrokeStyle **rightEdgeStrokeType** 
>
> The stroke type of the right edge. Can also accept: String.
*** 
> Swatch **rightEdgeStrokeColor** 
>
> The color, specified as a swatch, of the right edge border stroke.
*** 
> Number **rightEdgeStrokeTint** 
>
> The tint (as a percentage) of the right edge border stroke. (Range: 0 to 100)
*** 
> Boolean **rightEdgeStrokeOverprint** 
>
> If true, the right edge border stroke will overprint.
*** 
> Swatch **rightEdgeStrokeGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the right edge border stroke. Note: Not valid when right edge stroke type is solid.
*** 
> Number **rightEdgeStrokeGapTint** 
>
> The tint (as a percentage) of the right edge border stroke gap color. (Range: 0 to 100) Note: Not valid when right edge stroke type is solid.
*** 
> Boolean **rightEdgeStrokeGapOverprint** 
>
> If true, the gap color of the right edge border stroke will overprint. Note: Not valid when right edge stroke type is solid.
*** 
> Measurement Unit (Number or String)=any **bottomEdgeStrokeWeight** 
>
> The stroke weight of the bottom edge border stroke.
*** 
> StrokeStyle **bottomEdgeStrokeType** 
>
> The stroke type of the bottom edge. Can also accept: String.
*** 
> Swatch **bottomEdgeStrokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the bottom edge border stroke.
*** 
> Number **bottomEdgeStrokeTint** 
>
> The tint (as a percentage) of the bottom edge border stroke.
*** 
> Boolean **bottomEdgeStrokeOverprint** 
>
> If true, the bottom edge border stroke will overprint.
*** 
> Swatch **bottomEdgeStrokeGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the bottom edge border stroke. Note: Not valid when bottom edge stroke type is solid.
*** 
> Number **bottomEdgeStrokeGapTint** 
>
> The tint (as a percentage) of the bottom edge border stroke gap color. (Range: 0 to 100) Note: Not valid when bottom edge stroke type is solid.
*** 
> Boolean **bottomEdgeStrokeGapOverprint** 
>
> If true, the gap color of the bottom edge border stroke will overprint. Note: Not valid when bottom edge stroke type is solid.
*** 
> Measurement Unit (Number or String)=any **innerRowStrokeWeight** 
>
> The stroke weight of the inner row border strokes.
*** 
> StrokeStyle **innerRowStrokeType** 
>
> The stroke type of the inner row. Can also accept: String.
*** 
> Swatch **innerRowStrokeColor** 
>
> The color, specified as a swatch, of the inner row border stroke.
*** 
> Number **innerRowStrokeTint** 
>
> The tint (as a percentage) of the inner row border stroke. (Range: 0 to 100)
*** 
> Boolean **innerRowStrokeOverprint** 
>
> If true, the inner row border stroke will overprint.
*** 
> Swatch **innerRowStrokeGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the inner row border stroke. Note: Not valid when inner row stroke type is solid.
*** 
> Number **innerRowStrokeGapTint** 
>
> The tint (as a percentage) of the inner row border stroke. (Range: 0 to 100) Note: Not valid when inner row stroke type is solid.
*** 
> Boolean **innerRowStrokeGapOverprint** 
>
> If true, the gap color of the inner row border stroke will overprint. Note: Not valid when inner row stroke type is solid.
*** 
> Measurement Unit (Number or String)=any **innerColumnStrokeWeight** 
>
> The stroke weight of the inner column border stroke.
*** 
> StrokeStyle **innerColumnStrokeType** 
>
> The stroke type of the inner column. Can also accept: String.
*** 
> Swatch **innerColumnStrokeColor** 
>
> The color, specified as a swatch, of the inner column border stroke.
*** 
> Number **innerColumnStrokeTint** 
>
> The tint (as a percentage) of the inner column border stroke. (Range: 0 to 100)
*** 
> Boolean **innerColumnStrokeOverprint** 
>
> If true, the inner column border stroke will overprint.
*** 
> Swatch **innerColumnStrokeGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the inner column border stroke. Note: Not valid when inner column stroke type is solid.
*** 
> Number **innerColumnStrokeGapTint** 
>
> The tint (as a percentage) of the inner column border stroke gap color. (Range: 0 to 100) Note: Not valid when inner column stroke type is solid.
*** 
> Boolean **innerColumnStrokeGapOverprint** 
>
> If true, the gap color of the inner column border stroke will overprint. Note: Not valid when inner column stroke type is solid.
*** 
> Measurement Unit (Number or String)=any **minimumHeight** 
>
> The minimum height of the cells in the Column. Note: When auto grow is true, cells can automatically grow larger than this amount when content is added. Also, the minimum height can affect redistribution.
*** 
> Measurement Unit (Number or String)=any **maximumHeight** 
>
> The maximum height to which cells in the Column may grow. Note: The maximum height cannot be exceeded even when auto grow is set to true. Also, the maximum height can affect redistribution.
*** 
> Boolean **keepWithNextRow** 
>
> If true, keeps the row with the next row when the table is split across text frames or pages.
*** 
> StartParagraph **startRow** 
>
> Indicates where to start the row.
*** 
> Boolean **autoGrow** 
>
> If true, the height of the cell or the cells in the Column can increase or decrease automatically to fit cell content. Note: Allows cells to grow or shrink to the maximum or minimum height, if specified.
*** 
> RowTypes **rowType** 
>
> The row type.
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
> HorizontalOrVertical **writingDirection** 
>
> The direction of the text in the cell.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> PageItem **createOutlines**( Boolean **deleteOriginal** )
> 
> Converts text to outlines. Each line of text becomes a polygon object. When the converted text is a single letter that has no internal spaces or detached parts, the polygon contains only a single path. Note: To determine whether a font allows the creation of outlines, see allow outlines.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | deleteOriginal | If true, deletes the original text. If false, creates the outlines as separate object(s) on top of the text.  (Optional) |

*** 
> **recompose**()
> 
> Recomposes the text in the Column.
*** 
> Text **findText**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **changeText**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value and replaces the text with the change to value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **findGrep**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **changeGrep**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value and replaces the text with the change to value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **findGlyph**( Boolean **reverseOrder** )
> 
> Finds glyphs that match the find what value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **changeGlyph**( Boolean **reverseOrder** )
> 
> Finds glyphs that match the find what value and replaces the glyphs with the change to value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **findTransliterate**( Boolean **reverseOrder** )
> 
> Finds text that matches the find character type value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **changeTransliterate**( Boolean **reverseOrder** )
> 
> Finds text that matches the find character type value and replaces the text with the change character type value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> **remove**()
> 
> Deletes the Column.
*** 
> Cell **merge**( Mixed **with** )
> 
> Merges the cells.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | with | The cell(s) to merge with. Can accept: Cell, Row or Column. (Optional) |

*** 
> Cell **unmerge**()
> 
> Unmerges all merged cells in the Column.
*** 
> **split**( HorizontalOrVertical **using** )
> 
> Splits the cell along the specified axis.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HorizontalOrVertical | using | The direction in which to split the cell. |

*** 
> **redistribute**( HorizontalOrVertical **using**, Mixed **thru** )
> 
> Redistributes the specified range of Columns so that the Columns have a uniform size. Note: The maximum or minimum height or width specified for some of the cells in the range may prevent them from being exactly even.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HorizontalOrVertical | using | The direction in which to redistribute. |
| Mixed | thru | The last Column in the range. Can accept: Cell, Column or Row. (Optional) |

*** 
> **select**( SelectionOptions **existingSelection** )
> 
> Selects the object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SelectionOptions | existingSelection | The selection status of the Column in relation to previously selected objects. (Optional) |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Column.
*** 
> Column **getElements**()
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


