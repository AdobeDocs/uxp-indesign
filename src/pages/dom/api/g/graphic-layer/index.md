# GraphicLayer
A layer in a PSD image or PDF file.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the GraphicLayer.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **originalVisibility** 
>
> Returns the visibility setting set for the layer before the graphic file was imported. Note: Must occur in the script before overriding the visibility state with a current visibility statement.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **separatorLayer** 
>
> If true, the layer is a separator layer.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **adjustmentLayer** 
>
> If true, the layer is an adjustment layer. Note: Must occur in the script before overriding the visibility state of the layer with a current visibility statement.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **fxLayer** 
>
> If true, layer effects have been applied to the layer. Note: Must occur in the script before overriding the visibility state of the layer with a current visibility statement.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **locked** 
>
> If true, the GraphicLayer is locked.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **sectionDividerLayer** 
>
> If true, the layer is a section divider layer.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **hasViewState** 
>
> If true, the layer has a view state.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **viewState** 
>
> If true, the view state is on.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **hasExportState** 
>
> If true, the layer has an export state.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **exportState** 
>
> If true, the export state is on.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **hasPrintState** 
>
> If true, the layer has a print state.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **printState** 
>
> If true, the print state is on.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the GraphicLayer.
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
> The parent of the GraphicLayer (a GraphicLayerOption or GraphicLayer).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the GraphicLayer within its containing object.
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
> GraphicLayers **graphicLayers** 
>
> A collection of graphic layers.
<HorizontalLine />
> Boolean **currentVisibility** 
>
> If true, the layer is visible in the document.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the GraphicLayer.
<HorizontalLine />
> GraphicLayer **getElements**()
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


