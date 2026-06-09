# Index
An index.

## Instance
> *Read Only* 
> 
> Topic **allTopics** 
>
> The topics in the specified index section.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Index.
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
> The parent of the Index (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Index within its containing object.
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
> *Read Only* 
> 
> IndexSections **indexSections** 
>
> A collection of index sections.
<HorizontalLine />
> *Read Only* 
> 
> Topics **topics** 
>
> A collection of index topics.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> String **name** 
>
> The name of the Index; this is an alias to the Index's label property.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **importTopics**( File **from** )
> 
> Imports a list of index topics.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | from | The file from which to import the topics. |

<HorizontalLine />
> **removeUnusedTopics**()
> 
> Removes all index topics that do not have any index entries.
<HorizontalLine />
> **capitalize**( IndexCapitalizationOptions **capitalizationOption** )
> 
> Makes the initial letter for the specified index topic or group of index topics upper case.
#### Parameters
| Type | Name | Description |
|---|---|---|
| IndexCapitalizationOptions | capitalizationOption | The entry or entries to capitalize. (Optional) |

<HorizontalLine />
> **update**()
> 
> Updates the index preview pane. Note: Does not update the index.
<HorizontalLine />
> Story **generate**( Mixed **on**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **autoflowing**, Boolean **includeOverset** )
> 
> Generates a new index story.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | on | The spread or page on which to place the story. Can accept: Page, Spread or MasterSpread. (Optional) |
| Measurement Unit (Number or String)=any | placePoint | The coordinates of the upper left corner of the story bounding box, in the format [x, y]. (Optional) |
| Layer | destinationLayer | The layer on which to place the story. (Optional) |
| Boolean | autoflowing | If true, allows the story to flow onto subsequent pages if the story does not fit on the specified page. If no subsequent pages exist in the document, creates the necessary pages. (Optional) |
| Boolean | includeOverset | If true, includes topics in overset text in the story.  (Optional) |

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
> Generates a string which, if executed, will return the Index.
<HorizontalLine />
> Index **getElements**()
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


