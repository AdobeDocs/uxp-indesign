# Cell
A table cell.

## Instance
> *Read Only* 
> 
> XMLItem **associatedXMLElement** 
>
> The XML element associated with the Cell.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Cell.
*** 
> *Read Only* 
> 
> String **name** 
>
> The name of the Cell.
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Cell within its containing object.
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
> PageItem **allPageItems** 
>
> Lists all page items contained by the Cell.
*** 
> *Read Only* 
> 
> Graphic **allGraphics** 
>
> Lists all graphics contained by the Cell.
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
> The parent of the Cell (a XMLElement, Cell, Table, Column or Row).
*** 
> *Read Only* 
> 
> Texts **texts** 
>
> A collection of text objects.
*** 
> *Read Only* 
> 
> Characters **characters** 
>
> A collection of characters.
*** 
> *Read Only* 
> 
> Words **words** 
>
> A collection of words.
*** 
> *Read Only* 
> 
> Lines **lines** 
>
> A collection of lines.
*** 
> *Read Only* 
> 
> TextColumns **textColumns** 
>
> A collection of text columns.
*** 
> *Read Only* 
> 
> Paragraphs **paragraphs** 
>
> A collection of paragraphs.
*** 
> *Read Only* 
> 
> InsertionPoints **insertionPoints** 
>
> A collection of insertion points.
*** 
> *Read Only* 
> 
> TextStyleRanges **textStyleRanges** 
>
> A collection of text style ranges.
*** 
> *Read Only* 
> 
> Footnotes **footnotes** 
>
> A collection of footnotes.
*** 
> *Read Only* 
> 
> Endnotes **endnotes** 
>
> A collection of endnotes.
*** 
> *Read Only* 
> 
> TextVariableInstances **textVariableInstances** 
>
> A collection of text variable instances.
*** 
> *Read Only* 
> 
> Tables **tables** 
>
> A collection of tables.
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
> Ovals **ovals** 
>
> A collection of ellipses.
*** 
> *Read Only* 
> 
> SplineItems **splineItems** 
>
> The spline items collection.
*** 
> *Read Only* 
> 
> PageItems **pageItems** 
>
> The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
*** 
> *Read Only* 
> 
> Rectangles **rectangles** 
>
> A collection of rectangles.
*** 
> *Read Only* 
> 
> GraphicLines **graphicLines** 
>
> A collection of graphic lines.
*** 
> *Read Only* 
> 
> TextFrames **textFrames** 
>
> A collection of text frames.
*** 
> *Read Only* 
> 
> Polygons **polygons** 
>
> A collection of polygons.
*** 
> *Read Only* 
> 
> EndnoteTextFrames **endnoteTextFrames** 
>
> A collection of endnote text frames.
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
> *Read Only* 
> 
> Changes **changes** 
>
> A collection of changes.
*** 
> *Read Only* 
> 
> Notes **notes** 
>
> A collection of notes.
*** 
> *Read Only* 
> 
> Groups **groups** 
>
> A collection of groups.
*** 
> *Read Only* 
> 
> EPSTexts **epstexts** 
>
> EPSTexts
*** 
> *Read Only* 
> 
> FormFields **formFields** 
>
> A collection of form fields.
*** 
> *Read Only* 
> 
> Buttons **buttons** 
>
> A collection of buttons.
*** 
> *Read Only* 
> 
> MultiStateObjects **multiStateObjects** 
>
> A collection of multi-state objects.
*** 
> *Read Only* 
> 
> CheckBoxes **checkBoxes** 
>
> A collection of checkboxes.
*** 
> *Read Only* 
> 
> ComboBoxes **comboBoxes** 
>
> A collection of comboboxes.
*** 
> *Read Only* 
> 
> ListBoxes **listBoxes** 
>
> A collection of listboxes.
*** 
> *Read Only* 
> 
> RadioButtons **radioButtons** 
>
> A collection of radio buttons.
*** 
> *Read Only* 
> 
> TextBoxes **textBoxes** 
>
> A collection of text boxes.
*** 
> *Read Only* 
> 
> SignatureFields **signatureFields** 
>
> A collection of signature fields.
*** 
> *Read Only* 
> 
> HiddenTexts **hiddenTexts** 
>
> A collection of hidden text objects.
*** 
> Measurement Unit (Number or String)=any **height** 
>
> The height of the Cell. For a table or column, specifies the sum of the row heights.
*** 
> Measurement Unit (Number or String)=any **width** 
>
> The width of the Cell. For a table or row, specifies the sum of the column widths.
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
> The starting point (in page coordinates) of a gradient applied to the fill of the Cell, in the format [x, y].
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
> The minimum height of the cells in the Cell. Note: When auto grow is true, cells can automatically grow larger than this amount when content is added. Also, the minimum height can affect redistribution.
*** 
> Measurement Unit (Number or String)=any **maximumHeight** 
>
> The maximum height to which cells in the Cell may grow. Note: The maximum height cannot be exceeded even when auto grow is set to true. Also, the maximum height can affect redistribution.
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
> If true, the height of the cell or the cells in the Cell can increase or decrease automatically to fit cell content. Note: Allows cells to grow or shrink to the maximum or minimum height, if specified.
*** 
> RowTypes **rowType** 
>
> The row type.
*** 
> CellTypeEnum **cellType** 
>
> The content type of cell.
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
> CellStyle **appliedCellStyle** 
>
> The cell style applied to the cell. Can also accept: String.
*** 
> HorizontalOrVertical **writingDirection** 
>
> The direction of the text in the cell.
*** 
> String **label** 
>
> A property that can be set to any string.
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
> **autoTag**()
> 
> Tag the object or the parent story using default tags defined in XML preference.
*** 
> **recompose**()
> 
> Recomposes the text in the Cell.
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
> Deletes the Cell.
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
> Unmerges all merged cells in the Cell.
*** 
> **split**( HorizontalOrVertical **using** )
> 
> Splits the cell along the specified axis.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HorizontalOrVertical | using | The direction in which to split the cell. |

*** 
> **convertCellType**( CellTypeEnum **finalCellType**, Boolean **flagToPreserveData** )
> 
> Convert cell type. The new cell type parameter is required. Preserve data is optional
#### Parameters
| Type | Name | Description |
|---|---|---|
| CellTypeEnum | finalCellType | Cell Type to which the cell is to be converted |
| Boolean | flagToPreserveData | If true then the data inside the cell is preserved. While converting graphic cell to text cell, page item becomes inline.  (Optional) |

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
> **clearCellStyleOverrides**( Boolean **clearingOverridesThroughRootCellStyle** )
> 
> Clear Cell Style Overrides
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | clearingOverridesThroughRootCellStyle | If true, clears all overrides, whether or not they are defined in the underlying cell style (Optional) |

*** 
> **convertBulletsAndNumberingToText**()
> 
> Convert bullets and numbering to text.
*** 
> **select**( SelectionOptions **existingSelection** )
> 
> Selects the object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SelectionOptions | existingSelection | The selection status of the Cell in relation to previously selected objects. (Optional) |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Cell.
*** 
> Cell **getElements**()
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


