# Paragraphs
A collection of paragraphs.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Paragraph.
*** 
> Paragraph **item**( Mixed **index** )
> 
> Returns the Paragraph with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Paragraph **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Paragraphs within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Paragraph, index, or name at the beginning of the range. Can accept: Paragraph, Long Integer or String. |
| Mixed | to | The Paragraph, index, or name at the end of the range. Can accept: Paragraph, Long Integer or String. |

*** 
> Paragraph **firstItem**()
> 
> Returns the first Paragraph in the collection.
*** 
> Paragraph **lastItem**()
> 
> Returns the last Paragraph in the collection.
*** 
> Paragraph **middleItem**()
> 
> Returns the middle Paragraph in the collection.
*** 
> Paragraph **previousItem**( Paragraph **obj** )
> 
> Returns the Paragraph with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Paragraph | obj | The index of the Paragraph that follows the desired Paragraph. |

*** 
> Paragraph **nextItem**( Paragraph **obj** )
> 
> Returns the Paragraph whose index follows the specified Paragraph in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Paragraph | obj | The Paragraph whose index comes before the desired Paragraph. |

*** 
> Paragraph **anyItem**()
> 
> Returns any Paragraph in the collection.
*** 
> Paragraph **everyItem**()
> 
> Returns every Paragraph in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Paragraph.
*** 
> Paragraph **[]**( Number **index** )
> 
> Returns the Paragraph with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


