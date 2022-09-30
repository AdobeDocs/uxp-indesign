# Documents
A collection of documents.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Document **add**( Boolean **showingWindow**, DocumentPreset **documentPreset**, Object **withProperties** )
> 
> Creates a new document.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | showingWindow | If true, displays the document. (Optional) |
| DocumentPreset | documentPreset | The document preset to use. (Optional) |
| Object | withProperties | Initial values for properties of the new Document (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Document.
*** 
> Document **item**( Mixed **index** )
> 
> Returns the Document with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Document **itemByName**( String **name** )
> 
> Returns the Document with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Document **itemByID**( Number **id** )
> 
> Returns the Document with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Document **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Documents within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Document, index, or name at the beginning of the range. Can accept: Document, Long Integer or String. |
| Mixed | to | The Document, index, or name at the end of the range. Can accept: Document, Long Integer or String. |

*** 
> Document **firstItem**()
> 
> Returns the first Document in the collection.
*** 
> Document **lastItem**()
> 
> Returns the last Document in the collection.
*** 
> Document **middleItem**()
> 
> Returns the middle Document in the collection.
*** 
> Document **previousItem**( Document **obj** )
> 
> Returns the Document with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Document | obj | The index of the Document that follows the desired Document. |

*** 
> Document **nextItem**( Document **obj** )
> 
> Returns the Document whose index follows the specified Document in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Document | obj | The Document whose index comes before the desired Document. |

*** 
> Document **anyItem**()
> 
> Returns any Document in the collection.
*** 
> Document **everyItem**()
> 
> Returns every Document in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Document.
*** 
> Document **[]**( Number **index** )
> 
> Returns the Document with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


