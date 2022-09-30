# DataMergeOption
Data merge options.

## Instance
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
> The parent of the DataMergeOption (a Application or Document).
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
> Fitting **fittingOption** 
>
> Instructions for fitting content in a frame.
*** 
> Boolean **centerImage** 
>
> If true, centers the image in the frame; preserves the frame size as well as content size and proportions. Note: If the content is larger than the frame, content around the edges is obscured by the bounding box of the frame. This doesn't work with fittingOption CONTENT_AWARE_FIT
*** 
> Boolean **linkImages** 
>
> If true, links images to the target document. If false, embeds images in the target document.
*** 
> Boolean **removeBlankLines** 
>
> If true, removes blank lines caused by empty fields.
*** 
> Boolean **createNewDocument** 
>
> If true, creates a new document when records are merged.
*** 
> Number **documentSize** 
>
> The maximum number of pages per document.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the DataMergeOption.
*** 
> DataMergeOption **getElements**()
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


