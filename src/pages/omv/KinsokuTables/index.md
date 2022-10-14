# KinsokuTables
A collection of kinsoku tables.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> KinsokuTable **add**( String **name**, Object **withProperties** )
> 
> Creates a new kinsoku table.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the new kinsoku table. |
| Object | withProperties | Initial values for properties of the new KinsokuTable (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the KinsokuTable.
*** 
> KinsokuTable **item**( Mixed **index** )
> 
> Returns the KinsokuTable with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> KinsokuTable **itemByName**( String **name** )
> 
> Returns the KinsokuTable with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> KinsokuTable **itemByID**( Number **id** )
> 
> Returns the KinsokuTable with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> KinsokuTable **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the KinsokuTables within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The KinsokuTable, index, or name at the beginning of the range. Can accept: KinsokuTable, Long Integer or String. |
| Mixed | to | The KinsokuTable, index, or name at the end of the range. Can accept: KinsokuTable, Long Integer or String. |

*** 
> KinsokuTable **firstItem**()
> 
> Returns the first KinsokuTable in the collection.
*** 
> KinsokuTable **lastItem**()
> 
> Returns the last KinsokuTable in the collection.
*** 
> KinsokuTable **middleItem**()
> 
> Returns the middle KinsokuTable in the collection.
*** 
> KinsokuTable **previousItem**( KinsokuTable **obj** )
> 
> Returns the KinsokuTable with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| KinsokuTable | obj | The index of the KinsokuTable that follows the desired KinsokuTable. |

*** 
> KinsokuTable **nextItem**( KinsokuTable **obj** )
> 
> Returns the KinsokuTable whose index follows the specified KinsokuTable in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| KinsokuTable | obj | The KinsokuTable whose index comes before the desired KinsokuTable. |

*** 
> KinsokuTable **anyItem**()
> 
> Returns any KinsokuTable in the collection.
*** 
> KinsokuTable **everyItem**()
> 
> Returns every KinsokuTable in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the KinsokuTable.
*** 
> KinsokuTable **[]**( Number **index** )
> 
> Returns the KinsokuTable with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


