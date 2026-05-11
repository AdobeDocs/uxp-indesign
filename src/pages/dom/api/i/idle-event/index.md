# IdleEvent
An idle event.

## Class
> *Read Only* 
> 
> String **ON_IDLE** = onIdle
> 
> Dispatched at idle time for this IdleEvent. This event does not bubble. This event is not cancelable.

## Instance
> *Read Only* 
> 
> Number **timeAllocated** 
>
> Amount of time allocated to this task at the time the event was dispatched.
*** 
> *Read Only* 
> 
> String **eventType** 
>
> The name of the event.
*** 
> *Read Only* 
> 
> Object **target** 
>
> The target of the event.
*** 
> *Read Only* 
> 
> Object **currentTarget** 
>
> The current propagation target of the event.
*** 
> *Read Only* 
> 
> EventPhases **eventPhase** 
>
> The current propagation phase of the event.
*** 
> *Read Only* 
> 
> Boolean **bubbles** 
>
> If true, the event supports the bubbling phase of propagation.
*** 
> *Read Only* 
> 
> Boolean **cancelable** 
>
> If true, the default behavior of the event on its target can be canceled.
*** 
> *Read Only* 
> 
> Date **timeStamp** 
>
> The time the event was initialized.
*** 
> *Read Only* 
> 
> Boolean **propagationStopped** 
>
> If true, propagation of the event beyond the current target has been stopped.
*** 
> *Read Only* 
> 
> Boolean **defaultPrevented** 
>
> If true, the default behavior of the event on its target has been canceled.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the IdleEvent.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> IdleTask **parent** 
>
> The parent of the IdleEvent (a IdleTask).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the IdleEvent within its containing object.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **stopPropagation**()
> 
> Stops propagation of the event beyond the current target.
*** 
> **preventDefault**()
> 
> Cancels the default behavior of the event on its target.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the IdleEvent.
*** 
> IdleEvent **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
*** 
> String **toSpecifier**()
> 
> Retrieves the object specifier.

