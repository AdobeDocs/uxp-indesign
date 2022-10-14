# FindChangeDropShadowSetting
Drop shadow settings.

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
> The parent of the FindChangeDropShadowSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
> Mixed **distance** 
>
> The distance between the item and its shadow. Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
*** 
> Mixed **angle** 
>
> The angle at which the shadow is thrown. Can return: Real (-180 - 180) or NothingEnum enumerator.
*** 
> Mixed **mode** 
>
> The shadow mode. Can return: ShadowMode enumerator or NothingEnum enumerator.
*** 
> Mixed **blendMode** 
>
> The blending mode for the drop shadow effect. Can return: BlendMode enumerator or NothingEnum enumerator.
*** 
> Mixed **opacity** 
>
> The opacity of the drop shadow (as a percentage). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
*** 
> Mixed **xOffset** 
>
> The horizontal offset of the drop shadow. Range depends on the unit type. For points: -1000 to 1000; for picas: -83p4 to 83p4; for inches: -13.8889 to 13.8889; for mm: -352.778 to 352.778; for cm: -35.277 to 35.277; for ciceros: -78c2.389 to 78c2.389. Can return: Unit (-1000 - 1000 points) or NothingEnum enumerator.
*** 
> Mixed **yOffset** 
>
> The vertical offset of the drop shadow. (Range depends on the unit type. For points: -1000 to 1000; for picas: -83p4 to 83p4; for inches: -13.8889 to 13.8889; for mm: -352.778 to 352.778; for cm: -35.277 to 35.277; for ciceros: -78c2.389 to 78c2.389). Can return: Unit (-1000 - 1000 points) or NothingEnum enumerator.
*** 
> Mixed **size** 
>
> The radius (in pixels) of the blur applied to the drop shadow. (Range depends on the unit type. For points: 0 to 144; for picas: 0p0 to 12p0; for inches: 0 to 2; for mm: 0 to 50.08; for cm: 0 to 5.08; for ciceros: 0c0 to 11c3.128.). Can return: Unit (0 - 144 points) or NothingEnum enumerator.
*** 
> Mixed **effectColor** 
>
> The color applied to the drop shadow, specified as a swatch (color, gradient, tint, or mixed ink), or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127. Can return: Swatch or NothingEnum enumerator.
*** 
> Mixed **noise** 
>
> The amount (as a percentage) of noise applied to the shadow. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
*** 
> Mixed **spread** 
>
> The amount (as a percentage of the blur width) to spread the footprint of the drop shadow and reduce the radius of the blur. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
*** 
> Mixed **useGlobalLight** 
>
> If true, uses the global light angle. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **knockedOut** 
>
> If true, the layer will knock out the drop shadow. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **honorOtherEffects** 
>
> If true, the drop shadow will take into account other non-shadow effects. Can return: Boolean or NothingEnum enumerator.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the FindChangeDropShadowSetting.
*** 
> FindChangeDropShadowSetting **getElements**()
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


