# EPSs
A collection of EPS files.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the EPS.
*** 
> EPS **item**( Mixed **index** )
> 
> Returns the EPS with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> EPS **itemByName**( String **name** )
> 
> Returns the EPS with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> EPS **itemByID**( Number **id** )
> 
> Returns the EPS with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> EPS **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the EPSs within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The EPS, index, or name at the beginning of the range. Can accept: EPS, Long Integer or String. |
| Mixed | to | The EPS, index, or name at the end of the range. Can accept: EPS, Long Integer or String. |

*** 
> EPS **firstItem**()
> 
> Returns the first EPS in the collection.
*** 
> EPS **lastItem**()
> 
> Returns the last EPS in the collection.
*** 
> EPS **middleItem**()
> 
> Returns the middle EPS in the collection.
*** 
> EPS **previousItem**( EPS **obj** )
> 
> Returns the EPS with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| EPS | obj | The index of the EPS that follows the desired EPS. |

*** 
> EPS **nextItem**( EPS **obj** )
> 
> Returns the EPS whose index follows the specified EPS in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| EPS | obj | The EPS whose index comes before the desired EPS. |

*** 
> EPS **anyItem**()
> 
> Returns any EPS in the collection.
*** 
> EPS **everyItem**()
> 
> Returns every EPS in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the EPS.
*** 
> EPS **[]**( Number **index** )
> 
> Returns the EPS with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


