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

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the TextPath.
<HorizontalLine />
> TextPath **item**( Mixed **index** )
> 
> Returns the TextPath with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> TextPath **itemByName**( String **name** )
> 
> Returns the TextPath with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> TextPath **itemByID**( Number **id** )
> 
> Returns the TextPath with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> TextPath **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TextPaths within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TextPath, index, or name at the beginning of the range. Can accept: TextPath, Long Integer or String. |
| Mixed | to | The TextPath, index, or name at the end of the range. Can accept: TextPath, Long Integer or String. |

<HorizontalLine />
> TextPath **firstItem**()
> 
> Returns the first TextPath in the collection.
<HorizontalLine />
> TextPath **lastItem**()
> 
> Returns the last TextPath in the collection.
<HorizontalLine />
> TextPath **middleItem**()
> 
> Returns the middle TextPath in the collection.
<HorizontalLine />
> TextPath **previousItem**( TextPath **obj** )
> 
> Returns the TextPath with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextPath | obj | The index of the TextPath that follows the desired TextPath. |

<HorizontalLine />
> TextPath **nextItem**( TextPath **obj** )
> 
> Returns the TextPath whose index follows the specified TextPath in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextPath | obj | The TextPath whose index comes before the desired TextPath. |

<HorizontalLine />
> TextPath **anyItem**()
> 
> Returns any TextPath in the collection.
<HorizontalLine />
> TextPath **everyItem**()
> 
> Returns every TextPath in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextPath.
<HorizontalLine />
> TextPath **[]**( Number **index** )
> 
> Returns the TextPath with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


