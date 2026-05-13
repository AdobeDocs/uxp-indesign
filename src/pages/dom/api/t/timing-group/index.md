# TimingGroup
a timing group.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> TimingList **parent** 
>
> The parent of the TimingGroup (a TimingList).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the TimingGroup within its containing object.
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
> *Read Only* 
> 
> TimingTargets **timingTargets** 
>
> A collection of timing target.
<HorizontalLine />
> Number **placement** 
>
> The placement of the timing group in the timing list.
<HorizontalLine />
> Number **plays** 
>
> The number of times this timing group plays.
<HorizontalLine />
> Boolean **playsLoop** 
>
> Set to true if timing group loops.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the TimingGroup.
<HorizontalLine />
> **unlink**()
> 
> Unlink all targets in the group into separate groups in this timing list.
<HorizontalLine />
> TimingGroup **move**( LocationOptions **to**, Mixed **reference** )
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
> Generates a string which, if executed, will return the TimingGroup.
<HorizontalLine />
> TimingGroup **getElements**()
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


