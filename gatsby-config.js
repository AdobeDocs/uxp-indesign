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
  pathPrefix: process.env.PATH_PREFIX || '/indesign/uxp/scripting/',
  siteMetadata: {
    versions: [
      {
        title: 'v18.0',
        description: 'First verion supporting UXP',
        path: '/discover/',
        selected: true
      }
      // {
      //   title: 'v1.4',
      //   path: 'https://github.com/AdobeDocs/dev-site'
      // }
    ],
    pages: [
      {
        title: 'References',
        menu: [
          {
            title: 'InDesign API',
            description: 'Document Object Model',
            path: '/omv/'
          },
          {
            title: 'UXP API',
            description: 'UXP API Reference',
            path: '/uxp/'
          }
        ]
      },
      {
        title: 'Guides',
        menu: [
          {
            title: 'Guides',
            path: '/guides/'
          },
          {
            title: 'Getting Started',
            path: '/guides/getting-started/basics/'
          },
          {
            title: 'Debugging a Script',
            path: '/guides/debugging/'
          },
          {
            title: 'Migrating',
            path: '/guides/migrating-to-UXPScript/'
          },
          {
            title: 'Object Model',
            path: '/guides/object-modal/'
          },
          {
            title: 'Right to Left Scripting',
            path: '/guides/rtl-scripting/'
          },
          {
            title: 'IDJS File Association',
            path: '/guides/text-editor-association/'
          }
        ]
      },
      {
        title: 'Plugins',
        path: '/plugins/'
      },
      {
        title: 'InDesign Server',
        path: '/server/'
      },
      {
        title: 'Code Samples',
        path: '/uxp-scripting-samples/'
      },
      {
        title: 'Support',
        path: '/support/'
      },
          {
        title: 'Community',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Get Started',
        path: '/guides/',
        pages: [
          {
            title: 'Getting Started',
            path: '/guides/getting-started/basics/'
          },
          {
            title: 'Debugging a Script',
            path: '/guides/debugging/'
          },
          {
            title: 'Migrating',
            path: '/guides/migrating-to-UXPScript/'
          },
          {
            title: 'Object Model',
            path: '/guides/object-modal/'
          },
          {
            title: 'Right to Left Scripting',
            path: '/guides/rtl-scripting/'
          },
          {
            title: 'IDJS File Association',
            path: '/guides/text-editor-association/'
          }
        ]
      },
      {
        title: 'UXP API Reference',
        path: '/uxp/',
        pages: [
          {
            title: 'CSS',
            path: '/uxp/reference-css/'
          },
          {
            title: 'HTML',
            path: '/uxp/reference-html/'
          },
          {
            title: 'JavaScript',
            path: '/uxp/reference-js/'
          },
          {
            title: 'Spectrum',
            path: '/uxp/reference-spectrum/'
          }
        ]
      },
      {
        title: 'InDesign API References',
        path: '/omv/',
        header: true,
        pages: [
          {
            title: 'AcrobatCompatibility',
            path: '/omv/AcrobatCompatibility/'
            },
            {
            title: 'HyperlinkPageDestinations',
            path: '/omv/HyperlinkPageDestinations/'
            },
            {
            title: 'SVG',
            path: '/omv/SVG/'
            },
            {
            title: 'StoryWindow',
            path: '/omv/StoryWindow/'
            },
            {
            title: 'TrapEndTypes',
            path: '/omv/TrapEndTypes/'
            },
            {
            title: 'ComposeUsing',
            path: '/omv/ComposeUsing/'
            },
            {
            title: 'GotoURLBehavior',
            path: '/omv/GotoURLBehavior/'
            },
            {
            title: 'LayoutWindow',
            path: '/omv/LayoutWindow/'
            },
            {
            title: 'CharacterStyleGroups',
            path: '/omv/CharacterStyleGroups/'
            },
            {
            title: 'ImportedPages',
            path: '/omv/ImportedPages/'
            },
            {
            title: 'StrokeTransparencySetting',
            path: '/omv/StrokeTransparencySetting/'
            },
            {
            title: 'EventListeners',
            path: '/omv/EventListeners/'
            },
            {
            title: 'LinkResourceRenditionType',
            path: '/omv/LinkResourceRenditionType/'
            },
            {
            title: 'Behavior',
            path: '/omv/Behavior/'
            },
            {
            title: 'BlendingSetting',
            path: '/omv/BlendingSetting/'
            },
            {
            title: 'ImageExportOption',
            path: '/omv/ImageExportOption/'
            },
            {
            title: 'HTMLExportPreference',
            path: '/omv/HTMLExportPreference/'
            },
            {
            title: 'SourceSpaces',
            path: '/omv/SourceSpaces/'
            },
            {
            title: 'EpubVersion',
            path: '/omv/EpubVersion/'
            },
            {
            title: 'InnerShadowSetting',
            path: '/omv/InnerShadowSetting/'
            },
            {
            title: 'Guide',
            path: '/omv/Guide/'
            },
            {
            title: 'FootnoteMarkerPositioning',
            path: '/omv/FootnoteMarkerPositioning/'
            },
            {
            title: 'WMFs',
            path: '/omv/WMFs/'
            },
            {
            title: 'BorderPanel',
            path: '/omv/BorderPanel/'
            },
            {
            title: 'ChangeTypes',
            path: '/omv/ChangeTypes/'
            },
            {
            title: 'XMLFileEncoding',
            path: '/omv/XMLFileEncoding/'
            },
            {
            title: 'SourceType',
            path: '/omv/SourceType/'
            },
            {
            title: 'Gradient',
            path: '/omv/Gradient/'
            },
            {
            title: 'DynamicDocumentsTextExportPolicy',
            path: '/omv/DynamicDocumentsTextExportPolicy/'
            },
            {
            title: 'FindGrepPreference',
            path: '/omv/FindGrepPreference/'
            },
            {
            title: 'SpecialCharacters',
            path: '/omv/SpecialCharacters/'
            },
            {
            title: 'AutoEnum',
            path: '/omv/AutoEnum/'
            },
            {
            title: 'ParaStyleMapping',
            path: '/omv/ParaStyleMapping/'
            },
            {
            title: 'Snippets',
            path: '/omv/Snippets/'
            },
            {
            title: 'DialogColumns',
            path: '/omv/DialogColumns/'
            },
            {
            title: 'FontDownloading',
            path: '/omv/FontDownloading/'
            },
            {
            title: 'StyleExportTagMaps',
            path: '/omv/StyleExportTagMaps/'
            },
            {
            title: 'FindChangeGradientFeatherSetting',
            path: '/omv/FindChangeGradientFeatherSetting/'
            },
            {
            title: 'Note',
            path: '/omv/Note/'
            },
            {
            title: 'TextEditingPreference',
            path: '/omv/TextEditingPreference/'
            },
            {
            title: 'DisplayOrderOptions',
            path: '/omv/DisplayOrderOptions/'
            },
            {
            title: 'ColorRenderingDictionary',
            path: '/omv/ColorRenderingDictionary/'
            },
            {
            title: 'LineSpacingType',
            path: '/omv/LineSpacingType/'
            },
            {
            title: 'Dropdown',
            path: '/omv/Dropdown/'
            },
            {
            title: 'ObjectStyleContentEffectsCategorySettings',
            path: '/omv/ObjectStyleContentEffectsCategorySettings/'
            },
            {
            title: 'ConditionIndicatorMethod',
            path: '/omv/ConditionIndicatorMethod/'
            },
            {
            title: 'ThumbsPerPage',
            path: '/omv/ThumbsPerPage/'
            },
            {
            title: 'AttachedDevices',
            path: '/omv/AttachedDevices/'
            },
            {
            title: 'DataMergeQrcodePlaceholder',
            path: '/omv/DataMergeQrcodePlaceholder/'
            },
            {
            title: 'IndexOptions',
            path: '/omv/IndexOptions/'
            },
            {
            title: 'ChangeTextPreference',
            path: '/omv/ChangeTextPreference/'
            },
            {
            title: 'DocumentPreference',
            path: '/omv/DocumentPreference/'
            },
            {
            title: 'Ink',
            path: '/omv/Ink/'
            },
            {
            title: 'MenuSeparator',
            path: '/omv/MenuSeparator/'
            },
            {
            title: 'BookletTypeOptions',
            path: '/omv/BookletTypeOptions/'
            },
            {
            title: 'NumberedListExportOption',
            path: '/omv/NumberedListExportOption/'
            },
            {
            title: 'ExportForWebPreference',
            path: '/omv/ExportForWebPreference/'
            },
            {
            title: 'GrabberPreference',
            path: '/omv/GrabberPreference/'
            },
            {
            title: 'InCopyUIColors',
            path: '/omv/InCopyUIColors/'
            },
            {
            title: 'Tables',
            path: '/omv/Tables/'
            },
            {
            title: 'DashedStrokeStyles',
            path: '/omv/DashedStrokeStyles/'
            },
            {
            title: 'CrossReferenceFormat',
            path: '/omv/CrossReferenceFormat/'
            },
            {
            title: 'MeasurementEditbox',
            path: '/omv/MeasurementEditbox/'
            },
            {
            title: 'ScreenModeOptions',
            path: '/omv/ScreenModeOptions/'
            },
            {
            title: 'SortAssets',
            path: '/omv/SortAssets/'
            },
            {
            title: 'GotoStateBehaviors',
            path: '/omv/GotoStateBehaviors/'
            },
            {
            title: 'TimingGroups',
            path: '/omv/TimingGroups/'
            },
            {
            title: 'EndJoin',
            path: '/omv/EndJoin/'
            },
            {
            title: 'PageColorOptions',
            path: '/omv/PageColorOptions/'
            },
            {
            title: 'StrokeStyles',
            path: '/omv/StrokeStyles/'
            },
            {
            title: 'MojikumiUiPreference',
            path: '/omv/MojikumiUiPreference/'
            },
            {
            title: 'Cells',
            path: '/omv/Cells/'
            },
            {
            title: 'TableStyleMapping',
            path: '/omv/TableStyleMapping/'
            },
            {
            title: 'PreflightProfileRule',
            path: '/omv/PreflightProfileRule/'
            },
            {
            title: 'HyphenationException',
            path: '/omv/HyphenationException/'
            },
            {
            title: 'SmartGuidePreference',
            path: '/omv/SmartGuidePreference/'
            },
            {
            title: 'PaperSizes',
            path: '/omv/PaperSizes/'
            },
            {
            title: 'TOCStyleEntry',
            path: '/omv/TOCStyleEntry/'
            },
            {
            title: 'Words',
            path: '/omv/Words/'
            },
            {
            title: 'NestedLineStyles',
            path: '/omv/NestedLineStyles/'
            },
            {
            title: 'ImportFormat',
            path: '/omv/ImportFormat/'
            },
            {
            title: 'ObjectStyle',
            path: '/omv/ObjectStyle/'
            },
            {
            title: 'Sections',
            path: '/omv/Sections/'
            },
            {
            title: 'JPEGOptionsFormat',
            path: '/omv/JPEGOptionsFormat/'
            },
            {
            title: 'KinsokuSet',
            path: '/omv/KinsokuSet/'
            },
            {
            title: 'PageTransitionDurationOptions',
            path: '/omv/PageTransitionDurationOptions/'
            },
            {
            title: 'RealEditbox',
            path: '/omv/RealEditbox/'
            },
            {
            title: 'PreflightProcess',
            path: '/omv/PreflightProcess/'
            },
            {
            title: 'OpenOptions',
            path: '/omv/OpenOptions/'
            },
            {
            title: 'Page',
            path: '/omv/Page/'
            },
            {
            title: 'AssignmentStatus',
            path: '/omv/AssignmentStatus/'
            },
            {
            title: 'ToolTipOptions',
            path: '/omv/ToolTipOptions/'
            },
            {
            title: 'DocumentIntentOptions',
            path: '/omv/DocumentIntentOptions/'
            },
            {
            title: 'Tint',
            path: '/omv/Tint/'
            },
            {
            title: 'TextDirection',
            path: '/omv/TextDirection/'
            },
            {
            title: 'Preferences',
            path: '/omv/Preferences/'
            },
            {
            title: 'SyncConflictResolution',
            path: '/omv/SyncConflictResolution/'
            },
            {
            title: 'Change',
            path: '/omv/Change/'
            },
            {
            title: 'LeadingModel',
            path: '/omv/LeadingModel/'
            },
            {
            title: 'Hyperlink',
            path: '/omv/Hyperlink/'
            },
            {
            title: 'TimingTargets',
            path: '/omv/TimingTargets/'
            },
            {
            title: 'MojikumiTableDefaults',
            path: '/omv/MojikumiTableDefaults/'
            },
            {
            title: 'FindChangeTransliterateOption',
            path: '/omv/FindChangeTransliterateOption/'
            },
            {
            title: 'EPSImageData',
            path: '/omv/EPSImageData/'
            },
            {
            title: 'ConditionUnderlineIndicatorAppearance',
            path: '/omv/ConditionUnderlineIndicatorAppearance/'
            },
            {
            title: 'Movie',
            path: '/omv/Movie/'
            },
            {
            title: 'HyphenationStyleEnum',
            path: '/omv/HyphenationStyleEnum/'
            },
            {
            title: 'DigitsTypeOptions',
            path: '/omv/DigitsTypeOptions/'
            },
            {
            title: 'XmlStories',
            path: '/omv/XmlStories/'
            },
            {
            title: 'GotoPreviousViewBehaviors',
            path: '/omv/GotoPreviousViewBehaviors/'
            },
            {
            title: 'PDFPlacePreference',
            path: '/omv/PDFPlacePreference/'
            },
            {
            title: 'ObjectStyleGroups',
            path: '/omv/ObjectStyleGroups/'
            },
            {
            title: 'DesignOptions',
            path: '/omv/DesignOptions/'
            },
            {
            title: 'ScriptPreference',
            path: '/omv/ScriptPreference/'
            },
            {
            title: 'BindingOptions',
            path: '/omv/BindingOptions/'
            },
            {
            title: 'PDFMarkWeight',
            path: '/omv/PDFMarkWeight/'
            },
            {
            title: 'LayoutRuleOptions',
            path: '/omv/LayoutRuleOptions/'
            },
            {
            title: 'MovieBehaviors',
            path: '/omv/MovieBehaviors/'
            },
            {
            title: 'XMLItems',
            path: '/omv/XMLItems/'
            },
            {
            title: 'TaggedTextImportPreference',
            path: '/omv/TaggedTextImportPreference/'
            },
            {
            title: 'BaselineGridRelativeOption',
            path: '/omv/BaselineGridRelativeOption/'
            },
            {
            title: 'RealCombobox',
            path: '/omv/RealCombobox/'
            },
            {
            title: 'ListAlignment',
            path: '/omv/ListAlignment/'
            },
            {
            title: 'ParagraphStyleGroup',
            path: '/omv/ParagraphStyleGroup/'
            },
            {
            title: 'GotoLastPageBehavior',
            path: '/omv/GotoLastPageBehavior/'
            },
            {
            title: 'LineAlignment',
            path: '/omv/LineAlignment/'
            },
            {
            title: 'EndnoteRanges',
            path: '/omv/EndnoteRanges/'
            },
            {
            title: 'ColorSpace',
            path: '/omv/ColorSpace/'
            },
            {
            title: 'Swatch',
            path: '/omv/Swatch/'
            },
            {
            title: 'IndexSection',
            path: '/omv/IndexSection/'
            },
            {
            title: 'FlattenerPreset',
            path: '/omv/FlattenerPreset/'
            },
            {
            title: 'GlobalClashResolutionStrategy',
            path: '/omv/GlobalClashResolutionStrategy/'
            },
            {
            title: 'DataMergeFields',
            path: '/omv/DataMergeFields/'
            },
            {
            title: 'ConditionSets',
            path: '/omv/ConditionSets/'
            },
            {
            title: 'PreflightBookOption',
            path: '/omv/PreflightBookOption/'
            },
            {
            title: 'BuildingBlock',
            path: '/omv/BuildingBlock/'
            },
            {
            title: 'KinsokuTables',
            path: '/omv/KinsokuTables/'
            },
            {
            title: 'MarkTypes',
            path: '/omv/MarkTypes/'
            },
            {
            title: 'PDFComment',
            path: '/omv/PDFComment/'
            },
            {
            title: 'XMLRuleProcessors',
            path: '/omv/XMLRuleProcessors/'
            },
            {
            title: 'UIColors',
            path: '/omv/UIColors/'
            },
            {
            title: 'LanguageAndRegion',
            path: '/omv/LanguageAndRegion/'
            },
            {
            title: 'GotoPreviousStateBehaviors',
            path: '/omv/GotoPreviousStateBehaviors/'
            },
            {
            title: 'TransformPreference',
            path: '/omv/TransformPreference/'
            },
            {
            title: 'PrintBookletOption',
            path: '/omv/PrintBookletOption/'
            },
            {
            title: 'GotoStateBehavior',
            path: '/omv/GotoStateBehavior/'
            },
            {
            title: 'ParaStyleMappings',
            path: '/omv/ParaStyleMappings/'
            },
            {
            title: 'FindColorPreference',
            path: '/omv/FindColorPreference/'
            },
            {
            title: 'Section',
            path: '/omv/Section/'
            },
            {
            title: 'CharacterCountLocation',
            path: '/omv/CharacterCountLocation/'
            },
            {
            title: 'MediaItem',
            path: '/omv/MediaItem/'
            },
            {
            title: 'AssignedStory',
            path: '/omv/AssignedStory/'
            },
            {
            title: 'AutoCorrectTable',
            path: '/omv/AutoCorrectTable/'
            },
            {
            title: 'XMLExportUntaggedTablesFormat',
            path: '/omv/XMLExportUntaggedTablesFormat/'
            },
            {
            title: 'GpuPerformancePreference',
            path: '/omv/GpuPerformancePreference/'
            },
            {
            title: 'Assignments',
            path: '/omv/Assignments/'
            },
            {
            title: 'DynamicTriggerEvents',
            path: '/omv/DynamicTriggerEvents/'
            },
            {
            title: 'JoinOptions',
            path: '/omv/JoinOptions/'
            },
            {
            title: 'ParagraphShadingTopOriginEnum',
            path: '/omv/ParagraphShadingTopOriginEnum/'
            },
            {
            title: 'FindChangeInnerGlowSetting',
            path: '/omv/FindChangeInnerGlowSetting/'
            },
            {
            title: '.DS_Store',
            path: '/omv/.DS_Store/'
            },
            {
            title: 'StyleConflict',
            path: '/omv/StyleConflict/'
            },
            {
            title: 'StyleType',
            path: '/omv/StyleType/'
            },
            {
            title: 'Fitting',
            path: '/omv/Fitting/'
            },
            {
            title: 'Locale',
            path: '/omv/Locale/'
            },
            {
            title: 'AnimationPlayOperations',
            path: '/omv/AnimationPlayOperations/'
            },
            {
            title: 'LinkedPageItemOption',
            path: '/omv/LinkedPageItemOption/'
            },
            {
            title: 'TextImportPreference',
            path: '/omv/TextImportPreference/'
            },
            {
            title: 'Bookmark',
            path: '/omv/Bookmark/'
            },
            {
            title: 'PrintFormBehaviors',
            path: '/omv/PrintFormBehaviors/'
            },
            {
            title: 'Endnote',
            path: '/omv/Endnote/'
            },
            {
            title: 'HyphenationExceptions',
            path: '/omv/HyphenationExceptions/'
            },
            {
            title: 'HyperlinkURLDestination',
            path: '/omv/HyperlinkURLDestination/'
            },
            {
            title: 'DottedStrokeStyle',
            path: '/omv/DottedStrokeStyle/'
            },
            {
            title: 'ResolveStyleClash',
            path: '/omv/ResolveStyleClash/'
            },
            {
            title: 'GraphicLayers',
            path: '/omv/GraphicLayers/'
            },
            {
            title: 'MeasurementUnits',
            path: '/omv/MeasurementUnits/'
            },
            {
            title: 'CompressionQuality',
            path: '/omv/CompressionQuality/'
            },
            {
            title: 'NestedLineStyle',
            path: '/omv/NestedLineStyle/'
            },
            {
            title: 'EndnoteScope',
            path: '/omv/EndnoteScope/'
            },
            {
            title: 'ConditionSet',
            path: '/omv/ConditionSet/'
            },
            {
            title: 'Buttons',
            path: '/omv/Buttons/'
            },
            {
            title: 'InnerGlowSetting',
            path: '/omv/InnerGlowSetting/'
            },
            {
            title: 'ParagraphBorderBottomOriginEnum',
            path: '/omv/ParagraphBorderBottomOriginEnum/'
            },
            {
            title: 'TimingTarget',
            path: '/omv/TimingTarget/'
            },
            {
            title: 'Polygons',
            path: '/omv/Polygons/'
            },
            {
            title: 'EPSExportPreference',
            path: '/omv/EPSExportPreference/'
            },
            {
            title: 'BoundingBoxLimits',
            path: '/omv/BoundingBoxLimits/'
            },
            {
            title: 'Panel',
            path: '/omv/Panel/'
            },
            {
            title: 'ExportLayerOptions',
            path: '/omv/ExportLayerOptions/'
            },
            {
            title: 'DottedStrokeStyles',
            path: '/omv/DottedStrokeStyles/'
            },
            {
            title: 'Submenus',
            path: '/omv/Submenus/'
            },
            {
            title: 'FloatingWindowSize',
            path: '/omv/FloatingWindowSize/'
            },
            {
            title: 'WMF',
            path: '/omv/WMF/'
            },
            {
            title: 'Widget',
            path: '/omv/Widget/'
            },
            {
            title: 'RadioButton',
            path: '/omv/RadioButton/'
            },
            {
            title: 'GotoNextViewBehaviors',
            path: '/omv/GotoNextViewBehaviors/'
            },
            {
            title: 'GraphicLayer',
            path: '/omv/GraphicLayer/'
            },
            {
            title: 'Layers',
            path: '/omv/Layers/'
            },
            {
            title: 'PdfMagnificationOptions',
            path: '/omv/PdfMagnificationOptions/'
            },
            {
            title: 'MenuAction',
            path: '/omv/MenuAction/'
            },
            {
            title: 'Tints',
            path: '/omv/Tints/'
            },
            {
            title: 'XMLExportPreference',
            path: '/omv/XMLExportPreference/'
            },
            {
            title: 'PageItem',
            path: '/omv/PageItem/'
            },
            {
            title: 'TOCStyles',
            path: '/omv/TOCStyles/'
            },
            {
            title: 'Asset',
            path: '/omv/Asset/'
            },
            {
            title: 'MeasurementComboboxes',
            path: '/omv/MeasurementComboboxes/'
            },
            {
            title: 'TrapImagePlacementTypes',
            path: '/omv/TrapImagePlacementTypes/'
            },
            {
            title: 'TextImportCharacterSet',
            path: '/omv/TextImportCharacterSet/'
            },
            {
            title: 'ExcelImportPreference',
            path: '/omv/ExcelImportPreference/'
            },
            {
            title: 'PreflightRule',
            path: '/omv/PreflightRule/'
            },
            {
            title: 'FontLockingPreference',
            path: '/omv/FontLockingPreference/'
            },
            {
            title: 'InkTypes',
            path: '/omv/InkTypes/'
            },
            {
            title: 'PagesPanel',
            path: '/omv/PagesPanel/'
            },
            {
            title: 'GotoNextPageBehavior',
            path: '/omv/GotoNextPageBehavior/'
            },
            {
            title: 'MenuElement',
            path: '/omv/MenuElement/'
            },
            {
            title: 'GraphicLayerOption',
            path: '/omv/GraphicLayerOption/'
            },
            {
            title: 'AutoCorrectTables',
            path: '/omv/AutoCorrectTables/'
            },
            {
            title: 'GlowTechnique',
            path: '/omv/GlowTechnique/'
            },
            {
            title: 'InteractivePDFInteractiveElementsOptions',
            path: '/omv/InteractivePDFInteractiveElementsOptions/'
            },
            {
            title: 'AssetType',
            path: '/omv/AssetType/'
            },
            {
            title: 'StoryWindows',
            path: '/omv/StoryWindows/'
            },
            {
            title: 'TextStyleRanges',
            path: '/omv/TextStyleRanges/'
            },
            {
            title: 'TrapPresets',
            path: '/omv/TrapPresets/'
            },
            {
            title: 'RubyOverhang',
            path: '/omv/RubyOverhang/'
            },
            {
            title: 'PositionalForms',
            path: '/omv/PositionalForms/'
            },
            {
            title: 'ValidationErrors',
            path: '/omv/ValidationErrors/'
            },
            {
            title: 'GotoNextViewBehavior',
            path: '/omv/GotoNextViewBehavior/'
            },
            {
            title: 'EndnoteRestarting',
            path: '/omv/EndnoteRestarting/'
            },
            {
            title: 'ScriptMenuActions',
            path: '/omv/ScriptMenuActions/'
            },
            {
            title: 'XMLRuleProcessor',
            path: '/omv/XMLRuleProcessor/'
            },
            {
            title: 'SubmitFormBehavior',
            path: '/omv/SubmitFormBehavior/'
            },
            {
            title: 'WordRTFImportPreference',
            path: '/omv/WordRTFImportPreference/'
            },
            {
            title: 'TextPreference',
            path: '/omv/TextPreference/'
            },
            {
            title: 'PreserveAppearanceFromLayoutEnum',
            path: '/omv/PreserveAppearanceFromLayoutEnum/'
            },
            {
            title: 'AutoCorrectPreference',
            path: '/omv/AutoCorrectPreference/'
            },
            {
            title: 'GradientFeatherSetting',
            path: '/omv/GradientFeatherSetting/'
            },
            {
            title: 'PublishExportPreference',
            path: '/omv/PublishExportPreference/'
            },
            {
            title: 'TextColumns',
            path: '/omv/TextColumns/'
            },
            {
            title: 'InteractivePDFExportPreference',
            path: '/omv/InteractivePDFExportPreference/'
            },
            {
            title: 'XMLExportMaps',
            path: '/omv/XMLExportMaps/'
            },
            {
            title: 'TextPathEffects',
            path: '/omv/TextPathEffects/'
            },
            {
            title: 'KentenAlignment',
            path: '/omv/KentenAlignment/'
            },
            {
            title: 'AnimationEaseOptions',
            path: '/omv/AnimationEaseOptions/'
            },
            {
            title: 'TableStyle',
            path: '/omv/TableStyle/'
            },
            {
            title: 'DataMergeTextPlaceholders',
            path: '/omv/DataMergeTextPlaceholders/'
            },
            {
            title: 'PreviewTypes',
            path: '/omv/PreviewTypes/'
            },
            {
            title: 'ObjectStyles',
            path: '/omv/ObjectStyles/'
            },
            {
            title: 'ContentTransparencySetting',
            path: '/omv/ContentTransparencySetting/'
            },
            {
            title: 'XmlStory',
            path: '/omv/XmlStory/'
            },
            {
            title: 'GradientStop',
            path: '/omv/GradientStop/'
            },
            {
            title: 'NumberingLists',
            path: '/omv/NumberingLists/'
            },
            {
            title: 'Paragraph',
            path: '/omv/Paragraph/'
            },
            {
            title: 'PDFCompressionType',
            path: '/omv/PDFCompressionType/'
            },
            {
            title: 'MixedInks',
            path: '/omv/MixedInks/'
            },
            {
            title: 'OTFFigureStyle',
            path: '/omv/OTFFigureStyle/'
            },
            {
            title: 'EmptyFrameFittingOptions',
            path: '/omv/EmptyFrameFittingOptions/'
            },
            {
            title: 'IntegerCombobox',
            path: '/omv/IntegerCombobox/'
            },
            {
            title: 'SaveOptions',
            path: '/omv/SaveOptions/'
            },
            {
            title: 'UpdateLinkOptions',
            path: '/omv/UpdateLinkOptions/'
            },
            {
            title: 'GotoAnchorBehaviors',
            path: '/omv/GotoAnchorBehaviors/'
            },
            {
            title: 'FitDimension',
            path: '/omv/FitDimension/'
            },
            {
            title: 'Images',
            path: '/omv/Images/'
            },
            {
            title: 'BevelAndEmbossStyle',
            path: '/omv/BevelAndEmbossStyle/'
            },
            {
            title: 'ParagraphStyleGroups',
            path: '/omv/ParagraphStyleGroups/'
            },
            {
            title: 'FindChangeObjectOption',
            path: '/omv/FindChangeObjectOption/'
            },
            {
            title: 'SignatureSizeOptions',
            path: '/omv/SignatureSizeOptions/'
            },
            {
            title: 'PICTs',
            path: '/omv/PICTs/'
            },
            {
            title: 'CompositeFontEntry',
            path: '/omv/CompositeFontEntry/'
            },
            {
            title: 'Group',
            path: '/omv/Group/'
            },
            {
            title: 'ColorSetting',
            path: '/omv/ColorSetting/'
            },
            {
            title: 'RangeSortOrder',
            path: '/omv/RangeSortOrder/'
            },
            {
            title: 'CellStyleMapping',
            path: '/omv/CellStyleMapping/'
            },
            {
            title: 'CompositeFonts',
            path: '/omv/CompositeFonts/'
            },
            {
            title: 'VerticalJustification',
            path: '/omv/VerticalJustification/'
            },
            {
            title: 'ViewZoomBehavior',
            path: '/omv/ViewZoomBehavior/'
            },
            {
            title: 'UserDictionaries',
            path: '/omv/UserDictionaries/'
            },
            {
            title: 'GotoFirstPageBehavior',
            path: '/omv/GotoFirstPageBehavior/'
            },
            {
            title: 'CreateProxy',
            path: '/omv/CreateProxy/'
            },
            {
            title: 'LayoutWindows',
            path: '/omv/LayoutWindows/'
            },
            {
            title: 'HyperlinkExternalPageDestination',
            path: '/omv/HyperlinkExternalPageDestination/'
            },
            {
            title: 'AnimationBehaviors',
            path: '/omv/AnimationBehaviors/'
            },
            {
            title: 'PrinterPresets',
            path: '/omv/PrinterPresets/'
            },
            {
            title: 'RadiobuttonControl',
            path: '/omv/RadiobuttonControl/'
            },
            {
            title: 'ResizeConstraints',
            path: '/omv/ResizeConstraints/'
            },
            {
            title: 'VariableScopes',
            path: '/omv/VariableScopes/'
            },
            {
            title: 'DisplaySettingOptions',
            path: '/omv/DisplaySettingOptions/'
            },
            {
            title: 'LibraryPanel',
            path: '/omv/LibraryPanel/'
            },
            {
            title: 'HiddenTexts',
            path: '/omv/HiddenTexts/'
            },
            {
            title: 'EnablingGroup',
            path: '/omv/EnablingGroup/'
            },
            {
            title: 'ImagePreference',
            path: '/omv/ImagePreference/'
            },
            {
            title: 'RealComboboxes',
            path: '/omv/RealComboboxes/'
            },
            {
            title: 'StrokeAlignment',
            path: '/omv/StrokeAlignment/'
            },
            {
            title: 'ChangeCaseOptions',
            path: '/omv/ChangeCaseOptions/'
            },
            {
            title: 'PDFColorSpace',
            path: '/omv/PDFColorSpace/'
            },
            {
            title: 'PrintBookletPrintPreference',
            path: '/omv/PrintBookletPrintPreference/'
            },
            {
            title: 'FindTransliteratePreference',
            path: '/omv/FindTransliteratePreference/'
            },
            {
            title: 'CopyrightStatus',
            path: '/omv/CopyrightStatus/'
            },
            {
            title: 'XMLImportMaps',
            path: '/omv/XMLImportMaps/'
            },
            {
            title: 'LinkStatus',
            path: '/omv/LinkStatus/'
            },
            {
            title: 'RepaginateOption',
            path: '/omv/RepaginateOption/'
            },
            {
            title: 'MatchCharacterStylePreference',
            path: '/omv/MatchCharacterStylePreference/'
            },
            {
            title: 'DialogRows',
            path: '/omv/DialogRows/'
            },
            {
            title: 'DigpubArticleVersion',
            path: '/omv/DigpubArticleVersion/'
            },
            {
            title: 'CrossReference',
            path: '/omv/CrossReference/'
            },
            {
            title: 'PDFXStandards',
            path: '/omv/PDFXStandards/'
            },
            {
            title: 'PageTransitionTypeOptions',
            path: '/omv/PageTransitionTypeOptions/'
            },
            {
            title: 'Changes',
            path: '/omv/Changes/'
            },
            {
            title: 'Character',
            path: '/omv/Character/'
            },
            {
            title: 'GotoAnchorBehavior',
            path: '/omv/GotoAnchorBehavior/'
            },
            {
            title: 'HyperlinkTextSource',
            path: '/omv/HyperlinkTextSource/'
            },
            {
            title: 'PostScriptLevels',
            path: '/omv/PostScriptLevels/'
            },
            {
            title: 'FollowShapeModeOptions',
            path: '/omv/FollowShapeModeOptions/'
            },
            {
            title: 'StaticAlignmentOptions',
            path: '/omv/StaticAlignmentOptions/'
            },
            {
            title: 'DataMerge',
            path: '/omv/DataMerge/'
            },
            {
            title: 'LiveDrawingOptions',
            path: '/omv/LiveDrawingOptions/'
            },
            {
            title: 'KentenCharacterSet',
            path: '/omv/KentenCharacterSet/'
            },
            {
            title: 'VersionCueSyncStatus',
            path: '/omv/VersionCueSyncStatus/'
            },
            {
            title: 'LinkingPreference',
            path: '/omv/LinkingPreference/'
            },
            {
            title: 'FootnoteFirstBaseline',
            path: '/omv/FootnoteFirstBaseline/'
            },
            {
            title: 'AnchoredObjectDefault',
            path: '/omv/AnchoredObjectDefault/'
            },
            {
            title: 'EPSColorSpace',
            path: '/omv/EPSColorSpace/'
            },
            {
            title: 'PNGQualityEnum',
            path: '/omv/PNGQualityEnum/'
            },
            {
            title: 'MojikumiTables',
            path: '/omv/MojikumiTables/'
            },
            {
            title: 'MarginPreference',
            path: '/omv/MarginPreference/'
            },
            {
            title: 'TableStyleGroup',
            path: '/omv/TableStyleGroup/'
            },
            {
            title: 'HyperlinkTextDestination',
            path: '/omv/HyperlinkTextDestination/'
            },
            {
            title: 'CharacterAlignment',
            path: '/omv/CharacterAlignment/'
            },
            {
            title: 'PrinterPresetTypes',
            path: '/omv/PrinterPresetTypes/'
            },
            {
            title: 'UserInteractionLevels',
            path: '/omv/UserInteractionLevels/'
            },
            {
            title: 'Position',
            path: '/omv/Position/'
            },
            {
            title: 'FindChangeGlyphOption',
            path: '/omv/FindChangeGlyphOption/'
            },
            {
            title: 'MotionPreset',
            path: '/omv/MotionPreset/'
            },
            {
            title: 'Justification',
            path: '/omv/Justification/'
            },
            {
            title: 'PathPoints',
            path: '/omv/PathPoints/'
            },
            {
            title: 'TabStop',
            path: '/omv/TabStop/'
            },
            {
            title: 'NestedStyleDelimiters',
            path: '/omv/NestedStyleDelimiters/'
            },
            {
            title: 'ArticleMembers',
            path: '/omv/ArticleMembers/'
            },
            {
            title: 'FootnoteRestarting',
            path: '/omv/FootnoteRestarting/'
            },
            {
            title: 'GotoPreviousStateBehavior',
            path: '/omv/GotoPreviousStateBehavior/'
            },
            {
            title: 'RulerOrigin',
            path: '/omv/RulerOrigin/'
            },
            {
            title: 'GIFOptionsPalette',
            path: '/omv/GIFOptionsPalette/'
            },
            {
            title: 'Color',
            path: '/omv/Color/'
            },
            {
            title: 'Path',
            path: '/omv/Path/'
            },
            {
            title: 'TagVector',
            path: '/omv/TagVector/'
            },
            {
            title: 'Printer',
            path: '/omv/Printer/'
            },
            {
            title: 'StrokeFillProxyOptions',
            path: '/omv/StrokeFillProxyOptions/'
            },
            {
            title: 'Replies',
            path: '/omv/Replies/'
            },
            {
            title: 'GlobalClashResolutionStrategyForMasterPage',
            path: '/omv/GlobalClashResolutionStrategyForMasterPage/'
            },
            {
            title: 'CrossReferenceType',
            path: '/omv/CrossReferenceType/'
            },
            {
            title: 'TaggedTextExportPreference',
            path: '/omv/TaggedTextExportPreference/'
            },
            {
            title: 'DirectionalFeatherSetting',
            path: '/omv/DirectionalFeatherSetting/'
            },
            {
            title: 'TextWrapSideOptions',
            path: '/omv/TextWrapSideOptions/'
            },
            {
            title: 'StaticTexts',
            path: '/omv/StaticTexts/'
            },
            {
            title: 'ChangeGlyphPreference',
            path: '/omv/ChangeGlyphPreference/'
            },
            {
            title: 'ChangeTextColorChoices',
            path: '/omv/ChangeTextColorChoices/'
            },
            {
            title: 'HyperlinkPageItemSources',
            path: '/omv/HyperlinkPageItemSources/'
            },
            {
            title: 'AlternatingFillsTypes',
            path: '/omv/AlternatingFillsTypes/'
            },
            {
            title: 'ColorModel',
            path: '/omv/ColorModel/'
            },
            {
            title: 'DataMergeImagePlaceholder',
            path: '/omv/DataMergeImagePlaceholder/'
            },
            {
            title: 'EditingState',
            path: '/omv/EditingState/'
            },
            {
            title: 'DataMergeField',
            path: '/omv/DataMergeField/'
            },
            {
            title: 'NumberedParagraphsOptions',
            path: '/omv/NumberedParagraphsOptions/'
            },
            {
            title: 'ImageResolution',
            path: '/omv/ImageResolution/'
            },
            {
            title: 'Panels',
            path: '/omv/Panels/'
            },
            {
            title: 'FootnoteNumberingStyle',
            path: '/omv/FootnoteNumberingStyle/'
            },
            {
            title: 'PageItemDefault',
            path: '/omv/PageItemDefault/'
            },
            {
            title: 'JPEGOptionsQuality',
            path: '/omv/JPEGOptionsQuality/'
            },
            {
            title: 'PreflightRuleInstances',
            path: '/omv/PreflightRuleInstances/'
            },
            {
            title: 'DisplaySettings',
            path: '/omv/DisplaySettings/'
            },
            {
            title: 'IndexingSortOption',
            path: '/omv/IndexingSortOption/'
            },
            {
            title: 'Articles',
            path: '/omv/Articles/'
            },
            {
            title: 'ObjectTypes',
            path: '/omv/ObjectTypes/'
            },
            {
            title: 'BalanceLinesStyle',
            path: '/omv/BalanceLinesStyle/'
            },
            {
            title: 'TableStyleMappings',
            path: '/omv/TableStyleMappings/'
            },
            {
            title: 'LocationOptions',
            path: '/omv/LocationOptions/'
            },
            {
            title: 'FontTypes',
            path: '/omv/FontTypes/'
            },
            {
            title: 'BulletCharacterType',
            path: '/omv/BulletCharacterType/'
            },
            {
            title: 'OpacityGradientStop',
            path: '/omv/OpacityGradientStop/'
            },
            {
            title: 'ViewDisplaySettings',
            path: '/omv/ViewDisplaySettings/'
            },
            {
            title: 'HorizontalOrVertical',
            path: '/omv/HorizontalOrVertical/'
            },
            {
            title: 'XMLRuleMatchData',
            path: '/omv/XMLRuleMatchData/'
            },
            {
            title: 'PublishFormatEnum',
            path: '/omv/PublishFormatEnum/'
            },
            {
            title: 'StoryTypes',
            path: '/omv/StoryTypes/'
            },
            {
            title: 'HtmlItem',
            path: '/omv/HtmlItem/'
            },
            {
            title: 'BookContents',
            path: '/omv/BookContents/'
            },
            {
            title: 'PNGColorSpaceEnum',
            path: '/omv/PNGColorSpaceEnum/'
            },
            {
            title: 'ImageSizeOption',
            path: '/omv/ImageSizeOption/'
            },
            {
            title: 'UseSVGAsEnum',
            path: '/omv/UseSVGAsEnum/'
            },
            {
            title: 'PreviewPagesOptions',
            path: '/omv/PreviewPagesOptions/'
            },
            {
            title: 'TOCStyle',
            path: '/omv/TOCStyle/'
            },
            {
            title: 'RotationDirection',
            path: '/omv/RotationDirection/'
            },
            {
            title: 'Capitalization',
            path: '/omv/Capitalization/'
            },
            {
            title: 'AngleEditbox',
            path: '/omv/AngleEditbox/'
            },
            {
            title: 'GraphicLines',
            path: '/omv/GraphicLines/'
            },
            {
            title: 'CoordinateSpaces',
            path: '/omv/CoordinateSpaces/'
            },
            {
            title: 'ChangeTransliteratePreference',
            path: '/omv/ChangeTransliteratePreference/'
            },
            {
            title: 'XMLAttribute',
            path: '/omv/XMLAttribute/'
            },
            {
            title: 'ImportedPageAttribute',
            path: '/omv/ImportedPageAttribute/'
            },
            {
            title: 'StripedStrokeStyle',
            path: '/omv/StripedStrokeStyle/'
            },
            {
            title: 'SelectionOptions',
            path: '/omv/SelectionOptions/'
            },
            {
            title: 'SignatureField',
            path: '/omv/SignatureField/'
            },
            {
            title: 'ListBox',
            path: '/omv/ListBox/'
            },
            {
            title: 'TabStopAlignment',
            path: '/omv/TabStopAlignment/'
            },
            {
            title: 'RadiobuttonControls',
            path: '/omv/RadiobuttonControls/'
            },
            {
            title: 'TextTypeAlignments',
            path: '/omv/TextTypeAlignments/'
            },
            {
            title: 'ImportedPageCropOptions',
            path: '/omv/ImportedPageCropOptions/'
            },
            {
            title: 'PrintPreference',
            path: '/omv/PrintPreference/'
            },
            {
            title: 'SearchStrategies',
            path: '/omv/SearchStrategies/'
            },
            {
            title: 'PrintFormBehavior',
            path: '/omv/PrintFormBehavior/'
            },
            {
            title: 'DictionaryPreference',
            path: '/omv/DictionaryPreference/'
            },
            {
            title: 'CheckBox',
            path: '/omv/CheckBox/'
            },
            {
            title: 'KinsokuHangTypes',
            path: '/omv/KinsokuHangTypes/'
            },
            {
            title: 'HyperlinkURLDestinations',
            path: '/omv/HyperlinkURLDestinations/'
            },
            {
            title: 'InsertionPoint',
            path: '/omv/InsertionPoint/'
            },
            {
            title: 'Paths',
            path: '/omv/Paths/'
            },
            {
            title: 'Sampling',
            path: '/omv/Sampling/'
            },
            {
            title: 'XMLInstruction',
            path: '/omv/XMLInstruction/'
            },
            {
            title: 'TagRaster',
            path: '/omv/TagRaster/'
            },
            {
            title: 'Snippet',
            path: '/omv/Snippet/'
            },
            {
            title: 'PDF',
            path: '/omv/PDF/'
            },
            {
            title: 'ConditionIndicatorMode',
            path: '/omv/ConditionIndicatorMode/'
            },
            {
            title: 'AutoSizingReferenceEnum',
            path: '/omv/AutoSizingReferenceEnum/'
            },
            {
            title: 'FrameFittingOption',
            path: '/omv/FrameFittingOption/'
            },
            {
            title: 'GotoNextStateBehavior',
            path: '/omv/GotoNextStateBehavior/'
            },
            {
            title: 'NothingEnum',
            path: '/omv/NothingEnum/'
            },
            {
            title: 'EPSImportPreference',
            path: '/omv/EPSImportPreference/'
            },
            {
            title: 'UITools',
            path: '/omv/UITools/'
            },
            {
            title: 'MeasurementCombobox',
            path: '/omv/MeasurementCombobox/'
            },
            {
            title: 'GuidePreference',
            path: '/omv/GuidePreference/'
            },
            {
            title: 'XMLImportPreference',
            path: '/omv/XMLImportPreference/'
            },
            {
            title: 'ICCProfiles',
            path: '/omv/ICCProfiles/'
            },
            {
            title: 'PreflightRuleInstance',
            path: '/omv/PreflightRuleInstance/'
            },
            {
            title: 'DocumentPresets',
            path: '/omv/DocumentPresets/'
            },
            {
            title: 'Polygon',
            path: '/omv/Polygon/'
            },
            {
            title: 'StoryPreference',
            path: '/omv/StoryPreference/'
            },
            {
            title: 'Libraries',
            path: '/omv/Libraries/'
            },
            {
            title: 'StoryGridDataInformation',
            path: '/omv/StoryGridDataInformation/'
            },
            {
            title: 'BehaviorEvents',
            path: '/omv/BehaviorEvents/'
            },
            {
            title: 'Flip',
            path: '/omv/Flip/'
            },
            {
            title: 'SourceFieldType',
            path: '/omv/SourceFieldType/'
            },
            {
            title: 'ObjectStyleObjectEffectsCategorySettings',
            path: '/omv/ObjectStyleObjectEffectsCategorySettings/'
            },
            {
            title: 'OpenFileBehaviors',
            path: '/omv/OpenFileBehaviors/'
            },
            {
            title: 'ShowHideFieldsBehavior',
            path: '/omv/ShowHideFieldsBehavior/'
            },
            {
            title: 'IdleEvent',
            path: '/omv/IdleEvent/'
            },
            {
            title: 'EndnoteOption',
            path: '/omv/EndnoteOption/'
            },
            {
            title: 'FirstBaseline',
            path: '/omv/FirstBaseline/'
            },
            {
            title: 'DocumentPrintUiOptions',
            path: '/omv/DocumentPrintUiOptions/'
            },
            {
            title: 'PageTransitionOverrideOptions',
            path: '/omv/PageTransitionOverrideOptions/'
            },
            {
            title: 'Leading',
            path: '/omv/Leading/'
            },
            {
            title: 'UndoModes',
            path: '/omv/UndoModes/'
            },
            {
            title: 'FormField',
            path: '/omv/FormField/'
            },
            {
            title: 'FindChangeFillTransparencySetting',
            path: '/omv/FindChangeFillTransparencySetting/'
            },
            {
            title: 'Assignment',
            path: '/omv/Assignment/'
            },
            {
            title: 'PolygonPreference',
            path: '/omv/PolygonPreference/'
            },
            {
            title: 'GotoPageBehavior',
            path: '/omv/GotoPageBehavior/'
            },
            {
            title: 'GridPreference',
            path: '/omv/GridPreference/'
            },
            {
            title: 'ImportedPage',
            path: '/omv/ImportedPage/'
            },
            {
            title: 'BuildingBlocks',
            path: '/omv/BuildingBlocks/'
            },
            {
            title: 'Endnotes',
            path: '/omv/Endnotes/'
            },
            {
            title: 'ColorSettingsPolicy',
            path: '/omv/ColorSettingsPolicy/'
            },
            {
            title: 'Spread',
            path: '/omv/Spread/'
            },
            {
            title: 'ContentPlacerObject',
            path: '/omv/ContentPlacerObject/'
            },
            {
            title: 'IntegerEditbox',
            path: '/omv/IntegerEditbox/'
            },
            {
            title: 'SoundPosterTypes',
            path: '/omv/SoundPosterTypes/'
            },
            {
            title: 'NumberingStyle',
            path: '/omv/NumberingStyle/'
            },
            {
            title: 'ClippingPathType',
            path: '/omv/ClippingPathType/'
            },
            {
            title: 'ImportPlatform',
            path: '/omv/ImportPlatform/'
            },
            {
            title: 'Library',
            path: '/omv/Library/'
            },
            {
            title: 'PICT',
            path: '/omv/PICT/'
            },
            {
            title: 'ImageConversion',
            path: '/omv/ImageConversion/'
            },
            {
            title: 'MenuItem',
            path: '/omv/MenuItem/'
            },
            {
            title: 'Trapping',
            path: '/omv/Trapping/'
            },
            {
            title: 'Language',
            path: '/omv/Language/'
            },
            {
            title: 'TextExportPreference',
            path: '/omv/TextExportPreference/'
            },
            {
            title: 'XMLComments',
            path: '/omv/XMLComments/'
            },
            {
            title: 'MenuSeparators',
            path: '/omv/MenuSeparators/'
            },
            {
            title: 'Column',
            path: '/omv/Column/'
            },
            {
            title: 'PlayOperations',
            path: '/omv/PlayOperations/'
            },
            {
            title: 'ObjectExportOption',
            path: '/omv/ObjectExportOption/'
            },
            {
            title: 'Groups',
            path: '/omv/Groups/'
            },
            {
            title: 'StrokeCornerAdjustment',
            path: '/omv/StrokeCornerAdjustment/'
            },
            {
            title: 'TabStops',
            path: '/omv/TabStops/'
            },
            {
            title: 'PasteboardPreference',
            path: '/omv/PasteboardPreference/'
            },
            {
            title: 'PreflightProfileRules',
            path: '/omv/PreflightProfileRules/'
            },
            {
            title: 'TextWrapPreference',
            path: '/omv/TextWrapPreference/'
            },
            {
            title: 'TaggedPDFPreference',
            path: '/omv/TaggedPDFPreference/'
            },
            {
            title: 'CompositeFontEntries',
            path: '/omv/CompositeFontEntries/'
            },
            {
            title: 'FlipValues',
            path: '/omv/FlipValues/'
            },
            {
            title: 'Topic',
            path: '/omv/Topic/'
            },
            {
            title: 'Document',
            path: '/omv/Document/'
            },
            {
            title: 'InsertionPoints',
            path: '/omv/InsertionPoints/'
            },
            {
            title: 'ParagraphDirectionOptions',
            path: '/omv/ParagraphDirectionOptions/'
            },
            {
            title: 'GotoFirstPageBehaviors',
            path: '/omv/GotoFirstPageBehaviors/'
            },
            {
            title: 'Books',
            path: '/omv/Books/'
            },
            {
            title: 'PreflightProfile',
            path: '/omv/PreflightProfile/'
            },
            {
            title: 'DTDs',
            path: '/omv/DTDs/'
            },
            {
            title: 'ContourOption',
            path: '/omv/ContourOption/'
            },
            {
            title: 'TextPaths',
            path: '/omv/TextPaths/'
            },
            {
            title: 'ObjectStyleGroup',
            path: '/omv/ObjectStyleGroup/'
            },
            {
            title: 'CheckboxControls',
            path: '/omv/CheckboxControls/'
            },
            {
            title: 'CrossReferenceSources',
            path: '/omv/CrossReferenceSources/'
            },
            {
            title: 'PageTransitionDirectionOptions',
            path: '/omv/PageTransitionDirectionOptions/'
            },
            {
            title: 'LinkMetadata',
            path: '/omv/LinkMetadata/'
            },
            {
            title: 'XMLViewPreference',
            path: '/omv/XMLViewPreference/'
            },
            {
            title: 'PageOrientation',
            path: '/omv/PageOrientation/'
            },
            {
            title: 'State',
            path: '/omv/State/'
            },
            {
            title: 'AssignedStories',
            path: '/omv/AssignedStories/'
            },
            {
            title: 'ButtonPreference',
            path: '/omv/ButtonPreference/'
            },
            {
            title: 'TextFramePreference',
            path: '/omv/TextFramePreference/'
            },
            {
            title: 'ImagePageBreakType',
            path: '/omv/ImagePageBreakType/'
            },
            {
            title: 'TextVariables',
            path: '/omv/TextVariables/'
            },
            {
            title: 'NestedGrepStyle',
            path: '/omv/NestedGrepStyle/'
            },
            {
            title: 'RowTypes',
            path: '/omv/RowTypes/'
            },
            {
            title: 'OpacityGradientStops',
            path: '/omv/OpacityGradientStops/'
            },
            {
            title: 'FitOptions',
            path: '/omv/FitOptions/'
            },
            {
            title: 'FindChangeSatinSetting',
            path: '/omv/FindChangeSatinSetting/'
            },
            {
            title: 'PercentCombobox',
            path: '/omv/PercentCombobox/'
            },
            {
            title: 'CheckboxControl',
            path: '/omv/CheckboxControl/'
            },
            {
            title: 'RasterResolutionOptions',
            path: '/omv/RasterResolutionOptions/'
            },
            {
            title: 'TrapPreset',
            path: '/omv/TrapPreset/'
            },
            {
            title: 'RuleDataType',
            path: '/omv/RuleDataType/'
            },
            {
            title: 'MoviePlayOperations',
            path: '/omv/MoviePlayOperations/'
            },
            {
            title: 'DisplaySetting',
            path: '/omv/DisplaySetting/'
            },
            {
            title: 'AnchoredRelativeTo',
            path: '/omv/AnchoredRelativeTo/'
            },
            {
            title: 'PDFComments',
            path: '/omv/PDFComments/'
            },
            {
            title: 'FeatherSetting',
            path: '/omv/FeatherSetting/'
            },
            {
            title: 'SpanColumnTypeOptions',
            path: '/omv/SpanColumnTypeOptions/'
            },
            {
            title: 'TableStyleGroups',
            path: '/omv/TableStyleGroups/'
            },
            {
            title: 'HyperlinkPageItemSource',
            path: '/omv/HyperlinkPageItemSource/'
            },
            {
            title: 'PageSideOptions',
            path: '/omv/PageSideOptions/'
            },
            {
            title: 'FormFields',
            path: '/omv/FormFields/'
            },
            {
            title: 'MoviePosterTypes',
            path: '/omv/MoviePosterTypes/'
            },
            {
            title: 'CommentStatusEnum',
            path: '/omv/CommentStatusEnum/'
            },
            {
            title: 'BevelAndEmbossDirection',
            path: '/omv/BevelAndEmbossDirection/'
            },
            {
            title: 'Image',
            path: '/omv/Image/'
            },
            {
            title: 'ArrowHeadAlignmentEnum',
            path: '/omv/ArrowHeadAlignmentEnum/'
            },
            {
            title: 'ChangeMarkings',
            path: '/omv/ChangeMarkings/'
            },
            {
            title: 'PreflightRuleFlag',
            path: '/omv/PreflightRuleFlag/'
            },
            {
            title: 'TextFrame',
            path: '/omv/TextFrame/'
            },
            {
            title: 'AutoSizingTypeEnum',
            path: '/omv/AutoSizingTypeEnum/'
            },
            {
            title: 'CustomLayoutTypeEnum',
            path: '/omv/CustomLayoutTypeEnum/'
            },
            {
            title: 'FindChangeTextOption',
            path: '/omv/FindChangeTextOption/'
            },
            {
            title: 'GoToZoomOptions',
            path: '/omv/GoToZoomOptions/'
            },
            {
            title: 'LinkedStoryOption',
            path: '/omv/LinkedStoryOption/'
            },
            {
            title: 'ComboBox',
            path: '/omv/ComboBox/'
            },
            {
            title: 'Rows',
            path: '/omv/Rows/'
            },
            {
            title: 'RadiobuttonGroups',
            path: '/omv/RadiobuttonGroups/'
            },
            {
            title: 'PDFExportPresets',
            path: '/omv/PDFExportPresets/'
            },
            {
            title: 'GotoLastPageBehaviors',
            path: '/omv/GotoLastPageBehaviors/'
            },
            {
            title: 'Rectangle',
            path: '/omv/Rectangle/'
            },
            {
            title: 'AngleEditboxes',
            path: '/omv/AngleEditboxes/'
            },
            {
            title: 'MapType',
            path: '/omv/MapType/'
            },
            {
            title: 'DocumentEvent',
            path: '/omv/DocumentEvent/'
            },
            {
            title: 'PrintEvent',
            path: '/omv/PrintEvent/'
            },
            {
            title: 'HeaderFooterBreakTypes',
            path: '/omv/HeaderFooterBreakTypes/'
            },
            {
            title: 'IntegerEditboxes',
            path: '/omv/IntegerEditboxes/'
            },
            {
            title: 'GotoNextPageBehaviors',
            path: '/omv/GotoNextPageBehaviors/'
            },
            {
            title: 'HyperlinkTextSources',
            path: '/omv/HyperlinkTextSources/'
            },
            {
            title: 'EndCap',
            path: '/omv/EndCap/'
            },
            {
            title: 'Languages',
            path: '/omv/Languages/'
            },
            {
            title: 'HTMLFXLExportPreference',
            path: '/omv/HTMLFXLExportPreference/'
            },
            {
            title: 'GotoPreviousViewBehavior',
            path: '/omv/GotoPreviousViewBehavior/'
            },
            {
            title: 'RubyTypes',
            path: '/omv/RubyTypes/'
            },
            {
            title: 'SVGs',
            path: '/omv/SVGs/'
            },
            {
            title: 'Graphic',
            path: '/omv/Graphic/'
            },
            {
            title: 'BaselineFrameGridOption',
            path: '/omv/BaselineFrameGridOption/'
            },
            {
            title: 'KinsokuType',
            path: '/omv/KinsokuType/'
            },
            {
            title: 'ConvertTablesOptions',
            path: '/omv/ConvertTablesOptions/'
            },
            {
            title: 'GotoPreviousPageBehavior',
            path: '/omv/GotoPreviousPageBehavior/'
            },
            {
            title: 'Sounds',
            path: '/omv/Sounds/'
            },
            {
            title: 'FillTransparencySetting',
            path: '/omv/FillTransparencySetting/'
            },
            {
            title: 'TagTextForm',
            path: '/omv/TagTextForm/'
            },
            {
            title: 'EndnoteTextFrame',
            path: '/omv/EndnoteTextFrame/'
            },
            {
            title: 'Dialog',
            path: '/omv/Dialog/'
            },
            {
            title: 'ImageIOPreference',
            path: '/omv/ImageIOPreference/'
            },
            {
            title: 'BuildingBlockTypes',
            path: '/omv/BuildingBlockTypes/'
            },
            {
            title: 'IndexSections',
            path: '/omv/IndexSections/'
            },
            {
            title: 'DataMergeImagePlaceholders',
            path: '/omv/DataMergeImagePlaceholders/'
            },
            {
            title: 'TypeContextualUiPreference',
            path: '/omv/TypeContextualUiPreference/'
            },
            {
            title: 'PreviewSizeOptions',
            path: '/omv/PreviewSizeOptions/'
            },
            {
            title: 'Preference',
            path: '/omv/Preference/'
            },
            {
            title: 'CellStyle',
            path: '/omv/CellStyle/'
            },
            {
            title: 'FloatingWindowPosition',
            path: '/omv/FloatingWindowPosition/'
            },
            {
            title: 'HyperlinkAppearanceHighlight',
            path: '/omv/HyperlinkAppearanceHighlight/'
            },
            {
            title: 'LockStateValues',
            path: '/omv/LockStateValues/'
            },
            {
            title: 'AlignOptions',
            path: '/omv/AlignOptions/'
            },
            {
            title: 'CaptionMetadataVariablePreference',
            path: '/omv/CaptionMetadataVariablePreference/'
            },
            {
            title: 'Oval',
            path: '/omv/Oval/'
            },
            {
            title: 'Cell',
            path: '/omv/Cell/'
            },
            {
            title: 'CheckBoxes',
            path: '/omv/CheckBoxes/'
            },
            {
            title: 'MenuElements',
            path: '/omv/MenuElements/'
            },
            {
            title: 'BackgroundTask',
            path: '/omv/BackgroundTask/'
            },
            {
            title: 'MovieBehavior',
            path: '/omv/MovieBehavior/'
            },
            {
            title: 'ChangeObjectPreference',
            path: '/omv/ChangeObjectPreference/'
            },
            {
            title: 'StrokeFillProxySetting',
            path: '/omv/StrokeFillProxySetting/'
            },
            {
            title: 'PreflightOption',
            path: '/omv/PreflightOption/'
            },
            {
            title: 'EventPhases',
            path: '/omv/EventPhases/'
            },
            {
            title: 'CellStyleGroups',
            path: '/omv/CellStyleGroups/'
            },
            {
            title: 'MetadataPreference',
            path: '/omv/MetadataPreference/'
            },
            {
            title: 'EndnoteRange',
            path: '/omv/EndnoteRange/'
            },
            {
            title: 'TextFrameContents',
            path: '/omv/TextFrameContents/'
            },
            {
            title: 'WatermarkVerticalPositionEnum',
            path: '/omv/WatermarkVerticalPositionEnum/'
            },
            {
            title: 'XMLImportStyles',
            path: '/omv/XMLImportStyles/'
            },
            {
            title: 'Reply',
            path: '/omv/Reply/'
            },
            {
            title: 'IntegerComboboxes',
            path: '/omv/IntegerComboboxes/'
            },
            {
            title: 'Row',
            path: '/omv/Row/'
            },
            {
            title: 'FindObjectPreference',
            path: '/omv/FindObjectPreference/'
            },
            {
            title: 'Stories',
            path: '/omv/Stories/'
            },
            {
            title: 'ColorGroupSwatches',
            path: '/omv/ColorGroupSwatches/'
            },
            {
            title: 'PlacedVectorProfilePolicy',
            path: '/omv/PlacedVectorProfilePolicy/'
            },
            {
            title: 'TextDefault',
            path: '/omv/TextDefault/'
            },
            {
            title: 'RubyAlignments',
            path: '/omv/RubyAlignments/'
            },
            {
            title: 'ParagraphJustificationOptions',
            path: '/omv/ParagraphJustificationOptions/'
            },
            {
            title: 'HyperlinkExternalPageDestinations',
            path: '/omv/HyperlinkExternalPageDestinations/'
            },
            {
            title: 'TableStyles',
            path: '/omv/TableStyles/'
            },
            {
            title: 'FindChangeStrokeTransparencySetting',
            path: '/omv/FindChangeStrokeTransparencySetting/'
            },
            {
            title: 'FindChangeGrepOption',
            path: '/omv/FindChangeGrepOption/'
            },
            {
            title: 'CellTypeEnum',
            path: '/omv/CellTypeEnum/'
            },
            {
            title: 'Rectangles',
            path: '/omv/Rectangles/'
            },
            {
            title: 'RubyParentSpacing',
            path: '/omv/RubyParentSpacing/'
            },
            {
            title: 'IdleTasks',
            path: '/omv/IdleTasks/'
            },
            {
            title: 'ParagraphDestination',
            path: '/omv/ParagraphDestination/'
            },
            {
            title: 'ProofingType',
            path: '/omv/ProofingType/'
            },
            {
            title: 'FindChangeOuterGlowSetting',
            path: '/omv/FindChangeOuterGlowSetting/'
            },
            {
            title: 'NumberingRestartPolicy',
            path: '/omv/NumberingRestartPolicy/'
            },
            {
            title: 'FindChangeFeatherSetting',
            path: '/omv/FindChangeFeatherSetting/'
            },
            {
            title: 'WatermarkPreference',
            path: '/omv/WatermarkPreference/'
            },
            {
            title: 'RecordsPerPage',
            path: '/omv/RecordsPerPage/'
            },
            {
            title: 'TagTransparency',
            path: '/omv/TagTransparency/'
            },
            {
            title: 'TextWrapModes',
            path: '/omv/TextWrapModes/'
            },
            {
            title: 'PanelLayoutResize',
            path: '/omv/PanelLayoutResize/'
            },
            {
            title: 'TimingGroup',
            path: '/omv/TimingGroup/'
            },
            {
            title: 'GuideTypeOptions',
            path: '/omv/GuideTypeOptions/'
            },
            {
            title: 'GraphicLine',
            path: '/omv/GraphicLine/'
            },
            {
            title: 'AlignDistributePreference',
            path: '/omv/AlignDistributePreference/'
            },
            {
            title: 'CellStyleGroup',
            path: '/omv/CellStyleGroup/'
            },
            {
            title: 'CommentTypeEnum',
            path: '/omv/CommentTypeEnum/'
            },
            {
            title: 'ChapterNumberPreference',
            path: '/omv/ChapterNumberPreference/'
            },
            {
            title: 'AlignDistributeBounds',
            path: '/omv/AlignDistributeBounds/'
            },
            {
            title: 'Layer',
            path: '/omv/Layer/'
            },
            {
            title: 'Condition',
            path: '/omv/Condition/'
            },
            {
            title: 'ScriptLanguage',
            path: '/omv/ScriptLanguage/'
            },
            {
            title: 'BlendingSpace',
            path: '/omv/BlendingSpace/'
            },
            {
            title: 'VersionState',
            path: '/omv/VersionState/'
            },
            {
            title: 'Notes',
            path: '/omv/Notes/'
            },
            {
            title: 'PageNumberStyle',
            path: '/omv/PageNumberStyle/'
            },
            {
            title: 'Button',
            path: '/omv/Button/'
            },
            {
            title: 'FeatherCornerType',
            path: '/omv/FeatherCornerType/'
            },
            {
            title: 'OuterGlowSetting',
            path: '/omv/OuterGlowSetting/'
            },
            {
            title: 'Bookmarks',
            path: '/omv/Bookmarks/'
            },
            {
            title: 'PreflightProcesses',
            path: '/omv/PreflightProcesses/'
            },
            {
            title: 'Hyperlinks',
            path: '/omv/Hyperlinks/'
            },
            {
            title: 'MixedInkGroup',
            path: '/omv/MixedInkGroup/'
            },
            {
            title: 'CjkGridPreference',
            path: '/omv/CjkGridPreference/'
            },
            {
            title: 'CharacterDirectionOptions',
            path: '/omv/CharacterDirectionOptions/'
            },
            {
            title: 'PreflightRules',
            path: '/omv/PreflightRules/'
            },
            {
            title: 'StartParagraph',
            path: '/omv/StartParagraph/'
            },
            {
            title: 'AngleComboboxes',
            path: '/omv/AngleComboboxes/'
            },
            {
            title: 'DTD',
            path: '/omv/DTD/'
            },
            {
            title: 'PaperSize',
            path: '/omv/PaperSize/'
            },
            {
            title: 'PdfDisplayTitleOptions',
            path: '/omv/PdfDisplayTitleOptions/'
            },
            {
            title: 'Link',
            path: '/omv/Link/'
            },
            {
            title: 'LanguageWithVendors',
            path: '/omv/LanguageWithVendors/'
            },
            {
            title: 'MatchParagraphStylePreference',
            path: '/omv/MatchParagraphStylePreference/'
            },
            {
            title: 'Profile',
            path: '/omv/Profile/'
            },
            {
            title: 'PrintPageOrientation',
            path: '/omv/PrintPageOrientation/'
            },
            {
            title: 'EPSText',
            path: '/omv/EPSText/'
            },
            {
            title: 'XMLItem',
            path: '/omv/XMLItem/'
            },
            {
            title: 'GridAlignment',
            path: '/omv/GridAlignment/'
            },
            {
            title: 'index.md',
            path: '/omv/index.md/'
            },
            {
            title: 'TransparencyPreference',
            path: '/omv/TransparencyPreference/'
            },
            {
            title: 'Texts',
            path: '/omv/Texts/'
            },
            {
            title: 'StrokeFillTargetOptions',
            path: '/omv/StrokeFillTargetOptions/'
            },
            {
            title: 'PDFExportPreference',
            path: '/omv/PDFExportPreference/'
            },
            {
            title: 'XMLTransformFile',
            path: '/omv/XMLTransformFile/'
            },
            {
            title: 'StaticText',
            path: '/omv/StaticText/'
            },
            {
            title: 'ExportRangeOrAllPages',
            path: '/omv/ExportRangeOrAllPages/'
            },
            {
            title: 'Line',
            path: '/omv/Line/'
            },
            {
            title: 'PrinterPreset',
            path: '/omv/PrinterPreset/'
            },
            {
            title: 'Table',
            path: '/omv/Table/'
            },
            {
            title: 'TagType',
            path: '/omv/TagType/'
            },
            {
            title: 'TextVariableInstances',
            path: '/omv/TextVariableInstances/'
            },
            {
            title: 'Colors',
            path: '/omv/Colors/'
            },
            {
            title: 'Links',
            path: '/omv/Links/'
            },
            {
            title: 'HorizontalAlignment',
            path: '/omv/HorizontalAlignment/'
            },
            {
            title: 'AlternateGlyphForms',
            path: '/omv/AlternateGlyphForms/'
            },
            {
            title: 'HyperlinkAppearanceStyle',
            path: '/omv/HyperlinkAppearanceStyle/'
            },
            {
            title: 'PNGExportPreference',
            path: '/omv/PNGExportPreference/'
            },
            {
            title: 'PerformanceMetricOptions',
            path: '/omv/PerformanceMetricOptions/'
            },
            {
            title: 'FindTextPreference',
            path: '/omv/FindTextPreference/'
            },
            {
            title: 'ThreadedTextFrameTextOptions',
            path: '/omv/ThreadedTextFrameTextOptions/'
            },
            {
            title: 'ObjectStyleStrokeEffectsCategorySettings',
            path: '/omv/ObjectStyleStrokeEffectsCategorySettings/'
            },
            {
            title: 'Behaviors',
            path: '/omv/Behaviors/'
            },
            {
            title: 'CornerOptions',
            path: '/omv/CornerOptions/'
            },
            {
            title: 'PNGExportRangeEnum',
            path: '/omv/PNGExportRangeEnum/'
            },
            {
            title: 'PathType',
            path: '/omv/PathType/'
            },
            {
            title: 'Guides',
            path: '/omv/Guides/'
            },
            {
            title: 'SoundBehaviors',
            path: '/omv/SoundBehaviors/'
            },
            {
            title: 'EPubFixedLayoutExportPreference',
            path: '/omv/EPubFixedLayoutExportPreference/'
            },
            {
            title: 'PathPoint',
            path: '/omv/PathPoint/'
            },
            {
            title: 'SoundBehavior',
            path: '/omv/SoundBehavior/'
            },
            {
            title: 'VerticallyRelativeTo',
            path: '/omv/VerticallyRelativeTo/'
            },
            {
            title: 'AnchorPoint',
            path: '/omv/AnchorPoint/'
            },
            {
            title: 'Window',
            path: '/omv/Window/'
            },
            {
            title: 'BevelAndEmbossSetting',
            path: '/omv/BevelAndEmbossSetting/'
            },
            {
            title: 'NavigationPoint',
            path: '/omv/NavigationPoint/'
            },
            {
            title: 'FindChangeTransliterateCharacterTypes',
            path: '/omv/FindChangeTransliterateCharacterTypes/'
            },
            {
            title: 'ContentType',
            path: '/omv/ContentType/'
            },
            {
            title: 'Sequences',
            path: '/omv/Sequences/'
            },
            {
            title: 'Swatches',
            path: '/omv/Swatches/'
            },
            {
            title: 'PPDValues',
            path: '/omv/PPDValues/'
            },
            {
            title: 'ObjectStyleExportTagMap',
            path: '/omv/ObjectStyleExportTagMap/'
            },
            {
            title: 'Bullet',
            path: '/omv/Bullet/'
            },
            {
            title: 'PercentComboboxes',
            path: '/omv/PercentComboboxes/'
            },
            {
            title: 'ChangeGrepPreference',
            path: '/omv/ChangeGrepPreference/'
            },
            {
            title: 'PDFJPEGQualityOptions',
            path: '/omv/PDFJPEGQualityOptions/'
            },
            {
            title: 'VariableTypes',
            path: '/omv/VariableTypes/'
            },
            {
            title: 'HyperlinkTextDestinations',
            path: '/omv/HyperlinkTextDestinations/'
            },
            {
            title: 'ColorGroupSwatch',
            path: '/omv/ColorGroupSwatch/'
            },
            {
            title: 'CharacterStyleGroup',
            path: '/omv/CharacterStyleGroup/'
            },
            {
            title: 'ClearFormBehaviors',
            path: '/omv/ClearFormBehaviors/'
            },
            {
            title: 'ToolBox',
            path: '/omv/ToolBox/'
            },
            {
            title: 'HyperlinkDestinationPageSetting',
            path: '/omv/HyperlinkDestinationPageSetting/'
            },
            {
            title: 'CrossReferences',
            path: '/omv/CrossReferences/'
            },
            {
            title: 'FolioBindingDirectionOptions',
            path: '/omv/FolioBindingDirectionOptions/'
            },
            {
            title: 'FileNameVariablePreference',
            path: '/omv/FileNameVariablePreference/'
            },
            {
            title: 'NestedGrepStyles',
            path: '/omv/NestedGrepStyles/'
            },
            {
            title: 'ViewZoomStyle',
            path: '/omv/ViewZoomStyle/'
            },
            {
            title: 'XMLInstructions',
            path: '/omv/XMLInstructions/'
            },
            {
            title: 'Menu',
            path: '/omv/Menu/'
            },
            {
            title: 'NestedStyle',
            path: '/omv/NestedStyle/'
            },
            {
            title: 'States',
            path: '/omv/States/'
            },
            {
            title: 'JPEGExportPreference',
            path: '/omv/JPEGExportPreference/'
            },
            {
            title: 'ExportFormat',
            path: '/omv/ExportFormat/'
            },
            {
            title: 'Spacing',
            path: '/omv/Spacing/'
            },
            {
            title: 'WarichuAlignment',
            path: '/omv/WarichuAlignment/'
            },
            {
            title: 'Conditions',
            path: '/omv/Conditions/'
            },
            {
            title: 'PreflightScopeOptions',
            path: '/omv/PreflightScopeOptions/'
            },
            {
            title: 'RadiobuttonGroup',
            path: '/omv/RadiobuttonGroup/'
            },
            {
            title: 'TextVariableInstance',
            path: '/omv/TextVariableInstance/'
            },
            {
            title: 'SignatureFields',
            path: '/omv/SignatureFields/'
            },
            {
            title: 'JpegColorSpaceEnum',
            path: '/omv/JpegColorSpaceEnum/'
            },
            {
            title: 'ClippingPathSettings',
            path: '/omv/ClippingPathSettings/'
            },
            {
            title: 'Book',
            path: '/omv/Book/'
            },
            {
            title: 'IndexingSortOptions',
            path: '/omv/IndexingSortOptions/'
            },
            {
            title: 'ImageDataTypes',
            path: '/omv/ImageDataTypes/'
            },
            {
            title: 'ImageFormat',
            path: '/omv/ImageFormat/'
            },
            {
            title: 'XMLPreference',
            path: '/omv/XMLPreference/'
            },
            {
            title: 'NotePreference',
            path: '/omv/NotePreference/'
            },
            {
            title: 'PointType',
            path: '/omv/PointType/'
            },
            {
            title: 'CharacterStyles',
            path: '/omv/CharacterStyles/'
            },
            {
            title: 'LanguagesWithVendors',
            path: '/omv/LanguagesWithVendors/'
            },
            {
            title: 'NestedStyles',
            path: '/omv/NestedStyles/'
            },
            {
            title: 'ViewZoomBehaviors',
            path: '/omv/ViewZoomBehaviors/'
            },
            {
            title: 'ArticleChild',
            path: '/omv/ArticleChild/'
            },
            {
            title: 'DistributeOptions',
            path: '/omv/DistributeOptions/'
            },
            {
            title: 'AntiAliasType',
            path: '/omv/AntiAliasType/'
            },
            {
            title: 'Footnotes',
            path: '/omv/Footnotes/'
            },
            {
            title: 'FootnoteOption',
            path: '/omv/FootnoteOption/'
            },
            {
            title: 'PreflightLayerOptions',
            path: '/omv/PreflightLayerOptions/'
            },
            {
            title: 'TransformAttributeOption',
            path: '/omv/TransformAttributeOption/'
            },
            {
            title: 'Movies',
            path: '/omv/Movies/'
            },
            {
            title: 'DigpubVersion',
            path: '/omv/DigpubVersion/'
            },
            {
            title: 'ScriptMenuAction',
            path: '/omv/ScriptMenuAction/'
            },
            {
            title: 'ComboBoxes',
            path: '/omv/ComboBoxes/'
            },
            {
            title: 'EPubExportPreference',
            path: '/omv/EPubExportPreference/'
            },
            {
            title: 'ListType',
            path: '/omv/ListType/'
            },
            {
            title: 'Word',
            path: '/omv/Word/'
            },
            {
            title: 'PageReferences',
            path: '/omv/PageReferences/'
            },
            {
            title: 'GotoPreviousPageBehaviors',
            path: '/omv/GotoPreviousPageBehaviors/'
            },
            {
            title: 'ChangeConditionsModes',
            path: '/omv/ChangeConditionsModes/'
            },
            {
            title: 'MasterSpread',
            path: '/omv/MasterSpread/'
            },
            {
            title: 'DimensionsConstraints',
            path: '/omv/DimensionsConstraints/'
            },
            {
            title: 'HttpLinkConnectionManagerObject',
            path: '/omv/HttpLinkConnectionManagerObject/'
            },
            {
            title: 'Menus',
            path: '/omv/Menus/'
            },
            {
            title: 'TextEditboxes',
            path: '/omv/TextEditboxes/'
            },
            {
            title: 'FlattenerLevel',
            path: '/omv/FlattenerLevel/'
            },
            {
            title: 'ColorGroup',
            path: '/omv/ColorGroup/'
            },
            {
            title: 'VariableNumberingStyles',
            path: '/omv/VariableNumberingStyles/'
            },
            {
            title: 'ArrowHead',
            path: '/omv/ArrowHead/'
            },
            {
            title: 'MediaItems',
            path: '/omv/MediaItems/'
            },
            {
            title: 'FindGlyphPreference',
            path: '/omv/FindGlyphPreference/'
            },
            {
            title: 'FindChangeBlendingSetting',
            path: '/omv/FindChangeBlendingSetting/'
            },
            {
            title: 'MenuItems',
            path: '/omv/MenuItems/'
            },
            {
            title: 'MonoBitmapCompression',
            path: '/omv/MonoBitmapCompression/'
            },
            {
            title: 'PDFs',
            path: '/omv/PDFs/'
            },
            {
            title: 'TransformationMatrix',
            path: '/omv/TransformationMatrix/'
            },
            {
            title: 'XMLTags',
            path: '/omv/XMLTags/'
            },
            {
            title: 'EPS',
            path: '/omv/EPS/'
            },
            {
            title: 'SizeTypeEnum',
            path: '/omv/SizeTypeEnum/'
            },
            {
            title: 'Index',
            path: '/omv/Index/'
            },
            {
            title: 'SmoothScrollingOptions',
            path: '/omv/SmoothScrollingOptions/'
            },
            {
            title: 'TransformPositionReference',
            path: '/omv/TransformPositionReference/'
            },
            {
            title: 'FontEmbedding',
            path: '/omv/FontEmbedding/'
            },
            {
            title: 'ParagraphStyle',
            path: '/omv/ParagraphStyle/'
            },
            {
            title: 'Dialogs',
            path: '/omv/Dialogs/'
            },
            {
            title: 'ParagraphBorderTopOriginEnum',
            path: '/omv/ParagraphBorderTopOriginEnum/'
            },
            {
            title: 'XMLImportMap',
            path: '/omv/XMLImportMap/'
            },
            {
            title: 'FeatherMode',
            path: '/omv/FeatherMode/'
            },
            {
            title: 'StrokeOrderTypes',
            path: '/omv/StrokeOrderTypes/'
            },
            {
            title: 'XMLAttributes',
            path: '/omv/XMLAttributes/'
            },
            {
            title: 'ValidationError',
            path: '/omv/ValidationError/'
            },
            {
            title: 'EndnoteTextFrames',
            path: '/omv/EndnoteTextFrames/'
            },
            {
            title: 'PageNumberPosition',
            path: '/omv/PageNumberPosition/'
            },
            {
            title: 'ListBoxes',
            path: '/omv/ListBoxes/'
            },
            {
            title: 'ShadowMode',
            path: '/omv/ShadowMode/'
            },
            {
            title: 'PageReference',
            path: '/omv/PageReference/'
            },
            {
            title: 'IndexCapitalizationOptions',
            path: '/omv/IndexCapitalizationOptions/'
            },
            {
            title: 'VerticalAlignment',
            path: '/omv/VerticalAlignment/'
            },
            {
            title: 'IdleTask',
            path: '/omv/IdleTask/'
            },
            {
            title: 'XMLExportMap',
            path: '/omv/XMLExportMap/'
            },
            {
            title: 'FindChangeColorOption',
            path: '/omv/FindChangeColorOption/'
            },
            {
            title: 'HiddenText',
            path: '/omv/HiddenText/'
            },
            {
            title: 'EnablingGroups',
            path: '/omv/EnablingGroups/'
            },
            {
            title: 'BitmapCompression',
            path: '/omv/BitmapCompression/'
            },
            {
            title: 'DialogRow',
            path: '/omv/DialogRow/'
            },
            {
            title: 'RadioButtons',
            path: '/omv/RadioButtons/'
            },
            {
            title: 'MarkLineWeight',
            path: '/omv/MarkLineWeight/'
            },
            {
            title: 'GeneralPreference',
            path: '/omv/GeneralPreference/'
            },
            {
            title: 'ParagraphBorderEnum',
            path: '/omv/ParagraphBorderEnum/'
            },
            {
            title: 'SpellPreference',
            path: '/omv/SpellPreference/'
            },
            {
            title: 'ChapterNumberVariablePreference',
            path: '/omv/ChapterNumberVariablePreference/'
            },
            {
            title: 'SelectAll',
            path: '/omv/SelectAll/'
            },
            {
            title: 'StoryHorizontalOrVertical',
            path: '/omv/StoryHorizontalOrVertical/'
            },
            {
            title: 'BevelAndEmbossTechnique',
            path: '/omv/BevelAndEmbossTechnique/'
            },
            {
            title: 'WhenScalingOptions',
            path: '/omv/WhenScalingOptions/'
            },
            {
            title: 'ConvertPageBreaks',
            path: '/omv/ConvertPageBreaks/'
            },
            {
            title: 'TagTextExportCharacterSet',
            path: '/omv/TagTextExportCharacterSet/'
            },
            {
            title: 'Screeening',
            path: '/omv/Screeening/'
            },
            {
            title: 'SingleWordJustification',
            path: '/omv/SingleWordJustification/'
            },
            {
            title: 'TextExportCharacterSet',
            path: '/omv/TextExportCharacterSet/'
            },
            {
            title: 'DefaultRenderingIntent',
            path: '/omv/DefaultRenderingIntent/'
            },
            {
            title: 'GotoPageBehaviors',
            path: '/omv/GotoPageBehaviors/'
            },
            {
            title: 'ParagraphShadingWidthEnum',
            path: '/omv/ParagraphShadingWidthEnum/'
            },
            {
            title: 'TilingTypes',
            path: '/omv/TilingTypes/'
            },
            {
            title: 'EPSTexts',
            path: '/omv/EPSTexts/'
            },
            {
            title: 'GradientType',
            path: '/omv/GradientType/'
            },
            {
            title: 'PublishCoverEnum',
            path: '/omv/PublishCoverEnum/'
            },
            {
            title: 'AnchorPosition',
            path: '/omv/AnchorPosition/'
            },
            {
            title: 'FindChangeDirectionalFeatherSetting',
            path: '/omv/FindChangeDirectionalFeatherSetting/'
            },
            {
            title: 'AssignmentExportOptions',
            path: '/omv/AssignmentExportOptions/'
            },
            {
            title: 'RuleDataObject',
            path: '/omv/RuleDataObject/'
            },
            {
            title: 'KentenCharacter',
            path: '/omv/KentenCharacter/'
            },
            {
            title: 'SpreadFlattenerLevel',
            path: '/omv/SpreadFlattenerLevel/'
            },
            {
            title: 'ClearFormBehavior',
            path: '/omv/ClearFormBehavior/'
            },
            {
            title: 'AlignmentStyleOptions',
            path: '/omv/AlignmentStyleOptions/'
            },
            {
            title: 'LibraryPanelViews',
            path: '/omv/LibraryPanelViews/'
            },
            {
            title: 'NamedGrids',
            path: '/omv/NamedGrids/'
            },
            {
            title: 'TransparencySetting',
            path: '/omv/TransparencySetting/'
            },
            {
            title: 'TimingList',
            path: '/omv/TimingList/'
            },
            {
            title: 'FontStatus',
            path: '/omv/FontStatus/'
            },
            {
            title: 'SplineItems',
            path: '/omv/SplineItems/'
            },
            {
            title: 'SmartMatchOptions',
            path: '/omv/SmartMatchOptions/'
            },
            {
            title: 'CharStyleMappings',
            path: '/omv/CharStyleMappings/'
            },
            {
            title: 'PageItems',
            path: '/omv/PageItems/'
            },
            {
            title: 'SplineItem',
            path: '/omv/SplineItem/'
            },
            {
            title: 'FlattenerPresets',
            path: '/omv/FlattenerPresets/'
            },
            {
            title: 'CompositeFont',
            path: '/omv/CompositeFont/'
            },
            {
            title: 'TaskState',
            path: '/omv/TaskState/'
            },
            {
            title: 'ResizeMethods',
            path: '/omv/ResizeMethods/'
            },
            {
            title: 'PathTypeAlignments',
            path: '/omv/PathTypeAlignments/'
            },
            {
            title: 'Documents',
            path: '/omv/Documents/'
            },
            {
            title: 'CharStyleMapping',
            path: '/omv/CharStyleMapping/'
            },
            {
            title: 'PageRange',
            path: '/omv/PageRange/'
            },
            {
            title: 'Ovals',
            path: '/omv/Ovals/'
            },
            {
            title: 'NumberingList',
            path: '/omv/NumberingList/'
            },
            {
            title: 'HeaderTypes',
            path: '/omv/HeaderTypes/'
            },
            {
            title: 'ZoomOptions',
            path: '/omv/ZoomOptions/'
            },
            {
            title: 'ChangeColorPreference',
            path: '/omv/ChangeColorPreference/'
            },
            {
            title: 'Text',
            path: '/omv/Text/'
            },
            {
            title: 'Columns',
            path: '/omv/Columns/'
            },
            {
            title: 'SubmitFormBehaviors',
            path: '/omv/SubmitFormBehaviors/'
            },
            {
            title: 'BookContentStatus',
            path: '/omv/BookContentStatus/'
            },
            {
            title: 'XMLComment',
            path: '/omv/XMLComment/'
            },
            {
            title: 'Application',
            path: '/omv/Application/'
            },
            {
            title: 'DataMergePreference',
            path: '/omv/DataMergePreference/'
            },
            {
            title: 'ArticleChildren',
            path: '/omv/ArticleChildren/'
            },
            {
            title: 'StoryDirectionOptions',
            path: '/omv/StoryDirectionOptions/'
            },
            {
            title: 'Font',
            path: '/omv/Font/'
            },
            {
            title: 'RuleWidth',
            path: '/omv/RuleWidth/'
            },
            {
            title: 'ChangeBackgroundColorChoices',
            path: '/omv/ChangeBackgroundColorChoices/'
            },
            {
            title: 'RecordSelection',
            path: '/omv/RecordSelection/'
            },
            {
            title: 'FindChangeDropShadowSetting',
            path: '/omv/FindChangeDropShadowSetting/'
            },
            {
            title: 'ConvertShapeOptions',
            path: '/omv/ConvertShapeOptions/'
            },
            {
            title: 'MatrixContent',
            path: '/omv/MatrixContent/'
            },
            {
            title: 'Spreads',
            path: '/omv/Spreads/'
            },
            {
            title: 'HyperlinkPageDestination',
            path: '/omv/HyperlinkPageDestination/'
            },
            {
            title: 'PlaceGun',
            path: '/omv/PlaceGun/'
            },
            {
            title: 'Article',
            path: '/omv/Article/'
            },
            {
            title: 'EPubExportPreviewAppPreference',
            path: '/omv/EPubExportPreviewAppPreference/'
            },
            {
            title: 'MojikumiTable',
            path: '/omv/MojikumiTable/'
            },
            {
            title: 'BulletListExportOption',
            path: '/omv/BulletListExportOption/'
            },
            {
            title: 'EpubNavigationStyle',
            path: '/omv/EpubNavigationStyle/'
            },
            {
            title: 'OutlineJoin',
            path: '/omv/OutlineJoin/'
            },
            {
            title: 'TableFormattingOptions',
            path: '/omv/TableFormattingOptions/'
            },
            {
            title: 'PreflightProfiles',
            path: '/omv/PreflightProfiles/'
            },
            {
            title: 'Submenu',
            path: '/omv/Submenu/'
            },
            {
            title: 'ExportPresetFormat',
            path: '/omv/ExportPresetFormat/'
            },
            {
            title: 'ScaleModes',
            path: '/omv/ScaleModes/'
            },
            {
            title: 'Dropdowns',
            path: '/omv/Dropdowns/'
            },
            {
            title: 'PageNumberingOptions',
            path: '/omv/PageNumberingOptions/'
            },
            {
            title: 'MultiStateObject',
            path: '/omv/MultiStateObject/'
            },
            {
            title: 'XMLElement',
            path: '/omv/XMLElement/'
            },
            {
            title: 'Windows',
            path: '/omv/Windows/'
            },
            {
            title: 'PositionAttributes',
            path: '/omv/PositionAttributes/'
            },
            {
            title: 'SpanColumnCountOptions',
            path: '/omv/SpanColumnCountOptions/'
            },
            {
            title: 'PageRangeFormat',
            path: '/omv/PageRangeFormat/'
            },
            {
            title: 'MasterSpreads',
            path: '/omv/MasterSpreads/'
            },
            {
            title: 'PageReferenceType',
            path: '/omv/PageReferenceType/'
            },
            {
            title: 'Events',
            path: '/omv/Events/'
            },
            {
            title: 'ColorOutputModes',
            path: '/omv/ColorOutputModes/'
            },
            {
            title: 'DynamicMediaHandlingOptions',
            path: '/omv/DynamicMediaHandlingOptions/'
            },
            {
            title: 'Characters',
            path: '/omv/Characters/'
            },
            {
            title: 'OpenFileBehavior',
            path: '/omv/OpenFileBehavior/'
            },
            {
            title: 'Gradients',
            path: '/omv/Gradients/'
            },
            {
            title: 'BaselineFrameGridRelativeOption',
            path: '/omv/BaselineFrameGridRelativeOption/'
            },
            {
            title: 'AdjustLayoutPreference',
            path: '/omv/AdjustLayoutPreference/'
            },
            {
            title: 'ViewPreference',
            path: '/omv/ViewPreference/'
            },
            {
            title: 'Graphics',
            path: '/omv/Graphics/'
            },
            {
            title: 'TextEditbox',
            path: '/omv/TextEditbox/'
            },
            {
            title: 'FindChangeInnerShadowSetting',
            path: '/omv/FindChangeInnerShadowSetting/'
            },
            {
            title: 'CursorTypes',
            path: '/omv/CursorTypes/'
            },
            {
            title: 'GradientStops',
            path: '/omv/GradientStops/'
            },
            {
            title: 'OpenTypeFeature',
            path: '/omv/OpenTypeFeature/'
            },
            {
            title: 'TaskAlertType',
            path: '/omv/TaskAlertType/'
            },
            {
            title: 'ImportExportEvent',
            path: '/omv/ImportExportEvent/'
            },
            {
            title: 'ContainerType',
            path: '/omv/ContainerType/'
            },
            {
            title: 'ExportOrder',
            path: '/omv/ExportOrder/'
            },
            {
            title: 'Fonts',
            path: '/omv/Fonts/'
            },
            {
            title: 'FontSyncPreference',
            path: '/omv/FontSyncPreference/'
            },
            {
            title: 'FindChangeContentTransparencySetting',
            path: '/omv/FindChangeContentTransparencySetting/'
            },
            {
            title: 'CellStyleMappings',
            path: '/omv/CellStyleMappings/'
            },
            {
            title: 'ClipboardPreference',
            path: '/omv/ClipboardPreference/'
            },
            {
            title: 'MenuActions',
            path: '/omv/MenuActions/'
            },
            {
            title: 'BackgroundTasks',
            path: '/omv/BackgroundTasks/'
            },
            {
            title: 'CellStyles',
            path: '/omv/CellStyles/'
            },
            {
            title: 'TransformationMatrices',
            path: '/omv/TransformationMatrices/'
            },
            {
            title: 'PageNumberVariablePreference',
            path: '/omv/PageNumberVariablePreference/'
            },
            {
            title: 'ChangecaseMode',
            path: '/omv/ChangecaseMode/'
            },
            {
            title: 'AdornmentOverprint',
            path: '/omv/AdornmentOverprint/'
            },
            {
            title: 'FolioOrientationOptions',
            path: '/omv/FolioOrientationOptions/'
            },
            {
            title: 'PDFProfileSelector',
            path: '/omv/PDFProfileSelector/'
            },
            {
            title: 'ScriptArg',
            path: '/omv/ScriptArg/'
            },
            {
            title: 'AnimationBehavior',
            path: '/omv/AnimationBehavior/'
            },
            {
            title: 'DataMergeQrcodePlaceholders',
            path: '/omv/DataMergeQrcodePlaceholders/'
            },
            {
            title: 'Assets',
            path: '/omv/Assets/'
            },
            {
            title: 'Paragraphs',
            path: '/omv/Paragraphs/'
            },
            {
            title: 'GotoURLBehaviors',
            path: '/omv/GotoURLBehaviors/'
            },
            {
            title: 'Sound',
            path: '/omv/Sound/'
            },
            {
            title: 'SnapshotBlendingModes',
            path: '/omv/SnapshotBlendingModes/'
            },
            {
            title: 'Pages',
            path: '/omv/Pages/'
            },
            {
            title: 'StrokeStyle',
            path: '/omv/StrokeStyle/'
            },
            {
            title: 'ArrangeBy',
            path: '/omv/ArrangeBy/'
            },
            {
            title: 'RenderingIntent',
            path: '/omv/RenderingIntent/'
            },
            {
            title: 'PageLayoutOptions',
            path: '/omv/PageLayoutOptions/'
            },
            {
            title: 'ChangebarLocations',
            path: '/omv/ChangebarLocations/'
            },
            {
            title: 'PreflightProfileOptions',
            path: '/omv/PreflightProfileOptions/'
            },
            {
            title: 'CrossReferenceFormats',
            path: '/omv/CrossReferenceFormats/'
            },
            {
            title: 'CharacterStyle',
            path: '/omv/CharacterStyle/'
            },
            {
            title: 'RestartPolicy',
            path: '/omv/RestartPolicy/'
            },
            {
            title: 'EPubFootnotePlacement',
            path: '/omv/EPubFootnotePlacement/'
            },
            {
            title: 'FindChangeTransparencySetting',
            path: '/omv/FindChangeTransparencySetting/'
            },
            {
            title: 'RuleDataObjects',
            path: '/omv/RuleDataObjects/'
            },
            {
            title: 'DataMergeTextPlaceholder',
            path: '/omv/DataMergeTextPlaceholder/'
            },
            {
            title: 'GridDataInformation',
            path: '/omv/GridDataInformation/'
            },
            {
            title: 'NoteBackgrounds',
            path: '/omv/NoteBackgrounds/'
            },
            {
            title: 'TextFrames',
            path: '/omv/TextFrames/'
            },
            {
            title: 'EPSs',
            path: '/omv/EPSs/'
            },
            {
            title: 'SearchModes',
            path: '/omv/SearchModes/'
            },
            {
            title: 'Lines',
            path: '/omv/Lines/'
            },
            {
            title: 'ImageAlignmentType',
            path: '/omv/ImageAlignmentType/'
            },
            {
            title: 'EpubCover',
            path: '/omv/EpubCover/'
            },
            {
            title: 'PDFAttribute',
            path: '/omv/PDFAttribute/'
            },
            {
            title: 'DiacriticPositionOptions',
            path: '/omv/DiacriticPositionOptions/'
            },
            {
            title: 'ArticleMember',
            path: '/omv/ArticleMember/'
            },
            {
            title: 'Event',
            path: '/omv/Event/'
            },
            {
            title: 'TextBox',
            path: '/omv/TextBox/'
            },
            {
            title: 'XMLTag',
            path: '/omv/XMLTag/'
            },
            {
            title: 'MixedInkGroups',
            path: '/omv/MixedInkGroups/'
            },
            {
            title: 'Inks',
            path: '/omv/Inks/'
            },
            {
            title: 'NoteColorChoices',
            path: '/omv/NoteColorChoices/'
            },
            {
            title: 'TrackChangesPreference',
            path: '/omv/TrackChangesPreference/'
            },
            {
            title: 'IconSizes',
            path: '/omv/IconSizes/'
            },
            {
            title: 'NavigationPoints',
            path: '/omv/NavigationPoints/'
            },
            {
            title: 'IMEPreference',
            path: '/omv/IMEPreference/'
            },
            {
            title: 'ObjectStyleFillEffectsCategorySettings',
            path: '/omv/ObjectStyleFillEffectsCategorySettings/'
            },
            {
            title: 'ParagraphStyles',
            path: '/omv/ParagraphStyles/'
            },
            {
            title: 'DataFormat',
            path: '/omv/DataFormat/'
            },
            {
            title: 'DropShadowSetting',
            path: '/omv/DropShadowSetting/'
            },
            {
            title: 'PDFRasterCompressionOptions',
            path: '/omv/PDFRasterCompressionOptions/'
            },
            {
            title: 'HtmlItems',
            path: '/omv/HtmlItems/'
            },
            {
            title: 'MixedInk',
            path: '/omv/MixedInk/'
            },
            {
            title: 'ConditionalTextPreference',
            path: '/omv/ConditionalTextPreference/'
            },
            {
            title: 'IndexFormat',
            path: '/omv/IndexFormat/'
            },
            {
            title: 'ParagraphDestinations',
            path: '/omv/ParagraphDestinations/'
            },
            {
            title: 'GotoNextStateBehaviors',
            path: '/omv/GotoNextStateBehaviors/'
            },
            {
            title: 'BookContent',
            path: '/omv/BookContent/'
            },
            {
            title: 'XMLElementPosition',
            path: '/omv/XMLElementPosition/'
            },
            {
            title: 'Footnote',
            path: '/omv/Footnote/'
            },
            {
            title: 'DynamicDocumentsJPEGQualityOptions',
            path: '/omv/DynamicDocumentsJPEGQualityOptions/'
            },
            {
            title: 'PageBindingOptions',
            path: '/omv/PageBindingOptions/'
            },
            {
            title: 'DashedStrokeStyle',
            path: '/omv/DashedStrokeStyle/'
            },
            {
            title: 'PrintLayerOptions',
            path: '/omv/PrintLayerOptions/'
            },
            {
            title: 'TimingLists',
            path: '/omv/TimingLists/'
            },
            {
            title: 'AddPageOptions',
            path: '/omv/AddPageOptions/'
            },
            {
            title: 'UserDictionary',
            path: '/omv/UserDictionary/'
            },
            {
            title: 'GalleyPreference',
            path: '/omv/GalleyPreference/'
            },
            {
            title: 'XMLElementLocation',
            path: '/omv/XMLElementLocation/'
            },
            {
            title: 'DataMergeOption',
            path: '/omv/DataMergeOption/'
            },
            {
            title: 'TextBoxes',
            path: '/omv/TextBoxes/'
            },
            {
            title: 'PercentEditbox',
            path: '/omv/PercentEditbox/'
            },
            {
            title: 'DimensionAttributes',
            path: '/omv/DimensionAttributes/'
            },
            {
            title: 'AnimationSetting',
            path: '/omv/AnimationSetting/'
            },
            {
            title: 'WatermarkHorizontalPositionEnum',
            path: '/omv/WatermarkHorizontalPositionEnum/'
            },
            {
            title: 'KinsokuTable',
            path: '/omv/KinsokuTable/'
            },
            {
            title: 'BlendMode',
            path: '/omv/BlendMode/'
            },
            {
            title: 'EndnoteFrameCreate',
            path: '/omv/EndnoteFrameCreate/'
            },
            {
            title: 'TaggedPDFStructureOrderOptions',
            path: '/omv/TaggedPDFStructureOrderOptions/'
            },
            {
            title: 'FlattenerPreference',
            path: '/omv/FlattenerPreference/'
            },
            {
            title: 'Story',
            path: '/omv/Story/'
            },
            {
            title: 'CrossReferenceSource',
            path: '/omv/CrossReferenceSource/'
            },
            {
            title: 'ChapterNumberSources',
            path: '/omv/ChapterNumberSources/'
            },
            {
            title: 'XMLElements',
            path: '/omv/XMLElements/'
            },
            {
            title: 'Widgets',
            path: '/omv/Widgets/'
            },
            {
            title: 'InnerGlowSource',
            path: '/omv/InnerGlowSource/'
            },
            {
            title: 'RubyKentenPosition',
            path: '/omv/RubyKentenPosition/'
            },
            {
            title: 'MotionPresets',
            path: '/omv/MotionPresets/'
            },
            {
            title: 'ColorGroups',
            path: '/omv/ColorGroups/'
            },
            {
            title: 'ParagraphShadingBottomOriginEnum',
            path: '/omv/ParagraphShadingBottomOriginEnum/'
            },
            {
            title: 'LayoutGridDataInformation',
            path: '/omv/LayoutGridDataInformation/'
            },
            {
            title: 'AnchoredObjectSetting',
            path: '/omv/AnchoredObjectSetting/'
            },
            {
            title: 'AngleCombobox',
            path: '/omv/AngleCombobox/'
            },
            {
            title: 'DialogColumn',
            path: '/omv/DialogColumn/'
            },
            {
            title: 'TimingSetting',
            path: '/omv/TimingSetting/'
            },
            {
            title: 'InCopyExportOption',
            path: '/omv/InCopyExportOption/'
            },
            {
            title: 'ToolsPanelOptions',
            path: '/omv/ToolsPanelOptions/'
            },
            {
            title: 'StateTypes',
            path: '/omv/StateTypes/'
            },
            {
            title: 'ContourOptionsTypes',
            path: '/omv/ContourOptionsTypes/'
            },
            {
            title: 'ShowHideFieldsBehaviors',
            path: '/omv/ShowHideFieldsBehaviors/'
            },
            {
            title: 'FitMethodSettings',
            path: '/omv/FitMethodSettings/'
            },
            {
            title: 'FindChangeBevelAndEmbossSetting',
            path: '/omv/FindChangeBevelAndEmbossSetting/'
            },
            {
            title: 'RealEditboxes',
            path: '/omv/RealEditboxes/'
            },
            {
            title: 'TextStyleRange',
            path: '/omv/TextStyleRange/'
            },
            {
            title: 'MutationEvent',
            path: '/omv/MutationEvent/'
            },
            {
            title: 'NamedGrid',
            path: '/omv/NamedGrid/'
            },
            {
            title: 'StripedStrokeStyles',
            path: '/omv/StripedStrokeStyles/'
            },
            {
            title: 'PanningTypes',
            path: '/omv/PanningTypes/'
            },
            {
            title: 'PagePositions',
            path: '/omv/PagePositions/'
            },
            {
            title: 'PageViewOptions',
            path: '/omv/PageViewOptions/'
            },
            {
            title: 'Topics',
            path: '/omv/Topics/'
            },
            {
            title: 'InteractiveElementsOptions',
            path: '/omv/InteractiveElementsOptions/'
            },
            {
            title: 'CustomTextVariablePreference',
            path: '/omv/CustomTextVariablePreference/'
            },
            {
            title: 'OverrideType',
            path: '/omv/OverrideType/'
            },
            {
            title: 'ObjectStyleExportTagMaps',
            path: '/omv/ObjectStyleExportTagMaps/'
            },
            {
            title: 'DocumentPreset',
            path: '/omv/DocumentPreset/'
            },
            {
            title: 'FootnotePrefixSuffix',
            path: '/omv/FootnotePrefixSuffix/'
            },
            {
            title: 'DateVariablePreference',
            path: '/omv/DateVariablePreference/'
            },
            {
            title: 'MultiStateObjects',
            path: '/omv/MultiStateObjects/'
            },
            {
            title: 'BorderPanels',
            path: '/omv/BorderPanels/'
            },
            {
            title: 'PDFExportPreset',
            path: '/omv/PDFExportPreset/'
            },
            {
            title: 'HyperlinkAppearanceWidth',
            path: '/omv/HyperlinkAppearanceWidth/'
            },
            {
            title: 'KashidasOptions',
            path: '/omv/KashidasOptions/'
            },
            {
            title: 'TextVariable',
            path: '/omv/TextVariable/'
            },
            {
            title: 'TOCStyleEntries',
            path: '/omv/TOCStyleEntries/'
            },
            {
            title: 'DisplayPerformancePreference',
            path: '/omv/DisplayPerformancePreference/'
            },
            {
            title: 'FeatureSetOptions',
            path: '/omv/FeatureSetOptions/'
            },
            {
            title: 'TextPath',
            path: '/omv/TextPath/'
            },
            {
            title: 'Indexes',
            path: '/omv/Indexes/'
            },
            {
            title: 'EventListener',
            path: '/omv/EventListener/'
            },
            {
            title: 'TextStrokeAlign',
            path: '/omv/TextStrokeAlign/'
            },
            {
            title: 'MeasurementEditboxes',
            path: '/omv/MeasurementEditboxes/'
            },
            {
            title: 'StyleExportTagMap',
            path: '/omv/StyleExportTagMap/'
            },
            {
            title: 'GridViewSettings',
            path: '/omv/GridViewSettings/'
            },
            {
            title: 'PDFCrop',
            path: '/omv/PDFCrop/'
            },
            {
            title: 'EpubFixedLayoutSpreadControl',
            path: '/omv/EpubFixedLayoutSpreadControl/'
            },
            {
            title: 'TextColumn',
            path: '/omv/TextColumn/'
            },
            {
            title: 'SatinSetting',
            path: '/omv/SatinSetting/'
            },
            {
            title: 'TableDirectionOptions',
            path: '/omv/TableDirectionOptions/'
            },
            {
            title: 'PercentEditboxes',
            path: '/omv/PercentEditboxes/'
            },
            {
            title: 'GridPrintingPreference',
            path: '/omv/GridPrintingPreference/'
                }
      ]
      },
      {
        title: 'Support',
        path: '/support/',
        header: true,
        pages: [
          {
            title: 'Help',
            path: '/support/'
          },
          {
            title: 'FAQ',
            path: '/support/FAQ/'
          },
          {
            title: 'How to contribute',
            path: '/support/contribute/'
          }
        ]
      },
      {
        title: 'Community',
        path: '/support/community/',
        header: true,
        pages: [
          {
            title: 'Information',
            path: '/support/community/'
      }
        ]
    }
    ]
  },
plugins: [`@adobe/gatsby-theme-aio`]
};