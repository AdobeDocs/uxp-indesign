# Graphics
A collection of imported graphics in any graphic file format (vector, metafile, or bitmap).

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Graphic.
*** 
> Graphic **item**( Mixed **index** )
> 
> Returns the Graphic with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Graphic **itemByName**( String **name** )
> 
> Returns the Graphic with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Graphic **itemByID**( Number **id** )
> 
> Returns the Graphic with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Graphic **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Graphics within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Graphic, index, or name at the beginning of the range. Can accept: Graphic, Long Integer or String. |
| Mixed | to | The Graphic, index, or name at the end of the range. Can accept: Graphic, Long Integer or String. |

*** 
> Graphic **firstItem**()
> 
> Returns the first Graphic in the collection.
*** 
> Graphic **lastItem**()
> 
> Returns the last Graphic in the collection.
*** 
> Graphic **middleItem**()
> 
> Returns the middle Graphic in the collection.
*** 
> Graphic **previousItem**( Graphic **obj** )
> 
> Returns the Graphic with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Graphic | obj | The index of the Graphic that follows the desired Graphic. |

*** 
> Graphic **nextItem**( Graphic **obj** )
> 
> Returns the Graphic whose index follows the specified Graphic in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Graphic | obj | The Graphic whose index comes before the desired Graphic. |

*** 
> Graphic **anyItem**()
> 
> Returns any Graphic in the collection.
*** 
> Graphic **everyItem**()
> 
> Returns every Graphic in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Graphic.
*** 
> Graphic **[]**( Number **index** )
> 
> Returns the Graphic with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


