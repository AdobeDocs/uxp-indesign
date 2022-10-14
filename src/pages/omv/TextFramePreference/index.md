# TextFramePreference
Text frame preferences.

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
> The parent of the TextFramePreference (a Application, Document, TextFrame, EndnoteTextFrame or ObjectStyle).
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
> Number **textColumnCount** 
>
> The number of columns in the text frame. Note: Depending on the value of use fixed column width, the number of columns can change automatically when the text frame size changes.
*** 
> Measurement Unit (Number or String)=any **textColumnGutter** 
>
> The space between columns in the text frame.
*** 
> Measurement Unit (Number or String)=any **textColumnFixedWidth** 
>
> The column width of the columns in the text frame.
*** 
> Boolean **useFixedColumnWidth** 
>
> If true, maintains column width when the text frame is resized. If false, causes columns to resize when the text frame is resized. Note: When true, resizing the frame can change the number of columns in the frame.
*** 
> Mixed **insetSpacing** 
>
> The amount to offset text from the edges of the text frame, specified either as a single value applied uniformly to all sides of the text frame or as an array of 4 values in the format [top inset, left inset, bottom inset, right inset]. Can return: Unit (0 - 8640 points) or Array of 4 Units (0 - 8640 points).
*** 
> FirstBaseline **firstBaselineOffset** 
>
> The distance between the baseline of the text and the top inset of the text frame or cell.
*** 
> Measurement Unit (Number or String)=any **minimumFirstBaselineOffset** 
>
> The minimum distance between the baseline of the text and the top inset of the text frame or cell.
*** 
> VerticalJustification **verticalJustification** 
>
> The vertical alignment of the text content.
*** 
> Measurement Unit (Number or String)=any **verticalThreshold** 
>
> The maximum amount of vertical space between two paragraphs. Note: Valid only when vertical justification is justified; the specified amount is applied in addition to the space before or space after values defined for the paragraph.
*** 
> Boolean **ignoreWrap** 
>
> If true, ignores text wrap settings for drawn or placed objects in the text frame.
*** 
> Boolean **useFlexibleColumnWidth** 
>
> If true, maintains column width between a min and max range when the text frame is resized. If false, causes columns to resize when the text frame is resized. Note: When true, resizing the frame can change the number of columns in the frame.
*** 
> Measurement Unit (Number or String)=any **textColumnMaxWidth** 
>
> The maximum column width of the columns in the text frame. Use 0 to indicate no upper limit.
*** 
> AutoSizingTypeEnum **autoSizingType** 
>
> Auto-sizing type of text frame. Based on type, reference value is automatically adjusted. For example, for height only type, top-left reference point becomes top-center. Recommended to change auto-sizing type, after setting other auto-sizing attributes
*** 
> AutoSizingReferenceEnum **autoSizingReferencePoint** 
>
> The reference point for auto sizing of text frame. Reference point is automatically adjusted to the suitable value depending on the auto-sizing type value. As an example, top left reference point becomes top center for height only dimension
*** 
> Boolean **useMinimumHeightForAutoSizing** 
>
> If true, minimum height value is used during the auto-sizing of text frame.
*** 
> Measurement Unit (Number or String)=any **minimumHeightForAutoSizing** 
>
> The minimum height for auto-sizing of the text frame.
*** 
> Boolean **useMinimumWidthForAutoSizing** 
>
> If true, minimum width value is used during the auto-sizing of text frame.
*** 
> Measurement Unit (Number or String)=any **minimumWidthForAutoSizing** 
>
> The minimum width for auto-sizing of the text frame.
*** 
> Boolean **useNoLineBreaksForAutoSizing** 
>
> If true, line-breaks are not introduced after auto sizing.
*** 
> Boolean **columnRuleOverride** 
>
> If true, enable overrides to text frame vertical column rule options.
*** 
> Number **columnRuleOffset** 
>
> Text Frame Column Rule Offset
*** 
> Number **columnRuleTopInset** 
>
> Text Frame Column Rule top inset
*** 
> Boolean **columnRuleInsetChainOverride** 
>
> If true, enable inset chain override.
*** 
> Number **columnRuleBottomInset** 
>
> Text Frame Column Rule Bottom Inset
*** 
> Number **columnRuleStrokeWidth** 
>
> Text Frame Column Rule Width
*** 
> Swatch **columnRuleStrokeColor** 
>
> Text Frame Column Rule Stroke Color
*** 
> StrokeStyle **columnRuleStrokeType** 
>
> Text Frame Column Rule Stroke Type
*** 
> Number **columnRuleStrokeTint** 
>
> Text Frame Column Rule Stroke Tint
*** 
> Boolean **columnRuleOverprintOverride** 
>
> If true, enable overprint override.
*** 
> Boolean **footnotesEnableOverrides** 
>
> If true, enable overrides to document footnote options.
*** 
> Boolean **footnotesSpanAcrossColumns** 
>
> If true, enable straddling footnotes.
*** 
> Measurement Unit (Number or String)=any **footnotesMinimumSpacing** 
>
> Minimum Spacing Before First Footnote
*** 
> Measurement Unit (Number or String)=any **footnotesSpaceBetween** 
>
> Space between footnotes.
*** 
> Boolean **verticalBalanceColumns** 
>
> Vertically justify balanced across all columns.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextFramePreference.
*** 
> TextFramePreference **getElements**()
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


