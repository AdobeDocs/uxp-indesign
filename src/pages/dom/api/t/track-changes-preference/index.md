# TrackChangesPreference
Track changes preferences.

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
> The parent of the TrackChangesPreference (a Application).
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
> Mixed **changeBarColor** 
>
> The change bar color, specified as an InCopy UI color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
<HorizontalLine />
> Boolean **showAddedText** 
>
> If true, displays added text.
<HorizontalLine />
> Boolean **showChangeBars** 
>
> If true, displays change bars,
<HorizontalLine />
> Boolean **showDeletedText** 
>
> If true, displays deleted text.
<HorizontalLine />
> Boolean **showMovedText** 
>
> If true, displays moved text.
<HorizontalLine />
> Boolean **spellCheckDeletedText** 
>
> If true, includes deleted text when using the Spell Check command.
<HorizontalLine />
> Mixed **textColorForAddedText** 
>
> The color for added text, specified as an InCopy UI color. Note: Valid only when added text color choice is change uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
<HorizontalLine />
> Mixed **backgroundColorForAddedText** 
>
> The background color for added text, specified as an InCopy UI color. Note: Valid only when added background color choice is change background uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
<HorizontalLine />
> Mixed **textColorForDeletedText** 
>
> The color for deleted text, specified as an InCopy UI color. Note: Valid only when deleted text color choice is change uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
<HorizontalLine />
> Mixed **backgroundColorForDeletedText** 
>
> The background color for deleted text, specified as an InCopy UI color. Note: Valid only when deleted background color choice is change background uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
<HorizontalLine />
> Mixed **textColorForMovedText** 
>
> The color for moved text, specified as an InCopy UI color. Note: Valid only when moved text color choice is change uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
<HorizontalLine />
> Mixed **backgroundColorForMovedText** 
>
> The background color for moved text, specified as an InCopy UI color. Note: Valid only when moved background color choice is change background uses change pref color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
<HorizontalLine />
> ChangeMarkings **markingForAddedText** 
>
> The marking that identifies added text.
<HorizontalLine />
> ChangeMarkings **markingForDeletedText** 
>
> The marking that identifies deleted text.
<HorizontalLine />
> ChangeMarkings **markingForMovedText** 
>
> The marking that identifies moved text.
<HorizontalLine />
> ChangebarLocations **locationForChangeBar** 
>
> The change bar location.
<HorizontalLine />
> ChangeTextColorChoices **addedTextColorChoice** 
>
> The color option for added text.
<HorizontalLine />
> ChangeBackgroundColorChoices **addedBackgroundColorChoice** 
>
> The background color option for added text.
<HorizontalLine />
> ChangeTextColorChoices **deletedTextColorChoice** 
>
> The color option for deleted text.
<HorizontalLine />
> ChangeBackgroundColorChoices **deletedBackgroundColorChoice** 
>
> The background color option for deleted text.
<HorizontalLine />
> ChangeTextColorChoices **movedTextColorChoice** 
>
> The color option for moved text.
<HorizontalLine />
> ChangeBackgroundColorChoices **movedBackgroundColorChoice** 
>
> The background color option for moved text.
<HorizontalLine />
> Boolean **preventDuplicateColor** 
>
> If true, prevent duplicate user color for tracked changes background color.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the TrackChangesPreference.
<HorizontalLine />
> TrackChangesPreference **getElements**()
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


