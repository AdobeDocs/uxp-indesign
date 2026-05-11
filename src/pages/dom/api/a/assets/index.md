# Assets
A collection of object library assets.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Asset.
*** 
> Asset **item**( Mixed **index** )
> 
> Returns the Asset with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Asset **itemByName**( String **name** )
> 
> Returns the Asset with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Asset **itemByID**( Number **id** )
> 
> Returns the Asset with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Asset **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Assets within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Asset, index, or name at the beginning of the range. Can accept: Asset, Long Integer or String. |
| Mixed | to | The Asset, index, or name at the end of the range. Can accept: Asset, Long Integer or String. |

*** 
> Asset **firstItem**()
> 
> Returns the first Asset in the collection.
*** 
> Asset **lastItem**()
> 
> Returns the last Asset in the collection.
*** 
> Asset **middleItem**()
> 
> Returns the middle Asset in the collection.
*** 
> Asset **previousItem**( Asset **obj** )
> 
> Returns the Asset with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Asset | obj | The index of the Asset that follows the desired Asset. |

*** 
> Asset **nextItem**( Asset **obj** )
> 
> Returns the Asset whose index follows the specified Asset in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Asset | obj | The Asset whose index comes before the desired Asset. |

*** 
> Asset **anyItem**()
> 
> Returns any Asset in the collection.
*** 
> Asset **everyItem**()
> 
> Returns every Asset in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Asset.
*** 
> Asset **[]**( Number **index** )
> 
> Returns the Asset with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


