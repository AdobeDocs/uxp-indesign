# TextPaths
A collection of text paths.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> TextPath **add**( Object **withProperties** )
> 
> Creates a new TextPath.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new TextPath (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the TextPath.
*** 
> TextPath **item**( Mixed **index** )
> 
> Returns the TextPath with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TextPath **itemByName**( String **name** )
> 
> Returns the TextPath with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> TextPath **itemByID**( Number **id** )
> 
> Returns the TextPath with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> TextPath **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TextPaths within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TextPath, index, or name at the beginning of the range. Can accept: TextPath, Long Integer or String. |
| Mixed | to | The TextPath, index, or name at the end of the range. Can accept: TextPath, Long Integer or String. |

*** 
> TextPath **firstItem**()
> 
> Returns the first TextPath in the collection.
*** 
> TextPath **lastItem**()
> 
> Returns the last TextPath in the collection.
*** 
> TextPath **middleItem**()
> 
> Returns the middle TextPath in the collection.
*** 
> TextPath **previousItem**( TextPath **obj** )
> 
> Returns the TextPath with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextPath | obj | The index of the TextPath that follows the desired TextPath. |

*** 
> TextPath **nextItem**( TextPath **obj** )
> 
> Returns the TextPath whose index follows the specified TextPath in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextPath | obj | The TextPath whose index comes before the desired TextPath. |

*** 
> TextPath **anyItem**()
> 
> Returns any TextPath in the collection.
*** 
> TextPath **everyItem**()
> 
> Returns every TextPath in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextPath.
*** 
> TextPath **[]**( Number **index** )
> 
> Returns the TextPath with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


