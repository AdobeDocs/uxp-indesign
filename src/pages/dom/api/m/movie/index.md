# Movie
A movie.

## Class
> *Read Only* 
> 
> String **AFTER_ATTRIBUTE_CHANGED** = afterAttributeChanged
> 
> Dispatched when the value of a property changes on this Movie. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_PLACE** = beforePlace
> 
> Dispatched before a Movie is placed. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_PLACE** = afterPlace
> 
> Dispatched after a Movie is placed. This event bubbles. This event is not cancelable.

## Instance
> *Read Only* 
> 
> XMLItem **associatedXMLElement** 
>
> The XML element associated with the Movie.
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
> Link **itemLink** 
>
> The source file of the link.
*** 
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
> Transparency settings for the fill applied to the Movie.
*** 
> *Read Only* 
> 
> ContentTransparencySetting **contentTransparencySettings** 
>
> Transparency settings for the content of the Movie.
*** 
> *Read Only* 
> 
> TextWrapPreference **textWrapPreferences** 
>
> The text wrap preference properties that define the default formatting for wrapping text around objects.
*** 
> *Read Only* 
> 
> LinkedPageItemOption **linkedPageItemOptions** 
>
> Linked Page Item options
*** 
> *Read Only* 
> 
> PageItem **allPageItems** 
>
> Lists all page items contained by the Movie.
*** 
> *Read Only* 
> 
> Graphic **allGraphics** 
>
> Lists all graphics contained by the Movie.
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
> The unique ID of the Movie.
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
> The parent of the Movie (a SplineItem, Polygon, GraphicLine, Rectangle or Oval).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Movie within its containing object.
*** 
> *Read Only* 
> 
> Preferences **preferences** 
>
> A collection of preferences objects.
*** 
> *Read Only* 
> 
> Paths **paths** 
>
> A collection of paths.
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
> PageItems **pageItems** 
>
> The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
*** 
> *Read Only* 
> 
> NavigationPoints **navigationPoints** 
>
> A collection of navigation points.
*** 
> *Read Only* 
> 
> SVGs **svgs** 
>
> A collection of SVG files.
*** 
> String **name** 
>
> The name of the Movie.
*** 
> String **description** 
>
> The description of the Movie.
*** 
> FloatingWindowPosition **floatingWindowPosition** 
>
> The position of the floating window that displays the movie.
*** 
> FloatingWindowSize **floatingWindowSize** 
>
> The size of the floating window that displays the movie.
*** 
> Boolean **playOnPageTurn** 
>
> If true, the movie plays automatically when a user views the page that contains the movie poster in the PDF document.
*** 
> Boolean **showControls** 
>
> If true, displays playback controls at the bottom of the movie display window.
*** 
> Boolean **floatingWindow** 
>
> If true, opens a new window to play the movie. If false, plays the movie in the poster frame on the PDF document page.
*** 
> String **url** 
>
> The URL.
*** 
> String **posterFile** 
>
> The poster file.
*** 
> MoviePosterTypes **moviePosterType** 
>
> The type of poster for the movie.
*** 
> Boolean **embedInPDF** 
>
> If true, the file is embedded in the PDF. If false, the file is linked to the PDF. Note: To embed movie files, acrobat compatibility must be acrobat 6 or higher.
*** 
> Number **horizontalScale** 
>
> The horizontal scaling applied to the Movie.
*** 
> Number **verticalScale** 
>
> The vertical scaling applied to the Movie.
*** 
> Measurement Unit (Number or String)=any **geometricBounds** 
>
> The bounds of the Movie excluding the stroke width, in the format [y1, x1, y2, x2], which give the coordinates of the top-left and bottom-right corners of the bounding box.
*** 
> Measurement Unit (Number or String)=any **visibleBounds** 
>
> The bounds of the Movie including the stroke width, in the format [y1, x1, y2, x2], which give the coordinates of the top-left and bottom-right corners of the bounding box.
*** 
> Layer **itemLayer** 
>
> The layer that the Movie is on.
*** 
> String **filePath** 
>
> The file path (colon delimited on the Mac OS). Can also accept: File.
*** 
> String **controllerSkin** 
>
> The video controller skin name.
*** 
> Boolean **showController** 
>
> If true, displays controller skin with mouse rollover.
*** 
> Boolean **movieLoop** 
>
> If true, movie loops forever.
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
> Swatch **fillColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of the Movie. . Can also accept: String.
*** 
> Number **fillTint** 
>
> The percent of tint to use in the Movie's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
*** 
> Boolean **overprintFill** 
>
> If true, the Movie's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors.
*** 
> Measurement Unit (Number or String)=any **strokeWeight** 
>
> The weight (in points) to apply to the Movie's stroke.
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
> The corner join applied to the Movie.
*** 
> StrokeStyle **strokeType** 
>
> The name of the stroke style to apply. Can also accept: String.
*** 
> StrokeCornerAdjustment **strokeCornerAdjustment** 
>
> The corner adjustment applied to the Movie.
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
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the Movie. Can also accept: String.
*** 
> Number **strokeTint** 
>
> The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
*** 
> Measurement Unit (Number or String)=any **gradientFillStart** 
>
> The starting point (in page coordinates) of a gradient applied to the fill of the Movie, in the format [x, y].
*** 
> Measurement Unit (Number or String)=any **gradientFillLength** 
>
> The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the Movie.
*** 
> Number **gradientFillAngle** 
>
> The angle of a linear gradient applied to the fill of the Movie. (Range: -180 to 180)
*** 
> Measurement Unit (Number or String)=any **gradientStrokeStart** 
>
> The starting point (in page coordinates) of a gradient applied to the stroke of the Movie, in the format [x, y].
*** 
> Measurement Unit (Number or String)=any **gradientStrokeLength** 
>
> The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the Movie.
*** 
> Number **gradientStrokeAngle** 
>
> The angle of a linear gradient applied to the stroke of the Movie. (Range: -180 to 180)
*** 
> Boolean **overprintStroke** 
>
> If true, the Movie's stroke color overprints any underlying objects. If false, the stroke color knocks out the  underlying colors.
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
> The stroke alignment applied to the Movie.
*** 
> Boolean **nonprinting** 
>
> If true, the Movie does not print.
*** 
> Boolean **locked** 
>
> If true, the Movie is locked.
*** 
> DisplaySettingOptions **localDisplaySetting** 
>
> Display performance options for the Movie.
*** 
> Number **rotationAngle** 
>
> The rotatation angle of the Movie. (Range: -360 to 360)
*** 
> Number **shearAngle** 
>
> The skewing angle applied to the Movie. (Range: -360 to 360)
*** 
> Number **absoluteRotationAngle** 
>
> The rotation angle of the Movie relative to its containing object. (Range: -360 to 360)
*** 
> Number **absoluteShearAngle** 
>
> The skewing angle of the Movie relative to its containing object. (Range: -360 to 360)
*** 
> Number **absoluteHorizontalScale** 
>
> The horizontal scale of the Movie relative to its containing object.
*** 
> Number **absoluteVerticalScale** 
>
> The vertical scale of the Movie relative to its containing object.
*** 
> ObjectStyle **appliedObjectStyle** 
>
> The object style applied to the Movie.
*** 
> Flip **flip** 
>
> The direction in which to flip the printed image.
*** 
> Flip **absoluteFlip** 
>
> Indicates whether the Movie has been flipped independently of its parent object and, if yes, the direction in which the Movie was flipped.
*** 
> Boolean **visible** 
>
> If true, the Movie is visible.
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
> The arrowhead alignment applied to the Movie.
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
> Asset **store**( Library **using**, Object **withProperties** )
> 
> Stores the object in the specified library.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Library | using | The library in which to store the object. |
| Object | withProperties | Initial values for properties of the new Movie (Optional) |

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
> Boolean **verifyURL**()
> 
> Verifies that the specified URL is valid and contains the specified movie file. Valid only when the movie file is specified by a URL rather than a file path.
*** 
> Movie **duplicate**()
> 
> Duplicates the Movie.
*** 
> **bringToFront**( PageItem **reference** )
> 
> Brings the Movie to the front of its layer or in front of a particular item.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | reference | The reference object to bring the object in front of (must have same parent) (Optional) |

*** 
> **sendToBack**( PageItem **reference** )
> 
> Sends the Movie to the back of its layer or behind a particular item (must have same parent).
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | reference | The reference object to send the object behind (Optional) |

*** 
> **bringForward**()
> 
> Brings the Movie forward one level in its layer.
*** 
> **sendBackward**()
> 
> Sends the Movie back one level in its layer.
*** 
> **fit**( FitOptions **given** )
> 
> Applies the specified fit option to content in a frame.
#### Parameters
| Type | Name | Description |
|---|---|---|
| FitOptions | given | The fit option to use. |

*** 
> **remove**()
> 
> Deletes the Movie.
*** 
> **move**( Mixed **to**, Measurement Unit (Number or String)=any **by** )
> 
> Moves the Movie to a new location. Note: Either the 'to' or 'by' parameter is required; if both parameters are defined, only the to value is used.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | to | The new location of the Movie,in the format (x, y). Can accept: Array of 2 Units, Spread, Page or Layer. (Optional) |
| Measurement Unit (Number or String)=any | by | The amount (in measurement units) to move the Movie relative to its current position, in the format (x, y). (Optional) |

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
> **redefineScaling**( Number **to** )
> 
> Apply an item's scaling to its content if possible.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | to | The scale factors to be left on the item.  The default is {1.0, 1.0}. (Optional) |

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
> **convertShape**( ConvertShapeOptions **given**, Number **numberOfSides**, Number **insetPercentage**, Measurement Unit (Number or String)=any **cornerRadius** )
> 
> Converts the Movie to a different shape.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ConvertShapeOptions | given | The Movie's new shape. |
| Number | numberOfSides | The number of sides for the resulting polygon. (Range: 3 to 100) (Optional) |
| Number | insetPercentage | The star inset percentage for the resulting polygon. (Range: 0.0 to 100.0)  (Optional) |
| Measurement Unit (Number or String)=any | cornerRadius | The corner radius of the resulting rectangle. (Optional) |

