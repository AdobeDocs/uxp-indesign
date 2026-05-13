# Path
A path.

## Instance
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
> The parent of the Path (a SplineItem, Polygon, GraphicLine, Rectangle, Oval, TextFrame, EndnoteTextFrame, MediaItem, Sound, Movie, Button, MultiStateObject, ClippingPathSettings or TextWrapPreference).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Path within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> PathPoints **pathPoints** 
>
> A collection of path points.
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
> PathType **pathType** 
>
> The path type.
<HorizontalLine />
> Mixed **entirePath** 
>
> A list of the coordinates of all of the path points on the path, including anchor points and left- and right-direction points. When creating a path using this property, supply either a list of anchor point coordinates ([[x1, y1], [x2, y2], ...]) or a list of anchor point, left-direction point, and right-direction point coordinates ([[[x1, y1], [x2, y2], [x3, y3]], [[x4, y4], [x5, y5], [x6, y6]], ...]). Note: Providing only anchor points results in a path on which all of the path points are connected with straight line segments; supplying the positions of left- and right-direction points specifies curved line segments. Can return: Array of Arrays of 2 Units.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the Path.
<HorizontalLine />
> **reverse**()
> 
> Reverses the path.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Path.
<HorizontalLine />
> Path **getElements**()
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


