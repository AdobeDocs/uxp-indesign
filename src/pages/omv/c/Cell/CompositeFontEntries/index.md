# CompositeFontEntries
A collection of composite font entries.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> CompositeFontEntry **add**( Object **withProperties** )
> 
> Creates a new CompositeFontEntry.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new CompositeFontEntry (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the CompositeFontEntry.
*** 
> CompositeFontEntry **item**( Mixed **index** )
> 
> Returns the CompositeFontEntry with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> CompositeFontEntry **itemByName**( String **name** )
> 
> Returns the CompositeFontEntry with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> CompositeFontEntry **itemByID**( Number **id** )
> 
> Returns the CompositeFontEntry with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> CompositeFontEntry **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the CompositeFontEntries within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The CompositeFontEntry, index, or name at the beginning of the range. Can accept: CompositeFontEntry, Long Integer or String. |
| Mixed | to | The CompositeFontEntry, index, or name at the end of the range. Can accept: CompositeFontEntry, Long Integer or String. |

*** 
> CompositeFontEntry **firstItem**()
> 
> Returns the first CompositeFontEntry in the collection.
*** 
> CompositeFontEntry **lastItem**()
> 
> Returns the last CompositeFontEntry in the collection.
*** 
> CompositeFontEntry **middleItem**()
> 
> Returns the middle CompositeFontEntry in the collection.
*** 
> CompositeFontEntry **previousItem**( CompositeFontEntry **obj** )
> 
> Returns the CompositeFontEntry with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CompositeFontEntry | obj | The index of the CompositeFontEntry that follows the desired CompositeFontEntry. |

*** 
> CompositeFontEntry **nextItem**( CompositeFontEntry **obj** )
> 
> Returns the CompositeFontEntry whose index follows the specified CompositeFontEntry in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CompositeFontEntry | obj | The CompositeFontEntry whose index comes before the desired CompositeFontEntry. |

*** 
> CompositeFontEntry **anyItem**()
> 
> Returns any CompositeFontEntry in the collection.
*** 
> CompositeFontEntry **everyItem**()
> 
> Returns every CompositeFontEntry in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the CompositeFontEntry.
*** 
> CompositeFontEntry **[]**( Number **index** )
> 
> Returns the CompositeFontEntry with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


