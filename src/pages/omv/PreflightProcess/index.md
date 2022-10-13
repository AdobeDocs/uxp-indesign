# PreflightProcess
An active preflight process.

## Instance
> *Read Only* 
> 
> Document **targetObject** 
>
> The target document the process is inspecting.
*** 
> *Read Only* 
> 
> PreflightProfile **appliedProfile** 
>
> The preflight profile the process is using.
*** 
> *Read Only* 
> 
> String **description** 
>
> The description of the PreflightProcess.
*** 
> *Read Only* 
> 
> String **processResults** 
>
> The results found by the process as a large string.
*** 
> *Read Only* 
> 
> String **processInventory** 
>
> A string containing a description of all elements visited by the process.
*** 
> *Read Only* 
> 
> Mixed **aggregatedResults** 
>
> The aggregated results found by the process. Can return: Ordered array containing documentName:String, profileName:String, results:Array of Ordered array containing parentNodeID:Long Integer, errorName:String, pageNumber:String, errorInfo:String, errorDetail:Array of Ordered array containing label:String, description:String.
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
> The parent of the PreflightProcess (a Application).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the PreflightProcess within its containing object.
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
> **remove**()
> 
> Deletes the PreflightProcess.
*** 
> Boolean **waitForProcess**( Number **waitTime** )
> 
> Waits for the process to finish, up to an optional maximum amount of time. No other processes get cycles during this time.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | waitTime | The maximum time to wait, in seconds; if omitted, waits until completion no matter how long it takes. (Optional) |

*** 
> **saveReport**( File **to**, Boolean **autoOpen** )
> 
> Saves a report of the completed preflight process.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The preflight report to save to. |
| Boolean | autoOpen | If true, automatically open the report after creation. (Optional) |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PreflightProcess.
*** 
> PreflightProcess **getElements**()
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


