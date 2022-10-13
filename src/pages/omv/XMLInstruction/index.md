# XMLInstruction
An XML processing instruction.

## Instance
> *Read Only* 
> 
> InsertionPoint **storyOffset** 
>
> The insertion point before the table in the story containing the table.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the XMLInstruction.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the XMLInstruction (a Document or XMLElement).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the XMLInstruction within its containing object.
*** 
> *Read Only* 
> 
> Events **events** 
>
> A collection of events.
*** 
> *Read Only* 
> 
> EventListeners **eventListeners** 
>
> A collection of event listeners.
*** 
> String **target** 
>
> A name that identifies the processing instruction to an application reading the exported XML file.
*** 
> String **data** 
>
> A value that tells the application reading the exported XML file what to do with the processing instruction.
*** 
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

*** 
> XMLInstruction **duplicate**()
> 
> Duplicates the XMLInstruction.
*** 
> **remove**()
> 
> Deletes the XMLInstruction.
*** 
> **select**( SelectionOptions **existingSelection** )
> 
> Selects the object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SelectionOptions | existingSelection | The selection status of the XMLInstruction in relation to previously selected objects. (Optional) |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLInstruction.
*** 
> XMLInstruction **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
*** 
> String **toSpecifier**()
> 
> Retrieves the object specifier.
*** 
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Adds an event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

*** 
> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Removes the event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |


