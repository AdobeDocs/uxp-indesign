# RealEditboxes
A collection of real number editboxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> RealEditbox **add**( Object **withProperties** )
> 
> Creates a new RealEditbox.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new RealEditbox (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the RealEditbox.
*** 
> RealEditbox **item**( Mixed **index** )
> 
> Returns the RealEditbox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> RealEditbox **itemByID**( Number **id** )
> 
> Returns the RealEditbox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> RealEditbox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the RealEditboxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The RealEditbox, index, or name at the beginning of the range. Can accept: RealEditbox, Long Integer or String. |
| Mixed | to | The RealEditbox, index, or name at the end of the range. Can accept: RealEditbox, Long Integer or String. |

*** 
> RealEditbox **firstItem**()
> 
> Returns the first RealEditbox in the collection.
*** 
> RealEditbox **lastItem**()
> 
> Returns the last RealEditbox in the collection.
*** 
> RealEditbox **middleItem**()
> 
> Returns the middle RealEditbox in the collection.
*** 
> RealEditbox **previousItem**( RealEditbox **obj** )
> 
> Returns the RealEditbox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| RealEditbox | obj | The index of the RealEditbox that follows the desired RealEditbox. |

*** 
> RealEditbox **nextItem**( RealEditbox **obj** )
> 
> Returns the RealEditbox whose index follows the specified RealEditbox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| RealEditbox | obj | The RealEditbox whose index comes before the desired RealEditbox. |

*** 
> RealEditbox **anyItem**()
> 
> Returns any RealEditbox in the collection.
*** 
> RealEditbox **everyItem**()
> 
> Returns every RealEditbox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the RealEditbox.
*** 
> RealEditbox **[]**( Number **index** )
> 
> Returns the RealEditbox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


