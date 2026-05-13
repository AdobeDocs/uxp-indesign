# ScriptMenuAction
A script menu action.

## Class
> *Read Only* 
> 
> String **ON_INVOKE** = onInvoke
> 
> Dispatched when the ScriptMenuAction is invoked. This event does not bubble. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_DISPLAY** = beforeDisplay
> 
> Dispatched before the ScriptMenuAction is displayed. This event does not bubble. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_INVOKE** = beforeInvoke
> 
> Dispatched before the ScriptMenuAction is invoked. This event does not bubble. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_INVOKE** = afterInvoke
> 
> Dispatched after the ScriptMenuAction is invoked. This event does not bubble. This event is not cancelable.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the ScriptMenuAction.
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
> The parent of the ScriptMenuAction (a Application).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the ScriptMenuAction within its containing object.
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
> String **name** 
>
> The name of the ScriptMenuAction.
<HorizontalLine />
> String **title** 
>
> The name of the ScriptMenuAction for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters.
<HorizontalLine />
> String **area** 
>
> The menu action area.
<HorizontalLine />
> Boolean **enabled** 
>
> If true, the ScriptMenuAction is enabled.
<HorizontalLine />
> Boolean **checked** 
>
> If true, the menu item associated with the menu action is checked.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the ScriptMenuAction.
<HorizontalLine />
> **invoke**()
> 
> Invoke the action.
<HorizontalLine />
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

<HorizontalLine />
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the ScriptMenuAction.
<HorizontalLine />
> ScriptMenuAction **getElements**()
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


