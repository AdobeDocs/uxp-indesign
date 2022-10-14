# SVGs
A collection of SVG files.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> SVG **add**( Object **withProperties** )
> 
> Creates a new SVG.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new SVG (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the SVG.
*** 
> SVG **item**( Mixed **index** )
> 
> Returns the SVG with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> SVG **itemByName**( String **name** )
> 
> Returns the SVG with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> SVG **itemByID**( Number **id** )
> 
> Returns the SVG with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> SVG **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the SVGs within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The SVG, index, or name at the beginning of the range. Can accept: SVG, Long Integer or String. |
| Mixed | to | The SVG, index, or name at the end of the range. Can accept: SVG, Long Integer or String. |

*** 
> SVG **firstItem**()
> 
> Returns the first SVG in the collection.
*** 
> SVG **lastItem**()
> 
> Returns the last SVG in the collection.
*** 
> SVG **middleItem**()
> 
> Returns the middle SVG in the collection.
*** 
> SVG **previousItem**( SVG **obj** )
> 
> Returns the SVG with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SVG | obj | The index of the SVG that follows the desired SVG. |

*** 
> SVG **nextItem**( SVG **obj** )
> 
> Returns the SVG whose index follows the specified SVG in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SVG | obj | The SVG whose index comes before the desired SVG. |

*** 
> SVG **anyItem**()
> 
> Returns any SVG in the collection.
*** 
> SVG **everyItem**()
> 
> Returns every SVG in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the SVG.
*** 
> SVG **[]**( Number **index** )
> 
> Returns the SVG with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


