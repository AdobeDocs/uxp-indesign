# ColorSetting
Color management settings.

## Instance
> *Read Only* 
> 
> String **engineList** 
>
> The available color engines.
*** 
> *Read Only* 
> 
> String **cmsSettingsList** 
>
> A list of valid color management system settings configurations.
*** 
> *Read Only* 
> 
> String **workingSpaceCMYKList** 
>
> A list of valid CMYK color profiles.
*** 
> *Read Only* 
> 
> String **workingSpaceRGBList** 
>
> A list of valid RGB color profiles.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the ColorSetting (a Application).
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
> ColorSettingsPolicy **cmykPolicy** 
>
> The policy for handling colors in a CMYK color model, including reading and embedding color profiles, resolving mismatches between embedded color profiles and the working space, and moving colors between documents.
*** 
> Boolean **enableColorManagement** 
>
> If true, enables color management.
*** 
> String **engine** 
>
> The color management module (CMM) for mapping color space gamuts between documents.
*** 
> Boolean **mismatchAskWhenOpening** 
>
> If true, displays a prompt when opening a file whose embedded color profile does not match the current working space. The prompt provides the option to override the default mismatch behavior.
*** 
> Boolean **mismatchAskWhenPasting** 
>
> If true, displays a prompt when importing an object (via pasting, drag-and-drop, or other similar methods) whose colors do not match the current working space. The prompt provides the option to override the default mismatch behavior.
*** 
> Boolean **missingAskWhenOpening** 
>
> If true, displays a prompt when opening a file that does not have an embedded color profile. The prompt provides the option to assign a color profile.
*** 
> ColorSettingsPolicy **rgbPolicy** 
>
> The policy for handling colors in an RGB color model, including reading and embedding color profiles, handling mismatches between embedded color profiles and the working space, and moving colors from one document to another.
*** 
> String **cmsSettings** 
>
> The current color management system settings configuration. Note: For information on possible values, see CMS settings list.
*** 
> File **cmsSettingsPath** 
>
> The file path of the CSF file to use.
*** 
> Boolean **useBPC** 
>
> If true, uses black point compensation to ensure that shadow detail is preserved by simulating the full dynamic range of the output device.
*** 
> String **workingSpaceCMYK** 
>
> The current CMYK profile.
*** 
> String **workingSpaceRGB** 
>
> The current RGB profile.
*** 
> DefaultRenderingIntent **intent** 
>
> The default rendering intent.
*** 
> Boolean **accurateLABSpots** 
>
> If true, uses LAB alternates for spot colors when available.
*** 
> Boolean **idealizedBlackToScreen** 
>
> If true, uses idealized black for CMYK-to-RGB or CMYK-to-Gray conversions to the screen.
*** 
> Boolean **idealizedBlackToExport** 
>
> If true, uses idealized black for CMYK-to-RGB or CMYK-to-Gray conversions to print or export.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the ColorSetting.
*** 
> ColorSetting **getElements**()
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


