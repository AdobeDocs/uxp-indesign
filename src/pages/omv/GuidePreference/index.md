# GuidePreference
Guide preferences.

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
> The parent of the GuidePreference (a Application or Document).
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
> Boolean **guidesInBack** 
>
> If true, places guides behind all other objects on the spread.
*** 
> Boolean **guidesShown** 
>
> If true, displays the guides.
*** 
> Boolean **guidesLocked** 
>
> If true, guides cannot be moved, added, or deleted.
*** 
> Boolean **guidesSnapto** 
>
> If true, an object within the specified range snaps to the nearest guide when the object is created, moved, or resized. For range information, see guide snapto zone.
*** 
> Number **rulerGuidesViewThreshold** 
>
> The magnification (as a percentage) less than which ruler guides do not appear. (Range: 5 to 4000)
*** 
> Mixed **rulerGuidesColor** 
>
> The color of the guide, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the GuidePreference.
*** 
> GuidePreference **getElements**()
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


