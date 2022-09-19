# Application
The application.

## Class
> String **BEFORE_NEW** = beforeNew
> 
> Dispatched before a Document is created. This event bubbles. This event is cancelable.
*** 
> String **BEFORE_OPEN** = beforeOpen
> 
> Dispatched before a Document is opened. This event bubbles. This event is cancelable.
*** 
> String **AFTER_CLOSE** = afterClose
> 
> Dispatched after a Document is closed. This event bubbles. This event is not cancelable.
*** 
> String **AFTER_CONTEXT_CHANGED** = afterContextChanged
> 
> Dispatched after the active context changes. This event bubbles. This event is not cancelable.
*** 
> String **AFTER_SELECTION_CHANGED** = afterSelectionChanged
> 
> Dispatched after the active selection changes. This event bubbles. This event is not cancelable.
*** 
> String **AFTER_SELECTION_ATTRIBUTE_CHANGED** = afterSelectionAttributeChanged
> 
> Dispatched after an attribute on the active selection changes. This event bubbles. This event is not cancelable.
*** 
> String **BEFORE_DEACTIVATE** = beforeDeactivate
> 
> Dispatched before the Application becomes inactive. This event bubbles. This event is not cancelable.
*** 
> String **AFTER_ACTIVATE** = afterActivate
> 
> Dispatched after the Application becomes active. This event bubbles. This event is not cancelable.
*** 
> String **BEFORE_QUIT** = beforeQuit
> 
> Dispatched before the Application is quit. Allows the quit to be canceled. This event bubbles. This event is cancelable.
*** 
> String **AFTER_QUIT** = afterQuit
> 
> Dispatched when the Application is quitting. Since the quit has been committed, it can not be canceled. This event bubbles. This event is not cancelable.
*** 
## Instance
> XMLViewPreference **xmlViewPreferences** 
>
> XML view preference settings.
*** 
> Number **performanceMetrics** 
>
> The available performance metrics.
*** 
> ToolBox **toolBoxTools** 
>
> The current tool box states
*** 
> DisplayPerformancePreference **displayPerformancePreferences** 
>
> Display performance settings.
*** 
> GpuPerformancePreference **gpuPerformancePreferences** 
>
> GPU performance preferences.
*** 
> GalleyPreference **galleyPreferences** 
>
> Galley preference settings.
*** 
> Boolean **homeScreenVisible** 
>
> Get whether home screen is visible or not.
*** 
> TextEditingPreference **textEditingPreferences** 
>
> Text editing preference settings.
*** 
> PreflightOption **preflightOptions** 
>
> Preflight option settings.
*** 
> PreflightBookOption **preflightBookOptions** 
>
> Preflight book option settings.
*** 
> String **allPreflightObjectTypes** 
>
> The list of all object types (strings) a preflight rule can operate on.
*** 
> String **allPreflightRuleCategories** 
>
> The list of all categories that have been declared by rules.
*** 
> String **allPreflightRuleIDs** 
>
> The list of all known (declared) rule IDs.
*** 
> DataMergeOption **dataMergeOptions** 
>
> The data merge option properties that define the data merge.
*** 
> NotePreference **notePreferences** 
>
> Note preference settings.
*** 
> JPEGExportPreference **jpegExportPreferences** 
>
> JPEG export preferences.
*** 
> TextImportPreference **textImportPreferences** 
>
> Text import preferences.
*** 
> TextExportPreference **textExportPreferences** 
>
> Text export preferences.
*** 
> TaggedTextExportPreference **taggedTextExportPreferences** 
>
> Tagged text export preferences.
*** 
> TaggedTextImportPreference **taggedTextImportPreferences** 
>
> Tagged text import preferences.
*** 
> WordRTFImportPreference **wordRTFImportPreferences** 
>
> Word and RTF import preferences.
*** 
> ExcelImportPreference **excelImportPreferences** 
>
> Excel import preferences.
*** 
> EPubExportPreviewAppPreference **epubViewingAppsPreferences** 
>
> EPub export preview app preference settings.
*** 
> XMLPreference **xmlPreferences** 
>
> The XML preference settings.
*** 
> XMLImportPreference **xmlImportPreferences** 
>
> XML import preference settings.
*** 
> XMLExportPreference **xmlExportPreferences** 
>
> XML export preference settings.
*** 
> ExportForWebPreference **exportForWebPreferences** 
>
> The default export for web preferences.
*** 
> TransparencyPreference **transparencyPreferences** 
>
> Transparency preference settings.
*** 
> TextFramePreference **textFramePreferences** 
>
> Text frame preference settings.
*** 
> TextPreference **textPreferences** 
>
> Text preference settings.
*** 
> TextDefault **textDefaults** 
>
> Text default settings.
*** 
> EndnoteOption **endnoteOptions** 
>
> Endnote option settings.
*** 
> DictionaryPreference **dictionaryPreferences** 
>
> User dictionary preference settings.
*** 
> FontSyncPreference **fontSyncPreferences** 
>
> The font sync preference properties that define preferences for fonts.
*** 
> StoryPreference **storyPreferences** 
>
> Story preference settings.
*** 
> AnchoredObjectDefault **anchoredObjectDefaults** 
>
> Anchored object default settings.
*** 
> AnchoredObjectSetting **anchoredObjectSettings** 
>
> Anchored object settings.
*** 
> BaselineFrameGridOption **baselineFrameGridOptions** 
>
> Baseline frame grid option settings.
*** 
> FootnoteOption **footnoteOptions** 
>
> Footnote option settings.
*** 
> ParagraphStyle **allParagraphStyles** 
>
> Lists all paragraph styles (regardless of their group).
*** 
> CharacterStyle **allCharacterStyles** 
>
> Lists all character styles (regardless of their group).
*** 
> TextWrapPreference **textWrapPreferences** 
>
> The text wrap preference properties that define the default formatting for wrapping text around objects.
*** 
> TypeContextualUiPreference **typeContextualUiPrefs** 
>
> Preferences for showing contextual ui for alternates.
*** 
> TableStyle **allTableStyles** 
>
> All Table styles
*** 
> CellStyle **allCellStyles** 
>
> All Cell styles
*** 
> DocumentPreference **documentPreferences** 
>
> Document preference settings.
*** 
> GridPreference **gridPreferences** 
>
> Grid preference settings.
*** 
> GuidePreference **guidePreferences** 
>
> Guide preference settings.
*** 
> MarginPreference **marginPreferences** 
>
> Margin preference settings.
*** 
> PasteboardPreference **pasteboardPreferences** 
>
> Pasteboard preference settings.
*** 
> ViewPreference **viewPreferences** 
>
> View preference settings.
*** 
> SmartGuidePreference **smartGuidePreferences** 
>
> Smart Guide preference properties.
*** 
> SpellPreference **spellPreferences** 
>
> Spell-check preferences.
*** 
> AutoCorrectPreference **autoCorrectPreferences** 
>
> Auto-correct preferences.
*** 
> LinkedStoryOption **linkedStoryOptions** 
>
> Linked story options
*** 
> LinkedPageItemOption **linkedPageItemOptions** 
>
> Linked Page Item options
*** 
> ScriptPreference **scriptPreferences** 
>
> Script preferences.
*** 
> ScriptArg **scriptArgs** 
>
> Arguments to pass to a script.
*** 
> EPSExportPreference **epsExportPreferences** 
>
> EPS export preferences.
*** 
> PNGExportPreference **pngExportPreferences** 
>
> PNG export preferences.
*** 
> PDFExportPreference **pdfExportPreferences** 
>
> A collection of PDF export preferences.
*** 
> InteractivePDFExportPreference **interactivePDFExportPreferences** 
>
> Interactive PDF export preferences.
*** 
> PDFPlacePreference **pdfPlacePreferences** 
>
> The PDF place preference properties that define how PDF files are placed in the current document.
*** 
> TaggedPDFPreference **taggedPDFPreferences** 
>
> Tagged PDF preferences.
*** 
> String **placeableFileExtensions** 
>
> Lists the extensions of file types that can be placed.
*** 
> String **placeableFileTypes** 
>
> Lists the types of files that can be placed.
*** 
> LinkingPreference **linkingPreferences** 
>
> The links preference properties that define preferences for links.
*** 
> GrabberPreference **grabberPreferences** 
>
> Grabber preference properties that define display performance quality during scrolling.
*** 
> IndexOptions **indexGenerationOptions** 
>
> The index options properties that define how an index is formatted.
*** 
> TrackChangesPreference **trackChangesPreferences** 
>
> Track changes preference settings.
*** 
> InCopyExportOption **incopyExportOptions** 
>
> Export options for InCopy INCX document format.
*** 
> IMEPreference **imePreferences** 
>
> IME preference settings.
*** 
> ImageIOPreference **imageIOPreferences** 
>
> The image I/O preference properties that define preferences for importing images.
*** 
> ImagePreference **imagePreferences** 
>
> Image preferences.
*** 
> StrokeFillProxySetting **strokeFillProxySettings** 
>
> Stroke/fill proxy settings.
*** 
> PolygonPreference **polygonPreferences** 
>
> Polygon preference properties to use to define default settings for creating a polygon.
*** 
> ObjectStyle **allObjectStyles** 
>
> All object styles contained by the Application.
*** 
> PageItemDefault **pageItemDefaults** 
>
> The default page item formatting for the Application.
*** 
> AlignDistributePreference **alignDistributePreferences** 
>
> Preferences for alignment and distribution.
*** 
> FrameFittingOption **frameFittingOptions** 
>
> The frame fitting option to apply to placed or pasted content. Can be applied to a frame, object style, or document or to the application.
*** 
> ButtonPreference **buttonPreferences** 
>
> Button preference settings.
*** 
> EPSImportPreference **epsImportPreferences** 
>
> EPS import preferences.
*** 
> ImportedPageAttribute **importedPageAttributes** 
>
> Placed InDesign page attributes.
*** 
> Swatch **unusedSwatches** 
>
> The swatches that are not being used.
*** 
> WatermarkPreference **watermarkPreferences** 
>
> Watermark preferences
*** 
> ContentPlacerObject **contentPlacer** 
>
> The Content Placer. Used to get a reference to the content placer object.
*** 
> ConditionalTextPreference **conditionalTextPreferences** 
>
> Conditional text preferences.
*** 
> ColorSetting **colorSettings** 
>
> Color setting properties that define color management defaults.
*** 
> LayoutGridDataInformation **layoutGridData** 
>
> Default properties specific to layout grids.
*** 
> StoryGridDataInformation **storyGridData** 
>
> Default properties specific to frame grids.
*** 
> CjkGridPreference **cjkGridPreferences** 
>
> CJK grid preference settings.
*** 
> GridPrintingPreference **gridPrintingPreferences** 
>
> Grid printing preference and export settings.
*** 
> FontLockingPreference **fontLockingPreferences** 
>
> Font locking preference settings.
*** 
> MojikumiUiPreference **mojikumiUIPreferences** 
>
> Mojikumi user interface preference settings.
*** 
> String **name** 
>
> The name of the Application.
*** 
> File **fullName** 
>
> The full path to the Application, including the name of the Application.
*** 
> File **filePath** 
>
> The full path to the file.
*** 
> String **version** 
>
> The application version.
*** 
> Locale **locale** 
>
> The locale of the application.
*** 
> File **activeScript** 
>
> The current script running from the Scripts panel.
*** 
> String **userAdobeId** 
>
> The current user's adobe id
*** 
> String **userGuid** 
>
> The current user's GUID
*** 
> Boolean **visible** 
>
> If true, the Application is visible.
*** 
> GeneralPreference **generalPreferences** 
>
> General preference settings.
*** 
> ClipboardPreference **clipboardPreferences** 
>
> Clipboard preference properties that define the way that the application interacts with the system clipboard.
*** 
> TransformPreference **transformPreferences** 
>
> Transform preference properties that define default behaviors when transforming objects. Note: Transforming includes rotation, scaling, flipping, and shearing.
*** 
> Boolean **modalState** 
>
> If true, a modal dialog or alert is active.
*** 
> FeatureSetOptions **featureSet** 
>
> The feature set.
*** 
> String **undoName** 
>
> The name of the action on the top of the undo stack.
*** 
> String **redoName** 
>
> The name of the action on the top of the redo stack.
*** 
> String **undoHistory** 
>
> The names of the items in the undo stack.
*** 
> String **redoHistory** 
>
> The names of the items in the redo stack.
*** 
> UndoModes **activeScriptUndoMode** 
>
> The undo mode for the current script execution.
*** 
> String **serialNumber** 
>
> The user's serial number.
*** 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> Application **parent** 
>
> The parent of the Application (a Application).
*** 
> Preferences **preferences** 
>
> A collection of preferences objects.
*** 
> DisplaySettings **displaySettings** 
>
> Display setting properties.
*** 
> PreflightProfiles **preflightProfiles** 
>
> A collection of preflight profiles.
*** 
> PreflightRules **preflightRules** 
>
> A collection of preflight rules.
*** 
> PreflightProcesses **preflightProcesses** 
>
> A collection of preflight processes.
*** 
> Panels **panels** 
>
> A collection of panels.
*** 
> Libraries **libraries** 
>
> A collection of object libraries.
*** 
> PrinterPresets **printerPresets** 
>
> A collection of printer presets.
*** 
> XMLExportMaps **xmlExportMaps** 
>
> A collection of XML export maps.
*** 
> XMLImportMaps **xmlImportMaps** 
>
> A collection of XML import maps.
*** 
> XMLRuleProcessors **xmlRuleProcessors** 
>
> A collection of XML rule processors.
*** 
> XMLTags **xmlTags** 
>
> A collection of XML tags.
*** 
> FlattenerPresets **flattenerPresets** 
>
> A collection of transparency flattener presets.
*** 
> UserDictionaries **userDictionaries** 
>
> A collection of user dictionaries.
*** 
> ParagraphStyleGroups **paragraphStyleGroups** 
>
> A collection of paragraph style groups.
*** 
> CharacterStyleGroups **characterStyleGroups** 
>
> A collection of character style groups.
*** 
> CharacterStyles **characterStyles** 
>
> A collection of character styles.
*** 
> ParagraphStyles **paragraphStyles** 
>
> A collection of paragraph styles.
*** 
> TextVariables **textVariables** 
>
> A collection of text variables.
*** 
> TableStyles **tableStyles** 
>
> A collection of table styles.
*** 
> TableStyleGroups **tableStyleGroups** 
>
> A collection of table style groups.
*** 
> CellStyles **cellStyles** 
>
> A collection of cell styles.
*** 
> CellStyleGroups **cellStyleGroups** 
>
> A collection of cell style groups.
*** 
> StrokeStyles **strokeStyles** 
>
> A collection of stroke styles.
*** 
> DashedStrokeStyles **dashedStrokeStyles** 
>
> A collection of dashed stroke styles.
*** 
> DottedStrokeStyles **dottedStrokeStyles** 
>
> A collection of dotted stroke styles.
*** 
> StripedStrokeStyles **stripedStrokeStyles** 
>
> A collection of striped stroke styles.
*** 
> DocumentPresets **documentPresets** 
>
> A collection of document presets.
*** 
> AutoCorrectTables **autoCorrectTables** 
>
> A collection of auto-correct tables.
*** 
> ParaStyleMappings **paraStyleMappings** 
>
> A collection of para style mappings.
*** 
> CharStyleMappings **charStyleMappings** 
>
> A collection of char style mappings.
*** 
> TableStyleMappings **tableStyleMappings** 
>
> A collection of table style mappings.
*** 
> CellStyleMappings **cellStyleMappings** 
>
> A collection of cell style mappings.
*** 
> Events **events** 
>
> A collection of events.
*** 
> EventListeners **eventListeners** 
>
> A collection of event listeners.
*** 
> IdleTasks **idleTasks** 
>
> All attachable idle tasks.
*** 
> Inks **inks** 
>
> A collection of inks.
*** 
> TrapPresets **trapPresets** 
>
> A collection of trap presets.
*** 
> PDFExportPresets **pdfExportPresets** 
>
> A collection of PDF export presets.
*** 
> LanguagesWithVendors **languagesWithVendors** 
>
> A collection of languages with vendors.
*** 
> IndexingSortOptions **indexingSortOptions** 
>
> A collection of indexing sort options.
*** 
> ObjectStyleGroups **objectStyleGroups** 
>
> A collection of object style groups.
*** 
> ObjectStyles **objectStyles** 
>
> A collection of object styles.
*** 
> TransformationMatrices **transformationMatrices** 
>
> A collection of transformation matrices.
*** 
> Fonts **fonts** 
>
> A collection of fonts.
*** 
> MotionPresets **motionPresets** 
>
> A collection of Motion presets.
*** 
> Documents **documents** 
>
> A collection of documents.
*** 
> Swatches **swatches** 
>
> A collection of swatches.
*** 
> Colors **colors** 
>
> A collection of colors.
*** 
> Tints **tints** 
>
> A collection of tints.
*** 
> Gradients **gradients** 
>
> A collection of gradients.
*** 
> MixedInks **mixedInks** 
>
> A collection of mixed inks.
*** 
> MixedInkGroups **mixedInkGroups** 
>
> A collection of mixed ink groups.
*** 
> ColorGroups **colorGroups** 
>
> A collection of color groups.
*** 
> Dialogs **dialogs** 
>
> A collection of dialogs.
*** 
> Conditions **conditions** 
>
> A collection of conditions for conditional text.
*** 
> ConditionSets **conditionSets** 
>
> A collection of condition sets for conditional text.
*** 
> CompositeFonts **compositeFonts** 
>
> A collection of composite fonts.
*** 
> NamedGrids **namedGrids** 
>
> A collection of named grids.
*** 
> KinsokuTables **kinsokuTables** 
>
> A collection of kinsoku tables.
*** 
> MojikumiTables **mojikumiTables** 
>
> A collection of mojikumi tables.
*** 
> Books **books** 
>
> A collection of books.
*** 
> NumberingLists **numberingLists** 
>
> A collection of numbered lists.
*** 
> Windows **windows** 
>
> A collection of windows.
*** 
> LayoutWindows **layoutWindows** 
>
> A collection of layout windows.
*** 
> StoryWindows **storyWindows** 
>
> A collection of story windows.
*** 
> BackgroundTasks **backgroundTasks** 
>
> A collection of background task objects.
*** 
> MenuActions **menuActions** 
>
> A collection of menu actions.
*** 
> ScriptMenuActions **scriptMenuActions** 
>
> A collection of script menu actions.
*** 
> Menus **menus** 
>
> A collection of menus.
*** 
> FindChangeColorOption **findChangeColorOptions** 
>
> Find/change color options. Can also accept: NothingEnum enumerator.
*** 
> FindColorPreference **findColorPreferences** 
>
> Find color preferences. Can also accept: NothingEnum enumerator.
*** 
> ChangeColorPreference **changeColorPreferences** 
>
> Change color preferences. Can also accept: NothingEnum enumerator.
*** 
> FindChangeTextOption **findChangeTextOptions** 
>
> Find/change text options. Can also accept: NothingEnum enumerator.
*** 
> FindChangeGrepOption **findChangeGrepOptions** 
>
> Find/change grep options. Can also accept: NothingEnum enumerator.
*** 
> FindChangeGlyphOption **findChangeGlyphOptions** 
>
> Find/change glyph options. Can also accept: NothingEnum enumerator.
*** 
> FindChangeObjectOption **findChangeObjectOptions** 
>
> Find/change object options. Can also accept: NothingEnum enumerator.
*** 
> FindTextPreference **findTextPreferences** 
>
> Find text preferences. Can also accept: NothingEnum enumerator.
*** 
> ChangeTextPreference **changeTextPreferences** 
>
> Change text preferences. Can also accept: NothingEnum enumerator.
*** 
> FindGrepPreference **findGrepPreferences** 
>
> Find grep preferences. Can also accept: NothingEnum enumerator.
*** 
> ChangeGrepPreference **changeGrepPreferences** 
>
> Change grep preferences. Can also accept: NothingEnum enumerator.
*** 
> FindGlyphPreference **findGlyphPreferences** 
>
> Find glyph preferences. Can also accept: NothingEnum enumerator.
*** 
> ChangeGlyphPreference **changeGlyphPreferences** 
>
> Change glyph preferences. Can also accept: NothingEnum enumerator.
*** 
> FindObjectPreference **findObjectPreferences** 
>
> Find object preferences. Can also accept: NothingEnum enumerator.
*** 
> ChangeObjectPreference **changeObjectPreferences** 
>
> Change object preferences. Can also accept: NothingEnum enumerator.
*** 
> FindChangeTransliterateOption **findChangeTransliterateOptions** 
>
> Find/change transliterate options. Can also accept: NothingEnum enumerator.
*** 
> FindTransliteratePreference **findTransliteratePreferences** 
>
> Find transliterate preferences. Can also accept: NothingEnum enumerator.
*** 
> ChangeTransliteratePreference **changeTransliteratePreferences** 
>
> Change transliterate preferences. Can also accept: NothingEnum enumerator.
*** 
> HttpLinkConnectionManagerObject **httpLinkConnectionManager** 
>
> Experimental: Connection manager property
*** 
> Mixed **userColor** 
>
> The color assigned to the tracked changes and notes created by the user, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
*** 
> String **userName** 
>
> The user associated with the tracked changes and notes.
*** 
> Boolean **clearOverridesWhenApplyingStyle** 
>
> Clear overrides first before applying object style
*** 
> Book **activeBook** 
>
> The active book.
*** 
> Object **selection** 
>
> The selected object(s). Can also accept: Object or NothingEnum enumerator.
*** 
> Mixed **activeWindow** 
>
> The front-most window. Can return: Window, LayoutWindow or StoryWindow.
*** 
> LiveDrawingOptions **liveScreenDrawing** 
>
> Delay before mouse operations trigger live screen drawing of page items.
*** 
> PageItem **selectionKeyObject** 
>
> The key object of the selection. Can also accept: NothingEnum enumerator.
*** 
> Document **activeDocument** 
>
> The front-most document.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.
*** 
### Methods
> Mixed **performanceMetric**( Mixed **for** )
> 
> Gets the current value of the specified performance metric.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | for | The status to get from InDesign. Can accept: Long Integer or PerformanceMetricOptions enumerator. |

