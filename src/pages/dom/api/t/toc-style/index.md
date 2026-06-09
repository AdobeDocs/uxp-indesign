# TOCStyle
A TOC style definition.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the TOCStyle.
<HorizontalLine />
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
> The parent of the TOCStyle (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the TOCStyle within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> TOCStyleEntries **tocStyleEntries** 
>
> A collection TOC style entries.
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
> ParagraphStyle **titleStyle** 
>
> The paragraph style applied to the TOC title.
<HorizontalLine />
> String **title** 
>
> The TOC title.
<HorizontalLine />
> String **name** 
>
> The name of the TOCStyle.
<HorizontalLine />
> Boolean **runIn** 
>
> If true, the lowest-level TOC entries are placed on the same line as the previous entry.
<HorizontalLine />
> Boolean **includeHidden** 
>
> If true, the TOC includes entries from text on hidden layers.
<HorizontalLine />
> Boolean **includeBookDocuments** 
>
> If true, includes the entire book in the TOC. If false, includes only the TOC entries in the current document. Note: Valid when the current document is part of a book.
<HorizontalLine />
> Boolean **createBookmarks** 
>
> If true, creates bookmarks for TOC entries.
<HorizontalLine />
> HorizontalOrVertical **setStoryDirection** 
>
> The table of contents story direction.
<HorizontalLine />
> NumberedParagraphsOptions **numberedParagraphs** 
>
> The format for importing numbered paragraphs into the TOC.
<HorizontalLine />
> Boolean **removeForcedLineBreak** 
>
> If true, remove forced line breaks.
<HorizontalLine />
> Boolean **makeAnchor** 
>
> If true, make text anchor in source paragraph.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> TOCStyle **duplicate**()
> 
> Duplicates the TOCStyle.
<HorizontalLine />
> **remove**()
> 
> Deletes the TOCStyle.
<HorizontalLine />
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

<HorizontalLine />
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the TOCStyle.
<HorizontalLine />
> TOCStyle **getElements**()
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


