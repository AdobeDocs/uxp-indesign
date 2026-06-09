# FindChangeTransliterateOption
Find/change transliterate options.

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
> The parent of the FindChangeTransliterateOption (a Application).
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
> Boolean **searchBackwards** 
>
> If true, search in the backward direction.
<HorizontalLine />
> Boolean **kanaSensitive** 
>
> If true, finds only text that matches the specified kana type.
<HorizontalLine />
> Boolean **widthSensitive** 
>
> If true, finds only text that matches the specified character width.
<HorizontalLine />
> Boolean **includeLockedStoriesForFind** 
>
> If true, includes locked stories in the find query.
<HorizontalLine />
> Boolean **includeLockedLayersForFind** 
>
> If true, includes locked layers in the find query.
<HorizontalLine />
> Boolean **includeHiddenLayers** 
>
> If true, includes hidden layers in the find/change query.
<HorizontalLine />
> Boolean **includeMasterPages** 
>
> If true, includes master pages in the find/change query.
<HorizontalLine />
> Boolean **includeFootnotes** 
>
> If true, includes footnotes in the find/change query.
<HorizontalLine />
> Boolean **wholeWord** 
>
> If true, finds only the complete find text string. If false, also finds strings that contain the find text string.
<HorizontalLine />
> Boolean **caseSensitive** 
>
> If true, finds strings whose use of case matches the find text string. If false, finds strings that match the find text string regardless of case.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the FindChangeTransliterateOption.
<HorizontalLine />
> FindChangeTransliterateOption **getElements**()
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


