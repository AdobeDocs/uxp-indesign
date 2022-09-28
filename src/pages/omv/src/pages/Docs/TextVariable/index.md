# TextVariable
A text variable definition in a document.

## Instance
> *Read Only* 
> 
> TextVariableInstance **associatedInstances** 
>
> Variable instances associated with the text variable.
*** 
> *Read Only* 
> 
> Mixed **variableOptions** 
>
> The preferences associated with the text variable. Can return: PageNumberVariablePreference, ChapterNumberVariablePreference, DateVariablePreference, FileNameVariablePreference, MatchCharacterStylePreference, MatchParagraphStylePreference, CustomTextVariablePreference or CaptionMetadataVariablePreference.
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
> The parent of the TextVariable (a Application or Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the TextVariable within its containing object.
*** 
> *Read Only* 
> 
> Preferences **preferences** 
>
> A collection of preferences objects.
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
> String **name** 
>
> The name of the TextVariable.
*** 
> VariableTypes **variableType** 
>
> The variable type.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the TextVariable.
*** 
> Text **convertToText**()
> 
> Convert all of this variable's instances to text.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextVariable.
*** 
> TextVariable **getElements**()
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


