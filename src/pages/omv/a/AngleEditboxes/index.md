# AngleEditboxes
A collection of angle editboxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> AngleEditbox **add**( Object **withProperties** )
> 
> Creates a new AngleEditbox.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new AngleEditbox (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the AngleEditbox.
*** 
> AngleEditbox **item**( Mixed **index** )
> 
> Returns the AngleEditbox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> AngleEditbox **itemByID**( Number **id** )
> 
> Returns the AngleEditbox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> AngleEditbox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the AngleEditboxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The AngleEditbox, index, or name at the beginning of the range. Can accept: AngleEditbox, Long Integer or String. |
| Mixed | to | The AngleEditbox, index, or name at the end of the range. Can accept: AngleEditbox, Long Integer or String. |

*** 
> AngleEditbox **firstItem**()
> 
> Returns the first AngleEditbox in the collection.
*** 
> AngleEditbox **lastItem**()
> 
> Returns the last AngleEditbox in the collection.
*** 
> AngleEditbox **middleItem**()
> 
> Returns the middle AngleEditbox in the collection.
*** 
> AngleEditbox **previousItem**( AngleEditbox **obj** )
> 
> Returns the AngleEditbox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| AngleEditbox | obj | The index of the AngleEditbox that follows the desired AngleEditbox. |

*** 
> AngleEditbox **nextItem**( AngleEditbox **obj** )
> 
> Returns the AngleEditbox whose index follows the specified AngleEditbox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| AngleEditbox | obj | The AngleEditbox whose index comes before the desired AngleEditbox. |

*** 
> AngleEditbox **anyItem**()
> 
> Returns any AngleEditbox in the collection.
*** 
> AngleEditbox **everyItem**()
> 
> Returns every AngleEditbox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the AngleEditbox.
*** 
> AngleEditbox **[]**( Number **index** )
> 
> Returns the AngleEditbox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


