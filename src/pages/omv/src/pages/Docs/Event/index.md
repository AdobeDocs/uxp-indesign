# Event
An event.

## Class
> *Read Only* 
> 
> String **BEFORE_PLACE** = beforePlace
> 
> Dispatched before a Event is placed. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_PLACE** = afterPlace
> 
> Dispatched after a Event is placed. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_LINKS_CHANGED** = afterLinksChanged
> 
> Dispatched after one or more links in the Event have been added, deleted, or modified. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_NEW** = afterNew
> 
> Dispatched after a Event is created. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_DELETE** = beforeDelete
> 
> Dispatched before a Event is deleted. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_DELETE** = afterDelete
> 
> Dispatched after a Event is deleted. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_UPDATE** = beforeUpdate
> 
> Dispatched before a Event is updated. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_UPDATE** = afterUpdate
> 
> Dispatched after a Event is updated. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_EMBED** = beforeEmbed
> 
> Dispatched before a Event is embedded. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_EMBED** = afterEmbed
> 
> Dispatched after a Event is embedded. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_UNEMBED** = beforeUnembed
> 
> Dispatched before a Event is unembedded. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_UNEMBED** = afterUnembed
> 
> Dispatched after a Event is unembedded. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_MOVE** = beforeMove
> 
> Dispatched before a Event is relocated from one object to another. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_MOVE** = afterMove
> 
> Dispatched after a Event is relocated from one object to another. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **ON_INVOKE** = onInvoke
> 
> Dispatched when the Event is invoked. This event does not bubble. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_INVOKE** = beforeInvoke
> 
> Dispatched before the Event is invoked. This event does not bubble. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_INVOKE** = afterInvoke
> 
> Dispatched after the Event is invoked. This event does not bubble. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_DISPLAY** = beforeDisplay
> 
> Dispatched before the Event is displayed. This event does not bubble. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_QUIT** = beforeQuit
> 
> Dispatched before the Event is quit. Allows the quit to be canceled. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_QUIT** = afterQuit
> 
> Dispatched when the Event is quitting. Since the quit has been committed, it can not be canceled. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_CONTEXT_CHANGED** = afterContextChanged
> 
> Dispatched after the active context changes. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_SELECTION_CHANGED** = afterSelectionChanged
> 
> Dispatched after the active selection changes. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_SELECTION_ATTRIBUTE_CHANGED** = afterSelectionAttributeChanged
> 
> Dispatched after an attribute on the active selection changes. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_DEACTIVATE** = beforeDeactivate
> 
> Dispatched before the Event becomes inactive. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_ACTIVATE** = afterActivate
> 
> Dispatched after the Event becomes active. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_OPEN** = afterOpen
> 
> Dispatched after a Event is opened. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_CLOSE** = beforeClose
> 
> Dispatched before a Event is closed. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_CLOSE** = afterClose
> 
> Dispatched when a Event is closing. Since the close has been committed, it can no longer be canceled. This event bubbles. This event is not cancelable.

