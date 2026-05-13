# DataMergeOption
Data merge options.

## Instance
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
> The parent of the DataMergeOption (a Application or Document).
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
> Fitting **fittingOption** 
>
> Instructions for fitting content in a frame.
<HorizontalLine />
> Boolean **centerImage** 
>
> If true, centers the image in the frame; preserves the frame size as well as content size and proportions. Note: If the content is larger than the frame, content around the edges is obscured by the bounding box of the frame. This doesn't work with fittingOption CONTENT_AWARE_FIT
<HorizontalLine />
> Boolean **linkImages** 
>
> If true, links images to the target document. If false, embeds images in the target document.
<HorizontalLine />
> Boolean **removeBlankLines** 
>
> If true, removes blank lines caused by empty fields.
<HorizontalLine />
> Boolean **createNewDocument** 
>
> If true, creates a new document when records are merged.
<HorizontalLine />
> Number **documentSize** 
>
> The maximum number of pages per document.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the DataMergeOption.
<HorizontalLine />
> DataMergeOption **getElements**()
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


