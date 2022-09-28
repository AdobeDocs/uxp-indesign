# Topics
A collection of index topics.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Topic.
*** 
> Topic **add**( String **name**, String **sortBy**, Object **withProperties** )
> 
> Creates a new index topic.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the topic. Note: This is the text that appears in the index. |
| String | sortBy | The string to sort this topic by instead of the topic name. Note: The actual topic text, rather than the sort order text, appears in the index. (Optional) |
| Object | withProperties | Initial values for properties of the new Topic (Optional) |

*** 
> Topic **item**( Mixed **index** )
> 
> Returns the Topic with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Topic **itemByName**( String **name** )
> 
> Returns the Topic with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Topic **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Topics within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Topic, index, or name at the beginning of the range. Can accept: Topic, Long Integer or String. |
| Mixed | to | The Topic, index, or name at the end of the range. Can accept: Topic, Long Integer or String. |

*** 
> Topic **firstItem**()
> 
> Returns the first Topic in the collection.
*** 
> Topic **lastItem**()
> 
> Returns the last Topic in the collection.
*** 
> Topic **middleItem**()
> 
> Returns the middle Topic in the collection.
*** 
> Topic **previousItem**( Topic **obj** )
> 
> Returns the Topic with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Topic | obj | The index of the Topic that follows the desired Topic. |

*** 
> Topic **nextItem**( Topic **obj** )
> 
> Returns the Topic whose index follows the specified Topic in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Topic | obj | The Topic whose index comes before the desired Topic. |

*** 
> Topic **anyItem**()
> 
> Returns any Topic in the collection.
*** 
> Topic **everyItem**()
> 
> Returns every Topic in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Topic.
*** 
> Topic **[]**( Number **index** )
> 
> Returns the Topic with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


