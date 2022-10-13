# ArticleMembers
A collection of article members.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> ArticleMember **add**( PageItem **itemRef**, LocationOptions **at**, ArticleMember **reference**, Object **withProperties** )
> 
> Adds a new member.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | itemRef | page item to be added to article |
| LocationOptions | at | The location relative to the reference object or within the containing object. (Optional) |
| ArticleMember | reference | The reference object. Note: Required when the to value specifies before or after. (Optional) |
| Object | withProperties | Initial values for properties of the new ArticleMember (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the ArticleMember.
*** 
> ArticleMember **item**( Mixed **index** )
> 
> Returns the ArticleMember with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> ArticleMember **itemByID**( Number **id** )
> 
> Returns the ArticleMember with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> ArticleMember **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ArticleMembers within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ArticleMember, index, or name at the beginning of the range. Can accept: ArticleMember, Long Integer or String. |
| Mixed | to | The ArticleMember, index, or name at the end of the range. Can accept: ArticleMember, Long Integer or String. |

*** 
> ArticleMember **firstItem**()
> 
> Returns the first ArticleMember in the collection.
*** 
> ArticleMember **lastItem**()
> 
> Returns the last ArticleMember in the collection.
*** 
> ArticleMember **middleItem**()
> 
> Returns the middle ArticleMember in the collection.
*** 
> ArticleMember **previousItem**( ArticleMember **obj** )
> 
> Returns the ArticleMember with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ArticleMember | obj | The index of the ArticleMember that follows the desired ArticleMember. |

*** 
> ArticleMember **nextItem**( ArticleMember **obj** )
> 
> Returns the ArticleMember whose index follows the specified ArticleMember in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ArticleMember | obj | The ArticleMember whose index comes before the desired ArticleMember. |

*** 
> ArticleMember **anyItem**()
> 
> Returns any ArticleMember in the collection.
*** 
> ArticleMember **everyItem**()
> 
> Returns every ArticleMember in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ArticleMember.
*** 
> ArticleMember **[]**( Number **index** )
> 
> Returns the ArticleMember with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


