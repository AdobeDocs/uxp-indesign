# NumberingLists
A collection of numbered lists.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> NumberingList **add**( String **name**, Boolean **continueNumbersAcrossStories**, Boolean **continueNumbersAcrossDocuments**, Object **withProperties** )
> 
> Create a new list style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | Name |
| Boolean | continueNumbersAcrossStories | If true, numbering will continue across stories. (Optional) |
| Boolean | continueNumbersAcrossDocuments | If true, numbering will continue across book documents. (Optional) |
| Object | withProperties | Initial values for properties of the new NumberingList (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the NumberingList.
*** 
> NumberingList **item**( Mixed **index** )
> 
> Returns the NumberingList with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> NumberingList **itemByName**( String **name** )
> 
> Returns the NumberingList with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> NumberingList **itemByID**( Number **id** )
> 
> Returns the NumberingList with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> NumberingList **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the NumberingLists within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The NumberingList, index, or name at the beginning of the range. Can accept: NumberingList, Long Integer or String. |
| Mixed | to | The NumberingList, index, or name at the end of the range. Can accept: NumberingList, Long Integer or String. |

*** 
> NumberingList **firstItem**()
> 
> Returns the first NumberingList in the collection.
*** 
> NumberingList **lastItem**()
> 
> Returns the last NumberingList in the collection.
*** 
> NumberingList **middleItem**()
> 
> Returns the middle NumberingList in the collection.
*** 
> NumberingList **previousItem**( NumberingList **obj** )
> 
> Returns the NumberingList with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| NumberingList | obj | The index of the NumberingList that follows the desired NumberingList. |

*** 
> NumberingList **nextItem**( NumberingList **obj** )
> 
> Returns the NumberingList whose index follows the specified NumberingList in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| NumberingList | obj | The NumberingList whose index comes before the desired NumberingList. |

*** 
> NumberingList **anyItem**()
> 
> Returns any NumberingList in the collection.
*** 
> NumberingList **everyItem**()
> 
> Returns every NumberingList in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the NumberingList.
*** 
> NumberingList **[]**( Number **index** )
> 
> Returns the NumberingList with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


