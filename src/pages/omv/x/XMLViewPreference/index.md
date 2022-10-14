# XMLViewPreference
XML view preferences

## Instance
> *Read Only* 
> 
> Boolean **showTagOptions** 
>
> If true, displays the tag options dialog when tagging any item whose parent is not tagged.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the XMLViewPreference (a Application or Document).
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
> Boolean **showStructure** 
>
> If true, displays the structure view.
*** 
> Boolean **showTagMarkers** 
>
> If true, displays XML tags.
*** 
> Boolean **showTaggedFrames** 
>
> If true, displays XML tags in tagged frames.
*** 
> Boolean **showAttributes** 
>
> If true, displays attributes as well as elements in the structure view. Note: Valid only when show structure is true.
*** 
> Boolean **showTextSnippets** 
>
> If true, the structure view displays text snippets of element content. Note: Valid only when show structure is true.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLViewPreference.
*** 
> XMLViewPreference **getElements**()
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


