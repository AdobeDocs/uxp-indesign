# UserDictionaries
A collection of user dictionaries.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the UserDictionary.
*** 
> UserDictionary **item**( Mixed **index** )
> 
> Returns the UserDictionary with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> UserDictionary **itemByName**( String **name** )
> 
> Returns the UserDictionary with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> UserDictionary **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the UserDictionaries within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The UserDictionary, index, or name at the beginning of the range. Can accept: UserDictionary, Long Integer or String. |
| Mixed | to | The UserDictionary, index, or name at the end of the range. Can accept: UserDictionary, Long Integer or String. |

*** 
> UserDictionary **firstItem**()
> 
> Returns the first UserDictionary in the collection.
*** 
> UserDictionary **lastItem**()
> 
> Returns the last UserDictionary in the collection.
*** 
> UserDictionary **middleItem**()
> 
> Returns the middle UserDictionary in the collection.
*** 
> UserDictionary **previousItem**( UserDictionary **obj** )
> 
> Returns the UserDictionary with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| UserDictionary | obj | The index of the UserDictionary that follows the desired UserDictionary. |

*** 
> UserDictionary **nextItem**( UserDictionary **obj** )
> 
> Returns the UserDictionary whose index follows the specified UserDictionary in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| UserDictionary | obj | The UserDictionary whose index comes before the desired UserDictionary. |

*** 
> UserDictionary **anyItem**()
> 
> Returns any UserDictionary in the collection.
*** 
> UserDictionary **everyItem**()
> 
> Returns every UserDictionary in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the UserDictionary.
*** 
> UserDictionary **[]**( Number **index** )
> 
> Returns the UserDictionary with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


