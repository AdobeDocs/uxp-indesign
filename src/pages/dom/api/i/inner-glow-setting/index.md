# InnerGlowSetting
Inner glow effect settings.

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
> The parent of the InnerGlowSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
> Boolean **applied** 
>
> If true, the inner glow effect is applied.
*** 
> BlendMode **blendMode** 
>
> The blending mode for the inner glow effect.
*** 
> Number **opacity** 
>
> The opacity of the inner glow (as a percentage). (Range: 0 to 100)
*** 
> Number **noise** 
>
> The amount (as a percentage) of noise applied to the inner glow. (Range: 0 to 100)
*** 
> Swatch **effectColor** 
>
> The color applied to the inner glow, specified as a swatch (color, gradient, tint, or mixed ink), or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127.
*** 
> GlowTechnique **technique** 
>
> The technique used for the inner glow.
*** 
> Number **spread** 
>
> The amount of spread (as a percentage of the inner glow size). (Range: 0 to 100)
*** 
> Measurement Unit (Number or String)=any **size** 
>
> The size of the inner glow.
*** 
> InnerGlowSource **source** 
>
> The light source of the inner glow effect.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the InnerGlowSetting.
*** 
> InnerGlowSetting **getElements**()
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


