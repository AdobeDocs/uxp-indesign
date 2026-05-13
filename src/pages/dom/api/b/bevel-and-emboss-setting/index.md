# BevelAndEmbossSetting
Bevel and emboss effect settings.

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
> The parent of the BevelAndEmbossSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
> If true, the bevel or emboss effect is applied.
<HorizontalLine />
> BevelAndEmbossStyle **style** 
>
> The style of bevel or emboss.
<HorizontalLine />
> BevelAndEmbossTechnique **technique** 
>
> The edging technique of the bevel or emboss.
<HorizontalLine />
> Number **depth** 
>
> The depth of the bevel or emboss (as a percentage). (Range: 0 to 1000)
<HorizontalLine />
> BevelAndEmbossDirection **direction** 
>
> The direction of the bevel or emboss.
<HorizontalLine />
> Measurement Unit (Number or String)=any **size** 
>
> The size of the bevel or emboss.
<HorizontalLine />
> Measurement Unit (Number or String)=any **soften** 
>
> The amount (in pixels) of softening.
<HorizontalLine />
> Number **angle** 
>
> The angle of the light source. (Range: -180 to 180)
<HorizontalLine />
> Number **altitude** 
>
> The altitude of the light source. (Range: 0 to 90)
<HorizontalLine />
> Boolean **useGlobalLight** 
>
> If true, the global light source is used.
<HorizontalLine />
> Swatch **highlightColor** 
>
> The color applied to the highlight portion of the effect, specified as a swatch (color, gradient, tint, or mixed ink), a color library color, a hex value, or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127; for HSB, specify three colors in the format [H,S,B], with H in the range 0 to 360 and S and B as percentages in the range 0 to 100.
<HorizontalLine />
> BlendMode **highlightBlendMode** 
>
> The blending mode for the highlight portion of the effect.
<HorizontalLine />
> Number **highlightOpacity** 
>
> The opacity of the highlight portion of the effect (as a percentage). (Range: 0 to 100)
<HorizontalLine />
> Swatch **shadowColor** 
>
> The color applied to the shadow portion of the effect, specified as a swatch (color, gradient, tint, or mixed ink), a color library color, a hex value, or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127; for HSB, specify three colors in the format [H,S,B], with H in the range 0 to 360 and S and B as percentages in the range 0 to 100.
<HorizontalLine />
> BlendMode **shadowBlendMode** 
>
> The blending mode for the shadow portion of the effect.
<HorizontalLine />
> Number **shadowOpacity** 
>
> The opacity of the shadow portion of the effect (as a percentage). (Range: 0 to 100)
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the BevelAndEmbossSetting.
<HorizontalLine />
> BevelAndEmbossSetting **getElements**()
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


