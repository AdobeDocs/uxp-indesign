# XMLPreference
XML preferences.

## Instance
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
> The parent of the XMLPreference (a Application or Document).
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
> Boolean **deleteElementOnContentDeletion** 
>
> The preference for deleting the element when deleting the associated content like a page item or a text fragment.
*** 
> String **defaultStoryTagName** 
>
> The name of the default tag to use for new story elements. Note: Either specifies an existing tag or creates a new tag.
*** 
> Mixed **defaultStoryTagColor** 
>
> The color of the default story tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Notes: Valid only when default story tag name value creates a new tag. Does not update the color of an existing tag. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> String **defaultTableTagName** 
>
> The name of the default tag to use for new table elements. Note: Either specifies an existing tag or creates a new tag.
*** 
> Mixed **defaultTableTagColor** 
>
> The color of the default table tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Notes: Valid only when default table tag name value creates a new tag. Does not update the color of an existing tag. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> String **defaultCellTagName** 
>
> The name of the default tag to use for new table cell elements. Note: Either specifies an existing tag or creates a new tag.
*** 
> Mixed **defaultCellTagColor** 
>
> The color of the default cell tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Valid only when default cell tag name value creates a new tag. Does not update the color of an existing tag. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> String **defaultImageTagName** 
>
> The default name for new image elements created automatically.
*** 
> Mixed **defaultImageTagColor** 
>
> The color to give a new image tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Used only when the tag needs to be created. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLPreference.
*** 
> XMLPreference **getElements**()
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


