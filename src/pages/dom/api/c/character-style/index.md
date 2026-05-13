# CharacterStyle
A character style.

## Instance
> *Read Only* 
> 
> Mixed **imported** 
>
> If true, the style was imported from another document. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the CharacterStyle.
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
> The parent of the CharacterStyle (a Document, Application or CharacterStyleGroup).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the CharacterStyle within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> StyleExportTagMaps **styleExportTagMaps** 
>
> A collection of style export tag maps.
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
> Mixed **basedOn** 
>
> The style that this style is based on. Can return: CharacterStyle or String.
<HorizontalLine />
> Mixed **splitDocument** 
>
> Split Document (EPUB only). Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **emitCss** 
>
> Emit CSS. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **styleUniqueId** 
>
> A unique id that can be assigned to a style. This can be used to differentiate between the styles. Internal use only. Can return: String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **appliedFont** 
>
> The font applied to the CharacterStyle, specified as either a font object or the name of font family. Can return: Font, String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **fontStyle** 
>
> The name of the font style. Can return: String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **pointSize** 
>
> The text size. Can return: Unit or NothingEnum enumerator.
<HorizontalLine />
> Mixed **leading** 
>
> The leading applied to the text. Can return: Unit, Leading enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kerningMethod** 
>
> The type of pair kerning. Can return: String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **tracking** 
>
> The amount by which to loosen or tighten a block of text, specified in thousands of an em. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **capitalization** 
>
> The capitalization scheme. Can return: Capitalization enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **position** 
>
> The text position relative to the baseline. Can return: Position enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **underline** 
>
> If true, underlines the text. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **strikeThru** 
>
> If true, draws a strikethrough line through the text. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **ligatures** 
>
> If true, replaces specific character combinations (e.g., fl, fi) with ligature characters. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **noBreak** 
>
> If true, keeps the text on the same line. . Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **horizontalScale** 
>
> The horizontal scaling applied to the CharacterStyle. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **verticalScale** 
>
> The vertical scaling applied to the CharacterStyle. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **baselineShift** 
>
> The baseline shift applied to the text. Can return: Unit or NothingEnum enumerator.
<HorizontalLine />
> Mixed **skew** 
>
> The skew angle of the CharacterStyle. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **fillTint** 
>
> The tint (as a percentage) of the fill color of the CharacterStyle. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **strokeTint** 
>
> The tint (as a percentage) of the stroke color of the CharacterStyle. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **strokeWeight** 
>
> The stroke weight applied to the characters of the text. Can return: Unit or NothingEnum enumerator.
<HorizontalLine />
> Mixed **overprintStroke** 
>
> If true, the stroke of the characters will overprint. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **overprintFill** 
>
> If true, the fill color of the characters will overprint. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfFigureStyle** 
>
> The figure style in OpenType fonts. Can return: OTFFigureStyle enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfOrdinal** 
>
> If true, uses ordinals in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfFraction** 
>
> If true, uses fractions in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfDiscretionaryLigature** 
>
> If true, uses discretionary ligatures in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfTitling** 
>
> If true, uses titling forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfContextualAlternate** 
>
> If true, uses contextual alternate forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfSwash** 
>
> If true, uses swash forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **underlineColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. . Can return: Swatch, String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **underlineGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. Can return: Swatch, String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **underlineTint** 
>
> The underline stroke tint (as a percentage). (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **underlineGapTint** 
>
> The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **underlineOverprint** 
>
> If true, the underline stroke color will overprint. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **underlineGapOverprint** 
>
> If true, the gap color of the underline stroke will overprint. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **underlineType** 
>
> The stroke type of the underline stroke. Can return: StrokeStyle, String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **underlineOffset** 
>
> The amount by which to offset the underline from the text baseline. Can return: Unit or NothingEnum enumerator.
<HorizontalLine />
> Mixed **underlineWeight** 
>
> The stroke weight of the underline stroke. Can return: Unit or NothingEnum enumerator.
<HorizontalLine />
> Mixed **strikeThroughColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. Can return: Swatch, String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **strikeThroughGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. Can return: Swatch, String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **strikeThroughTint** 
>
> The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **strikeThroughGapTint** 
>
> The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **strikeThroughOverprint** 
>
> If true, the strikethrough stroke will overprint. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **strikeThroughGapOverprint** 
>
> If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **strikeThroughType** 
>
> The stroke type of the strikethrough stroke. Can return: StrokeStyle, String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **strikeThroughOffset** 
>
> The amount by which to offset the strikethrough stroke from the text baseline. Can return: Unit or NothingEnum enumerator.
<HorizontalLine />
> Mixed **strikeThroughWeight** 
>
> The stroke weight of the strikethrough stroke. Can return: Unit or NothingEnum enumerator.
<HorizontalLine />
> Mixed **fillColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of the CharacterStyle. . Can return: Swatch or NothingEnum enumerator. Can also accept: String.
<HorizontalLine />
> Mixed **strokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the CharacterStyle. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
<HorizontalLine />
> Mixed **appliedLanguage** 
>
> The language of the text. Can return: LanguageWithVendors, Language or NothingEnum enumerator. Can also accept: String.
<HorizontalLine />
> Mixed **includeClass** 
>
> If true, class attribute will be generated for the style. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **designAxes** 
>
> Value of Design Axes. Can return: Array of Reals or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfSlashedZero** 
>
> If true, use a slashed zeroes in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfHistorical** 
>
> If true, use historical forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfStylisticSets** 
>
> The stylistic sets to use in OpenType fonts. Can return: Long Integer or NothingEnum enumerator.
<HorizontalLine />
> Mixed **gradientFillLength** 
>
> The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **gradientFillAngle** 
>
> The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **gradientStrokeLength** 
>
> The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **gradientStrokeAngle** 
>
> The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **gradientFillStart** 
>
> The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y]. Can return: Array of 2 Units or NothingEnum enumerator.
<HorizontalLine />
> Mixed **gradientStrokeStart** 
>
> The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y]. Can return: Array of 2 Units or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfMark** 
>
> If true, uses mark positioning in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfLocale** 
>
> If true, uses localized forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **positionalForm** 
>
> The OpenType positional form. Can return: PositionalForms enumerator or NothingEnum enumerator.
<HorizontalLine />
> String **name** 
>
> The name of the style.
<HorizontalLine />
> Mixed **previewColor** 
>
> The color to use for preview, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **miterLimit** 
>
> The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. Can return: Real (0 - 1000) or NothingEnum enumerator.
<HorizontalLine />
> Mixed **strokeAlignment** 
>
> The stroke alignment applied to the text. Can return: TextStrokeAlign enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **endJoin** 
>
> The stroke join type applied to the characters of the text. Can return: OutlineJoin enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfOverlapSwash** 
>
> If true, use overlapping swash forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfStylisticAlternate** 
>
> If true, use stylistic alternate forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfJustificationAlternate** 
>
> If true, use alternate justification forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfStretchedAlternate** 
>
> If true, use stretched alternate forms in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **characterDirection** 
>
> The direction of the character. Can return: CharacterDirectionOptions enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **keyboardDirection** 
>
> The keyboard direction of the character. Can return: CharacterDirectionOptions enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **digitsType** 
>
> The digits type. Can return: DigitsTypeOptions enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kashidas** 
>
> Use of Kashidas for justification. Can return: KashidasOptions enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **diacriticPosition** 
>
> Position of diacriticical characters. Can return: DiacriticPositionOptions enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **xOffsetDiacritic** 
>
> The x (horizontal) offset for diacritic adjustment. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **yOffsetDiacritic** 
>
> The y (vertical) offset for diacritic adjustment. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **characterAlignment** 
>
> The alignment of small characters to the largest character in the line. Can return: CharacterAlignment enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **tsume** 
>
> The amount of horizontal character compression. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **leadingAki** 
>
> The amount of space before each character. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **trailingAki** 
>
> The amount of space after each character. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **characterRotation** 
>
> The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **jidori** 
>
> The number of grid squares in which to arrange the text. . Can return: Short Integer or NothingEnum enumerator.
<HorizontalLine />
> Mixed **shataiMagnification** 
>
> The amount (as a percentage) of shatai obliquing to apply. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **shataiDegreeAngle** 
>
> The shatai lens angle (in degrees). Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **shataiAdjustRotation** 
>
> If true, applies shatai rotation. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **shataiAdjustTsume** 
>
> If true, adjusts shatai tsume. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **tatechuyoko** 
>
> If true, makes the character horizontal in vertical text. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **tatechuyokoXOffset** 
>
> The horizontal offset for horizontal characters in vertical text. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **tatechuyokoYOffset** 
>
> The vertical offset for horizontal characters in vertical text. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenFillColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of kenten characters. Can return: Swatch, String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenStrokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. Can return: Swatch, String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenTint** 
>
> The fill tint (as a percentage) of kenten characters. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenStrokeTint** 
>
> The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenWeight** 
>
> The stroke weight (in points) of kenten characters. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenOverprintFill** 
>
> The method of overprinting the kenten fill. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenOverprintStroke** 
>
> The method of overprinting the kenten stroke. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenKind** 
>
> The style of kenten characters. Can return: KentenCharacter enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenPlacement** 
>
> The distance between kenten characters and their parent characters. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenAlignment** 
>
> The alignment of kenten characters relative to the parent characters. . Can return: KentenAlignment enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenPosition** 
>
> The kenten position relative to the parent character. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenFont** 
>
> The font to use for kenten characters. Can return: Font, String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenFontStyle** 
>
> The font style of kenten characters. Can return: String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenFontSize** 
>
> The size (in points) of kenten characters. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenXScale** 
>
> The horizontal size of kenten characters as a percent of the original size. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenYScale** 
>
> The vertical size of kenten charachers as a percent of the original size. . Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenCustomCharacter** 
>
> The character used for kenten. Note: Valid only when kenten kind is custom. Can return: String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **kentenCharacterSet** 
>
> The character set used for the custom kenten character. Note: Valid only when kenten kind is custom. . Can return: KentenCharacterSet enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyFill** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of ruby characters. Can return: Swatch, String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyStroke** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. Can return: Swatch, String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyTint** 
>
> The tint (as a percentage) of the ruby fill color. (Range: 0 to 100). Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyWeight** 
>
> The stroke weight (in points) of ruby characters. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyOverprintFill** 
>
> The method of overprinting the ruby fill. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyOverprintStroke** 
>
> The method of overprinting the ruby stroke. Can return: AdornmentOverprint enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyStrokeTint** 
>
> The stroke tint (as a percentage) of ruby characters. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyFont** 
>
> The font applied to ruby characters. Can return: Font, String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyFontStyle** 
>
> The font style of ruby characters. Can return: String or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyFontSize** 
>
> The size (in points) of ruby characters. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyOpenTypePro** 
>
> If true, uses OpenType Pro fonts for ruby. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyXScale** 
>
> The horizontal size of ruby characters, specified as a percent of the original size. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyYScale** 
>
> The vertical size of ruby characters, specified as a percent of the original size. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyType** 
>
> The ruby type. Can return: RubyTypes enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyAlignment** 
>
> The ruby alignment. Can return: RubyAlignments enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyPosition** 
>
> The position of ruby characters relative to the parent text. Can return: RubyKentenPosition enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyXOffset** 
>
> The amount of horizontal space between ruby and parent characters. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyYOffset** 
>
> The amount of vertical space between ruby and parent characters. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyParentSpacing** 
>
> The ruby spacing relative to the parent text. . Can return: RubyParentSpacing enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyAutoAlign** 
>
> If true, auto aligns ruby. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyOverhang** 
>
> If true, constrains ruby overhang to the specified amount. For information on specifying an amount, see ruby parent overhang amount. . Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyAutoScaling** 
>
> If true, automatically scales ruby to the specified percent of parent text size. For information on specifying a percent, see ruby parent scaling percent. . Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyParentScalingPercent** 
>
> The amount (as a percentage) to scale the parent text size to determine the ruby text size. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyParentOverhangAmount** 
>
> The amount by which ruby characters can overhang the parent text. Can return: RubyOverhang enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **warichu** 
>
> If true, turns on warichu. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **warichuSize** 
>
> The amount (as a percentage) to scale parent text size to determine warichu size. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **warichuLines** 
>
> The number of lines of warichu within a single normal line. Can return: Short Integer or NothingEnum enumerator.
<HorizontalLine />
> Mixed **warichuLineSpacing** 
>
> The gap between lines of warichu characters. Can return: Real or NothingEnum enumerator.
<HorizontalLine />
> Mixed **warichuAlignment** 
>
> The warichu alignment. Can return: WarichuAlignment enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **warichuCharsAfterBreak** 
>
> The minimum number of characters allowed after a line break. . Can return: Short Integer or NothingEnum enumerator.
<HorizontalLine />
> Mixed **warichuCharsBeforeBreak** 
>
> The minimum number of characters allowed before a line break. Can return: Short Integer or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfProportionalMetrics** 
>
> If true, kerns according to proportional CJK metrics in OpenType fonts. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfHVKana** 
>
> If true, switches hiragana fonts, which have different glyphs for horizontal and vertical. . Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **otfRomanItalics** 
>
> If true, applies italics to half-width alphanumerics. . Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **scaleAffectsLineHeight** 
>
> If true, the line changes size when characters are scaled. . Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **cjkGridTracking** 
>
> If true, uses grid tracking to track non-Roman characters in CJK grids. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **glyphForm** 
>
> The glyph variant to substitute for standard glyphs. Can return: AlternateGlyphForms enumerator or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyAutoTcyDigits** 
>
> The number of digits included in auto tcy (tate-chuu-yoko) in ruby. Can return: Short Integer or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyAutoTcyIncludeRoman** 
>
> If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> Mixed **rubyAutoTcyAutoScale** 
>
> If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. Can return: Boolean or NothingEnum enumerator.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
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

<HorizontalLine />
> **setNthDesignAxis**( Number **nthAxisIndex**, Number **nthAxisValue** )
> 
> Set Nth design axis of a variable font.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | nthAxisIndex | Index of design axis. |
| Number | nthAxisValue | Value of nth design axis. |

<HorizontalLine />
> Boolean **isNthDesignAxisHidden**( Number **nthAxisIndex** )
> 
> If true, Nth design axis of variable font is hidden.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | nthAxisIndex | Index of design axis. |

<HorizontalLine />
> **remove**( CharacterStyle **replacingWith** )
> 
> Deletes the style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CharacterStyle | replacingWith | The style to apply in place of the deleted style. (Optional) |

<HorizontalLine />
> CharacterStyle **duplicate**()
> 
> Duplicates the CharacterStyle.
<HorizontalLine />
> CharacterStyle **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the style to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location relative to the reference object or within the containing object. |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional) |

<HorizontalLine />
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

<HorizontalLine />
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the CharacterStyle.
<HorizontalLine />
> CharacterStyle **getElements**()
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


