# Words
A collection of words.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Word.
*** 
> Word **item**( Mixed **index** )
> 
> Returns the Word with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Word **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Words within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Word, index, or name at the beginning of the range. Can accept: Word, Long Integer or String. |
| Mixed | to | The Word, index, or name at the end of the range. Can accept: Word, Long Integer or String. |

*** 
> Word **firstItem**()
> 
> Returns the first Word in the collection.
*** 
> Word **lastItem**()
> 
> Returns the last Word in the collection.
*** 
> Word **middleItem**()
> 
> Returns the middle Word in the collection.
*** 
> Word **previousItem**( Word **obj** )
> 
> Returns the Word with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Word | obj | The index of the Word that follows the desired Word. |

*** 
> Word **nextItem**( Word **obj** )
> 
> Returns the Word whose index follows the specified Word in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Word | obj | The Word whose index comes before the desired Word. |

*** 
> Word **anyItem**()
> 
> Returns any Word in the collection.
*** 
> Word **everyItem**()
> 
> Returns every Word in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Word.
*** 
> Word **[]**( Number **index** )
> 
> Returns the Word with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


