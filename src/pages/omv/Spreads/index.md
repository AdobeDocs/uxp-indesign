# Spreads
A collection of spreads.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Spread.
*** 
> Spread **add**( LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new spread.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | at | The location of the spread relative to the reference object or within the document.  (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter specifies before or after. Can accept: Spread or Document. (Optional) |
| Object | withProperties | Initial values for properties of the new Spread (Optional) |

*** 
> Spread **item**( Mixed **index** )
> 
> Returns the Spread with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Spread **itemByName**( String **name** )
> 
> Returns the Spread with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Spread **itemByID**( Number **id** )
> 
> Returns the Spread with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Spread **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Spreads within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Spread, index, or name at the beginning of the range. Can accept: Spread, Long Integer or String. |
| Mixed | to | The Spread, index, or name at the end of the range. Can accept: Spread, Long Integer or String. |

*** 
> Spread **firstItem**()
> 
> Returns the first Spread in the collection.
*** 
> Spread **lastItem**()
> 
> Returns the last Spread in the collection.
*** 
> Spread **middleItem**()
> 
> Returns the middle Spread in the collection.
*** 
> Spread **previousItem**( Spread **obj** )
> 
> Returns the Spread with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Spread | obj | The index of the Spread that follows the desired Spread. |

*** 
> Spread **nextItem**( Spread **obj** )
> 
> Returns the Spread whose index follows the specified Spread in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Spread | obj | The Spread whose index comes before the desired Spread. |

*** 
> Spread **anyItem**()
> 
> Returns any Spread in the collection.
*** 
> Spread **everyItem**()
> 
> Returns every Spread in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Spread.
*** 
> Spread **[]**( Number **index** )
> 
> Returns the Spread with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


