# ArticleChildren
A collection of group items that are also part of an article.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the ArticleChild.
*** 
> ArticleChild **item**( Mixed **index** )
> 
> Returns the ArticleChild with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> ArticleChild **itemByID**( Number **id** )
> 
> Returns the ArticleChild with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> ArticleChild **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ArticleChildren within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ArticleChild, index, or name at the beginning of the range. Can accept: ArticleChild, Long Integer or String. |
| Mixed | to | The ArticleChild, index, or name at the end of the range. Can accept: ArticleChild, Long Integer or String. |

*** 
> ArticleChild **firstItem**()
> 
> Returns the first ArticleChild in the collection.
*** 
> ArticleChild **lastItem**()
> 
> Returns the last ArticleChild in the collection.
*** 
> ArticleChild **middleItem**()
> 
> Returns the middle ArticleChild in the collection.
*** 
> ArticleChild **previousItem**( ArticleChild **obj** )
> 
> Returns the ArticleChild with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ArticleChild | obj | The index of the ArticleChild that follows the desired ArticleChild. |

*** 
> ArticleChild **nextItem**( ArticleChild **obj** )
> 
> Returns the ArticleChild whose index follows the specified ArticleChild in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ArticleChild | obj | The ArticleChild whose index comes before the desired ArticleChild. |

*** 
> ArticleChild **anyItem**()
> 
> Returns any ArticleChild in the collection.
*** 
> ArticleChild **everyItem**()
> 
> Returns every ArticleChild in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ArticleChild.
*** 
> ArticleChild **[]**( Number **index** )
> 
> Returns the ArticleChild with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


