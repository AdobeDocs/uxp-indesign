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

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the XMLAttribute.
<HorizontalLine />
> XMLAttribute **item**( Mixed **index** )
> 
> Returns the XMLAttribute with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> XMLAttribute **itemByName**( String **name** )
> 
> Returns the XMLAttribute with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> XMLAttribute **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the XMLAttributes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The XMLAttribute, index, or name at the beginning of the range. Can accept: XMLAttribute, Long Integer or String. |
| Mixed | to | The XMLAttribute, index, or name at the end of the range. Can accept: XMLAttribute, Long Integer or String. |

<HorizontalLine />
> XMLAttribute **firstItem**()
> 
> Returns the first XMLAttribute in the collection.
<HorizontalLine />
> XMLAttribute **lastItem**()
> 
> Returns the last XMLAttribute in the collection.
<HorizontalLine />
> XMLAttribute **middleItem**()
> 
> Returns the middle XMLAttribute in the collection.
<HorizontalLine />
> XMLAttribute **previousItem**( XMLAttribute **obj** )
> 
> Returns the XMLAttribute with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLAttribute | obj | The index of the XMLAttribute that follows the desired XMLAttribute. |

<HorizontalLine />
> XMLAttribute **nextItem**( XMLAttribute **obj** )
> 
> Returns the XMLAttribute whose index follows the specified XMLAttribute in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLAttribute | obj | The XMLAttribute whose index comes before the desired XMLAttribute. |

<HorizontalLine />
> XMLAttribute **anyItem**()
> 
> Returns any XMLAttribute in the collection.
<HorizontalLine />
> XMLAttribute **everyItem**()
> 
> Returns every XMLAttribute in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLAttribute.
<HorizontalLine />
> XMLAttribute **[]**( Number **index** )
> 
> Returns the XMLAttribute with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


