# IndexOptions
Index options.

## Instance
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
> The parent of the IndexOptions (a Document or Application).
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
> String **title** 
>
> The title of the generated index.
<HorizontalLine />
> ParagraphStyle **titleStyle** 
>
> The paragraph style applied to the title of the generated index. Can also accept: String.
<HorizontalLine />
> Boolean **replaceExistingIndex** 
>
> If true, replaces the content of the existing index. Note: Replaces only index content; does not update the index location or other index properties that may have been changed.
<HorizontalLine />
> Boolean **includeBookDocuments** 
>
> If true, includes topics and page references from all the documents in a book.
<HorizontalLine />
> Boolean **includeHiddenEntries** 
>
> If true, includes topics and page references on hidden layers.
<HorizontalLine />
> IndexFormat **indexFormat** 
>
> The format for level 2 and lower index topics.
<HorizontalLine />
> Boolean **includeSectionHeadings** 
>
> If true, displays the letters of the alphabet as index section headings.
<HorizontalLine />
> Boolean **includeEmptyIndexSections** 
>
> If true, displays headings for sections with no index topics. Note: Valid only when include section headings is true.
<HorizontalLine />
> ParagraphStyle **level1Style** 
>
> The paragraph style applied to level 1 index topics.
<HorizontalLine />
> ParagraphStyle **level2Style** 
>
> The paragraph style applied to level 2 index topics.
<HorizontalLine />
> ParagraphStyle **level3Style** 
>
> The paragraph style applied to level 3 index topics.
<HorizontalLine />
> ParagraphStyle **level4Style** 
>
> The paragraph style applied to level 4 index topics.
<HorizontalLine />
> ParagraphStyle **sectionHeadingStyle** 
>
> The paragraph style applied to index section headings. Note: Valid when include section headings is true.
<HorizontalLine />
> CharacterStyle **pageNumberStyle** 
>
> The character style applied to page numbers in the index.
<HorizontalLine />
> CharacterStyle **crossReferenceStyle** 
>
> The character style applied to cross references.
<HorizontalLine />
> CharacterStyle **crossReferenceTopicStyle** 
>
> The character style applied to cross reference topics.
<HorizontalLine />
> String **followingTopicSeparator** 
>
> The character(s) inserted after each index topic.
<HorizontalLine />
> String **betweenEntriesSeparator** 
>
> The character(s) inserted between index entries when runin-style index format is used for nested topics.
<HorizontalLine />
> String **pageRangeSeparator** 
>
> The character(s) inserted between page numbers to indicate a page range.
<HorizontalLine />
> String **betweenPageNumbersSeparator** 
>
> The character(s) inserted between separate page numbers, page numbers and page ranges, and series of page ranges.
<HorizontalLine />
> String **beforeCrossReferenceSeparator** 
>
> The character(s) inserted at the start of cross references.
<HorizontalLine />
> String **entryEndSeparator** 
>
> The character(s) inserted at the end of each index entry.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the IndexOptions.
<HorizontalLine />
> IndexOptions **getElements**()
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