*** 
> **dumpFromMemoryMark**( Number **from** )
> 
> Dumps memory allocations from the specified mark.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | from | The mark from which to dump memory. |

*** 
> **dumpBetweenMemoryMarks**( Number **from**, Number **to** )
> 
> Dumps memory allocations from all marks in the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | from | The first mark in the range. |
| Number | to | The last mark in the range. |

*** 
> Mixed **memoryStatistics**()
> 
> Gets the memory statistics from the server.
*** 
> String **performanceMetricShortName**( Mixed **for** )
> 
> Gets the short name of the specified performance metric.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | for | The status to get from InDesign. Can accept: Long Integer or PerformanceMetricOptions enumerator. |

*** 
> String **performanceMetricLongName**( Mixed **for** )
> 
> Gets the long name of the specified performance metric.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | for | The status to get from InDesign. Can accept: Long Integer or PerformanceMetricOptions enumerator. |

*** 
> String **invokeColorPicker**( ColorSpace **space**, Number **colorValue** )
> 
> Invokes InDesign's Color Picker.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ColorSpace | space | Color space RGB, CMYK or LAB |
| Number | colorValue | Color values |

*** 
> Boolean **openCloudAssetForEdit**( String **jsondata** )
> 
> Opens the cloud library asset for editing.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | jsondata | JSON encoded information about the asset to be edited. |

