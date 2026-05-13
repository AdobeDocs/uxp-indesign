# AdjustLayoutPreference
Adjust layout preferences.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the AdjustLayoutPreference (a Document).
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
> Boolean **enableAdjustLayout** 
>
> If true, adjust layout is enabled.
<HorizontalLine />
> Boolean **allowLockedObjectsToAdjust** 
>
> If true, allows locked objects or objects on locked layers to be adjusted.
<HorizontalLine />
> Boolean **allowFontSizeAndLeadingAdjustment** 
>
> If true, allows font sizes and leading to adjust.
<HorizontalLine />
> Boolean **imposeFontSizeRestriction** 
>
> If true, imposes the font size restriction during the adjustment.
<HorizontalLine />
> Number **minimumFontSize** 
>
> minimum font size after adjustment in points
<HorizontalLine />
> Number **maximumFontSize** 
>
> maximum font size after adjustment in points
<HorizontalLine />
> Boolean **enableAutoAdjustMargins** 
>
> If true, margins are adjusted automatically if page size is changed.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the AdjustLayoutPreference.
<HorizontalLine />
> AdjustLayoutPreference **getElements**()
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


