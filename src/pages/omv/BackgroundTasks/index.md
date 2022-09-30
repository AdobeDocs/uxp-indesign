# BackgroundTasks
A collection of background task objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the BackgroundTask.
*** 
> BackgroundTask **item**( Mixed **index** )
> 
> Returns the BackgroundTask with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> BackgroundTask **itemByName**( String **name** )
> 
> Returns the BackgroundTask with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> BackgroundTask **itemByID**( Number **id** )
> 
> Returns the BackgroundTask with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> BackgroundTask **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the BackgroundTasks within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The BackgroundTask, index, or name at the beginning of the range. Can accept: BackgroundTask, Long Integer or String. |
| Mixed | to | The BackgroundTask, index, or name at the end of the range. Can accept: BackgroundTask, Long Integer or String. |

*** 
> BackgroundTask **firstItem**()
> 
> Returns the first BackgroundTask in the collection.
*** 
> BackgroundTask **lastItem**()
> 
> Returns the last BackgroundTask in the collection.
*** 
> BackgroundTask **middleItem**()
> 
> Returns the middle BackgroundTask in the collection.
*** 
> BackgroundTask **previousItem**( BackgroundTask **obj** )
> 
> Returns the BackgroundTask with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| BackgroundTask | obj | The index of the BackgroundTask that follows the desired BackgroundTask. |

*** 
> BackgroundTask **nextItem**( BackgroundTask **obj** )
> 
> Returns the BackgroundTask whose index follows the specified BackgroundTask in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| BackgroundTask | obj | The BackgroundTask whose index comes before the desired BackgroundTask. |

*** 
> BackgroundTask **anyItem**()
> 
> Returns any BackgroundTask in the collection.
*** 
> BackgroundTask **everyItem**()
> 
> Returns every BackgroundTask in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the BackgroundTask.
*** 
> BackgroundTask **[]**( Number **index** )
> 
> Returns the BackgroundTask with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


