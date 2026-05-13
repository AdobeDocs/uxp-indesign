# Stories
A collection of stories.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Story.
<HorizontalLine />
> Story **item**( Mixed **index** )
> 
> Returns the Story with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> Story **itemByName**( String **name** )
> 
> Returns the Story with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> Story **itemByID**( Number **id** )
> 
> Returns the Story with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> Story **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Stories within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Story, index, or name at the beginning of the range. Can accept: Story, Long Integer or String. |
| Mixed | to | The Story, index, or name at the end of the range. Can accept: Story, Long Integer or String. |

<HorizontalLine />
> Story **firstItem**()
> 
> Returns the first Story in the collection.
<HorizontalLine />
> Story **lastItem**()
> 
> Returns the last Story in the collection.
<HorizontalLine />
> Story **middleItem**()
> 
> Returns the middle Story in the collection.
<HorizontalLine />
> Story **previousItem**( Story **obj** )
> 
> Returns the Story with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Story | obj | The index of the Story that follows the desired Story. |

<HorizontalLine />
> Story **nextItem**( Story **obj** )
> 
> Returns the Story whose index follows the specified Story in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Story | obj | The Story whose index comes before the desired Story. |

<HorizontalLine />
> Story **anyItem**()
> 
> Returns any Story in the collection.
<HorizontalLine />
> Story **everyItem**()
> 
> Returns every Story in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Story.
<HorizontalLine />
> Story **[]**( Number **index** )
> 
> Returns the Story with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


