# AssignedStories
A collection of assigned stories.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the AssignedStory.
*** 
> AssignedStory **item**( Mixed **index** )
> 
> Returns the AssignedStory with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> AssignedStory **itemByName**( String **name** )
> 
> Returns the AssignedStory with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> AssignedStory **itemByID**( Number **id** )
> 
> Returns the AssignedStory with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> AssignedStory **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the AssignedStories within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The AssignedStory, index, or name at the beginning of the range. Can accept: AssignedStory, Long Integer or String. |
| Mixed | to | The AssignedStory, index, or name at the end of the range. Can accept: AssignedStory, Long Integer or String. |

*** 
> AssignedStory **firstItem**()
> 
> Returns the first AssignedStory in the collection.
*** 
> AssignedStory **lastItem**()
> 
> Returns the last AssignedStory in the collection.
*** 
> AssignedStory **middleItem**()
> 
> Returns the middle AssignedStory in the collection.
*** 
> AssignedStory **previousItem**( AssignedStory **obj** )
> 
> Returns the AssignedStory with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| AssignedStory | obj | The index of the AssignedStory that follows the desired AssignedStory. |

*** 
> AssignedStory **nextItem**( AssignedStory **obj** )
> 
> Returns the AssignedStory whose index follows the specified AssignedStory in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| AssignedStory | obj | The AssignedStory whose index comes before the desired AssignedStory. |

*** 
> AssignedStory **anyItem**()
> 
> Returns any AssignedStory in the collection.
*** 
> AssignedStory **everyItem**()
> 
> Returns every AssignedStory in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the AssignedStory.
*** 
> AssignedStory **[]**( Number **index** )
> 
> Returns the AssignedStory with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


