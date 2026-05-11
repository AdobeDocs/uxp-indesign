# Fonts
A collection of fonts.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Font.
*** 
> Font **item**( Mixed **index** )
> 
> Returns the Font with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Font **itemByName**( String **name** )
> 
> Returns the Font with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Font **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Fonts within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Font, index, or name at the beginning of the range. Can accept: Font, Long Integer or String. |
| Mixed | to | The Font, index, or name at the end of the range. Can accept: Font, Long Integer or String. |

*** 
> Font **firstItem**()
> 
> Returns the first Font in the collection.
*** 
> Font **lastItem**()
> 
> Returns the last Font in the collection.
*** 
> Font **middleItem**()
> 
> Returns the middle Font in the collection.
*** 
> Font **previousItem**( Font **obj** )
> 
> Returns the Font with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Font | obj | The index of the Font that follows the desired Font. |

*** 
> Font **nextItem**( Font **obj** )
> 
> Returns the Font whose index follows the specified Font in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Font | obj | The Font whose index comes before the desired Font. |

*** 
> Font **anyItem**()
> 
> Returns any Font in the collection.
*** 
> Font **everyItem**()
> 
> Returns every Font in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Font.
*** 
> Font **[]**( Number **index** )
> 
> Returns the Font with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


