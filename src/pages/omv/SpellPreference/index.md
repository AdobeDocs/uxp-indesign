# SpellPreference
Spell-check preferences.

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
> The parent of the SpellPreference (a Application).
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
> Boolean **dynamicSpellCheck** 
>
> If true, underlines misspelled and repeated words, uncapitalized proper nouns, and uncapitalized first words in sentences. Note: Valid only when the corresponding properties are true. For information, see check misspelled words, check repeated words, check capitalized words, and check capitalized sentences.
*** 
> Mixed **misspelledWordColor** 
>
> The underline color for misspelled words, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid only when both dynamic spell check and check misspelled words are true. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> Mixed **repeatedWordColor** 
>
> The underline color for repeated words, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid only when both dynamic spell check and check repeated words are true. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> Mixed **uncapitalizedWordColor** 
>
> The underline color for uncapitalized proper nouns, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid only when both dynamic spell check and check capitalized words are true. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> Mixed **uncapitalizedSentenceColor** 
>
> The underline color for the first word in sentences that do not begin with a capital letter, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid when both dynamic spell check and check capitalized sentences are true. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> Boolean **checkMisspelledWords** 
>
> If true, checks for misspelled words.
*** 
> Boolean **checkRepeatedWords** 
>
> If true, checks for repeated words.
*** 
> Boolean **checkCapitalizedWords** 
>
> If true, checks for uncapitalized proper nouns.
*** 
> Boolean **checkCapitalizedSentences** 
>
> If true, checks for uncapitalized first words in sentences.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the SpellPreference.
*** 
> SpellPreference **getElements**()
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