*** 
> **setCloudLibraryOptions**( Number **maxwidth**, Number **maxheight** )
> 
> Sets the export options for generation of a cloud asset.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | maxwidth | The maximum width of the thumbnail generated in pixels. |
| Number | maxheight | The maximum height of the thumbnail generated in pixels. |

*** 
> Boolean **exportSelectionForCloudLibrary**( File **to** )
> 
> Exports selection as assets required for cloud library.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The path to the export file. |

*** 
> Boolean **isUserSharingAppUsageData**()
> 
> Whether user has opted-in to share usage data.
*** 
> **setCloudLibraryCollection**( String **librariesCollectionInfo** )
> 
> Set cloud libraries info.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | librariesCollectionInfo | JSON encoded information about cloud libraries collection |

*** 
> String **createTemporaryCopy**( File **from** )
> 
> Creates a temporary copy of the file
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | from | The file to be copied |

*** 
> Boolean **removeFileFromRecentFiles**( File **to** )
> 
> Remove the file from most recently used files
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The file to be removed |

*** 
> Boolean **isAppInTouchMode**()
> 
> Whether the app is in touch mode or not.
*** 
> String **getCCXUserJSONData**( String **jsondata** )
> 
> Get a JSON string for the CCX Welcome dialog.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | jsondata | mode description (Optional) |

