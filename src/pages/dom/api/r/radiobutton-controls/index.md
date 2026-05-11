# RadiobuttonControls
A collection of individual radiobutton controls.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> RadiobuttonControl **add**( Object **withProperties** )
> 
> Creates a new RadiobuttonControl.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new RadiobuttonControl (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the RadiobuttonControl.
*** 
> RadiobuttonControl **item**( Mixed **index** )
> 
> Returns the RadiobuttonControl with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> RadiobuttonControl **itemByID**( Number **id** )
> 
> Returns the RadiobuttonControl with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> RadiobuttonControl **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the RadiobuttonControls within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The RadiobuttonControl, index, or name at the beginning of the range. Can accept: RadiobuttonControl, Long Integer or String. |
| Mixed | to | The RadiobuttonControl, index, or name at the end of the range. Can accept: RadiobuttonControl, Long Integer or String. |

*** 
> RadiobuttonControl **firstItem**()
> 
> Returns the first RadiobuttonControl in the collection.
*** 
> RadiobuttonControl **lastItem**()
> 
> Returns the last RadiobuttonControl in the collection.
*** 
> RadiobuttonControl **middleItem**()
> 
> Returns the middle RadiobuttonControl in the collection.
*** 
> RadiobuttonControl **previousItem**( RadiobuttonControl **obj** )
> 
> Returns the RadiobuttonControl with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| RadiobuttonControl | obj | The index of the RadiobuttonControl that follows the desired RadiobuttonControl. |

*** 
> RadiobuttonControl **nextItem**( RadiobuttonControl **obj** )
> 
> Returns the RadiobuttonControl whose index follows the specified RadiobuttonControl in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| RadiobuttonControl | obj | The RadiobuttonControl whose index comes before the desired RadiobuttonControl. |

*** 
> RadiobuttonControl **anyItem**()
> 
> Returns any RadiobuttonControl in the collection.
*** 
> RadiobuttonControl **everyItem**()
> 
> Returns every RadiobuttonControl in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the RadiobuttonControl.
*** 
> RadiobuttonControl **[]**( Number **index** )
> 
> Returns the RadiobuttonControl with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


