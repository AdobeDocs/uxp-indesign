# CellStyle
A cell style.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the CellStyle.
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
> The parent of the CellStyle (a Document, Application or CellStyleGroup).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the CellStyle within its containing object.
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
> Mixed **graphicLeftInset** 
>
> The left inset of the graphic cell. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **graphicTopInset** 
>
> The top inset of the graphic cell. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **graphicRightInset** 
>
> The right inset of the graphic cell. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **graphicBottomInset** 
>
> The bottom inset of the graphic cell. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **clipContentToGraphicCell** 
>
> If true, clips the graphic cell's content to width and height of the cell. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **textTopInset** 
>
> The top inset of the text cell. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **textLeftInset** 
>
> The left inset of the text cell. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **textBottomInset** 
>
> The bottom inset of the text cell. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **textRightInset** 
>
> The right inset of the text cell. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **clipContentToTextCell** 
>
> If true, clips the text cell's content to width and height of the cell. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **basedOn** 
>
> The style that this style is based on. Can return: CellStyle or String.
*** 
> Mixed **appliedParagraphStyle** 
>
> The paragraph style applied to the text. Can return: ParagraphStyle or NothingEnum enumerator. Can also accept: String.
*** 
> Mixed **gradientFillLength** 
>
> The length (of a linear gradient) or radius (of a radial gradient) applied to the fill of the object. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **gradientFillAngle** 
>
> The angle of a linear gradient applied to the fill of the object. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **gradientFillStart** 
>
> The starting point (in page coordinates) of a gradient applied to the fill of the CellStyle, in the format [x, y]. Can return: Array of 2 Units or NothingEnum enumerator.
*** 
> Mixed **topInset** 
>
> The top inset of the cell. The API has been deprecated. Use TextTopInset or GraphicTopInset. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **leftInset** 
>
> The left inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicLeftInset. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **bottomInset** 
>
> The bottom inset of the cell.The API has been deprecated. Use TextBottomInset or GraphicBottomInset. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **rightInset** 
>
> The right inset of the cell.The API has been deprecated. Use TextLeftInset or GraphicRightInset. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **fillColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of the object. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
*** 
> Mixed **fillTint** 
>
> The tint (as a percentage) of the fill of the object. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **overprintFill** 
>
> If true, the fill of the object will overprint. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **topLeftDiagonalLine** 
>
> If true, draws a diagonal line starting from the top left. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **topRightDiagonalLine** 
>
> If true, draws a diagonal line starting from the top right. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **diagonalLineInFront** 
>
> If true, draws the diagonal line in front of cell contents. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **diagonalLineStrokeWeight** 
>
> The diagonal line stroke weight. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **diagonalLineStrokeType** 
>
> The stroke type of the diagonal line(s). Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
*** 
> Mixed **diagonalLineStrokeColor** 
>
> The diagonal line color, specified as a swatch. Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **diagonalLineStrokeTint** 
>
> The diagonal line tint (as a percentage). (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **diagonalLineStrokeOverprint** 
>
> If true, the diagonal line stroke will overprint. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **diagonalLineStrokeGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the diagonal line stroke. Note: Not valid when diagonal line stroke type is solid. Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **diagonalLineStrokeGapTint** 
>
> The tint (as a percentage) of the diagonal line stroke gap color. Note: Not valid when diagonal line stroke type is solid. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **diagonalLineStrokeGapOverprint** 
>
> If true, the stroke gap of the diagonal line will overprint. Note: Not valid when diagonal line stroke type is solid. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **clipContentToCell** 
>
> If true, clips the cell's content to width and height of the cell. The API has been deprecated. Use ClipContentsToTextCell or ClipContentsToPageItemCell. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **firstBaselineOffset** 
>
> The distance between the baseline of the text and the top inset of the cell. Can return: FirstBaseline enumerator or NothingEnum enumerator.
*** 
> Mixed **verticalJustification** 
>
> The vertical alignment of cell. Can return: VerticalJustification enumerator or NothingEnum enumerator.
*** 
> Mixed **paragraphSpacingLimit** 
>
> The maximum space that can be added between paragraphs in a cell. Note: Valid only when vertical justification is justified. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **minimumFirstBaselineOffset** 
>
> The space between the baseline of the text and the top inset of the frame or cell. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
*** 
> Mixed **rotationAngle** 
>
> The rotation angle (in degrees) of the cell, specified as one of the following values: 0, 90, 180, or 270. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **leftEdgeStrokeWeight** 
>
> The stroke weight of the left edge border stroke. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **leftEdgeStrokeType** 
>
> The stroke type of the left edge. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
*** 
> Mixed **leftEdgeStrokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the left edge border stroke. Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **leftEdgeStrokeTint** 
>
> The tint (as a percentage) of the left edge border stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **leftEdgeStrokeOverprint** 
>
> If true, the left edge border stroke will overprint. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **leftEdgeStrokeGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the left edge border stroke. Note: Not valid when left edge stroke type is solid. Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **leftEdgeStrokeGapTint** 
>
> The tint (as a percentage) of the left edge border stroke gap color. (Range: 0 to 100) Note: Not valid when left edge stroke type is solid. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **leftEdgeStrokeGapOverprint** 
>
> If true, the gap color of the left edge border stroke will overprint. Note: Not valid when left edge stroke type is solid. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **topEdgeStrokeWeight** 
>
> The stroke weight of the top edge border stroke. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **topEdgeStrokeType** 
>
> The stroke type of the top edge. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
*** 
> Mixed **topEdgeStrokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the top edge border stroke. Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **topEdgeStrokeTint** 
>
> The tint (as a percentage) of the top edge border stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **topEdgeStrokeOverprint** 
>
> If true, the top edge border stroke will overprint. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **topEdgeStrokeGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the top edge border stroke. Note: Not valid when top edge stroke type is solid. Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **topEdgeStrokeGapTint** 
>
> The tint (as a percentage) of the top edge border stroke gap color. (Range: 0 to 100) Note: Not valid when top edge stroke type is solid. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **topEdgeStrokeGapOverprint** 
>
> If true, the gap color of the top edge border stroke will overprint. Note: Not valid when top edge stroke type is solid. . Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **rightEdgeStrokeWeight** 
>
> The stroke weight of the right edge border stroke. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **rightEdgeStrokeType** 
>
> The stroke type of the right edge. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
*** 
> Mixed **rightEdgeStrokeColor** 
>
> The color, specified as a swatch, of the right edge border stroke. Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **rightEdgeStrokeTint** 
>
> The tint (as a percentage) of the right edge border stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **rightEdgeStrokeOverprint** 
>
> If true, the right edge border stroke will overprint. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **rightEdgeStrokeGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the right edge border stroke. Note: Not valid when right edge stroke type is solid. Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **rightEdgeStrokeGapTint** 
>
> The tint (as a percentage) of the right edge border stroke gap color. (Range: 0 to 100) Note: Not valid when right edge stroke type is solid. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **rightEdgeStrokeGapOverprint** 
>
> If true, the gap color of the right edge border stroke will overprint. Note: Not valid when right edge stroke type is solid. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **bottomEdgeStrokeWeight** 
>
> The stroke weight of the bottom edge border stroke. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **bottomEdgeStrokeType** 
>
> The stroke type of the bottom edge. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
*** 
> Mixed **bottomEdgeStrokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the bottom edge border stroke. Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **bottomEdgeStrokeTint** 
>
> The tint (as a percentage) of the bottom edge border stroke. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **bottomEdgeStrokeOverprint** 
>
> If true, the bottom edge border stroke will overprint. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **bottomEdgeStrokeGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the bottom edge border stroke. Note: Not valid when bottom edge stroke type is solid. Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **bottomEdgeStrokeGapTint** 
>
> The tint (as a percentage) of the bottom edge border stroke gap color. (Range: 0 to 100) Note: Not valid when bottom edge stroke type is solid. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **bottomEdgeStrokeGapOverprint** 
>
> If true, the gap color of the bottom edge border stroke will overprint. Note: Not valid when bottom edge stroke type is solid. Can return: Boolean or NothingEnum enumerator.
*** 
> String **name** 
>
> The name of the style.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**( CellStyle **replacingWith** )
> 
> Deletes the style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CellStyle | replacingWith | The style to apply in place of the deleted style. (Optional) |

*** 
> CellStyle **duplicate**()
> 
> Duplicates the CellStyle.
*** 
> CellStyle **move**( LocationOptions **to**, Mixed **reference** )
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
> Generates a string which, if executed, will return the CellStyle.
*** 
> CellStyle **getElements**()
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


