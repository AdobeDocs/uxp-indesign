# WordRTFImportPreference
Word RTF import preferences.

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
> The parent of the WordRTFImportPreference (a Application).
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
> Boolean **importAsStaticEndnotes** 
>
> If true, imports endnotes as static text. Else live endnotes
<HorizontalLine />
> Boolean **preserveLocalOverrides** 
>
> If true, maintains character formatting in text whose formatting has been removed. Note: Valid when remove formatting is true.
<HorizontalLine />
> Boolean **importUnusedStyles** 
>
> If true, imports unused styles.
<HorizontalLine />
> ResolveStyleClash **resolveCharacterStyleClash** 
>
> The option for handling style name conflicts.
<HorizontalLine />
> ResolveStyleClash **resolveParagraphStyleClash** 
>
> The option for resolving conflicts that arise when paragraph styles have matching names.
<HorizontalLine />
> Boolean **preserveGraphics** 
>
> If true, preserves inline graphics.
<HorizontalLine />
> Boolean **preserveTrackChanges** 
>
> If true, preserves comments and edits in the imported file.
<HorizontalLine />
> Boolean **importFootnotes** 
>
> If true, imports footnotes.
<HorizontalLine />
> Boolean **importEndnotes** 
>
> If true, imports endnotes.
<HorizontalLine />
> Boolean **useTypographersQuotes** 
>
> If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes.
<HorizontalLine />
> ConvertPageBreaks **convertPageBreaks** 
>
> The option for handling manual page breaks.
<HorizontalLine />
> Boolean **importIndex** 
>
> If true, imports the index.
<HorizontalLine />
> Boolean **importTOC** 
>
> If true, imports the table of contents.
<HorizontalLine />
> Boolean **removeFormatting** 
>
> If true, removes text and table formatting.
<HorizontalLine />
> ConvertTablesOptions **convertTablesTo** 
>
> The policy for converting tables whose formatting has been removed. Note: Valid when remove formatting is true.
<HorizontalLine />
> Boolean **convertBulletsAndNumbersToText** 
>
> If true, bullets and numbers will be converted to embedded characters during import. If false, bullets and numbers will be rendered by InDesign.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the WordRTFImportPreference.
<HorizontalLine />
> WordRTFImportPreference **getElements**()
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


