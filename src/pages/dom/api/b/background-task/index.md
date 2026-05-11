# BackgroundTask
background task

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the BackgroundTask.
*** 
> *Read Only* 
> 
> String **documentName** 
>
> The document name on which this task operates.
*** 
> *Read Only* 
> 
> Number **percentDone** 
>
> Progress information for this task.
*** 
> *Read Only* 
> 
> TaskState **status** 
>
> The current status of this task object.
*** 
> *Read Only* 
> 
> Mixed **alerts** 
>
> The alerts encountered while running this task object. Can return: Array of Array of 2 TaskAlertType enumerators or Strings.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the BackgroundTask.
*** 
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
> The parent of the BackgroundTask (a Application).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the BackgroundTask within its containing object.
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
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **cancelTask**()
> 
> Cancels the specified background task.
*** 
> TaskState **waitForTask**()
> 
> Waits for the task to finish.
*** 
> any **queryProperty**( String **name** )
> 
> Queries for a particular property in the task metadata.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The task property being queried |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the BackgroundTask.
*** 
> BackgroundTask **getElements**()
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


