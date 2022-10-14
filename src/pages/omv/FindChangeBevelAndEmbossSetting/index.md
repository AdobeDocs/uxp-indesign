# FindChangeBevelAndEmbossSetting
Bevel and emboss effect settings.

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
> The parent of the FindChangeBevelAndEmbossSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
> Mixed **applied** 
>
> If true, the bevel or emboss effect is applied. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **style** 
>
> The style of bevel or emboss. Can return: BevelAndEmbossStyle enumerator or NothingEnum enumerator.
*** 
> Mixed **technique** 
>
> The edging technique of the bevel or emboss. Can return: BevelAndEmbossTechnique enumerator or NothingEnum enumerator.
*** 
> Mixed **depth** 
>
> The depth of the bevel or emboss (as a percentage). (Range: 0 to 1000). Can return: Real (0 - 1000) or NothingEnum enumerator.
*** 
> Mixed **direction** 
>
> The direction of the bevel or emboss. Can return: BevelAndEmbossDirection enumerator or NothingEnum enumerator.
*** 
> Mixed **size** 
>
> The size of the bevel or emboss. Can return: Unit (0 - 144 points) or NothingEnum enumerator.
*** 
> Mixed **soften** 
>
> The amount (in pixels) of softening. Can return: Unit (0 - 144 points) or NothingEnum enumerator.
*** 
> Mixed **angle** 
>
> The angle of the light source. (Range: -180 to 180). Can return: Real (-180 - 180) or NothingEnum enumerator.
*** 
> Mixed **altitude** 
>
> The altitude of the light source. (Range: 0 to 90). Can return: Real (0 - 100) or NothingEnum enumerator.
*** 
> Mixed **useGlobalLight** 
>
> If true, the global light source is used. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **highlightColor** 
>
> The color applied to the highlight portion of the effect, specified as a swatch (color, gradient, tint, or mixed ink), a color library color, a hex value, or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127; for HSB, specify three colors in the format [H,S,B], with H in the range 0 to 360 and S and B as percentages in the range 0 to 100. Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **highlightBlendMode** 
>
> The blending mode for the highlight portion of the effect. Can return: BlendMode enumerator or NothingEnum enumerator.
*** 
> Mixed **highlightOpacity** 
>
> The opacity of the highlight portion of the effect (as a percentage). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
*** 
> Mixed **shadowColor** 
>
> The color applied to the shadow portion of the effect, specified as a swatch (color, gradient, tint, or mixed ink), a color library color, a hex value, or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127; for HSB, specify three colors in the format [H,S,B], with H in the range 0 to 360 and S and B as percentages in the range 0 to 100. Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **shadowBlendMode** 
>
> The blending mode for the shadow portion of the effect. Can return: BlendMode enumerator or NothingEnum enumerator.
*** 
> Mixed **shadowOpacity** 
>
> The opacity of the shadow portion of the effect (as a percentage). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the FindChangeBevelAndEmbossSetting.
*** 
> FindChangeBevelAndEmbossSetting **getElements**()
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


