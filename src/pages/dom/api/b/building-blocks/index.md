# BuildingBlocks
A collection of cross reference building blocks.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> BuildingBlock **add**( BuildingBlockTypes **blockType**, CharacterStyle **appliedCharacterStyle**, String **customText**, Object **withProperties** )
> 
> Creates a new cross reference building block.
#### Parameters
| Type | Name | Description |
|---|---|---|
| BuildingBlockTypes | blockType | Type of the building block. |
| CharacterStyle | appliedCharacterStyle | Character style to be applied to the building block. (Optional) |
| String | customText | Building block custom text. Currently this is only useful in custom string building block. It is ignored for other types of building blocks. (Optional) |
| Object | withProperties | Initial values for properties of the new BuildingBlock (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the BuildingBlock.
*** 
> BuildingBlock **item**( Mixed **index** )
> 
> Returns the BuildingBlock with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> BuildingBlock **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the BuildingBlocks within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The BuildingBlock, index, or name at the beginning of the range. Can accept: BuildingBlock, Long Integer or String. |
| Mixed | to | The BuildingBlock, index, or name at the end of the range. Can accept: BuildingBlock, Long Integer or String. |

*** 
> BuildingBlock **firstItem**()
> 
> Returns the first BuildingBlock in the collection.
*** 
> BuildingBlock **lastItem**()
> 
> Returns the last BuildingBlock in the collection.
*** 
> BuildingBlock **middleItem**()
> 
> Returns the middle BuildingBlock in the collection.
*** 
> BuildingBlock **previousItem**( BuildingBlock **obj** )
> 
> Returns the BuildingBlock with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| BuildingBlock | obj | The index of the BuildingBlock that follows the desired BuildingBlock. |

*** 
> BuildingBlock **nextItem**( BuildingBlock **obj** )
> 
> Returns the BuildingBlock whose index follows the specified BuildingBlock in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| BuildingBlock | obj | The BuildingBlock whose index comes before the desired BuildingBlock. |

*** 
> BuildingBlock **anyItem**()
> 
> Returns any BuildingBlock in the collection.
*** 
> BuildingBlock **everyItem**()
> 
> Returns every BuildingBlock in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the BuildingBlock.
*** 
> BuildingBlock **[]**( Number **index** )
> 
> Returns the BuildingBlock with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


