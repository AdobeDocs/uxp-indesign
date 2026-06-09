# DisplaySettings
Display setting properties.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the DisplaySetting.
<HorizontalLine />
> DisplaySetting **item**( Mixed **index** )
> 
> Returns the DisplaySetting with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> DisplaySetting **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the DisplaySettings within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The DisplaySetting, index, or name at the beginning of the range. Can accept: DisplaySetting, Long Integer or String. |
| Mixed | to | The DisplaySetting, index, or name at the end of the range. Can accept: DisplaySetting, Long Integer or String. |

<HorizontalLine />
> DisplaySetting **firstItem**()
> 
> Returns the first DisplaySetting in the collection.
<HorizontalLine />
> DisplaySetting **lastItem**()
> 
> Returns the last DisplaySetting in the collection.
<HorizontalLine />
> DisplaySetting **middleItem**()
> 
> Returns the middle DisplaySetting in the collection.
<HorizontalLine />
> DisplaySetting **previousItem**( DisplaySetting **obj** )
> 
> Returns the DisplaySetting with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DisplaySetting | obj | The index of the DisplaySetting that follows the desired DisplaySetting. |

<HorizontalLine />
> DisplaySetting **nextItem**( DisplaySetting **obj** )
> 
> Returns the DisplaySetting whose index follows the specified DisplaySetting in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DisplaySetting | obj | The DisplaySetting whose index comes before the desired DisplaySetting. |

<HorizontalLine />
> DisplaySetting **anyItem**()
> 
> Returns any DisplaySetting in the collection.
<HorizontalLine />
> DisplaySetting **everyItem**()
> 
> Returns every DisplaySetting in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the DisplaySetting.
<HorizontalLine />
> DisplaySetting **[]**( Number **index** )
> 
> Returns the DisplaySetting with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


