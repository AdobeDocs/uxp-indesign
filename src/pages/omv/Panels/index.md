# Panels
A collection of panels.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Panel.
*** 
> Panel **item**( Mixed **index** )
> 
> Returns the Panel with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Panel **itemByName**( String **name** )
> 
> Returns the Panel with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Panel **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Panels within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Panel, index, or name at the beginning of the range. Can accept: Panel, Long Integer or String. |
| Mixed | to | The Panel, index, or name at the end of the range. Can accept: Panel, Long Integer or String. |

*** 
> Panel **firstItem**()
> 
> Returns the first Panel in the collection.
*** 
> Panel **lastItem**()
> 
> Returns the last Panel in the collection.
*** 
> Panel **middleItem**()
> 
> Returns the middle Panel in the collection.
*** 
> Panel **previousItem**( Panel **obj** )
> 
> Returns the Panel with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Panel | obj | The index of the Panel that follows the desired Panel. |

*** 
> Panel **nextItem**( Panel **obj** )
> 
> Returns the Panel whose index follows the specified Panel in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Panel | obj | The Panel whose index comes before the desired Panel. |

*** 
> Panel **anyItem**()
> 
> Returns any Panel in the collection.
*** 
> Panel **everyItem**()
> 
> Returns every Panel in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Panel.
*** 
> Panel **[]**( Number **index** )
> 
> Returns the Panel with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


