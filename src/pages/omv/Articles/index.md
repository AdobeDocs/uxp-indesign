# Articles
A collection of articles.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Article **add**( String **name**, Boolean **articleExportStatus**, LocationOptions **at**, Article **reference**, Object **withProperties** )
> 
> Creates a new Article
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The article name (Optional) |
| Boolean | articleExportStatus | The article's export status (Optional) |
| LocationOptions | at | The location relative to the reference object or within the containing object. (Optional) |
| Article | reference | The reference object. Note: Required when the to value specifies before or after. (Optional) |
| Object | withProperties | Initial values for properties of the new Article (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Article.
*** 
> Article **item**( Mixed **index** )
> 
> Returns the Article with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Article **itemByName**( String **name** )
> 
> Returns the Article with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Article **itemByID**( Number **id** )
> 
> Returns the Article with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Article **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Articles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Article, index, or name at the beginning of the range. Can accept: Article, Long Integer or String. |
| Mixed | to | The Article, index, or name at the end of the range. Can accept: Article, Long Integer or String. |

*** 
> Article **firstItem**()
> 
> Returns the first Article in the collection.
*** 
> Article **lastItem**()
> 
> Returns the last Article in the collection.
*** 
> Article **middleItem**()
> 
> Returns the middle Article in the collection.
*** 
> Article **previousItem**( Article **obj** )
> 
> Returns the Article with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Article | obj | The index of the Article that follows the desired Article. |

*** 
> Article **nextItem**( Article **obj** )
> 
> Returns the Article whose index follows the specified Article in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Article | obj | The Article whose index comes before the desired Article. |

*** 
> Article **anyItem**()
> 
> Returns any Article in the collection.
*** 
> Article **everyItem**()
> 
> Returns every Article in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Article.
*** 
> Article **[]**( Number **index** )
> 
> Returns the Article with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


