# TextVariables
A collection of text variables.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> TextVariable **add**( Object **withProperties** )
> 
> Creates a new TextVariable.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new TextVariable (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the TextVariable.
*** 
> TextVariable **item**( Mixed **index** )
> 
> Returns the TextVariable with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TextVariable **itemByName**( String **name** )
> 
> Returns the TextVariable with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> TextVariable **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TextVariables within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TextVariable, index, or name at the beginning of the range. Can accept: TextVariable, Long Integer or String. |
| Mixed | to | The TextVariable, index, or name at the end of the range. Can accept: TextVariable, Long Integer or String. |

*** 
> TextVariable **firstItem**()
> 
> Returns the first TextVariable in the collection.
*** 
> TextVariable **lastItem**()
> 
> Returns the last TextVariable in the collection.
*** 
> TextVariable **middleItem**()
> 
> Returns the middle TextVariable in the collection.
*** 
> TextVariable **previousItem**( TextVariable **obj** )
> 
> Returns the TextVariable with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextVariable | obj | The index of the TextVariable that follows the desired TextVariable. |

*** 
> TextVariable **nextItem**( TextVariable **obj** )
> 
> Returns the TextVariable whose index follows the specified TextVariable in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextVariable | obj | The TextVariable whose index comes before the desired TextVariable. |

*** 
> TextVariable **anyItem**()
> 
> Returns any TextVariable in the collection.
*** 
> TextVariable **everyItem**()
> 
> Returns every TextVariable in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextVariable.
*** 
> TextVariable **[]**( Number **index** )
> 
> Returns the TextVariable with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


