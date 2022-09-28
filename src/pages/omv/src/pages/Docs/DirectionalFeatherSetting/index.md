# DirectionalFeatherSetting
Directional feather effect settings.

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
> The parent of the DirectionalFeatherSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
> If true, the directional feather effect is applied.
*** 
> Measurement Unit (Number or String)=any **leftWidth** 
>
> The feather width (in pixels) on the left side of the DirectionalFeatherSetting.
*** 
> Measurement Unit (Number or String)=any **rightWidth** 
>
> The feather width (in pixels) on the right side of the DirectionalFeatherSetting. (Range: .2 to 250)
*** 
> Measurement Unit (Number or String)=any **topWidth** 
>
> The feather width (in pixels) on the top side of the object DirectionalFeatherSetting. (Range: .2 to 250)
*** 
> Measurement Unit (Number or String)=any **bottomWidth** 
>
> The feather width (in pixels) on the bottom side of the object DirectionalFeatherSetting. (Range: .2 to 250)
*** 
> Number **chokeAmount** 
>
> The amount to choke the directional feather (as a percentage of the feather width). (Range: 0 to 100)
*** 
> Number **angle** 
>
> The angle of the feather. (Range: 180 to -180)
*** 
> FollowShapeModeOptions **followShapeMode** 
>
> The shape-following algorithm applied to the feather.
*** 
> Number **noise** 
>
> The amount of noise (as a percentage) applied to the feather region. (Range: 0 to 100)
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the DirectionalFeatherSetting.
*** 
> DirectionalFeatherSetting **getElements**()
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


