# DataMergePreference
Data merge preferences.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> DataMerge **parent** 
>
> The parent of the DataMergePreference (a DataMerge).
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
> RecordSelection **recordSelection** 
>
> The records to merge.
*** 
> Measurement Unit (Number or String)=any **leftMargin** 
>
> The offset value of the left margin in the target document.
*** 
> Measurement Unit (Number or String)=any **topMargin** 
>
> The offset value of the top margin in the target document.
*** 
> Measurement Unit (Number or String)=any **rightMargin** 
>
> The offset value of the right margin in the target document.
*** 
> Measurement Unit (Number or String)=any **bottomMargin** 
>
> The offset value of the bottom margin in the target document.
*** 
> ArrangeBy **arrangeBy** 
>
> The order in which to arrange multiple records on the page in the target document.
*** 
> Measurement Unit (Number or String)=any **rowSpacing** 
>
> The amount of space between rows of records in the target document.
*** 
> Measurement Unit (Number or String)=any **columnSpacing** 
>
> The amount of space between columns of records in the target document.
*** 
> Number **recordNumber** 
>
> The number of the record to merge. Note: Valid only when record selection is one record.
*** 
> String **recordRange** 
>
> The range of records to merge. Note: Valid only when record selection is range.
*** 
> RecordsPerPage **recordsPerPage** 
>
> The number of records to place on each page in the document.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> Boolean **alertMissingImages**( File **outputMissingImagesReportFile** )
> 
> If true, lists missing images in the specified output file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | outputMissingImagesReportFile | The path to the output file. |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the DataMergePreference.
*** 
> DataMergePreference **getElements**()
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


