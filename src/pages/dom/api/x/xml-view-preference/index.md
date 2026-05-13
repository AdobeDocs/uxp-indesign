# XMLViewPreference
XML view preferences

## Instance
> *Read Only* 
> 
> Boolean **showTagOptions** 
>
> If true, displays the tag options dialog when tagging any item whose parent is not tagged.
<HorizontalLine />
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
> The parent of the XMLViewPreference (a Application or Document).
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
> Boolean **showStructure** 
>
> If true, displays the structure view.
<HorizontalLine />
> Boolean **showTagMarkers** 
>
> If true, displays XML tags.
<HorizontalLine />
> Boolean **showTaggedFrames** 
>
> If true, displays XML tags in tagged frames.
<HorizontalLine />
> Boolean **showAttributes** 
>
> If true, displays attributes as well as elements in the structure view. Note: Valid only when show structure is true.
<HorizontalLine />
> Boolean **showTextSnippets** 
>
> If true, the structure view displays text snippets of element content. Note: Valid only when show structure is true.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLViewPreference.
<HorizontalLine />
> XMLViewPreference **getElements**()
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


