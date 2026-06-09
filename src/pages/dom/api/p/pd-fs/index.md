# PDFs
A collection of PDF files.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the PDF.
<HorizontalLine />
> PDF **item**( Mixed **index** )
> 
> Returns the PDF with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> PDF **itemByName**( String **name** )
> 
> Returns the PDF with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> PDF **itemByID**( Number **id** )
> 
> Returns the PDF with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> PDF **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PDFs within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PDF, index, or name at the beginning of the range. Can accept: PDF, Long Integer or String. |
| Mixed | to | The PDF, index, or name at the end of the range. Can accept: PDF, Long Integer or String. |

<HorizontalLine />
> PDF **firstItem**()
> 
> Returns the first PDF in the collection.
<HorizontalLine />
> PDF **lastItem**()
> 
> Returns the last PDF in the collection.
<HorizontalLine />
> PDF **middleItem**()
> 
> Returns the middle PDF in the collection.
<HorizontalLine />
> PDF **previousItem**( PDF **obj** )
> 
> Returns the PDF with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PDF | obj | The index of the PDF that follows the desired PDF. |

<HorizontalLine />
> PDF **nextItem**( PDF **obj** )
> 
> Returns the PDF whose index follows the specified PDF in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PDF | obj | The PDF whose index comes before the desired PDF. |

<HorizontalLine />
> PDF **anyItem**()
> 
> Returns any PDF in the collection.
<HorizontalLine />
> PDF **everyItem**()
> 
> Returns every PDF in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the PDF.
<HorizontalLine />
> PDF **[]**( Number **index** )
> 
> Returns the PDF with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


