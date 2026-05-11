# AngleComboboxes
A collection of angle comboboxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> AngleCombobox **add**( Object **withProperties** )
> 
> Creates a new AngleCombobox.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new AngleCombobox (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the AngleCombobox.
*** 
> AngleCombobox **item**( Mixed **index** )
> 
> Returns the AngleCombobox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> AngleCombobox **itemByID**( Number **id** )
> 
> Returns the AngleCombobox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> AngleCombobox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the AngleComboboxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The AngleCombobox, index, or name at the beginning of the range. Can accept: AngleCombobox, Long Integer or String. |
| Mixed | to | The AngleCombobox, index, or name at the end of the range. Can accept: AngleCombobox, Long Integer or String. |

*** 
> AngleCombobox **firstItem**()
> 
> Returns the first AngleCombobox in the collection.
*** 
> AngleCombobox **lastItem**()
> 
> Returns the last AngleCombobox in the collection.
*** 
> AngleCombobox **middleItem**()
> 
> Returns the middle AngleCombobox in the collection.
*** 
> AngleCombobox **previousItem**( AngleCombobox **obj** )
> 
> Returns the AngleCombobox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| AngleCombobox | obj | The index of the AngleCombobox that follows the desired AngleCombobox. |

*** 
> AngleCombobox **nextItem**( AngleCombobox **obj** )
> 
> Returns the AngleCombobox whose index follows the specified AngleCombobox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| AngleCombobox | obj | The AngleCombobox whose index comes before the desired AngleCombobox. |

*** 
> AngleCombobox **anyItem**()
> 
> Returns any AngleCombobox in the collection.
*** 
> AngleCombobox **everyItem**()
> 
> Returns every AngleCombobox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the AngleCombobox.
*** 
> AngleCombobox **[]**( Number **index** )
> 
> Returns the AngleCombobox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


