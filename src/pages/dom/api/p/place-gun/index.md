# PlaceGun
Represents the place gun.

## Instance
> *Read Only* 
> 
> Boolean **loaded** 
>
> Whether the place gun is currently loaded with content for placing.
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
> The parent of the PlaceGun (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Snippets **snippets** 
>
> A collection of IDML snippets.
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
> PageItems **pageItems** 
>
> The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
<HorizontalLine />
> *Read Only* 
> 
> TextFrames **textFrames** 
>
> A collection of text frames.
<HorizontalLine />
> *Read Only* 
> 
> Rectangles **rectangles** 
>
> A collection of rectangles.
<HorizontalLine />
> *Read Only* 
> 
> SplineItems **splineItems** 
>
> The spline items collection.
<HorizontalLine />
> *Read Only* 
> 
> Ovals **ovals** 
>
> A collection of ellipses.
<HorizontalLine />
> *Read Only* 
> 
> GraphicLines **graphicLines** 
>
> A collection of graphic lines.
<HorizontalLine />
> *Read Only* 
> 
> Polygons **polygons** 
>
> A collection of polygons.
<HorizontalLine />
> *Read Only* 
> 
> Groups **groups** 
>
> A collection of groups.
<HorizontalLine />
> *Read Only* 
> 
> Buttons **buttons** 
>
> A collection of buttons.
<HorizontalLine />
> *Read Only* 
> 
> FormFields **formFields** 
>
> A collection of form fields.
<HorizontalLine />
> *Read Only* 
> 
> MultiStateObjects **multiStateObjects** 
>
> A collection of multi-state objects.
<HorizontalLine />
> *Read Only* 
> 
> EPSTexts **epstexts** 
>
> EPSTexts
<HorizontalLine />
> *Read Only* 
> 
> Images **images** 
>
> A collection of bitmap images in any bitmap file format (including TIFF, JPEG, or GIF).
<HorizontalLine />
> *Read Only* 
> 
> Graphics **graphics** 
>
> A collection of imported graphics in any graphic file format (vector, metafile, or bitmap).
<HorizontalLine />
> *Read Only* 
> 
> EPSs **epss** 
>
> A collection of EPS files.
<HorizontalLine />
> *Read Only* 
> 
> WMFs **wmfs** 
>
> A collection of WMF graphics.
<HorizontalLine />
> *Read Only* 
> 
> PICTs **picts** 
>
> A collection of PICT graphics.
<HorizontalLine />
> *Read Only* 
> 
> PDFs **pdfs** 
>
> A collection of PDF files.
<HorizontalLine />
> *Read Only* 
> 
> ImportedPages **importedPages** 
>
> Imported InDesign pages.
<HorizontalLine />
> *Read Only* 
> 
> CheckBoxes **checkBoxes** 
>
> A collection of checkboxes.
<HorizontalLine />
> *Read Only* 
> 
> ComboBoxes **comboBoxes** 
>
> A collection of comboboxes.
<HorizontalLine />
> *Read Only* 
> 
> ListBoxes **listBoxes** 
>
> A collection of listboxes.
<HorizontalLine />
> *Read Only* 
> 
> RadioButtons **radioButtons** 
>
> A collection of radio buttons.
<HorizontalLine />
> *Read Only* 
> 
> TextBoxes **textBoxes** 
>
> A collection of text boxes.
<HorizontalLine />
> *Read Only* 
> 
> SignatureFields **signatureFields** 
>
> A collection of signature fields.
<HorizontalLine />
> *Read Only* 
> 
> SVGs **svgs** 
>
> A collection of SVG files.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **abortPlaceGun**()
> 
> Delete the contents of the place gun.
<HorizontalLine />
> **rotate**( RotationDirection **direction** )
> 
> Rotate the contents of the place gun.
#### Parameters
| Type | Name | Description |
|---|---|---|
| RotationDirection | direction | Which direction to rotate the contents (Optional) |

<HorizontalLine />
> **loadPlaceGun**( Mixed **fileName**, Boolean **showingOptions**, Object **withProperties** )
> 
> Load the place gun with one or more files.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | fileName | One or more files to place. Can accept: File or Array of Files. |
| Boolean | showingOptions | Whether to display the import options dialog (Optional) |
| Object | withProperties | Initial values for properties of the placed object(s) (Optional) |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the PlaceGun.
<HorizontalLine />
> PlaceGun **getElements**()
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


