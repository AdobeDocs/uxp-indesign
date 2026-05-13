# PrintFormBehaviors
A collection of print form behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the PrintFormBehavior.
<HorizontalLine />
> PrintFormBehavior **add**( Object **withProperties** )
> 
> Creates a new PrintFormBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new PrintFormBehavior (Optional) |

<HorizontalLine />
> PrintFormBehavior **item**( Mixed **index** )
> 
> Returns the PrintFormBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> PrintFormBehavior **itemByName**( String **name** )
> 
> Returns the PrintFormBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> PrintFormBehavior **itemByID**( Number **id** )
> 
> Returns the PrintFormBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> PrintFormBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PrintFormBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PrintFormBehavior, index, or name at the beginning of the range. Can accept: PrintFormBehavior, Long Integer or String. |
| Mixed | to | The PrintFormBehavior, index, or name at the end of the range. Can accept: PrintFormBehavior, Long Integer or String. |

<HorizontalLine />
> PrintFormBehavior **firstItem**()
> 
> Returns the first PrintFormBehavior in the collection.
<HorizontalLine />
> PrintFormBehavior **lastItem**()
> 
> Returns the last PrintFormBehavior in the collection.
<HorizontalLine />
> PrintFormBehavior **middleItem**()
> 
> Returns the middle PrintFormBehavior in the collection.
<HorizontalLine />
> PrintFormBehavior **previousItem**( PrintFormBehavior **obj** )
> 
> Returns the PrintFormBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PrintFormBehavior | obj | The index of the PrintFormBehavior that follows the desired PrintFormBehavior. |

<HorizontalLine />
> PrintFormBehavior **nextItem**( PrintFormBehavior **obj** )
> 
> Returns the PrintFormBehavior whose index follows the specified PrintFormBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PrintFormBehavior | obj | The PrintFormBehavior whose index comes before the desired PrintFormBehavior. |

<HorizontalLine />
> PrintFormBehavior **anyItem**()
> 
> Returns any PrintFormBehavior in the collection.
<HorizontalLine />
> PrintFormBehavior **everyItem**()
> 
> Returns every PrintFormBehavior in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the PrintFormBehavior.
<HorizontalLine />
> PrintFormBehavior **[]**( Number **index** )
> 
> Returns the PrintFormBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


