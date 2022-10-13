# ObjectStyleGroups
A collection of object style groups.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> ObjectStyleGroup **add**( Object **withProperties** )
> 
> Creates a new ObjectStyleGroup.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new ObjectStyleGroup (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the ObjectStyleGroup.
*** 
> ObjectStyleGroup **item**( Mixed **index** )
> 
> Returns the ObjectStyleGroup with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> ObjectStyleGroup **itemByName**( String **name** )
> 
> Returns the ObjectStyleGroup with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> ObjectStyleGroup **itemByID**( Number **id** )
> 
> Returns the ObjectStyleGroup with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> ObjectStyleGroup **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ObjectStyleGroups within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ObjectStyleGroup, index, or name at the beginning of the range. Can accept: ObjectStyleGroup, Long Integer or String. |
| Mixed | to | The ObjectStyleGroup, index, or name at the end of the range. Can accept: ObjectStyleGroup, Long Integer or String. |

*** 
> ObjectStyleGroup **firstItem**()
> 
> Returns the first ObjectStyleGroup in the collection.
*** 
> ObjectStyleGroup **lastItem**()
> 
> Returns the last ObjectStyleGroup in the collection.
*** 
> ObjectStyleGroup **middleItem**()
> 
> Returns the middle ObjectStyleGroup in the collection.
*** 
> ObjectStyleGroup **previousItem**( ObjectStyleGroup **obj** )
> 
> Returns the ObjectStyleGroup with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ObjectStyleGroup | obj | The index of the ObjectStyleGroup that follows the desired ObjectStyleGroup. |

*** 
> ObjectStyleGroup **nextItem**( ObjectStyleGroup **obj** )
> 
> Returns the ObjectStyleGroup whose index follows the specified ObjectStyleGroup in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ObjectStyleGroup | obj | The ObjectStyleGroup whose index comes before the desired ObjectStyleGroup. |

*** 
> ObjectStyleGroup **anyItem**()
> 
> Returns any ObjectStyleGroup in the collection.
*** 
> ObjectStyleGroup **everyItem**()
> 
> Returns every ObjectStyleGroup in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ObjectStyleGroup.
*** 
> ObjectStyleGroup **[]**( Number **index** )
> 
> Returns the ObjectStyleGroup with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


