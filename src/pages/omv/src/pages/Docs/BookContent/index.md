# BookContent
A document added to a book.

## Instance
> *Read Only* 
> 
> File **fullName** 
>
> The full path to the BookContent, including the name of the BookContent.
*** 
> *Read Only* 
> 
> BookContentStatus **status** 
>
> The status of the book content object file.
*** 
> *Read Only* 
> 
> Number **size** 
>
> The size of the BookContent file.
*** 
> *Read Only* 
> 
> Date **date** 
>
> The date and time the BookContent was created.
*** 
> *Read Only* 
> 
> String **documentPageRange** 
>
> The page range of the book content object within the book.
*** 
> *Read Only* 
> 
> File **filePath** 
>
> The full path to the file.
*** 
> *Read Only* 
> 
> String **name** 
>
> The name of the BookContent.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the BookContent.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Book **parent** 
>
> The parent of the BookContent (a Book).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the BookContent within its containing object.
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
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **preflight**( File **to**, Boolean **autoOpen** )
> 
> Preflight a book content object and optionally save the resulting report.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The preflight report to save to. (Optional) |
| Boolean | autoOpen | If true, automatically open the report after creation. (Optional) |

*** 
> BookContent **move**( LocationOptions **to**, BookContent **reference** )
> 
> Moves the book content object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location relative to the reference object or within the book. (Optional) |
| BookContent | reference | The reference object. Note: Required when the to parameter specifies before or after. (Optional) |

*** 
> **remove**()
> 
> Deletes the BookContent.
*** 
> BookContent **replace**( File **using** )
> 
> Replaces a book content object with a new file. Note: If the new file replaces the current style source document, the new file becomes the style source document.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | using | The full path name of the new book content object. |

*** 
> **synchronize**()
> 
> Matches the formatting of the book content object to the style source document.
*** 
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

*** 
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the BookContent.
*** 
> BookContent **getElements**()
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


