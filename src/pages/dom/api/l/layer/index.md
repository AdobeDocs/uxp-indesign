# Layer
A layer.

## Instance
> *Read Only* 
> 
> PageItem **allPageItems** 
>
> Lists all page items contained by the Layer.
<HorizontalLine />
> *Read Only* 
> 
> Graphic **allGraphics** 
>
> Lists all graphics contained by the Layer.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Layer.
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
> The parent of the Layer (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Layer within its containing object.
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
> Guides **guides** 
>
> A collection of guides.
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
> FormFields **formFields** 
>
> A collection of form fields.
<HorizontalLine />
> *Read Only* 
> 
> Buttons **buttons** 
>
> A collection of buttons.
<HorizontalLine />
> *Read Only* 
> 
> MultiStateObjects **multiStateObjects** 
>
> A collection of multi-state objects.
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
> String **name** 
>
> The name of the Layer.
<HorizontalLine />
> Boolean **visible** 
>
> If true, the Layer is visible.
<HorizontalLine />
> Boolean **locked** 
>
> If true, the Layer is locked.
<HorizontalLine />
> Mixed **layerColor** 
>
> The color of the layer, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
<HorizontalLine />
> Boolean **ignoreWrap** 
>
> If true, text wrap settings applied to objects on the layer will not affect text on other layers when the layer is hidden.
<HorizontalLine />
> Boolean **showGuides** 
>
> If true, guides are visible on the layer.
<HorizontalLine />
> Boolean **lockGuides** 
>
> If true, the guide positions on the layer are locked.
<HorizontalLine />
> Boolean **printable** 
>
> If true, the layer will print.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> Layer **move**( LocationOptions **to**, Layer **reference** )
> 
> Moves the Layer to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location relative to the reference object or within the containing object. |
| Layer | reference | The reference object. Note: Required when the to value specifies before or after. (Optional) |

<HorizontalLine />
> **remove**()
> 
> Deletes the Layer.
<HorizontalLine />
> Layer **duplicate**()
> 
> Duplicates the Layer.
<HorizontalLine />
> Layer **merge**( Layer **with** )
> 
> Merges the layer with other layer(s).
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | with | The layer(s) with which to merge. |

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
> Generates a string which, if executed, will return the Layer.
<HorizontalLine />
> Layer **getElements**()
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