*** 
> **clearTransformations**()
> 
> Clears transformations from the Movie. Transformations include rotation, scaling, flipping, fitting, and shearing.
*** 
> **select**( SelectionOptions **existingSelection** )
> 
> Selects the object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SelectionOptions | existingSelection | The selection status of the Movie in relation to previously selected objects. (Optional) |

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
> **flipItem**( Flip **given**, Mixed **around** )
> 
> Flips the Movie.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Flip | given | The axis around which to flip the Movie. |
| Mixed | around | The point around which to flip the Movie. Can accept: Array of 2 Units or AnchorPoint enumerator. (Optional) |

*** 
> **applyObjectStyle**( ObjectStyle **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
> 
> Applies the specified object style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ObjectStyle | using | The object style to apply. |
| Boolean | clearingOverrides | If true, clears the Movie's existing attributes before applying the style. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | If true, clears attributes and formatting applied to the Movie that are not defined in the object style. (Optional) |

*** 
> **clearObjectStyleOverrides**()
> 
> Clear overrides for object style
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
> Transforms the Movie using the last transformation performed on any object. Transformations include moving, rotating, shearing, scaling, and flipping.
*** 
> String **transformSequenceAgain**()
> 
> Transforms the Movie using the last sequence of transform operations performed on any single object or performed at the same time on any group of objects. Transformations include moving, rotating, shearing, scaling, and flipping.
*** 
> String **transformAgainIndividually**()
> 
> Transforms the Movie using the last transformation performed on any Movie. Transformations include moving, rotating, shearing, scaling, and flipping.
*** 
> String **transformSequenceAgainIndividually**()
> 
> Transforms the Movie using the last sequence of transformations performed on any single object or performed at the same time on any group of objects. Transformations include moving, rotating, shearing, scaling, and flipping.
*** 
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
> 
> Create Plain Text QR Code on the page item
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | plainText | QR code Plain Text  (Optional) |
| Mixed | qrCodeSwatch | Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial values for properties of the new Movie. Above parameters can also be passed as properties (Optional) |

*** 
> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
> 
> Create Hyperlink QR Code on the page item or document
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | urlLink | QR code Hyperlink URL  (Optional) |
| Mixed | qrCodeSwatch | Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial values for properties of the new Movie. Above parameters can also be passed as properties (Optional) |

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
| String | withProperties | Initial values for properties of the new Movie. Above parameters can also be passed as properties (Optional) |

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
| String | withProperties | Initial values for properties of the new Movie. Above parameters can also be passed as properties (Optional) |

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
| String | withProperties | Initial values for properties of the new Movie. Above parameters can also be passed as properties (Optional) |

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
> Generates a string which, if executed, will return the Movie.
*** 
> Movie **getElements**()
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


