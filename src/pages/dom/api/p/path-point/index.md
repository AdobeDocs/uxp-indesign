# PathPoint
A path point of a path.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Path **parent** 
>
> The parent of the PathPoint (a Path).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the PathPoint within its containing object.
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
> PointType **pointType** 
>
> The path point type.
<HorizontalLine />
> Measurement Unit (Number or String)=any **anchor** 
>
> The location of the path point on the page, in the format [x, y].
<HorizontalLine />
> Measurement Unit (Number or String)=any **leftDirection** 
>
> The left-direction point, which controls the curve of the line segment preceding the path point on the path, in the format [x, y].
<HorizontalLine />
> Measurement Unit (Number or String)=any **rightDirection** 
>
> The right-direction point, which controls the curve of the line segment following the path point on the path, in the format [x, y].
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the PathPoint.
<HorizontalLine />
> **join**( PathPoint **reference**, JoinOptions **given** )
> 
> Join this path point to another path point. The two points must be end points and their paths combined into a single path on a single page item.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PathPoint | reference | The reference object. The path point to join to |
| JoinOptions | given | The join option to use. (Optional) |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the PathPoint.
<HorizontalLine />
> PathPoint **getElements**()
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


