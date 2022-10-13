# HiddenTexts
A collection of hidden text objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the HiddenText.
*** 
> HiddenText **item**( Mixed **index** )
> 
> Returns the HiddenText with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> HiddenText **itemByName**( String **name** )
> 
> Returns the HiddenText with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> HiddenText **itemByID**( Number **id** )
> 
> Returns the HiddenText with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> HiddenText **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the HiddenTexts within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The HiddenText, index, or name at the beginning of the range. Can accept: HiddenText, Long Integer or String. |
| Mixed | to | The HiddenText, index, or name at the end of the range. Can accept: HiddenText, Long Integer or String. |

*** 
> HiddenText **firstItem**()
> 
> Returns the first HiddenText in the collection.
*** 
> HiddenText **lastItem**()
> 
> Returns the last HiddenText in the collection.
*** 
> HiddenText **middleItem**()
> 
> Returns the middle HiddenText in the collection.
*** 
> HiddenText **previousItem**( HiddenText **obj** )
> 
> Returns the HiddenText with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HiddenText | obj | The index of the HiddenText that follows the desired HiddenText. |

*** 
> HiddenText **nextItem**( HiddenText **obj** )
> 
> Returns the HiddenText whose index follows the specified HiddenText in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HiddenText | obj | The HiddenText whose index comes before the desired HiddenText. |

*** 
> HiddenText **anyItem**()
> 
> Returns any HiddenText in the collection.
*** 
> HiddenText **everyItem**()
> 
> Returns every HiddenText in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the HiddenText.
*** 
> HiddenText **[]**( Number **index** )
> 
> Returns the HiddenText with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


