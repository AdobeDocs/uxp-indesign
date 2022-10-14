# FindChangeFeatherSetting
Feather effect settings.

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
> The parent of the FindChangeFeatherSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
> Mixed **mode** 
>
> The feather mode. Can return: FeatherMode enumerator or NothingEnum enumerator.
*** 
> Mixed **width** 
>
> The feather width. (Range depends on the unit type. For points: 0 to 1000; for picas: 0 to 83p4; for inches: 0 to 13.8889; for mm: 0 to 352.778; for cm: 0 to 35.277; for ciceros: 0 to 78c2.389.). Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
*** 
> Mixed **cornerType** 
>
> The corner effect applied to the feather. Can return: FeatherCornerType enumerator or NothingEnum enumerator.
*** 
> Mixed **noise** 
>
> The amount (as a percentage) of noise applied to the feather. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
*** 
> Mixed **chokeAmount** 
>
> The amount to choke the feather (as a percentage of the feather width). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the FindChangeFeatherSetting.
*** 
> FindChangeFeatherSetting **getElements**()
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


