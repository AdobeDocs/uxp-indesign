# Inks
A collection of inks.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Ink.
*** 
> Ink **item**( Mixed **index** )
> 
> Returns the Ink with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Ink **itemByName**( String **name** )
> 
> Returns the Ink with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Ink **itemByID**( Number **id** )
> 
> Returns the Ink with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Ink **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Inks within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Ink, index, or name at the beginning of the range. Can accept: Ink, Long Integer or String. |
| Mixed | to | The Ink, index, or name at the end of the range. Can accept: Ink, Long Integer or String. |

*** 
> Ink **firstItem**()
> 
> Returns the first Ink in the collection.
*** 
> Ink **lastItem**()
> 
> Returns the last Ink in the collection.
*** 
> Ink **middleItem**()
> 
> Returns the middle Ink in the collection.
*** 
> Ink **previousItem**( Ink **obj** )
> 
> Returns the Ink with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Ink | obj | The index of the Ink that follows the desired Ink. |

*** 
> Ink **nextItem**( Ink **obj** )
> 
> Returns the Ink whose index follows the specified Ink in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Ink | obj | The Ink whose index comes before the desired Ink. |

*** 
> Ink **anyItem**()
> 
> Returns any Ink in the collection.
*** 
> Ink **everyItem**()
> 
> Returns every Ink in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Ink.
*** 
> Ink **[]**( Number **index** )
> 
> Returns the Ink with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


