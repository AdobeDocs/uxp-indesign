# Widgets
A collection of widgets.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Widget.
*** 
> Widget **item**( Mixed **index** )
> 
> Returns the Widget with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Widget **itemByID**( Number **id** )
> 
> Returns the Widget with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Widget **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Widgets within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Widget, index, or name at the beginning of the range. Can accept: Widget, Long Integer or String. |
| Mixed | to | The Widget, index, or name at the end of the range. Can accept: Widget, Long Integer or String. |

*** 
> Widget **firstItem**()
> 
> Returns the first Widget in the collection.
*** 
> Widget **lastItem**()
> 
> Returns the last Widget in the collection.
*** 
> Widget **middleItem**()
> 
> Returns the middle Widget in the collection.
*** 
> Widget **previousItem**( Widget **obj** )
> 
> Returns the Widget with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Widget | obj | The index of the Widget that follows the desired Widget. |

*** 
> Widget **nextItem**( Widget **obj** )
> 
> Returns the Widget whose index follows the specified Widget in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Widget | obj | The Widget whose index comes before the desired Widget. |

*** 
> Widget **anyItem**()
> 
> Returns any Widget in the collection.
*** 
> Widget **everyItem**()
> 
> Returns every Widget in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Widget.
*** 
> Widget **[]**( Number **index** )
> 
> Returns the Widget with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


