# Dropdowns
A collection of dropdowns.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Dropdown **add**( Object **withProperties** )
> 
> Creates a new Dropdown.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new Dropdown (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Dropdown.
*** 
> Dropdown **item**( Mixed **index** )
> 
> Returns the Dropdown with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Dropdown **itemByID**( Number **id** )
> 
> Returns the Dropdown with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Dropdown **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Dropdowns within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Dropdown, index, or name at the beginning of the range. Can accept: Dropdown, Long Integer or String. |
| Mixed | to | The Dropdown, index, or name at the end of the range. Can accept: Dropdown, Long Integer or String. |

*** 
> Dropdown **firstItem**()
> 
> Returns the first Dropdown in the collection.
*** 
> Dropdown **lastItem**()
> 
> Returns the last Dropdown in the collection.
*** 
> Dropdown **middleItem**()
> 
> Returns the middle Dropdown in the collection.
*** 
> Dropdown **previousItem**( Dropdown **obj** )
> 
> Returns the Dropdown with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Dropdown | obj | The index of the Dropdown that follows the desired Dropdown. |

*** 
> Dropdown **nextItem**( Dropdown **obj** )
> 
> Returns the Dropdown whose index follows the specified Dropdown in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Dropdown | obj | The Dropdown whose index comes before the desired Dropdown. |

*** 
> Dropdown **anyItem**()
> 
> Returns any Dropdown in the collection.
*** 
> Dropdown **everyItem**()
> 
> Returns every Dropdown in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Dropdown.
*** 
> Dropdown **[]**( Number **index** )
> 
> Returns the Dropdown with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


