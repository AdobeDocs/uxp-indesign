# StrokeFillProxySetting
Stroke/fill proxy settings.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the StrokeFillProxySetting (a Application).
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
> StrokeFillProxyOptions **active** 
>
> Which part of the stroke/fill proxy is currently active.
<HorizontalLine />
> StrokeFillTargetOptions **target** 
>
> Which target is affected by changes to the stroke/fill proxy.
<HorizontalLine />
> Swatch **fillColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of the StrokeFillProxySetting. . Can also accept: String.
<HorizontalLine />
> Swatch **strokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the StrokeFillProxySetting. Can also accept: String.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the StrokeFillProxySetting.
<HorizontalLine />
> StrokeFillProxySetting **getElements**()
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


