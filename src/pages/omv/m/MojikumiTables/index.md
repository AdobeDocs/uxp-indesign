# MojikumiTables
A collection of mojikumi tables.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> MojikumiTable **add**( String **name**, Object **withProperties** )
> 
> Creates a new mojikumi table.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the new mojikumi table. |
| Object | withProperties | Initial values for properties of the new MojikumiTable (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the MojikumiTable.
*** 
> MojikumiTable **item**( Mixed **index** )
> 
> Returns the MojikumiTable with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> MojikumiTable **itemByName**( String **name** )
> 
> Returns the MojikumiTable with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> MojikumiTable **itemByID**( Number **id** )
> 
> Returns the MojikumiTable with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> MojikumiTable **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MojikumiTables within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MojikumiTable, index, or name at the beginning of the range. Can accept: MojikumiTable, Long Integer or String. |
| Mixed | to | The MojikumiTable, index, or name at the end of the range. Can accept: MojikumiTable, Long Integer or String. |

*** 
> MojikumiTable **firstItem**()
> 
> Returns the first MojikumiTable in the collection.
*** 
> MojikumiTable **lastItem**()
> 
> Returns the last MojikumiTable in the collection.
*** 
> MojikumiTable **middleItem**()
> 
> Returns the middle MojikumiTable in the collection.
*** 
> MojikumiTable **previousItem**( MojikumiTable **obj** )
> 
> Returns the MojikumiTable with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MojikumiTable | obj | The index of the MojikumiTable that follows the desired MojikumiTable. |

*** 
> MojikumiTable **nextItem**( MojikumiTable **obj** )
> 
> Returns the MojikumiTable whose index follows the specified MojikumiTable in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MojikumiTable | obj | The MojikumiTable whose index comes before the desired MojikumiTable. |

*** 
> MojikumiTable **anyItem**()
> 
> Returns any MojikumiTable in the collection.
*** 
> MojikumiTable **everyItem**()
> 
> Returns every MojikumiTable in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the MojikumiTable.
*** 
> MojikumiTable **[]**( Number **index** )
> 
> Returns the MojikumiTable with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


