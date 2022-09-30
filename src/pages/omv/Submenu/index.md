# Submenu
A submenu.

## Class
> *Read Only* 
> 
> String **BEFORE_DISPLAY** = beforeDisplay
> 
> Dispatched before the Submenu is displayed. This event does not bubble. This event is not cancelable.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the Submenu.
*** 
> *Read Only* 
> 
> String **title** 
>
> The name of the Submenu for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the Submenu (a Menu or Submenu).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Submenu within its containing object.
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
> *Read Only* 
> 
> MenuElements **menuElements** 
>
> A collection of menu elements.
*** 
> *Read Only* 
> 
> Submenus **submenus** 
>
> A collection of submenus.
*** 
> *Read Only* 
> 
> MenuItems **menuItems** 
>
> A collection of menu items.
*** 
> *Read Only* 
> 
> MenuSeparators **menuSeparators** 
>
> A collection of menu separators.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the Submenu.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Submenu.
*** 
> Submenu **getElements**()
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


