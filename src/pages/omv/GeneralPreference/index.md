# GeneralPreference
General application preferences.

## Instance
> *Read Only* 
> 
> Number **mainMonitorPpi** 
>
> The value of the system reported main monitor resolution
*** 
> *Read Only* 
> 
> Boolean **applicationBarShown** 
>
> If true, application bar is shown.
*** 
> *Read Only* 
> 
> Boolean **useApplicationFrame** 
>
> If true, application lives in a frame.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the GeneralPreference (a Application).
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
> ToolTipOptions **toolTips** 
>
> Tool tip behavior.
*** 
> Boolean **greekVectorGraphicsOnDrag** 
>
> Controls whether or not to greek vector graphics when dragging at high quality.
*** 
> Boolean **showConveyor** 
>
> Show the conveyor on content collector or content placer tool activation
*** 
> Boolean **createLinksOnContentPlace** 
>
> Enable the creation of links on content place
*** 
> Boolean **mapStylesOnContentPlace** 
>
> Enable the mapping of styles on content place
*** 
> Boolean **useCustomMonitorResolution** 
>
> Enable the use of a custom monitor resolution in pixels per inch as opposed to querying the system settings
*** 
> Number **customMonitorPpi** 
>
> When using a custom monitor resolution, what is the value of that resolution in pixels per inch
*** 
> Number **uiBrightnessPreference** 
>
> Specify the Application User Interface brightness preference (from 0.0 to 1.0). To use color theme brightness preset values, specify 0.0 for Dark, 0.50 for Medium Dark, 0.51 for Medium Bright, and 1.0 for Bright. Any value between 0.0 and 1.0 will automatically be mapped to closest preset.
*** 
> Number **pasteboardColorPreference** 
>
> Specify the Pasteboard color preference (0 or 1). Specify 0 to set preference to Default White, and 1 to set preference to Match with Theme Color.
*** 
> Boolean **showWhatsNewOnStartup** 
>
> If true, show What's New dialog on startup.
*** 
> Boolean **autoAddSwatchToCCLibraries** 
>
> If true, on creating new swatch through the new swatch dialog, it will be exported to CC Libraries as well
*** 
> Boolean **autoAddCharStyleToCCLibraries** 
>
> If true, on creating new char style through the new char style dialog, it will be exported to CC Libraries as well
*** 
> Boolean **autoAddParaStyleToCCLibraries** 
>
> If true, on creating new para style through the new para style dialog, it will be exported to CC Libraries as well
*** 
> Boolean **showStartWorkspace** 
>
> If true, show start workspace when no documents are open
*** 
> Boolean **showStockPurchaseAdornment** 
>
> If true, show stock cart adornment on unlicensed stock images
*** 
> Boolean **showContentGrabber** 
>
> Controls whether or not the content grabber adornment is shown.
*** 
> Boolean **showLiveCorners** 
>
> Controls whether or not the live corners grabber adornment is shown.
*** 
> Boolean **showMasterPageOverlay** 
>
> Controls whether or not to show the master page overlay when a page is selected using the Page Tool.
*** 
> Boolean **objectsMoveWithPage** 
>
> Controls whether page items move when a page is repositioned from the UI. The option/alt key temporarily reverses this property
*** 
> Boolean **preventSelectingLockedItems** 
>
> Controls whether or not you can select and interact with a locked item. When this is off, only position is locked.
*** 
> Boolean **enableMultiTouchGestures** 
>
> Controls whether or not multi-touch gestures are enabled.
*** 
> ToolsPanelOptions **toolsPanel** 
>
> Controls the appearance of the Tools panel.
*** 
> Boolean **autoCollapseIconPanels** 
>
> If true, panel drawers close automatically.
*** 
> Boolean **placeCursorUsesThumbnails** 
>
> Controls whether or not to show thumbnails of imported files in the Place icon.
*** 
> Boolean **panelTabHeightPreference** 
>
> If true, Large Tabs are shown for panels else Smaller tabs are shown
*** 
> Boolean **showLegacyNewDocumentDialog** 
>
> If true, legacy new document dialog will be shown when Ctrl/Cmd + N are pressed.
*** 
> Boolean **autoShowHiddenPanels** 
>
> If true, vertical reveal strips appear when palette UI is hidden.
*** 
> Boolean **openDocumentsAsTabs** 
>
> If true, documents open as tabs.
*** 
> Boolean **enableFloatingWindowDocking** 
>
> If true, floating windows can be docked by user as tabs.
*** 
> Number **openRecentLength** 
>
> Number of items to show in the Open Recent menu list. Range: 0 to 30
*** 
> Boolean **showTransformationValues** 
>
> Controls whether or not to dynamically display transformation information as part of the cursor while manipulating page items.
*** 
> Boolean **showAnchorObjectAdornment** 
>
> Controls whether or not the anchor object adornment is shown.
*** 
> Boolean **highlightObjectUnderSelectionTool** 
>
> Controls whether or not to highlight object under selection tool.
*** 
> Boolean **enableContentAwareFit** 
>
> If true, enable content-aware fit as default while placing items
*** 
> PreviewPagesOptions **previewPages** 
>
> The pages to create preview images for. Note: Valid when include preview is true.
*** 
> File **temporaryFolder** 
>
> The location in which to store temporary files.
*** 
> PageNumberingOptions **pageNumbering** 
>
> The page numbering method.
*** 
> Number **completeFontDownloadGlyphLimit** 
>
> The threshold at which to trigger font subsetting based on the number of glyphs the font contains.
*** 
> Boolean **includePreview** 
>
> If true, includes a preview in saved documents.
*** 
> Boolean **useIncomingSpotUponConflict** 
>
> If true, use incoming spot color definition in case of conflict, when placing or pasting content
*** 
> Boolean **ungroupRemembersLayers** 
>
> If true, objects after ungrouping go back to their original layers.
*** 
> PreviewSizeOptions **previewSize** 
>
> The preview size. Note: Valid when include preview is true.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the GeneralPreference.
*** 
> GeneralPreference **getElements**()
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


