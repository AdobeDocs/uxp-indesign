# LayoutWindows
A collection of layout windows.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the LayoutWindow.
*** 
> LayoutWindow **item**( Mixed **index** )
> 
> Returns the LayoutWindow with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> LayoutWindow **itemByName**( String **name** )
> 
> Returns the LayoutWindow with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> LayoutWindow **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the LayoutWindows within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The LayoutWindow, index, or name at the beginning of the range. Can accept: LayoutWindow, Long Integer or String. |
| Mixed | to | The LayoutWindow, index, or name at the end of the range. Can accept: LayoutWindow, Long Integer or String. |

*** 
> LayoutWindow **firstItem**()
> 
> Returns the first LayoutWindow in the collection.
*** 
> LayoutWindow **lastItem**()
> 
> Returns the last LayoutWindow in the collection.
*** 
> LayoutWindow **middleItem**()
> 
> Returns the middle LayoutWindow in the collection.
*** 
> LayoutWindow **previousItem**( LayoutWindow **obj** )
> 
> Returns the LayoutWindow with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LayoutWindow | obj | The index of the LayoutWindow that follows the desired LayoutWindow. |

*** 
> LayoutWindow **nextItem**( LayoutWindow **obj** )
> 
> Returns the LayoutWindow whose index follows the specified LayoutWindow in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LayoutWindow | obj | The LayoutWindow whose index comes before the desired LayoutWindow. |

*** 
> LayoutWindow **anyItem**()
> 
> Returns any LayoutWindow in the collection.
*** 
> LayoutWindow **everyItem**()
> 
> Returns every LayoutWindow in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the LayoutWindow.
*** 
> LayoutWindow **[]**( Number **index** )
> 
> Returns the LayoutWindow with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


