# GalleyPreference
Galley preferences.

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
> The parent of the GalleyPreference (a Application or Document).
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
> Mixed **backgroundColor** 
>
> The background color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. . Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
*** 
> Boolean **blinkCursor** 
>
> If true, the cursor blinks.
*** 
> CursorTypes **cursorType** 
>
> The cursor type for galley and story views.
*** 
> Boolean **smoothText** 
>
> If true, galley text is anti-aliased.
*** 
> Mixed **textColor** 
>
> The text color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
*** 
> Boolean **showDepthRuler** 
>
> If true, displays the depth ruler.
*** 
> AntiAliasType **antiAliasType** 
>
> The type of text anti-aliasing to use in story and galley views.
*** 
> Boolean **showParagraphStyleNames** 
>
> If true, show paragraph style names.
*** 
> LineSpacingType **lineSpacingValue** 
>
> Amount of spacing between lines.
*** 
> String **displayFont** 
>
> Font family name to use for text display.
*** 
> Measurement Unit (Number or String)=any **displayFontSize** 
>
> Size to use for text display.
*** 
> Measurement Unit (Number or String)=any **infoColumnWidth** 
>
> Info column width.
*** 
> Boolean **showInfoColumn** 
>
> If true, display the Info column.
*** 
> Boolean **showParagraphBreakMarks** 
>
> If true, show paragraph break marks.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the GalleyPreference.
*** 
> GalleyPreference **getElements**()
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


