# TableStyles
A collection of table styles.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> TableStyle **add**( Object **withProperties** )
> 
> Creates a new TableStyle.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new TableStyle (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the TableStyle.
*** 
> TableStyle **item**( Mixed **index** )
> 
> Returns the TableStyle with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TableStyle **itemByName**( String **name** )
> 
> Returns the TableStyle with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> TableStyle **itemByID**( Number **id** )
> 
> Returns the TableStyle with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> TableStyle **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TableStyles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TableStyle, index, or name at the beginning of the range. Can accept: TableStyle, Long Integer or String. |
| Mixed | to | The TableStyle, index, or name at the end of the range. Can accept: TableStyle, Long Integer or String. |

*** 
> TableStyle **firstItem**()
> 
> Returns the first TableStyle in the collection.
*** 
> TableStyle **lastItem**()
> 
> Returns the last TableStyle in the collection.
*** 
> TableStyle **middleItem**()
> 
> Returns the middle TableStyle in the collection.
*** 
> TableStyle **previousItem**( TableStyle **obj** )
> 
> Returns the TableStyle with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TableStyle | obj | The index of the TableStyle that follows the desired TableStyle. |

*** 
> TableStyle **nextItem**( TableStyle **obj** )
> 
> Returns the TableStyle whose index follows the specified TableStyle in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TableStyle | obj | The TableStyle whose index comes before the desired TableStyle. |

*** 
> TableStyle **anyItem**()
> 
> Returns any TableStyle in the collection.
*** 
> TableStyle **everyItem**()
> 
> Returns every TableStyle in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TableStyle.
*** 
> TableStyle **[]**( Number **index** )
> 
> Returns the TableStyle with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


