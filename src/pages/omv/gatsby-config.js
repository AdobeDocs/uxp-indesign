/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
pathPrefix: process.env.PATH_PREFIX ||'/indesign/uxp/scripting/',
siteMetadata: {
pages: [
{
title: 'Main Placeholder Page',
path: '/'
},
{
title: 'InDesign UXP Documentation',
path: '/Docs/'
}
],
subPages: [
{
title: 'AcrobatCompatibility',
path: '/Docs/'
},
{
title: 'HyperlinkPageDestinations',
path: '/Docs/HyperlinkPageDestinations/'
},
{
title: 'SVG',
path: '/Docs/SVG/'
},
{
title: 'StoryWindow',
path: '/Docs/StoryWindow/'
},
{
title: 'TrapEndTypes',
path: '/Docs/TrapEndTypes/'
},
{
title: 'ComposeUsing',
path: '/Docs/ComposeUsing/'
},
{
title: 'GotoURLBehavior',
path: '/Docs/GotoURLBehavior/'
},
{
title: 'LayoutWindow',
path: '/Docs/LayoutWindow/'
},
{
title: 'CharacterStyleGroups',
path: '/Docs/CharacterStyleGroups/'
},
{
title: 'ImportedPages',
path: '/Docs/ImportedPages/'
},
{
title: 'StrokeTransparencySetting',
path: '/Docs/StrokeTransparencySetting/'
},
{
title: 'EventListeners',
path: '/Docs/EventListeners/'
},
{
title: 'LinkResourceRenditionType',
path: '/Docs/LinkResourceRenditionType/'
},
{
title: 'Behavior',
path: '/Docs/Behavior/'
},
{
title: 'BlendingSetting',
path: '/Docs/BlendingSetting/'
},
{
title: 'ImageExportOption',
path: '/Docs/ImageExportOption/'
},
{
title: 'HTMLExportPreference',
path: '/Docs/HTMLExportPreference/'
},
{
title: 'SourceSpaces',
path: '/Docs/SourceSpaces/'
},
{
title: 'EpubVersion',
path: '/Docs/EpubVersion/'
},
{
title: 'InnerShadowSetting',
path: '/Docs/InnerShadowSetting/'
},
{
title: 'Guide',
path: '/Docs/Guide/'
},
{
title: 'FootnoteMarkerPositioning',
path: '/Docs/FootnoteMarkerPositioning/'
},
{
title: 'WMFs',
path: '/Docs/WMFs/'
},
{
title: 'BorderPanel',
path: '/Docs/BorderPanel/'
},
{
title: 'ChangeTypes',
path: '/Docs/ChangeTypes/'
},
{
title: 'XMLFileEncoding',
path: '/Docs/XMLFileEncoding/'
},
{
title: 'SourceType',
path: '/Docs/SourceType/'
},
{
title: 'Gradient',
path: '/Docs/Gradient/'
},
{
title: 'DynamicDocumentsTextExportPolicy',
path: '/Docs/DynamicDocumentsTextExportPolicy/'
},
{
title: 'FindGrepPreference',
path: '/Docs/FindGrepPreference/'
},
{
title: 'SpecialCharacters',
path: '/Docs/SpecialCharacters/'
},
{
title: 'AutoEnum',
path: '/Docs/AutoEnum/'
},
{
title: 'ParaStyleMapping',
path: '/Docs/ParaStyleMapping/'
},
{
title: 'Snippets',
path: '/Docs/Snippets/'
},
{
title: 'DialogColumns',
path: '/Docs/DialogColumns/'
},
{
title: 'FontDownloading',
path: '/Docs/FontDownloading/'
},
{
title: 'StyleExportTagMaps',
path: '/Docs/StyleExportTagMaps/'
},
{
title: 'FindChangeGradientFeatherSetting',
path: '/Docs/FindChangeGradientFeatherSetting/'
},
{
title: 'Note',
path: '/Docs/Note/'
},
{
title: 'TextEditingPreference',
path: '/Docs/TextEditingPreference/'
},
{
title: 'DisplayOrderOptions',
path: '/Docs/DisplayOrderOptions/'
},
{
title: 'ColorRenderingDictionary',
path: '/Docs/ColorRenderingDictionary/'
},
{
title: 'LineSpacingType',
path: '/Docs/LineSpacingType/'
},
{
title: 'Dropdown',
path: '/Docs/Dropdown/'
},
{
title: 'ObjectStyleContentEffectsCategorySettings',
path: '/Docs/ObjectStyleContentEffectsCategorySettings/'
},
{
title: 'ConditionIndicatorMethod',
path: '/Docs/ConditionIndicatorMethod/'
},
{
title: 'ThumbsPerPage',
path: '/Docs/ThumbsPerPage/'
},
{
title: 'AttachedDevices',
path: '/Docs/AttachedDevices/'
},
{
title: 'DataMergeQrcodePlaceholder',
path: '/Docs/DataMergeQrcodePlaceholder/'
},
{
title: 'IndexOptions',
path: '/Docs/IndexOptions/'
},
{
title: 'ChangeTextPreference',
path: '/Docs/ChangeTextPreference/'
},
{
title: 'DocumentPreference',
path: '/Docs/DocumentPreference/'
},
{
title: 'Ink',
path: '/Docs/Ink/'
},
{
title: 'MenuSeparator',
path: '/Docs/MenuSeparator/'
},
{
title: 'BookletTypeOptions',
path: '/Docs/BookletTypeOptions/'
},
{
title: 'NumberedListExportOption',
path: '/Docs/NumberedListExportOption/'
},
{
title: 'ExportForWebPreference',
path: '/Docs/ExportForWebPreference/'
},
{
title: 'GrabberPreference',
path: '/Docs/GrabberPreference/'
},
{
title: 'InCopyUIColors',
path: '/Docs/InCopyUIColors/'
},
{
title: 'Tables',
path: '/Docs/Tables/'
},
{
title: 'DashedStrokeStyles',
path: '/Docs/DashedStrokeStyles/'
},
{
title: 'CrossReferenceFormat',
path: '/Docs/CrossReferenceFormat/'
},
{
title: 'MeasurementEditbox',
path: '/Docs/MeasurementEditbox/'
},
{
title: 'ScreenModeOptions',
path: '/Docs/ScreenModeOptions/'
},
{
title: 'SortAssets',
path: '/Docs/SortAssets/'
},
{
title: 'GotoStateBehaviors',
path: '/Docs/GotoStateBehaviors/'
},
{
title: 'TimingGroups',
path: '/Docs/TimingGroups/'
},
{
title: 'EndJoin',
path: '/Docs/EndJoin/'
},
{
title: 'PageColorOptions',
path: '/Docs/PageColorOptions/'
},
{
title: 'StrokeStyles',
path: '/Docs/StrokeStyles/'
},
{
title: 'MojikumiUiPreference',
path: '/Docs/MojikumiUiPreference/'
},
{
title: 'Cells',
path: '/Docs/Cells/'
},
{
title: 'TableStyleMapping',
path: '/Docs/TableStyleMapping/'
},
{
title: 'PreflightProfileRule',
path: '/Docs/PreflightProfileRule/'
},
{
title: 'HyphenationException',
path: '/Docs/HyphenationException/'
},
{
title: 'SmartGuidePreference',
path: '/Docs/SmartGuidePreference/'
},
{
title: 'PaperSizes',
path: '/Docs/PaperSizes/'
},
{
title: 'TOCStyleEntry',
path: '/Docs/TOCStyleEntry/'
},
{
title: 'Words',
path: '/Docs/Words/'
},
{
title: 'NestedLineStyles',
path: '/Docs/NestedLineStyles/'
},
{
title: 'ImportFormat',
path: '/Docs/ImportFormat/'
},
{
title: 'ObjectStyle',
path: '/Docs/ObjectStyle/'
},
{
title: 'Sections',
path: '/Docs/Sections/'
},
{
title: 'JPEGOptionsFormat',
path: '/Docs/JPEGOptionsFormat/'
},
{
title: 'KinsokuSet',
path: '/Docs/KinsokuSet/'
},
{
title: 'PageTransitionDurationOptions',
path: '/Docs/PageTransitionDurationOptions/'
},
{
title: 'RealEditbox',
path: '/Docs/RealEditbox/'
},
{
title: 'PreflightProcess',
path: '/Docs/PreflightProcess/'
},
{
title: 'OpenOptions',
path: '/Docs/OpenOptions/'
},
{
title: 'Page',
path: '/Docs/Page/'
},
{
title: 'AssignmentStatus',
path: '/Docs/AssignmentStatus/'
},
{
title: 'ToolTipOptions',
path: '/Docs/ToolTipOptions/'
},
{
title: 'DocumentIntentOptions',
path: '/Docs/DocumentIntentOptions/'
},
{
title: 'Tint',
path: '/Docs/Tint/'
},
{
title: 'TextDirection',
path: '/Docs/TextDirection/'
},
{
title: 'Preferences',
path: '/Docs/Preferences/'
},
{
title: 'SyncConflictResolution',
path: '/Docs/SyncConflictResolution/'
},
{
title: 'Change',
path: '/Docs/Change/'
},
{
title: 'LeadingModel',
path: '/Docs/LeadingModel/'
},
{
title: 'Hyperlink',
path: '/Docs/Hyperlink/'
},
{
title: 'TimingTargets',
path: '/Docs/TimingTargets/'
},
{
title: 'MojikumiTableDefaults',
path: '/Docs/MojikumiTableDefaults/'
},
{
title: 'FindChangeTransliterateOption',
path: '/Docs/FindChangeTransliterateOption/'
},
{
title: 'EPSImageData',
path: '/Docs/EPSImageData/'
},
{
title: 'ConditionUnderlineIndicatorAppearance',
path: '/Docs/ConditionUnderlineIndicatorAppearance/'
},
{
title: 'Movie',
path: '/Docs/Movie/'
},
{
title: 'HyphenationStyleEnum',
path: '/Docs/HyphenationStyleEnum/'
},
{
title: 'DigitsTypeOptions',
path: '/Docs/DigitsTypeOptions/'
},
{
title: 'XmlStories',
path: '/Docs/XmlStories/'
},
{
title: 'GotoPreviousViewBehaviors',
path: '/Docs/GotoPreviousViewBehaviors/'
},
{
title: 'PDFPlacePreference',
path: '/Docs/PDFPlacePreference/'
},
{
title: 'ObjectStyleGroups',
path: '/Docs/ObjectStyleGroups/'
},
{
title: 'DesignOptions',
path: '/Docs/DesignOptions/'
},
{
title: 'ScriptPreference',
path: '/Docs/ScriptPreference/'
},
{
title: 'BindingOptions',
path: '/Docs/BindingOptions/'
},
{
title: 'PDFMarkWeight',
path: '/Docs/PDFMarkWeight/'
},
{
title: 'LayoutRuleOptions',
path: '/Docs/LayoutRuleOptions/'
},
{
title: 'MovieBehaviors',
path: '/Docs/MovieBehaviors/'
},
{
title: 'XMLItems',
path: '/Docs/XMLItems/'
},
{
title: 'TaggedTextImportPreference',
path: '/Docs/TaggedTextImportPreference/'
},
{
title: 'BaselineGridRelativeOption',
path: '/Docs/BaselineGridRelativeOption/'
},
{
title: 'RealCombobox',
path: '/Docs/RealCombobox/'
},
{
title: 'ListAlignment',
path: '/Docs/ListAlignment/'
},
{
title: 'ParagraphStyleGroup',
path: '/Docs/ParagraphStyleGroup/'
},
{
title: 'GotoLastPageBehavior',
path: '/Docs/GotoLastPageBehavior/'
},
{
title: 'LineAlignment',
path: '/Docs/LineAlignment/'
},
{
title: 'EndnoteRanges',
path: '/Docs/EndnoteRanges/'
},
{
title: 'ColorSpace',
path: '/Docs/ColorSpace/'
},
{
title: 'Swatch',
path: '/Docs/Swatch/'
},
{
title: 'IndexSection',
path: '/Docs/IndexSection/'
},
{
title: 'FlattenerPreset',
path: '/Docs/FlattenerPreset/'
},
{
title: 'GlobalClashResolutionStrategy',
path: '/Docs/GlobalClashResolutionStrategy/'
},
{
title: 'DataMergeFields',
path: '/Docs/DataMergeFields/'
},
{
title: 'ConditionSets',
path: '/Docs/ConditionSets/'
},
{
title: 'PreflightBookOption',
path: '/Docs/PreflightBookOption/'
},
{
title: 'BuildingBlock',
path: '/Docs/BuildingBlock/'
},
{
title: 'KinsokuTables',
path: '/Docs/KinsokuTables/'
},
{
title: 'MarkTypes',
path: '/Docs/MarkTypes/'
},
{
title: 'PDFComment',
path: '/Docs/PDFComment/'
},
{
title: 'XMLRuleProcessors',
path: '/Docs/XMLRuleProcessors/'
},
{
title: 'UIColors',
path: '/Docs/UIColors/'
},
{
title: 'LanguageAndRegion',
path: '/Docs/LanguageAndRegion/'
},
{
title: 'GotoPreviousStateBehaviors',
path: '/Docs/GotoPreviousStateBehaviors/'
},
{
title: 'TransformPreference',
path: '/Docs/TransformPreference/'
},
{
title: 'PrintBookletOption',
path: '/Docs/PrintBookletOption/'
},
{
title: 'GotoStateBehavior',
path: '/Docs/GotoStateBehavior/'
},
{
title: 'ParaStyleMappings',
path: '/Docs/ParaStyleMappings/'
},
{
title: 'FindColorPreference',
path: '/Docs/FindColorPreference/'
},
{
title: 'Section',
path: '/Docs/Section/'
},
{
title: 'CharacterCountLocation',
path: '/Docs/CharacterCountLocation/'
},
{
title: 'MediaItem',
path: '/Docs/MediaItem/'
},
{
title: 'AssignedStory',
path: '/Docs/AssignedStory/'
},
{
title: 'AutoCorrectTable',
path: '/Docs/AutoCorrectTable/'
},
{
title: 'XMLExportUntaggedTablesFormat',
path: '/Docs/XMLExportUntaggedTablesFormat/'
},
{
title: 'GpuPerformancePreference',
path: '/Docs/GpuPerformancePreference/'
},
{
title: 'Assignments',
path: '/Docs/Assignments/'
},
{
title: 'DynamicTriggerEvents',
path: '/Docs/DynamicTriggerEvents/'
},
{
title: 'JoinOptions',
path: '/Docs/JoinOptions/'
},
{
title: 'ParagraphShadingTopOriginEnum',
path: '/Docs/ParagraphShadingTopOriginEnum/'
},
{
title: 'FindChangeInnerGlowSetting',
path: '/Docs/FindChangeInnerGlowSetting/'
},
{
title: '.DS_Store',
path: '/Docs/.DS_Store/'
},
{
title: 'StyleConflict',
path: '/Docs/StyleConflict/'
},
{
title: 'StyleType',
path: '/Docs/StyleType/'
},
{
title: 'Fitting',
path: '/Docs/Fitting/'
},
{
title: 'Locale',
path: '/Docs/Locale/'
},
{
title: 'AnimationPlayOperations',
path: '/Docs/AnimationPlayOperations/'
},
{
title: 'LinkedPageItemOption',
path: '/Docs/LinkedPageItemOption/'
},
{
title: 'TextImportPreference',
path: '/Docs/TextImportPreference/'
},
{
title: 'Bookmark',
path: '/Docs/Bookmark/'
},
{
title: 'PrintFormBehaviors',
path: '/Docs/PrintFormBehaviors/'
},
{
title: 'Endnote',
path: '/Docs/Endnote/'
},
{
title: 'HyphenationExceptions',
path: '/Docs/HyphenationExceptions/'
},
{
title: 'HyperlinkURLDestination',
path: '/Docs/HyperlinkURLDestination/'
},
{
title: 'DottedStrokeStyle',
path: '/Docs/DottedStrokeStyle/'
},
{
title: 'ResolveStyleClash',
path: '/Docs/ResolveStyleClash/'
},
{
title: 'GraphicLayers',
path: '/Docs/GraphicLayers/'
},
{
title: 'MeasurementUnits',
path: '/Docs/MeasurementUnits/'
},
{
title: 'CompressionQuality',
path: '/Docs/CompressionQuality/'
},
{
title: 'NestedLineStyle',
path: '/Docs/NestedLineStyle/'
},
{
title: 'EndnoteScope',
path: '/Docs/EndnoteScope/'
},
{
title: 'ConditionSet',
path: '/Docs/ConditionSet/'
},
{
title: 'Buttons',
path: '/Docs/Buttons/'
},
{
title: 'InnerGlowSetting',
path: '/Docs/InnerGlowSetting/'
},
{
title: 'ParagraphBorderBottomOriginEnum',
path: '/Docs/ParagraphBorderBottomOriginEnum/'
},
{
title: 'TimingTarget',
path: '/Docs/TimingTarget/'
},
{
title: 'Polygons',
path: '/Docs/Polygons/'
},
{
title: 'EPSExportPreference',
path: '/Docs/EPSExportPreference/'
},
{
title: 'BoundingBoxLimits',
path: '/Docs/BoundingBoxLimits/'
},
{
title: 'Panel',
path: '/Docs/Panel/'
},
{
title: 'ExportLayerOptions',
path: '/Docs/ExportLayerOptions/'
},
{
title: 'DottedStrokeStyles',
path: '/Docs/DottedStrokeStyles/'
},
{
title: 'Submenus',
path: '/Docs/Submenus/'
},
{
title: 'FloatingWindowSize',
path: '/Docs/FloatingWindowSize/'
},
{
title: 'WMF',
path: '/Docs/WMF/'
},
{
title: 'Widget',
path: '/Docs/Widget/'
},
{
title: 'RadioButton',
path: '/Docs/RadioButton/'
},
{
title: 'GotoNextViewBehaviors',
path: '/Docs/GotoNextViewBehaviors/'
},
{
title: 'GraphicLayer',
path: '/Docs/GraphicLayer/'
},
{
title: 'Layers',
path: '/Docs/Layers/'
},
{
title: 'PdfMagnificationOptions',
path: '/Docs/PdfMagnificationOptions/'
},
{
title: 'MenuAction',
path: '/Docs/MenuAction/'
},
{
title: 'Tints',
path: '/Docs/Tints/'
},
{
title: 'XMLExportPreference',
path: '/Docs/XMLExportPreference/'
},
{
title: 'PageItem',
path: '/Docs/PageItem/'
},
{
title: 'TOCStyles',
path: '/Docs/TOCStyles/'
},
{
title: 'Asset',
path: '/Docs/Asset/'
},
{
title: 'MeasurementComboboxes',
path: '/Docs/MeasurementComboboxes/'
},
{
title: 'TrapImagePlacementTypes',
path: '/Docs/TrapImagePlacementTypes/'
},
{
title: 'TextImportCharacterSet',
path: '/Docs/TextImportCharacterSet/'
},
{
title: 'ExcelImportPreference',
path: '/Docs/ExcelImportPreference/'
},
{
title: 'PreflightRule',
path: '/Docs/PreflightRule/'
},
{
title: 'FontLockingPreference',
path: '/Docs/FontLockingPreference/'
},
{
title: 'InkTypes',
path: '/Docs/InkTypes/'
},
{
title: 'PagesPanel',
path: '/Docs/PagesPanel/'
},
{
title: 'GotoNextPageBehavior',
path: '/Docs/GotoNextPageBehavior/'
},
{
title: 'MenuElement',
path: '/Docs/MenuElement/'
},
{
title: 'GraphicLayerOption',
path: '/Docs/GraphicLayerOption/'
},
{
title: 'AutoCorrectTables',
path: '/Docs/AutoCorrectTables/'
},
{
title: 'GlowTechnique',
path: '/Docs/GlowTechnique/'
},
{
title: 'InteractivePDFInteractiveElementsOptions',
path: '/Docs/InteractivePDFInteractiveElementsOptions/'
},
{
title: 'AssetType',
path: '/Docs/AssetType/'
},
{
title: 'StoryWindows',
path: '/Docs/StoryWindows/'
},
{
title: 'TextStyleRanges',
path: '/Docs/TextStyleRanges/'
},
{
title: 'TrapPresets',
path: '/Docs/TrapPresets/'
},
{
title: 'RubyOverhang',
path: '/Docs/RubyOverhang/'
},
{
title: 'PositionalForms',
path: '/Docs/PositionalForms/'
},
{
title: 'ValidationErrors',
path: '/Docs/ValidationErrors/'
},
{
title: 'GotoNextViewBehavior',
path: '/Docs/GotoNextViewBehavior/'
},
{
title: 'EndnoteRestarting',
path: '/Docs/EndnoteRestarting/'
},
{
title: 'ScriptMenuActions',
path: '/Docs/ScriptMenuActions/'
},
{
title: 'XMLRuleProcessor',
path: '/Docs/XMLRuleProcessor/'
},
{
title: 'SubmitFormBehavior',
path: '/Docs/SubmitFormBehavior/'
},
{
title: 'WordRTFImportPreference',
path: '/Docs/WordRTFImportPreference/'
},
{
title: 'TextPreference',
path: '/Docs/TextPreference/'
},
{
title: 'PreserveAppearanceFromLayoutEnum',
path: '/Docs/PreserveAppearanceFromLayoutEnum/'
},
{
title: 'AutoCorrectPreference',
path: '/Docs/AutoCorrectPreference/'
},
{
title: 'GradientFeatherSetting',
path: '/Docs/GradientFeatherSetting/'
},
{
title: 'PublishExportPreference',
path: '/Docs/PublishExportPreference/'
},
{
title: 'TextColumns',
path: '/Docs/TextColumns/'
},
{
title: 'InteractivePDFExportPreference',
path: '/Docs/InteractivePDFExportPreference/'
},
{
title: 'XMLExportMaps',
path: '/Docs/XMLExportMaps/'
},
{
title: 'TextPathEffects',
path: '/Docs/TextPathEffects/'
},
{
title: 'KentenAlignment',
path: '/Docs/KentenAlignment/'
},
{
title: 'AnimationEaseOptions',
path: '/Docs/AnimationEaseOptions/'
},
{
title: 'TableStyle',
path: '/Docs/TableStyle/'
},
{
title: 'DataMergeTextPlaceholders',
path: '/Docs/DataMergeTextPlaceholders/'
},
{
title: 'PreviewTypes',
path: '/Docs/PreviewTypes/'
},
{
title: 'ObjectStyles',
path: '/Docs/ObjectStyles/'
},
{
title: 'ContentTransparencySetting',
path: '/Docs/ContentTransparencySetting/'
},
{
title: 'XmlStory',
path: '/Docs/XmlStory/'
},
{
title: 'GradientStop',
path: '/Docs/GradientStop/'
},
{
title: 'NumberingLists',
path: '/Docs/NumberingLists/'
},
{
title: 'Paragraph',
path: '/Docs/Paragraph/'
},
{
title: 'PDFCompressionType',
path: '/Docs/PDFCompressionType/'
},
{
title: 'MixedInks',
path: '/Docs/MixedInks/'
},
{
title: 'OTFFigureStyle',
path: '/Docs/OTFFigureStyle/'
},
{
title: 'EmptyFrameFittingOptions',
path: '/Docs/EmptyFrameFittingOptions/'
},
{
title: 'IntegerCombobox',
path: '/Docs/IntegerCombobox/'
},
{
title: 'SaveOptions',
path: '/Docs/SaveOptions/'
},
{
title: 'UpdateLinkOptions',
path: '/Docs/UpdateLinkOptions/'
},
{
title: 'GotoAnchorBehaviors',
path: '/Docs/GotoAnchorBehaviors/'
},
{
title: 'FitDimension',
path: '/Docs/FitDimension/'
},
{
title: 'Images',
path: '/Docs/Images/'
},
{
title: 'BevelAndEmbossStyle',
path: '/Docs/BevelAndEmbossStyle/'
},
{
title: 'ParagraphStyleGroups',
path: '/Docs/ParagraphStyleGroups/'
},
{
title: 'FindChangeObjectOption',
path: '/Docs/FindChangeObjectOption/'
},
{
title: 'SignatureSizeOptions',
path: '/Docs/SignatureSizeOptions/'
},
{
title: 'PICTs',
path: '/Docs/PICTs/'
},
{
title: 'CompositeFontEntry',
path: '/Docs/CompositeFontEntry/'
},
{
title: 'Group',
path: '/Docs/Group/'
},
{
title: 'ColorSetting',
path: '/Docs/ColorSetting/'
},
{
title: 'RangeSortOrder',
path: '/Docs/RangeSortOrder/'
},
{
title: 'CellStyleMapping',
path: '/Docs/CellStyleMapping/'
},
{
title: 'CompositeFonts',
path: '/Docs/CompositeFonts/'
},
{
title: 'VerticalJustification',
path: '/Docs/VerticalJustification/'
},
{
title: 'ViewZoomBehavior',
path: '/Docs/ViewZoomBehavior/'
},
{
title: 'UserDictionaries',
path: '/Docs/UserDictionaries/'
},
{
title: 'GotoFirstPageBehavior',
path: '/Docs/GotoFirstPageBehavior/'
},
{
title: 'CreateProxy',
path: '/Docs/CreateProxy/'
},
{
title: 'LayoutWindows',
path: '/Docs/LayoutWindows/'
},
{
title: 'HyperlinkExternalPageDestination',
path: '/Docs/HyperlinkExternalPageDestination/'
},
{
title: 'AnimationBehaviors',
path: '/Docs/AnimationBehaviors/'
},
{
title: 'PrinterPresets',
path: '/Docs/PrinterPresets/'
},
{
title: 'RadiobuttonControl',
path: '/Docs/RadiobuttonControl/'
},
{
title: 'ResizeConstraints',
path: '/Docs/ResizeConstraints/'
},
{
title: 'VariableScopes',
path: '/Docs/VariableScopes/'
},
{
title: 'DisplaySettingOptions',
path: '/Docs/DisplaySettingOptions/'
},
{
title: 'LibraryPanel',
path: '/Docs/LibraryPanel/'
},
{
title: 'HiddenTexts',
path: '/Docs/HiddenTexts/'
},
{
title: 'EnablingGroup',
path: '/Docs/EnablingGroup/'
},
{
title: 'ImagePreference',
path: '/Docs/ImagePreference/'
},
{
title: 'RealComboboxes',
path: '/Docs/RealComboboxes/'
},
{
title: 'StrokeAlignment',
path: '/Docs/StrokeAlignment/'
},
{
title: 'ChangeCaseOptions',
path: '/Docs/ChangeCaseOptions/'
},
{
title: 'PDFColorSpace',
path: '/Docs/PDFColorSpace/'
},
{
title: 'PrintBookletPrintPreference',
path: '/Docs/PrintBookletPrintPreference/'
},
{
title: 'FindTransliteratePreference',
path: '/Docs/FindTransliteratePreference/'
},
{
title: 'CopyrightStatus',
path: '/Docs/CopyrightStatus/'
},
{
title: 'XMLImportMaps',
path: '/Docs/XMLImportMaps/'
},
{
title: 'LinkStatus',
path: '/Docs/LinkStatus/'
},
{
title: 'RepaginateOption',
path: '/Docs/RepaginateOption/'
},
{
title: 'MatchCharacterStylePreference',
path: '/Docs/MatchCharacterStylePreference/'
},
{
title: 'DialogRows',
path: '/Docs/DialogRows/'
},
{
title: 'DigpubArticleVersion',
path: '/Docs/DigpubArticleVersion/'
},
{
title: 'CrossReference',
path: '/Docs/CrossReference/'
},
{
title: 'PDFXStandards',
path: '/Docs/PDFXStandards/'
},
{
title: 'PageTransitionTypeOptions',
path: '/Docs/PageTransitionTypeOptions/'
},
{
title: 'Changes',
path: '/Docs/Changes/'
},
{
title: 'Character',
path: '/Docs/Character/'
},
{
title: 'GotoAnchorBehavior',
path: '/Docs/GotoAnchorBehavior/'
},
{
title: 'HyperlinkTextSource',
path: '/Docs/HyperlinkTextSource/'
},
{
title: 'PostScriptLevels',
path: '/Docs/PostScriptLevels/'
},
{
title: 'FollowShapeModeOptions',
path: '/Docs/FollowShapeModeOptions/'
},
{
title: 'StaticAlignmentOptions',
path: '/Docs/StaticAlignmentOptions/'
},
{
title: 'DataMerge',
path: '/Docs/DataMerge/'
},
{
title: 'LiveDrawingOptions',
path: '/Docs/LiveDrawingOptions/'
},
{
title: 'KentenCharacterSet',
path: '/Docs/KentenCharacterSet/'
},
{
title: 'VersionCueSyncStatus',
path: '/Docs/VersionCueSyncStatus/'
},
{
title: 'LinkingPreference',
path: '/Docs/LinkingPreference/'
},
{
title: 'FootnoteFirstBaseline',
path: '/Docs/FootnoteFirstBaseline/'
},
{
title: 'AnchoredObjectDefault',
path: '/Docs/AnchoredObjectDefault/'
},
{
title: 'EPSColorSpace',
path: '/Docs/EPSColorSpace/'
},
{
title: 'PNGQualityEnum',
path: '/Docs/PNGQualityEnum/'
},
{
title: 'MojikumiTables',
path: '/Docs/MojikumiTables/'
},
{
title: 'MarginPreference',
path: '/Docs/MarginPreference/'
},
{
title: 'TableStyleGroup',
path: '/Docs/TableStyleGroup/'
},
{
title: 'HyperlinkTextDestination',
path: '/Docs/HyperlinkTextDestination/'
},
{
title: 'CharacterAlignment',
path: '/Docs/CharacterAlignment/'
},
{
title: 'PrinterPresetTypes',
path: '/Docs/PrinterPresetTypes/'
},
{
title: 'UserInteractionLevels',
path: '/Docs/UserInteractionLevels/'
},
{
title: 'Position',
path: '/Docs/Position/'
},
{
title: 'FindChangeGlyphOption',
path: '/Docs/FindChangeGlyphOption/'
},
{
title: 'MotionPreset',
path: '/Docs/MotionPreset/'
},
{
title: 'Justification',
path: '/Docs/Justification/'
},
{
title: 'PathPoints',
path: '/Docs/PathPoints/'
},
{
title: 'TabStop',
path: '/Docs/TabStop/'
},
{
title: 'NestedStyleDelimiters',
path: '/Docs/NestedStyleDelimiters/'
},
{
title: 'ArticleMembers',
path: '/Docs/ArticleMembers/'
},
{
title: 'FootnoteRestarting',
path: '/Docs/FootnoteRestarting/'
},
{
title: 'GotoPreviousStateBehavior',
path: '/Docs/GotoPreviousStateBehavior/'
},
{
title: 'RulerOrigin',
path: '/Docs/RulerOrigin/'
},
{
title: 'GIFOptionsPalette',
path: '/Docs/GIFOptionsPalette/'
},
{
title: 'Color',
path: '/Docs/Color/'
},
{
title: 'Path',
path: '/Docs/Path/'
},
{
title: 'TagVector',
path: '/Docs/TagVector/'
},
{
title: 'Printer',
path: '/Docs/Printer/'
},
{
title: 'StrokeFillProxyOptions',
path: '/Docs/StrokeFillProxyOptions/'
},
{
title: 'Replies',
path: '/Docs/Replies/'
},
{
title: 'GlobalClashResolutionStrategyForMasterPage',
path: '/Docs/GlobalClashResolutionStrategyForMasterPage/'
},
{
title: 'CrossReferenceType',
path: '/Docs/CrossReferenceType/'
},
{
title: 'TaggedTextExportPreference',
path: '/Docs/TaggedTextExportPreference/'
},
{
title: 'DirectionalFeatherSetting',
path: '/Docs/DirectionalFeatherSetting/'
},
{
title: 'TextWrapSideOptions',
path: '/Docs/TextWrapSideOptions/'
},
{
title: 'StaticTexts',
path: '/Docs/StaticTexts/'
},
{
title: 'ChangeGlyphPreference',
path: '/Docs/ChangeGlyphPreference/'
},
{
title: 'ChangeTextColorChoices',
path: '/Docs/ChangeTextColorChoices/'
},
{
title: 'HyperlinkPageItemSources',
path: '/Docs/HyperlinkPageItemSources/'
},
{
title: 'AlternatingFillsTypes',
path: '/Docs/AlternatingFillsTypes/'
},
{
title: 'ColorModel',
path: '/Docs/ColorModel/'
},
{
title: 'DataMergeImagePlaceholder',
path: '/Docs/DataMergeImagePlaceholder/'
},
{
title: 'EditingState',
path: '/Docs/EditingState/'
},
{
title: 'DataMergeField',
path: '/Docs/DataMergeField/'
},
{
title: 'NumberedParagraphsOptions',
path: '/Docs/NumberedParagraphsOptions/'
},
{
title: 'ImageResolution',
path: '/Docs/ImageResolution/'
},
{
title: 'Panels',
path: '/Docs/Panels/'
},
{
title: 'FootnoteNumberingStyle',
path: '/Docs/FootnoteNumberingStyle/'
},
{
title: 'PageItemDefault',
path: '/Docs/PageItemDefault/'
},
{
title: 'JPEGOptionsQuality',
path: '/Docs/JPEGOptionsQuality/'
},
{
title: 'PreflightRuleInstances',
path: '/Docs/PreflightRuleInstances/'
},
{
title: 'DisplaySettings',
path: '/Docs/DisplaySettings/'
},
{
title: 'IndexingSortOption',
path: '/Docs/IndexingSortOption/'
},
{
title: 'Articles',
path: '/Docs/Articles/'
},
{
title: 'ObjectTypes',
path: '/Docs/ObjectTypes/'
},
{
title: 'BalanceLinesStyle',
path: '/Docs/BalanceLinesStyle/'
},
{
title: 'TableStyleMappings',
path: '/Docs/TableStyleMappings/'
},
{
title: 'LocationOptions',
path: '/Docs/LocationOptions/'
},
{
title: 'FontTypes',
path: '/Docs/FontTypes/'
},
{
title: 'BulletCharacterType',
path: '/Docs/BulletCharacterType/'
},
{
title: 'OpacityGradientStop',
path: '/Docs/OpacityGradientStop/'
},
{
title: 'ViewDisplaySettings',
path: '/Docs/ViewDisplaySettings/'
},
{
title: 'HorizontalOrVertical',
path: '/Docs/HorizontalOrVertical/'
},
{
title: 'XMLRuleMatchData',
path: '/Docs/XMLRuleMatchData/'
},
{
title: 'PublishFormatEnum',
path: '/Docs/PublishFormatEnum/'
},
{
title: 'StoryTypes',
path: '/Docs/StoryTypes/'
},
{
title: 'HtmlItem',
path: '/Docs/HtmlItem/'
},
{
title: 'BookContents',
path: '/Docs/BookContents/'
},
{
title: 'PNGColorSpaceEnum',
path: '/Docs/PNGColorSpaceEnum/'
},
{
title: 'ImageSizeOption',
path: '/Docs/ImageSizeOption/'
},
{
title: 'UseSVGAsEnum',
path: '/Docs/UseSVGAsEnum/'
},
{
title: 'PreviewPagesOptions',
path: '/Docs/PreviewPagesOptions/'
},
{
title: 'TOCStyle',
path: '/Docs/TOCStyle/'
},
{
title: 'RotationDirection',
path: '/Docs/RotationDirection/'
},
{
title: 'Capitalization',
path: '/Docs/Capitalization/'
},
{
title: 'AngleEditbox',
path: '/Docs/AngleEditbox/'
},
{
title: 'GraphicLines',
path: '/Docs/GraphicLines/'
},
{
title: 'CoordinateSpaces',
path: '/Docs/CoordinateSpaces/'
},
{
title: 'ChangeTransliteratePreference',
path: '/Docs/ChangeTransliteratePreference/'
},
{
title: 'XMLAttribute',
path: '/Docs/XMLAttribute/'
},
{
title: 'ImportedPageAttribute',
path: '/Docs/ImportedPageAttribute/'
},
{
title: 'StripedStrokeStyle',
path: '/Docs/StripedStrokeStyle/'
},
{
title: 'SelectionOptions',
path: '/Docs/SelectionOptions/'
},
{
title: 'SignatureField',
path: '/Docs/SignatureField/'
},
{
title: 'ListBox',
path: '/Docs/ListBox/'
},
{
title: 'TabStopAlignment',
path: '/Docs/TabStopAlignment/'
},
{
title: 'RadiobuttonControls',
path: '/Docs/RadiobuttonControls/'
},
{
title: 'TextTypeAlignments',
path: '/Docs/TextTypeAlignments/'
},
{
title: 'ImportedPageCropOptions',
path: '/Docs/ImportedPageCropOptions/'
},
{
title: 'PrintPreference',
path: '/Docs/PrintPreference/'
},
{
title: 'SearchStrategies',
path: '/Docs/SearchStrategies/'
},
{
title: 'PrintFormBehavior',
path: '/Docs/PrintFormBehavior/'
},
{
title: 'DictionaryPreference',
path: '/Docs/DictionaryPreference/'
},
{
title: 'CheckBox',
path: '/Docs/CheckBox/'
},
{
title: 'KinsokuHangTypes',
path: '/Docs/KinsokuHangTypes/'
},
{
title: 'HyperlinkURLDestinations',
path: '/Docs/HyperlinkURLDestinations/'
},
{
title: 'InsertionPoint',
path: '/Docs/InsertionPoint/'
},
{
title: 'Paths',
path: '/Docs/Paths/'
},
{
title: 'Sampling',
path: '/Docs/Sampling/'
},
{
title: 'XMLInstruction',
path: '/Docs/XMLInstruction/'
},
{
title: 'TagRaster',
path: '/Docs/TagRaster/'
},
{
title: 'Snippet',
path: '/Docs/Snippet/'
},
{
title: 'PDF',
path: '/Docs/PDF/'
},
{
title: 'ConditionIndicatorMode',
path: '/Docs/ConditionIndicatorMode/'
},
{
title: 'AutoSizingReferenceEnum',
path: '/Docs/AutoSizingReferenceEnum/'
},
{
title: 'FrameFittingOption',
path: '/Docs/FrameFittingOption/'
},
{
title: 'GotoNextStateBehavior',
path: '/Docs/GotoNextStateBehavior/'
},
{
title: 'NothingEnum',
path: '/Docs/NothingEnum/'
},
{
title: 'EPSImportPreference',
path: '/Docs/EPSImportPreference/'
},
{
title: 'UITools',
path: '/Docs/UITools/'
},
{
title: 'MeasurementCombobox',
path: '/Docs/MeasurementCombobox/'
},
{
title: 'GuidePreference',
path: '/Docs/GuidePreference/'
},
{
title: 'XMLImportPreference',
path: '/Docs/XMLImportPreference/'
},
{
title: 'ICCProfiles',
path: '/Docs/ICCProfiles/'
},
{
title: 'PreflightRuleInstance',
path: '/Docs/PreflightRuleInstance/'
},
{
title: 'DocumentPresets',
path: '/Docs/DocumentPresets/'
},
{
title: 'Polygon',
path: '/Docs/Polygon/'
},
{
title: 'StoryPreference',
path: '/Docs/StoryPreference/'
},
{
title: 'Libraries',
path: '/Docs/Libraries/'
},
{
title: 'StoryGridDataInformation',
path: '/Docs/StoryGridDataInformation/'
},
{
title: 'BehaviorEvents',
path: '/Docs/BehaviorEvents/'
},
{
title: 'Flip',
path: '/Docs/Flip/'
},
{
title: 'SourceFieldType',
path: '/Docs/SourceFieldType/'
},
{
title: 'ObjectStyleObjectEffectsCategorySettings',
path: '/Docs/ObjectStyleObjectEffectsCategorySettings/'
},
{
title: 'OpenFileBehaviors',
path: '/Docs/OpenFileBehaviors/'
},
{
title: 'ShowHideFieldsBehavior',
path: '/Docs/ShowHideFieldsBehavior/'
},
{
title: 'IdleEvent',
path: '/Docs/IdleEvent/'
},
{
title: 'EndnoteOption',
path: '/Docs/EndnoteOption/'
},
{
title: 'FirstBaseline',
path: '/Docs/FirstBaseline/'
},
{
title: 'DocumentPrintUiOptions',
path: '/Docs/DocumentPrintUiOptions/'
},
{
title: 'PageTransitionOverrideOptions',
path: '/Docs/PageTransitionOverrideOptions/'
},
{
title: 'Leading',
path: '/Docs/Leading/'
},
{
title: 'UndoModes',
path: '/Docs/UndoModes/'
},
{
title: 'FormField',
path: '/Docs/FormField/'
},
{
title: 'FindChangeFillTransparencySetting',
path: '/Docs/FindChangeFillTransparencySetting/'
},
{
title: 'Assignment',
path: '/Docs/Assignment/'
},
{
title: 'PolygonPreference',
path: '/Docs/PolygonPreference/'
},
{
title: 'GotoPageBehavior',
path: '/Docs/GotoPageBehavior/'
},
{
title: 'GridPreference',
path: '/Docs/GridPreference/'
},
{
title: 'ImportedPage',
path: '/Docs/ImportedPage/'
},
{
title: 'BuildingBlocks',
path: '/Docs/BuildingBlocks/'
},
{
title: 'Endnotes',
path: '/Docs/Endnotes/'
},
{
title: 'ColorSettingsPolicy',
path: '/Docs/ColorSettingsPolicy/'
},
{
title: 'Spread',
path: '/Docs/Spread/'
},
{
title: 'ContentPlacerObject',
path: '/Docs/ContentPlacerObject/'
},
{
title: 'IntegerEditbox',
path: '/Docs/IntegerEditbox/'
},
{
title: 'SoundPosterTypes',
path: '/Docs/SoundPosterTypes/'
},
{
title: 'NumberingStyle',
path: '/Docs/NumberingStyle/'
},
{
title: 'ClippingPathType',
path: '/Docs/ClippingPathType/'
},
{
title: 'ImportPlatform',
path: '/Docs/ImportPlatform/'
},
{
title: 'Library',
path: '/Docs/Library/'
},
{
title: 'PICT',
path: '/Docs/PICT/'
},
{
title: 'ImageConversion',
path: '/Docs/ImageConversion/'
},
{
title: 'MenuItem',
path: '/Docs/MenuItem/'
},
{
title: 'Trapping',
path: '/Docs/Trapping/'
},
{
title: 'Language',
path: '/Docs/Language/'
},
{
title: 'TextExportPreference',
path: '/Docs/TextExportPreference/'
},
{
title: 'XMLComments',
path: '/Docs/XMLComments/'
},
{
title: 'MenuSeparators',
path: '/Docs/MenuSeparators/'
},
{
title: 'Column',
path: '/Docs/Column/'
},
{
title: 'PlayOperations',
path: '/Docs/PlayOperations/'
},
{
title: 'ObjectExportOption',
path: '/Docs/ObjectExportOption/'
},
{
title: 'Groups',
path: '/Docs/Groups/'
},
{
title: 'StrokeCornerAdjustment',
path: '/Docs/StrokeCornerAdjustment/'
},
{
title: 'TabStops',
path: '/Docs/TabStops/'
},
{
title: 'PasteboardPreference',
path: '/Docs/PasteboardPreference/'
},
{
title: 'PreflightProfileRules',
path: '/Docs/PreflightProfileRules/'
},
{
title: 'TextWrapPreference',
path: '/Docs/TextWrapPreference/'
},
{
title: 'TaggedPDFPreference',
path: '/Docs/TaggedPDFPreference/'
},
{
title: 'CompositeFontEntries',
path: '/Docs/CompositeFontEntries/'
},
{
title: 'FlipValues',
path: '/Docs/FlipValues/'
},
{
title: 'Topic',
path: '/Docs/Topic/'
},
{
title: 'Document',
path: '/Docs/Document/'
},
{
title: 'InsertionPoints',
path: '/Docs/InsertionPoints/'
},
{
title: 'ParagraphDirectionOptions',
path: '/Docs/ParagraphDirectionOptions/'
},
{
title: 'GotoFirstPageBehaviors',
path: '/Docs/GotoFirstPageBehaviors/'
},
{
title: 'Books',
path: '/Docs/Books/'
},
{
title: 'PreflightProfile',
path: '/Docs/PreflightProfile/'
},
{
title: 'DTDs',
path: '/Docs/DTDs/'
},
{
title: 'ContourOption',
path: '/Docs/ContourOption/'
},
{
title: 'TextPaths',
path: '/Docs/TextPaths/'
},
{
title: 'ObjectStyleGroup',
path: '/Docs/ObjectStyleGroup/'
},
{
title: 'CheckboxControls',
path: '/Docs/CheckboxControls/'
},
{
title: 'CrossReferenceSources',
path: '/Docs/CrossReferenceSources/'
},
{
title: 'PageTransitionDirectionOptions',
path: '/Docs/PageTransitionDirectionOptions/'
},
{
title: 'LinkMetadata',
path: '/Docs/LinkMetadata/'
},
{
title: 'XMLViewPreference',
path: '/Docs/XMLViewPreference/'
},
{
title: 'PageOrientation',
path: '/Docs/PageOrientation/'
},
{
title: 'State',
path: '/Docs/State/'
},
{
title: 'AssignedStories',
path: '/Docs/AssignedStories/'
},
{
title: 'ButtonPreference',
path: '/Docs/ButtonPreference/'
},
{
title: 'TextFramePreference',
path: '/Docs/TextFramePreference/'
},
{
title: 'ImagePageBreakType',
path: '/Docs/ImagePageBreakType/'
},
{
title: 'TextVariables',
path: '/Docs/TextVariables/'
},
{
title: 'NestedGrepStyle',
path: '/Docs/NestedGrepStyle/'
},
{
title: 'RowTypes',
path: '/Docs/RowTypes/'
},
{
title: 'OpacityGradientStops',
path: '/Docs/OpacityGradientStops/'
},
{
title: 'FitOptions',
path: '/Docs/FitOptions/'
},
{
title: 'FindChangeSatinSetting',
path: '/Docs/FindChangeSatinSetting/'
},
{
title: 'PercentCombobox',
path: '/Docs/PercentCombobox/'
},
{
title: 'CheckboxControl',
path: '/Docs/CheckboxControl/'
},
{
title: 'RasterResolutionOptions',
path: '/Docs/RasterResolutionOptions/'
},
{
title: 'TrapPreset',
path: '/Docs/TrapPreset/'
},
{
title: 'RuleDataType',
path: '/Docs/RuleDataType/'
},
{
title: 'MoviePlayOperations',
path: '/Docs/MoviePlayOperations/'
},
{
title: 'DisplaySetting',
path: '/Docs/DisplaySetting/'
},
{
title: 'AnchoredRelativeTo',
path: '/Docs/AnchoredRelativeTo/'
},
{
title: 'PDFComments',
path: '/Docs/PDFComments/'
},
{
title: 'FeatherSetting',
path: '/Docs/FeatherSetting/'
},
{
title: 'SpanColumnTypeOptions',
path: '/Docs/SpanColumnTypeOptions/'
},
{
title: 'TableStyleGroups',
path: '/Docs/TableStyleGroups/'
},
{
title: 'HyperlinkPageItemSource',
path: '/Docs/HyperlinkPageItemSource/'
},
{
title: 'PageSideOptions',
path: '/Docs/PageSideOptions/'
},
{
title: 'FormFields',
path: '/Docs/FormFields/'
},
{
title: 'MoviePosterTypes',
path: '/Docs/MoviePosterTypes/'
},
{
title: 'CommentStatusEnum',
path: '/Docs/CommentStatusEnum/'
},
{
title: 'BevelAndEmbossDirection',
path: '/Docs/BevelAndEmbossDirection/'
},
{
title: 'Image',
path: '/Docs/Image/'
},
{
title: 'ArrowHeadAlignmentEnum',
path: '/Docs/ArrowHeadAlignmentEnum/'
},
{
title: 'ChangeMarkings',
path: '/Docs/ChangeMarkings/'
},
{
title: 'PreflightRuleFlag',
path: '/Docs/PreflightRuleFlag/'
},
{
title: 'TextFrame',
path: '/Docs/TextFrame/'
},
{
title: 'AutoSizingTypeEnum',
path: '/Docs/AutoSizingTypeEnum/'
},
{
title: 'CustomLayoutTypeEnum',
path: '/Docs/CustomLayoutTypeEnum/'
},
{
title: 'FindChangeTextOption',
path: '/Docs/FindChangeTextOption/'
},
{
title: 'GoToZoomOptions',
path: '/Docs/GoToZoomOptions/'
},
{
title: 'LinkedStoryOption',
path: '/Docs/LinkedStoryOption/'
},
{
title: 'ComboBox',
path: '/Docs/ComboBox/'
},
{
title: 'Rows',
path: '/Docs/Rows/'
},
{
title: 'RadiobuttonGroups',
path: '/Docs/RadiobuttonGroups/'
},
{
title: 'PDFExportPresets',
path: '/Docs/PDFExportPresets/'
},
{
title: 'GotoLastPageBehaviors',
path: '/Docs/GotoLastPageBehaviors/'
},
{
title: 'Rectangle',
path: '/Docs/Rectangle/'
},
{
title: 'AngleEditboxes',
path: '/Docs/AngleEditboxes/'
},
{
title: 'MapType',
path: '/Docs/MapType/'
},
{
title: 'DocumentEvent',
path: '/Docs/DocumentEvent/'
},
{
title: 'PrintEvent',
path: '/Docs/PrintEvent/'
},
{
title: 'HeaderFooterBreakTypes',
path: '/Docs/HeaderFooterBreakTypes/'
},
{
title: 'IntegerEditboxes',
path: '/Docs/IntegerEditboxes/'
},
{
title: 'GotoNextPageBehaviors',
path: '/Docs/GotoNextPageBehaviors/'
},
{
title: 'HyperlinkTextSources',
path: '/Docs/HyperlinkTextSources/'
},
{
title: 'EndCap',
path: '/Docs/EndCap/'
},
{
title: 'Languages',
path: '/Docs/Languages/'
},
{
title: 'HTMLFXLExportPreference',
path: '/Docs/HTMLFXLExportPreference/'
},
{
title: 'GotoPreviousViewBehavior',
path: '/Docs/GotoPreviousViewBehavior/'
},
{
title: 'RubyTypes',
path: '/Docs/RubyTypes/'
},
{
title: 'SVGs',
path: '/Docs/SVGs/'
},
{
title: 'Graphic',
path: '/Docs/Graphic/'
},
{
title: 'BaselineFrameGridOption',
path: '/Docs/BaselineFrameGridOption/'
},
{
title: 'KinsokuType',
path: '/Docs/KinsokuType/'
},
{
title: 'ConvertTablesOptions',
path: '/Docs/ConvertTablesOptions/'
},
{
title: 'GotoPreviousPageBehavior',
path: '/Docs/GotoPreviousPageBehavior/'
},
{
title: 'Sounds',
path: '/Docs/Sounds/'
},
{
title: 'FillTransparencySetting',
path: '/Docs/FillTransparencySetting/'
},
{
title: 'TagTextForm',
path: '/Docs/TagTextForm/'
},
{
title: 'EndnoteTextFrame',
path: '/Docs/EndnoteTextFrame/'
},
{
title: 'Dialog',
path: '/Docs/Dialog/'
},
{
title: 'ImageIOPreference',
path: '/Docs/ImageIOPreference/'
},
{
title: 'BuildingBlockTypes',
path: '/Docs/BuildingBlockTypes/'
},
{
title: 'IndexSections',
path: '/Docs/IndexSections/'
},
{
title: 'DataMergeImagePlaceholders',
path: '/Docs/DataMergeImagePlaceholders/'
},
{
title: 'TypeContextualUiPreference',
path: '/Docs/TypeContextualUiPreference/'
},
{
title: 'PreviewSizeOptions',
path: '/Docs/PreviewSizeOptions/'
},
{
title: 'Preference',
path: '/Docs/Preference/'
},
{
title: 'CellStyle',
path: '/Docs/CellStyle/'
},
{
title: 'FloatingWindowPosition',
path: '/Docs/FloatingWindowPosition/'
},
{
title: 'HyperlinkAppearanceHighlight',
path: '/Docs/HyperlinkAppearanceHighlight/'
},
{
title: 'LockStateValues',
path: '/Docs/LockStateValues/'
},
{
title: 'AlignOptions',
path: '/Docs/AlignOptions/'
},
{
title: 'CaptionMetadataVariablePreference',
path: '/Docs/CaptionMetadataVariablePreference/'
},
{
title: 'Oval',
path: '/Docs/Oval/'
},
{
title: 'Cell',
path: '/Docs/Cell/'
},
{
title: 'CheckBoxes',
path: '/Docs/CheckBoxes/'
},
{
title: 'MenuElements',
path: '/Docs/MenuElements/'
},
{
title: 'BackgroundTask',
path: '/Docs/BackgroundTask/'
},
{
title: 'MovieBehavior',
path: '/Docs/MovieBehavior/'
},
{
title: 'ChangeObjectPreference',
path: '/Docs/ChangeObjectPreference/'
},
{
title: 'StrokeFillProxySetting',
path: '/Docs/StrokeFillProxySetting/'
},
{
title: 'PreflightOption',
path: '/Docs/PreflightOption/'
},
{
title: 'EventPhases',
path: '/Docs/EventPhases/'
},
{
title: 'CellStyleGroups',
path: '/Docs/CellStyleGroups/'
},
{
title: 'MetadataPreference',
path: '/Docs/MetadataPreference/'
},
{
title: 'EndnoteRange',
path: '/Docs/EndnoteRange/'
},
{
title: 'TextFrameContents',
path: '/Docs/TextFrameContents/'
},
{
title: 'WatermarkVerticalPositionEnum',
path: '/Docs/WatermarkVerticalPositionEnum/'
},
{
title: 'XMLImportStyles',
path: '/Docs/XMLImportStyles/'
},
{
title: 'Reply',
path: '/Docs/Reply/'
},
{
title: 'IntegerComboboxes',
path: '/Docs/IntegerComboboxes/'
},
{
title: 'Row',
path: '/Docs/Row/'
},
{
title: 'FindObjectPreference',
path: '/Docs/FindObjectPreference/'
},
{
title: 'Stories',
path: '/Docs/Stories/'
},
{
title: 'ColorGroupSwatches',
path: '/Docs/ColorGroupSwatches/'
},
{
title: 'PlacedVectorProfilePolicy',
path: '/Docs/PlacedVectorProfilePolicy/'
},
{
title: 'TextDefault',
path: '/Docs/TextDefault/'
},
{
title: 'RubyAlignments',
path: '/Docs/RubyAlignments/'
},
{
title: 'ParagraphJustificationOptions',
path: '/Docs/ParagraphJustificationOptions/'
},
{
title: 'HyperlinkExternalPageDestinations',
path: '/Docs/HyperlinkExternalPageDestinations/'
},
{
title: 'TableStyles',
path: '/Docs/TableStyles/'
},
{
title: 'FindChangeStrokeTransparencySetting',
path: '/Docs/FindChangeStrokeTransparencySetting/'
},
{
title: 'FindChangeGrepOption',
path: '/Docs/FindChangeGrepOption/'
},
{
title: 'CellTypeEnum',
path: '/Docs/CellTypeEnum/'
},
{
title: 'Rectangles',
path: '/Docs/Rectangles/'
},
{
title: 'RubyParentSpacing',
path: '/Docs/RubyParentSpacing/'
},
{
title: 'IdleTasks',
path: '/Docs/IdleTasks/'
},
{
title: 'ParagraphDestination',
path: '/Docs/ParagraphDestination/'
},
{
title: 'ProofingType',
path: '/Docs/ProofingType/'
},
{
title: 'FindChangeOuterGlowSetting',
path: '/Docs/FindChangeOuterGlowSetting/'
},
{
title: 'NumberingRestartPolicy',
path: '/Docs/NumberingRestartPolicy/'
},
{
title: 'FindChangeFeatherSetting',
path: '/Docs/FindChangeFeatherSetting/'
},
{
title: 'WatermarkPreference',
path: '/Docs/WatermarkPreference/'
},
{
title: 'RecordsPerPage',
path: '/Docs/RecordsPerPage/'
},
{
title: 'TagTransparency',
path: '/Docs/TagTransparency/'
},
{
title: 'TextWrapModes',
path: '/Docs/TextWrapModes/'
},
{
title: 'PanelLayoutResize',
path: '/Docs/PanelLayoutResize/'
},
{
title: 'TimingGroup',
path: '/Docs/TimingGroup/'
},
{
title: 'GuideTypeOptions',
path: '/Docs/GuideTypeOptions/'
},
{
title: 'GraphicLine',
path: '/Docs/GraphicLine/'
},
{
title: 'AlignDistributePreference',
path: '/Docs/AlignDistributePreference/'
},
{
title: 'CellStyleGroup',
path: '/Docs/CellStyleGroup/'
},
{
title: 'CommentTypeEnum',
path: '/Docs/CommentTypeEnum/'
},
{
title: 'ChapterNumberPreference',
path: '/Docs/ChapterNumberPreference/'
},
{
title: 'AlignDistributeBounds',
path: '/Docs/AlignDistributeBounds/'
},
{
title: 'Layer',
path: '/Docs/Layer/'
},
{
title: 'Condition',
path: '/Docs/Condition/'
},
{
title: 'ScriptLanguage',
path: '/Docs/ScriptLanguage/'
},
{
title: 'BlendingSpace',
path: '/Docs/BlendingSpace/'
},
{
title: 'VersionState',
path: '/Docs/VersionState/'
},
{
title: 'Notes',
path: '/Docs/Notes/'
},
{
title: 'PageNumberStyle',
path: '/Docs/PageNumberStyle/'
},
{
title: 'Button',
path: '/Docs/Button/'
},
{
title: 'FeatherCornerType',
path: '/Docs/FeatherCornerType/'
},
{
title: 'OuterGlowSetting',
path: '/Docs/OuterGlowSetting/'
},
{
title: 'Bookmarks',
path: '/Docs/Bookmarks/'
},
{
title: 'PreflightProcesses',
path: '/Docs/PreflightProcesses/'
},
{
title: 'Hyperlinks',
path: '/Docs/Hyperlinks/'
},
{
title: 'MixedInkGroup',
path: '/Docs/MixedInkGroup/'
},
{
title: 'CjkGridPreference',
path: '/Docs/CjkGridPreference/'
},
{
title: 'CharacterDirectionOptions',
path: '/Docs/CharacterDirectionOptions/'
},
{
title: 'PreflightRules',
path: '/Docs/PreflightRules/'
},
{
title: 'StartParagraph',
path: '/Docs/StartParagraph/'
},
{
title: 'AngleComboboxes',
path: '/Docs/AngleComboboxes/'
},
{
title: 'DTD',
path: '/Docs/DTD/'
},
{
title: 'PaperSize',
path: '/Docs/PaperSize/'
},
{
title: 'PdfDisplayTitleOptions',
path: '/Docs/PdfDisplayTitleOptions/'
},
{
title: 'Link',
path: '/Docs/Link/'
},
{
title: 'LanguageWithVendors',
path: '/Docs/LanguageWithVendors/'
},
{
title: 'MatchParagraphStylePreference',
path: '/Docs/MatchParagraphStylePreference/'
},
{
title: 'Profile',
path: '/Docs/Profile/'
},
{
title: 'PrintPageOrientation',
path: '/Docs/PrintPageOrientation/'
},
{
title: 'EPSText',
path: '/Docs/EPSText/'
},
{
title: 'XMLItem',
path: '/Docs/XMLItem/'
},
{
title: 'GridAlignment',
path: '/Docs/GridAlignment/'
},
{
title: 'index.md',
path: '/Docs/index.md/'
},
{
title: 'TransparencyPreference',
path: '/Docs/TransparencyPreference/'
},
{
title: 'Texts',
path: '/Docs/Texts/'
},
{
title: 'StrokeFillTargetOptions',
path: '/Docs/StrokeFillTargetOptions/'
},
{
title: 'PDFExportPreference',
path: '/Docs/PDFExportPreference/'
},
{
title: 'XMLTransformFile',
path: '/Docs/XMLTransformFile/'
},
{
title: 'StaticText',
path: '/Docs/StaticText/'
},
{
title: 'ExportRangeOrAllPages',
path: '/Docs/ExportRangeOrAllPages/'
},
{
title: 'Line',
path: '/Docs/Line/'
},
{
title: 'PrinterPreset',
path: '/Docs/PrinterPreset/'
},
{
title: 'Table',
path: '/Docs/Table/'
},
{
title: 'TagType',
path: '/Docs/TagType/'
},
{
title: 'TextVariableInstances',
path: '/Docs/TextVariableInstances/'
},
{
title: 'Colors',
path: '/Docs/Colors/'
},
{
title: 'Links',
path: '/Docs/Links/'
},
{
title: 'HorizontalAlignment',
path: '/Docs/HorizontalAlignment/'
},
{
title: 'AlternateGlyphForms',
path: '/Docs/AlternateGlyphForms/'
},
{
title: 'HyperlinkAppearanceStyle',
path: '/Docs/HyperlinkAppearanceStyle/'
},
{
title: 'PNGExportPreference',
path: '/Docs/PNGExportPreference/'
},
{
title: 'PerformanceMetricOptions',
path: '/Docs/PerformanceMetricOptions/'
},
{
title: 'FindTextPreference',
path: '/Docs/FindTextPreference/'
},
{
title: 'ThreadedTextFrameTextOptions',
path: '/Docs/ThreadedTextFrameTextOptions/'
},
{
title: 'ObjectStyleStrokeEffectsCategorySettings',
path: '/Docs/ObjectStyleStrokeEffectsCategorySettings/'
},
{
title: 'Behaviors',
path: '/Docs/Behaviors/'
},
{
title: 'CornerOptions',
path: '/Docs/CornerOptions/'
},
{
title: 'PNGExportRangeEnum',
path: '/Docs/PNGExportRangeEnum/'
},
{
title: 'PathType',
path: '/Docs/PathType/'
},
{
title: 'Guides',
path: '/Docs/Guides/'
},
{
title: 'SoundBehaviors',
path: '/Docs/SoundBehaviors/'
},
{
title: 'EPubFixedLayoutExportPreference',
path: '/Docs/EPubFixedLayoutExportPreference/'
},
{
title: 'PathPoint',
path: '/Docs/PathPoint/'
},
{
title: 'SoundBehavior',
path: '/Docs/SoundBehavior/'
},
{
title: 'VerticallyRelativeTo',
path: '/Docs/VerticallyRelativeTo/'
},
{
title: 'AnchorPoint',
path: '/Docs/AnchorPoint/'
},
{
title: 'Window',
path: '/Docs/Window/'
},
{
title: 'BevelAndEmbossSetting',
path: '/Docs/BevelAndEmbossSetting/'
},
{
title: 'NavigationPoint',
path: '/Docs/NavigationPoint/'
},
{
title: 'FindChangeTransliterateCharacterTypes',
path: '/Docs/FindChangeTransliterateCharacterTypes/'
},
{
title: 'ContentType',
path: '/Docs/ContentType/'
},
{
title: 'Sequences',
path: '/Docs/Sequences/'
},
{
title: 'Swatches',
path: '/Docs/Swatches/'
},
{
title: 'PPDValues',
path: '/Docs/PPDValues/'
},
{
title: 'ObjectStyleExportTagMap',
path: '/Docs/ObjectStyleExportTagMap/'
},
{
title: 'Bullet',
path: '/Docs/Bullet/'
},
{
title: 'PercentComboboxes',
path: '/Docs/PercentComboboxes/'
},
{
title: 'ChangeGrepPreference',
path: '/Docs/ChangeGrepPreference/'
},
{
title: 'PDFJPEGQualityOptions',
path: '/Docs/PDFJPEGQualityOptions/'
},
{
title: 'VariableTypes',
path: '/Docs/VariableTypes/'
},
{
title: 'HyperlinkTextDestinations',
path: '/Docs/HyperlinkTextDestinations/'
},
{
title: 'ColorGroupSwatch',
path: '/Docs/ColorGroupSwatch/'
},
{
title: 'CharacterStyleGroup',
path: '/Docs/CharacterStyleGroup/'
},
{
title: 'ClearFormBehaviors',
path: '/Docs/ClearFormBehaviors/'
},
{
title: 'ToolBox',
path: '/Docs/ToolBox/'
},
{
title: 'HyperlinkDestinationPageSetting',
path: '/Docs/HyperlinkDestinationPageSetting/'
},
{
title: 'CrossReferences',
path: '/Docs/CrossReferences/'
},
{
title: 'FolioBindingDirectionOptions',
path: '/Docs/FolioBindingDirectionOptions/'
},
{
title: 'FileNameVariablePreference',
path: '/Docs/FileNameVariablePreference/'
},
{
title: 'NestedGrepStyles',
path: '/Docs/NestedGrepStyles/'
},
{
title: 'ViewZoomStyle',
path: '/Docs/ViewZoomStyle/'
},
{
title: 'XMLInstructions',
path: '/Docs/XMLInstructions/'
},
{
title: 'Menu',
path: '/Docs/Menu/'
},
{
title: 'NestedStyle',
path: '/Docs/NestedStyle/'
},
{
title: 'States',
path: '/Docs/States/'
},
{
title: 'JPEGExportPreference',
path: '/Docs/JPEGExportPreference/'
},
{
title: 'ExportFormat',
path: '/Docs/ExportFormat/'
},
{
title: 'Spacing',
path: '/Docs/Spacing/'
},
{
title: 'WarichuAlignment',
path: '/Docs/WarichuAlignment/'
},
{
title: 'Conditions',
path: '/Docs/Conditions/'
},
{
title: 'PreflightScopeOptions',
path: '/Docs/PreflightScopeOptions/'
},
{
title: 'RadiobuttonGroup',
path: '/Docs/RadiobuttonGroup/'
},
{
title: 'TextVariableInstance',
path: '/Docs/TextVariableInstance/'
},
{
title: 'SignatureFields',
path: '/Docs/SignatureFields/'
},
{
title: 'JpegColorSpaceEnum',
path: '/Docs/JpegColorSpaceEnum/'
},
{
title: 'ClippingPathSettings',
path: '/Docs/ClippingPathSettings/'
},
{
title: 'Book',
path: '/Docs/Book/'
},
{
title: 'IndexingSortOptions',
path: '/Docs/IndexingSortOptions/'
},
{
title: 'ImageDataTypes',
path: '/Docs/ImageDataTypes/'
},
{
title: 'ImageFormat',
path: '/Docs/ImageFormat/'
},
{
title: 'XMLPreference',
path: '/Docs/XMLPreference/'
},
{
title: 'NotePreference',
path: '/Docs/NotePreference/'
},
{
title: 'PointType',
path: '/Docs/PointType/'
},
{
title: 'CharacterStyles',
path: '/Docs/CharacterStyles/'
},
{
title: 'LanguagesWithVendors',
path: '/Docs/LanguagesWithVendors/'
},
{
title: 'NestedStyles',
path: '/Docs/NestedStyles/'
},
{
title: 'ViewZoomBehaviors',
path: '/Docs/ViewZoomBehaviors/'
},
{
title: 'ArticleChild',
path: '/Docs/ArticleChild/'
},
{
title: 'DistributeOptions',
path: '/Docs/DistributeOptions/'
},
{
title: 'AntiAliasType',
path: '/Docs/AntiAliasType/'
},
{
title: 'Footnotes',
path: '/Docs/Footnotes/'
},
{
title: 'FootnoteOption',
path: '/Docs/FootnoteOption/'
},
{
title: 'PreflightLayerOptions',
path: '/Docs/PreflightLayerOptions/'
},
{
title: 'TransformAttributeOption',
path: '/Docs/TransformAttributeOption/'
},
{
title: 'Movies',
path: '/Docs/Movies/'
},
{
title: 'DigpubVersion',
path: '/Docs/DigpubVersion/'
},
{
title: 'ScriptMenuAction',
path: '/Docs/ScriptMenuAction/'
},
{
title: 'ComboBoxes',
path: '/Docs/ComboBoxes/'
},
{
title: 'EPubExportPreference',
path: '/Docs/EPubExportPreference/'
},
{
title: 'ListType',
path: '/Docs/ListType/'
},
{
title: 'Word',
path: '/Docs/Word/'
},
{
title: 'PageReferences',
path: '/Docs/PageReferences/'
},
{
title: 'GotoPreviousPageBehaviors',
path: '/Docs/GotoPreviousPageBehaviors/'
},
{
title: 'ChangeConditionsModes',
path: '/Docs/ChangeConditionsModes/'
},
{
title: 'MasterSpread',
path: '/Docs/MasterSpread/'
},
{
title: 'DimensionsConstraints',
path: '/Docs/DimensionsConstraints/'
},
{
title: 'HttpLinkConnectionManagerObject',
path: '/Docs/HttpLinkConnectionManagerObject/'
},
{
title: 'Menus',
path: '/Docs/Menus/'
},
{
title: 'TextEditboxes',
path: '/Docs/TextEditboxes/'
},
{
title: 'FlattenerLevel',
path: '/Docs/FlattenerLevel/'
},
{
title: 'ColorGroup',
path: '/Docs/ColorGroup/'
},
{
title: 'VariableNumberingStyles',
path: '/Docs/VariableNumberingStyles/'
},
{
title: 'ArrowHead',
path: '/Docs/ArrowHead/'
},
{
title: 'MediaItems',
path: '/Docs/MediaItems/'
},
{
title: 'FindGlyphPreference',
path: '/Docs/FindGlyphPreference/'
},
{
title: 'FindChangeBlendingSetting',
path: '/Docs/FindChangeBlendingSetting/'
},
{
title: 'MenuItems',
path: '/Docs/MenuItems/'
},
{
title: 'MonoBitmapCompression',
path: '/Docs/MonoBitmapCompression/'
},
{
title: 'PDFs',
path: '/Docs/PDFs/'
},
{
title: 'TransformationMatrix',
path: '/Docs/TransformationMatrix/'
},
{
title: 'XMLTags',
path: '/Docs/XMLTags/'
},
{
title: 'EPS',
path: '/Docs/EPS/'
},
{
title: 'SizeTypeEnum',
path: '/Docs/SizeTypeEnum/'
},
{
title: 'Index',
path: '/Docs/Index/'
},
{
title: 'SmoothScrollingOptions',
path: '/Docs/SmoothScrollingOptions/'
},
{
title: 'TransformPositionReference',
path: '/Docs/TransformPositionReference/'
},
{
title: 'FontEmbedding',
path: '/Docs/FontEmbedding/'
},
{
title: 'ParagraphStyle',
path: '/Docs/ParagraphStyle/'
},
{
title: 'Dialogs',
path: '/Docs/Dialogs/'
},
{
title: 'ParagraphBorderTopOriginEnum',
path: '/Docs/ParagraphBorderTopOriginEnum/'
},
{
title: 'XMLImportMap',
path: '/Docs/XMLImportMap/'
},
{
title: 'FeatherMode',
path: '/Docs/FeatherMode/'
},
{
title: 'StrokeOrderTypes',
path: '/Docs/StrokeOrderTypes/'
},
{
title: 'XMLAttributes',
path: '/Docs/XMLAttributes/'
},
{
title: 'ValidationError',
path: '/Docs/ValidationError/'
},
{
title: 'EndnoteTextFrames',
path: '/Docs/EndnoteTextFrames/'
},
{
title: 'PageNumberPosition',
path: '/Docs/PageNumberPosition/'
},
{
title: 'ListBoxes',
path: '/Docs/ListBoxes/'
},
{
title: 'ShadowMode',
path: '/Docs/ShadowMode/'
},
{
title: 'PageReference',
path: '/Docs/PageReference/'
},
{
title: 'IndexCapitalizationOptions',
path: '/Docs/IndexCapitalizationOptions/'
},
{
title: 'VerticalAlignment',
path: '/Docs/VerticalAlignment/'
},
{
title: 'IdleTask',
path: '/Docs/IdleTask/'
},
{
title: 'XMLExportMap',
path: '/Docs/XMLExportMap/'
},
{
title: 'FindChangeColorOption',
path: '/Docs/FindChangeColorOption/'
},
{
title: 'HiddenText',
path: '/Docs/HiddenText/'
},
{
title: 'EnablingGroups',
path: '/Docs/EnablingGroups/'
},
{
title: 'BitmapCompression',
path: '/Docs/BitmapCompression/'
},
{
title: 'DialogRow',
path: '/Docs/DialogRow/'
},
{
title: 'RadioButtons',
path: '/Docs/RadioButtons/'
},
{
title: 'MarkLineWeight',
path: '/Docs/MarkLineWeight/'
},
{
title: 'GeneralPreference',
path: '/Docs/GeneralPreference/'
},
{
title: 'ParagraphBorderEnum',
path: '/Docs/ParagraphBorderEnum/'
},
{
title: 'SpellPreference',
path: '/Docs/SpellPreference/'
},
{
title: 'ChapterNumberVariablePreference',
path: '/Docs/ChapterNumberVariablePreference/'
},
{
title: 'SelectAll',
path: '/Docs/SelectAll/'
},
{
title: 'StoryHorizontalOrVertical',
path: '/Docs/StoryHorizontalOrVertical/'
},
{
title: 'BevelAndEmbossTechnique',
path: '/Docs/BevelAndEmbossTechnique/'
},
{
title: 'WhenScalingOptions',
path: '/Docs/WhenScalingOptions/'
},
{
title: 'ConvertPageBreaks',
path: '/Docs/ConvertPageBreaks/'
},
{
title: 'TagTextExportCharacterSet',
path: '/Docs/TagTextExportCharacterSet/'
},
{
title: 'Screeening',
path: '/Docs/Screeening/'
},
{
title: 'SingleWordJustification',
path: '/Docs/SingleWordJustification/'
},
{
title: 'TextExportCharacterSet',
path: '/Docs/TextExportCharacterSet/'
},
{
title: 'DefaultRenderingIntent',
path: '/Docs/DefaultRenderingIntent/'
},
{
title: 'GotoPageBehaviors',
path: '/Docs/GotoPageBehaviors/'
},
{
title: 'ParagraphShadingWidthEnum',
path: '/Docs/ParagraphShadingWidthEnum/'
},
{
title: 'TilingTypes',
path: '/Docs/TilingTypes/'
},
{
title: 'EPSTexts',
path: '/Docs/EPSTexts/'
},
{
title: 'GradientType',
path: '/Docs/GradientType/'
},
{
title: 'PublishCoverEnum',
path: '/Docs/PublishCoverEnum/'
},
{
title: 'AnchorPosition',
path: '/Docs/AnchorPosition/'
},
{
title: 'FindChangeDirectionalFeatherSetting',
path: '/Docs/FindChangeDirectionalFeatherSetting/'
},
{
title: 'AssignmentExportOptions',
path: '/Docs/AssignmentExportOptions/'
},
{
title: 'RuleDataObject',
path: '/Docs/RuleDataObject/'
},
{
title: 'KentenCharacter',
path: '/Docs/KentenCharacter/'
},
{
title: 'SpreadFlattenerLevel',
path: '/Docs/SpreadFlattenerLevel/'
},
{
title: 'ClearFormBehavior',
path: '/Docs/ClearFormBehavior/'
},
{
title: 'AlignmentStyleOptions',
path: '/Docs/AlignmentStyleOptions/'
},
{
title: 'LibraryPanelViews',
path: '/Docs/LibraryPanelViews/'
},
{
title: 'NamedGrids',
path: '/Docs/NamedGrids/'
},
{
title: 'TransparencySetting',
path: '/Docs/TransparencySetting/'
},
{
title: 'TimingList',
path: '/Docs/TimingList/'
},
{
title: 'FontStatus',
path: '/Docs/FontStatus/'
},
{
title: 'SplineItems',
path: '/Docs/SplineItems/'
},
{
title: 'SmartMatchOptions',
path: '/Docs/SmartMatchOptions/'
},
{
title: 'CharStyleMappings',
path: '/Docs/CharStyleMappings/'
},
{
title: 'PageItems',
path: '/Docs/PageItems/'
},
{
title: 'SplineItem',
path: '/Docs/SplineItem/'
},
{
title: 'FlattenerPresets',
path: '/Docs/FlattenerPresets/'
},
{
title: 'CompositeFont',
path: '/Docs/CompositeFont/'
},
{
title: 'TaskState',
path: '/Docs/TaskState/'
},
{
title: 'ResizeMethods',
path: '/Docs/ResizeMethods/'
},
{
title: 'PathTypeAlignments',
path: '/Docs/PathTypeAlignments/'
},
{
title: 'Documents',
path: '/Docs/Documents/'
},
{
title: 'CharStyleMapping',
path: '/Docs/CharStyleMapping/'
},
{
title: 'PageRange',
path: '/Docs/PageRange/'
},
{
title: 'Ovals',
path: '/Docs/Ovals/'
},
{
title: 'NumberingList',
path: '/Docs/NumberingList/'
},
{
title: 'HeaderTypes',
path: '/Docs/HeaderTypes/'
},
{
title: 'ZoomOptions',
path: '/Docs/ZoomOptions/'
},
{
title: 'ChangeColorPreference',
path: '/Docs/ChangeColorPreference/'
},
{
title: 'Text',
path: '/Docs/Text/'
},
{
title: 'Columns',
path: '/Docs/Columns/'
},
{
title: 'SubmitFormBehaviors',
path: '/Docs/SubmitFormBehaviors/'
},
{
title: 'BookContentStatus',
path: '/Docs/BookContentStatus/'
},
{
title: 'XMLComment',
path: '/Docs/XMLComment/'
},
{
title: 'Application',
path: '/Docs/Application/'
},
{
title: 'DataMergePreference',
path: '/Docs/DataMergePreference/'
},
{
title: 'ArticleChildren',
path: '/Docs/ArticleChildren/'
},
{
title: 'StoryDirectionOptions',
path: '/Docs/StoryDirectionOptions/'
},
{
title: 'Font',
path: '/Docs/Font/'
},
{
title: 'RuleWidth',
path: '/Docs/RuleWidth/'
},
{
title: 'ChangeBackgroundColorChoices',
path: '/Docs/ChangeBackgroundColorChoices/'
},
{
title: 'RecordSelection',
path: '/Docs/RecordSelection/'
},
{
title: 'FindChangeDropShadowSetting',
path: '/Docs/FindChangeDropShadowSetting/'
},
{
title: 'ConvertShapeOptions',
path: '/Docs/ConvertShapeOptions/'
},
{
title: 'MatrixContent',
path: '/Docs/MatrixContent/'
},
{
title: 'Spreads',
path: '/Docs/Spreads/'
},
{
title: 'HyperlinkPageDestination',
path: '/Docs/HyperlinkPageDestination/'
},
{
title: 'PlaceGun',
path: '/Docs/PlaceGun/'
},
{
title: 'Article',
path: '/Docs/Article/'
},
{
title: 'EPubExportPreviewAppPreference',
path: '/Docs/EPubExportPreviewAppPreference/'
},
{
title: 'MojikumiTable',
path: '/Docs/MojikumiTable/'
},
{
title: 'BulletListExportOption',
path: '/Docs/BulletListExportOption/'
},
{
title: 'EpubNavigationStyle',
path: '/Docs/EpubNavigationStyle/'
},
{
title: 'OutlineJoin',
path: '/Docs/OutlineJoin/'
},
{
title: 'TableFormattingOptions',
path: '/Docs/TableFormattingOptions/'
},
{
title: 'PreflightProfiles',
path: '/Docs/PreflightProfiles/'
},
{
title: 'Submenu',
path: '/Docs/Submenu/'
},
{
title: 'ExportPresetFormat',
path: '/Docs/ExportPresetFormat/'
},
{
title: 'ScaleModes',
path: '/Docs/ScaleModes/'
},
{
title: 'Dropdowns',
path: '/Docs/Dropdowns/'
},
{
title: 'PageNumberingOptions',
path: '/Docs/PageNumberingOptions/'
},
{
title: 'MultiStateObject',
path: '/Docs/MultiStateObject/'
},
{
title: 'XMLElement',
path: '/Docs/XMLElement/'
},
{
title: 'Windows',
path: '/Docs/Windows/'
},
{
title: 'PositionAttributes',
path: '/Docs/PositionAttributes/'
},
{
title: 'SpanColumnCountOptions',
path: '/Docs/SpanColumnCountOptions/'
},
{
title: 'PageRangeFormat',
path: '/Docs/PageRangeFormat/'
},
{
title: 'MasterSpreads',
path: '/Docs/MasterSpreads/'
},
{
title: 'PageReferenceType',
path: '/Docs/PageReferenceType/'
},
{
title: 'Events',
path: '/Docs/Events/'
},
{
title: 'ColorOutputModes',
path: '/Docs/ColorOutputModes/'
},
{
title: 'DynamicMediaHandlingOptions',
path: '/Docs/DynamicMediaHandlingOptions/'
},
{
title: 'Characters',
path: '/Docs/Characters/'
},
{
title: 'OpenFileBehavior',
path: '/Docs/OpenFileBehavior/'
},
{
title: 'Gradients',
path: '/Docs/Gradients/'
},
{
title: 'BaselineFrameGridRelativeOption',
path: '/Docs/BaselineFrameGridRelativeOption/'
},
{
title: 'AdjustLayoutPreference',
path: '/Docs/AdjustLayoutPreference/'
},
{
title: 'ViewPreference',
path: '/Docs/ViewPreference/'
},
{
title: 'Graphics',
path: '/Docs/Graphics/'
},
{
title: 'TextEditbox',
path: '/Docs/TextEditbox/'
},
{
title: 'FindChangeInnerShadowSetting',
path: '/Docs/FindChangeInnerShadowSetting/'
},
{
title: 'CursorTypes',
path: '/Docs/CursorTypes/'
},
{
title: 'GradientStops',
path: '/Docs/GradientStops/'
},
{
title: 'OpenTypeFeature',
path: '/Docs/OpenTypeFeature/'
},
{
title: 'TaskAlertType',
path: '/Docs/TaskAlertType/'
},
{
title: 'ImportExportEvent',
path: '/Docs/ImportExportEvent/'
},
{
title: 'ContainerType',
path: '/Docs/ContainerType/'
},
{
title: 'ExportOrder',
path: '/Docs/ExportOrder/'
},
{
title: 'Fonts',
path: '/Docs/Fonts/'
},
{
title: 'FontSyncPreference',
path: '/Docs/FontSyncPreference/'
},
{
title: 'FindChangeContentTransparencySetting',
path: '/Docs/FindChangeContentTransparencySetting/'
},
{
title: 'CellStyleMappings',
path: '/Docs/CellStyleMappings/'
},
{
title: 'ClipboardPreference',
path: '/Docs/ClipboardPreference/'
},
{
title: 'MenuActions',
path: '/Docs/MenuActions/'
},
{
title: 'BackgroundTasks',
path: '/Docs/BackgroundTasks/'
},
{
title: 'CellStyles',
path: '/Docs/CellStyles/'
},
{
title: 'TransformationMatrices',
path: '/Docs/TransformationMatrices/'
},
{
title: 'PageNumberVariablePreference',
path: '/Docs/PageNumberVariablePreference/'
},
{
title: 'ChangecaseMode',
path: '/Docs/ChangecaseMode/'
},
{
title: 'AdornmentOverprint',
path: '/Docs/AdornmentOverprint/'
},
{
title: 'FolioOrientationOptions',
path: '/Docs/FolioOrientationOptions/'
},
{
title: 'PDFProfileSelector',
path: '/Docs/PDFProfileSelector/'
},
{
title: 'ScriptArg',
path: '/Docs/ScriptArg/'
},
{
title: 'AnimationBehavior',
path: '/Docs/AnimationBehavior/'
},
{
title: 'DataMergeQrcodePlaceholders',
path: '/Docs/DataMergeQrcodePlaceholders/'
},
{
title: 'Assets',
path: '/Docs/Assets/'
},
{
title: 'Paragraphs',
path: '/Docs/Paragraphs/'
},
{
title: 'GotoURLBehaviors',
path: '/Docs/GotoURLBehaviors/'
},
{
title: 'Sound',
path: '/Docs/Sound/'
},
{
title: 'SnapshotBlendingModes',
path: '/Docs/SnapshotBlendingModes/'
},
{
title: 'Pages',
path: '/Docs/Pages/'
},
{
title: 'StrokeStyle',
path: '/Docs/StrokeStyle/'
},
{
title: 'ArrangeBy',
path: '/Docs/ArrangeBy/'
},
{
title: 'RenderingIntent',
path: '/Docs/RenderingIntent/'
},
{
title: 'PageLayoutOptions',
path: '/Docs/PageLayoutOptions/'
},
{
title: 'ChangebarLocations',
path: '/Docs/ChangebarLocations/'
},
{
title: 'PreflightProfileOptions',
path: '/Docs/PreflightProfileOptions/'
},
{
title: 'CrossReferenceFormats',
path: '/Docs/CrossReferenceFormats/'
},
{
title: 'CharacterStyle',
path: '/Docs/CharacterStyle/'
},
{
title: 'RestartPolicy',
path: '/Docs/RestartPolicy/'
},
{
title: 'EPubFootnotePlacement',
path: '/Docs/EPubFootnotePlacement/'
},
{
title: 'FindChangeTransparencySetting',
path: '/Docs/FindChangeTransparencySetting/'
},
{
title: 'RuleDataObjects',
path: '/Docs/RuleDataObjects/'
},
{
title: 'DataMergeTextPlaceholder',
path: '/Docs/DataMergeTextPlaceholder/'
},
{
title: 'GridDataInformation',
path: '/Docs/GridDataInformation/'
},
{
title: 'NoteBackgrounds',
path: '/Docs/NoteBackgrounds/'
},
{
title: 'TextFrames',
path: '/Docs/TextFrames/'
},
{
title: 'EPSs',
path: '/Docs/EPSs/'
},
{
title: 'SearchModes',
path: '/Docs/SearchModes/'
},
{
title: 'Lines',
path: '/Docs/Lines/'
},
{
title: 'ImageAlignmentType',
path: '/Docs/ImageAlignmentType/'
},
{
title: 'EpubCover',
path: '/Docs/EpubCover/'
},
{
title: 'PDFAttribute',
path: '/Docs/PDFAttribute/'
},
{
title: 'DiacriticPositionOptions',
path: '/Docs/DiacriticPositionOptions/'
},
{
title: 'ArticleMember',
path: '/Docs/ArticleMember/'
},
{
title: 'Event',
path: '/Docs/Event/'
},
{
title: 'TextBox',
path: '/Docs/TextBox/'
},
{
title: 'XMLTag',
path: '/Docs/XMLTag/'
},
{
title: 'MixedInkGroups',
path: '/Docs/MixedInkGroups/'
},
{
title: 'Inks',
path: '/Docs/Inks/'
},
{
title: 'NoteColorChoices',
path: '/Docs/NoteColorChoices/'
},
{
title: 'TrackChangesPreference',
path: '/Docs/TrackChangesPreference/'
},
{
title: 'IconSizes',
path: '/Docs/IconSizes/'
},
{
title: 'NavigationPoints',
path: '/Docs/NavigationPoints/'
},
{
title: 'IMEPreference',
path: '/Docs/IMEPreference/'
},
{
title: 'ObjectStyleFillEffectsCategorySettings',
path: '/Docs/ObjectStyleFillEffectsCategorySettings/'
},
{
title: 'ParagraphStyles',
path: '/Docs/ParagraphStyles/'
},
{
title: 'DataFormat',
path: '/Docs/DataFormat/'
},
{
title: 'DropShadowSetting',
path: '/Docs/DropShadowSetting/'
},
{
title: 'PDFRasterCompressionOptions',
path: '/Docs/PDFRasterCompressionOptions/'
},
{
title: 'HtmlItems',
path: '/Docs/HtmlItems/'
},
{
title: 'MixedInk',
path: '/Docs/MixedInk/'
},
{
title: 'ConditionalTextPreference',
path: '/Docs/ConditionalTextPreference/'
},
{
title: 'IndexFormat',
path: '/Docs/IndexFormat/'
},
{
title: 'ParagraphDestinations',
path: '/Docs/ParagraphDestinations/'
},
{
title: 'GotoNextStateBehaviors',
path: '/Docs/GotoNextStateBehaviors/'
},
{
title: 'BookContent',
path: '/Docs/BookContent/'
},
{
title: 'XMLElementPosition',
path: '/Docs/XMLElementPosition/'
},
{
title: 'Footnote',
path: '/Docs/Footnote/'
},
{
title: 'DynamicDocumentsJPEGQualityOptions',
path: '/Docs/DynamicDocumentsJPEGQualityOptions/'
},
{
title: 'PageBindingOptions',
path: '/Docs/PageBindingOptions/'
},
{
title: 'DashedStrokeStyle',
path: '/Docs/DashedStrokeStyle/'
},
{
title: 'PrintLayerOptions',
path: '/Docs/PrintLayerOptions/'
},
{
title: 'TimingLists',
path: '/Docs/TimingLists/'
},
{
title: 'AddPageOptions',
path: '/Docs/AddPageOptions/'
},
{
title: 'UserDictionary',
path: '/Docs/UserDictionary/'
},
{
title: 'GalleyPreference',
path: '/Docs/GalleyPreference/'
},
{
title: 'XMLElementLocation',
path: '/Docs/XMLElementLocation/'
},
{
title: 'DataMergeOption',
path: '/Docs/DataMergeOption/'
},
{
title: 'TextBoxes',
path: '/Docs/TextBoxes/'
},
{
title: 'PercentEditbox',
path: '/Docs/PercentEditbox/'
},
{
title: 'DimensionAttributes',
path: '/Docs/DimensionAttributes/'
},
{
title: 'AnimationSetting',
path: '/Docs/AnimationSetting/'
},
{
title: 'WatermarkHorizontalPositionEnum',
path: '/Docs/WatermarkHorizontalPositionEnum/'
},
{
title: 'KinsokuTable',
path: '/Docs/KinsokuTable/'
},
{
title: 'BlendMode',
path: '/Docs/BlendMode/'
},
{
title: 'EndnoteFrameCreate',
path: '/Docs/EndnoteFrameCreate/'
},
{
title: 'TaggedPDFStructureOrderOptions',
path: '/Docs/TaggedPDFStructureOrderOptions/'
},
{
title: 'FlattenerPreference',
path: '/Docs/FlattenerPreference/'
},
{
title: 'Story',
path: '/Docs/Story/'
},
{
title: 'CrossReferenceSource',
path: '/Docs/CrossReferenceSource/'
},
{
title: 'ChapterNumberSources',
path: '/Docs/ChapterNumberSources/'
},
{
title: 'XMLElements',
path: '/Docs/XMLElements/'
},
{
title: 'Widgets',
path: '/Docs/Widgets/'
},
{
title: 'InnerGlowSource',
path: '/Docs/InnerGlowSource/'
},
{
title: 'RubyKentenPosition',
path: '/Docs/RubyKentenPosition/'
},
{
title: 'MotionPresets',
path: '/Docs/MotionPresets/'
},
{
title: 'ColorGroups',
path: '/Docs/ColorGroups/'
},
{
title: 'ParagraphShadingBottomOriginEnum',
path: '/Docs/ParagraphShadingBottomOriginEnum/'
},
{
title: 'LayoutGridDataInformation',
path: '/Docs/LayoutGridDataInformation/'
},
{
title: 'AnchoredObjectSetting',
path: '/Docs/AnchoredObjectSetting/'
},
{
title: 'AngleCombobox',
path: '/Docs/AngleCombobox/'
},
{
title: 'DialogColumn',
path: '/Docs/DialogColumn/'
},
{
title: 'TimingSetting',
path: '/Docs/TimingSetting/'
},
{
title: 'InCopyExportOption',
path: '/Docs/InCopyExportOption/'
},
{
title: 'ToolsPanelOptions',
path: '/Docs/ToolsPanelOptions/'
},
{
title: 'StateTypes',
path: '/Docs/StateTypes/'
},
{
title: 'ContourOptionsTypes',
path: '/Docs/ContourOptionsTypes/'
},
{
title: 'ShowHideFieldsBehaviors',
path: '/Docs/ShowHideFieldsBehaviors/'
},
{
title: 'FitMethodSettings',
path: '/Docs/FitMethodSettings/'
},
{
title: 'FindChangeBevelAndEmbossSetting',
path: '/Docs/FindChangeBevelAndEmbossSetting/'
},
{
title: 'RealEditboxes',
path: '/Docs/RealEditboxes/'
},
{
title: 'TextStyleRange',
path: '/Docs/TextStyleRange/'
},
{
title: 'MutationEvent',
path: '/Docs/MutationEvent/'
},
{
title: 'NamedGrid',
path: '/Docs/NamedGrid/'
},
{
title: 'StripedStrokeStyles',
path: '/Docs/StripedStrokeStyles/'
},
{
title: 'PanningTypes',
path: '/Docs/PanningTypes/'
},
{
title: 'PagePositions',
path: '/Docs/PagePositions/'
},
{
title: 'PageViewOptions',
path: '/Docs/PageViewOptions/'
},
{
title: 'Topics',
path: '/Docs/Topics/'
},
{
title: 'InteractiveElementsOptions',
path: '/Docs/InteractiveElementsOptions/'
},
{
title: 'CustomTextVariablePreference',
path: '/Docs/CustomTextVariablePreference/'
},
{
title: 'OverrideType',
path: '/Docs/OverrideType/'
},
{
title: 'ObjectStyleExportTagMaps',
path: '/Docs/ObjectStyleExportTagMaps/'
},
{
title: 'DocumentPreset',
path: '/Docs/DocumentPreset/'
},
{
title: 'FootnotePrefixSuffix',
path: '/Docs/FootnotePrefixSuffix/'
},
{
title: 'DateVariablePreference',
path: '/Docs/DateVariablePreference/'
},
{
title: 'MultiStateObjects',
path: '/Docs/MultiStateObjects/'
},
{
title: 'BorderPanels',
path: '/Docs/BorderPanels/'
},
{
title: 'PDFExportPreset',
path: '/Docs/PDFExportPreset/'
},
{
title: 'HyperlinkAppearanceWidth',
path: '/Docs/HyperlinkAppearanceWidth/'
},
{
title: 'KashidasOptions',
path: '/Docs/KashidasOptions/'
},
{
title: 'TextVariable',
path: '/Docs/TextVariable/'
},
{
title: 'TOCStyleEntries',
path: '/Docs/TOCStyleEntries/'
},
{
title: 'DisplayPerformancePreference',
path: '/Docs/DisplayPerformancePreference/'
},
{
title: 'FeatureSetOptions',
path: '/Docs/FeatureSetOptions/'
},
{
title: 'TextPath',
path: '/Docs/TextPath/'
},
{
title: 'Indexes',
path: '/Docs/Indexes/'
},
{
title: 'EventListener',
path: '/Docs/EventListener/'
},
{
title: 'TextStrokeAlign',
path: '/Docs/TextStrokeAlign/'
},
{
title: 'MeasurementEditboxes',
path: '/Docs/MeasurementEditboxes/'
},
{
title: 'StyleExportTagMap',
path: '/Docs/StyleExportTagMap/'
},
{
title: 'GridViewSettings',
path: '/Docs/GridViewSettings/'
},
{
title: 'PDFCrop',
path: '/Docs/PDFCrop/'
},
{
title: 'EpubFixedLayoutSpreadControl',
path: '/Docs/EpubFixedLayoutSpreadControl/'
},
{
title: 'TextColumn',
path: '/Docs/TextColumn/'
},
{
title: 'SatinSetting',
path: '/Docs/SatinSetting/'
},
{
title: 'TableDirectionOptions',
path: '/Docs/TableDirectionOptions/'
},
{
title: 'PercentEditboxes',
path: '/Docs/PercentEditboxes/'
},
{
title: 'GridPrintingPreference',
path: '/Docs/GridPrintingPreference/'
}

]

},
plugins: [`@adobe/gatsby-theme-aio`]

};
