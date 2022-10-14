# ScriptArg
Arguments to pass to a script.

## Instance
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
> The parent of the ScriptArg (a Application).
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
> String **get**( String **name** )
> 
> Gets the value of a script argument.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the script argument. |

*** 
> String **getValue**( String **name** )
> 
> Gets the value of a script argument.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the script argument. |

*** 
> **set**( String **name**, String **value** )
> 
> Sets the value of a script argument.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the script argument. |
| String | value | The value. |

*** 
> **setValue**( String **name**, String **value** )
> 
> Sets the value of a script argument.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the script argument. |
| String | value | The value. |

*** 
> Boolean **isDefined**( String **name** )
> 
> Verifies whether the script argument is defined.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the script argument. |

*** 
> **clear**()
> 
> Clears all script arguments.
*** 
> **save**()
> 
> Saves the script arguments.
*** 
> **restore**()
> 
> Restores all script arguments.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ScriptArg.
*** 
> ScriptArg **getElements**()
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


