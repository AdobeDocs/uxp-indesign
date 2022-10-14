# IntegerEditboxes
A collection of integer editboxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> IntegerEditbox **add**( Object **withProperties** )
> 
> Creates a new IntegerEditbox.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new IntegerEditbox (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the IntegerEditbox.
*** 
> IntegerEditbox **item**( Mixed **index** )
> 
> Returns the IntegerEditbox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> IntegerEditbox **itemByID**( Number **id** )
> 
> Returns the IntegerEditbox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> IntegerEditbox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the IntegerEditboxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The IntegerEditbox, index, or name at the beginning of the range. Can accept: IntegerEditbox, Long Integer or String. |
| Mixed | to | The IntegerEditbox, index, or name at the end of the range. Can accept: IntegerEditbox, Long Integer or String. |

*** 
> IntegerEditbox **firstItem**()
> 
> Returns the first IntegerEditbox in the collection.
*** 
> IntegerEditbox **lastItem**()
> 
> Returns the last IntegerEditbox in the collection.
*** 
> IntegerEditbox **middleItem**()
> 
> Returns the middle IntegerEditbox in the collection.
*** 
> IntegerEditbox **previousItem**( IntegerEditbox **obj** )
> 
> Returns the IntegerEditbox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| IntegerEditbox | obj | The index of the IntegerEditbox that follows the desired IntegerEditbox. |

*** 
> IntegerEditbox **nextItem**( IntegerEditbox **obj** )
> 
> Returns the IntegerEditbox whose index follows the specified IntegerEditbox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| IntegerEditbox | obj | The IntegerEditbox whose index comes before the desired IntegerEditbox. |

*** 
> IntegerEditbox **anyItem**()
> 
> Returns any IntegerEditbox in the collection.
*** 
> IntegerEditbox **everyItem**()
> 
> Returns every IntegerEditbox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the IntegerEditbox.
*** 
> IntegerEditbox **[]**( Number **index** )
> 
> Returns the IntegerEditbox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


