# RealComboboxes
A collection of real number comboboxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> RealCombobox **add**( Object **withProperties** )
> 
> Creates a new RealCombobox.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new RealCombobox (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the RealCombobox.
*** 
> RealCombobox **item**( Mixed **index** )
> 
> Returns the RealCombobox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> RealCombobox **itemByID**( Number **id** )
> 
> Returns the RealCombobox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> RealCombobox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the RealComboboxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The RealCombobox, index, or name at the beginning of the range. Can accept: RealCombobox, Long Integer or String. |
| Mixed | to | The RealCombobox, index, or name at the end of the range. Can accept: RealCombobox, Long Integer or String. |

*** 
> RealCombobox **firstItem**()
> 
> Returns the first RealCombobox in the collection.
*** 
> RealCombobox **lastItem**()
> 
> Returns the last RealCombobox in the collection.
*** 
> RealCombobox **middleItem**()
> 
> Returns the middle RealCombobox in the collection.
*** 
> RealCombobox **previousItem**( RealCombobox **obj** )
> 
> Returns the RealCombobox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| RealCombobox | obj | The index of the RealCombobox that follows the desired RealCombobox. |

*** 
> RealCombobox **nextItem**( RealCombobox **obj** )
> 
> Returns the RealCombobox whose index follows the specified RealCombobox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| RealCombobox | obj | The RealCombobox whose index comes before the desired RealCombobox. |

*** 
> RealCombobox **anyItem**()
> 
> Returns any RealCombobox in the collection.
*** 
> RealCombobox **everyItem**()
> 
> Returns every RealCombobox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the RealCombobox.
*** 
> RealCombobox **[]**( Number **index** )
> 
> Returns the RealCombobox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


