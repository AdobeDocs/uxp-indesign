# Path
A path.

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
> The parent of the Path (a SplineItem, Polygon, GraphicLine, Rectangle, Oval, TextFrame, EndnoteTextFrame, MediaItem, Sound, Movie, Button, MultiStateObject, ClippingPathSettings or TextWrapPreference).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Path within its containing object.
*** 
> *Read Only* 
> 
> PathPoints **pathPoints** 
>
> A collection of path points.
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
> PathType **pathType** 
>
> The path type.
*** 
> Mixed **entirePath** 
>
> A list of the coordinates of all of the path points on the path, including anchor points and left- and right-direction points. When creating a path using this property, supply either a list of anchor point coordinates ([[x1, y1], [x2, y2], ...]) or a list of anchor point, left-direction point, and right-direction point coordinates ([[[x1, y1], [x2, y2], [x3, y3]], [[x4, y4], [x5, y5], [x6, y6]], ...]). Note: Providing only anchor points results in a path on which all of the path points are connected with straight line segments; supplying the positions of left- and right-direction points specifies curved line segments. Can return: Array of Arrays of 2 Units.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the Path.
*** 
> **reverse**()
> 
> Reverses the path.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Path.
*** 
> Path **getElements**()
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


