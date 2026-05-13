# XMLInstruction
An XML processing instruction.

## Instance
> *Read Only* 
> 
> InsertionPoint **storyOffset** 
>
> The insertion point before the table in the story containing the table.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the XMLInstruction.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the XMLInstruction (a Document or XMLElement).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the XMLInstruction within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> Events **events** 
>
> A collection of events.
<HorizontalLine />
> *Read Only* 
> 
> EventListeners **eventListeners** 
>
> A collection of event listeners.
<HorizontalLine />
> String **target** 
>
> A name that identifies the processing instruction to an application reading the exported XML file.
<HorizontalLine />
> String **data** 
>
> A value that tells the application reading the exported XML file what to do with the processing instruction.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> XMLInstruction **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the element to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location in relation to the reference object or within the containing object. |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. . Can accept: XMLItem or Text. (Optional) |

<HorizontalLine />
> XMLInstruction **duplicate**()
> 
> Duplicates the XMLInstruction.
<HorizontalLine />
> **remove**()
> 
> Deletes the XMLInstruction.
<HorizontalLine />
> **select**( SelectionOptions **existingSelection** )
> 
> Selects the object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SelectionOptions | existingSelection | The selection status of the XMLInstruction in relation to previously selected objects. (Optional) |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLInstruction.
<HorizontalLine />
> XMLInstruction **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
<HorizontalLine />
> String **toSpecifier**()
> 
> Retrieves the object specifier.
<HorizontalLine />
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Adds an event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

<HorizontalLine />
> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Removes the event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |


