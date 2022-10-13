# IntegerComboboxes
A collection of integer comboboxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> IntegerCombobox **add**( Object **withProperties** )
> 
> Creates a new IntegerCombobox.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new IntegerCombobox (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the IntegerCombobox.
*** 
> IntegerCombobox **item**( Mixed **index** )
> 
> Returns the IntegerCombobox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> IntegerCombobox **itemByID**( Number **id** )
> 
> Returns the IntegerCombobox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> IntegerCombobox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the IntegerComboboxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The IntegerCombobox, index, or name at the beginning of the range. Can accept: IntegerCombobox, Long Integer or String. |
| Mixed | to | The IntegerCombobox, index, or name at the end of the range. Can accept: IntegerCombobox, Long Integer or String. |

*** 
> IntegerCombobox **firstItem**()
> 
> Returns the first IntegerCombobox in the collection.
*** 
> IntegerCombobox **lastItem**()
> 
> Returns the last IntegerCombobox in the collection.
*** 
> IntegerCombobox **middleItem**()
> 
> Returns the middle IntegerCombobox in the collection.
*** 
> IntegerCombobox **previousItem**( IntegerCombobox **obj** )
> 
> Returns the IntegerCombobox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| IntegerCombobox | obj | The index of the IntegerCombobox that follows the desired IntegerCombobox. |

*** 
> IntegerCombobox **nextItem**( IntegerCombobox **obj** )
> 
> Returns the IntegerCombobox whose index follows the specified IntegerCombobox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| IntegerCombobox | obj | The IntegerCombobox whose index comes before the desired IntegerCombobox. |

*** 
> IntegerCombobox **anyItem**()
> 
> Returns any IntegerCombobox in the collection.
*** 
> IntegerCombobox **everyItem**()
> 
> Returns every IntegerCombobox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the IntegerCombobox.
*** 
> IntegerCombobox **[]**( Number **index** )
> 
> Returns the IntegerCombobox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


