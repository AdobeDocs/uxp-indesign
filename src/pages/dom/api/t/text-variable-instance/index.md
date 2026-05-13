# TextVariableInstance
A text variable instance in the text.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the TextVariableInstance.
<HorizontalLine />
> *Read Only* 
> 
> String **resultText** 
>
> The text that replaces the variable marker. Note: This property cannot be set; it can be used only to update variables. .
<HorizontalLine />
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
> The unique ID of the TextVariableInstance.
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
> The parent of the TextVariableInstance (a XmlStory, TextFrame, EndnoteTextFrame, Story, Note, Cell, Footnote or Change).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the TextVariableInstance within its containing object.
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
> TextVariable **associatedTextVariable** 
>
> The associated text variable.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the TextVariableInstance.
<HorizontalLine />
> Text **convertToText**()
> 
> Converts the footnote to part of the story text and places the converted text at the former location of the footnote marker in the text.
<HorizontalLine />
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

<HorizontalLine />
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextVariableInstance.
<HorizontalLine />
> TextVariableInstance **getElements**()
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


