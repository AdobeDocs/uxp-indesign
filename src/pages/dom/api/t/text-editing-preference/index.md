# TextEditingPreference
Text editing preferences.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the TextEditingPreference (a Application).
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
> Boolean **dragAndDropTextInLayout** 
>
> If true, allows text to be dragged and dropped on a layout page.
<HorizontalLine />
> Boolean **allowDragAndDropTextInStory** 
>
> If true, allows text to be dragged and dropped in the story editor or galley view.
<HorizontalLine />
> Boolean **tripleClickSelectsLine** 
>
> If true, a triple click selects a line of text. If false, a triple click selects a paragraph.
<HorizontalLine />
> Boolean **smartCutAndPaste** 
>
> If true, automatically adjusts spacing among words and between words and punctuation marks when cutting and pasting text.
<HorizontalLine />
> Boolean **singleClickConvertsFramesToTextFrames** 
>
> If true, a single click (with the Type tool) converts non-text frames to text frames.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextEditingPreference.
<HorizontalLine />
> TextEditingPreference **getElements**()
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


