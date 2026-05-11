# AdjustLayoutPreference
Adjust layout preferences.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the AdjustLayoutPreference (a Document).
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
> Boolean **enableAdjustLayout** 
>
> If true, adjust layout is enabled.
*** 
> Boolean **allowLockedObjectsToAdjust** 
>
> If true, allows locked objects or objects on locked layers to be adjusted.
*** 
> Boolean **allowFontSizeAndLeadingAdjustment** 
>
> If true, allows font sizes and leading to adjust.
*** 
> Boolean **imposeFontSizeRestriction** 
>
> If true, imposes the font size restriction during the adjustment.
*** 
> Number **minimumFontSize** 
>
> minimum font size after adjustment in points
*** 
> Number **maximumFontSize** 
>
> maximum font size after adjustment in points
*** 
> Boolean **enableAutoAdjustMargins** 
>
> If true, margins are adjusted automatically if page size is changed.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the AdjustLayoutPreference.
*** 
> AdjustLayoutPreference **getElements**()
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


