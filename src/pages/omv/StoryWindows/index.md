# StoryWindows
A collection of story windows.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the StoryWindow.
*** 
> StoryWindow **item**( Mixed **index** )
> 
> Returns the StoryWindow with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> StoryWindow **itemByName**( String **name** )
> 
> Returns the StoryWindow with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> StoryWindow **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the StoryWindows within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The StoryWindow, index, or name at the beginning of the range. Can accept: StoryWindow, Long Integer or String. |
| Mixed | to | The StoryWindow, index, or name at the end of the range. Can accept: StoryWindow, Long Integer or String. |

*** 
> StoryWindow **firstItem**()
> 
> Returns the first StoryWindow in the collection.
*** 
> StoryWindow **lastItem**()
> 
> Returns the last StoryWindow in the collection.
*** 
> StoryWindow **middleItem**()
> 
> Returns the middle StoryWindow in the collection.
*** 
> StoryWindow **previousItem**( StoryWindow **obj** )
> 
> Returns the StoryWindow with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| StoryWindow | obj | The index of the StoryWindow that follows the desired StoryWindow. |

*** 
> StoryWindow **nextItem**( StoryWindow **obj** )
> 
> Returns the StoryWindow whose index follows the specified StoryWindow in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| StoryWindow | obj | The StoryWindow whose index comes before the desired StoryWindow. |

*** 
> StoryWindow **anyItem**()
> 
> Returns any StoryWindow in the collection.
*** 
> StoryWindow **everyItem**()
> 
> Returns every StoryWindow in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the StoryWindow.
*** 
> StoryWindow **[]**( Number **index** )
> 
> Returns the StoryWindow with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


