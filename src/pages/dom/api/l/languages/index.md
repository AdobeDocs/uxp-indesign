# Languages
A collection of languages.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Language.
<HorizontalLine />
> Language **item**( Mixed **index** )
> 
> Returns the Language with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> Language **itemByName**( String **name** )
> 
> Returns the Language with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> Language **itemByID**( Number **id** )
> 
> Returns the Language with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> Language **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Languages within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Language, index, or name at the beginning of the range. Can accept: Language, Long Integer or String. |
| Mixed | to | The Language, index, or name at the end of the range. Can accept: Language, Long Integer or String. |

<HorizontalLine />
> Language **firstItem**()
> 
> Returns the first Language in the collection.
<HorizontalLine />
> Language **lastItem**()
> 
> Returns the last Language in the collection.
<HorizontalLine />
> Language **middleItem**()
> 
> Returns the middle Language in the collection.
<HorizontalLine />
> Language **previousItem**( Language **obj** )
> 
> Returns the Language with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Language | obj | The index of the Language that follows the desired Language. |

<HorizontalLine />
> Language **nextItem**( Language **obj** )
> 
> Returns the Language whose index follows the specified Language in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Language | obj | The Language whose index comes before the desired Language. |

<HorizontalLine />
> Language **anyItem**()
> 
> Returns any Language in the collection.
<HorizontalLine />
> Language **everyItem**()
> 
> Returns every Language in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Language.
<HorizontalLine />
> Language **[]**( Number **index** )
> 
> Returns the Language with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


