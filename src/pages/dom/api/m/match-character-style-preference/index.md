# MatchCharacterStylePreference
The preferences for a running header/footer (match character style) variable.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> TextVariable **parent** 
>
> The parent of the MatchCharacterStylePreference (a TextVariable).
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
> String **textBefore** 
>
> The text that precedes the value of the variable. (Limit: 128 characters)
*** 
> String **textAfter** 
>
> The text that follows the value of the variable. (Limit: 128 characters)
*** 
> CharacterStyle **appliedCharacterStyle** 
>
> The character style applied to the text. Can also accept: String.
*** 
> SearchStrategies **searchStrategy** 
>
> The starting point and direction in which the search will be conducted.
*** 
> ChangeCaseOptions **changeCase** 
>
> The case of the matched text.
*** 
> Boolean **deleteEndPunctuation** 
>
> If true, deletes end punctuation from the matched text.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the MatchCharacterStylePreference.
*** 
> MatchCharacterStylePreference **getElements**()
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


