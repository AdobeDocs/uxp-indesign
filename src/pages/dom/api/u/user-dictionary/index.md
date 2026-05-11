# UserDictionary
A user dictionary.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the UserDictionary.
*** 
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
> The parent of the UserDictionary (a Application).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the UserDictionary within its containing object.
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
> String **addedWords** 
>
> A list of words added to the user dictionary.
*** 
> String **removedWords** 
>
> A list of words removed from the user dictionary.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **addWord**( String **addedWords**, Boolean **removedList** )
> 
> Adds the specified words to the specified list in the dictionary.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | addedWords | The words to add. |
| Boolean | removedList | If true, adds the words to the removed words list. If false or unspecified, adds the words to the added words list. (Optional) |

*** 
> **removeWord**( String **removedWords**, Boolean **removedList** )
> 
> Removes the specified words from the specified list in the dictionary.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | removedWords | The words to remove. |
| Boolean | removedList | If true, removes the words from the removed words list. If false or unspecified, removes the words from the added words list. (Optional) |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the UserDictionary.
*** 
> UserDictionary **getElements**()
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


