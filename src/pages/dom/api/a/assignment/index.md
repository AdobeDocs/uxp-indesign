# Assignment
An assignment.

## Instance
> *Read Only* 
> 
> File **documentPath** 
>
> The path to the document that the hyperlink destination points to.
<HorizontalLine />
> *Read Only* 
> 
> AssignmentStatus **assignmentFileStatus** 
>
> The status of the assignment file.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **packaged** 
>
> If true, the assignment is packaged.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **packageUpToDate** 
>
> If true, the assignment package is up to date.
<HorizontalLine />
> *Read Only* 
> 
> String **filePath** 
>
> The file path (colon delimited on the Mac OS). Can also accept: File.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Assignment.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the Assignment (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Assignment within its containing object.
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
> *Read Only* 
> 
> AssignedStories **assignedStories** 
>
> A collection of assigned stories.
<HorizontalLine />
> String **name** 
>
> The name of the Assignment.
<HorizontalLine />
> String **userName** 
>
> The user name to assign to tracked changes and notes.
<HorizontalLine />
> AssignmentExportOptions **exportOptions** 
>
> The content to export in the assignment.
<HorizontalLine />
> Mixed **frameColor** 
>
> The color of the assignment's frames. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
<HorizontalLine />
> Boolean **includeLinksWhenPackage** 
>
> If true, includes linked files when packaging the assignment.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
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

<HorizontalLine />
> **remove**()
> 
> Deletes the assignment and its file.
<HorizontalLine />
> File **createPackage**( File **filePath**, Boolean **submit**, Object **withProperties** )
> 
> Creates an assignment package.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | filePath | The full path name of the assignment package file. |
| Boolean | submit | If true, submits assigned stories before packaging the assignment. (Optional) |
| Object | withProperties | Initial values for properties of the new Assignment (Optional) |

<HorizontalLine />
> **cancelPackage**()
> 
> Cancels the package for an assignment.
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
> Generates a string which, if executed, will return the Assignment.
<HorizontalLine />
> Assignment **getElements**()
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


