# ClipboardPreference
Clipboard preferences.

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
> The parent of the ClipboardPreference (a Application).
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
> Boolean **preferStyledTextWhenPasting** 
>
> If true, includes text attributes when pasting text.
<HorizontalLine />
> Boolean **preferPDFWhenPasting** 
>
> If true, pastes PDF if available.
<HorizontalLine />
> Boolean **copyPDFToClipboard** 
>
> If true, copies PDF to the clipboard.
<HorizontalLine />
> Boolean **pasteRemembersLayers** 
>
> If true, objects cut or copied from different layers retain their layer assignment when pasted.
<HorizontalLine />
> Boolean **preservePdfClipboardAtQuit** 
>
> If true, preserves PDF data on the system clipboard when the application exits.
<HorizontalLine />
> Boolean **showPasteOptions** 
>
> If true, show paste options on paste.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the ClipboardPreference.
<HorizontalLine />
> ClipboardPreference **getElements**()
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


