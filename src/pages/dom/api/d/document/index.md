# Document
A document.

## Class
> *Read Only* 
> 
> String **BEFORE_PRINT** = beforePrint
> 
> Dispatched before a Document is printed. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_PRINT** = afterPrint
> 
> Dispatched after a Document is printed. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_LINKS_CHANGED** = afterLinksChanged
> 
> Dispatched after one or more links in the Document have been added, deleted, or modified. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_NEW** = afterNew
> 
> Dispatched after a Document is created. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_OPEN** = afterOpen
> 
> Dispatched after a Document is opened. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_SAVE** = beforeSave
> 
> Dispatched before a Document is saved. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_SAVE** = afterSave
> 
> Dispatched after a Document is saved. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_SAVE_AS** = beforeSaveAs
> 
> Dispatched before a Document is saved under a new name. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_SAVE_AS** = afterSaveAs
> 
> Dispatched after a Document is saved under a new name. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_SAVE_A_COPY** = beforeSaveACopy
> 
> Dispatched before a copy of a Document is saved. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_SAVE_A_COPY** = afterSaveACopy
> 
> Dispatched after a copy of a Document is saved. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_REVERT** = beforeRevert
> 
> Dispatched before a Document is reverted. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_REVERT** = afterRevert
> 
> Dispatched after a Document is reverted. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_CLOSE** = beforeClose
> 
> Dispatched before a Document is closed. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_EXPORT** = beforeExport
> 
> Dispatched before a Document is exported. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_EXPORT** = afterExport
> 
> Dispatched after a Document is exported. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **FAILED_EXPORT** = failedExport
> 
> Dispatched after a Document export is canceled or fails. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_IMPORT** = beforeImport
> 
> Dispatched before importing a file into a Document. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_IMPORT** = afterImport
> 
> Dispatched after importing a file into a Document. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_DEACTIVATE** = beforeDeactivate
> 
> Dispatched before the Document becomes inactive. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_ACTIVATE** = afterActivate
> 
> Dispatched after the Document becomes active. This event bubbles. This event is not cancelable.

