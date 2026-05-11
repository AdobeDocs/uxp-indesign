# CharacterStyleGroups
A collection of character style groups.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> CharacterStyleGroup **add**( Object **withProperties** )
> 
> Creates a new CharacterStyleGroup.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new CharacterStyleGroup (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the CharacterStyleGroup.
*** 
> CharacterStyleGroup **item**( Mixed **index** )
> 
> Returns the CharacterStyleGroup with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> CharacterStyleGroup **itemByName**( String **name** )
> 
> Returns the CharacterStyleGroup with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> CharacterStyleGroup **itemByID**( Number **id** )
> 
> Returns the CharacterStyleGroup with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> CharacterStyleGroup **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the CharacterStyleGroups within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The CharacterStyleGroup, index, or name at the beginning of the range. Can accept: CharacterStyleGroup, Long Integer or String. |
| Mixed | to | The CharacterStyleGroup, index, or name at the end of the range. Can accept: CharacterStyleGroup, Long Integer or String. |

*** 
> CharacterStyleGroup **firstItem**()
> 
> Returns the first CharacterStyleGroup in the collection.
*** 
> CharacterStyleGroup **lastItem**()
> 
> Returns the last CharacterStyleGroup in the collection.
*** 
> CharacterStyleGroup **middleItem**()
> 
> Returns the middle CharacterStyleGroup in the collection.
*** 
> CharacterStyleGroup **previousItem**( CharacterStyleGroup **obj** )
> 
> Returns the CharacterStyleGroup with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CharacterStyleGroup | obj | The index of the CharacterStyleGroup that follows the desired CharacterStyleGroup. |

*** 
> CharacterStyleGroup **nextItem**( CharacterStyleGroup **obj** )
> 
> Returns the CharacterStyleGroup whose index follows the specified CharacterStyleGroup in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CharacterStyleGroup | obj | The CharacterStyleGroup whose index comes before the desired CharacterStyleGroup. |

*** 
> CharacterStyleGroup **anyItem**()
> 
> Returns any CharacterStyleGroup in the collection.
*** 
> CharacterStyleGroup **everyItem**()
> 
> Returns every CharacterStyleGroup in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the CharacterStyleGroup.
*** 
> CharacterStyleGroup **[]**( Number **index** )
> 
> Returns the CharacterStyleGroup with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


