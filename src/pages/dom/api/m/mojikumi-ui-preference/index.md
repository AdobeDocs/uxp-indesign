# MojikumiUiPreference
Mojikumi UI preferences.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the MojikumiUiPreference (a Document or Application).
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
> Boolean **lineEndAllOneHalfEm** 
>
> If true, uses half-width spacing for all characters.
<HorizontalLine />
> Boolean **oneEmIndentLineEndUkeOneHalfEm** 
>
> If true, indents lines one space and uses line end uke one half space.
<HorizontalLine />
> Boolean **oneOrOneHalfEmIndentLineEndUkeOneHalfEm** 
>
> If true, indents lines one full or half space and uses line end uke one half space.
<HorizontalLine />
> Boolean **oneOrOneHalfEmIndentLineEndAllOneEm** 
>
> If true, Uses full-witdh spacing for all characters except the last character in the line, which uses either full- or half-width spacing.
<HorizontalLine />
> Boolean **oneEmIndentLineEndAllOneEm** 
>
> If true, indents lines one full space and uses full-width spacing for all characters.
<HorizontalLine />
> Boolean **oneEmIndentLineEndAllNoFloat** 
>
> If true, indents lines one full space and uses no float for all characters.
<HorizontalLine />
> Boolean **oneEmIndentLineEndUkeNoFloat** 
>
> If true, indents lines one full space and uses line end uke no float.
<HorizontalLine />
> Boolean **oneOrOneHalfEmIndentLineEndUkeNoFloat** 
>
> If true, indents lines one half space or one full space and uses line end uke no float.
<HorizontalLine />
> Boolean **oneEmIndentLineEndAllOneHalfEm** 
>
> If true, indents lines one full space and uses half-width spacing for all characters.
<HorizontalLine />
> Boolean **lineEndAllOneEm** 
>
> If true, uses full-width spacing for all characters.
<HorizontalLine />
> Boolean **lineEndUkeNoFloat** 
>
> If true, uses line end uke no float.
<HorizontalLine />
> Boolean **oneOrOneHalfEmIndentLineEndPeriodOneEm** 
>
> If true, indents lines one or one-half space and uses full-width spacing for punctuation and for the last character in the line.
<HorizontalLine />
> Boolean **oneEmIndentLineEndPeriodOneEm** 
>
> If true, indents lines one space and uses full-width spacing for punctuation and for the last character in the line.
<HorizontalLine />
> Boolean **lineEndPeriodOneEm** 
>
> If true, uses full-width spacing for punctuation and for the last character in the line.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the MojikumiUiPreference.
<HorizontalLine />
> MojikumiUiPreference **getElements**()
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


