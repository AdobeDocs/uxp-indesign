# XMLAttribute
An XML attribute.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> XMLElement **parent** 
>
> The parent of the XMLAttribute (a XMLElement).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the XMLAttribute within its containing object.
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
> String **name** 
>
> The name of the XMLAttribute.
*** 
> String **value** 
>
> The value of the XMLAttribute.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the XMLAttribute.
*** 
> XMLElement **convertToElement**( XMLElementLocation **located**, XMLTag **markupTag** )
> 
> Converts the XML attribute to a child element of its parent element.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLElementLocation | located | The location of the new XML element within the parent XML element of the XML attribute. (Optional) |
| XMLTag | markupTag | The XML tag to apply to the new XML element. (Optional) |

*** 
> **select**( SelectionOptions **existingSelection** )
> 
> Selects the object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SelectionOptions | existingSelection | The selection status of the XMLAttribute in relation to previously selected objects. (Optional) |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLAttribute.
*** 
> XMLAttribute **getElements**()
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


