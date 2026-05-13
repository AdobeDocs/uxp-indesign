# ContentTransparencySetting
Transparency settings for the content of the parent object.

## Instance
> *Read Only* 
> 
> BlendingSetting **blendingSettings** 
>
> Blending mode settings.
<HorizontalLine />
> *Read Only* 
> 
> DropShadowSetting **dropShadowSettings** 
>
> Settings related to the drop shadow effect.
<HorizontalLine />
> *Read Only* 
> 
> FeatherSetting **featherSettings** 
>
> Settings related to the feather effect.
<HorizontalLine />
> *Read Only* 
> 
> InnerShadowSetting **innerShadowSettings** 
>
> Settings related to the inner shadow effect.
<HorizontalLine />
> *Read Only* 
> 
> OuterGlowSetting **outerGlowSettings** 
>
> Settings related to the outer glow effect.
<HorizontalLine />
> *Read Only* 
> 
> InnerGlowSetting **innerGlowSettings** 
>
> Settings related to the inner glow effect.
<HorizontalLine />
> *Read Only* 
> 
> BevelAndEmbossSetting **bevelAndEmbossSettings** 
>
> Settings related to the bevel and emboss effect.
<HorizontalLine />
> *Read Only* 
> 
> SatinSetting **satinSettings** 
>
> Settings related to the satin effect
<HorizontalLine />
> *Read Only* 
> 
> DirectionalFeatherSetting **directionalFeatherSettings** 
>
> Settings related to the directional feather effect.
<HorizontalLine />
> *Read Only* 
> 
> GradientFeatherSetting **gradientFeatherSettings** 
>
> Settings related to the gradient feather effect.
<HorizontalLine />
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
> The parent of the ContentTransparencySetting (a PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, PageItemDefault or ObjectStyle).
<HorizontalLine />
> *Read Only* 
> 
> Preferences **preferences** 
>
> A collection of preferences objects.
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
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the ContentTransparencySetting.
<HorizontalLine />
> ContentTransparencySetting **getElements**()
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