## Instance
> *Read Only* 
> 
> XMLViewPreference **xmlViewPreferences** 
>
> XML view preference settings.
*** 
> *Read Only* 
> 
> GalleyPreference **galleyPreferences** 
>
> Galley preference settings.
*** 
> *Read Only* 
> 
> PreflightOption **preflightOptions** 
>
> Preflight option settings.
*** 
> *Read Only* 
> 
> PreflightProcess **activeProcess** 
>
> The active preflight process for this document.
*** 
> *Read Only* 
> 
> DataMerge **dataMergeProperties** 
>
> Data merge properties that define data merge fields and preferences.
*** 
> *Read Only* 
> 
> DataMergeOption **dataMergeOptions** 
>
> The data merge option properties that define the data merge.
*** 
> *Read Only* 
> 
> AdjustLayoutPreference **adjustLayoutPreferences** 
>
> Adjust layout preference settings.
*** 
> *Read Only* 
> 
> EPubFixedLayoutExportPreference **epubFixedLayoutExportPreferences** 
>
> EPub fixed layout export preference settings.
*** 
> *Read Only* 
> 
> HTMLFXLExportPreference **htmlFXLExportPreferences** 
>
> HTML FXL export preference settings.
*** 
> *Read Only* 
> 
> PublishExportPreference **publishExportPreferences** 
>
> Publish export preference settings.
*** 
> *Read Only* 
> 
> EPubExportPreference **epubExportPreferences** 
>
> EPub export preference settings.
*** 
> *Read Only* 
> 
> HTMLExportPreference **htmlExportPreferences** 
>
> HTML export preference settings.
*** 
> *Read Only* 
> 
> XMLPreference **xmlPreferences** 
>
> The XML preference settings.
*** 
> *Read Only* 
> 
> XMLImportPreference **xmlImportPreferences** 
>
> XML import preference settings.
*** 
> *Read Only* 
> 
> XMLExportPreference **xmlExportPreferences** 
>
> XML export preference settings.
*** 
> *Read Only* 
> 
> XMLItem **associatedXMLElement** 
>
> The XML element associated with the Document.
*** 
> *Read Only* 
> 
> ExportForWebPreference **exportForWebPreferences** 
>
> The default export for web preferences.
*** 
> *Read Only* 
> 
> VersionState **versionState** 
>
> The Version Cue version state of the file.
*** 
> *Read Only* 
> 
> EditingState **editingState** 
>
> The Version Cue editing state of the file.
*** 
> *Read Only* 
> 
> TransparencyPreference **transparencyPreferences** 
>
> Transparency preference settings.
*** 
> *Read Only* 
> 
> TextFramePreference **textFramePreferences** 
>
> Text frame preference settings.
*** 
> *Read Only* 
> 
> TextPreference **textPreferences** 
>
> Text preference settings.
*** 
> *Read Only* 
> 
> TextDefault **textDefaults** 
>
> Text default settings.
*** 
> *Read Only* 
> 
> EndnoteOption **endnoteOptions** 
>
> Endnote option settings.
*** 
> *Read Only* 
> 
> DictionaryPreference **dictionaryPreferences** 
>
> User dictionary preference settings.
*** 
> *Read Only* 
> 
> StoryPreference **storyPreferences** 
>
> Story preference settings.
*** 
> *Read Only* 
> 
> AnchoredObjectDefault **anchoredObjectDefaults** 
>
> Anchored object default settings.
*** 
> *Read Only* 
> 
> AnchoredObjectSetting **anchoredObjectSettings** 
>
> Anchored object settings.
*** 
> *Read Only* 
> 
> BaselineFrameGridOption **baselineFrameGridOptions** 
>
> Baseline frame grid option settings.
*** 
> *Read Only* 
> 
> FootnoteOption **footnoteOptions** 
>
> Footnote option settings.
*** 
> *Read Only* 
> 
> ParagraphStyle **allParagraphStyles** 
>
> Lists all paragraph styles (regardless of their group).
*** 
> *Read Only* 
> 
> CharacterStyle **allCharacterStyles** 
>
> Lists all character styles (regardless of their group).
*** 
> *Read Only* 
> 
> TextWrapPreference **textWrapPreferences** 
>
> The text wrap preference properties that define the default formatting for wrapping text around objects.
*** 
> *Read Only* 
> 
> TableStyle **allTableStyles** 
>
> All Table styles
*** 
> *Read Only* 
> 
> CellStyle **allCellStyles** 
>
> All Cell styles
*** 
> *Read Only* 
> 
> DocumentPreference **documentPreferences** 
>
> Document preference settings.
*** 
> *Read Only* 
> 
> GridPreference **gridPreferences** 
>
> Grid preference settings.
*** 
> *Read Only* 
> 
> GuidePreference **guidePreferences** 
>
> Guide preference settings.
*** 
> *Read Only* 
> 
> MarginPreference **marginPreferences** 
>
> Margin preference settings.
*** 
> *Read Only* 
> 
> PasteboardPreference **pasteboardPreferences** 
>
> Pasteboard preference settings.
*** 
> *Read Only* 
> 
> ViewPreference **viewPreferences** 
>
> View preference settings.
*** 
> *Read Only* 
> 
> LinkedStoryOption **linkedStoryOptions** 
>
> Linked story options
*** 
> *Read Only* 
> 
> LinkedPageItemOption **linkedPageItemOptions** 
>
> Linked Page Item options
*** 
> *Read Only* 
> 
> PrintPreference **printPreferences** 
>
> Print preference settings.
*** 
> *Read Only* 
> 
> PrintBookletOption **printBookletOptions** 
>
> Booklet printing options.
*** 
> *Read Only* 
> 
> PrintBookletPrintPreference **printBookletPrintPreferences** 
>
> Print booklet preferences.
*** 
> *Read Only* 
> 
> TaggedPDFPreference **taggedPDFPreferences** 
>
> Tagged PDF preferences.
*** 
> *Read Only* 
> 
> PlaceGun **placeGuns** 
>
> The place gun.
*** 
> *Read Only* 
> 
> MetadataPreference **metadataPreferences** 
>
> Metadata preference settings.
*** 
> *Read Only* 
> 
> IndexOptions **indexGenerationOptions** 
>
> The index options properties that define how an index is formatted.
*** 
> *Read Only* 
> 
> PageItem **allPageItems** 
>
> Lists all page items contained by the Document.
*** 
> *Read Only* 
> 
> Graphic **allGraphics** 
>
> Lists all graphics contained by the Document.
*** 
> *Read Only* 
> 
> ObjectStyle **allObjectStyles** 
>
> All object styles contained by the Document.
*** 
> *Read Only* 
> 
> PageItemDefault **pageItemDefaults** 
>
> The default page item formatting for the Document.
*** 
> *Read Only* 
> 
> FrameFittingOption **frameFittingOptions** 
>
> The frame fitting option to apply to placed or pasted content. Can be applied to a frame, object style, or document or to the application.
*** 
> *Read Only* 
> 
> ButtonPreference **buttonPreferences** 
>
> Button preference settings.
*** 
> *Read Only* 
> 
> File **fullName** 
>
> The full path to the Document, including the name of the Document.
*** 
> *Read Only* 
> 
> Boolean **visible** 
>
> If true, the Document is visible.
*** 
> *Read Only* 
> 
> File **filePath** 
>
> The full path to the file.
*** 
> *Read Only* 
> 
> Boolean **modified** 
>
> If true, the Document has been modified since it was last saved.
*** 
> *Read Only* 
> 
> Boolean **saved** 
>
> If true, the Document has been saved since it was created.
*** 
> *Read Only* 
> 
> Boolean **isCloudDocument** 
>
> If true, the document is a cloud document.
*** 
> *Read Only* 
> 
> String **cloudPath** 
>
> The cloud path in case of a cloud document. Otherwise it throws error.
*** 
> *Read Only* 
> 
> Swatch **unusedSwatches** 
>
> The swatches that are not being used.
*** 
> *Read Only* 
> 
> WatermarkPreference **watermarkPreferences** 
>
> Watermark preferences
*** 
> *Read Only* 
> 
> Boolean **converted** 
>
> If true, the Document was converted.
*** 
> *Read Only* 
> 
> Boolean **recovered** 
>
> If true, the Document was recovered.
*** 
> *Read Only* 
> 
> Boolean **readOnly** 
>
> If true, the Document is read-only.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Document.
*** 
> *Read Only* 
> 
> ConditionalTextPreference **conditionalTextPreferences** 
>
> Conditional text preferences.
*** 
> *Read Only* 
> 
> String **cmykProfileList** 
>
> A list of valid CMYK profiles.
*** 
> *Read Only* 
> 
> String **rgbProfileList** 
>
> A list of valid RGB profiles.
*** 
> *Read Only* 
> 
> LayoutGridDataInformation **layoutGridData** 
>
> Default properties specific to layout grids.
*** 
> *Read Only* 
> 
> StoryGridDataInformation **storyGridData** 
>
> Default properties specific to frame grids.
*** 
> *Read Only* 
> 
> CjkGridPreference **cjkGridPreferences** 
>
> CJK grid preference settings.
*** 
> *Read Only* 
> 
> MojikumiUiPreference **mojikumiUIPreferences** 
>
> Mojikumi user interface preference settings.
*** 
> *Read Only* 
> 
> ChapterNumberPreference **chapterNumberPreferences** 
>
> Chapter numbering preferences.
*** 
> *Read Only* 
> 
> Object **selectedPageItems** 
>
> The selected page item(s). Can also accept: Object or NothingEnum enumerator.
*** 
> *Read Only* 
> 
> String **undoName** 
>
> The name of the action on the top of the undo stack.
*** 
> *Read Only* 
> 
> String **redoName** 
>
> The name of the action on the top of the redo stack.
*** 
> *Read Only* 
> 
> String **undoHistory** 
>
> The names of the items in the undo stack.
*** 
> *Read Only* 
> 
> String **redoHistory** 
>
> The names of the items in the redo stack.
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
> The parent of the Document (a Application).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Document within its containing object.
*** 
> *Read Only* 
> 
> Preferences **preferences** 
>
> A collection of preferences objects.
*** 
> *Read Only* 
> 
> PreflightProfiles **preflightProfiles** 
>
> A collection of preflight profiles.
*** 
> *Read Only* 
> 
> DataMergeTextPlaceholders **dataMergeTextPlaceholders** 
>
> A collection of data merge text placeholders.
*** 
> *Read Only* 
> 
> DataMergeImagePlaceholders **dataMergeImagePlaceholders** 
>
> A collection of data merge image placeholders.
*** 
> *Read Only* 
> 
> DataMergeQrcodePlaceholders **dataMergeQrcodePlaceholders** 
>
> A collection of data merge QR code placeholders.
*** 
> *Read Only* 
> 
> XMLElements **xmlElements** 
>
> A collection of XML elements.
*** 
> *Read Only* 
> 
> XMLItems **xmlItems** 
>
> A collection of XML items.
*** 
> *Read Only* 
> 
> XMLComments **xmlComments** 
>
> A collection of XML comments.
*** 
> *Read Only* 
> 
> XMLInstructions **xmlInstructions** 
>
> A collection of XML instructions.
*** 
> *Read Only* 
> 
> DTDs **dtds** 
>
> A collection of DTDs.
*** 
> *Read Only* 
> 
> XMLExportMaps **xmlExportMaps** 
>
> A collection of XML export maps.
*** 
> *Read Only* 
> 
> XMLImportMaps **xmlImportMaps** 
>
> A collection of XML import maps.
*** 
> *Read Only* 
> 
> XmlStories **xmlStories** 
>
> A collection of xml stories.
*** 
> *Read Only* 
> 
> Stories **stories** 
>
> A collection of stories.
*** 
> *Read Only* 
> 
> XMLTags **xmlTags** 
>
> A collection of XML tags.
*** 
> *Read Only* 
> 
> ValidationErrors **validationErrors** 
>
> A collection of XML validation errors.
*** 
> *Read Only* 
> 
> TOCStyles **tocStyles** 
>
> A collection of TOC styles.
*** 
> *Read Only* 
> 
> HyphenationExceptions **hyphenationExceptions** 
>
> A collection of hyphenation exceptions lists.
*** 
> *Read Only* 
> 
> ParagraphStyleGroups **paragraphStyleGroups** 
>
> A collection of paragraph style groups.
*** 
> *Read Only* 
> 
> CharacterStyleGroups **characterStyleGroups** 
>
> A collection of character style groups.
*** 
> *Read Only* 
> 
> CharacterStyles **characterStyles** 
>
> A collection of character styles.
*** 
> *Read Only* 
> 
> ParagraphStyles **paragraphStyles** 
>
> A collection of paragraph styles.
*** 
> *Read Only* 
> 
> TextVariables **textVariables** 
>
> A collection of text variables.
*** 
> *Read Only* 
> 
> TableStyles **tableStyles** 
>
> A collection of table styles.
*** 
> *Read Only* 
> 
> TableStyleGroups **tableStyleGroups** 
>
> A collection of table style groups.
*** 
> *Read Only* 
> 
> CellStyles **cellStyles** 
>
> A collection of cell styles.
*** 
> *Read Only* 
> 
> CellStyleGroups **cellStyleGroups** 
>
> A collection of cell style groups.
*** 
> *Read Only* 
> 
> StrokeStyles **strokeStyles** 
>
> A collection of stroke styles.
*** 
> *Read Only* 
> 
> DashedStrokeStyles **dashedStrokeStyles** 
>
> A collection of dashed stroke styles.
*** 
> *Read Only* 
> 
> DottedStrokeStyles **dottedStrokeStyles** 
>
> A collection of dotted stroke styles.
*** 
> *Read Only* 
> 
> StripedStrokeStyles **stripedStrokeStyles** 
>
> A collection of striped stroke styles.
*** 
> *Read Only* 
> 
> Pages **pages** 
>
> A collection of pages.
*** 
> *Read Only* 
> 
> Spreads **spreads** 
>
> A collection of spreads.
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
> ParaStyleMappings **paraStyleMappings** 
>
> A collection of para style mappings.
*** 
> *Read Only* 
> 
> CharStyleMappings **charStyleMappings** 
>
> A collection of char style mappings.
*** 
> *Read Only* 
> 
> TableStyleMappings **tableStyleMappings** 
>
> A collection of table style mappings.
*** 
> *Read Only* 
> 
> CellStyleMappings **cellStyleMappings** 
>
> A collection of cell style mappings.
*** 
> *Read Only* 
> 
> Sections **sections** 
>
> A collection of sections.
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
> Inks **inks** 
>
> A collection of inks.
*** 
> *Read Only* 
> 
> TrapPresets **trapPresets** 
>
> A collection of trap presets.
*** 
> *Read Only* 
> 
> PDFComments **pdfComments** 
>
> A collection of PDF comment objects
*** 
> *Read Only* 
> 
> MasterSpreads **masterSpreads** 
>
> A collection of master spreads.
*** 
> *Read Only* 
> 
> Links **links** 
>
> A collection of links.
*** 
> *Read Only* 
> 
> Languages **languages** 
>
> A collection of languages.
*** 
> *Read Only* 
> 
> Layers **layers** 
>
> A collection of layers.
*** 
> *Read Only* 
> 
> Indexes **indexes** 
>
> A collection of indexes.
*** 
> *Read Only* 
> 
> IndexingSortOptions **indexingSortOptions** 
>
> A collection of indexing sort options.
*** 
> *Read Only* 
> 
> Hyperlinks **hyperlinks** 
>
> A collection of hyperlinks.
*** 
> *Read Only* 
> 
> Bookmarks **bookmarks** 
>
> A collection of bookmarks.
*** 
> *Read Only* 
> 
> HyperlinkPageItemSources **hyperlinkPageItemSources** 
>
> A collection of hyperlink page item sources.
*** 
> *Read Only* 
> 
> HyperlinkTextSources **hyperlinkTextSources** 
>
> A collection of hyperlink text sources.
*** 
> *Read Only* 
> 
> HyperlinkTextDestinations **hyperlinkTextDestinations** 
>
> A collection of hyperlink text destinations.
*** 
> *Read Only* 
> 
> HyperlinkPageDestinations **hyperlinkPageDestinations** 
>
> A collection of hyperlink page destinations.
*** 
> *Read Only* 
> 
> CrossReferenceFormats **crossReferenceFormats** 
>
> A collection of cross reference formats.
*** 
> *Read Only* 
> 
> CrossReferenceSources **crossReferenceSources** 
>
> A collection of cross reference text sources.
*** 
> *Read Only* 
> 
> ParagraphDestinations **paragraphDestinations** 
>
> A collection of paragraph destinations.
*** 
> *Read Only* 
> 
> HyperlinkExternalPageDestinations **hyperlinkExternalPageDestinations** 
>
> A collection of hyperlink external page destinations.
*** 
> *Read Only* 
> 
> HyperlinkURLDestinations **hyperlinkURLDestinations** 
>
> A collection of hyperlink URL destinations.
*** 
> *Read Only* 
> 
> Guides **guides** 
>
> A collection of guides.
*** 
> *Read Only* 
> 
> ObjectStyleGroups **objectStyleGroups** 
>
> A collection of object style groups.
*** 
> *Read Only* 
> 
> ObjectStyles **objectStyles** 
>
> A collection of object styles.
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
> Fonts **fonts** 
>
> A collection of fonts.
*** 
> *Read Only* 
> 
> MotionPresets **motionPresets** 
>
> A collection of Motion presets.
*** 
> *Read Only* 
> 
> Swatches **swatches** 
>
> A collection of swatches.
*** 
> *Read Only* 
> 
> Colors **colors** 
>
> A collection of colors.
*** 
> *Read Only* 
> 
> Tints **tints** 
>
> A collection of tints.
*** 
> *Read Only* 
> 
> Gradients **gradients** 
>
> A collection of gradients.
*** 
> *Read Only* 
> 
> MixedInks **mixedInks** 
>
> A collection of mixed inks.
*** 
> *Read Only* 
> 
> MixedInkGroups **mixedInkGroups** 
>
> A collection of mixed ink groups.
*** 
> *Read Only* 
> 
> ColorGroups **colorGroups** 
>
> A collection of color groups.
*** 
> *Read Only* 
> 
> Conditions **conditions** 
>
> A collection of conditions for conditional text.
*** 
> *Read Only* 
> 
> ConditionSets **conditionSets** 
>
> A collection of condition sets for conditional text.
*** 
> *Read Only* 
> 
> CompositeFonts **compositeFonts** 
>
> A collection of composite fonts.
*** 
> *Read Only* 
> 
> NamedGrids **namedGrids** 
>
> A collection of named grids.
*** 
> *Read Only* 
> 
> KinsokuTables **kinsokuTables** 
>
> A collection of kinsoku tables.
*** 
> *Read Only* 
> 
> MojikumiTables **mojikumiTables** 
>
> A collection of mojikumi tables.
*** 
> *Read Only* 
> 
> NumberingLists **numberingLists** 
>
> A collection of numbered lists.
*** 
> *Read Only* 
> 
> Assignments **assignments** 
>
> A collection of assignments.
*** 
> *Read Only* 
> 
> Articles **articles** 
>
> A collection of articles.
*** 
> *Read Only* 
> 
> Windows **windows** 
>
> A collection of windows.
*** 
> *Read Only* 
> 
> LayoutWindows **layoutWindows** 
>
> A collection of layout windows.
*** 
> *Read Only* 
> 
> StoryWindows **storyWindows** 
>
> A collection of story windows.
*** 
> String **name** 
>
> The name of the Document.
*** 
> Measurement Unit (Number or String)=any **zeroPoint** 
>
> The ruler origin, specified as page coordinates in the format [x, y].
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Layer **activeLayer** 
>
> The active layer. Can also accept: String.
*** 
> String **cmykProfile** 
>
> The current CMYK profile.
*** 
> String **rgbProfile** 
>
> The current RGB profile.
*** 
> RenderingIntent **solidColorIntent** 
>
> The rendering intent for all vector art (areas of solid color) in native objects.
*** 
> RenderingIntent **afterBlendingIntent** 
>
> The rendering intent for colors that result from transparency interactions on the page after blending.
*** 
> RenderingIntent **defaultImageIntent** 
>
> The rendering intent for bitmap images.
*** 
> ColorSettingsPolicy **rgbPolicy** 
>
> The policy for handling colors in an RGB color model, including reading and embedding color profiles, handling mismatches between embedded color profiles and the working space, and moving colors from one document to another.
*** 
> ColorSettingsPolicy **cmykPolicy** 
>
> The policy for handling colors in a CMYK color model, including reading and embedding color profiles, mismatches between embedded color profiles and the working space, and moving colors from one document to another.
*** 
> Boolean **accurateLABSpots** 
>
> If true, uses LAB alternates for spot colors when available.
*** 
> Object **selection** 
>
> The selected object(s). Can also accept: Object or NothingEnum enumerator.
*** 
> PageItem **selectionKeyObject** 
>
> The key object of the selection. Can also accept: NothingEnum enumerator.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> Font **createMissingFontObject**( String **fontFamily**, String **fontStyleName**, String **postscriptName** )
> 
> Create a missing font object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | fontFamily | The name of the font family |
| String | fontStyleName | The name of the font style. |
| String | postscriptName | The PostScript name of the font. |

