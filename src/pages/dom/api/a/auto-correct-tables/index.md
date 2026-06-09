# AutoCorrectTables
A collection of auto-correct tables.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the AutoCorrectTable.
<HorizontalLine />
> AutoCorrectTable **item**( Mixed **index** )
> 
> Returns the AutoCorrectTable with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> AutoCorrectTable **itemByName**( String **name** )
> 
> Returns the AutoCorrectTable with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> AutoCorrectTable **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the AutoCorrectTables within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The AutoCorrectTable, index, or name at the beginning of the range. Can accept: AutoCorrectTable, Long Integer or String. |
| Mixed | to | The AutoCorrectTable, index, or name at the end of the range. Can accept: AutoCorrectTable, Long Integer or String. |

<HorizontalLine />
> AutoCorrectTable **firstItem**()
> 
> Returns the first AutoCorrectTable in the collection.
<HorizontalLine />
> AutoCorrectTable **lastItem**()
> 
> Returns the last AutoCorrectTable in the collection.
<HorizontalLine />
> AutoCorrectTable **middleItem**()
> 
> Returns the middle AutoCorrectTable in the collection.
<HorizontalLine />
> AutoCorrectTable **previousItem**( AutoCorrectTable **obj** )
> 
> Returns the AutoCorrectTable with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| AutoCorrectTable | obj | The index of the AutoCorrectTable that follows the desired AutoCorrectTable. |

<HorizontalLine />
> AutoCorrectTable **nextItem**( AutoCorrectTable **obj** )
> 
> Returns the AutoCorrectTable whose index follows the specified AutoCorrectTable in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| AutoCorrectTable | obj | The AutoCorrectTable whose index comes before the desired AutoCorrectTable. |

<HorizontalLine />
> AutoCorrectTable **anyItem**()
> 
> Returns any AutoCorrectTable in the collection.
<HorizontalLine />
> AutoCorrectTable **everyItem**()
> 
> Returns every AutoCorrectTable in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the AutoCorrectTable.
<HorizontalLine />
> AutoCorrectTable **[]**( Number **index** )
> 
> Returns the AutoCorrectTable with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


