# FormFields
A collection of form fields.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the FormField.
*** 
> FormField **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new FormField
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the FormField. (Optional) |
| LocationOptions | at | The location at which to insert the FormField relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new FormField (Optional) |

*** 
> FormField **item**( Mixed **index** )
> 
> Returns the FormField with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> FormField **itemByName**( String **name** )
> 
> Returns the FormField with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> FormField **itemByID**( Number **id** )
> 
> Returns the FormField with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> FormField **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the FormFields within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The FormField, index, or name at the beginning of the range. Can accept: FormField, Long Integer or String. |
| Mixed | to | The FormField, index, or name at the end of the range. Can accept: FormField, Long Integer or String. |

*** 
> FormField **firstItem**()
> 
> Returns the first FormField in the collection.
*** 
> FormField **lastItem**()
> 
> Returns the last FormField in the collection.
*** 
> FormField **middleItem**()
> 
> Returns the middle FormField in the collection.
*** 
> FormField **previousItem**( FormField **obj** )
> 
> Returns the FormField with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| FormField | obj | The index of the FormField that follows the desired FormField. |

*** 
> FormField **nextItem**( FormField **obj** )
> 
> Returns the FormField whose index follows the specified FormField in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| FormField | obj | The FormField whose index comes before the desired FormField. |

*** 
> FormField **anyItem**()
> 
> Returns any FormField in the collection.
*** 
> FormField **everyItem**()
> 
> Returns every FormField in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the FormField.
*** 
> FormField **[]**( Number **index** )
> 
> Returns the FormField with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


