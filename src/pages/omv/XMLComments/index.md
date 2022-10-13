# XMLComments
A collection of XML comments.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> XMLComment **add**( String **value**, Mixed **storyOffset**, Object **withProperties** )
> 
> Creates a new XML comment.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | value | The value of the comment. (Optional) |
| Mixed | storyOffset | The location within the story, specified as an insertion point. Can accept: InsertionPoint or Long Integer. (Optional) |
| Object | withProperties | Initial values for properties of the new XMLComment (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the XMLComment.
*** 
> XMLComment **item**( Mixed **index** )
> 
> Returns the XMLComment with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> XMLComment **itemByID**( Number **id** )
> 
> Returns the XMLComment with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> XMLComment **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the XMLComments within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The XMLComment, index, or name at the beginning of the range. Can accept: XMLComment, Long Integer or String. |
| Mixed | to | The XMLComment, index, or name at the end of the range. Can accept: XMLComment, Long Integer or String. |

*** 
> XMLComment **firstItem**()
> 
> Returns the first XMLComment in the collection.
*** 
> XMLComment **lastItem**()
> 
> Returns the last XMLComment in the collection.
*** 
> XMLComment **middleItem**()
> 
> Returns the middle XMLComment in the collection.
*** 
> XMLComment **previousItem**( XMLComment **obj** )
> 
> Returns the XMLComment with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLComment | obj | The index of the XMLComment that follows the desired XMLComment. |

*** 
> XMLComment **nextItem**( XMLComment **obj** )
> 
> Returns the XMLComment whose index follows the specified XMLComment in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLComment | obj | The XMLComment whose index comes before the desired XMLComment. |

*** 
> XMLComment **anyItem**()
> 
> Returns any XMLComment in the collection.
*** 
> XMLComment **everyItem**()
> 
> Returns every XMLComment in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLComment.
*** 
> XMLComment **[]**( Number **index** )
> 
> Returns the XMLComment with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


