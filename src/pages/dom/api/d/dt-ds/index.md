# DTDs
A collection of DTDs.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the DTD.
<HorizontalLine />
> DTD **item**( Mixed **index** )
> 
> Returns the DTD with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> DTD **itemByID**( Number **id** )
> 
> Returns the DTD with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> DTD **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the DTDs within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The DTD, index, or name at the beginning of the range. Can accept: DTD, Long Integer or String. |
| Mixed | to | The DTD, index, or name at the end of the range. Can accept: DTD, Long Integer or String. |

<HorizontalLine />
> DTD **firstItem**()
> 
> Returns the first DTD in the collection.
<HorizontalLine />
> DTD **lastItem**()
> 
> Returns the last DTD in the collection.
<HorizontalLine />
> DTD **middleItem**()
> 
> Returns the middle DTD in the collection.
<HorizontalLine />
> DTD **previousItem**( DTD **obj** )
> 
> Returns the DTD with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DTD | obj | The index of the DTD that follows the desired DTD. |

<HorizontalLine />
> DTD **nextItem**( DTD **obj** )
> 
> Returns the DTD whose index follows the specified DTD in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DTD | obj | The DTD whose index comes before the desired DTD. |

<HorizontalLine />
> DTD **anyItem**()
> 
> Returns any DTD in the collection.
<HorizontalLine />
> DTD **everyItem**()
> 
> Returns every DTD in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the DTD.
<HorizontalLine />
> DTD **[]**( Number **index** )
> 
> Returns the DTD with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


