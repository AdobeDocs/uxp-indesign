# MenuItem
A menu item.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the MenuItem.
<HorizontalLine />
> *Read Only* 
> 
> String **title** 
>
> The name of the MenuItem for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the MenuItem.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **enabled** 
>
> If true, the MenuItem is enabled.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **checked** 
>
> If true, the menu item associated with the menu action is checked.
<HorizontalLine />
> *Read Only* 
> 
> MenuAction **associatedMenuAction** 
>
> The menu action that implements the menu item.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the MenuItem (a Menu or Submenu).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the MenuItem within its containing object.
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
> **select**()
> 
> Selects the MenuItem.
<HorizontalLine />
> **remove**()
> 
> Deletes the MenuItem.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the MenuItem.
<HorizontalLine />
> MenuItem **getElements**()
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


