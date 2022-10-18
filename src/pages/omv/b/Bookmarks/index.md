# Bookmarks
A collection of bookmarks.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Bookmark **add**( Mixed **destination**, Object **withProperties** )
> 
> Creates a new bookmark.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | destination | The bookmark destination. Can accept: HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination or Page. |
| Object | withProperties | Initial values for properties of the new Bookmark (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Bookmark.
*** 
> Bookmark **item**( Mixed **index** )
> 
> Returns the Bookmark with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Bookmark **itemByName**( String **name** )
> 
> Returns the Bookmark with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Bookmark **itemByID**( Number **id** )
> 
> Returns the Bookmark with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Bookmark **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Bookmarks within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Bookmark, index, or name at the beginning of the range. Can accept: Bookmark, Long Integer or String. |
| Mixed | to | The Bookmark, index, or name at the end of the range. Can accept: Bookmark, Long Integer or String. |

*** 
> Bookmark **firstItem**()
> 
> Returns the first Bookmark in the collection.
*** 
> Bookmark **lastItem**()
> 
> Returns the last Bookmark in the collection.
*** 
> Bookmark **middleItem**()
> 
> Returns the middle Bookmark in the collection.
*** 
> Bookmark **previousItem**( Bookmark **obj** )
> 
> Returns the Bookmark with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Bookmark | obj | The index of the Bookmark that follows the desired Bookmark. |

*** 
> Bookmark **nextItem**( Bookmark **obj** )
> 
> Returns the Bookmark whose index follows the specified Bookmark in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Bookmark | obj | The Bookmark whose index comes before the desired Bookmark. |

*** 
> Bookmark **anyItem**()
> 
> Returns any Bookmark in the collection.
*** 
> Bookmark **everyItem**()
> 
> Returns every Bookmark in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Bookmark.
*** 
> Bookmark **[]**( Number **index** )
> 
> Returns the Bookmark with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


