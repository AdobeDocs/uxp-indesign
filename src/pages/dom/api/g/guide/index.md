# Guide
A guide.

## Class
> *Read Only* 
> 
> String **AFTER_PLACE** = afterPlace
> 
> Dispatched after a Guide is placed. This event bubbles. This event is not cancelable.

## Instance
> *Read Only* 
> 
> Boolean **overridden** 
>
> If true, the object originated on a master spread and was overridden. If false, the object either originated on a master spread and was not overridden, or the object did not originate on a master page.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **overriddenMasterPageItem** 
>
> An object that originated on a master page and has been overridden. Can return: PageItem, Guide, Graphic, Movie or Sound.
<HorizontalLine />
> *Read Only* 
> 
> Page **parentPage** 
>
> The page on which this page item appears.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Guide.
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
> The parent of the Guide (a Spread or MasterSpread).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Guide within its containing object.
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
> Boolean **allowOverrides** 
>
> If true, the master page item can be overridden.
<HorizontalLine />
> Mixed **guideColor** 
>
> The color of the guide, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
<HorizontalLine />
> HorizontalOrVertical **orientation** 
>
> The orientation of the guide.
<HorizontalLine />
> Measurement Unit (Number or String)=any **location** 
>
> The location at which to place the guide relative to the current ruler zero point.
<HorizontalLine />
> Boolean **fitToPage** 
>
> If true, horizontal orientation guides stop at the edges of the specified page. If false, the guides extends across the width of the spread and into the pasteboard area.
<HorizontalLine />
> Number **viewThreshold** 
>
> The view magnification as a percentage below which guides are no longer displayed. (Range: 5.0 to 4000.0)
<HorizontalLine />
> Boolean **locked** 
>
> If true, the Guide is locked.
<HorizontalLine />
> Layer **itemLayer** 
>
> The layer that the Guide is on.
<HorizontalLine />
> GuideTypeOptions **guideType** 
>
> The type of the guide.
<HorizontalLine />
> Measurement Unit (Number or String)=any **guideZone** 
>
> The zone of the guide.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> String **name** 
>
> The name of the Guide; this is an alias to the Guide's label property.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> Mixed **override**( Page **destinationPage** )
> 
> Overrides a master page item and places the item on the document page as a new object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Page | destinationPage | The document page that contains the master page item to override. |

<HorizontalLine />
> **removeOverride**()
> 
> Removes the override from a previously overridden master page item.
<HorizontalLine />
> **detach**()
> 
> Detaches an overridden master page item from the master page.
<HorizontalLine />
> **remove**()
> 
> Deletes the Guide.
<HorizontalLine />
> **move**( Measurement Unit (Number or String)=any **to**, Measurement Unit (Number or String)=any **by** )
> 
> Moves the guide to a new location. Note: Either the to or the by parameter is required; if both parameters are defined, only the to value is used.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Measurement Unit (Number or String)=any | to | The new location of the guide, in the format [x, y]. (Optional) |
| Measurement Unit (Number or String)=any | by | The amount to move the guide relative to its current position, in the format [x, y]. (Optional) |

<HorizontalLine />
> Guide **duplicate**()
> 
> Duplicates the Guide.
<HorizontalLine />
> TransformationMatrix **transformValuesOf**( CoordinateSpaces **in** )
> 
> Get the transformation values of the page item.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CoordinateSpaces | in | The coordinate space to use |

<HorizontalLine />
> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
> 
> Get the coordinates of the given location in the specified coordinate system.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | location | The location requested. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | The coordinate space to use. |
| Boolean | consideringRulerUnits | If true then a ruler location is interpreted using ruler units rather than points. The default value is false. This parameter has no effect unless the reference point is specified relative to a page. (Optional) |

<HorizontalLine />
> **select**( SelectionOptions **existingSelection** )
> 
> Selects the object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SelectionOptions | existingSelection | The selection status of the Guide in relation to previously selected objects. (Optional) |

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
> Generates a string which, if executed, will return the Guide.
<HorizontalLine />
> Guide **getElements**()
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