*** 
> Mixed **getStyleConflictResolutionStrategy**( StyleType **charOrParaStyle** )
> 
> Get the resolution strategy for style conflict, false if the user cancels
#### Parameters
| Type | Name | Description |
|---|---|---|
| StyleType | charOrParaStyle | Style type to look at. (Optional) |

*** 
> Boolean **exportForCloudLibrary**( String **jsondata** )
> 
> Exports as assets required for cloud library.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | jsondata | JSON encoded information about the export. |

*** 
> TextDirection **getSelectedTextDirection**()
> 
> Selected text direction
*** 
> Boolean **packageForPrint**( File **to**, Boolean **copyingFonts**, Boolean **copyingLinkedGraphics**, Boolean **copyingProfiles**, Boolean **updatingGraphics**, Boolean **includingHiddenLayers**, Boolean **ignorePreflightErrors**, Boolean **creatingReport**, Boolean **includeIdml**, Boolean **includePdf**, String **pdfStyle**, Boolean **useDocumentHyphenationExceptionsOnly**, String **versionComments**, Boolean **forceSave** )
> 
> Packages the document.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The folder, alias, or path in which to place the packaged files. |
| Boolean | copyingFonts | If true, copies fonts used in the document to the package folder. |
| Boolean | copyingLinkedGraphics | If true, copies linked graphics files to the package folder. |
| Boolean | copyingProfiles | If true, copies color profiles to the package folder. |
| Boolean | updatingGraphics | If true, updates graphics links to the package folder. |
| Boolean | includingHiddenLayers | If true, copies fonts and links from hidden layers to the package. |
| Boolean | ignorePreflightErrors | If true, ignores preflight errors and proceeds with the packaging. If false, cancels the packaging when errors exist. |
| Boolean | creatingReport | If true, creates a package report that includes printing instructions, print settings, lists of fonts, links and required inks, and other information. |
| Boolean | includeIdml | If true, generates and includes IDML in the package folder. (Optional) |
| Boolean | includePdf | If true, generates and includes PDF in the package folder. (Optional) |
| String | pdfStyle | If specified and PDF is to be included, use this style for PDF export if it is valid, otherwise use the last used PDF preset. (Optional) |
| Boolean | useDocumentHyphenationExceptionsOnly | If this option is selected, InDesign flags this document so that it does not reflow when someone else opens or edits it on a computer that has different hyphenation and dictionary settings. (Optional) |
| String | versionComments | The comments for the version. (Optional) |
| Boolean | forceSave | If true, forcibly saves a version. (Optional) |

