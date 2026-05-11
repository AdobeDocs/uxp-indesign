# FindChangeInnerShadowSetting
Inner shadow effect settings.

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
> The parent of the FindChangeInnerShadowSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
> Mixed **xOffset** 
>
> The horizontal offset of the shadow. Can return: Unit (-1000 - 1000 points) or NothingEnum enumerator.
*** 
> Mixed **yOffset** 
>
> The vertical offset of the shadow. Can return: Unit (-1000 - 1000 points) or NothingEnum enumerator.
*** 
> Mixed **applied** 
>
> If true, the inner shadow effect is applied. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **effectColor** 
>
> The color applied to the inner shadow, specified as a swatch (color, gradient, tint, or mixed ink), or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127. . Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **blendMode** 
>
> The blending mode for the inner shadow effect. Can return: BlendMode enumerator or NothingEnum enumerator.
*** 
> Mixed **opacity** 
>
> The opacity (as a percentage) of the inner shadow. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
*** 
> Mixed **angle** 
>
> The angle at which the inner shadow is thrown. (Range: -360 to 360). Can return: Real (-180 - 180) or NothingEnum enumerator.
*** 
> Mixed **distance** 
>
> The distance between the FindChangeInnerShadowSetting and the shadow. . Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
*** 
> Mixed **useGlobalLight** 
>
> If true, the global light angle is used. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **chokeAmount** 
>
> The amount to choke the inner shadow (as a percentage of shadow size). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
*** 
> Mixed **size** 
>
> The size of the inner shadow. Can return: Unit (0 - 144 points) or NothingEnum enumerator.
*** 
> Mixed **noise** 
>
> The amount (as a percentage) of noise to add to the shadow. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the FindChangeInnerShadowSetting.
*** 
> FindChangeInnerShadowSetting **getElements**()
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


