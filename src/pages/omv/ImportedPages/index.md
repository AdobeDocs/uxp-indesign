# ImportedPages
Imported InDesign pages.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the ImportedPage.
*** 
> ImportedPage **add**( Object **withProperties** )
> 
> Creates a new ImportedPage.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new ImportedPage (Optional) |

*** 
> ImportedPage **item**( Mixed **index** )
> 
> Returns the ImportedPage with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> ImportedPage **itemByName**( String **name** )
> 
> Returns the ImportedPage with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> ImportedPage **itemByID**( Number **id** )
> 
> Returns the ImportedPage with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> ImportedPage **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ImportedPages within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ImportedPage, index, or name at the beginning of the range. Can accept: ImportedPage, Long Integer or String. |
| Mixed | to | The ImportedPage, index, or name at the end of the range. Can accept: ImportedPage, Long Integer or String. |

*** 
> ImportedPage **firstItem**()
> 
> Returns the first ImportedPage in the collection.
*** 
> ImportedPage **lastItem**()
> 
> Returns the last ImportedPage in the collection.
*** 
> ImportedPage **middleItem**()
> 
> Returns the middle ImportedPage in the collection.
*** 
> ImportedPage **previousItem**( ImportedPage **obj** )
> 
> Returns the ImportedPage with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ImportedPage | obj | The index of the ImportedPage that follows the desired ImportedPage. |

*** 
> ImportedPage **nextItem**( ImportedPage **obj** )
> 
> Returns the ImportedPage whose index follows the specified ImportedPage in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ImportedPage | obj | The ImportedPage whose index comes before the desired ImportedPage. |

*** 
> ImportedPage **anyItem**()
> 
> Returns any ImportedPage in the collection.
*** 
> ImportedPage **everyItem**()
> 
> Returns every ImportedPage in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ImportedPage.
*** 
> ImportedPage **[]**( Number **index** )
> 
> Returns the ImportedPage with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


