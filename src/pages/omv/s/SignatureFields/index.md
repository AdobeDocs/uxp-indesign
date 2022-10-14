# SignatureFields
A collection of signature fields.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the SignatureField.
*** 
> SignatureField **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new SignatureField
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the SignatureField. (Optional) |
| LocationOptions | at | The location at which to insert the SignatureField relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new SignatureField (Optional) |

*** 
> SignatureField **item**( Mixed **index** )
> 
> Returns the SignatureField with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> SignatureField **itemByName**( String **name** )
> 
> Returns the SignatureField with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> SignatureField **itemByID**( Number **id** )
> 
> Returns the SignatureField with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> SignatureField **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the SignatureFields within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The SignatureField, index, or name at the beginning of the range. Can accept: SignatureField, Long Integer or String. |
| Mixed | to | The SignatureField, index, or name at the end of the range. Can accept: SignatureField, Long Integer or String. |

*** 
> SignatureField **firstItem**()
> 
> Returns the first SignatureField in the collection.
*** 
> SignatureField **lastItem**()
> 
> Returns the last SignatureField in the collection.
*** 
> SignatureField **middleItem**()
> 
> Returns the middle SignatureField in the collection.
*** 
> SignatureField **previousItem**( SignatureField **obj** )
> 
> Returns the SignatureField with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SignatureField | obj | The index of the SignatureField that follows the desired SignatureField. |

*** 
> SignatureField **nextItem**( SignatureField **obj** )
> 
> Returns the SignatureField whose index follows the specified SignatureField in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SignatureField | obj | The SignatureField whose index comes before the desired SignatureField. |

*** 
> SignatureField **anyItem**()
> 
> Returns any SignatureField in the collection.
*** 
> SignatureField **everyItem**()
> 
> Returns every SignatureField in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the SignatureField.
*** 
> SignatureField **[]**( Number **index** )
> 
> Returns the SignatureField with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


