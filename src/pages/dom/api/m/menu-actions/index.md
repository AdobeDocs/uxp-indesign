# MenuActions
A collection of menu actions.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the MenuAction.
*** 
> MenuAction **item**( Mixed **index** )
> 
> Returns the MenuAction with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> MenuAction **itemByName**( String **name** )
> 
> Returns the MenuAction with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> MenuAction **itemByID**( Number **id** )
> 
> Returns the MenuAction with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> MenuAction **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MenuActions within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MenuAction, index, or name at the beginning of the range. Can accept: MenuAction, Long Integer or String. |
| Mixed | to | The MenuAction, index, or name at the end of the range. Can accept: MenuAction, Long Integer or String. |

*** 
> MenuAction **firstItem**()
> 
> Returns the first MenuAction in the collection.
*** 
> MenuAction **lastItem**()
> 
> Returns the last MenuAction in the collection.
*** 
> MenuAction **middleItem**()
> 
> Returns the middle MenuAction in the collection.
*** 
> MenuAction **previousItem**( MenuAction **obj** )
> 
> Returns the MenuAction with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MenuAction | obj | The index of the MenuAction that follows the desired MenuAction. |

*** 
> MenuAction **nextItem**( MenuAction **obj** )
> 
> Returns the MenuAction whose index follows the specified MenuAction in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MenuAction | obj | The MenuAction whose index comes before the desired MenuAction. |

*** 
> MenuAction **anyItem**()
> 
> Returns any MenuAction in the collection.
*** 
> MenuAction **everyItem**()
> 
> Returns every MenuAction in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the MenuAction.
*** 
> MenuAction **[]**( Number **index** )
> 
> Returns the MenuAction with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


