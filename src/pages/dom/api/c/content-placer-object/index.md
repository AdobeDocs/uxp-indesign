# ContentPlacerObject
Represents the content placer object.

## Instance
> *Read Only* 
> 
> Boolean **loaded** 
>
> Whether the Content Placer is currently loaded with content for placing.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the ContentPlacerObject (a Application).
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
> **load**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
> 
> Load the Content Placer with one or more objects.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | pageItems | One or more page items to place or load |
| Boolean | linkPageItems | Whether to link pageItems in content placer (if true it will override link stories value) (Optional) |
| Boolean | linkStories | Whether to link stories in content placer (only applicable for single story, pageItem links will also be created in case of more than one item) (Optional) |
| Boolean | mapStyles | Whether to map styles in content placer (Optional) |
| Boolean | showingOptions | Whether to display the link options dialog (Optional) |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ContentPlacerObject.
*** 
> ContentPlacerObject **getElements**()
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


