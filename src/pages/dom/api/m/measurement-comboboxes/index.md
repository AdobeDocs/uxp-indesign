# MeasurementComboboxes
A collection of measurement comboboxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> MeasurementCombobox **add**( Object **withProperties** )
> 
> Creates a new MeasurementCombobox.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new MeasurementCombobox (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the MeasurementCombobox.
*** 
> MeasurementCombobox **item**( Mixed **index** )
> 
> Returns the MeasurementCombobox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> MeasurementCombobox **itemByID**( Number **id** )
> 
> Returns the MeasurementCombobox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> MeasurementCombobox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MeasurementComboboxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MeasurementCombobox, index, or name at the beginning of the range. Can accept: MeasurementCombobox, Long Integer or String. |
| Mixed | to | The MeasurementCombobox, index, or name at the end of the range. Can accept: MeasurementCombobox, Long Integer or String. |

*** 
> MeasurementCombobox **firstItem**()
> 
> Returns the first MeasurementCombobox in the collection.
*** 
> MeasurementCombobox **lastItem**()
> 
> Returns the last MeasurementCombobox in the collection.
*** 
> MeasurementCombobox **middleItem**()
> 
> Returns the middle MeasurementCombobox in the collection.
*** 
> MeasurementCombobox **previousItem**( MeasurementCombobox **obj** )
> 
> Returns the MeasurementCombobox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MeasurementCombobox | obj | The index of the MeasurementCombobox that follows the desired MeasurementCombobox. |

*** 
> MeasurementCombobox **nextItem**( MeasurementCombobox **obj** )
> 
> Returns the MeasurementCombobox whose index follows the specified MeasurementCombobox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MeasurementCombobox | obj | The MeasurementCombobox whose index comes before the desired MeasurementCombobox. |

*** 
> MeasurementCombobox **anyItem**()
> 
> Returns any MeasurementCombobox in the collection.
*** 
> MeasurementCombobox **everyItem**()
> 
> Returns every MeasurementCombobox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the MeasurementCombobox.
*** 
> MeasurementCombobox **[]**( Number **index** )
> 
> Returns the MeasurementCombobox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


