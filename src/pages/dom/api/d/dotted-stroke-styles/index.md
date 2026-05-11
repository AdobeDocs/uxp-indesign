# DottedStrokeStyles
A collection of dotted stroke styles.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> DottedStrokeStyle **add**( Object **withProperties** )
> 
> Creates a new DottedStrokeStyle.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new DottedStrokeStyle (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the DottedStrokeStyle.
*** 
> DottedStrokeStyle **item**( Mixed **index** )
> 
> Returns the DottedStrokeStyle with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> DottedStrokeStyle **itemByName**( String **name** )
> 
> Returns the DottedStrokeStyle with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> DottedStrokeStyle **itemByID**( Number **id** )
> 
> Returns the DottedStrokeStyle with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> DottedStrokeStyle **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the DottedStrokeStyles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The DottedStrokeStyle, index, or name at the beginning of the range. Can accept: DottedStrokeStyle, Long Integer or String. |
| Mixed | to | The DottedStrokeStyle, index, or name at the end of the range. Can accept: DottedStrokeStyle, Long Integer or String. |

*** 
> DottedStrokeStyle **firstItem**()
> 
> Returns the first DottedStrokeStyle in the collection.
*** 
> DottedStrokeStyle **lastItem**()
> 
> Returns the last DottedStrokeStyle in the collection.
*** 
> DottedStrokeStyle **middleItem**()
> 
> Returns the middle DottedStrokeStyle in the collection.
*** 
> DottedStrokeStyle **previousItem**( DottedStrokeStyle **obj** )
> 
> Returns the DottedStrokeStyle with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DottedStrokeStyle | obj | The index of the DottedStrokeStyle that follows the desired DottedStrokeStyle. |

*** 
> DottedStrokeStyle **nextItem**( DottedStrokeStyle **obj** )
> 
> Returns the DottedStrokeStyle whose index follows the specified DottedStrokeStyle in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DottedStrokeStyle | obj | The DottedStrokeStyle whose index comes before the desired DottedStrokeStyle. |

*** 
> DottedStrokeStyle **anyItem**()
> 
> Returns any DottedStrokeStyle in the collection.
*** 
> DottedStrokeStyle **everyItem**()
> 
> Returns every DottedStrokeStyle in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the DottedStrokeStyle.
*** 
> DottedStrokeStyle **[]**( Number **index** )
> 
> Returns the DottedStrokeStyle with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