*** 
> Mixed **getStyleConflictResolutionStrategy**( StyleType **charOrParaStyle** )
> 
> Get the resolution strategy for style conflict, false if the user cancels
#### Parameters
| Type | Name | Description |
|---|---|---|
| StyleType | charOrParaStyle | Style type to look at. (Optional) |

*** 
> **openPanel**( Number **id** )
> 
> Open the panel associated with the action.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Mixed **getUserChoiceForCloudTextAddition**()
> 
> Gets the decision from the user to add the content of text frame or the complete story in case of threaded text frame.
*** 
> **unpackageUCF**( File **ucfFile**, File **destinationFolder** )
> 
> Unpackage a UCF file into a folder structure.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | ucfFile | The UCF file to be unpackaged. |
| File | destinationFolder | The folder where you would like the UCF file unpackaged to. Will be created if it does not exist. |

*** 
> **packageUCF**( File **sourceFolder**, File **ucfFile**, String **mimeMediaType** )
> 
> Package a folder into a UCF file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | sourceFolder | The folder to be packaged into an IDML file. Does not validate structure of the folder pursuant to the IDML spec. Caller is responsible for making sure the files in the folder are correctly organized. |
| File | ucfFile | The destination UCF file. Will be overwritten if it already exists. |
| String | mimeMediaType | The MIME media type, default value identifies package as IDML. (Optional) |

