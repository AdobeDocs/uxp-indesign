# TimingTarget
a timing target.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> TimingGroup **parent** 
>
> The parent of the TimingTarget (a TimingGroup).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the TimingTarget within its containing object.
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
> Mixed **dynamicTarget** 
>
> A page item target that is an animation, media, or mso. Can return: PageItem, Graphic, Behavior or MediaItem.
*** 
> Number **delaySeconds** 
>
> The time delay in seconds for a single target or a group of targets after the previoius group has finished.
*** 
> Boolean **reverseAnimation** 
>
> Set to true if reversing animation on rolloff. Valid only for self rolloff trigger event.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the TimingTarget.
*** 
> **unlink**()
> 
> Unlink target from this group and append to the end of this timing list.
*** 
> TimingTarget **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the timing group or target to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location in relation to the reference object or within the containing object. |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. . Can accept: TimingGroup, TimingTarget or TimingList. (Optional) |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TimingTarget.
*** 
> TimingTarget **getElements**()
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


