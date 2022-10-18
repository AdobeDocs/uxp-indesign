# Tables
A collection of tables.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Table.
*** 
> Table **add**( LocationOptions **to**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new table.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location of the new table relative to the reference object or within the container object.  (Optional) |
| Mixed | reference | The reference object. Note: Required when the to value specifies before or after. Can accept: Table, XMLElement, XmlStory, TextFrame, EndnoteTextFrame, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story or Cell. (Optional) |
| Object | withProperties | Initial values for properties of the new Table (Optional) |

*** 
> Table **item**( Mixed **index** )
> 
> Returns the Table with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Table **itemByName**( String **name** )
> 
> Returns the Table with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Table **itemByID**( Number **id** )
> 
> Returns the Table with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Table **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Tables within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Table, index, or name at the beginning of the range. Can accept: Table, Long Integer or String. |
| Mixed | to | The Table, index, or name at the end of the range. Can accept: Table, Long Integer or String. |

*** 
> Table **firstItem**()
> 
> Returns the first Table in the collection.
*** 
> Table **lastItem**()
> 
> Returns the last Table in the collection.
*** 
> Table **middleItem**()
> 
> Returns the middle Table in the collection.
*** 
> Table **previousItem**( Table **obj** )
> 
> Returns the Table with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Table | obj | The index of the Table that follows the desired Table. |

*** 
> Table **nextItem**( Table **obj** )
> 
> Returns the Table whose index follows the specified Table in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Table | obj | The Table whose index comes before the desired Table. |

*** 
> Table **anyItem**()
> 
> Returns any Table in the collection.
*** 
> Table **everyItem**()
> 
> Returns every Table in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Table.
*** 
> Table **[]**( Number **index** )
> 
> Returns the Table with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