*** 
> PreflightProfile **loadPreflightProfile**( File **from** )
> 
> Load preflight profile from the specified file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | from | The InDesign preflight profile file or InDesign document. |

*** 
> String **exportArticleFolio**( File **destination**, Document **portraitDocument**, Document **landscapeDocument**, Mixed **folioMetadata**, Mixed **miniFolioParams** )
> 
> Export the specified documents to an article folio.

Note: This method behaves identically to @method(exportMiniFolio), but differs in its return value. @method(exportMiniFolio) returns an array of warning strings whereas this method returns an XML structure.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | destination | The location to write the file. |
| Document | portraitDocument | The InDesign document for the stack's portrait orientation. |
| Document | landscapeDocument | The InDesign document for the stack's landscape orientation. |
| Mixed | folioMetadata | Optional meta data for the mini folio. Can accept: Ordered array containing key:String, value:String. (Optional) |
| Mixed | miniFolioParams | Options for exporting a mini folio. Can accept: Ordered array containing dataField:String, dataValue:Any Type. (Optional) |

*** 
> String **exportDpsArticle**( File **destination**, Document **document**, Mixed **dpsArticleParams** )
> 
> Export the specified document to a DPS article.
Note: This method behaves similarly to @method(exportMiniFolio), but differs in its parameters.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | destination | The location to write the file. |
| Document | document | The source InDesign document. |
| Mixed | dpsArticleParams | Options for exporting a DPS article. Can accept: Ordered array containing dataField:String, dataValue:Any Type. |

*** 
> String **getDigpubArticleVersion**( DigpubArticleVersion **digpubArticleVersion** )
> 
> Get the current digital publishing article version number for the given parameter.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DigpubArticleVersion | digpubArticleVersion | Version string(s) to retrieve. |

