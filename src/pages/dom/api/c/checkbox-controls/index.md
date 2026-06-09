# CheckboxControls
A collection of checkbox controls.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> CheckboxControl **add**( Object **withProperties** )
> 
> Creates a new CheckboxControl.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new CheckboxControl (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the CheckboxControl.
<HorizontalLine />
> CheckboxControl **item**( Mixed **index** )
> 
> Returns the CheckboxControl with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> CheckboxControl **itemByID**( Number **id** )
> 
> Returns the CheckboxControl with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> CheckboxControl **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the CheckboxControls within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The CheckboxControl, index, or name at the beginning of the range. Can accept: CheckboxControl, Long Integer or String. |
| Mixed | to | The CheckboxControl, index, or name at the end of the range. Can accept: CheckboxControl, Long Integer or String. |

<HorizontalLine />
> CheckboxControl **firstItem**()
> 
> Returns the first CheckboxControl in the collection.
<HorizontalLine />
> CheckboxControl **lastItem**()
> 
> Returns the last CheckboxControl in the collection.
<HorizontalLine />
> CheckboxControl **middleItem**()
> 
> Returns the middle CheckboxControl in the collection.
<HorizontalLine />
> CheckboxControl **previousItem**( CheckboxControl **obj** )
> 
> Returns the CheckboxControl with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CheckboxControl | obj | The index of the CheckboxControl that follows the desired CheckboxControl. |

<HorizontalLine />
> CheckboxControl **nextItem**( CheckboxControl **obj** )
> 
> Returns the CheckboxControl whose index follows the specified CheckboxControl in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CheckboxControl | obj | The CheckboxControl whose index comes before the desired CheckboxControl. |

<HorizontalLine />
> CheckboxControl **anyItem**()
> 
> Returns any CheckboxControl in the collection.
<HorizontalLine />
> CheckboxControl **everyItem**()
> 
> Returns every CheckboxControl in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the CheckboxControl.
<HorizontalLine />
> CheckboxControl **[]**( Number **index** )
> 
> Returns the CheckboxControl with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


