# Rectangle
A rectangle.

## Class
> *Read Only* 
> 
> String **BEFORE_PLACE** = beforePlace
> 
> Dispatched before a Rectangle is placed. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_PLACE** = afterPlace
> 
> Dispatched after a Rectangle is placed. This event bubbles. This event is not cancelable.

## Instance
> *Read Only* 
> 
> TransparencySetting **transparencySettings** 
>
> Transparency settings.
*** 
> *Read Only* 
> 
> StrokeTransparencySetting **strokeTransparencySettings** 
>
> Transparency settings for the stroke.
*** 
> *Read Only* 
> 
> FillTransparencySetting **fillTransparencySettings** 
>
> Transparency settings for the fill applied to the Rectangle.
*** 
> *Read Only* 
> 
> ContentTransparencySetting **contentTransparencySettings** 
>
> Transparency settings for the content of the Rectangle.
*** 
> *Read Only* 
> 
> TextWrapPreference **textWrapPreferences** 
>
> The text wrap preference properties that define the default formatting for wrapping text around objects.
*** 
> *Read Only* 
> 
> InCopyExportOption **incopyExportOptions** 
>
> Export options for InCopy INCX document format.
*** 
> *Read Only* 
> 
> FrameFittingOption **frameFittingOptions** 
>
> The frame fitting option to apply to placed or pasted content. Can be applied to a frame, object style, or document or to the application.
*** 
> *Read Only* 
> 
> LockStateValues **lockState** 
>
> The lock state.
*** 
> *Read Only* 
> 
> AnchoredObjectSetting **anchoredObjectSettings** 
>
> Anchored object settings.
*** 
> *Read Only* 
> 
> ObjectExportOption **objectExportOptions** 
>
> Export options for the object
*** 
> *Read Only* 
> 
> XMLItem **associatedXMLElement** 
>
> The XML element associated with the Rectangle.
*** 
> *Read Only* 
> 
> LinkedPageItemOption **linkedPageItemOptions** 
>
> Linked Page Item options
*** 
> *Read Only* 
> 
> Boolean **overridden** 
>
> If true, the object originated on a master spread and was overridden. If false, the object either originated on a master spread and was not overridden, or the object did not originate on a master page.
*** 
> *Read Only* 
> 
> Mixed **overriddenMasterPageItem** 
>
> An object that originated on a master page and has been overridden. Can return: PageItem, Guide, Graphic, Movie or Sound.
*** 
> *Read Only* 
> 
> PageItem **allPageItems** 
>
> Lists all page items contained by the Rectangle.
*** 
> *Read Only* 
> 
> Graphic **allGraphics** 
>
> Lists all graphics contained by the Rectangle.
*** 
> *Read Only* 
> 
> Page **parentPage** 
>
> The page on which this page item appears.
*** 
> *Read Only* 
> 
> AnimationSetting **animationSettings** 
>
> The page item animation settings.
*** 
> *Read Only* 
> 
> TimingSetting **timingSettings** 
>
> The object timing settings.
*** 
> *Read Only* 
> 
> Article **allArticles** 
>
> The list of all articles this page item is part of
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Rectangle.
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
> The parent of the Rectangle (a Snippet, ComboBox, ListBox, TextBox, SignatureField, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, State, Cell, Character or PlaceGun).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Rectangle within its containing object.
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
> EndnoteTextFrames **endnoteTextFrames** 
>
> A collection of endnote text frames.
*** 
> *Read Only* 
> 
> Paths **paths** 
>
> A collection of paths.
*** 
> *Read Only* 
> 
> Sounds **sounds** 
>
> A collection of sound clips.
*** 
> *Read Only* 
> 
> MediaItems **mediaItems** 
>
> The media items collection.
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
> TextPaths **textPaths** 
>
> A collection of text paths.
*** 
> *Read Only* 
> 
> Movies **movies** 
>
> A collection of movies.
*** 
> *Read Only* 
> 
> HtmlItems **htmlItems** 
>
> A collection of embedded HTML page items.
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
> SVGs **svgs** 
>
> A collection of SVG files.
*** 
> *Read Only* 
> 
> ImportedPages **importedPages** 
>
> Imported InDesign pages.
*** 
> String **storyTitle** 
>
> Title for this InCopy story.
*** 
> ContentType **contentType** 
>
> The type of content that a frame can contain.
*** 
> Boolean **allowOverrides** 
>
> If true, the master page item can be overridden.
*** 
> DimensionsConstraints **horizontalLayoutConstraints** 
>
> The left margin, width, and right margin constraints this item is subject to when using the object-based layout rule.
*** 
> DimensionsConstraints **verticalLayoutConstraints** 
>
> The top margin, height, and bottom margin constraints this item is subject to when using the object-based layout rule.
*** 
> Measurement Unit (Number or String)=any **geometricBounds** 
>
> The bounds of the Rectangle excluding the stroke width, in the format [y1, x1, y2, x2], which give the coordinates of the top-left and bottom-right corners of the bounding box.
*** 
> Measurement Unit (Number or String)=any **visibleBounds** 
>
> The bounds of the Rectangle including the stroke width, in the format [y1, x1, y2, x2], which give the coordinates of the top-left and bottom-right corners of the bounding box.
*** 
> Swatch **fillColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of the Rectangle. . Can also accept: String.
*** 
> Number **fillTint** 
>
> The percent of tint to use in the Rectangle's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
*** 
> Boolean **overprintFill** 
>
> If true, the Rectangle's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors.
*** 
> Measurement Unit (Number or String)=any **strokeWeight** 
>
> The weight (in points) to apply to the Rectangle's stroke.
*** 
> Number **miterLimit** 
>
> The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join.
*** 
> EndCap **endCap** 
>
> The end shape of an open path.
*** 
> EndJoin **endJoin** 
>
> The corner join applied to the Rectangle.
*** 
> StrokeStyle **strokeType** 
>
> The name of the stroke style to apply. Can also accept: String.
*** 
> StrokeCornerAdjustment **strokeCornerAdjustment** 
>
> The corner adjustment applied to the Rectangle.
*** 
> Measurement Unit (Number or String)=any **strokeDashAndGap** 
>
> The dash and gap measurements that define the pattern of a custom dashed line. Define up to six values (in points) in the format [dash1, gap1, dash2, gap2, dash3, gap3].
*** 
> ArrowHead **leftLineEnd** 
>
> The arrowhead applied to the start of the path.
*** 
> ArrowHead **rightLineEnd** 
>
> The arrowhead applied to the end of the path.
*** 
> Swatch **strokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the Rectangle. Can also accept: String.
*** 
> Number **strokeTint** 
>
> The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
*** 
> Measurement Unit (Number or String)=any **gradientFillStart** 
>
> The starting point (in page coordinates) of a gradient applied to the fill of the Rectangle, in the format [x, y].
*** 
> Measurement Unit (Number or String)=any **gradientFillLength** 
>
> The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the Rectangle.
*** 
> Number **gradientFillAngle** 
>
> The angle of a linear gradient applied to the fill of the Rectangle. (Range: -180 to 180)
*** 
> Measurement Unit (Number or String)=any **gradientStrokeStart** 
>
> The starting point (in page coordinates) of a gradient applied to the stroke of the Rectangle, in the format [x, y].
*** 
> Measurement Unit (Number or String)=any **gradientStrokeLength** 
>
> The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the Rectangle.
*** 
> Number **gradientStrokeAngle** 
>
> The angle of a linear gradient applied to the stroke of the Rectangle. (Range: -180 to 180)
*** 
> Boolean **overprintStroke** 
>
> If true, the Rectangle's stroke color overprints any underlying objects. If false, the stroke color knocks out the  underlying colors.
*** 
> Swatch **gapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type.
*** 
> Number **gapTint** 
>
> The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
*** 
> Boolean **overprintGap** 
>
> If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors.
*** 
> StrokeAlignment **strokeAlignment** 
>
> The stroke alignment applied to the Rectangle.
*** 
> Boolean **nonprinting** 
>
> If true, the Rectangle does not print.
*** 
> Layer **itemLayer** 
>
> The layer that the Rectangle is on.
*** 
> Boolean **locked** 
>
> If true, the Rectangle is locked.
*** 
> DisplaySettingOptions **localDisplaySetting** 
>
> Display performance options for the Rectangle.
*** 
> Number **rotationAngle** 
>
> The rotatation angle of the Rectangle. (Range: -360 to 360)
*** 
> Number **shearAngle** 
>
> The skewing angle applied to the Rectangle. (Range: -360 to 360)
*** 
> Number **horizontalScale** 
>
> The horizontal scaling applied to the Rectangle.
*** 
> Number **verticalScale** 
>
> The vertical scaling applied to the Rectangle.
*** 
> Number **absoluteRotationAngle** 
>
> The rotation angle of the Rectangle relative to its containing object. (Range: -360 to 360)
*** 
> Number **absoluteShearAngle** 
>
> The skewing angle of the Rectangle relative to its containing object. (Range: -360 to 360)
*** 
> Number **absoluteHorizontalScale** 
>
> The horizontal scale of the Rectangle relative to its containing object.
*** 
> Number **absoluteVerticalScale** 
>
> The vertical scale of the Rectangle relative to its containing object.
*** 
> ObjectStyle **appliedObjectStyle** 
>
> The object style applied to the Rectangle.
*** 
> Flip **flip** 
>
> The direction in which to flip the printed image.
*** 
> Flip **absoluteFlip** 
>
> Indicates whether the Rectangle has been flipped independently of its parent object and, if yes, the direction in which the Rectangle was flipped.
*** 
> Boolean **visible** 
>
> If true, the Rectangle is visible.
*** 
> String **name** 
>
> The name of the Rectangle.
*** 
> CornerOptions **topLeftCornerOption** 
>
> The shape to be applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes.Note: corner option differs from end join in which you can set a radius for a corner option, whereas the rounded or beveled effect of an end join depends on the stroke weight.
*** 
> CornerOptions **topRightCornerOption** 
>
> The shape to apply to the top right corner of rectangular shapes
*** 
> CornerOptions **bottomLeftCornerOption** 
>
> The shape to apply to the bottom left corner of rectangular shapes.
*** 
> CornerOptions **bottomRightCornerOption** 
>
> The shape to apply to the bottom right corner of rectangular shapes.
*** 
> Measurement Unit (Number or String)=any **topLeftCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes
*** 
> Measurement Unit (Number or String)=any **topRightCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes
*** 
> Measurement Unit (Number or String)=any **bottomLeftCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes
*** 
> Measurement Unit (Number or String)=any **bottomRightCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes
*** 
> ArrowHeadAlignmentEnum **arrowHeadAlignment** 
>
> The arrowhead alignment applied to the Rectangle.
*** 
> Number **leftArrowHeadScale** 
>
> The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000)
*** 
> Number **rightArrowHeadScale** 
>
> The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000)
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> PageItem **findObject**( Boolean **reverseOrder** )
> 
> Finds objects that match the find what value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> PageItem **changeObject**( Boolean **reverseOrder** )
> 
> Finds objects that match the find what value and replace the objects with the change to value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> **clearFrameFittingOptions**()
> 
> Removes the frame fittings options and resets it to the initial state.
*** 
> Boolean **checkOut**()
> 
> Checks out the story.
*** 
> Boolean **checkIn**( String **versionComments**, Boolean **forceSave** )
> 
> Checks in the story or stories.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | versionComments | The comment for this version. (Optional) |
| Boolean | forceSave | If true, forcibly saves a version. (Optional) |

