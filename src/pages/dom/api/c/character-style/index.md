# CharacterStyle
A character style.

## Instance
> *Read Only* 
> 
> Mixed **imported** 
>
> If true, the style was imported from another document. Can return: Boolean or NothingEnum enumerator.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the CharacterStyle.
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
> The parent of the CharacterStyle (a Document, Application or CharacterStyleGroup).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the CharacterStyle within its containing object.
*** 
> *Read Only* 
> 
> StyleExportTagMaps **styleExportTagMaps** 
>
> A collection of style export tag maps.
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
> Mixed **basedOn** 
>
> The style that this style is based on. Can return: CharacterStyle or String.
*** 
> Mixed **splitDocument** 
>
> Split Document (EPUB only). Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **emitCss** 
>
> Emit CSS. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **styleUniqueId** 
>
> A unique id that can be assigned to a style. This can be used to differentiate between the styles. Internal use only. Can return: String or NothingEnum enumerator.
*** 
> Mixed **appliedFont** 
>
> The font applied to the CharacterStyle, specified as either a font object or the name of font family. Can return: Font, String or NothingEnum enumerator.
*** 
> Mixed **fontStyle** 
>
> The name of the font style. Can return: String or NothingEnum enumerator.
*** 
> Mixed **pointSize** 
>
> The text size. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **leading** 
>
> The leading applied to the text. Can return: Unit, Leading enumerator or NothingEnum enumerator.
*** 
> Mixed **kerningMethod** 
>
> The type of pair kerning. Can return: String or NothingEnum enumerator.
*** 
> Mixed **tracking** 
>
> The amount by which to loosen or tighten a block of text, specified in thousands of an em. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **capitalization** 
>
> The capitalization scheme. Can return: Capitalization enumerator or NothingEnum enumerator.
*** 
> Mixed **position** 
>
> The text position relative to the baseline. Can return: Position enumerator or NothingEnum enumerator.
*** 
> Mixed **underline** 
>
> If true, underlines the text. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **strikeThru** 
>
> If true, draws a strikethrough line through the text. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **ligatures** 
>
> If true, replaces specific character combinations (e.g., fl, fi) with ligature characters. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **noBreak** 
>
> If true, keeps the text on the same line. . Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **horizontalScale** 
>
> The horizontal scaling applied to the CharacterStyle. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **verticalScale** 
>
> The vertical scaling applied to the CharacterStyle. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **baselineShift** 
>
> The baseline shift applied to the text. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **skew** 
>
> The skew angle of the CharacterStyle. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **fillTint** 
>
> The tint (as a percentage) of the fill color of the CharacterStyle. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **strokeTint** 
>
> The tint (as a percentage) of the stroke color of the CharacterStyle. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **strokeWeight** 
>
> The stroke weight applied to the characters of the text. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **overprintStroke** 
>
> If true, the stroke of the characters will overprint. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **overprintFill** 
>
> If true, the fill color of the characters will overprint. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **otfFigureStyle** 
>
> The figure style in OpenType fonts. Can return: OTFFigureStyle enumerator or NothingEnum enumerator.
*** 
> Mixed **otfOrdinal** 
>
> If true, uses ordinals in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **otfFraction** 
>
> If true, uses fractions in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **otfDiscretionaryLigature** 
>
> If true, uses discretionary ligatures in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **otfTitling** 
>
> If true, uses titling forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **otfContextualAlternate** 
>
> If true, uses contextual alternate forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **otfSwash** 
>
> If true, uses swash forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **underlineColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. . Can return: Swatch, String or NothingEnum enumerator.
*** 
> Mixed **underlineGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. Can return: Swatch, String or NothingEnum enumerator.
*** 
> Mixed **underlineTint** 
>
> The underline stroke tint (as a percentage). (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **underlineGapTint** 
>
> The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **underlineOverprint** 
>
> If true, the underline stroke color will overprint. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **underlineGapOverprint** 
>
> If true, the gap color of the underline stroke will overprint. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **underlineType** 
>
> The stroke type of the underline stroke. Can return: StrokeStyle, String or NothingEnum enumerator.
*** 
> Mixed **underlineOffset** 
>
> The amount by which to offset the underline from the text baseline. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **underlineWeight** 
>
> The stroke weight of the underline stroke. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **strikeThroughColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. Can return: Swatch, String or NothingEnum enumerator.
*** 
> Mixed **strikeThroughGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. Can return: Swatch, String or NothingEnum enumerator.
*** 
> Mixed **strikeThroughTint** 
>
> The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **strikeThroughGapTint** 
>
> The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **strikeThroughOverprint** 
>
> If true, the strikethrough stroke will overprint. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **strikeThroughGapOverprint** 
>
> If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **strikeThroughType** 
>
> The stroke type of the strikethrough stroke. Can return: StrokeStyle, String or NothingEnum enumerator.
*** 
> Mixed **strikeThroughOffset** 
>
> The amount by which to offset the strikethrough stroke from the text baseline. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **strikeThroughWeight** 
>
> The stroke weight of the strikethrough stroke. Can return: Unit or NothingEnum enumerator.
*** 
> Mixed **fillColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of the CharacterStyle. . Can return: Swatch or NothingEnum enumerator. Can also accept: String.
*** 
> Mixed **strokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the CharacterStyle. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
*** 
> Mixed **appliedLanguage** 
>
> The language of the text. Can return: LanguageWithVendors, Language or NothingEnum enumerator. Can also accept: String.
*** 
> Mixed **includeClass** 
>
> If true, class attribute will be generated for the style. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **designAxes** 
>
> Value of Design Axes. Can return: Array of Reals or NothingEnum enumerator.
*** 
> Mixed **otfSlashedZero** 
>
> If true, use a slashed zeroes in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **otfHistorical** 
>
> If true, use historical forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **otfStylisticSets** 
>
> The stylistic sets to use in OpenType fonts. Can return: Long Integer or NothingEnum enumerator.
*** 
> Mixed **gradientFillLength** 
>
> The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **gradientFillAngle** 
>
> The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **gradientStrokeLength** 
>
> The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **gradientStrokeAngle** 
>
> The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **gradientFillStart** 
>
> The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y]. Can return: Array of 2 Units or NothingEnum enumerator.
*** 
> Mixed **gradientStrokeStart** 
>
> The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y]. Can return: Array of 2 Units or NothingEnum enumerator.
*** 
> Mixed **otfMark** 
>
> If true, uses mark positioning in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **otfLocale** 
>
> If true, uses localized forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **positionalForm** 
>
> The OpenType positional form. Can return: PositionalForms enumerator or NothingEnum enumerator.
*** 
> String **name** 
>
> The name of the style.
*** 
> Mixed **previewColor** 
>
> The color to use for preview, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
*** 
> Mixed **miterLimit** 
>
> The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. Can return: Real (0 - 1000) or NothingEnum enumerator.
*** 
> Mixed **strokeAlignment** 
>
> The stroke alignment applied to the text. Can return: TextStrokeAlign enumerator or NothingEnum enumerator.
*** 
> Mixed **endJoin** 
>
> The stroke join type applied to the characters of the text. Can return: OutlineJoin enumerator or NothingEnum enumerator.
*** 
> Mixed **otfOverlapSwash** 
>
> If true, use overlapping swash forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **otfStylisticAlternate** 
>
> If true, use stylistic alternate forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **otfJustificationAlternate** 
>
> If true, use alternate justification forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **otfStretchedAlternate** 
>
> If true, use stretched alternate forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **characterDirection** 
>
> The direction of the character. Can return: CharacterDirectionOptions enumerator or NothingEnum enumerator.
*** 
> Mixed **keyboardDirection** 
>
> The keyboard direction of the character. Can return: CharacterDirectionOptions enumerator or NothingEnum enumerator.
*** 
> Mixed **digitsType** 
>
> The digits type. Can return: DigitsTypeOptions enumerator or NothingEnum enumerator.
*** 
> Mixed **kashidas** 
>
> Use of Kashidas for justification. Can return: KashidasOptions enumerator or NothingEnum enumerator.
*** 
> Mixed **diacriticPosition** 
>
> Position of diacriticical characters. Can return: DiacriticPositionOptions enumerator or NothingEnum enumerator.
*** 
> Mixed **xOffsetDiacritic** 
>
> The x (horizontal) offset for diacritic adjustment. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **yOffsetDiacritic** 
>
> The y (vertical) offset for diacritic adjustment. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **characterAlignment** 
>
> The alignment of small characters to the largest character in the line. Can return: CharacterAlignment enumerator or NothingEnum enumerator.
*** 
> Mixed **tsume** 
>
> The amount of horizontal character compression. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **leadingAki** 
>
> The amount of space before each character. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **trailingAki** 
>
> The amount of space after each character. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **characterRotation** 
>
> The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **jidori** 
>
> The number of grid squares in which to arrange the text. . Can return: Short Integer or NothingEnum enumerator.
*** 
> Mixed **shataiMagnification** 
>
> The amount (as a percentage) of shatai obliquing to apply. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **shataiDegreeAngle** 
>
> The shatai lens angle (in degrees). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **shataiAdjustRotation** 
>
> If true, applies shatai rotation. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **shataiAdjustTsume** 
>
> If true, adjusts shatai tsume. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **tatechuyoko** 
>
> If true, makes the character horizontal in vertical text. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **tatechuyokoXOffset** 
>
> The horizontal offset for horizontal characters in vertical text. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **tatechuyokoYOffset** 
>
> The vertical offset for horizontal characters in vertical text. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **kentenFillColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of kenten characters. Can return: Swatch, String or NothingEnum enumerator.
*** 
> Mixed **kentenStrokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. Can return: Swatch, String or NothingEnum enumerator.
*** 
> Mixed **kentenTint** 
>
> The fill tint (as a percentage) of kenten characters. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **kentenStrokeTint** 
>
> The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **kentenWeight** 
>
> The stroke weight (in points) of kenten characters. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **kentenOverprintFill** 
>
> The method of overprinting the kenten fill. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
*** 
> Mixed **kentenOverprintStroke** 
>
> The method of overprinting the kenten stroke. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
*** 
> Mixed **kentenKind** 
>
> The style of kenten characters. Can return: KentenCharacter enumerator or NothingEnum enumerator.
*** 
> Mixed **kentenPlacement** 
>
> The distance between kenten characters and their parent characters. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **kentenAlignment** 
>
> The alignment of kenten characters relative to the parent characters. . Can return: KentenAlignment enumerator or NothingEnum enumerator.
*** 
> Mixed **kentenPosition** 
>
> The kenten position relative to the parent character. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
*** 
> Mixed **kentenFont** 
>
> The font to use for kenten characters. Can return: Font, String or NothingEnum enumerator.
*** 
> Mixed **kentenFontStyle** 
>
> The font style of kenten characters. Can return: String or NothingEnum enumerator.
*** 
> Mixed **kentenFontSize** 
>
> The size (in points) of kenten characters. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **kentenXScale** 
>
> The horizontal size of kenten characters as a percent of the original size. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **kentenYScale** 
>
> The vertical size of kenten charachers as a percent of the original size. . Can return: Real or NothingEnum enumerator.
*** 
> Mixed **kentenCustomCharacter** 
>
> The character used for kenten. Note: Valid only when kenten kind is custom. Can return: String or NothingEnum enumerator.
*** 
> Mixed **kentenCharacterSet** 
>
> The character set used for the custom kenten character. Note: Valid only when kenten kind is custom. . Can return: KentenCharacterSet enumerator or NothingEnum enumerator.
*** 
> Mixed **rubyFill** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of ruby characters. Can return: Swatch, String or NothingEnum enumerator.
*** 
> Mixed **rubyStroke** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. Can return: Swatch, String or NothingEnum enumerator.
*** 
> Mixed **rubyTint** 
>
> The tint (as a percentage) of the ruby fill color. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
*** 
> Mixed **rubyWeight** 
>
> The stroke weight (in points) of ruby characters. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **rubyOverprintFill** 
>
> The method of overprinting the ruby fill. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
*** 
> Mixed **rubyOverprintStroke** 
>
> The method of overprinting the ruby stroke. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
*** 
> Mixed **rubyStrokeTint** 
>
> The stroke tint (as a percentage) of ruby characters. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **rubyFont** 
>
> The font applied to ruby characters. Can return: Font, String or NothingEnum enumerator.
*** 
> Mixed **rubyFontStyle** 
>
> The font style of ruby characters. Can return: String or NothingEnum enumerator.
*** 
> Mixed **rubyFontSize** 
>
> The size (in points) of ruby characters. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **rubyOpenTypePro** 
>
> If true, uses OpenType Pro fonts for ruby. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **rubyXScale** 
>
> The horizontal size of ruby characters, specified as a percent of the original size. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **rubyYScale** 
>
> The vertical size of ruby characters, specified as a percent of the original size. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **rubyType** 
>
> The ruby type. Can return: RubyTypes enumerator or NothingEnum enumerator.
*** 
> Mixed **rubyAlignment** 
>
> The ruby alignment. Can return: RubyAlignments enumerator or NothingEnum enumerator.
*** 
> Mixed **rubyPosition** 
>
> The position of ruby characters relative to the parent text. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
*** 
> Mixed **rubyXOffset** 
>
> The amount of horizontal space between ruby and parent characters. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **rubyYOffset** 
>
> The amount of vertical space between ruby and parent characters. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **rubyParentSpacing** 
>
> The ruby spacing relative to the parent text. . Can return: RubyParentSpacing enumerator or NothingEnum enumerator.
*** 
> Mixed **rubyAutoAlign** 
>
> If true, auto aligns ruby. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **rubyOverhang** 
>
> If true, constrains ruby overhang to the specified amount. For information on specifying an amount, see ruby parent overhang amount. . Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **rubyAutoScaling** 
>
> If true, automatically scales ruby to the specified percent of parent text size. For information on specifying a percent, see ruby parent scaling percent. . Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **rubyParentScalingPercent** 
>
> The amount (as a percentage) to scale the parent text size to determine the ruby text size. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **rubyParentOverhangAmount** 
>
> The amount by which ruby characters can overhang the parent text. Can return: RubyOverhang enumerator or NothingEnum enumerator.
*** 
> Mixed **warichu** 
>
> If true, turns on warichu. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **warichuSize** 
>
> The amount (as a percentage) to scale parent text size to determine warichu size. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **warichuLines** 
>
> The number of lines of warichu within a single normal line. Can return: Short Integer or NothingEnum enumerator.
*** 
> Mixed **warichuLineSpacing** 
>
> The gap between lines of warichu characters. Can return: Real or NothingEnum enumerator.
*** 
> Mixed **warichuAlignment** 
>
> The warichu alignment. Can return: WarichuAlignment enumerator or NothingEnum enumerator.
*** 
> Mixed **warichuCharsAfterBreak** 
>
> The minimum number of characters allowed after a line break. . Can return: Short Integer or NothingEnum enumerator.
*** 
> Mixed **warichuCharsBeforeBreak** 
>
> The minimum number of characters allowed before a line break. Can return: Short Integer or NothingEnum enumerator.
*** 
> Mixed **otfProportionalMetrics** 
>
> If true, kerns according to proportional CJK metrics in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **otfHVKana** 
>
> If true, switches hiragana fonts, which have different glyphs for horizontal and vertical. . Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **otfRomanItalics** 
>
> If true, applies italics to half-width alphanumerics. . Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **scaleAffectsLineHeight** 
>
> If true, the line changes size when characters are scaled. . Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **cjkGridTracking** 
>
> If true, uses grid tracking to track non-Roman characters in CJK grids. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **glyphForm** 
>
> The glyph variant to substitute for standard glyphs. Can return: AlternateGlyphForms enumerator or NothingEnum enumerator.
*** 
> Mixed **rubyAutoTcyDigits** 
>
> The number of digits included in auto tcy (tate-chuu-yoko) in ruby. Can return: Short Integer or NothingEnum enumerator.
*** 
> Mixed **rubyAutoTcyIncludeRoman** 
>
> If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. Can return: Boolean or NothingEnum enumerator.
*** 
> Mixed **rubyAutoTcyAutoScale** 
>
> If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. Can return: Boolean or NothingEnum enumerator.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> Boolean **createThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to** )
> 
> Create thumbnail for selected text with the given properties.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | previewText | Text to use as sample |
| Number | pointSize | Text font size (in points) |
| ColorSpace | space | Color space RGB, CMYK or LAB |
| Number | colorValue | Color values |
| File | to | The path to the export file. |

*** 
> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
> 
> Set Nth design axis of a variable font.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | nthAxisIndex | Index of design axis. |
| Number | nthAxisValue | Value of nth design axis. |

*** 
> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
> 
> If true, Nth design axis of variable font is hidden.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | nthAxisIndex | Index of design axis. |

*** 
> **remove**( CharacterStyle **replacingWith** )
> 
> Deletes the style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CharacterStyle | replacingWith | The style to apply in place of the deleted style. (Optional) |

*** 
> CharacterStyle **duplicate**()
> 
> Duplicates the CharacterStyle.
*** 
> CharacterStyle **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the style to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location relative to the reference object or within the containing object. |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional) |

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
> String **toSource**()
> 
> Generates a string which, if executed, will return the CharacterStyle.
*** 
> CharacterStyle **getElements**()
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


