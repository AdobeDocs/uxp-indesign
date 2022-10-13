# CharacterStyles
A collection of character styles.

## Instance
> *Read Only* 
> 
> Mixed **length** 
>
> The number of objects in the collection. Can return: Long Integer or NothingEnum enumerator.

### Methods
> CharacterStyle **add**( Object **withProperties** )
> 
> Creates a new CharacterStyle.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new CharacterStyle (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the CharacterStyle.
*** 
> CharacterStyle **item**( Mixed **index** )
> 
> Returns the CharacterStyle with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> CharacterStyle **itemByName**( String **name** )
> 
> Returns the CharacterStyle with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> CharacterStyle **itemByID**( Number **id** )
> 
> Returns the CharacterStyle with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> CharacterStyle **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the CharacterStyles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The CharacterStyle, index, or name at the beginning of the range. Can accept: CharacterStyle, Long Integer or String. |
| Mixed | to | The CharacterStyle, index, or name at the end of the range. Can accept: CharacterStyle, Long Integer or String. |

*** 
> CharacterStyle **firstItem**()
> 
> Returns the first CharacterStyle in the collection.
*** 
> CharacterStyle **lastItem**()
> 
> Returns the last CharacterStyle in the collection.
*** 
> CharacterStyle **middleItem**()
> 
> Returns the middle CharacterStyle in the collection.
*** 
> CharacterStyle **previousItem**( CharacterStyle **obj** )
> 
> Returns the CharacterStyle with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CharacterStyle | obj | The index of the CharacterStyle that follows the desired CharacterStyle. |

*** 
> CharacterStyle **nextItem**( CharacterStyle **obj** )
> 
> Returns the CharacterStyle whose index follows the specified CharacterStyle in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CharacterStyle | obj | The CharacterStyle whose index comes before the desired CharacterStyle. |

*** 
> CharacterStyle **anyItem**()
> 
> Returns any CharacterStyle in the collection.
*** 
> CharacterStyle **everyItem**()
> 
> Returns every CharacterStyle in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the CharacterStyle.
*** 
> CharacterStyle **[]**( Number **index** )
> 
> Returns the CharacterStyle with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


