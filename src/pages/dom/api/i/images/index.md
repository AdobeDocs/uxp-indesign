# Images
A collection of bitmap images in any bitmap file format (including TIFF, JPEG, or GIF).

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Image.
*** 
> Image **item**( Mixed **index** )
> 
> Returns the Image with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Image **itemByName**( String **name** )
> 
> Returns the Image with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Image **itemByID**( Number **id** )
> 
> Returns the Image with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Image **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Images within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Image, index, or name at the beginning of the range. Can accept: Image, Long Integer or String. |
| Mixed | to | The Image, index, or name at the end of the range. Can accept: Image, Long Integer or String. |

*** 
> Image **firstItem**()
> 
> Returns the first Image in the collection.
*** 
> Image **lastItem**()
> 
> Returns the last Image in the collection.
*** 
> Image **middleItem**()
> 
> Returns the middle Image in the collection.
*** 
> Image **previousItem**( Image **obj** )
> 
> Returns the Image with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Image | obj | The index of the Image that follows the desired Image. |

*** 
> Image **nextItem**( Image **obj** )
> 
> Returns the Image whose index follows the specified Image in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Image | obj | The Image whose index comes before the desired Image. |

*** 
> Image **anyItem**()
> 
> Returns any Image in the collection.
*** 
> Image **everyItem**()
> 
> Returns every Image in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Image.
*** 
> Image **[]**( Number **index** )
> 
> Returns the Image with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


