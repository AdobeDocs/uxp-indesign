# XMLAttributes
A collection of XML attributes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> XMLAttribute **add**( String **name**, String **value**, Object **withProperties** )
> 
> Creates a new XML attribute.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the attribute. |
| String | value | The value of the attribute. |
| Object | withProperties | Initial values for properties of the new XMLAttribute (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the XMLAttribute.
*** 
> XMLAttribute **item**( Mixed **index** )
> 
> Returns the XMLAttribute with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> XMLAttribute **itemByName**( String **name** )
> 
> Returns the XMLAttribute with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> XMLAttribute **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the XMLAttributes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The XMLAttribute, index, or name at the beginning of the range. Can accept: XMLAttribute, Long Integer or String. |
| Mixed | to | The XMLAttribute, index, or name at the end of the range. Can accept: XMLAttribute, Long Integer or String. |

*** 
> XMLAttribute **firstItem**()
> 
> Returns the first XMLAttribute in the collection.
*** 
> XMLAttribute **lastItem**()
> 
> Returns the last XMLAttribute in the collection.
*** 
> XMLAttribute **middleItem**()
> 
> Returns the middle XMLAttribute in the collection.
*** 
> XMLAttribute **previousItem**( XMLAttribute **obj** )
> 
> Returns the XMLAttribute with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLAttribute | obj | The index of the XMLAttribute that follows the desired XMLAttribute. |

*** 
> XMLAttribute **nextItem**( XMLAttribute **obj** )
> 
> Returns the XMLAttribute whose index follows the specified XMLAttribute in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLAttribute | obj | The XMLAttribute whose index comes before the desired XMLAttribute. |

*** 
> XMLAttribute **anyItem**()
> 
> Returns any XMLAttribute in the collection.
*** 
> XMLAttribute **everyItem**()
> 
> Returns every XMLAttribute in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLAttribute.
*** 
> XMLAttribute **[]**( Number **index** )
> 
> Returns the XMLAttribute with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


