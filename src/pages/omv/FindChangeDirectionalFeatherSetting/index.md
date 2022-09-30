# FindChangeDirectionalFeatherSetting
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
> The parent of the FindChangeDirectionalFeatherSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
> If true, the directional feather effect is applied. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **leftWidth** 
>
> The feather width (in pixels) on the left side of the FindChangeDirectionalFeatherSetting. Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
*** 
> Mixed **rightWidth** 
>
> The feather width (in pixels) on the right side of the FindChangeDirectionalFeatherSetting. (Range: .2 to 250). Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
*** 
> Mixed **topWidth** 
>
> The feather width (in pixels) on the top side of the object FindChangeDirectionalFeatherSetting. (Range: .2 to 250). Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
*** 
> Mixed **bottomWidth** 
>
> The feather width (in pixels) on the bottom side of the object FindChangeDirectionalFeatherSetting. (Range: .2 to 250). Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
*** 
> Mixed **chokeAmount** 
>
> The amount to choke the directional feather (as a percentage of the feather width). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
*** 
> Mixed **angle** 
>
> The angle of the feather. (Range: 180 to -180). Can return: Real (-180 - 180) or NothingEnum enumerator.
*** 
> Mixed **followShapeMode** 
>
> The shape-following algorithm applied to the feather. Can return: FollowShapeModeOptions enumerator or NothingEnum enumerator.
*** 
> Mixed **noise** 
>
> The amount of noise (as a percentage) applied to the feather region. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the FindChangeDirectionalFeatherSetting.
*** 
> FindChangeDirectionalFeatherSetting **getElements**()
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