*** 
> String **getSupportedArticleViewerVersions**()
> 
> Get the list of article viewer versions the digital publishing plugin supports.
*** 
> String **getDigpubVersion**( DigpubVersion **digpubVersion** )
> 
> Get the current digital publishing version number for the given parameter.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DigpubVersion | digpubVersion | Version string(s) to retrieve. |

*** 
> String **getSupportedViewerVersions**()
> 
> Get the list of viewer versions the digital publishing plugin supports.
*** 
> String **exportMiniFolio**( File **destination**, Document **portraitDocument**, Document **landscapeDocument**, Mixed **folioMetadata**, Mixed **miniFolioParams** )
> 
> Export the specified documents to a mini-folio.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | destination | The location to write the file. |
| Document | portraitDocument | The InDesign document for the stack's portrait orientation. |
| Document | landscapeDocument | The InDesign document for the stack's landscape orientation. |
| Mixed | folioMetadata | Optional meta data for the mini folio. Can accept: Ordered array containing key:String, value:String. (Optional) |
| Mixed | miniFolioParams | Options for exporting a mini folio. Can accept: Ordered array containing dataField:String, dataValue:Any Type. (Optional) |

*** 
> **exportFolioToPackage**( File **destination**, Mixed **miniFolioList**, Mixed **folioMetadata**, Mixed **exportFolioParams** )
> 
> Export the selected documents to a compressed folio file that contains compressed mini folios.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | destination | The location to write the package. |
| Mixed | miniFolioList | The mini folio(es) to add to the folio. Can accept: File or Array of Files. |
| Mixed | folioMetadata | Meta data for the folio. Can accept: Ordered array containing key:String, value:String. |
| Mixed | exportFolioParams | Additional options for export folios. Can accept: Ordered array containing dataField:String, dataValue:Any Type. (Optional) |

*** 
> **exportFolioToDirectory**( File **destination**, Mixed **miniFolioList**, Mixed **folioMetadata**, Mixed **exportFolioParams** )
> 
> Export the selected documents to a directory.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | destination | The directory to write the folio. |
| Mixed | miniFolioList | The mini folio(es) to add to the folio. Can accept: File or Array of Files. |
| Mixed | folioMetadata | Meta data for the folio. Can accept: Ordered array containing key:String, value:String. |
| Mixed | exportFolioParams | Additional options for export folios. Can accept: Ordered array containing dataField:String, dataValue:Any Type. (Optional) |

*** 
> **exportFolioToDirectoryPackage**( File **destination**, Mixed **miniFolioList**, Mixed **folioMetadata**, Mixed **exportFolioParams** )
> 
> Export the selected documents to a compressed folio file that contains non-compressed mini folios.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | destination | The location to write the package. |
| Mixed | miniFolioList | The mini folio(es) to add to the folio. Can accept: File or Array of Files. |
| Mixed | folioMetadata | Meta data for the folio. Can accept: Ordered array containing key:String, value:String. |
| Mixed | exportFolioParams | Additional options for export folios. Can accept: Ordered array containing dataField:String, dataValue:Any Type. (Optional) |

*** 
> Mixed **getAllOverlays**( Document **portraitDocumentForCheckingOverlays**, Document **landscapeDocumentForCheckingOverlays**, Mixed **miniFolioParams** )
> 
> Get all overlays.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Document | portraitDocumentForCheckingOverlays | The portrait document for checking overlays. |
| Document | landscapeDocumentForCheckingOverlays | The landscape document for checking overlays. |
| Mixed | miniFolioParams | Options for exporting a mini folio. Can accept: Ordered array containing dataField:String, dataValue:Any Type. (Optional) |

*** 
> **createCustomMiniFolio**( Mixed **miniFolioDescription**, File **destination** )
> 
> Create a mini-folio out of asset and overlay descriptions.

Schema for the mini folio description:
|| Key || Type || Required? || Description ||
| contentstackid | string | yes | The explicit ID to be used for this stack |
| tocImage | file | no | The TOC image for the mini-folio |
| narrowdimension | int | no | Targetted export size, measured along narrow dimension |
| widedimension | int | no | Targetted export size, measured along wide dimension |
| smoothscrolling | @enum(SmoothScrollingOptions) | no | The smooth scrolling behavior for this stack (default is noSmoothScroll) |
| locationforgeneratedassets | file | no | If included, this is an existing directory where the generated assets should be created. |
| overlays | array | no | see the SDK Overlay Builder APIs |
| assets | array | yes | The assets for the mini - folio, described below. |
| assetDependencies | array | no | Files that are needed by the asset, that will be included in the package but not the manifest. |
| metadata | array | no | The metadata for the mini-folio described below. |
| showprogressbar | boolean | no | Either true or false to indicate whether we should show a progress bar (default is false) |
| targetviewerversion | string | no | If provided (in the form "major.minor.revision") a folio compatible with the viewer version is produced. If omitted, the latest folio format is produced. | CS5 |

The following are fields in the array for "assets":
|| Key || Type || Required? || Description ||
| file | file | yes | The asset file |
| type | string | yes | The asset file type, either "web" for HTML or "image" for a raster |
| width | int | yes | The asset width |
| height | int | yes | The asset height |
| orientation | string | yes | The asset orientation, either "portrait" or "landscape" |
| thumbnail | file | no | A thumbnail of the asset to be used in browse mode |
| scrubber | file | no | A thumbnail of the asset to be used in scrubber mode |

The following are fields in the array for "assetDependencies":
|| Key || Type || Required? || Description ||
| file | file | no | The dependent file |
| relativePath | string | no | The relative path to the file, for use in the package |

The following are fields in the array for "metadata":
|| Key || Type || Required? || Description ||
| any string | string or boolean | no | any key/value where the key is a string, and the value is either a string or a boolean, such as those described in "export folio meta data" |
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | miniFolioDescription | A dictionary describing the custom mini folio to create. Can accept: Ordered array containing key:String, value:Boolean, Long Integer, Long Long Integer, String, File or Array of Any Types. |
| File | destination | The location to write the file. |

