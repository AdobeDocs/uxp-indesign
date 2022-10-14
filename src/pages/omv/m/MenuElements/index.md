# MenuElements
A collection of menu elements.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the MenuElement.
*** 
> MenuElement **item**( Mixed **index** )
> 
> Returns the MenuElement with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> MenuElement **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MenuElements within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MenuElement, index, or name at the beginning of the range. Can accept: MenuElement, Long Integer or String. |
| Mixed | to | The MenuElement, index, or name at the end of the range. Can accept: MenuElement, Long Integer or String. |

*** 
> MenuElement **firstItem**()
> 
> Returns the first MenuElement in the collection.
*** 
> MenuElement **lastItem**()
> 
> Returns the last MenuElement in the collection.
*** 
> MenuElement **middleItem**()
> 
> Returns the middle MenuElement in the collection.
*** 
> MenuElement **previousItem**( MenuElement **obj** )
> 
> Returns the MenuElement with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MenuElement | obj | The index of the MenuElement that follows the desired MenuElement. |

*** 
> MenuElement **nextItem**( MenuElement **obj** )
> 
> Returns the MenuElement whose index follows the specified MenuElement in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MenuElement | obj | The MenuElement whose index comes before the desired MenuElement. |

*** 
> MenuElement **anyItem**()
> 
> Returns any MenuElement in the collection.
*** 
> MenuElement **everyItem**()
> 
> Returns every MenuElement in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the MenuElement.
*** 
> MenuElement **[]**( Number **index** )
> 
> Returns the MenuElement with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


