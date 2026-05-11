# Table
A table.

## Instance
> *Read Only* 
> 
> XMLItem **associatedXMLElement** 
>
> The XML element associated with the Table.
*** 
> *Read Only* 
> 
> InsertionPoint **storyOffset** 
>
> The insertion point before the table in the story containing the table.
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Table within its containing object.
*** 
> *Read Only* 
> 
> PageItem **allPageItems** 
>
> Lists all page items contained by the Table.
*** 
> *Read Only* 
> 
> Graphic **allGraphics** 
>
> Lists all graphics contained by the Table.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Table.
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
> The parent of the Table (a XMLElement, XmlStory, TextFrame, EndnoteTextFrame, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story or Cell).
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
> Number **headerRowCount** 
>
> The number of header rows.
*** 
> Number **footerRowCount** 
>
> The number of footer rows.
*** 
> Measurement Unit (Number or String)=any **height** 
>
> The height of the Table. For a table or column, specifies the sum of the row heights.
*** 
> Measurement Unit (Number or String)=any **width** 
>
> The width of the Table. For a table or row, specifies the sum of the column widths.
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
> HeaderFooterBreakTypes **breakHeaders** 
>
> The header placement.
*** 
> HeaderFooterBreakTypes **breakFooters** 
>
> The footer placement.
*** 
> Boolean **skipFirstHeader** 
>
> If true, skips the first occurrence of header rows.
*** 
> Boolean **skipLastFooter** 
>
> If true, skips the last occurrence of footer rows.
*** 
> StrokeOrderTypes **strokeOrder** 
>
> The order in which to display row and column strokes at corners.
*** 
> AlternatingFillsTypes **alternatingFills** 
>
> The pattern for alternating fills.
*** 
> Mixed **contents** 
>
> The contents to place in cells, specified as an array whose first item populates the top left cell and whose second item populates the next cell to the right, and so on until each cell in the top row is populated, at which point the next item populates the left-most cell in the second row, and so on. Note: If the array contains fewer strings than the table contains cells, the remaining cells are left blank. Can return: Array of Strings or SpecialCharacters enumerators. Can also accept: Array of Strings, SpecialCharacters enumerators or NothingEnum enumerators.
*** 
> String **label** 
>
> A property that can be set to any string.
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
> Number **bodyRowCount** 
>
> The number of body rows.
*** 
> Number **columnCount** 
>
> The number of columns.
*** 
> String **name** 
>
> The name of the Table; this is an alias to the Table's label property.
*** 
> TableStyle **appliedTableStyle** 
>
> The table style applied to the table. Can also accept: String.
*** 
> TableDirectionOptions **tableDirection** 
>
> The direction of the the table
*** 
> Boolean **displayCollapsed** 
>
> If true, then the table will show collapsed in story and galley views.
*** 
> DisplayOrderOptions **displayOrder** 
>
> Specifies the order the table cells will display in when viewing in story and galley views.
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
> **markup**( XMLElement **using** )
> 
> Associates the page item with the specified XML element while preserving existing content.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLElement | using | The XML element. |

*** 
> **recompose**()
> 
> Recomposes the text in the Table.
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
> Deletes the Table.
*** 
> Cell **unmerge**()
> 
> Unmerges all merged cells in the Table.
*** 
> Text **convertToText**( String **columnSeparator**, String **rowSeparator** )
> 
> Converts the table to text.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | columnSeparator | The character to insert between the each column's content in the converted text. Note: Can be defined as any single character, such as a letter, number, or punctuation mark, or by typing a space or tab. Use the actual character rather than its name, such as ',' rather than 'Comma'. Precede double or single quotes or a backslash with an extra backslash as an escape character. For paragraphs, use ^p. (Optional) |
| String | rowSeparator | The character to use to separate each row's content in the converted text. Note: Can be defined as any single character, such as a letter, number, or punctuation mark, or by typing a space or tab. Use the actual character rather than its name, such as , rather than Comma. Precede double or single quotes or a backslash with an extra backslash as an escape character. For paragraphs, use ^p. (Optional) |

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
> **clearTableStyleOverrides**()
> 
> Clear Table Style Overrides
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
| SelectionOptions | existingSelection | The selection status of the Table in relation to previously selected objects. (Optional) |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Table.
*** 
> Table **getElements**()
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