*** 
> **deleteUnusedTags**()
> 
> Deletes unused XML markup tags.
*** 
> **loadXMLTags**( File **from** )
> 
> Loads a set of XML markup tags from the specified file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | from | The path to the file that contains the tags. |

*** 
> **saveXMLTags**( File **to**, String **versionComments**, Boolean **forceSave** )
> 
> Saves a set of tags to an external file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The full path to the file in which to save the tags. |
| String | versionComments | The comment for this version. (Optional) |
| Boolean | forceSave | If true, forcibly saves a version. (Optional) |

*** 
> **mountProject**( String **serverURL**, String **projectName** )
> 
> Mount a Version Cue project.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | serverURL | The URL of the Version Cue server containing the project |
| String | projectName | The name of the Version Cue project to mount |

*** 
> **importStyles**( ImportFormat **format**, File **from**, GlobalClashResolutionStrategy **globalStrategy** )
> 
> Imports the specified styles.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ImportFormat | format | The types of styles to import. |
| File | from | The file containing the styles you want to import. |
| GlobalClashResolutionStrategy | globalStrategy | The resolution strategy to employ for imported styles that have the same names as existing styles. (Optional) |

*** 
> **exportStrokeStyles**( File **to**, StrokeStyle **strokeStyleList**, String **versionComments**, Boolean **forceSave** )
> 
> Exports stroke styles or presets.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The file to save to |
| StrokeStyle | strokeStyleList | The list of stroke styles to save |
| String | versionComments | The comment for this version (Optional) |
| Boolean | forceSave | Forcibly save a version (Optional) |

*** 
> Number **findColor**()
> 
> Finds color that matches the find what value.
*** 
> Number **changeColor**()
> 
> Finds color that matches the find what value and replaces the color with the change to value.
*** 
> Text **findText**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **changeText**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value and replaces the text with the change to value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **findGrep**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **changeGrep**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value and replaces the text with the change to value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **findGlyph**( Boolean **reverseOrder** )
> 
> Finds glyphs that match the find what value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **changeGlyph**( Boolean **reverseOrder** )
> 
> Finds glyphs that match the find what value and replaces the glyphs with the change to value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

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
> **saveFindChangeQuery**( String **queryName**, SearchModes **searchMode** )
> 
> Saves the specified find/change query.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | queryName | The query to save. |
| SearchModes | searchMode | The search mode. |

*** 
> **loadFindChangeQuery**( String **queryName**, SearchModes **searchMode** )
> 
> Loads the specified find/change query.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | queryName | The query to load. |
| SearchModes | searchMode | The search mode. |

*** 
> **deleteFindChangeQuery**( String **queryName**, SearchModes **searchMode** )
> 
> Deletes the specified find/change query.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | queryName | The query to delete. |
| SearchModes | searchMode | The search mode. |

*** 
> Text **findTransliterate**( Boolean **reverseOrder** )
> 
> Finds text that matches the find character type value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **changeTransliterate**( Boolean **reverseOrder** )
> 
> Finds text that matches the find character type value and replaces the text with the change character type value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> **print**( Mixed **from**, Boolean **printDialog**, Mixed **using** )
> 
> Prints the specified file(s).
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | One or more file paths. Can accept: File or Array of Files. |
| Boolean | printDialog | Whether to invoke the print dialog (Optional) |
| Mixed | using | Printer preset to use. Can accept: PrinterPresetTypes enumerator or PrinterPreset. (Optional) |

*** 
> **exportPresets**( ExportPresetFormat **format**, File **to**, String **versionComments**, Boolean **forceSave** )
> 
> Export the presets to a file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ExportPresetFormat | format | The preset format. |
| File | to | The file to export to. |
| String | versionComments | The comments for this version. (Optional) |
| Boolean | forceSave | Forcibly save a version. (Optional) |

*** 
> **importFile**( ExportPresetFormat **format**, File **from** )
> 
> Imports presets from the specified file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ExportPresetFormat | format | The type of preset to import. |
| File | from | The file to import presets from. |

*** 
> **place**( Mixed **fileName**, Boolean **showingOptions**, Object **withProperties** )
> 
> Place one or more files following the behavior of the place menu item. This may load the place gun or replace the selected object, depending on current preferences.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | fileName | One or more files to place. Can accept: File or Array of Files. |
| Boolean | showingOptions | Whether to display the import options dialog (Optional) |
| Object | withProperties | Initial values for properties of the placed object(s) (Optional) |

*** 
> **clearFrameFittingOptions**()
> 
> Removes the frame fittings options and resets it to the initial state.
*** 
> **updateFonts**()
> 
> Forces a check for new fonts in the various Fonts folders.
*** 
> MotionPreset **loadMotionPreset**( File **from** )
> 
> Load motion preset from the specified file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | from | The Flash motion preset file. |

*** 
> **cut**()
> 
> Cuts the selection in the active document window and stores it in the clipboard.
*** 
> **copy**()
> 
> Copies the selection in the active document window to the clipboard.
*** 
> **paste**()
> 
> Pastes data from the clipboard into the active document window.
*** 
> **pasteInto**()
> 
> Pastes data from the clipboard into the selected object in the active document window.
*** 
> **pasteInPlace**()
> 
> Pastes data from the clipboard into the active document window at the same position that the data held in its original document.
*** 
> Number **getUntitledCount**()
> 
> Gets the count which will be used in the name of the next untitled document.
*** 
> **setUntitledCount**( Number **untitledCount** )
> 
> Sets the count which will be used in the name of the next untitled document.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | untitledCount | The count to be used in the name of the next untitled document. Only positive values are expected |

