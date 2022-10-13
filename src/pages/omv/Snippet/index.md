# Snippet
An IDML snippet.

## Class
> *Read Only* 
> 
> String **BEFORE_PLACE** = beforePlace
> 
> Dispatched before a Snippet is placed. This event bubbles. This event is cancelable.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Snippet.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> PlaceGun **parent** 
>
> The parent of the Snippet (a PlaceGun).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Snippet within its containing object.
*** 
> *Read Only* 
> 
> PageItems **pageItems** 
>
> The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
*** 
> *Read Only* 
> 
> TextFrames **textFrames** 
>
> A collection of text frames.
*** 
> *Read Only* 
> 
> Rectangles **rectangles** 
>
> A collection of rectangles.
*** 
> *Read Only* 
> 
> SplineItems **splineItems** 
>
> The spline items collection.
*** 
> *Read Only* 
> 
> Ovals **ovals** 
>
> A collection of ellipses.
*** 
> *Read Only* 
> 
> GraphicLines **graphicLines** 
>
> A collection of graphic lines.
*** 
> *Read Only* 
> 
> Polygons **polygons** 
>
> A collection of polygons.
*** 
> *Read Only* 
> 
> Groups **groups** 
>
> A collection of groups.
*** 
> *Read Only* 
> 
> Buttons **buttons** 
>
> A collection of buttons.
*** 
> *Read Only* 
> 
> FormFields **formFields** 
>
> A collection of form fields.
*** 
> *Read Only* 
> 
> MultiStateObjects **multiStateObjects** 
>
> A collection of multi-state objects.
*** 
> *Read Only* 
> 
> EPSTexts **epstexts** 
>
> EPSTexts
*** 
> *Read Only* 
> 
> Images **images** 
>
> A collection of bitmap images in any bitmap file format (including TIFF, JPEG, or GIF).
*** 
> *Read Only* 
> 
> Graphics **graphics** 
>
> A collection of imported graphics in any graphic file format (vector, metafile, or bitmap).
*** 
> *Read Only* 
> 
> EPSs **epss** 
>
> A collection of EPS files.
*** 
> *Read Only* 
> 
> WMFs **wmfs** 
>
> A collection of WMF graphics.
*** 
> *Read Only* 
> 
> PICTs **picts** 
>
> A collection of PICT graphics.
*** 
> *Read Only* 
> 
> PDFs **pdfs** 
>
> A collection of PDF files.
*** 
> *Read Only* 
> 
> CheckBoxes **checkBoxes** 
>
> A collection of checkboxes.
*** 
> *Read Only* 
> 
> ComboBoxes **comboBoxes** 
>
> A collection of comboboxes.
*** 
> *Read Only* 
> 
> ListBoxes **listBoxes** 
>
> A collection of listboxes.
*** 
> *Read Only* 
> 
> RadioButtons **radioButtons** 
>
> A collection of radio buttons.
*** 
> *Read Only* 
> 
> TextBoxes **textBoxes** 
>
> A collection of text boxes.
*** 
> *Read Only* 
> 
> SignatureFields **signatureFields** 
>
> A collection of signature fields.
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
> SVGs **svgs** 
>
> A collection of SVG files.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> String **name** 
>
> The name of the Snippet; this is an alias to the Snippet's label property.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the Snippet.
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
> Generates a string which, if executed, will return the Snippet.
*** 
> Snippet **getElements**()
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


