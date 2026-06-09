# MenuAction
A menu action.

## Class
> *Read Only* 
> 
> String **BEFORE_INVOKE** = beforeInvoke
> 
> Dispatched before the MenuAction is invoked. This event does not bubble. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_INVOKE** = afterInvoke
> 
> Dispatched after the MenuAction is invoked. This event does not bubble. This event is not cancelable.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the MenuAction.
<HorizontalLine />
> *Read Only* 
> 
> String **title** 
>
> The name of the MenuAction for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters.
<HorizontalLine />
> *Read Only* 
> 
> String **area** 
>
> The menu action area.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **enabled** 
>
> If true, the MenuAction is enabled.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **checked** 
>
> If true, the menu item associated with the menu action is checked.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the MenuAction.
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
> The parent of the MenuAction (a Application).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the MenuAction within its containing object.
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
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
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
> Generates a string which, if executed, will return the MenuAction.
<HorizontalLine />
> MenuAction **getElements**()
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


