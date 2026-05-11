# XMLInstructions
A collection of XML instructions.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the XMLInstruction.
*** 
> XMLInstruction **add**( String **target**, String **data**, Mixed **storyOffset**, Object **withProperties** )
> 
> Creates a new XML processing instruction.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | target | A name that identifies the processing instruction to an application reading the exported XML file. |
| String | data | A value that tells the application what to do with the processing instruction identified in the target. (Optional) |
| Mixed | storyOffset | The location within the story, specified as an insertion point. Can accept: InsertionPoint or Long Integer. (Optional) |
| Object | withProperties | Initial values for properties of the new XMLInstruction (Optional) |

*** 
> XMLInstruction **item**( Mixed **index** )
> 
> Returns the XMLInstruction with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> XMLInstruction **itemByID**( Number **id** )
> 
> Returns the XMLInstruction with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> XMLInstruction **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the XMLInstructions within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The XMLInstruction, index, or name at the beginning of the range. Can accept: XMLInstruction, Long Integer or String. |
| Mixed | to | The XMLInstruction, index, or name at the end of the range. Can accept: XMLInstruction, Long Integer or String. |

*** 
> XMLInstruction **firstItem**()
> 
> Returns the first XMLInstruction in the collection.
*** 
> XMLInstruction **lastItem**()
> 
> Returns the last XMLInstruction in the collection.
*** 
> XMLInstruction **middleItem**()
> 
> Returns the middle XMLInstruction in the collection.
*** 
> XMLInstruction **previousItem**( XMLInstruction **obj** )
> 
> Returns the XMLInstruction with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLInstruction | obj | The index of the XMLInstruction that follows the desired XMLInstruction. |

*** 
> XMLInstruction **nextItem**( XMLInstruction **obj** )
> 
> Returns the XMLInstruction whose index follows the specified XMLInstruction in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLInstruction | obj | The XMLInstruction whose index comes before the desired XMLInstruction. |

*** 
> XMLInstruction **anyItem**()
> 
> Returns any XMLInstruction in the collection.
*** 
> XMLInstruction **everyItem**()
> 
> Returns every XMLInstruction in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLInstruction.
*** 
> XMLInstruction **[]**( Number **index** )
> 
> Returns the XMLInstruction with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


