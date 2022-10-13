# FindChangeTextOption
Find/change text options.

## Instance
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
> The parent of the FindChangeTextOption (a Application).
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
> Boolean **searchBackwards** 
>
> If true, search in the backward direction.
*** 
> Boolean **includeLockedStoriesForFind** 
>
> If true, includes locked stories in the find query.
*** 
> Boolean **includeLockedLayersForFind** 
>
> If true, includes locked layers in the find query.
*** 
> Boolean **includeHiddenLayers** 
>
> If true, includes hidden layers in the find/change query.
*** 
> Boolean **includeMasterPages** 
>
> If true, includes master pages in the find/change query.
*** 
> Boolean **includeFootnotes** 
>
> If true, includes footnotes in the find/change query.
*** 
> Boolean **wholeWord** 
>
> If true, finds only the complete find text string. If false, also finds strings that contain the find text string.
*** 
> Boolean **caseSensitive** 
>
> If true, finds strings whose use of case matches the find text string. If false, finds strings that match the find text string regardless of case.
*** 
> Boolean **kanaSensitive** 
>
> If true, finds only text that matches the specified kana type.
*** 
> Boolean **widthSensitive** 
>
> If true, finds only text that matches the specified character width.
*** 
> Boolean **ignoreKashidas** 
>
> If true, ignore kashidas in the find/change query.
*** 
> Boolean **ignoreDiacritics** 
>
> If true, ignore diacs in the find/change query.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the FindChangeTextOption.
*** 
> FindChangeTextOption **getElements**()
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


