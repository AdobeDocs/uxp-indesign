# Windows
A collection of windows.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Window.
*** 
> Window **add**( Object **withProperties** )
> 
> Creates a new Window.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new Window (Optional) |

*** 
> Window **item**( Mixed **index** )
> 
> Returns the Window with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Window **itemByName**( String **name** )
> 
> Returns the Window with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Window **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Windows within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Window, index, or name at the beginning of the range. Can accept: Window, Long Integer or String. |
| Mixed | to | The Window, index, or name at the end of the range. Can accept: Window, Long Integer or String. |

*** 
> Window **firstItem**()
> 
> Returns the first Window in the collection.
*** 
> Window **lastItem**()
> 
> Returns the last Window in the collection.
*** 
> Window **middleItem**()
> 
> Returns the middle Window in the collection.
*** 
> Window **previousItem**( Window **obj** )
> 
> Returns the Window with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Window | obj | The index of the Window that follows the desired Window. |

*** 
> Window **nextItem**( Window **obj** )
> 
> Returns the Window whose index follows the specified Window in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Window | obj | The Window whose index comes before the desired Window. |

*** 
> Window **anyItem**()
> 
> Returns any Window in the collection.
*** 
> Window **everyItem**()
> 
> Returns every Window in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Window.
*** 
> Window **[]**( Number **index** )
> 
> Returns the Window with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