*** 
> PreflightProfile **embed**( Mixed **using** )
> 
> Embed this profile to the document.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | using | The preflight profile to embed. Can accept: String or PreflightProfile. |

*** 
> **adjustLayout**( Object **adoptTo**, Page **affectedPages** )
> 
> Adjust the existing layout according to new page size, bleed and margin values. The first parameter is a plain object with key value pairs for properties affected. Permissible keys are width, height, bleedInside, bleedTop, bleedOutside, bleedBottom, leftMargin, topMargin, rightMargin, bottomMargin. The values can be specified as decimal numbers in units of Pt or as a string having a measurement value such as '1 in'. Not all properties need to be specified, only the values that need updation. Notice that when dealing with individual pages rather than the whole document, bleed changes has no effect. E.g. - app.activeDocument.adjustLayout({width:'600px', leftMargin: '1in'}), app.activeDocument.adjustLayout({rightMargin:'1in'}, app.activeDocument.spreads[0].pages), app.activeDocument.spreads[0].pages[0].adjustLayout({width:'400px', leftMargin: '10px'})
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | adoptTo | Change values - see functin definition for details |
| Page | affectedPages | The collection of Page objects to affect (optional). Has no effect if function is called from Page (Optional) |

*** 
> Mixed **getAlternateLayoutsForFolio**( Boolean **resolveMaster** )
> 
> This will return an array of structs containing information about the alternate layouts.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | resolveMaster | Resolves layout policy if setting is "use master" - default is true. (Optional) |

