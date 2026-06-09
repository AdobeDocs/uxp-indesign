# ClippingPathSettings
Clipping path settings.

## Instance
> *Read Only* 
> 
> String **photoshopPathNames** 
>
> A list of the clipping paths stored in the graphic.
<HorizontalLine />
> *Read Only* 
> 
> String **alphaChannelPathNames** 
>
> A list of the alpha channels stored in the graphic.
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
> The parent of the ClippingPathSettings (a Image, EPS, WMF, PICT, PDF or ImportedPage).
<HorizontalLine />
> *Read Only* 
> 
> Paths **paths** 
>
> A collection of paths.
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
> ClippingPathType **clippingType** 
>
> The clipping path type.
<HorizontalLine />
> Boolean **invertPath** 
>
> If true, inverts the clipping path.
<HorizontalLine />
> Boolean **includeInsideEdges** 
>
> If true, creates interior clipping paths within the surrounding clipping path. Note: Valid only when clipping type is alpha channel or detect edges.
<HorizontalLine />
> Boolean **restrictToFrame** 
>
> If true, truncates the clipping path at the edge of the frame containing the graphic. Note: Valid only when clipping type is alpha channel or detect edges.
<HorizontalLine />
> Boolean **useHighResolutionImage** 
>
> If true, uses the high-resolution version of the graphic to create the clipping path. If false, calculates the clipping path based on screen-display resolution. Note: Valid only when clipping type is detect edges.
<HorizontalLine />
> Number **threshold** 
>
> The lowest value (darkest) pixel to allow in the image. All pixels in the image whose values are greater than (lighter than) the threshold value are clipped (obscured). (Range: 0 to 255) Note: Valid only when clipping type is detect edges or alpha channel.
<HorizontalLine />
> Number **tolerance** 
>
> Specifies how similar a pixel's intensity value can be to the threshold value before the pixel is obscured by the clipping path. (Range: 0 to 10) Note: Valid only when clipping type is detect edges or alpha channel.
<HorizontalLine />
> Measurement Unit (Number or String)=any **insetFrame** 
>
> Shrinks the area enclosed by the clipping path by the specified amount. (Range depends on the unit. For points: -10000 to 10000; picas: -833p4 to 833p4; inches: -138.8889 to 138.8889; mm: -3527.778 to 3527.778; cm: -352.7778 to 352.7778; ciceros: -781c11.889 to 781c11.889)
<HorizontalLine />
> String **appliedPathName** 
>
> The name of the Photoshop path or alpha channel to use as a clipping path.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> PageItem **convertToFrame**()
> 
> Converts the clipping path to a frame.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the ClippingPathSettings.
<HorizontalLine />
> ClippingPathSettings **getElements**()
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