*** 
> Number **colorTransform**( Number **colorValue**, ColorSpace **sourceColorSpace**, ColorSpace **destinationColorSpace** )
> 
> Transforms color values
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | colorValue | source color value |
| ColorSpace | sourceColorSpace | source color space |
| ColorSpace | destinationColorSpace | destination color space |

*** 
> **pasteWithoutFormatting**()
> 
> Pastes data (minus formatting) from the clipboard into the active document window.
*** 
> **loadSwatches**( File **from** )
> 
> Load swatches from the specified file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | from | The swatch file or InDesign document. |

*** 
> **saveSwatches**( File **to**, Swatch **swatchList**, String **versionComments**, Boolean **forceSave** )
> 
> Saves the specified swatch(es) to a swatchbook file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The swatchbook file to save to. |
| Swatch | swatchList | The swatch(es) to save. |
| String | versionComments | The comment for this version. (Optional) |
| Boolean | forceSave | If true, forcibly saves a version. (Optional) |

*** 
> Color **importAdobeSwatchbookSpotColor**( String **name** )
> 
> Imports a spot color swatch from an Adobe color book.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The spot color to load. |

*** 
> Color **importAdobeSwatchbookProcessColor**( String **name** )
> 
> Imports a process color swatch from a preloaded Adobe color book.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The process color to load. |

*** 
> **loadConditions**( File **from**, Boolean **loadConditionSets** )
> 
> Load conditions from the specified file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | from | The path to the file that contains the conditions. |
| Boolean | loadConditionSets | If true, load the condition sets as well. (Optional) |

*** 
> **select**( Mixed **selectableItems**, SelectionOptions **existingSelection** )
> 
> Selects the specified object(s).
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | selectableItems | The objects to select. Can accept: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator. |
| SelectionOptions | existingSelection | The selection status of the Application in relation to previously selected objects. (Optional) |

*** 
> **applyShortcutSet**( String **name** )
> 
> Applies the specified shortcut set file. No string will apply the default shortcut set.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The shortcut set. (Optional) |

*** 
> **applyWorkspace**( String **name** )
> 
> Applies the specified workspace.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The workspace. (Optional) |

*** 
> **applyMenuCustomization**( String **name** )
> 
> Applies the specified menu customization set. An empty string will reset all menus and colorization (Show Full Menus). No string will apply the default menu set.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The menu customization set. (Optional) |

*** 
> **togglePanelSystemVisibility**()
> 
> Toggles the visibility of the entire panel system.
*** 
> Mixed **open**( Mixed **from**, Boolean **showingWindow**, OpenOptions **openOption** )
> 
> Opens the specified document, book, or library.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The file path(s) to the document, book, or library. Can accept: File or Array of Files. |
| Boolean | showingWindow | If true, opens the document in a window. If false, the document is opened but is not displayed in a window. (Optional) |
| OpenOptions | openOption | How to open the document. (Optional) |

*** 
> **quit**( SaveOptions **saving** )
> 
> Quits the application.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SaveOptions | saving | The option to use for saving changes to open documents before quitting. (Optional) |

*** 
> any **doScript**( Mixed **script**, ScriptLanguage **language**, any **withArguments**, UndoModes **undoMode**, String **undoName** )
> 
> Executes the script in the specified language as a single transaction.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | script | The script to execute. Can accept: File, String or JavaScript Function. |
| ScriptLanguage | language | The language of the script to execute. If not specified, uses the language used to call this method. (Optional) |
| any | withArguments | An array of arguments passed to the script. (Optional) |
| UndoModes | undoMode | How to undo this script. (Optional) |
| String | undoName | The name of the undo step for entire script undo mode. (Optional) |

*** 
> **activate**()
> 
> Makes the application the front-most or active window.
*** 
> **cascadeWindows**()
> 
> Cascades all document windows.
*** 
> String **internalMethod**( String **internalParameter1**, String **internalParameter2** )
> 
> Internal use only: a black box method for use by InDesign Engineering team only.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | internalParameter1 | The first internal parameter |
| String | internalParameter2 | The second internal parameter |

*** 
> Boolean **deleteCloudDocument**( String **assetReference** )
> 
> Delete cloud document for a given reference.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | assetReference | The reference to asset |

*** 
> Document **openCloudDocument**( String **assetReference**, Boolean **showingWindow** )
> 
> Open cloud document for a given reference.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | assetReference | The reference to asset |
| Boolean | showingWindow | If true, opens the document in a window. If false, the document is opened but is not displayed in a window. (Optional) |

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
> String **findKeyStrings**( String **for** )
> 
> Returns the locale-independent string(s) from the internal string localization database that correspond to the specified string (in the current locale).
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | for | The string to search for. |

*** 
> String **translateKeyString**( String **for** )
> 
> Translates a key string into localized form based on current application locale.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | for | The key string to translate |

*** 
> **undo**()
> 
> Undoes the last action.
*** 
> **redo**()
> 
> Redoes the last action.
*** 
> **tileWindows**()
> 
> Tile all document windows
*** 
> **generateIDMLSchema**( File **to**, Boolean **packageFormat** )
> 
> Generate schema for IDML.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The folder path of the schema. |
| Boolean | packageFormat | If true, generate schema for package format (multiple files). Default value is false. (Optional) |

*** 
> **cancelAllTasks**()
> 
> Cancels all the background tasks.
*** 
> TaskState **waitForAllTasks**()
> 
> Waits for all the background tasks to finish.
*** 
> **setApplicationPreferences**( Mixed **applicationPreferences** )
> 
> Sets the application's preferences.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | applicationPreferences | The IDML defaults file or enumeration. Can accept: File or LanguageAndRegion enumerator. |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Application.
*** 
> Application **getElements**()
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

*** 
