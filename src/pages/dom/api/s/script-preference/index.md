# ScriptPreference
Scripting environment preferences.

## Instance
> *Read Only* 
> 
> File **scriptsFolder** 
>
> The path to the Scripts folder for the application.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **scriptsList** 
>
> A list of the scripts in the Scripts folder. Can return: Array of Array of 2 Strings or Files.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the ScriptPreference (a Application).
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
> String **version** 
>
> The version of the scripting environment. Can also accept: Real.
<HorizontalLine />
> UserInteractionLevels **userInteractionLevel** 
>
> Controls the display of dialogs and alerts during script processing.
<HorizontalLine />
> Mixed **measurementUnit** 
>
> The measurement unit used during script processing. Can return: AutoEnum enumerator or MeasurementUnits enumerator.
<HorizontalLine />
> Boolean **enableRedraw** 
>
> If true, enables redraw during script execution.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the ScriptPreference.
<HorizontalLine />
> ScriptPreference **getElements**()
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


