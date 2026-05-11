# WMFs
A collection of WMF graphics.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the WMF.
*** 
> WMF **item**( Mixed **index** )
> 
> Returns the WMF with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> WMF **itemByName**( String **name** )
> 
> Returns the WMF with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> WMF **itemByID**( Number **id** )
> 
> Returns the WMF with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> WMF **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the WMFs within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The WMF, index, or name at the beginning of the range. Can accept: WMF, Long Integer or String. |
| Mixed | to | The WMF, index, or name at the end of the range. Can accept: WMF, Long Integer or String. |

*** 
> WMF **firstItem**()
> 
> Returns the first WMF in the collection.
*** 
> WMF **lastItem**()
> 
> Returns the last WMF in the collection.
*** 
> WMF **middleItem**()
> 
> Returns the middle WMF in the collection.
*** 
> WMF **previousItem**( WMF **obj** )
> 
> Returns the WMF with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| WMF | obj | The index of the WMF that follows the desired WMF. |

*** 
> WMF **nextItem**( WMF **obj** )
> 
> Returns the WMF whose index follows the specified WMF in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| WMF | obj | The WMF whose index comes before the desired WMF. |

*** 
> WMF **anyItem**()
> 
> Returns any WMF in the collection.
*** 
> WMF **everyItem**()
> 
> Returns every WMF in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the WMF.
*** 
> WMF **[]**( Number **index** )
> 
> Returns the WMF with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


