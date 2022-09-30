# PDFComments
A collection of PDF comment objects

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the PDFComment.
*** 
> PDFComment **item**( Mixed **index** )
> 
> Returns the PDFComment with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> PDFComment **itemByName**( String **name** )
> 
> Returns the PDFComment with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> PDFComment **itemByID**( Number **id** )
> 
> Returns the PDFComment with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> PDFComment **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PDFComments within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PDFComment, index, or name at the beginning of the range. Can accept: PDFComment, Long Integer or String. |
| Mixed | to | The PDFComment, index, or name at the end of the range. Can accept: PDFComment, Long Integer or String. |

*** 
> PDFComment **firstItem**()
> 
> Returns the first PDFComment in the collection.
*** 
> PDFComment **lastItem**()
> 
> Returns the last PDFComment in the collection.
*** 
> PDFComment **middleItem**()
> 
> Returns the middle PDFComment in the collection.
*** 
> PDFComment **previousItem**( PDFComment **obj** )
> 
> Returns the PDFComment with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PDFComment | obj | The index of the PDFComment that follows the desired PDFComment. |

*** 
> PDFComment **nextItem**( PDFComment **obj** )
> 
> Returns the PDFComment whose index follows the specified PDFComment in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PDFComment | obj | The PDFComment whose index comes before the desired PDFComment. |

*** 
> PDFComment **anyItem**()
> 
> Returns any PDFComment in the collection.
*** 
> PDFComment **everyItem**()
> 
> Returns every PDFComment in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PDFComment.
*** 
> PDFComment **[]**( Number **index** )
> 
> Returns the PDFComment with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


