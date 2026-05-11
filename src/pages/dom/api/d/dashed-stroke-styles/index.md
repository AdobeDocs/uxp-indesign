# DashedStrokeStyles
A collection of dashed stroke styles.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> DashedStrokeStyle **add**( Object **withProperties** )
> 
> Creates a new DashedStrokeStyle.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new DashedStrokeStyle (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the DashedStrokeStyle.
*** 
> DashedStrokeStyle **item**( Mixed **index** )
> 
> Returns the DashedStrokeStyle with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> DashedStrokeStyle **itemByName**( String **name** )
> 
> Returns the DashedStrokeStyle with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> DashedStrokeStyle **itemByID**( Number **id** )
> 
> Returns the DashedStrokeStyle with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> DashedStrokeStyle **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the DashedStrokeStyles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The DashedStrokeStyle, index, or name at the beginning of the range. Can accept: DashedStrokeStyle, Long Integer or String. |
| Mixed | to | The DashedStrokeStyle, index, or name at the end of the range. Can accept: DashedStrokeStyle, Long Integer or String. |

*** 
> DashedStrokeStyle **firstItem**()
> 
> Returns the first DashedStrokeStyle in the collection.
*** 
> DashedStrokeStyle **lastItem**()
> 
> Returns the last DashedStrokeStyle in the collection.
*** 
> DashedStrokeStyle **middleItem**()
> 
> Returns the middle DashedStrokeStyle in the collection.
*** 
> DashedStrokeStyle **previousItem**( DashedStrokeStyle **obj** )
> 
> Returns the DashedStrokeStyle with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DashedStrokeStyle | obj | The index of the DashedStrokeStyle that follows the desired DashedStrokeStyle. |

*** 
> DashedStrokeStyle **nextItem**( DashedStrokeStyle **obj** )
> 
> Returns the DashedStrokeStyle whose index follows the specified DashedStrokeStyle in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DashedStrokeStyle | obj | The DashedStrokeStyle whose index comes before the desired DashedStrokeStyle. |

*** 
> DashedStrokeStyle **anyItem**()
> 
> Returns any DashedStrokeStyle in the collection.
*** 
> DashedStrokeStyle **everyItem**()
> 
> Returns every DashedStrokeStyle in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the DashedStrokeStyle.
*** 
> DashedStrokeStyle **[]**( Number **index** )
> 
> Returns the DashedStrokeStyle with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


