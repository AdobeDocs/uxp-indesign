# Sounds
A collection of sound clips.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Sound **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new Sound
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the Sound. (Optional) |
| LocationOptions | at | The location at which to insert the Sound relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new Sound (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the Sound.
<HorizontalLine />
> Sound **item**( Mixed **index** )
> 
> Returns the Sound with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> Sound **itemByName**( String **name** )
> 
> Returns the Sound with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> Sound **itemByID**( Number **id** )
> 
> Returns the Sound with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> Sound **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Sounds within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Sound, index, or name at the beginning of the range. Can accept: Sound, Long Integer or String. |
| Mixed | to | The Sound, index, or name at the end of the range. Can accept: Sound, Long Integer or String. |

<HorizontalLine />
> Sound **firstItem**()
> 
> Returns the first Sound in the collection.
<HorizontalLine />
> Sound **lastItem**()
> 
> Returns the last Sound in the collection.
<HorizontalLine />
> Sound **middleItem**()
> 
> Returns the middle Sound in the collection.
<HorizontalLine />
> Sound **previousItem**( Sound **obj** )
> 
> Returns the Sound with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Sound | obj | The index of the Sound that follows the desired Sound. |

<HorizontalLine />
> Sound **nextItem**( Sound **obj** )
> 
> Returns the Sound whose index follows the specified Sound in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Sound | obj | The Sound whose index comes before the desired Sound. |

<HorizontalLine />
> Sound **anyItem**()
> 
> Returns any Sound in the collection.
<HorizontalLine />
> Sound **everyItem**()
> 
> Returns every Sound in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Sound.
<HorizontalLine />
> Sound **[]**( Number **index** )
> 
> Returns the Sound with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


