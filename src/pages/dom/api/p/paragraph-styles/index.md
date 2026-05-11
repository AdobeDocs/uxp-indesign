# ParagraphStyles
A collection of paragraph styles.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> ParagraphStyle **add**( Object **withProperties** )
> 
> Creates a new ParagraphStyle.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new ParagraphStyle (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the ParagraphStyle.
*** 
> ParagraphStyle **item**( Mixed **index** )
> 
> Returns the ParagraphStyle with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> ParagraphStyle **itemByName**( String **name** )
> 
> Returns the ParagraphStyle with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> ParagraphStyle **itemByID**( Number **id** )
> 
> Returns the ParagraphStyle with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> ParagraphStyle **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ParagraphStyles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ParagraphStyle, index, or name at the beginning of the range. Can accept: ParagraphStyle, Long Integer or String. |
| Mixed | to | The ParagraphStyle, index, or name at the end of the range. Can accept: ParagraphStyle, Long Integer or String. |

*** 
> ParagraphStyle **firstItem**()
> 
> Returns the first ParagraphStyle in the collection.
*** 
> ParagraphStyle **lastItem**()
> 
> Returns the last ParagraphStyle in the collection.
*** 
> ParagraphStyle **middleItem**()
> 
> Returns the middle ParagraphStyle in the collection.
*** 
> ParagraphStyle **previousItem**( ParagraphStyle **obj** )
> 
> Returns the ParagraphStyle with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ParagraphStyle | obj | The index of the ParagraphStyle that follows the desired ParagraphStyle. |

*** 
> ParagraphStyle **nextItem**( ParagraphStyle **obj** )
> 
> Returns the ParagraphStyle whose index follows the specified ParagraphStyle in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ParagraphStyle | obj | The ParagraphStyle whose index comes before the desired ParagraphStyle. |

*** 
> ParagraphStyle **anyItem**()
> 
> Returns any ParagraphStyle in the collection.
*** 
> ParagraphStyle **everyItem**()
> 
> Returns every ParagraphStyle in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ParagraphStyle.
*** 
> ParagraphStyle **[]**( Number **index** )
> 
> Returns the ParagraphStyle with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


