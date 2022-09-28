# Page
A page.

## Instance
> *Read Only* 
> 
> Section **appliedAlternateLayout** 
>
> The alternate layout section to which the page belongs.
*** 
> *Read Only* 
> 
> MarginPreference **marginPreferences** 
>
> Margin preference settings.
*** 
> *Read Only* 
> 
> PageSideOptions **side** 
>
> The side of the binding spine on which to place the page within the spread.
*** 
> *Read Only* 
> 
> String **name** 
>
> The name of the Page.
*** 
> *Read Only* 
> 
> Section **appliedSection** 
>
> The section to which the page belongs.
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Page within its containing object.
*** 
> *Read Only* 
> 
> Number **documentOffset** 
>
> The sequential number of the page within the document.
*** 
> *Read Only* 
> 
> Measurement Unit (Number or String)=any **bounds** 
>
> The bounds of the Page, in the format [y1, x1, y2, x2].
*** 
> *Read Only* 
> 
> Mixed **masterPageItems** 
>
> The items on a specified document page that originated on the applied master page and have not been overridden or detached. Can return: Array of PageItems, Guides, Graphics, Movies or Sounds.
*** 
> *Read Only* 
> 
> PageItem **allPageItems** 
>
> Lists all page items contained by the Page.
*** 
> *Read Only* 
> 
> Graphic **allGraphics** 
>
> Lists all graphics contained by the Page.
*** 
> *Read Only* 
> 
> GridDataInformation **gridData** 
>
> Default grid properties. Note: Applies to named, layout, and frame (story) grids.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Page.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the Page (a Spread or MasterSpread).
*** 
> *Read Only* 
> 
> Preferences **preferences** 
>
> A collection of preferences objects.
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
> LayoutRuleOptions **layoutRule** 
>
> layout rule
*** 
> SnapshotBlendingModes **snapshotBlendingMode** 
>
> snapshot blending mode
*** 
> Boolean **optionalPage** 
>
> optional page for HTML5 pagination. Obsolete after CS6
*** 
> TrapPreset **appliedTrapPreset** 
>
> The trap preset applied to the page. Can also accept: String.
*** 
> Mixed **pageColor** 
>
> The color label of the Page, specified either as  an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or PageColorOptions enumerator.
*** 
> MasterSpread **appliedMaster** 
>
> The master spread applied to the Page. Can also accept: NothingEnum enumerator.
*** 
> TransformationMatrix **masterPageTransform** 
>
> The transform applied to the master page before it is applied to Page.
*** 
> Mixed **tabOrder** 
>
> The order in which the focus moves to different form fields in the PDF when the tab key is pressed. Can return: Array of Buttons, CheckBoxes, ComboBoxes, ListBoxes, RadioButtons, TextBoxes or SignatureFields.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **adjustLayout**( Object **adoptTo**, Page **affectedPages** )
> 
> Adjust the existing layout according to new page size, bleed and margin values. The first parameter is a plain object with key value pairs for properties affected. Permissible keys are width, height, bleedInside, bleedTop, bleedOutside, bleedBottom, leftMargin, topMargin, rightMargin, bottomMargin. The values can be specified as decimal numbers in units of Pt or as a string having a measurement value such as '1 in'. Not all properties need to be specified, only the values that need updation. Notice that when dealing with individual pages rather than the whole document, bleed changes has no effect. E.g. - app.activeDocument.adjustLayout({width:'600px', leftMargin: '1in'}), app.activeDocument.adjustLayout({rightMargin:'1in'}, app.activeDocument.spreads[0].pages), app.activeDocument.spreads[0].pages[0].adjustLayout({width:'400px', leftMargin: '10px'})
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | adoptTo | Change values - see functin definition for details |
| Page | affectedPages | The collection of Page objects to affect (optional). Has no effect if function is called from Page (Optional) |

*** 
> PageItem **placeXML**( XMLElement **using**, Measurement Unit (Number or String)=any **placePoint**, Boolean **autoflowing** )
> 
> Places the XML element onto a page. If the place point is above an existing page item, place the XML element into the page item.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLElement | using | The XML element to place. |
| Measurement Unit (Number or String)=any | placePoint | The point at which to place the object, specified in the format [x, y]. |
| Boolean | autoflowing | If true, autoflows placed text. (Optional) |

*** 
> PageItem **setContent**( String **using**, String **relativeBasePath** )
> 
> Replaces the content of XML element with content imported from a file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | using | The file path to the import file. |
| String | relativeBasePath | Base path used to resolve relative paths. (Optional) |

*** 
> **snapshotCurrentLayout**()
> 
> Create a snapshot of the layout for the current Page size and shape.
*** 
> **deleteLayoutSnapshot**()
> 
> Delete the snapshot of the layout for the current Page size and shape.
*** 
> **deleteAllLayoutSnapshots**()
> 
> Delete all layout snapshots for this Page.
*** 
> Page **move**( LocationOptions **to**, Mixed **reference**, BindingOptions **binding** )
> 
> Moves the page.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The new location of the page relative to the reference object or within the document or spread.  (Optional) |
| Mixed | reference | The reference object. Note: Required when the to parameter value specifies before or after. Can accept: Page or Spread. (Optional) |
| BindingOptions | binding | The location of the binding spine in spreads. (Optional) |

*** 
> **remove**()
> 
> Deletes the Page.
*** 
> Page **duplicate**( LocationOptions **to**, Mixed **reference** )
> 
> Duplicates the page.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location at which to place the duplicate page relative to the reference object or within the document or spread.  (Optional) |
| Mixed | reference | The reference object. Note: Required when the to value specifies before or after. Can accept: Page or Spread. (Optional) |

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
| SelectionOptions | existingSelection | The selection status of the Page in relation to previously selected objects. (Optional) |

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
> **reframe**( Mixed **in**, Mixed **opposingCorners** )
> 
> Move the bounding box of the page item
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | in | The bounding box to resize. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners of new bounding box in the given coordinate space |

*** 
> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
> 
> Resize the page item.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | in | The bounding box to resize. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | The transform origin. Legal specifications: relative to bounding box: anchor | {anchor | {x,y}, bounds kind [, coordinate space]}; relative to coordinate space: {x,y} | {{x,y}[, coordinate space]}; relative to layout window ruler: {{x,y}, page index | bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | How the current dimensions are affected by the given values |
| Mixed | values | The width and height values. Legal dimensions specifications: {x, y [, coordinate space]}, {x, resize constraint [, coordinate space]}, or {resize constraint, y [, coordinate space]}; where x and y are real numbers and coordinate space is used to determine _only_ the unit of length for x and y; coordinate space is ignored for the 'current dimensions times' resize method). Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | If false and multiple page items are targeted, the new dimensions are attained only by moving the individual items rather than resizing them. (Optional) |
| Boolean | consideringRulerUnits | If true then a ruler location is interpreted using ruler units rather than points. The default value is false. This parameter has no effect unless the reference point is specified relative to a page. (Optional) |

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
> Generates a string which, if executed, will return the Page.
*** 
> Page **getElements**()
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


