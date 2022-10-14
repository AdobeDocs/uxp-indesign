# FillTransparencySetting
Transparency settings for the fill applied to the parent object.

## Instance
> *Read Only* 
> 
> BlendingSetting **blendingSettings** 
>
> Blending mode settings.
*** 
> *Read Only* 
> 
> DropShadowSetting **dropShadowSettings** 
>
> Settings related to the drop shadow effect.
*** 
> *Read Only* 
> 
> FeatherSetting **featherSettings** 
>
> Settings related to the feather effect.
*** 
> *Read Only* 
> 
> InnerShadowSetting **innerShadowSettings** 
>
> Settings related to the inner shadow effect.
*** 
> *Read Only* 
> 
> OuterGlowSetting **outerGlowSettings** 
>
> Settings related to the outer glow effect.
*** 
> *Read Only* 
> 
> InnerGlowSetting **innerGlowSettings** 
>
> Settings related to the inner glow effect.
*** 
> *Read Only* 
> 
> BevelAndEmbossSetting **bevelAndEmbossSettings** 
>
> Settings related to the bevel and emboss effect.
*** 
> *Read Only* 
> 
> SatinSetting **satinSettings** 
>
> Settings related to the satin effect
*** 
> *Read Only* 
> 
> DirectionalFeatherSetting **directionalFeatherSettings** 
>
> Settings related to the directional feather effect.
*** 
> *Read Only* 
> 
> GradientFeatherSetting **gradientFeatherSettings** 
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
> The parent of the FillTransparencySetting (a PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, PageItemDefault or ObjectStyle).
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
> Generates a string which, if executed, will return the FillTransparencySetting.
*** 
> FillTransparencySetting **getElements**()
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


