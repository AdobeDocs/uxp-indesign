# TextVariableInstances
A collection of text variable instances.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the TextVariableInstance.
*** 
> TextVariableInstance **add**( LocationOptions **to**, Mixed **reference**, Object **withProperties** )
> 
> Creates a text variable instance at the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location relative to the reference object or within the containing object. (Optional) |
| Mixed | reference | The reference object. Note: Required only when the to parameter specifies before or after. Can accept: TextVariableInstance, XmlStory, TextFrame, EndnoteTextFrame, Story, Note, Cell, Footnote, Table, TextColumn, TextStyleRange, Text, InsertionPoint, Paragraph, Line, Word, Character or Change. (Optional) |
| Object | withProperties | Initial values for properties of the new TextVariableInstance (Optional) |

*** 
> TextVariableInstance **item**( Mixed **index** )
> 
> Returns the TextVariableInstance with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TextVariableInstance **itemByName**( String **name** )
> 
> Returns the TextVariableInstance with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> TextVariableInstance **itemByID**( Number **id** )
> 
> Returns the TextVariableInstance with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> TextVariableInstance **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TextVariableInstances within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TextVariableInstance, index, or name at the beginning of the range. Can accept: TextVariableInstance, Long Integer or String. |
| Mixed | to | The TextVariableInstance, index, or name at the end of the range. Can accept: TextVariableInstance, Long Integer or String. |

*** 
> TextVariableInstance **firstItem**()
> 
> Returns the first TextVariableInstance in the collection.
*** 
> TextVariableInstance **lastItem**()
> 
> Returns the last TextVariableInstance in the collection.
*** 
> TextVariableInstance **middleItem**()
> 
> Returns the middle TextVariableInstance in the collection.
*** 
> TextVariableInstance **previousItem**( TextVariableInstance **obj** )
> 
> Returns the TextVariableInstance with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextVariableInstance | obj | The index of the TextVariableInstance that follows the desired TextVariableInstance. |

*** 
> TextVariableInstance **nextItem**( TextVariableInstance **obj** )
> 
> Returns the TextVariableInstance whose index follows the specified TextVariableInstance in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextVariableInstance | obj | The TextVariableInstance whose index comes before the desired TextVariableInstance. |

*** 
> TextVariableInstance **anyItem**()
> 
> Returns any TextVariableInstance in the collection.
*** 
> TextVariableInstance **everyItem**()
> 
> Returns every TextVariableInstance in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextVariableInstance.
*** 
> TextVariableInstance **[]**( Number **index** )
> 
> Returns the TextVariableInstance with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


