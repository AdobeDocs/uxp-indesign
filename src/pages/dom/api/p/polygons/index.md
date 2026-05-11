# Polygons
A collection of polygons.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Polygon.
*** 
> Polygon **add**( Layer **layer**, Number **numberOfSides**, Number **insetPercentage**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new Polygon.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the Polygon. (Optional) |
| Number | numberOfSides | The number of sides to give the Polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | The star inset percentage applied to the Polygon. (Optional) |
| LocationOptions | at | The location at which to insert the Polygon relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new Polygon (Optional) |

*** 
> Polygon **item**( Mixed **index** )
> 
> Returns the Polygon with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Polygon **itemByName**( String **name** )
> 
> Returns the Polygon with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Polygon **itemByID**( Number **id** )
> 
> Returns the Polygon with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Polygon **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Polygons within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Polygon, index, or name at the beginning of the range. Can accept: Polygon, Long Integer or String. |
| Mixed | to | The Polygon, index, or name at the end of the range. Can accept: Polygon, Long Integer or String. |

*** 
> Polygon **firstItem**()
> 
> Returns the first Polygon in the collection.
*** 
> Polygon **lastItem**()
> 
> Returns the last Polygon in the collection.
*** 
> Polygon **middleItem**()
> 
> Returns the middle Polygon in the collection.
*** 
> Polygon **previousItem**( Polygon **obj** )
> 
> Returns the Polygon with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Polygon | obj | The index of the Polygon that follows the desired Polygon. |

*** 
> Polygon **nextItem**( Polygon **obj** )
> 
> Returns the Polygon whose index follows the specified Polygon in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Polygon | obj | The Polygon whose index comes before the desired Polygon. |

*** 
> Polygon **anyItem**()
> 
> Returns any Polygon in the collection.
*** 
> Polygon **everyItem**()
> 
> Returns every Polygon in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Polygon.
*** 
> Polygon **[]**( Number **index** )
> 
> Returns the Polygon with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


