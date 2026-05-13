# Section
A section.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of pages in the section.
<HorizontalLine />
> *Read Only* 
> 
> Number **alternateLayoutLength** 
>
> The number of pages in the alternate layout section.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Section.
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
> The parent of the Section (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Section within its containing object.
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
> String **alternateLayout** 
>
> The alternate layout name for a set of pages.
<HorizontalLine />
> String **name** 
>
> The name of the Section.
<HorizontalLine />
> Mixed **pageNumberStyle** 
>
> The page number style. Can return: PageNumberStyle enumerator or String.
<HorizontalLine />
> Boolean **continueNumbering** 
>
> If true, continues page numbers sequentially from the previous section.
<HorizontalLine />
> Boolean **includeSectionPrefix** 
>
> If true, places the specified prefix before page numbers on all pages in the section.
<HorizontalLine />
> Number **pageNumberStart** 
>
> The page number assigned to the first page in the section. Note: Valid only when continue numbering is false.
<HorizontalLine />
> String **marker** 
>
> The section marker.
<HorizontalLine />
> Page **pageStart** 
>
> The start page for the section.
<HorizontalLine />
> String **sectionPrefix** 
>
> The prefix to place before page numbers on pages in the section. May include up to 8 characters. Note: Valid only when include section prefix is true.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the Section.
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
> Generates a string which, if executed, will return the Section.
<HorizontalLine />
> Section **getElements**()
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


