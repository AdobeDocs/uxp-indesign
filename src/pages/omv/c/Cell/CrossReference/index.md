# CrossReference
A cross reference to a different index topic. (For cross references in text, use the 'cross reference source' and 'hyperlink' objects.)

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the CrossReference.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Topic **parent** 
>
> The parent of the CrossReference (a Topic).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the CrossReference within its containing object.
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
> Topic **referencedTopic** 
>
> The topic to which this CrossReference points.
*** 
> CrossReferenceType **crossReferenceType** 
>
> The text that precedes or follows the referenced topic.
*** 
> String **customTypeString** 
>
> The text used for a custom cross reference type. Note: Valid only for custom cross reference types.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> String **name** 
>
> The name of the CrossReference; this is an alias to the CrossReference's label property.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the CrossReference.
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
> Generates a string which, if executed, will return the CrossReference.
*** 
> CrossReference **getElements**()
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


