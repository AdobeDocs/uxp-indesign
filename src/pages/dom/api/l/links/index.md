# Links
A collection of links.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Link.
<HorizontalLine />
> Link **item**( Mixed **index** )
> 
> Returns the Link with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> Link **itemByName**( String **name** )
> 
> Returns the Link with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> Link **itemByID**( Number **id** )
> 
> Returns the Link with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> Link **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Links within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Link, index, or name at the beginning of the range. Can accept: Link, Long Integer or String. |
| Mixed | to | The Link, index, or name at the end of the range. Can accept: Link, Long Integer or String. |

<HorizontalLine />
> Link **firstItem**()
> 
> Returns the first Link in the collection.
<HorizontalLine />
> Link **lastItem**()
> 
> Returns the last Link in the collection.
<HorizontalLine />
> Link **middleItem**()
> 
> Returns the middle Link in the collection.
<HorizontalLine />
> Link **previousItem**( Link **obj** )
> 
> Returns the Link with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Link | obj | The index of the Link that follows the desired Link. |

<HorizontalLine />
> Link **nextItem**( Link **obj** )
> 
> Returns the Link whose index follows the specified Link in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Link | obj | The Link whose index comes before the desired Link. |

<HorizontalLine />
> Link **anyItem**()
> 
> Returns any Link in the collection.
<HorizontalLine />
> Link **everyItem**()
> 
> Returns every Link in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Link.
<HorizontalLine />
> Link **[]**( Number **index** )
> 
> Returns the Link with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


