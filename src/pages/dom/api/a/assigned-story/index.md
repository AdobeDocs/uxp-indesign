# AssignedStory
An assigned story.

## Instance
> *Read Only* 
> 
> Mixed **storyReference** 
>
> A reference to the assigned story. Can return: Story, PageItem, Oval, Rectangle or Polygon.
<HorizontalLine />
> *Read Only* 
> 
> String **filePath** 
>
> The file path (colon delimited on the Mac OS). Can also accept: File.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the AssignedStory.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Assignment **parent** 
>
> The parent of the AssignedStory (a Assignment).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the AssignedStory within its containing object.
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
> String **name** 
>
> The name of the AssignedStory.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> AssignedStory **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the assigned story to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location of the assigned story relative to the reference object or within the containing object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. Can accept: Assignment or AssignedStory. (Optional) |

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
> Generates a string which, if executed, will return the AssignedStory.
<HorizontalLine />
> AssignedStory **getElements**()
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


