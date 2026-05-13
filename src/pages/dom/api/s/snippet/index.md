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
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> PlaceGun **parent** 
>
> The parent of the Snippet (a PlaceGun).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Snippet within its containing object.
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
> SVGs **svgs** 
>
> A collection of SVG files.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> String **name** 
>
> The name of the Snippet; this is an alias to the Snippet's label property.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the Snippet.
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
> Generates a string which, if executed, will return the Snippet.
<HorizontalLine />
> Snippet **getElements**()
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