## Instance
> *Read Only* 
> 
> String **eventType** 
>
> The name of the event.
*** 
> *Read Only* 
> 
> Object **target** 
>
> The target of the event.
*** 
> *Read Only* 
> 
> Object **currentTarget** 
>
> The current propagation target of the event.
*** 
> *Read Only* 
> 
> EventPhases **eventPhase** 
>
> The current propagation phase of the event.
*** 
> *Read Only* 
> 
> Boolean **bubbles** 
>
> If true, the event supports the bubbling phase of propagation.
*** 
> *Read Only* 
> 
> Boolean **cancelable** 
>
> If true, the default behavior of the event on its target can be canceled.
*** 
> *Read Only* 
> 
> Date **timeStamp** 
>
> The time the event was initialized.
*** 
> *Read Only* 
> 
> Boolean **propagationStopped** 
>
> If true, propagation of the event beyond the current target has been stopped.
*** 
> *Read Only* 
> 
> Boolean **defaultPrevented** 
>
> If true, the default behavior of the event on its target has been canceled.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Event.
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
> The parent of the Event (a Object, UIDBasedObject, CellStyleGroup, CellStyle, TableStyleGroup, Article, ConditionSet, HiddenText, Condition, MotionPreset, AssignedStory, Assignment, ObjectStyleGroup, ObjectStyle, NumberingList, Snippet, Dialog, ColorGroup, Swatch, Color, Tint, Gradient, MixedInkGroup, MixedInk, Behavior, SubmitFormBehavior, PrintFormBehavior, ClearFormBehavior, GotoPageBehavior, GotoAnchorBehavior, SoundBehavior, ViewZoomBehavior, GotoStateBehavior, GotoPreviousStateBehavior, GotoNextStateBehavior, OpenFileBehavior, AnimationBehavior, ShowHideFieldsBehavior, MovieBehavior, GotoURLBehavior, GotoPreviousViewBehavior, GotoNextViewBehavior, GotoPreviousPageBehavior, GotoNextPageBehavior, GotoLastPageBehavior, GotoFirstPageBehavior, PreflightProfileRule, PreflightRuleInstance, PreflightProfile, CrossReferenceFormat, HyperlinkURLDestination, HyperlinkExternalPageDestination, HyperlinkPageDestination, HyperlinkTextDestination, ParagraphDestination, HyperlinkTextSource, CrossReferenceSource, HyperlinkPageItemSource, Bookmark, Hyperlink, IndexSection, PageReference, CrossReference, Index, TOCStyle, FlattenerPreset, BookContent, MenuAction, ScriptMenuAction, NamedGrid, CompositeFontEntry, CompositeFont, CharacterStyleGroup, ParagraphStyleGroup, TextVariableInstance, Footnote, XMLRuleProcessor, XMLTag, Note, TableStyle, TextPath, Asset, Link, Section, MojikumiTable, KinsokuTable, Guide, LanguageWithVendors, Language, PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, EndnoteRange, Endnote, Reply, PDFComment, MasterSpread, TrapPreset, Ink, DocumentPreset, Page, Spread, Layer, CharacterStyle, ParagraphStyle, Story, XmlStory, IDBasedObject, ArticleChild, ArticleMember, DialogRow, DialogColumn, Widget, BorderPanel, MeasurementEditbox, MeasurementCombobox, RealCombobox, AngleEditbox, PercentEditbox, RealEditbox, PercentCombobox, AngleCombobox, EnablingGroup, IntegerCombobox, IntegerEditbox, RadiobuttonControl, RadiobuttonGroup, CheckboxControl, Dropdown, StaticText, TextEditbox, ColorGroupSwatch, BackgroundTask, State, RuleDataObject, XMLItem, DTD, XMLInstruction, XMLComment, XMLElement, Table, Cell, IdleTask, StrokeStyle, StripedStrokeStyle, DottedStrokeStyle, DashedStrokeStyle, GraphicLayer, NonIDBasedObject, TableStyleMapping, CharStyleMapping, CellStyleMapping, ParaStyleMapping, TimingTarget, TimingGroup, TimingList, OpacityGradientStop, ObjectStyleExportTagMap, DataMergeQrcodePlaceholder, DataMergeField, DataMergeImagePlaceholder, DataMergeTextPlaceholder, Panel, LibraryPanel, PagesPanel, Window, StoryWindow, LayoutWindow, NavigationPoint, PreflightProcess, PreflightRule, BuildingBlock, DisplaySetting, IndexingSortOption, Topic, TOCStyleEntry, MenuElement, MenuSeparator, MenuItem, Submenu, Menu, StyleExportTagMap, TextVariable, XMLRuleMatchData, ValidationError, XMLExportMap, XMLImportMap, XMLAttribute, PrinterPreset, Row, Column, Change, HttpLinkConnectionManagerObject, RootObject, Document, Application, Book, Library, Preference, ContentPlacerObject, LinkedPageItemOption, LinkedStoryOption, PublishExportPreference, HTMLFXLExportPreference, EPubExportPreviewAppPreference, EPubFixedLayoutExportPreference, HTMLExportPreference, EPubExportPreference, ConditionalTextPreference, TimingSetting, AnimationSetting, TransformAttributeOption, AlignDistributePreference, TypeContextualUiPreference, GrabberPreference, ObjectStyleContentEffectsCategorySettings, ObjectStyleFillEffectsCategorySettings, ObjectStyleStrokeEffectsCategorySettings, ObjectStyleObjectEffectsCategorySettings, ChapterNumberPreference, NumberingRestartPolicy, Bullet, DataMerge, DataMergeOption, DataMergePreference, JPEGExportPreference, TrackChangesPreference, NotePreference, TransformPreference, ClipboardPreference, GeneralPreference, WatermarkPreference, ButtonPreference, PNGExportPreference, PreflightBookOption, PreflightOption, XMLViewPreference, GpuPerformancePreference, DisplayPerformancePreference, IndexOptions, LinkMetadata, MetadataPreference, ExcelImportPreference, TaggedTextImportPreference, TaggedTextExportPreference, WordRTFImportPreference, TextExportPreference, TextImportPreference, FindChangeContentTransparencySetting, FindChangeFillTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeTransparencySetting, GradientFeatherSetting, FindChangeGradientFeatherSetting, DirectionalFeatherSetting, FindChangeDirectionalFeatherSetting, ContentTransparencySetting, SatinSetting, FindChangeSatinSetting, BevelAndEmbossSetting, FindChangeBevelAndEmbossSetting, InnerGlowSetting, FindChangeInnerGlowSetting, OuterGlowSetting, FindChangeOuterGlowSetting, InnerShadowSetting, FindChangeInnerShadowSetting, FeatherSetting, FindChangeFeatherSetting, DropShadowSetting, FindChangeDropShadowSetting, BlendingSetting, FindChangeBlendingSetting, FillTransparencySetting, StrokeTransparencySetting, TransparencySetting, TransparencyPreference, FlattenerPreference, GalleyPreference, GridPrintingPreference, CjkGridPreference, StoryGridDataInformation, LayoutGridDataInformation, GridDataInformation, CaptionMetadataVariablePreference, CustomTextVariablePreference, MatchParagraphStylePreference, MatchCharacterStylePreference, FileNameVariablePreference, DateVariablePreference, ChapterNumberVariablePreference, PageNumberVariablePreference, FootnoteOption, BaselineFrameGridOption, AnchoredObjectSetting, AnchoredObjectDefault, ExportForWebPreference, XMLPreference, XMLExportPreference, XMLImportPreference, InCopyExportOption, LinkingPreference, ChangeColorPreference, FindColorPreference, FindChangeColorOption, ChangeTransliteratePreference, ChangeObjectPreference, ChangeGlyphPreference, ChangeGrepPreference, ChangeTextPreference, FindTransliteratePreference, FindObjectPreference, FindGlyphPreference, FindGrepPreference, FindTextPreference, FindChangeTransliterateOption, FindChangeObjectOption, FindChangeGlyphOption, FindChangeGrepOption, FindChangeTextOption, ColorSetting, ScriptArg, ScriptPreference, PlaceGun, AdjustLayoutPreference, StrokeFillProxySetting, ImportedPageAttribute, EPSImportPreference, SmartGuidePreference, AutoCorrectPreference, SpellPreference, PolygonPreference, DictionaryPreference, FontLockingPreference, MojikumiUiPreference, ContourOption, TextWrapPreference, TextEditingPreference, FrameFittingOption, ObjectExportOption, PageItemDefault, FontSyncPreference, EndnoteOption, TaggedPDFPreference, InteractivePDFExportPreference, PDFAttribute, PDFPlacePreference, PDFExportPreference, IMEPreference, GraphicLayerOption, ClippingPathSettings, ImageIOPreference, ImagePreference, ToolBox, EPSExportPreference, PrintBookletPrintPreference, PrintBookletOption, PrintPreference, ViewPreference, PasteboardPreference, MarginPreference, GuidePreference, GridPreference, DocumentPreference, TextDefault, TextPreference, TextFramePreference, StoryPreference, PathPoint, Path, GradientStop, AutoCorrectTable, UserDictionary, HyphenationException, Font, TransformationMatrix, PDFExportPreset, NestedStyle, TabStop, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, NestedGrepStyle or NestedLineStyle).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Event within its containing object.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **stopPropagation**()
> 
> Stops propagation of the event beyond the current target.
*** 
> **preventDefault**()
> 
> Cancels the default behavior of the event on its target.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Event.
*** 
> Event **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
*** 
> String **toSpecifier**()
> 
> Retrieves the object specifier.