*** 
> **mapStylesToXMLTags**()
> 
> Auto tag the document based on the style to tag mappings
*** 
> **mapXMLTagsToStyles**()
> 
> Auto style the document based on the tag to style mappings
*** 
> **importDtd**( File **from** )
> 
> Imports a DTD to use for validation.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | from | The path to the DTD file. |

*** 
> **importXML**( File **from** )
> 
> Imports the specified XML file into an InDesign document.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | from | The XML file. |

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
> **changeComposer**()
> 
> Change comoser to optyca
*** 
> **revertToProject**( Boolean **forceRevert** )
> 
> Reverts to the version of the document in Version Cue.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | forceRevert | Forcibly reverts to the project version. (Optional) |

*** 
> VersionCueSyncStatus **synchronizeWithVersionCue**( SyncConflictResolution **syncConflictResolution**, String **versionComments** )
> 
> Synchronizes the file with the Version Cue project.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SyncConflictResolution | syncConflictResolution | The conflict resolution method to use during synchronization. (Optional) |
| String | versionComments | The comments that describe the version. (Optional) |

*** 
> **checkIn**( String **versionComments**, Boolean **forceSave** )
> 
> Check in to Version Cue.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | versionComments | The comment for this version (Optional) |
| Boolean | forceSave | Forcibly save a version (Optional) |

