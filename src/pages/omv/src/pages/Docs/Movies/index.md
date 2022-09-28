# Movies
A collection of movies.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Movie **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new Movie
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the Movie. (Optional) |
| LocationOptions | at | The location at which to insert the Movie relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new Movie (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Movie.
*** 
> Movie **item**( Mixed **index** )
> 
> Returns the Movie with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Movie **itemByName**( String **name** )
> 
> Returns the Movie with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Movie **itemByID**( Number **id** )
> 
> Returns the Movie with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Movie **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Movies within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Movie, index, or name at the beginning of the range. Can accept: Movie, Long Integer or String. |
| Mixed | to | The Movie, index, or name at the end of the range. Can accept: Movie, Long Integer or String. |

*** 
> Movie **firstItem**()
> 
> Returns the first Movie in the collection.
*** 
> Movie **lastItem**()
> 
> Returns the last Movie in the collection.
*** 
> Movie **middleItem**()
> 
> Returns the middle Movie in the collection.
*** 
> Movie **previousItem**( Movie **obj** )
> 
> Returns the Movie with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Movie | obj | The index of the Movie that follows the desired Movie. |

*** 
> Movie **nextItem**( Movie **obj** )
> 
> Returns the Movie whose index follows the specified Movie in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Movie | obj | The Movie whose index comes before the desired Movie. |

*** 
> Movie **anyItem**()
> 
> Returns any Movie in the collection.
*** 
> Movie **everyItem**()
> 
> Returns every Movie in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Movie.
*** 
> Movie **[]**( Number **index** )
> 
> Returns the Movie with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


