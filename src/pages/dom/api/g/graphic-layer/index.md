# GraphicLayer
A layer in a PSD image or PDF file.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the GraphicLayer.
*** 
> *Read Only* 
> 
> Boolean **originalVisibility** 
>
> Returns the visibility setting set for the layer before the graphic file was imported. Note: Must occur in the script before overriding the visibility state with a current visibility statement.
*** 
> *Read Only* 
> 
> Boolean **separatorLayer** 
>
> If true, the layer is a separator layer.
*** 
> *Read Only* 
> 
> Boolean **adjustmentLayer** 
>
> If true, the layer is an adjustment layer. Note: Must occur in the script before overriding the visibility state of the layer with a current visibility statement.
*** 
> *Read Only* 
> 
> Boolean **fxLayer** 
>
> If true, layer effects have been applied to the layer. Note: Must occur in the script before overriding the visibility state of the layer with a current visibility statement.
*** 
> *Read Only* 
> 
> Boolean **locked** 
>
> If true, the GraphicLayer is locked.
*** 
> *Read Only* 
> 
> Boolean **sectionDividerLayer** 
>
> If true, the layer is a section divider layer.
*** 
> *Read Only* 
> 
> Boolean **hasViewState** 
>
> If true, the layer has a view state.
*** 
> *Read Only* 
> 
> Boolean **viewState** 
>
> If true, the view state is on.
*** 
> *Read Only* 
> 
> Boolean **hasExportState** 
>
> If true, the layer has an export state.
*** 
> *Read Only* 
> 
> Boolean **exportState** 
>
> If true, the export state is on.
*** 
> *Read Only* 
> 
> Boolean **hasPrintState** 
>
> If true, the layer has a print state.
*** 
> *Read Only* 
> 
> Boolean **printState** 
>
> If true, the print state is on.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the GraphicLayer.
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
> The parent of the GraphicLayer (a GraphicLayerOption or GraphicLayer).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the GraphicLayer within its containing object.
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
> GraphicLayers **graphicLayers** 
>
> A collection of graphic layers.
*** 
> Boolean **currentVisibility** 
>
> If true, the layer is visible in the document.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the GraphicLayer.
*** 
> GraphicLayer **getElements**()
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


