# WordRTFImportPreference
Word RTF import preferences.

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
> The parent of the WordRTFImportPreference (a Application).
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
> Boolean **importAsStaticEndnotes** 
>
> If true, imports endnotes as static text. Else live endnotes
*** 
> Boolean **preserveLocalOverrides** 
>
> If true, maintains character formatting in text whose formatting has been removed. Note: Valid when remove formatting is true.
*** 
> Boolean **importUnusedStyles** 
>
> If true, imports unused styles.
*** 
> ResolveStyleClash **resolveCharacterStyleClash** 
>
> The option for handling style name conflicts.
*** 
> ResolveStyleClash **resolveParagraphStyleClash** 
>
> The option for resolving conflicts that arise when paragraph styles have matching names.
*** 
> Boolean **preserveGraphics** 
>
> If true, preserves inline graphics.
*** 
> Boolean **preserveTrackChanges** 
>
> If true, preserves comments and edits in the imported file.
*** 
> Boolean **importFootnotes** 
>
> If true, imports footnotes.
*** 
> Boolean **importEndnotes** 
>
> If true, imports endnotes.
*** 
> Boolean **useTypographersQuotes** 
>
> If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes.
*** 
> ConvertPageBreaks **convertPageBreaks** 
>
> The option for handling manual page breaks.
*** 
> Boolean **importIndex** 
>
> If true, imports the index.
*** 
> Boolean **importTOC** 
>
> If true, imports the table of contents.
*** 
> Boolean **removeFormatting** 
>
> If true, removes text and table formatting.
*** 
> ConvertTablesOptions **convertTablesTo** 
>
> The policy for converting tables whose formatting has been removed. Note: Valid when remove formatting is true.
*** 
> Boolean **convertBulletsAndNumbersToText** 
>
> If true, bullets and numbers will be converted to embedded characters during import. If false, bullets and numbers will be rendered by InDesign.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the WordRTFImportPreference.
*** 
> WordRTFImportPreference **getElements**()
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


