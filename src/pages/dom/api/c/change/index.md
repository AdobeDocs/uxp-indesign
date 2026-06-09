# Change
A tracked change made to a story.

## Instance
> *Read Only* 
> 
> Date **date** 
>
> The date on which the tracked change was made. Note: Valid only when track changes is true.
<HorizontalLine />
> *Read Only* 
> 
> ChangeTypes **changeType** 
>
> The type of tracked change. Note: Valid only when track changes is true.
<HorizontalLine />
> *Read Only* 
> 
> String **userName** 
>
> The user who made the change. Note: Valid only when track changes is true.
<HorizontalLine />
> *Read Only* 
> 
> InsertionPoint **storyOffset** 
>
> The location of the first insertion point in the object (relative to the beginning of the story).
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
> The parent of the Change (a Story, XmlStory or Cell).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Change within its containing object.
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
> Texts **texts** 
>
> A collection of text objects.
<HorizontalLine />
> *Read Only* 
> 
> Characters **characters** 
>
> A collection of characters.
<HorizontalLine />
> *Read Only* 
> 
> Words **words** 
>
> A collection of words.
<HorizontalLine />
> *Read Only* 
> 
> Lines **lines** 
>
> A collection of lines.
<HorizontalLine />
> *Read Only* 
> 
> TextColumns **textColumns** 
>
> A collection of text columns.
<HorizontalLine />
> *Read Only* 
> 
> Paragraphs **paragraphs** 
>
> A collection of paragraphs.
<HorizontalLine />
> *Read Only* 
> 
> InsertionPoints **insertionPoints** 
>
> A collection of insertion points.
<HorizontalLine />
> *Read Only* 
> 
> TextStyleRanges **textStyleRanges** 
>
> A collection of text style ranges.
<HorizontalLine />
> *Read Only* 
> 
> TextVariableInstances **textVariableInstances** 
>
> A collection of text variable instances.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **accept**()
> 
> Accepts the tracked change. Note: Valid only when track changes is true.
<HorizontalLine />
> **reject**()
> 
> Rejects the tracked change. Note: Valid only when track changes is true.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Change.
<HorizontalLine />
> Change **getElements**()
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


