# Sections
A collection of sections.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Section.
*** 
> Section **add**( Page **reference**, Object **withProperties** )
> 
> Creates a new section.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Page | reference | The page on which the section begins. (Optional) |
| Object | withProperties | Initial values for properties of the new Section (Optional) |

*** 
> Section **item**( Mixed **index** )
> 
> Returns the Section with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Section **itemByName**( String **name** )
> 
> Returns the Section with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Section **itemByID**( Number **id** )
> 
> Returns the Section with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Section **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Sections within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Section, index, or name at the beginning of the range. Can accept: Section, Long Integer or String. |
| Mixed | to | The Section, index, or name at the end of the range. Can accept: Section, Long Integer or String. |

*** 
> Section **firstItem**()
> 
> Returns the first Section in the collection.
*** 
> Section **lastItem**()
> 
> Returns the last Section in the collection.
*** 
> Section **middleItem**()
> 
> Returns the middle Section in the collection.
*** 
> Section **previousItem**( Section **obj** )
> 
> Returns the Section with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Section | obj | The index of the Section that follows the desired Section. |

*** 
> Section **nextItem**( Section **obj** )
> 
> Returns the Section whose index follows the specified Section in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Section | obj | The Section whose index comes before the desired Section. |

*** 
> Section **anyItem**()
> 
> Returns any Section in the collection.
*** 
> Section **everyItem**()
> 
> Returns every Section in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Section.
*** 
> Section **[]**( Number **index** )
> 
> Returns the Section with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


