# Assignment
An assignment.

## Instance
> *Read Only* 
> 
> File **documentPath** 
>
> The path to the document that the hyperlink destination points to.
*** 
> *Read Only* 
> 
> AssignmentStatus **assignmentFileStatus** 
>
> The status of the assignment file.
*** 
> *Read Only* 
> 
> Boolean **packaged** 
>
> If true, the assignment is packaged.
*** 
> *Read Only* 
> 
> Boolean **packageUpToDate** 
>
> If true, the assignment package is up to date.
*** 
> *Read Only* 
> 
> String **filePath** 
>
> The file path (colon delimited on the Mac OS). Can also accept: File.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Assignment.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the Assignment (a Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Assignment within its containing object.
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
> *Read Only* 
> 
> AssignedStories **assignedStories** 
>
> A collection of assigned stories.
*** 
> String **name** 
>
> The name of the Assignment.
*** 
> String **userName** 
>
> The user name to assign to tracked changes and notes.
*** 
> AssignmentExportOptions **exportOptions** 
>
> The content to export in the assignment.
*** 
> Mixed **frameColor** 
>
> The color of the assignment's frames. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
*** 
> Boolean **includeLinksWhenPackage** 
>
> If true, includes linked files when packaging the assignment.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **update**( String **versionComments**, Boolean **forceSave** )
> 
> Updates the assignment file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | versionComments | The comment for this version. (Optional) |
| Boolean | forceSave | If true, forcibly saves a version. (Optional) |

*** 
> **remove**()
> 
> Deletes the assignment and its file.
*** 
> File **createPackage**( File **filePath**, Boolean **submit**, Object **withProperties** )
> 
> Creates an assignment package.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | filePath | The full path name of the assignment package file. |
| Boolean | submit | If true, submits assigned stories before packaging the assignment. (Optional) |
| Object | withProperties | Initial values for properties of the new Assignment (Optional) |

*** 
> **cancelPackage**()
> 
> Cancels the package for an assignment.
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
> Generates a string which, if executed, will return the Assignment.
*** 
> Assignment **getElements**()
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


