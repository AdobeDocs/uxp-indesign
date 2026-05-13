# MasterSpreads
A collection of master spreads.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> MasterSpread **add**( Number **pagesPerSpread**, Object **withProperties** )
> 
> Creates a new master spread.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | pagesPerSpread | The number of pages to include in the master spread. (Optional) |
| Object | withProperties | Initial values for properties of the new MasterSpread (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the MasterSpread.
<HorizontalLine />
> MasterSpread **item**( Mixed **index** )
> 
> Returns the MasterSpread with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> MasterSpread **itemByName**( String **name** )
> 
> Returns the MasterSpread with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> MasterSpread **itemByID**( Number **id** )
> 
> Returns the MasterSpread with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> MasterSpread **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MasterSpreads within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MasterSpread, index, or name at the beginning of the range. Can accept: MasterSpread, Long Integer or String. |
| Mixed | to | The MasterSpread, index, or name at the end of the range. Can accept: MasterSpread, Long Integer or String. |

<HorizontalLine />
> MasterSpread **firstItem**()
> 
> Returns the first MasterSpread in the collection.
<HorizontalLine />
> MasterSpread **lastItem**()
> 
> Returns the last MasterSpread in the collection.
<HorizontalLine />
> MasterSpread **middleItem**()
> 
> Returns the middle MasterSpread in the collection.
<HorizontalLine />
> MasterSpread **previousItem**( MasterSpread **obj** )
> 
> Returns the MasterSpread with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MasterSpread | obj | The index of the MasterSpread that follows the desired MasterSpread. |

<HorizontalLine />
> MasterSpread **nextItem**( MasterSpread **obj** )
> 
> Returns the MasterSpread whose index follows the specified MasterSpread in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MasterSpread | obj | The MasterSpread whose index comes before the desired MasterSpread. |

<HorizontalLine />
> MasterSpread **anyItem**()
> 
> Returns any MasterSpread in the collection.
<HorizontalLine />
> MasterSpread **everyItem**()
> 
> Returns every MasterSpread in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the MasterSpread.
<HorizontalLine />
> MasterSpread **[]**( Number **index** )
> 
> Returns the MasterSpread with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


