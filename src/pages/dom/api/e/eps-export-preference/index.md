# EPSExportPreference
EPS export preferences.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the EPSExportPreference (a Application).
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
> Measurement Unit (Number or String)=any **bleedBottom** 
>
> The height of the bleed area at the bottom of the page. Note: Valid only when use document bleed to print is true.
*** 
> Measurement Unit (Number or String)=any **bleedInside** 
>
> The width of the bleed area at the inside of the page. Note: Valid only when use document bleed to print is true.
*** 
> Measurement Unit (Number or String)=any **bleedOutside** 
>
> The width of the bleed area at the outside of the page. Note: Valid only when use document bleed to print is true.
*** 
> Measurement Unit (Number or String)=any **bleedTop** 
>
> The height of the bleed area at the top of the page. Note: Valid only when use document bleed to print is true.
*** 
> EPSColorSpace **epsColor** 
>
> The color space for representing color in the exported EPS.
*** 
> DataFormat **dataFormat** 
>
> The format in which to send image data to the printer.
*** 
> FlattenerPreset **appliedFlattenerPreset** 
>
> The transparency flattener preset to use.
*** 
> FontEmbedding **fontEmbedding** 
>
> Controls how fonts are embedded in the exported EPS.
*** 
> Boolean **ignoreSpreadOverrides** 
>
> If true, ignores flattener spread overrides.
*** 
> Boolean **omitBitmaps** 
>
> If true, replaces bitmap images with OPI links.
*** 
> Boolean **omitEPS** 
>
> If true, replaces EPS images with OPI links.
*** 
> Boolean **omitPDF** 
>
> If true, replaces PDF images with OPI links.
*** 
> Boolean **opiImageReplacement** 
>
> If true, prints graphics that are either OPI comments stored in imported EPS files or linked using OPI comments. For information on linking files using OPI comments, see omit EPS, omit PDF, or omit bitmaps.
*** 
> Mixed **pageRange** 
>
> The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). Can return: PageRange enumerator or String.
*** 
> PreviewTypes **preview** 
>
> The file format of the preview image saved with the exported EPS file.
*** 
> PostScriptLevels **postscriptLevel** 
>
> The PostScript level of the printer.
*** 
> Boolean **epsSpreads** 
>
> If true, exports facing pages as a single page that has the width of the spread. If false, exports spread pages as separate pages.
*** 
> EPSImageData **imageData** 
>
> The image data to export to the EPS document.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the EPSExportPreference.
*** 
> EPSExportPreference **getElements**()
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


