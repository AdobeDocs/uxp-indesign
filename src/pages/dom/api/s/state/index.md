# State
A state (states define the display of the field in an exported PDF).

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the State.
<HorizontalLine />
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
> The parent of the State (a Button, MultiStateObject, CheckBox or RadioButton).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the State within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> Ovals **ovals** 
>
> A collection of ellipses.
<HorizontalLine />
> *Read Only* 
> 
> SplineItems **splineItems** 
>
> The spline items collection.
<HorizontalLine />
> *Read Only* 
> 
> PageItems **pageItems** 
>
> The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
<HorizontalLine />
> *Read Only* 
> 
> Rectangles **rectangles** 
>
> A collection of rectangles.
<HorizontalLine />
> *Read Only* 
> 
> GraphicLines **graphicLines** 
>
> A collection of graphic lines.
<HorizontalLine />
> *Read Only* 
> 
> TextFrames **textFrames** 
>
> A collection of text frames.
<HorizontalLine />
> *Read Only* 
> 
> Polygons **polygons** 
>
> A collection of polygons.
<HorizontalLine />
> *Read Only* 
> 
> EndnoteTextFrames **endnoteTextFrames** 
>
> A collection of endnote text frames.
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
> Groups **groups** 
>
> A collection of groups.
<HorizontalLine />
> *Read Only* 
> 
> EPSTexts **epstexts** 
>
> EPSTexts
<HorizontalLine />
> *Read Only* 
> 
> SVGs **svgs** 
>
> A collection of SVG files.
<HorizontalLine />
> String **name** 
>
> The name of the State.
<HorizontalLine />
> Boolean **active** 
>
> If true, the state is active in the exported PDF.
<HorizontalLine />
> Boolean **enabled** 
>
> If true, the state is enabled in PDF documents.
<HorizontalLine />
> Mixed **statetype** 
>
> For a button, the type of user action that dictates the object's appearance. For a MultiStateObject, which has no user actions associated with states, this property is a numeric value uniquely identifying the state. Can return: StateTypes enumerator or Long Integer.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **releaseAsObject**()
> 
> Releases this state's appearance as a page item, removing the state from its parent object.
<HorizontalLine />
> **move**( Number **newPosition** )
> 
> Moves the state to a new position in its parent collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | newPosition | the index to move the state to in its parent collection |

<HorizontalLine />
> **addItemsToState**( PageItem **pageitems** )
> 
> Adds page items to this state.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | pageitems | One or more page items to add to this state. |

<HorizontalLine />
> **remove**()
> 
> Deletes the State.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the State.
<HorizontalLine />
> State **getElements**()
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


