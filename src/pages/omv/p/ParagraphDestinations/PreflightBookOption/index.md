# PreflightBookOption
Preflight book options.

## Instance
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
> The parent of the PreflightBookOption (a Application or Book).
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
> Mixed **preflightScope** 
>
> The pages or documents to preflight, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). Can return: PreflightScopeOptions enumerator or String.
*** 
> PreflightLayerOptions **preflightWhichLayers** 
>
> Which layers to preflight.
*** 
> Boolean **preflightIncludeObjectsOnPasteboard** 
>
> If true, include objects on pasteboard when preflighting.
*** 
> Boolean **preflightIncludeNonprintingObjects** 
>
> If true, include objects that do not print when preflighting.
*** 
> PreflightProfileOptions **preflightProfilePolicy** 
>
> The policy for preflighting applied when opening a document or book, whether to use embedded profile or the another profile when the preflight is turned on.
*** 
> Mixed **preflightWorkingProfile** 
>
> The working preflight profile. Can return: PreflightProfile or String.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the PreflightBookOption.
*** 
> PreflightBookOption **getElements**()
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


