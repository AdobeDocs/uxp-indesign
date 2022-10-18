# ClipboardPreference
Clipboard preferences.

## Instance
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
> The parent of the ClipboardPreference (a Application).
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
> Boolean **preferStyledTextWhenPasting** 
>
> If true, includes text attributes when pasting text.
*** 
> Boolean **preferPDFWhenPasting** 
>
> If true, pastes PDF if available.
*** 
> Boolean **copyPDFToClipboard** 
>
> If true, copies PDF to the clipboard.
*** 
> Boolean **pasteRemembersLayers** 
>
> If true, objects cut or copied from different layers retain their layer assignment when pasted.
*** 
> Boolean **preservePdfClipboardAtQuit** 
>
> If true, preserves PDF data on the system clipboard when the application exits.
*** 
> Boolean **showPasteOptions** 
>
> If true, show paste options on paste.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the ClipboardPreference.
*** 
> ClipboardPreference **getElements**()
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


