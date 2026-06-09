# PDFComment
PDF comment object

## Instance
> *Read Only* 
> 
> String **commentReviewer** 
>
> The name of the reviewer who made the comment
<HorizontalLine />
> *Read Only* 
> 
> String **commentContent** 
>
> The content of the comment
<HorizontalLine />
> *Read Only* 
> 
> Date **commentDate** 
>
> The date of the comment
<HorizontalLine />
> *Read Only* 
> 
> CommentTypeEnum **commentType** 
>
> The type of the comment
<HorizontalLine />
> *Read Only* 
> 
> String **commentFilePath** 
>
> The file path of the comment
<HorizontalLine />
> *Read Only* 
> 
> Mixed **commentPathGeometry** 
>
> Path geometry of the comment. Can return: Ordered array containing pathPointArray:Array of Ordered array containing anchor:Array of 2 Reals, leftDirection:Array of 2 Reals, rightDirection:Array of 2 Reals, pathOpen:Boolean.
<HorizontalLine />
> *Read Only* 
> 
> CommentStatusEnum **commentStatus** 
>
> The status of the comment
<HorizontalLine />
> *Read Only* 
> 
> Boolean **commentIsOrphan** 
>
> Whether the comment is an orphan
<HorizontalLine />
> *Read Only* 
> 
> Boolean **commentIsApplied** 
>
> Whether the comment has been applied
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the PDFComment.
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
> The parent of the PDFComment (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the PDFComment within its containing object.
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
> Replies **replies** 
>
> A collection of reply objects
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> String **name** 
>
> The name of the PDFComment; this is an alias to the PDFComment's label property.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the PDFComment.
<HorizontalLine />
> **changeStatus**( CommentStatusEnum **commentStatus**, Object **withProperties** )
> 
> Change the status of a comment
#### Parameters
| Type | Name | Description |
|---|---|---|
| CommentStatusEnum | commentStatus | The new status of the comment |
| Object | withProperties | Initial values for properties of the new PDFComment (Optional) |

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
> Generates a string which, if executed, will return the PDFComment.
<HorizontalLine />
> PDFComment **getElements**()
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


