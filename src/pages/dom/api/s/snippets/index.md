# Snippets
A collection of IDML snippets.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Snippet.
<HorizontalLine />
> Snippet **item**( Mixed **index** )
> 
> Returns the Snippet with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> Snippet **itemByName**( String **name** )
> 
> Returns the Snippet with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> Snippet **itemByID**( Number **id** )
> 
> Returns the Snippet with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> Snippet **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Snippets within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Snippet, index, or name at the beginning of the range. Can accept: Snippet, Long Integer or String. |
| Mixed | to | The Snippet, index, or name at the end of the range. Can accept: Snippet, Long Integer or String. |

<HorizontalLine />
> Snippet **firstItem**()
> 
> Returns the first Snippet in the collection.
<HorizontalLine />
> Snippet **lastItem**()
> 
> Returns the last Snippet in the collection.
<HorizontalLine />
> Snippet **middleItem**()
> 
> Returns the middle Snippet in the collection.
<HorizontalLine />
> Snippet **previousItem**( Snippet **obj** )
> 
> Returns the Snippet with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Snippet | obj | The index of the Snippet that follows the desired Snippet. |

<HorizontalLine />
> Snippet **nextItem**( Snippet **obj** )
> 
> Returns the Snippet whose index follows the specified Snippet in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Snippet | obj | The Snippet whose index comes before the desired Snippet. |

<HorizontalLine />
> Snippet **anyItem**()
> 
> Returns any Snippet in the collection.
<HorizontalLine />
> Snippet **everyItem**()
> 
> Returns every Snippet in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Snippet.
<HorizontalLine />
> Snippet **[]**( Number **index** )
> 
> Returns the Snippet with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


