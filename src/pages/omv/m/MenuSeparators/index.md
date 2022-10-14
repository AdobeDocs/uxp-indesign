# MenuSeparators
A collection of menu separators.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> MenuSeparator **add**( LocationOptions **at**, MenuElement **reference**, Object **withProperties** )
> 
> Creates a new menu separator.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | at | The location of the menu separator relative to the reference object or within the containing object. (Optional) |
| MenuElement | reference | The reference object. Note: Required when the at parameter specifies before or after. (Optional) |
| Object | withProperties | Initial values for properties of the new MenuSeparator (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the MenuSeparator.
*** 
> MenuSeparator **item**( Mixed **index** )
> 
> Returns the MenuSeparator with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> MenuSeparator **itemByID**( Number **id** )
> 
> Returns the MenuSeparator with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> MenuSeparator **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MenuSeparators within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MenuSeparator, index, or name at the beginning of the range. Can accept: MenuSeparator, Long Integer or String. |
| Mixed | to | The MenuSeparator, index, or name at the end of the range. Can accept: MenuSeparator, Long Integer or String. |

*** 
> MenuSeparator **firstItem**()
> 
> Returns the first MenuSeparator in the collection.
*** 
> MenuSeparator **lastItem**()
> 
> Returns the last MenuSeparator in the collection.
*** 
> MenuSeparator **middleItem**()
> 
> Returns the middle MenuSeparator in the collection.
*** 
> MenuSeparator **previousItem**( MenuSeparator **obj** )
> 
> Returns the MenuSeparator with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MenuSeparator | obj | The index of the MenuSeparator that follows the desired MenuSeparator. |

*** 
> MenuSeparator **nextItem**( MenuSeparator **obj** )
> 
> Returns the MenuSeparator whose index follows the specified MenuSeparator in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MenuSeparator | obj | The MenuSeparator whose index comes before the desired MenuSeparator. |

*** 
> MenuSeparator **anyItem**()
> 
> Returns any MenuSeparator in the collection.
*** 
> MenuSeparator **everyItem**()
> 
> Returns every MenuSeparator in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the MenuSeparator.
*** 
> MenuSeparator **[]**( Number **index** )
> 
> Returns the MenuSeparator with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


