# TimingTarget
a timing target.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> TimingGroup **parent** 
>
> The parent of the TimingTarget (a TimingGroup).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the TimingTarget within its containing object.
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
> Mixed **dynamicTarget** 
>
> A page item target that is an animation, media, or mso. Can return: PageItem, Graphic, Behavior or MediaItem.
<HorizontalLine />
> Number **delaySeconds** 
>
> The time delay in seconds for a single target or a group of targets after the previoius group has finished.
<HorizontalLine />
> Boolean **reverseAnimation** 
>
> Set to true if reversing animation on rolloff. Valid only for self rolloff trigger event.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the TimingTarget.
<HorizontalLine />
> **unlink**()
> 
> Unlink target from this group and append to the end of this timing list.
<HorizontalLine />
> TimingTarget **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the timing group or target to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location in relation to the reference object or within the containing object. |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. . Can accept: TimingGroup, TimingTarget or TimingList. (Optional) |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the TimingTarget.
<HorizontalLine />
> TimingTarget **getElements**()
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


