# FindObjectPreference
Find object preferences.

## Instance
> *Read Only* 
> 
> Mixed **transparencySettings** 
>
> Transparency settings. Can return: FindChangeTransparencySetting or NothingEnum enumerator.
*** 
> *Read Only* 
> 
> Mixed **strokeTransparencySettings** 
>
> Transparency settings for the stroke. Can return: FindChangeStrokeTransparencySetting or NothingEnum enumerator.
*** 
> *Read Only* 
> 
> Mixed **fillTransparencySettings** 
>
> Transparency settings for the fill applied to the FindObjectPreference. Can return: FindChangeFillTransparencySetting or NothingEnum enumerator.
*** 
> *Read Only* 
> 
> Mixed **contentTransparencySettings** 
>
> Transparency settings for the content of the FindObjectPreference. Can return: FindChangeContentTransparencySetting or NothingEnum enumerator.
*** 
> *Read Only* 
> 
> Mixed **userModifiedWrap** 
>
> If true, the text wrap path has been explicitly modified by the user. Can return: Boolean or NothingEnum enumerator.
*** 
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
> The parent of the FindObjectPreference (a Application).
*** 
> *Read Only* 
> 
> Preferences **preferences** 
>
> A collection of preferences objects.
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
> Mixed **storyDirection** 
>
> The direction of the story. Can return: StoryDirectionOptions enumerator or NothingEnum enumerator.
*** 
> Mixed **positionReferencePoint** 
>
> The point in the referenced object relative to which to position the anchored object. Notes: Valid only when anchored position is custom. Can return: AnchorPoint enumerator or NothingEnum enumerator.
*** 
> Mixed **applyToMasterPageOnly** 
>
> If true, text wraps on the master spread apply to that spread only, and not to any pages the master spread has been applied to. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **textWrapSide** 
>
> Text wrap side options. Can return: TextWrapSideOptions enumerator or NothingEnum enumerator.
*** 
> Mixed **textWrapOffset** 
>
> The minimum space between text and the edges of the wrapped object. Specify four values in the format [top, left, bottom, right]. . Can return: Ordered array containing top:Unit, left:Unit, bottom:Unit, right:Unit or NothingEnum enumerator.
*** 
> Mixed **textWrapMode** 
>
> The text wrap mode. . Can return: TextWrapModes enumerator or NothingEnum enumerator.
*** 
> Mixed **footnotesEnableOverrides** 
>
> If true, enable overrides to document footnote options. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **footnotesSpanAcrossColumns** 
>
> If true, enable straddling footnotes. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **footnotesMinimumSpacing** 
>
> Minimum Spacing Before First Footnote. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
*** 
> Mixed **footnotesSpaceBetween** 
>
> Space between footnotes. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
*** 
> Mixed **appliedObjectStyles** 
>
> The applied object style(s). Can return: String or NothingEnum enumerator. Can also accept: ObjectStyle.
*** 
> Mixed **fillColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of the FindObjectPreference. . Can return: Swatch or NothingEnum enumerator. Can also accept: String.
*** 
> Mixed **fillTint** 
>
> The percent of tint to use in the FindObjectPreference's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **overprintFill** 
>
> If true, the FindObjectPreference's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **strokeWeight** 
>
> The weight (in points) to apply to the FindObjectPreference's stroke. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **miterLimit** 
>
> The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. Can return: Real (1 - 500) or NothingEnum enumerator.
*** 
> Mixed **endCap** 
>
> The end shape of an open path. Can return: EndCap enumerator or NothingEnum enumerator.
*** 
> Mixed **endJoin** 
>
> The corner join applied to the FindObjectPreference. Can return: EndJoin enumerator or NothingEnum enumerator.
*** 
> Mixed **strokeType** 
>
> The name of the stroke style to apply. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
*** 
> Mixed **strokeCornerAdjustment** 
>
> The corner adjustment applied to the FindObjectPreference. Can return: StrokeCornerAdjustment enumerator or NothingEnum enumerator.
*** 
> Mixed **strokeDashAndGap** 
>
> The dash and gap measurements that define the pattern of a custom dashed line. Define up to six values (in points) in the format [dash1, gap1, dash2, gap2, dash3, gap3]. Can return: Array of Units or NothingEnum enumerator.
*** 
> Mixed **leftLineEnd** 
>
> The arrowhead applied to the start of the path. . Can return: ArrowHead enumerator or NothingEnum enumerator.
*** 
> Mixed **rightLineEnd** 
>
> The arrowhead applied to the end of the path. Can return: ArrowHead enumerator or NothingEnum enumerator.
*** 
> Mixed **strokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the FindObjectPreference. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
*** 
> Mixed **strokeTint** 
>
> The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **overprintStroke** 
>
> If true, the FindObjectPreference's stroke color overprints any underlying objects. If false, the stroke color knocks out the  underlying colors. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **gapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **gapTint** 
>
> The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **overprintGap** 
>
> If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **strokeAlignment** 
>
> The stroke alignment applied to the FindObjectPreference. Can return: StrokeAlignment enumerator or NothingEnum enumerator.
*** 
> Mixed **nonprinting** 
>
> If true, the FindObjectPreference does not print. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **gradientFillAngle** 
>
> The angle of a linear gradient applied to the fill of the FindObjectPreference. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **gradientStrokeAngle** 
>
> The angle of a linear gradient applied to the stroke of the FindObjectPreference. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **textColumnCount** 
>
> The number of columns in the text frame. Note: Depending on the value of use fixed column width, the number of columns can change automatically when the text frame size changes. Can return: Long Integer (1 - 40) or NothingEnum enumerator.
*** 
> Mixed **textColumnGutter** 
>
> The space between columns in the text frame. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
*** 
> Mixed **textColumnFixedWidth** 
>
> The column width of the columns in the text frame. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
*** 
> Mixed **useFixedColumnWidth** 
>
> If true, maintains column width when the text frame is resized. If false, causes columns to resize when the text frame is resized. Note: When true, resizing the frame can change the number of columns in the frame. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **insetSpacing** 
>
> The amount to offset text from the edges of the text frame, specified either as a single value applied uniformly to all sides of the text frame or as an array of 4 values in the format [top inset, left inset, bottom inset, right inset]. Can return: Unit (0 - 8640 points), Array of 4 Units (0 - 8640 points) or NothingEnum enumerator.
*** 
> Mixed **firstBaselineOffset** 
>
> The distance between the baseline of the text and the top inset of the text frame or cell. Can return: FirstBaseline enumerator or NothingEnum enumerator.
*** 
> Mixed **minimumFirstBaselineOffset** 
>
> The minimum distance between the baseline of the text and the top inset of the text frame or cell. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
*** 
> Mixed **verticalJustification** 
>
> The vertical alignment of the text content. . Can return: VerticalJustification enumerator or NothingEnum enumerator.
*** 
> Mixed **verticalThreshold** 
>
> The maximum amount of vertical space between two paragraphs. Note: Valid only when vertical justification is justified; the specified amount is applied in addition to the space before or space after values defined for the paragraph. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
*** 
> Mixed **ignoreWrap** 
>
> If true, ignores text wrap settings for drawn or placed objects in the text frame. . Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **useCustomBaselineFrameGrid** 
>
> If true, uses a custom baseline frame grid. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **startingOffsetForBaselineFrameGrid** 
>
> The amount to offset the baseline grid. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
*** 
> Mixed **baselineFrameGridRelativeOption** 
>
> The location (top of page, top margin, top of frame, or frame inset) on which to base the custom baseline grid. Can return: BaselineFrameGridRelativeOption enumerator or NothingEnum enumerator.
*** 
> Mixed **baselineFrameGridIncrement** 
>
> The distance between grid lines. Can return: Unit (1 - 8640 points) or NothingEnum enumerator.
*** 
> Mixed **baselineFrameGridColor** 
>
> The grid line color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
*** 
> Mixed **inverse** 
>
> If true, inverts the text wrap. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **contourType** 
>
> The contour type. Can return: ContourOptionsTypes enumerator or NothingEnum enumerator.
*** 
> Mixed **includeInsideEdges** 
>
> If true, creates interior clipping paths within the surrounding clipping path. Note: Valid only when clipping type is alpha channel or detect edges. . Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **anchoredPosition** 
>
> The position of the anchored object relative to the anchor. Can return: AnchorPosition enumerator or NothingEnum enumerator.
*** 
> Mixed **spineRelative** 
>
> If true, the position of the anchored object is relative to the binding spine of the page or spread. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **lockPosition** 
>
> If true, prevents manual positioning of the anchored object. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **pinPosition** 
>
> If true, pins the position of the anchored object within the text frame top and bottom. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **anchorPoint** 
>
> The point in the anchored object to position. Can return: AnchorPoint enumerator or NothingEnum enumerator.
*** 
> Mixed **horizontalReferencePoint** 
>
> The horizontal reference point on the page. Valid only when anchored position is custom. Can return: AnchoredRelativeTo enumerator or NothingEnum enumerator.
*** 
> Mixed **verticalReferencePoint** 
>
> The vertical reference point on the page. Valid when anchored position is custom. Can return: VerticallyRelativeTo enumerator or NothingEnum enumerator.
*** 
> Mixed **anchorXoffset** 
>
> The horizontal (x) offset of the anchored object. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **anchorYoffset** 
>
> The vertical (y) offset of the anchored object. Corresponds to the space after property for above line positioning. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **anchorSpaceAbove** 
>
> The space above an above-line anchored object. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **opticalMarginAlignment** 
>
> If true, adjust the position of characters at the edges of the frame to provide a better appearance. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **opticalMarginSize** 
>
> The point size used as the basis for calculating optical margin alignment. (Range: 0.1 to 1296). Can return: Unit (0.1 - 1296 points) or NothingEnum enumerator.
*** 
> Mixed **leftCrop** 
>
> The amount in measurement units to crop the left edge of a graphic. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **topCrop** 
>
> The amount in measurement units to crop the top edge of a graphic. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **rightCrop** 
>
> The amount in measurement units to crop the right edge of a graphic. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **bottomCrop** 
>
> The amount in measurement units to crop the bottom edge of a graphic. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **fittingOnEmptyFrame** 
>
> The frame fitting option to apply to placed or pasted content if the frame is empty. Can be applied to a frame, object style, or document or to the application. Can return: EmptyFrameFittingOptions enumerator or NothingEnum enumerator.
*** 
> Mixed **fittingAlignment** 
>
> The point with which to align the image empty when fitting in a frame. For information, see frame fitting options. Can return: AnchorPoint enumerator or NothingEnum enumerator.
*** 
> Mixed **arrowHeadAlignment** 
>
> The arrowhead alignment applied to the FindObjectPreference. Can return: ArrowHeadAlignmentEnum enumerator or NothingEnum enumerator.
*** 
> Mixed **leftArrowHeadScale** 
>
> The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **rightArrowHeadScale** 
>
> The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **topLeftCornerOption** 
>
> The shape to be applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes.Note: corner option differs from end join in which you can set a radius for a corner option, whereas the rounded or beveled effect of an end join depends on the stroke weight. Can return: CornerOptions enumerator or NothingEnum enumerator.
*** 
> Mixed **topRightCornerOption** 
>
> The shape to apply to the top right corner of rectangular shapes. Can return: CornerOptions enumerator or NothingEnum enumerator.
*** 
> Mixed **bottomLeftCornerOption** 
>
> The shape to apply to the bottom left corner of rectangular shapes. Can return: CornerOptions enumerator or NothingEnum enumerator.
*** 
> Mixed **bottomRightCornerOption** 
>
> The shape to apply to the bottom right corner of rectangular shapes. Can return: CornerOptions enumerator or NothingEnum enumerator.
*** 
> Mixed **topLeftCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **topRightCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **bottomLeftCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **bottomRightCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **autoSizingType** 
>
> Auto-sizing type of text frame. Based on type, reference value is automatically adjusted. For example, for height only type, top-left reference point becomes top-center. Recommended to change auto-sizing type, after setting other auto-sizing attributes. Can return: AutoSizingTypeEnum enumerator or NothingEnum enumerator.
*** 
> Mixed **autoSizingReferencePoint** 
>
> The reference point for auto sizing of text frame. Reference point is automatically adjusted to the suitable value depending on the auto-sizing type value. As an example, top left reference point becomes top center for height only dimension. Can return: AutoSizingReferenceEnum enumerator or NothingEnum enumerator.
*** 
> Mixed **useMinimumHeightForAutoSizing** 
>
> If true, minimum height value is used during the auto-sizing of text frame. . Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **minimumHeightForAutoSizing** 
>
> The minimum height for auto-sizing of the text frame. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **useMinimumWidthForAutoSizing** 
>
> If true, minimum width value is used during the auto-sizing of text frame. . Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **minimumWidthForAutoSizing** 
>
> The minimum width for auto-sizing of the text frame. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **useNoLineBreaksForAutoSizing** 
>
> If true, line-breaks are not introduced after auto sizing. . Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **preserveAppearanceFromLayout** 
>
> Preserve Appearance from Layout. Can return: PreserveAppearanceFromLayoutEnum enumerator or NothingEnum enumerator.
*** 
> Mixed **altTextSourceType** 
>
> The source type of alternate text. Can return: SourceType enumerator or NothingEnum enumerator.
*** 
> Mixed **actualTextSourceType** 
>
> The source type of actual text. Can return: SourceType enumerator or NothingEnum enumerator.
*** 
> Mixed **customAltText** 
>
> The custom alternate text entered by the user. Can return: String or NothingEnum enumerator.
*** 
> Mixed **customActualText** 
>
> The custom actual text entered by the user. Can return: String or NothingEnum enumerator.
*** 
> Mixed **altMetadataProperty** 
>
> The metadata property to use as source of alternate text. Can return: Ordered array containing namespacePrefix:String, propertyPath:String or NothingEnum enumerator.
*** 
> Mixed **actualMetadataProperty** 
>
> The metadata property to use as source of actual text. Can return: Ordered array containing namespacePrefix:String, propertyPath:String or NothingEnum enumerator.
*** 
> Mixed **applyTagType** 
>
> The tag type of page item. Can return: TagType enumerator or NothingEnum enumerator.
*** 
> Mixed **imageConversionType** 
>
> Allows user to select the image format for conversion. Can return: ImageFormat enumerator or NothingEnum enumerator.
*** 
> Mixed **imageExportResolution** 
>
> The export resolution. Can return: ImageResolution enumerator or NothingEnum enumerator.
*** 
> Mixed **gifOptionsPalette** 
>
> The color palette for GIF conversion. Note: Not valid when image conversion is JPEG. . Can return: GIFOptionsPalette enumerator or NothingEnum enumerator.
*** 
> Mixed **gifOptionsInterlaced** 
>
> If true, generates interlaced GIFs. Note: Not valid  when image conversion is JPEG. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **jpegOptionsQuality** 
>
> The quality of converted JPEG images. Note: Not valid when image conversion is GIF. . Can return: JPEGOptionsQuality enumerator or NothingEnum enumerator.
*** 
> Mixed **jpegOptionsFormat** 
>
> The formatting method for converted JPEG images. Note: Not valid  when image conversion is GIF. Can return: JPEGOptionsFormat enumerator or NothingEnum enumerator.
*** 
> Mixed **imageAlignment** 
>
> Alignment applied to images. Can return: ImageAlignmentType enumerator or NothingEnum enumerator.
*** 
> Mixed **imageSpaceBefore** 
>
> Space Before applied to images. Can return: Real (0 - 8640) or NothingEnum enumerator.
*** 
> Mixed **imageSpaceAfter** 
>
> Space After applied to images. Can return: Real (0 - 8640) or NothingEnum enumerator.
*** 
> Mixed **useImagePageBreak** 
>
> If true, image page break settings will be used in objects. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **imagePageBreak** 
>
> Image page break settings to be used with objects. Can return: ImagePageBreakType enumerator or NothingEnum enumerator.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **altText**()
> 
> Provides the alternate text for the object
*** 
> String **actualText**()
> 
> Provides the actual text for the object
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the FindObjectPreference.
*** 
> FindObjectPreference **getElements**()
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


