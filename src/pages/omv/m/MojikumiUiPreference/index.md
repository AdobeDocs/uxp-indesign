# MojikumiUiPreference
Mojikumi UI preferences.

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
> The parent of the MojikumiUiPreference (a Document or Application).
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
> Boolean **lineEndAllOneHalfEm** 
>
> If true, uses half-width spacing for all characters.
*** 
> Boolean **oneEmIndentLineEndUkeOneHalfEm** 
>
> If true, indents lines one space and uses line end uke one half space.
*** 
> Boolean **oneOrOneHalfEmIndentLineEndUkeOneHalfEm** 
>
> If true, indents lines one full or half space and uses line end uke one half space.
*** 
> Boolean **oneOrOneHalfEmIndentLineEndAllOneEm** 
>
> If true, Uses full-witdh spacing for all characters except the last character in the line, which uses either full- or half-width spacing.
*** 
> Boolean **oneEmIndentLineEndAllOneEm** 
>
> If true, indents lines one full space and uses full-width spacing for all characters.
*** 
> Boolean **oneEmIndentLineEndAllNoFloat** 
>
> If true, indents lines one full space and uses no float for all characters.
*** 
> Boolean **oneEmIndentLineEndUkeNoFloat** 
>
> If true, indents lines one full space and uses line end uke no float.
*** 
> Boolean **oneOrOneHalfEmIndentLineEndUkeNoFloat** 
>
> If true, indents lines one half space or one full space and uses line end uke no float.
*** 
> Boolean **oneEmIndentLineEndAllOneHalfEm** 
>
> If true, indents lines one full space and uses half-width spacing for all characters.
*** 
> Boolean **lineEndAllOneEm** 
>
> If true, uses full-width spacing for all characters.
*** 
> Boolean **lineEndUkeNoFloat** 
>
> If true, uses line end uke no float.
*** 
> Boolean **oneOrOneHalfEmIndentLineEndPeriodOneEm** 
>
> If true, indents lines one or one-half space and uses full-width spacing for punctuation and for the last character in the line.
*** 
> Boolean **oneEmIndentLineEndPeriodOneEm** 
>
> If true, indents lines one space and uses full-width spacing for punctuation and for the last character in the line.
*** 
> Boolean **lineEndPeriodOneEm** 
>
> If true, uses full-width spacing for punctuation and for the last character in the line.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the MojikumiUiPreference.
*** 
> MojikumiUiPreference **getElements**()
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


