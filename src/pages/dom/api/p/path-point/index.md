# PathPoint
A path point of a path.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Path **parent** 
>
> The parent of the PathPoint (a Path).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the PathPoint within its containing object.
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
> PointType **pointType** 
>
> The path point type.
*** 
> Measurement Unit (Number or String)=any **anchor** 
>
> The location of the path point on the page, in the format [x, y].
*** 
> Measurement Unit (Number or String)=any **leftDirection** 
>
> The left-direction point, which controls the curve of the line segment preceding the path point on the path, in the format [x, y].
*** 
> Measurement Unit (Number or String)=any **rightDirection** 
>
> The right-direction point, which controls the curve of the line segment following the path point on the path, in the format [x, y].
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the PathPoint.
*** 
> **join**( PathPoint **reference**, JoinOptions **given** )
> 
> Join this path point to another path point. The two points must be end points and their paths combined into a single path on a single page item.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PathPoint | reference | The reference object. The path point to join to |
| JoinOptions | given | The join option to use. (Optional) |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PathPoint.
*** 
> PathPoint **getElements**()
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


