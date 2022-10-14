# PathPoints
A collection of path points.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> PathPoint **add**( Object **withProperties** )
> 
> Creates a new PathPoint.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new PathPoint (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the PathPoint.
*** 
> PathPoint **item**( Mixed **index** )
> 
> Returns the PathPoint with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> PathPoint **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PathPoints within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PathPoint, index, or name at the beginning of the range. Can accept: PathPoint, Long Integer or String. |
| Mixed | to | The PathPoint, index, or name at the end of the range. Can accept: PathPoint, Long Integer or String. |

*** 
> PathPoint **firstItem**()
> 
> Returns the first PathPoint in the collection.
*** 
> PathPoint **lastItem**()
> 
> Returns the last PathPoint in the collection.
*** 
> PathPoint **middleItem**()
> 
> Returns the middle PathPoint in the collection.
*** 
> PathPoint **previousItem**( PathPoint **obj** )
> 
> Returns the PathPoint with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PathPoint | obj | The index of the PathPoint that follows the desired PathPoint. |

*** 
> PathPoint **nextItem**( PathPoint **obj** )
> 
> Returns the PathPoint whose index follows the specified PathPoint in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PathPoint | obj | The PathPoint whose index comes before the desired PathPoint. |

*** 
> PathPoint **anyItem**()
> 
> Returns any PathPoint in the collection.
*** 
> PathPoint **everyItem**()
> 
> Returns every PathPoint in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PathPoint.
*** 
> PathPoint **[]**( Number **index** )
> 
> Returns the PathPoint with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