*** 
> Story **createTOC**( TOCStyle **using**, Boolean **replacing**, Book **fromBook**, Measurement Unit (Number or String)=any **placePoint**, Boolean **includeOverset**, Layer **destinationLayer** )
> 
> Creates a table of contents.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TOCStyle | using | The TOC style to use to define the content, title, and format of the table of contents. |
| Boolean | replacing | If true, replaces the existing TOC. (Optional) |
| Book | fromBook | The book whose documents to include in the TOC. (Optional) |
| Measurement Unit (Number or String)=any | placePoint | The point at which to place the TOC story, specified as page coordinates in the format [x, y]. (Optional) |
| Boolean | includeOverset | If true, includes overset text TOC entries in the TOC. (Optional) |
| Layer | destinationLayer | The layer on which to place the TOC. (Optional) |

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
> **recompose**()
> 
> Recomposes the text in the Document.
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
> **placeAndLink**( Story **parentStory**, Boolean **showingOptions** )
> 
> Deprecated: Use ContentPlacerObject load method. Original Description: Place following the behavior of the place and link story menu item. This will load the place gun.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Story | parentStory | The story to place and link from. |
| Boolean | showingOptions | Whether to display the link options dialog (Optional) |

*** 
> **print**( Boolean **printDialog**, Mixed **using** )
> 
> Prints the Document(s).
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | printDialog | Whether to invoke the print dialog (Optional) |
| Mixed | using | Printer preset to use. Can accept: PrinterPresetTypes enumerator or PrinterPreset. (Optional) |

