# AssignedStory
An assigned story.

## Instance
> *Read Only* 
> 
> Mixed **storyReference** 
>
> A reference to the assigned story. Can return: Story, PageItem, Oval, Rectangle or Polygon.
*** 
> *Read Only* 
> 
> String **filePath** 
>
> The file path (colon delimited on the Mac OS). Can also accept: File.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the AssignedStory.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Assignment **parent** 
>
> The parent of the AssignedStory (a Assignment).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the AssignedStory within its containing object.
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
> String **name** 
>
> The name of the AssignedStory.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
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

*** 
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

*** 
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the AssignedStory.
*** 
> AssignedStory **getElements**()
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


