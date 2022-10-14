# BookContents
A collection of book content objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> BookContent **add**( File **fullName**, Number **at**, Object **withProperties** )
> 
> Creates a new book content object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | fullName | The full path name of the new book content object. |
| Number | at | The location of the book content object within the book. (Optional) |
| Object | withProperties | Initial values for properties of the new BookContent (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the BookContent.
*** 
> BookContent **item**( Mixed **index** )
> 
> Returns the BookContent with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> BookContent **itemByName**( String **name** )
> 
> Returns the BookContent with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> BookContent **itemByID**( Number **id** )
> 
> Returns the BookContent with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> BookContent **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the BookContents within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The BookContent, index, or name at the beginning of the range. Can accept: BookContent, Long Integer or String. |
| Mixed | to | The BookContent, index, or name at the end of the range. Can accept: BookContent, Long Integer or String. |

*** 
> BookContent **firstItem**()
> 
> Returns the first BookContent in the collection.
*** 
> BookContent **lastItem**()
> 
> Returns the last BookContent in the collection.
*** 
> BookContent **middleItem**()
> 
> Returns the middle BookContent in the collection.
*** 
> BookContent **previousItem**( BookContent **obj** )
> 
> Returns the BookContent with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| BookContent | obj | The index of the BookContent that follows the desired BookContent. |

*** 
> BookContent **nextItem**( BookContent **obj** )
> 
> Returns the BookContent whose index follows the specified BookContent in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| BookContent | obj | The BookContent whose index comes before the desired BookContent. |

*** 
> BookContent **anyItem**()
> 
> Returns any BookContent in the collection.
*** 
> BookContent **everyItem**()
> 
> Returns every BookContent in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the BookContent.
*** 
> BookContent **[]**( Number **index** )
> 
> Returns the BookContent with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