*** 
> **printBooklet**( Boolean **printBookletDialog**, Mixed **using** )
> 
> Print the Booklet using current document and Booklet and Print settings in the document
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | printBookletDialog | Whether to invoke the print booklet dialog (Optional) |
| Mixed | using | Printer preset to use. Can accept: PrinterPresetTypes enumerator or PrinterPreset. (Optional) |

*** 
> **importPdfComments**( File **from**, Object **withProperties** )
> 
> Import Commemnts from PDF
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | from | The PDF File from which you want to import comments. |
| Object | withProperties | Initial values for properties of the new Document (Optional) |

*** 
> **placeCloudAsset**( String **jsondata** )
> 
> place a cloud asset on the document
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | jsondata | JSON data containing metadata about the cloud asset |

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
> **loadMasters**( File **from**, GlobalClashResolutionStrategyForMasterPage **globalStrategyForMasterPage** )
> 
> Load masterpages from an InDesign file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | from | The InDesign file to load the masters from. |
| GlobalClashResolutionStrategyForMasterPage | globalStrategyForMasterPage | the global clash resolution strategy for load master page (Optional) |

*** 
> **createAlternateLayout**( Spread **spreadItems**, String **name**, Measurement Unit (Number or String)=any **width**, Measurement Unit (Number or String)=any **height**, Boolean **createTextStyles**, Boolean **linkTextStories**, LayoutRuleOptions **layoutRule** )
> 
> Creates an alternate layout for a given list of spreads.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Spread | spreadItems | The spreads to create an alternate layout for. |
| String | name | The name of the alternate layout. Note: This is used for the named layout for the new section for the duplicated spreads. |
| Measurement Unit (Number or String)=any | width | The width of the pages created. |
| Measurement Unit (Number or String)=any | height | The height of the pages created. |
| Boolean | createTextStyles | Whether to create new text styles. |
| Boolean | linkTextStories | Whether to create linked text for duplicated text stories. |
| LayoutRuleOptions | layoutRule | What layout rule to set on the pages. |

*** 
> **deleteAlternateLayout**( String **name** )
> 
> Deletes an alternate layout.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the alternate layout to delete. |

*** 
> **importFormats**( File **from** )
> 
> Imports the cross reference formats from specified file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | from | The file whose formats to import. |

*** 
> **updateCrossReferences**()
> 
> Updates cross references' text source content in the document.
*** 
> **align**( PageItem **alignDistributeItems**, AlignOptions **alignOption**, AlignDistributeBounds **alignDistributeBounds**, PageItem **reference** )
> 
> Align page items.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | alignDistributeItems | The page items to align or distribute. |
| AlignOptions | alignOption | The type of alignment to apply. |
| AlignDistributeBounds | alignDistributeBounds | The bounds within which to align or distribute the page items. (Optional) |
| PageItem | reference | The reference or key object to align to distribute relative to. Required when 'align distribute bounds' specifies 'key object'. (Optional) |

