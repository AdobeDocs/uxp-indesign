# PercentComboboxes
A collection of percent comboboxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> PercentCombobox **add**( Object **withProperties** )
> 
> Creates a new PercentCombobox.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new PercentCombobox (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the PercentCombobox.
*** 
> PercentCombobox **item**( Mixed **index** )
> 
> Returns the PercentCombobox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> PercentCombobox **itemByID**( Number **id** )
> 
> Returns the PercentCombobox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> PercentCombobox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PercentComboboxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PercentCombobox, index, or name at the beginning of the range. Can accept: PercentCombobox, Long Integer or String. |
| Mixed | to | The PercentCombobox, index, or name at the end of the range. Can accept: PercentCombobox, Long Integer or String. |

*** 
> PercentCombobox **firstItem**()
> 
> Returns the first PercentCombobox in the collection.
*** 
> PercentCombobox **lastItem**()
> 
> Returns the last PercentCombobox in the collection.
*** 
> PercentCombobox **middleItem**()
> 
> Returns the middle PercentCombobox in the collection.
*** 
> PercentCombobox **previousItem**( PercentCombobox **obj** )
> 
> Returns the PercentCombobox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PercentCombobox | obj | The index of the PercentCombobox that follows the desired PercentCombobox. |

*** 
> PercentCombobox **nextItem**( PercentCombobox **obj** )
> 
> Returns the PercentCombobox whose index follows the specified PercentCombobox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PercentCombobox | obj | The PercentCombobox whose index comes before the desired PercentCombobox. |

*** 
> PercentCombobox **anyItem**()
> 
> Returns any PercentCombobox in the collection.
*** 
> PercentCombobox **everyItem**()
> 
> Returns every PercentCombobox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PercentCombobox.
*** 
> PercentCombobox **[]**( Number **index** )
> 
> Returns the PercentCombobox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


