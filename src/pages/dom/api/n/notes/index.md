# Notes
A collection of notes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Note.
*** 
> Note **add**( LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new note.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | at | The location relative to the reference object or within the containing object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter specifies before or after. Can accept: Note or InsertionPoint. (Optional) |
| Object | withProperties | Initial values for properties of the new Note (Optional) |

*** 
> Note **item**( Mixed **index** )
> 
> Returns the Note with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Note **itemByName**( String **name** )
> 
> Returns the Note with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Note **itemByID**( Number **id** )
> 
> Returns the Note with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Note **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Notes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Note, index, or name at the beginning of the range. Can accept: Note, Long Integer or String. |
| Mixed | to | The Note, index, or name at the end of the range. Can accept: Note, Long Integer or String. |

*** 
> Note **firstItem**()
> 
> Returns the first Note in the collection.
*** 
> Note **lastItem**()
> 
> Returns the last Note in the collection.
*** 
> Note **middleItem**()
> 
> Returns the middle Note in the collection.
*** 
> Note **previousItem**( Note **obj** )
> 
> Returns the Note with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Note | obj | The index of the Note that follows the desired Note. |

*** 
> Note **nextItem**( Note **obj** )
> 
> Returns the Note whose index follows the specified Note in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Note | obj | The Note whose index comes before the desired Note. |

*** 
> Note **anyItem**()
> 
> Returns any Note in the collection.
*** 
> Note **everyItem**()
> 
> Returns every Note in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Note.
*** 
> Note **[]**( Number **index** )
> 
> Returns the Note with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


