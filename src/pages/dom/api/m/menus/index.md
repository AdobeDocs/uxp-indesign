# Menus
A collection of menus.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Menu.
*** 
> Menu **item**( Mixed **index** )
> 
> Returns the Menu with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Menu **itemByName**( String **name** )
> 
> Returns the Menu with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Menu **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Menus within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Menu, index, or name at the beginning of the range. Can accept: Menu, Long Integer or String. |
| Mixed | to | The Menu, index, or name at the end of the range. Can accept: Menu, Long Integer or String. |

*** 
> Menu **firstItem**()
> 
> Returns the first Menu in the collection.
*** 
> Menu **lastItem**()
> 
> Returns the last Menu in the collection.
*** 
> Menu **middleItem**()
> 
> Returns the middle Menu in the collection.
*** 
> Menu **previousItem**( Menu **obj** )
> 
> Returns the Menu with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Menu | obj | The index of the Menu that follows the desired Menu. |

*** 
> Menu **nextItem**( Menu **obj** )
> 
> Returns the Menu whose index follows the specified Menu in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Menu | obj | The Menu whose index comes before the desired Menu. |

*** 
> Menu **anyItem**()
> 
> Returns any Menu in the collection.
*** 
> Menu **everyItem**()
> 
> Returns every Menu in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Menu.
*** 
> Menu **[]**( Number **index** )
> 
> Returns the Menu with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


