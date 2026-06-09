# ToolBox
Tool box tools

## Class
> *Read Only* 
> 
> String **AFTER_ATTRIBUTE_CHANGED** = afterAttributeChanged
> 
> Dispatched when the value of a property changes on this ToolBox. This event bubbles. This event is not cancelable.

## Instance
> *Read Only* 
> 
> String **currentToolName** 
>
> The currently active tool's name.
<HorizontalLine />
> *Read Only* 
> 
> String **currentToolHint** 
>
> The currently active tool's hint.
<HorizontalLine />
> *Read Only* 
> 
> File **currentToolIconFile** 
>
> The currently active tool's icon resource file.
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
> The parent of the ToolBox (a Application).
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
> UITools **currentTool** 
>
> The currently active tool.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the ToolBox.
<HorizontalLine />
> ToolBox **getElements**()
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


