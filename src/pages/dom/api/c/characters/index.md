# Characters
A collection of characters.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Character.
*** 
> Character **item**( Mixed **index** )
> 
> Returns the Character with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Character **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Characters within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Character, index, or name at the beginning of the range. Can accept: Character, Long Integer or String. |
| Mixed | to | The Character, index, or name at the end of the range. Can accept: Character, Long Integer or String. |

*** 
> Character **firstItem**()
> 
> Returns the first Character in the collection.
*** 
> Character **lastItem**()
> 
> Returns the last Character in the collection.
*** 
> Character **middleItem**()
> 
> Returns the middle Character in the collection.
*** 
> Character **previousItem**( Character **obj** )
> 
> Returns the Character with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Character | obj | The index of the Character that follows the desired Character. |

*** 
> Character **nextItem**( Character **obj** )
> 
> Returns the Character whose index follows the specified Character in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Character | obj | The Character whose index comes before the desired Character. |

*** 
> Character **anyItem**()
> 
> Returns any Character in the collection.
*** 
> Character **everyItem**()
> 
> Returns every Character in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Character.
*** 
> Character **[]**( Number **index** )
> 
> Returns the Character with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


