# LayoutWindow
A layout window.

## Class
> *Read Only* 
> 
> String **AFTER_SELECTION_CHANGED** = afterSelectionChanged
> 
> Dispatched after the active selection changes. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_SELECTION_ATTRIBUTE_CHANGED** = afterSelectionAttributeChanged
> 
> Dispatched after an attribute on the active selection changes. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_DEACTIVATE** = beforeDeactivate
> 
> Dispatched before the LayoutWindow becomes inactive. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_ACTIVATE** = afterActivate
> 
> Dispatched after the LayoutWindow becomes active. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_ATTRIBUTE_CHANGED** = afterAttributeChanged
> 
> Dispatched when the value of a property changes on this LayoutWindow. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_OPEN** = afterOpen
> 
> Dispatched after a LayoutWindow is opened. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_CLOSE** = beforeClose
> 
> Dispatched before a LayoutWindow is closed. This event bubbles. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_CLOSE** = afterClose
> 
> Dispatched when a LayoutWindow is closing. Since the close has been committed, it can no longer be canceled. This event bubbles. This event is not cancelable.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the LayoutWindow.
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
> The parent of the LayoutWindow (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the LayoutWindow within its containing object.
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
> Boolean **overprintPreview** 
>
> If true, display a simulation of overprinting.
<HorizontalLine />
> String **proofingProfile** 
>
> The profile used for proofing colors.
<HorizontalLine />
> ProofingType **proofingType** 
>
> The method of proofing colors.
<HorizontalLine />
> Boolean **simulateInkBlack** 
>
> If true, simulates the dark gray produced by many printers in place of solid black, according to the proofing profile. Note: Valid only when proofing type is custom.
<HorizontalLine />
> Boolean **simulatePaperWhite** 
>
> If true, simulates the dingy white of real paper, according to the proofing profile. Note: Valid only when proofing type is custom.
<HorizontalLine />
> Boolean **preserveColorNumbers** 
>
> If true, leaves color values unchanged for CMYK objects without embedded profiles and native objects such as line art or type. Note: Converts images whose profiles differ from the profile of the simulated device. Valid only when proofing type is custom.
<HorizontalLine />
> ViewDisplaySettings **viewDisplaySetting** 
>
> The display performance preferences override for the view.
<HorizontalLine />
> Mixed **transformReferencePoint** 
>
> The default anchor point around which to transform objects. Can return: AnchorPoint enumerator or Array of 2 Units.
<HorizontalLine />
> Layer **activeLayer** 
>
> The active layer. Can also accept: String.
<HorizontalLine />
> Number **zoomPercentage** 
>
> The size (as a percentage) to which to enlarge or reduce the view of the document. (Range: 5 to 4000)
<HorizontalLine />
> Mixed **activeSpread** 
>
> The front-most spread. Can return: Spread or MasterSpread.
<HorizontalLine />
> Page **activePage** 
>
> The front-most page.
<HorizontalLine />
> ScreenModeOptions **screenMode** 
>
> The screen mode for layout view.
<HorizontalLine />
> Object **selection** 
>
> The selected object(s). Can also accept: Object or NothingEnum enumerator.
<HorizontalLine />
> Number **bounds** 
>
> The bounds of the window (specified in pixels) in the form [top, left, bottom, right].
<HorizontalLine />
> PageItem **selectionKeyObject** 
>
> The key object of the selection. Can also accept: NothingEnum enumerator.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **zoom**( ZoomOptions **given** )
> 
> Magnifies or reduces the window to the specified display size.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ZoomOptions | given | The display size. |

<HorizontalLine />
> **select**( Mixed **selectableItems**, SelectionOptions **existingSelection** )
> 
> Selects the specified object(s).
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | selectableItems | The objects to select. Can accept: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator. |
| SelectionOptions | existingSelection | The selection status of the LayoutWindow in relation to previously selected objects. (Optional) |

<HorizontalLine />
> **close**()
> 
> Closes the LayoutWindow.
<HorizontalLine />
> **maximize**()
> 
> Maximizes the window.
<HorizontalLine />
> **minimize**()
> 
> Minimizes the window.
<HorizontalLine />
> **restore**()
> 
> Restores the window.
<HorizontalLine />
> **bringToFront**()
> 
> Brings the object to the front.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the LayoutWindow.
<HorizontalLine />
> LayoutWindow **getElements**()
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


