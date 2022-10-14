# XMLElements
A collection of XML elements.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the XMLElement.
*** 
> XMLElement **add**( Mixed **markupTag**, Mixed **xmlContent**, Object **withProperties** )
> 
> Creates a new XML element.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | markupTag | The XML tag used to identify the element. Can accept: String or XMLTag. |
| Mixed | xmlContent | The content to be marked up. Can accept: Text, Story, PageItem, Movie, Sound, Graphic, Table or Cell. (Optional) |
| Object | withProperties | Initial values for properties of the new XMLElement (Optional) |

*** 
> XMLElement **item**( Mixed **index** )
> 
> Returns the XMLElement with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> XMLElement **itemByID**( Number **id** )
> 
> Returns the XMLElement with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> XMLElement **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the XMLElements within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The XMLElement, index, or name at the beginning of the range. Can accept: XMLElement, Long Integer or String. |
| Mixed | to | The XMLElement, index, or name at the end of the range. Can accept: XMLElement, Long Integer or String. |

*** 
> XMLElement **firstItem**()
> 
> Returns the first XMLElement in the collection.
*** 
> XMLElement **lastItem**()
> 
> Returns the last XMLElement in the collection.
*** 
> XMLElement **middleItem**()
> 
> Returns the middle XMLElement in the collection.
*** 
> XMLElement **previousItem**( XMLElement **obj** )
> 
> Returns the XMLElement with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLElement | obj | The index of the XMLElement that follows the desired XMLElement. |

*** 
> XMLElement **nextItem**( XMLElement **obj** )
> 
> Returns the XMLElement whose index follows the specified XMLElement in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLElement | obj | The XMLElement whose index comes before the desired XMLElement. |

*** 
> XMLElement **anyItem**()
> 
> Returns any XMLElement in the collection.
*** 
> XMLElement **everyItem**()
> 
> Returns every XMLElement in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLElement.
*** 
> XMLElement **[]**( Number **index** )
> 
> Returns the XMLElement with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