*** 
> Boolean **revert**()
> 
> Reverts the document to its state at the last save operation.
*** 
> **bringToFront**( PageItem **reference** )
> 
> Brings the Rectangle to the front of its layer or in front of a particular item.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | reference | The reference object to bring the object in front of (must have same parent) (Optional) |

*** 
> **sendToBack**( PageItem **reference** )
> 
> Sends the Rectangle to the back of its layer or behind a particular item (must have same parent).
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | reference | The reference object to send the object behind (Optional) |

*** 
> **bringForward**()
> 
> Brings the Rectangle forward one level in its layer.
*** 
> **sendBackward**()
> 
> Sends the Rectangle back one level in its layer.
*** 
> PageItem **makeCompoundPath**( PageItem **with** )
> 
> Creates a compound path by combining the path(s) of the Rectangle with the paths of other objects.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | with | The other objects whose paths to include in the new compound path. |

*** 
> PageItem **releaseCompoundPath**()
> 
> Releases a compound path.
*** 
> PageItem **intersectPath**( PageItem **with** )
> 
> Creates a new page item by intersecting the Rectangle with other objects. Returns an error if the objects do not intersect.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | with | The object(s) with which to intersect. |

*** 
> PageItem **addPath**( PageItem **with** )
> 
> Creates a new page item by combining the Rectangle with other objects. Deletes the objects if they do not intersect.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | with | The object(s) to add. |

