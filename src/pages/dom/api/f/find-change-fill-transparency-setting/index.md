# FindChangeFillTransparencySetting
Transparency settings for the fill applied to the parent object.

## Instance
> *Read Only* 
> 
> FindChangeBlendingSetting **blendingSettings** 
>
> Blending mode settings.
*** 
> *Read Only* 
> 
> FindChangeDropShadowSetting **dropShadowSettings** 
>
> Settings related to the drop shadow effect.
*** 
> *Read Only* 
> 
> FindChangeFeatherSetting **featherSettings** 
>
> Settings related to the feather effect.
*** 
> *Read Only* 
> 
> FindChangeInnerShadowSetting **innerShadowSettings** 
>
> Settings related to the inner shadow effect.
*** 
> *Read Only* 
> 
> FindChangeOuterGlowSetting **outerGlowSettings** 
>
> Settings related to the outer glow effect.
*** 
> *Read Only* 
> 
> FindChangeInnerGlowSetting **innerGlowSettings** 
>
> Settings related to the inner glow effect.
*** 
> *Read Only* 
> 
> FindChangeBevelAndEmbossSetting **bevelAndEmbossSettings** 
>
> Settings related to the bevel and emboss effect.
*** 
> *Read Only* 
> 
> FindChangeSatinSetting **satinSettings** 
>
> Settings related to the satin effect
*** 
> *Read Only* 
> 
> FindChangeDirectionalFeatherSetting **directionalFeatherSettings** 
>
> Settings related to the directional feather effect.
*** 
> *Read Only* 
> 
> FindChangeGradientFeatherSetting **gradientFeatherSettings** 
>
> Settings related to the gradient feather effect.
*** 
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
> The parent of the FindChangeFillTransparencySetting (a FindObjectPreference or ChangeObjectPreference).
*** 
> *Read Only* 
> 
> Preferences **preferences** 
>
> A collection of preferences objects.
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
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the FindChangeFillTransparencySetting.
*** 
> FindChangeFillTransparencySetting **getElements**()
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


