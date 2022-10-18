# TabStops
A collection of tab stops.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> TabStop **add**( Object **withProperties** )
> 
> Creates a new TabStop.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new TabStop (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the TabStop.
*** 
> TabStop **item**( Mixed **index** )
> 
> Returns the TabStop with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TabStop **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TabStops within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TabStop, index, or name at the beginning of the range. Can accept: TabStop, Long Integer or String. |
| Mixed | to | The TabStop, index, or name at the end of the range. Can accept: TabStop, Long Integer or String. |

*** 
> TabStop **firstItem**()
> 
> Returns the first TabStop in the collection.
*** 
> TabStop **lastItem**()
> 
> Returns the last TabStop in the collection.
*** 
> TabStop **middleItem**()
> 
> Returns the middle TabStop in the collection.
*** 
> TabStop **previousItem**( TabStop **obj** )
> 
> Returns the TabStop with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TabStop | obj | The index of the TabStop that follows the desired TabStop. |

*** 
> TabStop **nextItem**( TabStop **obj** )
> 
> Returns the TabStop whose index follows the specified TabStop in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TabStop | obj | The TabStop whose index comes before the desired TabStop. |

*** 
> TabStop **anyItem**()
> 
> Returns any TabStop in the collection.
*** 
> TabStop **everyItem**()
> 
> Returns every TabStop in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TabStop.
*** 
> TabStop **[]**( Number **index** )
> 
> Returns the TabStop with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


