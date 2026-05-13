# DataMerge
A data merge object.

## Instance
> *Read Only* 
> 
> DataMergePreference **dataMergePreferences** 
>
> The data merge preference properties that define the layout and content of the target page.
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
> The parent of the DataMerge (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Preferences **preferences** 
>
> A collection of preferences objects.
<HorizontalLine />
> *Read Only* 
> 
> DataMergeFields **dataMergeFields** 
>
> A collection of data merge fields.
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
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **selectDataSource**( File **dataSourceFile** )
> 
> Specifies the file to use as the data source.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | dataSourceFile | The path to the data source file. |

<HorizontalLine />
> **updateDataSource**()
> 
> Updates the data source file with the most current data.
<HorizontalLine />
> **removeDataSource**()
> 
> Removes the data source.
<HorizontalLine />
> **mergeRecords**( File **outputOversetReportFile** )
> 
> Merges records and produces an optional overset report.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | outputOversetReportFile | The path to the file in which to store the overset report. (Optional) |

<HorizontalLine />
> **exportFile**( File **to**, PDFExportPreset **using**, File **outputOversetReportFile** )
> 
> Merges records and exports to PDF.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The path of exported PDF file. |
| PDFExportPreset | using | The PDF export style to use. (Optional) |
| File | outputOversetReportFile | The path to the file in which to store the overset report. (Optional) |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the DataMerge.
<HorizontalLine />
> DataMerge **getElements**()
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


