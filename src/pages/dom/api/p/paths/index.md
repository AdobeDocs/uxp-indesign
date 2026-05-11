# Paths
A collection of paths.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Path **add**( Object **withProperties** )
> 
> Creates a new Path.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new Path (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Path.
*** 
> Path **item**( Mixed **index** )
> 
> Returns the Path with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Path **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Paths within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Path, index, or name at the beginning of the range. Can accept: Path, Long Integer or String. |
| Mixed | to | The Path, index, or name at the end of the range. Can accept: Path, Long Integer or String. |

*** 
> Path **firstItem**()
> 
> Returns the first Path in the collection.
*** 
> Path **lastItem**()
> 
> Returns the last Path in the collection.
*** 
> Path **middleItem**()
> 
> Returns the middle Path in the collection.
*** 
> Path **previousItem**( Path **obj** )
> 
> Returns the Path with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Path | obj | The index of the Path that follows the desired Path. |

*** 
> Path **nextItem**( Path **obj** )
> 
> Returns the Path whose index follows the specified Path in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Path | obj | The Path whose index comes before the desired Path. |

*** 
> Path **anyItem**()
> 
> Returns any Path in the collection.
*** 
> Path **everyItem**()
> 
> Returns every Path in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Path.
*** 
> Path **[]**( Number **index** )
> 
> Returns the Path with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


