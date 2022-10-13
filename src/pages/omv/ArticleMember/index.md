# ArticleMember
An article member.

## Instance
> *Read Only* 
> 
> PageItem **itemRef** 
>
> The underlying page item
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the ArticleMember.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Article **parent** 
>
> The parent of the ArticleMember (a Article).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the ArticleMember within its containing object.
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
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the ArticleMember.
*** 
> ArticleMember **move**( LocationOptions **to**, ArticleMember **reference** )
> 
> Moves the ArticleMember to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location relative to the reference object or within the containing object. |
| ArticleMember | reference | The reference object. Note: Required when the to value specifies before or after. (Optional) |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ArticleMember.
*** 
> ArticleMember **getElements**()
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


