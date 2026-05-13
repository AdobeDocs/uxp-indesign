# MovieBehaviors
A collection of movie behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the MovieBehavior.
<HorizontalLine />
> MovieBehavior **add**( Object **withProperties** )
> 
> Creates a new MovieBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new MovieBehavior (Optional) |

<HorizontalLine />
> MovieBehavior **item**( Mixed **index** )
> 
> Returns the MovieBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> MovieBehavior **itemByName**( String **name** )
> 
> Returns the MovieBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> MovieBehavior **itemByID**( Number **id** )
> 
> Returns the MovieBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> MovieBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MovieBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MovieBehavior, index, or name at the beginning of the range. Can accept: MovieBehavior, Long Integer or String. |
| Mixed | to | The MovieBehavior, index, or name at the end of the range. Can accept: MovieBehavior, Long Integer or String. |

<HorizontalLine />
> MovieBehavior **firstItem**()
> 
> Returns the first MovieBehavior in the collection.
<HorizontalLine />
> MovieBehavior **lastItem**()
> 
> Returns the last MovieBehavior in the collection.
<HorizontalLine />
> MovieBehavior **middleItem**()
> 
> Returns the middle MovieBehavior in the collection.
<HorizontalLine />
> MovieBehavior **previousItem**( MovieBehavior **obj** )
> 
> Returns the MovieBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MovieBehavior | obj | The index of the MovieBehavior that follows the desired MovieBehavior. |

<HorizontalLine />
> MovieBehavior **nextItem**( MovieBehavior **obj** )
> 
> Returns the MovieBehavior whose index follows the specified MovieBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MovieBehavior | obj | The MovieBehavior whose index comes before the desired MovieBehavior. |

<HorizontalLine />
> MovieBehavior **anyItem**()
> 
> Returns any MovieBehavior in the collection.
<HorizontalLine />
> MovieBehavior **everyItem**()
> 
> Returns every MovieBehavior in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the MovieBehavior.
<HorizontalLine />
> MovieBehavior **[]**( Number **index** )
> 
> Returns the MovieBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


