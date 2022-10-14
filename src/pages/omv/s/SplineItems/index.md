# SplineItems
The spline items collection.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the SplineItem.
*** 
> SplineItem **item**( Mixed **index** )
> 
> Returns the SplineItem with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> SplineItem **itemByName**( String **name** )
> 
> Returns the SplineItem with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> SplineItem **itemByID**( Number **id** )
> 
> Returns the SplineItem with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> SplineItem **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the SplineItems within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The SplineItem, index, or name at the beginning of the range. Can accept: SplineItem, Long Integer or String. |
| Mixed | to | The SplineItem, index, or name at the end of the range. Can accept: SplineItem, Long Integer or String. |

*** 
> SplineItem **firstItem**()
> 
> Returns the first SplineItem in the collection.
*** 
> SplineItem **lastItem**()
> 
> Returns the last SplineItem in the collection.
*** 
> SplineItem **middleItem**()
> 
> Returns the middle SplineItem in the collection.
*** 
> SplineItem **previousItem**( SplineItem **obj** )
> 
> Returns the SplineItem with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SplineItem | obj | The index of the SplineItem that follows the desired SplineItem. |

*** 
> SplineItem **nextItem**( SplineItem **obj** )
> 
> Returns the SplineItem whose index follows the specified SplineItem in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SplineItem | obj | The SplineItem whose index comes before the desired SplineItem. |

*** 
> SplineItem **anyItem**()
> 
> Returns any SplineItem in the collection.
*** 
> SplineItem **everyItem**()
> 
> Returns every SplineItem in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the SplineItem.
*** 
> SplineItem **[]**( Number **index** )
> 
> Returns the SplineItem with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


