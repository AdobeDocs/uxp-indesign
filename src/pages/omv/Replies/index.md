# Replies
A collection of reply objects

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Reply.
*** 
> Reply **item**( Mixed **index** )
> 
> Returns the Reply with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Reply **itemByName**( String **name** )
> 
> Returns the Reply with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Reply **itemByID**( Number **id** )
> 
> Returns the Reply with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Reply **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Replies within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Reply, index, or name at the beginning of the range. Can accept: Reply, Long Integer or String. |
| Mixed | to | The Reply, index, or name at the end of the range. Can accept: Reply, Long Integer or String. |

*** 
> Reply **firstItem**()
> 
> Returns the first Reply in the collection.
*** 
> Reply **lastItem**()
> 
> Returns the last Reply in the collection.
*** 
> Reply **middleItem**()
> 
> Returns the middle Reply in the collection.
*** 
> Reply **previousItem**( Reply **obj** )
> 
> Returns the Reply with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Reply | obj | The index of the Reply that follows the desired Reply. |

*** 
> Reply **nextItem**( Reply **obj** )
> 
> Returns the Reply whose index follows the specified Reply in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Reply | obj | The Reply whose index comes before the desired Reply. |

*** 
> Reply **anyItem**()
> 
> Returns any Reply in the collection.
*** 
> Reply **everyItem**()
> 
> Returns every Reply in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Reply.
*** 
> Reply **[]**( Number **index** )
> 
> Returns the Reply with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


