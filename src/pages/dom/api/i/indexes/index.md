# Indexes
A collection of indexes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Index **add**( Object **withProperties** )
> 
> Creates a new Index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new Index (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Index.
*** 
> Index **item**( Mixed **index** )
> 
> Returns the Index with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Index **itemByName**( String **name** )
> 
> Returns the Index with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Index **itemByID**( Number **id** )
> 
> Returns the Index with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Index **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Indexes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Index, index, or name at the beginning of the range. Can accept: Index, Long Integer or String. |
| Mixed | to | The Index, index, or name at the end of the range. Can accept: Index, Long Integer or String. |

*** 
> Index **firstItem**()
> 
> Returns the first Index in the collection.
*** 
> Index **lastItem**()
> 
> Returns the last Index in the collection.
*** 
> Index **middleItem**()
> 
> Returns the middle Index in the collection.
*** 
> Index **previousItem**( Index **obj** )
> 
> Returns the Index with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Index | obj | The index of the Index that follows the desired Index. |

*** 
> Index **nextItem**( Index **obj** )
> 
> Returns the Index whose index follows the specified Index in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Index | obj | The Index whose index comes before the desired Index. |

*** 
> Index **anyItem**()
> 
> Returns any Index in the collection.
*** 
> Index **everyItem**()
> 
> Returns every Index in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Index.
*** 
> Index **[]**( Number **index** )
> 
> Returns the Index with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


