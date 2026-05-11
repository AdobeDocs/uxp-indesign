# MenuItems
A collection of menu items.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> MenuItem **add**( MenuAction **associatedMenuAction**, LocationOptions **at**, MenuElement **reference**, Object **withProperties** )
> 
> Creates a new menu item.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MenuAction | associatedMenuAction | The menu action that implements the  menu item. |
| LocationOptions | at | The location of the menu item relative to the reference object or within the containing object. (Optional) |
| MenuElement | reference | The reference object. Note: Required when the at parameter specifies before or after. (Optional) |
| Object | withProperties | Initial values for properties of the new MenuItem (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the MenuItem.
*** 
> MenuItem **item**( Mixed **index** )
> 
> Returns the MenuItem with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> MenuItem **itemByName**( String **name** )
> 
> Returns the MenuItem with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> MenuItem **itemByID**( Number **id** )
> 
> Returns the MenuItem with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> MenuItem **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MenuItems within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MenuItem, index, or name at the beginning of the range. Can accept: MenuItem, Long Integer or String. |
| Mixed | to | The MenuItem, index, or name at the end of the range. Can accept: MenuItem, Long Integer or String. |

*** 
> MenuItem **firstItem**()
> 
> Returns the first MenuItem in the collection.
*** 
> MenuItem **lastItem**()
> 
> Returns the last MenuItem in the collection.
*** 
> MenuItem **middleItem**()
> 
> Returns the middle MenuItem in the collection.
*** 
> MenuItem **previousItem**( MenuItem **obj** )
> 
> Returns the MenuItem with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MenuItem | obj | The index of the MenuItem that follows the desired MenuItem. |

*** 
> MenuItem **nextItem**( MenuItem **obj** )
> 
> Returns the MenuItem whose index follows the specified MenuItem in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MenuItem | obj | The MenuItem whose index comes before the desired MenuItem. |

*** 
> MenuItem **anyItem**()
> 
> Returns any MenuItem in the collection.
*** 
> MenuItem **everyItem**()
> 
> Returns every MenuItem in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the MenuItem.
*** 
> MenuItem **[]**( Number **index** )
> 
> Returns the MenuItem with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


