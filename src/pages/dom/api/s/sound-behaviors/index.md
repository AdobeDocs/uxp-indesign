# SoundBehaviors
A collection of sound behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the SoundBehavior.
<HorizontalLine />
> SoundBehavior **add**( Object **withProperties** )
> 
> Creates a new SoundBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new SoundBehavior (Optional) |

<HorizontalLine />
> SoundBehavior **item**( Mixed **index** )
> 
> Returns the SoundBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> SoundBehavior **itemByName**( String **name** )
> 
> Returns the SoundBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> SoundBehavior **itemByID**( Number **id** )
> 
> Returns the SoundBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> SoundBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the SoundBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The SoundBehavior, index, or name at the beginning of the range. Can accept: SoundBehavior, Long Integer or String. |
| Mixed | to | The SoundBehavior, index, or name at the end of the range. Can accept: SoundBehavior, Long Integer or String. |

<HorizontalLine />
> SoundBehavior **firstItem**()
> 
> Returns the first SoundBehavior in the collection.
<HorizontalLine />
> SoundBehavior **lastItem**()
> 
> Returns the last SoundBehavior in the collection.
<HorizontalLine />
> SoundBehavior **middleItem**()
> 
> Returns the middle SoundBehavior in the collection.
<HorizontalLine />
> SoundBehavior **previousItem**( SoundBehavior **obj** )
> 
> Returns the SoundBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SoundBehavior | obj | The index of the SoundBehavior that follows the desired SoundBehavior. |

<HorizontalLine />
> SoundBehavior **nextItem**( SoundBehavior **obj** )
> 
> Returns the SoundBehavior whose index follows the specified SoundBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SoundBehavior | obj | The SoundBehavior whose index comes before the desired SoundBehavior. |

<HorizontalLine />
> SoundBehavior **anyItem**()
> 
> Returns any SoundBehavior in the collection.
<HorizontalLine />
> SoundBehavior **everyItem**()
> 
> Returns every SoundBehavior in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the SoundBehavior.
<HorizontalLine />
> SoundBehavior **[]**( Number **index** )
> 
> Returns the SoundBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


