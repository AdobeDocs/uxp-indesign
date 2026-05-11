# TrackChangesPreference
Track changes preferences.

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
> The parent of the TrackChangesPreference (a Application).
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
> Mixed **changeBarColor** 
>
> The change bar color, specified as an InCopy UI color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
*** 
> Boolean **showAddedText** 
>
> If true, displays added text.
*** 
> Boolean **showChangeBars** 
>
> If true, displays change bars,
*** 
> Boolean **showDeletedText** 
>
> If true, displays deleted text.
*** 
> Boolean **showMovedText** 
>
> If true, displays moved text.
*** 
> Boolean **spellCheckDeletedText** 
>
> If true, includes deleted text when using the Spell Check command.
*** 
> Mixed **textColorForAddedText** 
>
> The color for added text, specified as an InCopy UI color. Note: Valid only when added text color choice is change uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
*** 
> Mixed **backgroundColorForAddedText** 
>
> The background color for added text, specified as an InCopy UI color. Note: Valid only when added background color choice is change background uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
*** 
> Mixed **textColorForDeletedText** 
>
> The color for deleted text, specified as an InCopy UI color. Note: Valid only when deleted text color choice is change uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
*** 
> Mixed **backgroundColorForDeletedText** 
>
> The background color for deleted text, specified as an InCopy UI color. Note: Valid only when deleted background color choice is change background uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
*** 
> Mixed **textColorForMovedText** 
>
> The color for moved text, specified as an InCopy UI color. Note: Valid only when moved text color choice is change uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
*** 
> Mixed **backgroundColorForMovedText** 
>
> The background color for moved text, specified as an InCopy UI color. Note: Valid only when moved background color choice is change background uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
*** 
> ChangeMarkings **markingForAddedText** 
>
> The marking that identifies added text.
*** 
> ChangeMarkings **markingForDeletedText** 
>
> The marking that identifies deleted text.
*** 
> ChangeMarkings **markingForMovedText** 
>
> The marking that identifies moved text.
*** 
> ChangebarLocations **locationForChangeBar** 
>
> The change bar location.
*** 
> ChangeTextColorChoices **addedTextColorChoice** 
>
> The color option for added text.
*** 
> ChangeBackgroundColorChoices **addedBackgroundColorChoice** 
>
> The background color option for added text.
*** 
> ChangeTextColorChoices **deletedTextColorChoice** 
>
> The color option for deleted text.
*** 
> ChangeBackgroundColorChoices **deletedBackgroundColorChoice** 
>
> The background color option for deleted text.
*** 
> ChangeTextColorChoices **movedTextColorChoice** 
>
> The color option for moved text.
*** 
> ChangeBackgroundColorChoices **movedBackgroundColorChoice** 
>
> The background color option for moved text.
*** 
> Boolean **preventDuplicateColor** 
>
> If true, prevent duplicate user color for tracked changes background color.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the TrackChangesPreference.
*** 
> TrackChangesPreference **getElements**()
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


