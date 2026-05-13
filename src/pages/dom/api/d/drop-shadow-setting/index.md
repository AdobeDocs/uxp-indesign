# DropShadowSetting
Drop shadow settings.

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
> The parent of the DropShadowSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
> Measurement Unit (Number or String)=any **distance** 
>
> The distance between the item and its shadow
<HorizontalLine />
> Number **angle** 
>
> The angle at which the shadow is thrown
<HorizontalLine />
> ShadowMode **mode** 
>
> The shadow mode.
<HorizontalLine />
> BlendMode **blendMode** 
>
> The blending mode for the drop shadow effect.
<HorizontalLine />
> Number **opacity** 
>
> The opacity of the drop shadow (as a percentage). (Range: 0 to 100)
<HorizontalLine />
> Measurement Unit (Number or String)=any **xOffset** 
>
> The horizontal offset of the drop shadow. Range depends on the unit type. For points: -1000 to 1000; for picas: -83p4 to 83p4; for inches: -13.8889 to 13.8889; for mm: -352.778 to 352.778; for cm: -35.277 to 35.277; for ciceros: -78c2.389 to 78c2.389.
<HorizontalLine />
> Measurement Unit (Number or String)=any **yOffset** 
>
> The vertical offset of the drop shadow. (Range depends on the unit type. For points: -1000 to 1000; for picas: -83p4 to 83p4; for inches: -13.8889 to 13.8889; for mm: -352.778 to 352.778; for cm: -35.277 to 35.277; for ciceros: -78c2.389 to 78c2.389)
<HorizontalLine />
> Measurement Unit (Number or String)=any **size** 
>
> The radius (in pixels) of the blur applied to the drop shadow. (Range depends on the unit type. For points: 0 to 144; for picas: 0p0 to 12p0; for inches: 0 to 2; for mm: 0 to 50.08; for cm: 0 to 5.08; for ciceros: 0c0 to 11c3.128.)
<HorizontalLine />
> Swatch **effectColor** 
>
> The color applied to the drop shadow, specified as a swatch (color, gradient, tint, or mixed ink), or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127.
<HorizontalLine />
> Number **noise** 
>
> The amount (as a percentage) of noise applied to the shadow. (Range: 0 to 100)
<HorizontalLine />
> Number **spread** 
>
> The amount (as a percentage of the blur width) to spread the footprint of the drop shadow and reduce the radius of the blur. (Range: 0 to 100)
<HorizontalLine />
> Boolean **useGlobalLight** 
>
> If true, uses the global light angle.
<HorizontalLine />
> Boolean **knockedOut** 
>
> If true, the layer will knock out the drop shadow.
<HorizontalLine />
> Boolean **honorOtherEffects** 
>
> If true, the drop shadow will take into account other non-shadow effects.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the DropShadowSetting.
<HorizontalLine />
> DropShadowSetting **getElements**()
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


