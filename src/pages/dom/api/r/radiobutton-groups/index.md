# RadiobuttonGroups
A collection of radiobutton groups.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> RadiobuttonGroup **add**( Object **withProperties** )
> 
> Creates a new RadiobuttonGroup.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new RadiobuttonGroup (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the RadiobuttonGroup.
*** 
> RadiobuttonGroup **item**( Mixed **index** )
> 
> Returns the RadiobuttonGroup with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> RadiobuttonGroup **itemByID**( Number **id** )
> 
> Returns the RadiobuttonGroup with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> RadiobuttonGroup **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the RadiobuttonGroups within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The RadiobuttonGroup, index, or name at the beginning of the range. Can accept: RadiobuttonGroup, Long Integer or String. |
| Mixed | to | The RadiobuttonGroup, index, or name at the end of the range. Can accept: RadiobuttonGroup, Long Integer or String. |

*** 
> RadiobuttonGroup **firstItem**()
> 
> Returns the first RadiobuttonGroup in the collection.
*** 
> RadiobuttonGroup **lastItem**()
> 
> Returns the last RadiobuttonGroup in the collection.
*** 
> RadiobuttonGroup **middleItem**()
> 
> Returns the middle RadiobuttonGroup in the collection.
*** 
> RadiobuttonGroup **previousItem**( RadiobuttonGroup **obj** )
> 
> Returns the RadiobuttonGroup with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| RadiobuttonGroup | obj | The index of the RadiobuttonGroup that follows the desired RadiobuttonGroup. |

*** 
> RadiobuttonGroup **nextItem**( RadiobuttonGroup **obj** )
> 
> Returns the RadiobuttonGroup whose index follows the specified RadiobuttonGroup in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| RadiobuttonGroup | obj | The RadiobuttonGroup whose index comes before the desired RadiobuttonGroup. |

*** 
> RadiobuttonGroup **anyItem**()
> 
> Returns any RadiobuttonGroup in the collection.
*** 
> RadiobuttonGroup **everyItem**()
> 
> Returns every RadiobuttonGroup in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the RadiobuttonGroup.
*** 
> RadiobuttonGroup **[]**( Number **index** )
> 
> Returns the RadiobuttonGroup with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


