# PageItemDefault
Default page item formatting properties.

## Instance
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
> Transparency settings for the fill applied to the PageItemDefault.
<HorizontalLine />
> *Read Only* 
> 
> ContentTransparencySetting **contentTransparencySettings** 
>
> Transparency settings for the content of the PageItemDefault.
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
> The parent of the PageItemDefault (a Application or Document).
<HorizontalLine />
> *Read Only* 
> 
> Preferences **preferences** 
>
> A collection of preferences objects.
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
> ObjectStyle **appliedGraphicObjectStyle** 
>
> The default graphic object style applied to the PageItemDefault. Can also accept: String.
<HorizontalLine />
> ObjectStyle **appliedTextObjectStyle** 
>
> The default text object style applied to the PageItemDefault. Can also accept: String.
<HorizontalLine />
> ObjectStyle **appliedGridObjectStyle** 
>
> The default frame grid object style applied to the PageItemDefault. Can also accept: String.
<HorizontalLine />
> Swatch **fillColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItemDefault. . Can also accept: String.
<HorizontalLine />
> Number **fillTint** 
>
> The percent of tint to use in the PageItemDefault's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
<HorizontalLine />
> Measurement Unit (Number or String)=any **strokeWeight** 
>
> The weight (in points) to apply to the PageItemDefault's stroke.
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
> The corner join applied to the PageItemDefault.
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
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItemDefault. Can also accept: String.
<HorizontalLine />
> Number **strokeTint** 
>
> The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
<HorizontalLine />
> Number **gradientFillAngle** 
>
> The angle of a linear gradient applied to the fill of the PageItemDefault. (Range: -180 to 180)
<HorizontalLine />
> Number **gradientStrokeAngle** 
>
> The angle of a linear gradient applied to the stroke of the PageItemDefault. (Range: -180 to 180)
<HorizontalLine />
> Boolean **overprintStroke** 
>
> If true, the PageItemDefault's stroke color overprints any underlying objects. If false, the stroke color knocks out the  underlying colors.
<HorizontalLine />
> Boolean **overprintFill** 
>
> If true, the PageItemDefault's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors.
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
> The stroke alignment applied to the PageItemDefault.
<HorizontalLine />
> Boolean **nonprinting** 
>
> If true, the PageItemDefault does not print.
<HorizontalLine />
> ArrowHeadAlignmentEnum **arrowHeadAlignment** 
>
> The arrowhead alignment applied to the PageItemDefault.
<HorizontalLine />
> Number **leftArrowHeadScale** 
>
> The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000)
<HorizontalLine />
> Number **rightArrowHeadScale** 
>
> The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000)
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
> 
> Applies the specified object style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ObjectStyle | using | The object style to apply. |
| Boolean | clearingOverrides | If true, clears the PageItemDefault's existing attributes before applying the style. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | If true, clears attributes and formatting applied to the PageItemDefault that are not defined in the object style. (Optional) |

<HorizontalLine />
> **clearObjectStyleOverrides**()
> 
> Clear overrides for object style
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the PageItemDefault.
<HorizontalLine />
> PageItemDefault **getElements**()
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


