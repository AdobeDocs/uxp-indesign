# BorderPanels
A collection of border panels.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> BorderPanel **add**( Object **withProperties** )
> 
> Creates a new BorderPanel.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new BorderPanel (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the BorderPanel.
*** 
> BorderPanel **item**( Mixed **index** )
> 
> Returns the BorderPanel with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> BorderPanel **itemByID**( Number **id** )
> 
> Returns the BorderPanel with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> BorderPanel **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the BorderPanels within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The BorderPanel, index, or name at the beginning of the range. Can accept: BorderPanel, Long Integer or String. |
| Mixed | to | The BorderPanel, index, or name at the end of the range. Can accept: BorderPanel, Long Integer or String. |

*** 
> BorderPanel **firstItem**()
> 
> Returns the first BorderPanel in the collection.
*** 
> BorderPanel **lastItem**()
> 
> Returns the last BorderPanel in the collection.
*** 
> BorderPanel **middleItem**()
> 
> Returns the middle BorderPanel in the collection.
*** 
> BorderPanel **previousItem**( BorderPanel **obj** )
> 
> Returns the BorderPanel with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| BorderPanel | obj | The index of the BorderPanel that follows the desired BorderPanel. |

*** 
> BorderPanel **nextItem**( BorderPanel **obj** )
> 
> Returns the BorderPanel whose index follows the specified BorderPanel in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| BorderPanel | obj | The BorderPanel whose index comes before the desired BorderPanel. |

*** 
> BorderPanel **anyItem**()
> 
> Returns any BorderPanel in the collection.
*** 
> BorderPanel **everyItem**()
> 
> Returns every BorderPanel in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the BorderPanel.
*** 
> BorderPanel **[]**( Number **index** )
> 
> Returns the BorderPanel with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


