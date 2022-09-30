# MeasurementEditboxes
A collection of measurement editboxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> MeasurementEditbox **add**( Object **withProperties** )
> 
> Creates a new MeasurementEditbox.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new MeasurementEditbox (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the MeasurementEditbox.
*** 
> MeasurementEditbox **item**( Mixed **index** )
> 
> Returns the MeasurementEditbox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> MeasurementEditbox **itemByID**( Number **id** )
> 
> Returns the MeasurementEditbox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> MeasurementEditbox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MeasurementEditboxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MeasurementEditbox, index, or name at the beginning of the range. Can accept: MeasurementEditbox, Long Integer or String. |
| Mixed | to | The MeasurementEditbox, index, or name at the end of the range. Can accept: MeasurementEditbox, Long Integer or String. |

*** 
> MeasurementEditbox **firstItem**()
> 
> Returns the first MeasurementEditbox in the collection.
*** 
> MeasurementEditbox **lastItem**()
> 
> Returns the last MeasurementEditbox in the collection.
*** 
> MeasurementEditbox **middleItem**()
> 
> Returns the middle MeasurementEditbox in the collection.
*** 
> MeasurementEditbox **previousItem**( MeasurementEditbox **obj** )
> 
> Returns the MeasurementEditbox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MeasurementEditbox | obj | The index of the MeasurementEditbox that follows the desired MeasurementEditbox. |

*** 
> MeasurementEditbox **nextItem**( MeasurementEditbox **obj** )
> 
> Returns the MeasurementEditbox whose index follows the specified MeasurementEditbox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MeasurementEditbox | obj | The MeasurementEditbox whose index comes before the desired MeasurementEditbox. |

*** 
> MeasurementEditbox **anyItem**()
> 
> Returns any MeasurementEditbox in the collection.
*** 
> MeasurementEditbox **everyItem**()
> 
> Returns every MeasurementEditbox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the MeasurementEditbox.
*** 
> MeasurementEditbox **[]**( Number **index** )
> 
> Returns the MeasurementEditbox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


