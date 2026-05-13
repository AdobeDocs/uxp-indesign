# FindChangeGradientFeatherSetting
Gradient feather effect settings.

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
> The parent of the FindChangeGradientFeatherSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
<HorizontalLine />
> *Read Only* 
> 
> OpacityGradientStops **opacityGradientStops** 
>
> A collection of opacity gradient stops.
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
> Mixed **applied** 
>
> If true, the gradient feather effect is applied. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **type** 
>
> The type of gradient. Can return: GradientType enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **angle** 
>
> The angle of the gradient feather. Can return: Real (-180 - 180) or NothingEnum enumerator.
<HorizontalLine />
> Mixed **length** 
>
> The length of the axial gradient, or radius of the radial gradient. Can return: Unit or NothingEnum enumerator.
<HorizontalLine />
> Mixed **gradientStart** 
>
> The center point (for a radial gradient) or starting point (for a linear gradient) applied to the fill, as page coordinates in the format [x, y]. Can return: Array of 2 Units or NothingEnum enumerator.
<HorizontalLine />
> Mixed **hiliteAngle** 
>
> The hilite angle of the radial gradient feather. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **hiliteLength** 
>
> The hilite length of the radial gradient feather. Can return: Unit or NothingEnum enumerator.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the FindChangeGradientFeatherSetting.
<HorizontalLine />
> FindChangeGradientFeatherSetting **getElements**()
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


