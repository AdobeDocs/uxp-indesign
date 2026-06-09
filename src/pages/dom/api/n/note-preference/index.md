# NotePreference
Note preferences.

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
> The parent of the NotePreference (a Application).
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
> NoteBackgrounds **noteBackgroundColor** 
>
> The background color for notes.
<HorizontalLine />
> Mixed **noteColor** 
>
> The note color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
<HorizontalLine />
> Boolean **showNoteTips** 
>
> If true, displays note information and some note content when the mouse pointer hovers over a note anchor in layout view or a note bookend in galley or story view.
<HorizontalLine />
> Boolean **findAndReplaceNoteContents** 
>
> If true, includes inline notes content when using Find/Change commands (in Galley and Story views only).
<HorizontalLine />
> Boolean **spellCheckNotes** 
>
> If true, includes inline notes content when using Spell Check (in Galley and Story views only).
<HorizontalLine />
> NoteColorChoices **noteColorChoices** 
>
> The color to use for notes.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the NotePreference.
<HorizontalLine />
> NotePreference **getElements**()
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


