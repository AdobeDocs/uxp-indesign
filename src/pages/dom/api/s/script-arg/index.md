# ScriptArg
Arguments to pass to a script.

## Instance
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
> The parent of the ScriptArg (a Application).
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

<HorizontalLine />
> String **getValue**( String **name** )
> 
> Gets the value of a script argument.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the script argument. |

<HorizontalLine />
> **set**( String **name**, String **value** )
> 
> Sets the value of a script argument.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the script argument. |
| String | value | The value. |

<HorizontalLine />
> **setValue**( String **name**, String **value** )
> 
> Sets the value of a script argument.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the script argument. |
| String | value | The value. |

<HorizontalLine />
> Boolean **isDefined**( String **name** )
> 
> Verifies whether the script argument is defined.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the script argument. |

<HorizontalLine />
> **clear**()
> 
> Clears all script arguments.
<HorizontalLine />
> **save**()
> 
> Saves the script arguments.
<HorizontalLine />
> **restore**()
> 
> Restores all script arguments.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the ScriptArg.
<HorizontalLine />
> ScriptArg **getElements**()
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


