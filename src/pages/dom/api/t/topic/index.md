# Topic
An index topic.

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
> The parent of the Topic (a IndexSection, Topic or Index).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Topic within its containing object.
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
> Topics **topics** 
>
> A collection of index topics.
<HorizontalLine />
> *Read Only* 
> 
> CrossReferences **crossReferences** 
>
> A collection of index cross references. (For cross references in text, use the 'cross reference source' and 'hyperlink' objects.)
<HorizontalLine />
> *Read Only* 
> 
> PageReferences **pageReferences** 
>
> A collection of index page references.
<HorizontalLine />
> String **sortOrder** 
>
> The string by which the topic is sorted instead of the topic name is not used. Note: The actual topic text, rather than the sort order text, appears in the index.
<HorizontalLine />
> String **name** 
>
> The name of the Topic.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the Topic.
<HorizontalLine />
> **capitalize**( IndexCapitalizationOptions **capitalizationOption** )
> 
> Makes the initial letter for the specified index topic or group of index topics upper case.
#### Parameters
| Type | Name | Description |
|---|---|---|
| IndexCapitalizationOptions | capitalizationOption | The entry or entries to capitalize. (Optional) |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Topic.
<HorizontalLine />
> Topic **getElements**()
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


