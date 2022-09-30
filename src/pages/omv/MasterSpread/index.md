# MasterSpread
A master spread.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the MasterSpread.
*** 
> *Read Only* 
> 
> PageItem **allPageItems** 
>
> Lists all page items contained by the MasterSpread.
*** 
> *Read Only* 
> 
> Graphic **allGraphics** 
>
> Lists all graphics contained by the MasterSpread.
*** 
> *Read Only* 
> 
> TimingSetting **timingSettings** 
>
> The object timing settings.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the MasterSpread.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the MasterSpread (a Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the MasterSpread within its containing object.
*** 
> *Read Only* 
> 
> Pages **pages** 
>
> A collection of pages.
*** 
> *Read Only* 
> 
> Ovals **ovals** 
>
> A collection of ellipses.
*** 
> *Read Only* 
> 
> SplineItems **splineItems** 
>
> The spline items collection.
*** 
> *Read Only* 
> 
> PageItems **pageItems** 
>
> The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
*** 
> *Read Only* 
> 
> Rectangles **rectangles** 
>
> A collection of rectangles.
*** 
> *Read Only* 
> 
> GraphicLines **graphicLines** 
>
> A collection of graphic lines.
*** 
> *Read Only* 
> 
> TextFrames **textFrames** 
>
> A collection of text frames.
*** 
> *Read Only* 
> 
> Polygons **polygons** 
>
> A collection of polygons.
*** 
> *Read Only* 
> 
> EndnoteTextFrames **endnoteTextFrames** 
>
> A collection of endnote text frames.
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
> Guides **guides** 
>
> A collection of guides.
*** 
> *Read Only* 
> 
> Groups **groups** 
>
> A collection of groups.
*** 
> *Read Only* 
> 
> EPSTexts **epstexts** 
>
> EPSTexts
*** 
> *Read Only* 
> 
> FormFields **formFields** 
>
> A collection of form fields.
*** 
> *Read Only* 
> 
> Buttons **buttons** 
>
> A collection of buttons.
*** 
> *Read Only* 
> 
> MultiStateObjects **multiStateObjects** 
>
> A collection of multi-state objects.
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
> Preferences **preferences** 
>
> A collection of preferences objects.
*** 
> Mixed **pageColor** 
>
> The color label of the MasterSpread, specified either as  an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or PageColorOptions enumerator.
*** 
> String **namePrefix** 
>
> The prefix of the master spread name.
*** 
> String **baseName** 
>
> The name of the master spread.
*** 
> Boolean **showMasterItems** 
>
> If true, displays master page items on document pages in the spread.
*** 
> MasterSpread **appliedMaster** 
>
> The master spread applied to the MasterSpread. Can also accept: NothingEnum enumerator.
*** 
> PageItem **primaryTextFrame** 
>
> The primary text frame through which text flows on the MasterSpread. Must be a text frame or a type on a path spline. Can also accept: NothingEnum enumerator.
*** 
> String **idmlComponentName** 
>
> The IDML component name of the MasterSpread.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> Mixed **duplicate**( LocationOptions **to**, Mixed **reference** )
> 
> Duplicates the spread.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location of the spread relative to the reference object or within the document. (Optional) |
| Mixed | reference | The reference object. Note: Required only when the to parameter specifies before or after. Can accept: MasterSpread, Document or MasterSpread. (Optional) |

*** 
> Story **placeAndLink**( Story **parentStory**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **showingOptions** )
> 
> Deprecated: Use contentPlace method. Original Description: Create a linked story and place it into the target.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Story | parentStory | The story to place and link from. |
| Measurement Unit (Number or String)=any | placePoint | The point at which to place (Optional) |
| Layer | destinationLayer | The layer on which to place (Optional) |
| Boolean | showingOptions | Whether to display the link options dialog (Optional) |

*** 
> Mixed **place**( File **fileName**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **showingOptions**, Boolean **autoflowing**, Object **withProperties** )
> 
> Places the file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | fileName | The file to place |
| Measurement Unit (Number or String)=any | placePoint | The point at which to place (Optional) |
| Layer | destinationLayer | The layer on which to place (Optional) |
| Boolean | showingOptions | Whether to display the import options dialog (Optional) |
| Boolean | autoflowing | Whether to autoflow placed text (Optional) |
| Object | withProperties | Initial values for properties of the placed object(s) (Optional) |

*** 
> **remove**()
> 
> Deletes the MasterSpread.
*** 
> **removeOverride**()
> 
> Removes the override from a previously overridden master page item.
*** 
> **detach**()
> 
> Detaches an overridden master page item from the master page.
*** 
> **select**( SelectionOptions **existingSelection** )
> 
> Selects the object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SelectionOptions | existingSelection | The selection status of the MasterSpread in relation to previously selected objects. (Optional) |

*** 
> **createGuides**( Number **numberOfRows**, Number **numberOfColumns**, Measurement Unit (Number or String)=any **rowGutter**, Measurement Unit (Number or String)=any **columnGutter**, Mixed **guideColor**, Boolean **fitMargins**, Boolean **removeExisting**, Layer **layer** )
> 
> Creates multiple guides on all pages of the spread.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | numberOfRows | The number of rows to create on each page. (Optional) |
| Number | numberOfColumns | The number of columns to create on each page.  (Optional) |
| Measurement Unit (Number or String)=any | rowGutter | The height of the gutter between rows. (Optional) |
| Measurement Unit (Number or String)=any | columnGutter | The width of the gutter between columns. (Optional) |
| Mixed | guideColor | The color to make the guides, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can accept: Array of 3 Reals (0 - 255) or UIColors enumerator. (Optional) |
| Boolean | fitMargins | If true, the row height and column width are calculated based on the space within the page margins. If false, row height and column width are calculated based on the full page. (Optional) |
| Boolean | removeExisting | If true, removes existing guides when creating new ones. (Optional) |
| Layer | layer | The layer on which to create the guides. (Optional) |

*** 
> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
> 
> Transform the page item.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CoordinateSpaces | in | The coordinate space to use |
| Mixed | from | The temporary origin during the transformation. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transform matrix. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to consider; providing this optional parameter causes the target's existing transform components to be replaced with new values.  Without this parameter, the given matrix is concatenated onto the target's existing transform combining the effect of the two. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | If true then a ruler based origin is interpreted using ruler units rather than points. The default value is false. This parameter has no effect unless the reference point is specified relative to a page. (Optional) |

*** 
> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
> 
> Get the transformation values of the page item.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CoordinateSpaces | in | The coordinate space to use |

*** 
> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
> 
> Get the coordinates of the given location in the specified coordinate system.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | location | The location requested. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | The coordinate space to use. |
| Boolean | consideringRulerUnits | If true then a ruler location is interpreted using ruler units rather than points. The default value is false. This parameter has no effect unless the reference point is specified relative to a page. (Optional) |

*** 
> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **showingOptions** )
> 
> Duplicate an object and place it into the target.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | pageItems | One or more page items to place or load |
| Boolean | linkPageItems | Whether to link pageItems in content placer (if true it will override link stories value) (Optional) |
| Boolean | linkStories | Whether to link stories in content placer (only applicable for single story, pageItem links will also be created in case of more than one item) (Optional) |
| Boolean | mapStyles | Whether to map styles in content placer (Optional) |
| Measurement Unit (Number or String)=any | placePoint | The point at which to place (Optional) |
| Layer | destinationLayer | The layer on which to place (Optional) |
| Boolean | showingOptions | Whether to display the link options dialog (Optional) |

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
> Generates a string which, if executed, will return the MasterSpread.
*** 
> MasterSpread **getElements**()
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


