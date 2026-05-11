# XMLTags
A collection of XML tags.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> XMLTag **add**( String **name**, Mixed **tagColor**, Object **withProperties** )
> 
> Creates a tag.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the tag. (Optional) |
| Mixed | tagColor | The dolor of the tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can accept: Array of 3 Reals (0 - 255) or UIColors enumerator. (Optional) |
| Object | withProperties | Initial values for properties of the new XMLTag (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the XMLTag.
*** 
> XMLTag **item**( Mixed **index** )
> 
> Returns the XMLTag with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> XMLTag **itemByName**( String **name** )
> 
> Returns the XMLTag with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> XMLTag **itemByID**( Number **id** )
> 
> Returns the XMLTag with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> XMLTag **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the XMLTags within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The XMLTag, index, or name at the beginning of the range. Can accept: XMLTag, Long Integer or String. |
| Mixed | to | The XMLTag, index, or name at the end of the range. Can accept: XMLTag, Long Integer or String. |

*** 
> XMLTag **firstItem**()
> 
> Returns the first XMLTag in the collection.
*** 
> XMLTag **lastItem**()
> 
> Returns the last XMLTag in the collection.
*** 
> XMLTag **middleItem**()
> 
> Returns the middle XMLTag in the collection.
*** 
> XMLTag **previousItem**( XMLTag **obj** )
> 
> Returns the XMLTag with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLTag | obj | The index of the XMLTag that follows the desired XMLTag. |

*** 
> XMLTag **nextItem**( XMLTag **obj** )
> 
> Returns the XMLTag whose index follows the specified XMLTag in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLTag | obj | The XMLTag whose index comes before the desired XMLTag. |

*** 
> XMLTag **anyItem**()
> 
> Returns any XMLTag in the collection.
*** 
> XMLTag **everyItem**()
> 
> Returns every XMLTag in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLTag.
*** 
> XMLTag **[]**( Number **index** )
> 
> Returns the XMLTag with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