*** 
> **distribute**( PageItem **alignDistributeItems**, DistributeOptions **distributeOption**, AlignDistributeBounds **alignDistributeBounds**, Boolean **useDistributeMeasurement**, Measurement Unit (Number or String)=any **absoluteDistributeMeasurement**, PageItem **reference** )
> 
> Distribute page items.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | alignDistributeItems | The page items to align or distribute |
| DistributeOptions | distributeOption | The type of distribution to apply. |
| AlignDistributeBounds | alignDistributeBounds | The bounds within which to align or distribute the page items. (Optional) |
| Boolean | useDistributeMeasurement | If true, distribute space between page items. When this property is true, the bounds setting is ignored. (Optional) |
| Measurement Unit (Number or String)=any | absoluteDistributeMeasurement | The distance to use when distributing page items. Required when 'align distribute bounds' specifies 'key object'. (Optional) |
| PageItem | reference | The reference or key object to align to distribute relative to. Required when 'align distribute bounds' specifies 'key object'. (Optional) |

*** 
> **clearFrameFittingOptions**()
> 
> Removes the frame fittings options and resets it to the initial state.
*** 
> **resetAllMultiStateObjects**()
> 
> Resets all the multi-state objects to their first state.
*** 
> **resetAllButtons**()
> 
> Resets all the buttons to their Normal state.
*** 
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
> 
> Create Plain Text QR Code on the page item
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | plainText | QR code Plain Text  (Optional) |
| Mixed | qrCodeSwatch | Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial values for properties of the new Document. Above parameters can also be passed as properties (Optional) |

*** 
> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
> 
> Create Hyperlink QR Code on the page item or document
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | urlLink | QR code Hyperlink URL  (Optional) |
| Mixed | qrCodeSwatch | Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial values for properties of the new Document. Above parameters can also be passed as properties (Optional) |

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
| String | withProperties | Initial values for properties of the new Document. Above parameters can also be passed as properties (Optional) |

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
| String | withProperties | Initial values for properties of the new Document. Above parameters can also be passed as properties (Optional) |

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
| String | withProperties | Initial values for properties of the new Document. Above parameters can also be passed as properties (Optional) |

*** 
> **close**( SaveOptions **saving**, File **savingIn**, String **versionComments**, Boolean **forceSave** )
> 
> Close the Document
#### Parameters
| Type | Name | Description |
|---|---|---|
| SaveOptions | saving | Whether to save changes before closing the Document (Optional) |
| File | savingIn | The file in which to save the Document (Optional) |
| String | versionComments | The comment for this version (Optional) |
| Boolean | forceSave | Forcibly save a version (Optional) |

*** 
> Document **save**( File **to**, Boolean **stationery**, String **versionComments**, Boolean **forceSave** )
> 
> Save the document
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | Where to save the document. If the document is already saved, a copy is saved at this path, the original file is closed the new copy is opened (Optional) |
| Boolean | stationery | Whether to save the file as stationery (Optional) |
| String | versionComments | The comment for this version (Optional) |
| Boolean | forceSave | Forcibly save a version (Optional) |

*** 
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

*** 
> **exportPageItemsSelectionToSnippet**( File **to** )
> 
> Exports selected page items to snippet on the destination file path.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The path to the export file. |

*** 
> **exportPageItemsToSnippet**( File **to**, Number **pageItemIds** )
> 
> Exports input page item ids to snippet on the destination file path.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The path to the export file. |
| Number | pageItemIds | The array of the page item ids. |

*** 
> Document **saveAsCloud**( String **cloudPath** )
> 
> Save as a cloud document
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | cloudPath | The cloud path in case of a cloud document |

*** 
> Document **saveACopyCloud**( String **cloudPath** )
> 
> Save a copy as cloud document
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | cloudPath | The cloud path in case of a cloud document |

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
> Boolean **revert**()
> 
> Reverts the document to its state at the last save operation.
*** 
> **saveACopy**( File **to**, Boolean **stationery** )
> 
> Saves a copy of the document.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The file path for the copy. Note: Leaves the original document open and does not open the copy. (Optional) |
| Boolean | stationery | If true, saves the file as stationery (Mac OS) or as a template (Windows). Note: The file extension for stationery and templates is different than the extension for regular files. (Optional) |

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
| SelectionOptions | existingSelection | The selection status of the Document in relation to previously selected objects. (Optional) |

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
> **undo**()
> 
> Undoes the last action.
*** 
> **redo**()
> 
> Redoes the last action.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Document.
*** 
> Document **getElements**()
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


