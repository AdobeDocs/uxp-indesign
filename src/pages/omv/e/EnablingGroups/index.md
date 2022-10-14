# EnablingGroups
A collection of enabling groups.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> EnablingGroup **add**( Object **withProperties** )
> 
> Creates a new EnablingGroup.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new EnablingGroup (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the EnablingGroup.
*** 
> EnablingGroup **item**( Mixed **index** )
> 
> Returns the EnablingGroup with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> EnablingGroup **itemByID**( Number **id** )
> 
> Returns the EnablingGroup with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> EnablingGroup **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the EnablingGroups within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The EnablingGroup, index, or name at the beginning of the range. Can accept: EnablingGroup, Long Integer or String. |
| Mixed | to | The EnablingGroup, index, or name at the end of the range. Can accept: EnablingGroup, Long Integer or String. |

*** 
> EnablingGroup **firstItem**()
> 
> Returns the first EnablingGroup in the collection.
*** 
> EnablingGroup **lastItem**()
> 
> Returns the last EnablingGroup in the collection.
*** 
> EnablingGroup **middleItem**()
> 
> Returns the middle EnablingGroup in the collection.
*** 
> EnablingGroup **previousItem**( EnablingGroup **obj** )
> 
> Returns the EnablingGroup with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| EnablingGroup | obj | The index of the EnablingGroup that follows the desired EnablingGroup. |

*** 
> EnablingGroup **nextItem**( EnablingGroup **obj** )
> 
> Returns the EnablingGroup whose index follows the specified EnablingGroup in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| EnablingGroup | obj | The EnablingGroup whose index comes before the desired EnablingGroup. |

*** 
> EnablingGroup **anyItem**()
> 
> Returns any EnablingGroup in the collection.
*** 
> EnablingGroup **everyItem**()
> 
> Returns every EnablingGroup in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the EnablingGroup.
*** 
> EnablingGroup **[]**( Number **index** )
> 
> Returns the EnablingGroup with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