*** 
> PageItem **subtractPath**( PageItem **with** )
> 
> Creates a new page item by subtracting the overlapping areas of the Rectangle and other objects.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | with | The object(s) to subtract. |

*** 
> PageItem **minusBack**( PageItem **with** )
> 
> Creates a new page item by reverse subtracting the overlapping areas of the Rectangle and other objects.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | with | The object(s) to reverse subtract. |

*** 
> PageItem **excludeOverlapPath**( PageItem **with** )
> 
> Creates a new page item by excluding the overlapping areas of the Rectangle and other objects.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | with | The object(s) to exclude. |

*** 
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
> 
> Converts the Rectangle to a different shape.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ConvertShapeOptions | given | The Rectangle's new shape. |
| Number | numberOfSides | The number of sides for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | The star inset percentage for the resulting polygon. (Range: 0.0 to 100.0)  (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | The corner radius of the resulting rectangle. (Optional) |

*** 
> Asset **store**( Library **using**, Object **withProperties** )
> 
> Stores the object in the specified library.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Library | using | The library in which to store the object. |
| Object | withProperties | Initial values for properties of the new Rectangle (Optional) |

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
> **placeXML**( XMLElement **using** )
> 
> Places XML content into the specified object. Note: Replaces any existing content.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLElement | using | The XML element whose content you want to place. |

*** 
> **autoTag**()
> 
> Tag the object or the parent story using default tags defined in XML preference.
*** 
> **markup**( XMLElement **using** )
> 
> Associates the page item with the specified XML element while preserving existing content.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLElement | using | The XML element. |

*** 
> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
> 
> Places the file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | fileName | The file to place |
| Boolean | showingOptions | Whether to display the import options dialog (Optional) |
| Object | withProperties | Initial values for properties of the placed object(s) (Optional) |

*** 
> Mixed **override**( Page **destinationPage** )
> 
> Overrides a master page item and places the item on the document page as a new object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Page | destinationPage | The document page that contains the master page item to override. |

*** 
> **removeOverride**()
> 
> Removes the override from a previously overridden master page item.
*** 
> **detach**()
> 
> Detaches an overridden master page item from the master page.
*** 
> **remove**()
> 
> Deletes the Rectangle.
*** 
> **fit**( FitOptions **given** )
> 
> Applies the specified fit option to content in a frame.
#### Parameters
| Type | Name | Description |
|---|---|---|
| FitOptions | given | The fit option to use. |

*** 
> **flipItem**( Flip **given**, Mixed **around** )
> 
> Flips the Rectangle.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Flip | given | The axis around which to flip the Rectangle. |
| Mixed | around | The point around which to flip the Rectangle. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

*** 
> PageItem **duplicate**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
> 
> Duplicates the Rectangle at the specified location or offset.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | to | The location of the new Rectangle, specified in coordinates in the format [x, y]. Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | Amount by which to offset the new Rectangle from the original Rectangle's position. (Optional) |

*** 
> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
> 
> Moves the Rectangle to a new location. Note: Either the 'to' or 'by' parameter is required; if both parameters are defined, only the to value is used.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | to | The new location of the Rectangle,in the format (x, y). Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | The amount (in measurement units) to move the Rectangle relative to its current position, in the format (x, y). (Optional) |

*** 
> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
> 
> Applies the specified object style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ObjectStyle | using | The object style to apply. |
| Boolean | clearingOverrides | If true, clears the Rectangle's existing attributes before applying the style. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | If true, clears attributes and formatting applied to the Rectangle that are not defined in the object style. (Optional) |

*** 
> **clearObjectStyleOverrides**()
> 
> Clear overrides for object style
*** 
> **clearTransformations**()
> 
> Clears transformations from the Rectangle. Transformations include rotation, scaling, flipping, fitting, and shearing.
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
> **redefineScaling**( Number **to** )
> 
> Apply an item's scaling to its content if possible.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | to | The scale factors to be left on the item.  The default is {1.0, 1.0}. (Optional) |

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
> **reframe**( Mixed **in**, Mixed **opposingCorners** )
> 
> Move the bounding box of the page item
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | in | The bounding box to resize. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | opposingCorners | Opposing corners of new bounding box in the given coordinate space |

*** 
> String **transformAgain**()
> 
> Transforms the Rectangle using the last transformation performed on any object. Transformations include moving, rotating, shearing, scaling, and flipping.
*** 
> String **transformSequenceAgain**()
> 
> Transforms the Rectangle using the last sequence of transform operations performed on any single object or performed at the same time on any group of objects. Transformations include moving, rotating, shearing, scaling, and flipping.
*** 
> String **transformAgainIndividually**()
> 
> Transforms the Rectangle using the last transformation performed on any Rectangle. Transformations include moving, rotating, shearing, scaling, and flipping.
*** 
> String **transformSequenceAgainIndividually**()
> 
> Transforms the Rectangle using the last sequence of transformations performed on any single object or performed at the same time on any group of objects. Transformations include moving, rotating, shearing, scaling, and flipping.
*** 
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
> 
> Create Plain Text QR Code on the page item
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | plainText | QR code Plain Text  (Optional) |
| Mixed | qrCodeSwatch | Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial values for properties of the new Rectangle. Above parameters can also be passed as properties (Optional) |

*** 
> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
> 
> Create Hyperlink QR Code on the page item or document
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | urlLink | QR code Hyperlink URL  (Optional) |
| Mixed | qrCodeSwatch | Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial values for properties of the new Rectangle. Above parameters can also be passed as properties (Optional) |

*** 
> **createTextMsgQRCode**( String **cellNumber**, String **textMessage**, Mixed **qrCodeSwatch**, String **withProperties** )
> 
> Create Text Msg QR Code on the page item or document
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | cellNumber | QR code Text Phone Number (Optional) |
| String | textMessage | QR code Text Message (Optional) |
| Mixed | qrCodeSwatch | Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial values for properties of the new Rectangle. Above parameters can also be passed as properties (Optional) |

*** 
> **createEmailQRCode**( String **emailAddress**, String **subject**, String **body**, Mixed **qrCodeSwatch**, String **withProperties** )
> 
> Create Email QR Code on the page item or document
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | emailAddress | QR code Email Address (Optional) |
| String | subject | QR code Email Subject (Optional) |
| String | body | QR code Email Body Message (Optional) |
| Mixed | qrCodeSwatch | Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial values for properties of the new Rectangle. Above parameters can also be passed as properties (Optional) |

*** 
> **createVCardQRCode**( String **firstName**, String **lastName**, String **jobTitle**, String **cellPhone**, String **phone**, String **email**, String **organisation**, String **streetAddress**, String **city**, String **adrState**, String **country**, String **postalCode**, String **website**, Mixed **qrCodeSwatch**, String **withProperties** )
> 
> Create Business Card QR Code on the page item or load on document's placegun
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | firstName | QR code Business Card First Name (Optional) |
| String | lastName | QR code Business Card Last Name (Optional) |
| String | jobTitle | QR code Business Card Title (Optional) |
| String | cellPhone | QR code Business Card Cell Phone Number (Optional) |
| String | phone | QR code Business Card Phone Number (Optional) |
| String | email | QR code Business Card Email Address (Optional) |
| String | organisation | QR code Business Card Organisation (Optional) |
| String | streetAddress | QR code Business Card Street Address (Optional) |
| String | city | QR code Business Card City (Optional) |
| String | adrState | QR code Business Card State (Optional) |
| String | country | QR code Business Card Country (Optional) |
| String | postalCode | QR code Business Card Postal Code (Optional) |
| String | website | QR code Business Card URL (Optional) |
| Mixed | qrCodeSwatch | Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial values for properties of the new Rectangle. Above parameters can also be passed as properties (Optional) |

*** 
> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
> 
> Exports the object(s) to a file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | format | The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String. |
| File | to | The path to the export file. |
| Boolean | showingOptions | If true, displays the export options dialog. (Optional) |
| PDFExportPreset | using | The export style. (Optional) |
| String | versionComments | The comment for this version. (Optional) |
| Boolean | forceSave | If true, forcibly saves a version. (Optional) |

*** 
> BackgroundTask **asynchronousExportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, String **versionComments**, Boolean **forceSave** )
> 
> asynchronously exports the object(s) to a file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | format | The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String. |
| File | to | The path to the export file. |
| Boolean | showingOptions | If true, displays the export options dialog. (Optional) |
| PDFExportPreset | using | The export style. (Optional) |
| String | versionComments | The comment for this version. (Optional) |
| Boolean | forceSave | If true, forcibly saves a version. (Optional) |

*** 
> Mixed **contentPlace**( PageItem **pageItems**, Boolean **linkPageItems**, Boolean **linkStories**, Boolean **mapStyles**, Boolean **showingOptions** )
> 
> Duplicate an object and place it into the target page item.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | pageItems | One or more page items to place or load |
| Boolean | linkPageItems | Whether to link pageItems in content placer (if true it will override link stories value) (Optional) |
| Boolean | linkStories | Whether to link stories in content placer (only applicable for single story, pageItem links will also be created in case of more than one item) (Optional) |
| Boolean | mapStyles | Whether to map styles in content placer (Optional) |
| Boolean | showingOptions | Whether to display the link options dialog (Optional) |

*** 
> **select**( SelectionOptions **existingSelection** )
> 
> Selects the object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SelectionOptions | existingSelection | The selection status of the Rectangle in relation to previously selected objects. (Optional) |

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
> Generates a string which, if executed, will return the Rectangle.
*** 
> Rectangle **getElements**()
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


