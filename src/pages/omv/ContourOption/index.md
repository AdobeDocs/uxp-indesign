# ContourOption
A contour option.

## Instance
> *Read Only* 
> 
> String **photoshopPathNames** 
>
> A list of the clipping paths stored in the graphic.
*** 
> *Read Only* 
> 
> String **alphaChannelPathNames** 
>
> A list of the alpha channels stored in the graphic.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> TextWrapPreference **parent** 
>
> The parent of the ContourOption (a TextWrapPreference).
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
> ContourOptionsTypes **contourType** 
>
> The contour type.
*** 
> Boolean **includeInsideEdges** 
>
> If true, creates interior clipping paths within the surrounding clipping path. Note: Valid only when clipping type is alpha channel or detect edges.
*** 
> String **contourPathName** 
>
> The alpha channel or Photoshop path to use for the contour option. Valid only when the contour options is photoshop path or alpha channel.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the ContourOption.
*** 
> ContourOption **getElements**()
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


