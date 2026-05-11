# PercentEditboxes
A collection of percent editboxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> PercentEditbox **add**( Object **withProperties** )
> 
> Creates a new PercentEditbox.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new PercentEditbox (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the PercentEditbox.
*** 
> PercentEditbox **item**( Mixed **index** )
> 
> Returns the PercentEditbox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> PercentEditbox **itemByID**( Number **id** )
> 
> Returns the PercentEditbox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> PercentEditbox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PercentEditboxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PercentEditbox, index, or name at the beginning of the range. Can accept: PercentEditbox, Long Integer or String. |
| Mixed | to | The PercentEditbox, index, or name at the end of the range. Can accept: PercentEditbox, Long Integer or String. |

*** 
> PercentEditbox **firstItem**()
> 
> Returns the first PercentEditbox in the collection.
*** 
> PercentEditbox **lastItem**()
> 
> Returns the last PercentEditbox in the collection.
*** 
> PercentEditbox **middleItem**()
> 
> Returns the middle PercentEditbox in the collection.
*** 
> PercentEditbox **previousItem**( PercentEditbox **obj** )
> 
> Returns the PercentEditbox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PercentEditbox | obj | The index of the PercentEditbox that follows the desired PercentEditbox. |

*** 
> PercentEditbox **nextItem**( PercentEditbox **obj** )
> 
> Returns the PercentEditbox whose index follows the specified PercentEditbox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PercentEditbox | obj | The PercentEditbox whose index comes before the desired PercentEditbox. |

*** 
> PercentEditbox **anyItem**()
> 
> Returns any PercentEditbox in the collection.
*** 
> PercentEditbox **everyItem**()
> 
> Returns every PercentEditbox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PercentEditbox.
*** 
> PercentEditbox **[]**( Number **index** )
> 
> Returns the PercentEditbox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


