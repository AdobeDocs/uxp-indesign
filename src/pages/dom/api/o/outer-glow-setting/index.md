# OuterGlowSetting
Outer glow effect settings.

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
> The parent of the OuterGlowSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
> Boolean **applied** 
>
> If true, the outer glow effect is applied.
<HorizontalLine />
> BlendMode **blendMode** 
>
> The blending mode for the outer glow effect.
<HorizontalLine />
> Number **opacity** 
>
> The opacity of the outer glow (as a percentage). (Range: 0 to 100)
<HorizontalLine />
> Number **noise** 
>
> The amount (as a percentage) of noise applied to the outer glow. (Range: 0 to 100)
<HorizontalLine />
> Swatch **effectColor** 
>
> The color applied to the outer glow, specified as a swatch (color, gradient, tint, or mixed ink), or an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127.
<HorizontalLine />
> GlowTechnique **technique** 
>
> The technique applied to the outer glow.
<HorizontalLine />
> Number **spread** 
>
> The amount of spread (as a percentage of the outer glow size). (Range: 0 to 100)
<HorizontalLine />
> Measurement Unit (Number or String)=any **size** 
>
> The size of the outer glow.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the OuterGlowSetting.
<HorizontalLine />
> OuterGlowSetting **getElements**()
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


