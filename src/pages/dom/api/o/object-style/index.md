# ObjectStyle
An object style.

## Instance
> *Read Only* 
> 
> ObjectExportOption **objectExportOptions** 
>
> Export options for the object
<HorizontalLine />
> *Read Only* 
> 
> TransparencySetting **transparencySettings** 
>
> Transparency settings.
<HorizontalLine />
> *Read Only* 
> 
> StrokeTransparencySetting **strokeTransparencySettings** 
>
> Transparency settings for the stroke.
<HorizontalLine />
> *Read Only* 
> 
> FillTransparencySetting **fillTransparencySettings** 
>
> Transparency settings for the fill applied to the ObjectStyle.
<HorizontalLine />
> *Read Only* 
> 
> ContentTransparencySetting **contentTransparencySettings** 
>
> Transparency settings for the content of the ObjectStyle.
<HorizontalLine />
> *Read Only* 
> 
> ObjectStyleObjectEffectsCategorySettings **objectEffectsEnablingSettings** 
>
> The object effects enabling settings.
<HorizontalLine />
> *Read Only* 
> 
> ObjectStyleStrokeEffectsCategorySettings **strokeEffectsEnablingSettings** 
>
> The stroke effects enabling settings.
<HorizontalLine />
> *Read Only* 
> 
> ObjectStyleFillEffectsCategorySettings **fillEffectsEnablingSettings** 
>
> The fill effects enabling settings.
<HorizontalLine />
> *Read Only* 
> 
> ObjectStyleContentEffectsCategorySettings **contentEffectsEnablingSettings** 
>
> The content effects enabling settings.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the ObjectStyle.
<HorizontalLine />
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
> The parent of the ObjectStyle (a Document, Application or ObjectStyleGroup).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the ObjectStyle within its containing object.
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
> *Read Only* 
> 
> ObjectStyleExportTagMaps **objectStyleExportTagMaps** 
>
> A collection of object style export tag maps.
<HorizontalLine />
> *Read Only* 
> 
> Preferences **preferences** 
>
> A collection of preferences objects.
<HorizontalLine />
> Boolean **emitCss** 
>
> Emit CSS
<HorizontalLine />
> TransformAttributeOption **transformAttributeOptions** 
>
> The layout attribute options to apply to any page item.
<HorizontalLine />
> Boolean **enableTransformAttributes** 
>
> If true, enables the Dimension and Position attributes
<HorizontalLine />
> Boolean **includeClass** 
>
> If true, class attribute will be generated for the style
<HorizontalLine />
> Boolean **enableTextFrameAutoSizingOptions** 
>
> If true, the object style will apply auto-sizing text frame options.
<HorizontalLine />
> Boolean **enableTextFrameColumnRuleOptions** 
>
> Enable the text frame column rule options category of object style
<HorizontalLine />
> Boolean **enableExportTagging** 
>
> If true, the object style will apply an epub tag and class.
<HorizontalLine />
> Boolean **enableObjectExportAltTextOptions** 
>
> If true, the object style will apply alt text export options.
<HorizontalLine />
> Boolean **enableObjectExportTaggedPdfOptions** 
>
> If true, the object style will apply tagged pdf export options.
<HorizontalLine />
> Boolean **enableObjectExportEpubOptions** 
>
> If true, the object style will apply epub export options.
<HorizontalLine />
> Mixed **basedOn** 
>
> The style that this style is based on. Can return: ObjectStyle or String.
<HorizontalLine />
> String **name** 
>
> The name of the ObjectStyle.
<HorizontalLine />
> ParagraphStyle **appliedParagraphStyle** 
>
> The paragraph style applied to the text. Can also accept: String.
<HorizontalLine />
> Boolean **applyNextParagraphStyle** 
>
> If true, applies paragraph styles using Next Paragraph Style settings, beginning with the Next Paragraph Style defined in the paragraph style associated with the object style (if any).
<HorizontalLine />
> Boolean **enableFill** 
>
> If true, the object style will apply a fill.
<HorizontalLine />
> Boolean **enableStroke** 
>
> If true, the object style will apply a stroke.
<HorizontalLine />
> Boolean **enableParagraphStyle** 
>
> If true, the object style will apply a paragraph style.
<HorizontalLine />
> Boolean **enableTextFrameGeneralOptions** 
>
> If true, the object style will apply general text frame options.
<HorizontalLine />
> Boolean **enableTextFrameBaselineOptions** 
>
> If true, the object style will apply baseline text frame options.
<HorizontalLine />
> Boolean **enableStoryOptions** 
>
> If true, the object style will apply story options.
<HorizontalLine />
> Boolean **enableTextWrapAndOthers** 
>
> If true, the object style will apply text wrap, contour, and non-printing settings.
<HorizontalLine />
> Boolean **enableAnchoredObjectOptions** 
>
> If true, the object style will apply an anchored object setting.
<HorizontalLine />
> Swatch **fillColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of the ObjectStyle. . Can also accept: String.
<HorizontalLine />
> Number **fillTint** 
>
> The percent of tint to use in the ObjectStyle's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
<HorizontalLine />
> Boolean **overprintFill** 
>
> If true, the ObjectStyle's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors.
<HorizontalLine />
> Measurement Unit (Number or String)=any **strokeWeight** 
>
> The weight (in points) to apply to the ObjectStyle's stroke.
<HorizontalLine />
> Number **miterLimit** 
>
> The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join.
<HorizontalLine />
> EndCap **endCap** 
>
> The end shape of an open path.
<HorizontalLine />
> EndJoin **endJoin** 
>
> The corner join applied to the ObjectStyle.
<HorizontalLine />
> StrokeStyle **strokeType** 
>
> The name of the stroke style to apply. Can also accept: String.
<HorizontalLine />
> ArrowHead **leftLineEnd** 
>
> The arrowhead applied to the start of the path.
<HorizontalLine />
> ArrowHead **rightLineEnd** 
>
> The arrowhead applied to the end of the path.
<HorizontalLine />
> Swatch **strokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the ObjectStyle. Can also accept: String.
<HorizontalLine />
> Number **strokeTint** 
>
> The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
<HorizontalLine />
> Boolean **overprintStroke** 
>
> If true, the ObjectStyle's stroke color overprints any underlying objects. If false, the stroke color knocks out the  underlying colors.
<HorizontalLine />
> Swatch **gapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type.
<HorizontalLine />
> Number **gapTint** 
>
> The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
<HorizontalLine />
> Boolean **overprintGap** 
>
> If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors.
<HorizontalLine />
> StrokeAlignment **strokeAlignment** 
>
> The stroke alignment applied to the ObjectStyle.
<HorizontalLine />
> Boolean **nonprinting** 
>
> If true, the ObjectStyle does not print.
<HorizontalLine />
> Number **gradientFillAngle** 
>
> The angle of a linear gradient applied to the fill of the ObjectStyle. (Range: -180 to 180)
<HorizontalLine />
> Number **gradientStrokeAngle** 
>
> The angle of a linear gradient applied to the stroke of the ObjectStyle. (Range: -180 to 180)
<HorizontalLine />
> TextFramePreference **textFramePreferences** 
>
> Text frame preference settings.
<HorizontalLine />
> BaselineFrameGridOption **baselineFrameGridOptions** 
>
> Baseline frame grid option settings.
<HorizontalLine />
> AnchoredObjectSetting **anchoredObjectSettings** 
>
> Anchored object settings.
<HorizontalLine />
> TextWrapPreference **textWrapPreferences** 
>
> The text wrap preference properties that define the default formatting for wrapping text around objects.
<HorizontalLine />
> StoryPreference **storyPreferences** 
>
> Story preference settings.
<HorizontalLine />
> CornerOptions **topLeftCornerOption** 
>
> The shape to be applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes.Note: corner option differs from end join in which you can set a radius for a corner option, whereas the rounded or beveled effect of an end join depends on the stroke weight.
<HorizontalLine />
> CornerOptions **topRightCornerOption** 
>
> The shape to apply to the top right corner of rectangular shapes
<HorizontalLine />
> CornerOptions **bottomLeftCornerOption** 
>
> The shape to apply to the bottom left corner of rectangular shapes.
<HorizontalLine />
> CornerOptions **bottomRightCornerOption** 
>
> The shape to apply to the bottom right corner of rectangular shapes.
<HorizontalLine />
> Measurement Unit (Number or String)=any **topLeftCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes
<HorizontalLine />
> Measurement Unit (Number or String)=any **topRightCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes
<HorizontalLine />
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes
<HorizontalLine />
> Measurement Unit (Number or String)=any **bottomRightCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes
<HorizontalLine />
> FrameFittingOption **frameFittingOptions** 
>
> The frame fitting option to apply to placed or pasted content. Can be applied to a frame, object style, or document or to the application.
<HorizontalLine />
> Boolean **enableFrameFittingOptions** 
>
> If true, the object style will apply frame fitting options.
<HorizontalLine />
> Boolean **enableStrokeAndCornerOptions** 
>
> If true, the object style will apply stroke options and corner options.
<HorizontalLine />
> ArrowHeadAlignmentEnum **arrowHeadAlignment** 
>
> The arrowhead alignment applied to the ObjectStyle.
<HorizontalLine />
> Number **leftArrowHeadScale** 
>
> The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000)
<HorizontalLine />
> Number **rightArrowHeadScale** 
>
> The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000)
<HorizontalLine />
> Boolean **enableTextFrameFootnoteOptions** 
>
> Enable the text frame footnote options category of object style
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> Boolean **setDimensionAttributeState**( DimensionAttributes **whichAttributes**, Boolean **attributeState** )
> 
> Sets the given dimension attribute state to enabled or disabled state
#### Parameters
| Type | Name | Description |
|---|---|---|
| DimensionAttributes | whichAttributes | Which dimension attributes do you want to enable or disable. |
| Boolean | attributeState | Attribute state to be set, set true to enable and false to disable the attributes |

<HorizontalLine />
> Boolean **setPositionAttributeState**( PositionAttributes **whichAttributes**, Boolean **attributeState** )
> 
> Sets the given position attribute state to enabled or disabled state
#### Parameters
| Type | Name | Description |
|---|---|---|
| PositionAttributes | whichAttributes | Which position attributes do you want to enable or disable. |
| Boolean | attributeState | Attribute state to be set, set true to enable and false to disable the attributes |

<HorizontalLine />
> ObjectStyle **duplicate**()
> 
> Duplicates the ObjectStyle.
<HorizontalLine />
> ObjectStyle **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the ObjectStyle to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The new location relative to the reference object or within the container object. |
| Mixed | reference | The reference object. Note: Required when the to parameter is before or after. Can accept: ObjectStyle, ObjectStyleGroup, Document or Application. (Optional) |

<HorizontalLine />
> **remove**( ObjectStyle **replacingWith** )
> 
> Deletes the style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ObjectStyle | replacingWith | The style to apply in place of the deleted style. (Optional) |

<HorizontalLine />
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

<HorizontalLine />
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the ObjectStyle.
<HorizontalLine />
> ObjectStyle **getElements**()
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


