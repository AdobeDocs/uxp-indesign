# CrossReferences
A collection of index cross references. (For cross references in text, use the 'cross reference source' and 'hyperlink' objects.)

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> CrossReference **add**( Topic **referencedTopic**, CrossReferenceType **crossReferenceType**, String **customTypeString**, Object **withProperties** )
> 
> Creates a new cross reference.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Topic | referencedTopic | The topic that the cross reference points to. |
| CrossReferenceType | crossReferenceType | The cross reference type. |
| String | customTypeString | The custom string to use in the cross reference. Valid only for custom cross reference types. (Optional) |
| Object | withProperties | Initial values for properties of the new CrossReference (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the CrossReference.
<HorizontalLine />
> CrossReference **item**( Mixed **index** )
> 
> Returns the CrossReference with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> CrossReference **itemByName**( String **name** )
> 
> Returns the CrossReference with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> CrossReference **itemByID**( Number **id** )
> 
> Returns the CrossReference with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> CrossReference **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the CrossReferences within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The CrossReference, index, or name at the beginning of the range. Can accept: CrossReference, Long Integer or String. |
| Mixed | to | The CrossReference, index, or name at the end of the range. Can accept: CrossReference, Long Integer or String. |

<HorizontalLine />
> CrossReference **firstItem**()
> 
> Returns the first CrossReference in the collection.
<HorizontalLine />
> CrossReference **lastItem**()
> 
> Returns the last CrossReference in the collection.
<HorizontalLine />
> CrossReference **middleItem**()
> 
> Returns the middle CrossReference in the collection.
<HorizontalLine />
> CrossReference **previousItem**( CrossReference **obj** )
> 
> Returns the CrossReference with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CrossReference | obj | The index of the CrossReference that follows the desired CrossReference. |

<HorizontalLine />
> CrossReference **nextItem**( CrossReference **obj** )
> 
> Returns the CrossReference whose index follows the specified CrossReference in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CrossReference | obj | The CrossReference whose index comes before the desired CrossReference. |

<HorizontalLine />
> CrossReference **anyItem**()
> 
> Returns any CrossReference in the collection.
<HorizontalLine />
> CrossReference **everyItem**()
> 
> Returns every CrossReference in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the CrossReference.
<HorizontalLine />
> CrossReference **[]**( Number **index** )
> 
> Returns the CrossReference with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


