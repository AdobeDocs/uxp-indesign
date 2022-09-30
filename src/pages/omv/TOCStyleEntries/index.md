# TOCStyleEntries
A collection TOC style entries.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> TOCStyleEntry **add**( String **styleName**, Object **withProperties** )
> 
> Adds a TOC style entry.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | styleName | The paragraph style to include as TOC entries in the TOC. (Optional) |
| Object | withProperties | Initial values for properties of the new TOCStyleEntry (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the TOCStyleEntry.
*** 
> TOCStyleEntry **item**( Mixed **index** )
> 
> Returns the TOCStyleEntry with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TOCStyleEntry **itemByName**( String **name** )
> 
> Returns the TOCStyleEntry with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> TOCStyleEntry **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TOCStyleEntries within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TOCStyleEntry, index, or name at the beginning of the range. Can accept: TOCStyleEntry, Long Integer or String. |
| Mixed | to | The TOCStyleEntry, index, or name at the end of the range. Can accept: TOCStyleEntry, Long Integer or String. |

*** 
> TOCStyleEntry **firstItem**()
> 
> Returns the first TOCStyleEntry in the collection.
*** 
> TOCStyleEntry **lastItem**()
> 
> Returns the last TOCStyleEntry in the collection.
*** 
> TOCStyleEntry **middleItem**()
> 
> Returns the middle TOCStyleEntry in the collection.
*** 
> TOCStyleEntry **previousItem**( TOCStyleEntry **obj** )
> 
> Returns the TOCStyleEntry with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TOCStyleEntry | obj | The index of the TOCStyleEntry that follows the desired TOCStyleEntry. |

*** 
> TOCStyleEntry **nextItem**( TOCStyleEntry **obj** )
> 
> Returns the TOCStyleEntry whose index follows the specified TOCStyleEntry in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TOCStyleEntry | obj | The TOCStyleEntry whose index comes before the desired TOCStyleEntry. |

*** 
> TOCStyleEntry **anyItem**()
> 
> Returns any TOCStyleEntry in the collection.
*** 
> TOCStyleEntry **everyItem**()
> 
> Returns every TOCStyleEntry in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TOCStyleEntry.
*** 
> TOCStyleEntry **[]**( Number **index** )
> 
> Returns the TOCStyleEntry with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


