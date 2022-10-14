# EPSTexts
EPSTexts

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the EPSText.
*** 
> EPSText **item**( Mixed **index** )
> 
> Returns the EPSText with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> EPSText **itemByName**( String **name** )
> 
> Returns the EPSText with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> EPSText **itemByID**( Number **id** )
> 
> Returns the EPSText with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> EPSText **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the EPSTexts within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The EPSText, index, or name at the beginning of the range. Can accept: EPSText, Long Integer or String. |
| Mixed | to | The EPSText, index, or name at the end of the range. Can accept: EPSText, Long Integer or String. |

*** 
> EPSText **firstItem**()
> 
> Returns the first EPSText in the collection.
*** 
> EPSText **lastItem**()
> 
> Returns the last EPSText in the collection.
*** 
> EPSText **middleItem**()
> 
> Returns the middle EPSText in the collection.
*** 
> EPSText **previousItem**( EPSText **obj** )
> 
> Returns the EPSText with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| EPSText | obj | The index of the EPSText that follows the desired EPSText. |

*** 
> EPSText **nextItem**( EPSText **obj** )
> 
> Returns the EPSText whose index follows the specified EPSText in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| EPSText | obj | The EPSText whose index comes before the desired EPSText. |

*** 
> EPSText **anyItem**()
> 
> Returns any EPSText in the collection.
*** 
> EPSText **everyItem**()
> 
> Returns every EPSText in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the EPSText.
*** 
> EPSText **[]**( Number **index** )
> 
> Returns the EPSText with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


