# IndexOptions
Index options.

## Instance
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
> The parent of the IndexOptions (a Document or Application).
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
> String **title** 
>
> The title of the generated index.
*** 
> ParagraphStyle **titleStyle** 
>
> The paragraph style applied to the title of the generated index. Can also accept: String.
*** 
> Boolean **replaceExistingIndex** 
>
> If true, replaces the content of the existing index. Note: Replaces only index content; does not update the index location or other index properties that may have been changed.
*** 
> Boolean **includeBookDocuments** 
>
> If true, includes topics and page references from all the documents in a book.
*** 
> Boolean **includeHiddenEntries** 
>
> If true, includes topics and page references on hidden layers.
*** 
> IndexFormat **indexFormat** 
>
> The format for level 2 and lower index topics.
*** 
> Boolean **includeSectionHeadings** 
>
> If true, displays the letters of the alphabet as index section headings.
*** 
> Boolean **includeEmptyIndexSections** 
>
> If true, displays headings for sections with no index topics. Note: Valid only when include section headings is true.
*** 
> ParagraphStyle **level1Style** 
>
> The paragraph style applied to level 1 index topics.
*** 
> ParagraphStyle **level2Style** 
>
> The paragraph style applied to level 2 index topics.
*** 
> ParagraphStyle **level3Style** 
>
> The paragraph style applied to level 3 index topics.
*** 
> ParagraphStyle **level4Style** 
>
> The paragraph style applied to level 4 index topics.
*** 
> ParagraphStyle **sectionHeadingStyle** 
>
> The paragraph style applied to index section headings. Note: Valid when include section headings is true.
*** 
> CharacterStyle **pageNumberStyle** 
>
> The character style applied to page numbers in the index.
*** 
> CharacterStyle **crossReferenceStyle** 
>
> The character style applied to cross references.
*** 
> CharacterStyle **crossReferenceTopicStyle** 
>
> The character style applied to cross reference topics.
*** 
> String **followingTopicSeparator** 
>
> The character(s) inserted after each index topic.
*** 
> String **betweenEntriesSeparator** 
>
> The character(s) inserted between index entries when runin-style index format is used for nested topics.
*** 
> String **pageRangeSeparator** 
>
> The character(s) inserted between page numbers to indicate a page range.
*** 
> String **betweenPageNumbersSeparator** 
>
> The character(s) inserted between separate page numbers, page numbers and page ranges, and series of page ranges.
*** 
> String **beforeCrossReferenceSeparator** 
>
> The character(s) inserted at the start of cross references.
*** 
> String **entryEndSeparator** 
>
> The character(s) inserted at the end of each index entry.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the IndexOptions.
*** 
> IndexOptions **getElements**()
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


