# TextStyleRange
A continuous range of identical text formatting attributes.

## Instance
> *Read Only* 
> 
> Bullet **bulletChar** 
>
> Bullet character.
*** 
> *Read Only* 
> 
> NumberingRestartPolicy **numberingRestartPolicies** 
>
> Numbering restart policies.
*** 
> *Read Only* 
> 
> XMLItem **associatedXMLElements** 
>
> The XML elements associated with the TextStyleRange.
*** 
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the text in the collection or parent object.
*** 
> *Read Only* 
> 
> Story **parentStory** 
>
> The story that contains the text.
*** 
> *Read Only* 
> 
> Mixed **parentTextFrames** 
>
> An array of the text frames that contain the text. Can return: Array of TextFrames or TextPaths.
*** 
> *Read Only* 
> 
> Measurement Unit (Number or String)=any **ascent** 
>
> The maximum ascent of any character in the text.
*** 
> *Read Only* 
> 
> Measurement Unit (Number or String)=any **descent** 
>
> The maximum descent of any character in the text.
*** 
> *Read Only* 
> 
> Measurement Unit (Number or String)=any **baseline** 
>
> The vertical offset of the text.
*** 
> *Read Only* 
> 
> Measurement Unit (Number or String)=any **horizontalOffset** 
>
> The horizontal offset of the text.
*** 
> *Read Only* 
> 
> Boolean **styleOverridden** 
>
> If true, the applied style has been overridden with additional attributes.
*** 
> *Read Only* 
> 
> Measurement Unit (Number or String)=any **endBaseline** 
>
> Vertical offset of the end of the text.
*** 
> *Read Only* 
> 
> Measurement Unit (Number or String)=any **endHorizontalOffset** 
>
> Horizontal offset of the end of the text.
*** 
> *Read Only* 
> 
> CharacterStyle **appliedNestedStyles** 
>
> The applied character styles dictated by nested styles.
*** 
> *Read Only* 
> 
> PageItem **allPageItems** 
>
> Lists all page items contained by the TextStyleRange.
*** 
> *Read Only* 
> 
> Graphic **allGraphics** 
>
> Lists all graphics contained by the TextStyleRange.
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
> The parent of the TextStyleRange (a XmlStory, TextPath, TextFrame, EndnoteTextFrame, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story, Cell, XMLElement, Endnote, Footnote, Note, Change or HiddenText).
*** 
> *Read Only* 
> 
> Texts **texts** 
>
> A collection of text objects.
*** 
> *Read Only* 
> 
> Characters **characters** 
>
> A collection of characters.
*** 
> *Read Only* 
> 
> Words **words** 
>
> A collection of words.
*** 
> *Read Only* 
> 
> Lines **lines** 
>
> A collection of lines.
*** 
> *Read Only* 
> 
> TextColumns **textColumns** 
>
> A collection of text columns.
*** 
> *Read Only* 
> 
> Paragraphs **paragraphs** 
>
> A collection of paragraphs.
*** 
> *Read Only* 
> 
> InsertionPoints **insertionPoints** 
>
> A collection of insertion points.
*** 
> *Read Only* 
> 
> TextStyleRanges **textStyleRanges** 
>
> A collection of text style ranges.
*** 
> *Read Only* 
> 
> EndnoteRanges **endnoteRanges** 
>
> A collection of endnote text ranges.
*** 
> *Read Only* 
> 
> Footnotes **footnotes** 
>
> A collection of footnotes.
*** 
> *Read Only* 
> 
> TextVariableInstances **textVariableInstances** 
>
> A collection of text variable instances.
*** 
> *Read Only* 
> 
> NestedLineStyles **nestedLineStyles** 
>
> A collection of nested line styles.
*** 
> *Read Only* 
> 
> NestedGrepStyles **nestedGrepStyles** 
>
> A collection of nested GREP styles.
*** 
> *Read Only* 
> 
> NestedStyles **nestedStyles** 
>
> A collection of nested styles.
*** 
> *Read Only* 
> 
> TabStops **tabStops** 
>
> A collection of tab stops.
*** 
> *Read Only* 
> 
> Tables **tables** 
>
> A collection of tables.
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
> Notes **notes** 
>
> A collection of notes.
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
> HiddenTexts **hiddenTexts** 
>
> A collection of hidden text objects.
*** 
> *Read Only* 
> 
> Preferences **preferences** 
>
> A collection of preferences objects.
*** 
> Number **designAxes** 
>
> Value of Design Axes
*** 
> Mixed **tabList** 
>
> A list of the tab stops in the paragraph. Can return: Array of Arrays of Property Name/Value Pairs.
*** 
> Condition **appliedConditions** 
>
> The applied conditions.
*** 
> Measurement Unit (Number or String)=any **paragraphShadingLeftOffset** 
>
> The distance to offset the left edge of the paragraph.
*** 
> Measurement Unit (Number or String)=any **paragraphShadingRightOffset** 
>
> The distance to offset the right edge of the paragraph.
*** 
> Measurement Unit (Number or String)=any **paragraphShadingTopOffset** 
>
> The distance to offset the top edge of the paragraph.
*** 
> Measurement Unit (Number or String)=any **paragraphShadingBottomOffset** 
>
> The distance to offset the bottom edge of the paragraph.
*** 
> ParagraphShadingWidthEnum **paragraphShadingWidth** 
>
> The basis (text width or column width) used to calculate the width of the paragraph shading.
*** 
> ParagraphShadingTopOriginEnum **paragraphShadingTopOrigin** 
>
> The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph shading.
*** 
> ParagraphShadingBottomOriginEnum **paragraphShadingBottomOrigin** 
>
> The basis (descent or baseline) used to calculate the bottom origin of the paragraph shading.
*** 
> Boolean **paragraphShadingClipToFrame** 
>
> If true, forces the shading of the paragraph to be clipped with respect to frame shape.
*** 
> Boolean **paragraphShadingSuppressPrinting** 
>
> If true, suppress printing of the shading of the paragraph.
*** 
> Boolean **paragraphShadingOn** 
>
> If true, the paragraph shading is On.
*** 
> Boolean **paragraphShadingOverprint** 
>
> If true, the paragraph shading will overprint.
*** 
> Number **paragraphShadingTint** 
>
> The tint (as a percentage) of the paragraph shading. (Range: 0 to 100)
*** 
> Mixed **paragraphShadingColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the paragraph shading. Can return: Swatch or String.
*** 
> Number **kerningValue** 
>
> The amount of space to add or remove between characters, specified in thousands of an em.
*** 
> Mixed **appliedFont** 
>
> The font applied to the TextStyleRange, specified as either a font object or the name of font family. Can return: Font or String.
*** 
> String **fontStyle** 
>
> The name of the font style.
*** 
> Measurement Unit (Number or String)=any **pointSize** 
>
> The text size.
*** 
> Mixed **leading** 
>
> The leading applied to the text. Can return: Unit or Leading enumerator.
*** 
> String **kerningMethod** 
>
> The type of pair kerning.
*** 
> Number **tracking** 
>
> The amount by which to loosen or tighten a block of text, specified in thousands of an em.
*** 
> Capitalization **capitalization** 
>
> The capitalization scheme.
*** 
> Position **position** 
>
> The text position relative to the baseline.
*** 
> Boolean **underline** 
>
> If true, underlines the text.
*** 
> Boolean **strikeThru** 
>
> If true, draws a strikethrough line through the text.
*** 
> Boolean **ligatures** 
>
> If true, replaces specific character combinations (e.g., fl, fi) with ligature characters.
*** 
> Boolean **noBreak** 
>
> If true, keeps the text on the same line.
*** 
> Number **horizontalScale** 
>
> The horizontal scaling applied to the TextStyleRange.
*** 
> Number **verticalScale** 
>
> The vertical scaling applied to the TextStyleRange.
*** 
> Measurement Unit (Number or String)=any **baselineShift** 
>
> The baseline shift applied to the text.
*** 
> Number **skew** 
>
> The skew angle of the TextStyleRange.
*** 
> Number **fillTint** 
>
> The tint (as a percentage) of the fill color of the TextStyleRange. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
*** 
> Number **strokeTint** 
>
> The tint (as a percentage) of the stroke color of the TextStyleRange. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
*** 
> Measurement Unit (Number or String)=any **strokeWeight** 
>
> The stroke weight applied to the characters of the text.
*** 
> Boolean **overprintStroke** 
>
> If true, the stroke of the characters will overprint.
*** 
> Boolean **overprintFill** 
>
> If true, the fill color of the characters will overprint.
*** 
> OTFFigureStyle **otfFigureStyle** 
>
> The figure style in OpenType fonts.
*** 
> Boolean **otfOrdinal** 
>
> If true, uses ordinals in OpenType fonts.
*** 
> Boolean **otfFraction** 
>
> If true, uses fractions in OpenType fonts.
*** 
> Boolean **otfDiscretionaryLigature** 
>
> If true, uses discretionary ligatures in OpenType fonts.
*** 
> Boolean **otfTitling** 
>
> If true, uses titling forms in OpenType fonts.
*** 
> Boolean **otfContextualAlternate** 
>
> If true, uses contextual alternate forms in OpenType fonts.
*** 
> Boolean **otfSwash** 
>
> If true, uses swash forms in OpenType fonts.
*** 
> Mixed **underlineColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. . Can return: Swatch or String.
*** 
> Mixed **underlineGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. Can return: Swatch or String.
*** 
> Number **underlineTint** 
>
> The underline stroke tint (as a percentage). (Range: 0 to 100)
*** 
> Number **underlineGapTint** 
>
> The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid.
*** 
> Boolean **underlineOverprint** 
>
> If true, the underline stroke color will overprint.
*** 
> Boolean **underlineGapOverprint** 
>
> If true, the gap color of the underline stroke will overprint.
*** 
> Mixed **underlineType** 
>
> The stroke type of the underline stroke. Can return: StrokeStyle or String.
*** 
> Measurement Unit (Number or String)=any **underlineOffset** 
>
> The amount by which to offset the underline from the text baseline.
*** 
> Measurement Unit (Number or String)=any **underlineWeight** 
>
> The stroke weight of the underline stroke.
*** 
> Mixed **strikeThroughColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. Can return: Swatch or String.
*** 
> Mixed **strikeThroughGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. Can return: Swatch or String.
*** 
> Number **strikeThroughTint** 
>
> The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100)
*** 
> Number **strikeThroughGapTint** 
>
> The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid.
*** 
> Boolean **strikeThroughOverprint** 
>
> If true, the strikethrough stroke will overprint.
*** 
> Boolean **strikeThroughGapOverprint** 
>
> If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid.
*** 
> Mixed **strikeThroughType** 
>
> The stroke type of the strikethrough stroke. Can return: StrokeStyle or String.
*** 
> Measurement Unit (Number or String)=any **strikeThroughOffset** 
>
> The amount by which to offset the strikethrough stroke from the text baseline.
*** 
> Measurement Unit (Number or String)=any **strikeThroughWeight** 
>
> The stroke weight of the strikethrough stroke.
*** 
> Swatch **fillColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of the TextStyleRange. . Can also accept: String.
*** 
> Swatch **strokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the TextStyleRange. Can also accept: String.
*** 
> Mixed **appliedLanguage** 
>
> The language of the text. Can return: LanguageWithVendors or Language. Can also accept: String.
*** 
> Boolean **paragraphBorderOn** 
>
> If true, the paragraph border is on.
*** 
> Boolean **paragraphBorderOverprint** 
>
> If true, the paragraph border will overprint.
*** 
> Number **paragraphBorderTint** 
>
> The tint (as a percentage) of the paragraph stroke. (Range: 0 to 100)
*** 
> Mixed **paragraphBorderColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the paragraph stroke. Can return: Swatch or String.
*** 
> Boolean **paragraphBorderGapOverprint** 
>
> If true, the paragraph border gap will overprint. Note: Valid only when border type is not solid.
*** 
> Number **paragraphBorderGapTint** 
>
> The tint (as a percentage) of the paragraph border gap. Note: Valid only when the border type is not solid. (Range: 0 to 100)
*** 
> Mixed **paragraphBorderGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the paragraph border gap. Note: Valid only when the border type is not solid. Can return: Swatch or String.
*** 
> Mixed **paragraphBorderType** 
>
> The type of the border for the paragraph. Can return: StrokeStyle or String.
*** 
> Measurement Unit (Number or String)=any **paragraphBorderLeftLineWeight** 
>
> The left line weight of the border of paragraph.
*** 
> Measurement Unit (Number or String)=any **paragraphBorderTopLineWeight** 
>
> The top line weight of the border of paragraph.
*** 
> Measurement Unit (Number or String)=any **paragraphBorderRightLineWeight** 
>
> The right line weight of the border of paragraph.
*** 
> Measurement Unit (Number or String)=any **paragraphBorderBottomLineWeight** 
>
> The bottom line weight of the border of paragraph.
*** 
> EndCap **paragraphBorderStrokeEndCap** 
>
> The end shape of an open path.
*** 
> EndJoin **paragraphBorderStrokeEndJoin** 
>
> The corner join applied to the TextStyleRange.
*** 
> Measurement Unit (Number or String)=any **paragraphShadingTopLeftCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes
*** 
> CornerOptions **paragraphShadingTopLeftCornerOption** 
>
> The shape to be applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes.Note: corner option differs from end join in which you can set a radius for a corner option, whereas the rounded or beveled effect of an end join depends on the stroke weight.
*** 
> Measurement Unit (Number or String)=any **paragraphShadingTopRightCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes
*** 
> CornerOptions **paragraphShadingTopRightCornerOption** 
>
> The shape to apply to the top right corner of rectangular shapes
*** 
> Measurement Unit (Number or String)=any **paragraphShadingBottomLeftCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes
*** 
> CornerOptions **paragraphShadingBottomLeftCornerOption** 
>
> The shape to apply to the bottom left corner of rectangular shapes.
*** 
> Measurement Unit (Number or String)=any **paragraphShadingBottomRightCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes
*** 
> CornerOptions **paragraphShadingBottomRightCornerOption** 
>
> The shape to apply to the bottom right corner of rectangular shapes.
*** 
> Measurement Unit (Number or String)=any **paragraphBorderTopLeftCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes
*** 
> CornerOptions **paragraphBorderTopLeftCornerOption** 
>
> The shape to be applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes.Note: corner option differs from end join in which you can set a radius for a corner option, whereas the rounded or beveled effect of an end join depends on the stroke weight.
*** 
> Measurement Unit (Number or String)=any **paragraphBorderTopRightCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes
*** 
> CornerOptions **paragraphBorderTopRightCornerOption** 
>
> The shape to apply to the top right corner of rectangular shapes
*** 
> Measurement Unit (Number or String)=any **paragraphBorderBottomLeftCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes
*** 
> CornerOptions **paragraphBorderBottomLeftCornerOption** 
>
> The shape to apply to the bottom left corner of rectangular shapes.
*** 
> Measurement Unit (Number or String)=any **paragraphBorderBottomRightCornerRadius** 
>
> The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes
*** 
> CornerOptions **paragraphBorderBottomRightCornerOption** 
>
> The shape to apply to the bottom right corner of rectangular shapes.
*** 
> ParagraphBorderEnum **paragraphBorderWidth** 
>
> The basis (text width or column width) used to calculate the width of the paragraph border.
*** 
> ParagraphBorderTopOriginEnum **paragraphBorderTopOrigin** 
>
> The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph border.
*** 
> ParagraphBorderBottomOriginEnum **paragraphBorderBottomOrigin** 
>
> The basis (descent or baseline) used to calculate the bottom origin of the paragraph border.
*** 
> Measurement Unit (Number or String)=any **paragraphBorderLeftOffset** 
>
> The distance to offset the left edge of the paragraph border.
*** 
> Measurement Unit (Number or String)=any **paragraphBorderRightOffset** 
>
> The distance to offset the right edge of the paragraph border.
*** 
> Measurement Unit (Number or String)=any **paragraphBorderTopOffset** 
>
> The distance to offset the top edge of the paragraph border.
*** 
> Measurement Unit (Number or String)=any **paragraphBorderBottomOffset** 
>
> The distance to offset the bottom edge of the paragraph border.
*** 
> Boolean **paragraphBorderDisplayIfSplits** 
>
> If true, then paragraph border is also displayed at the points where the paragraph splits across frames or columns.
*** 
> HyphenationStyleEnum **providerHyphenationStyle** 
>
> The hyphenation style chosen for the provider.
*** 
> Boolean **mergeConsecutiveParaBorders** 
>
> If true, consecutive para borders with completely similar properties are merged.
*** 
> Mixed **sameParaStyleSpacing** 
>
> The space between paragraphs using same style. Can return: Unit or Spacing enumerator.
*** 
> Number **paragraphKashidaWidth** 
>
> Paragraph kashida width. 0 is none, 1 is short, 2 is medium, 3 is long
*** 
> Boolean **alignToBaseline** 
>
> If true, aligns the baseline of the text to the baseline grid.
*** 
> Measurement Unit (Number or String)=any **firstLineIndent** 
>
> The amount to indent the first line.
*** 
> Measurement Unit (Number or String)=any **leftIndent** 
>
> The width of the left indent.
*** 
> Measurement Unit (Number or String)=any **rightIndent** 
>
> The width of the right indent.
*** 
> Measurement Unit (Number or String)=any **spaceBefore** 
>
> The height of the paragraph space above.
*** 
> Measurement Unit (Number or String)=any **spaceAfter** 
>
> The height of the paragraph space below.
*** 
> Mixed **balanceRaggedLines** 
>
> If true or set to an enumeration value, balances ragged lines. Note: Not valid with a single-line text composer. Can return: Boolean or BalanceLinesStyle enumerator.
*** 
> Justification **justification** 
>
> The paragraph alignment.
*** 
> SingleWordJustification **singleWordJustification** 
>
> The alignment to use for lines that contain a single word.
*** 
> Number **autoLeading** 
>
> The percent of the type size to use for auto leading. (Range: 0 to 500).
*** 
> Number **dropCapLines** 
>
> The number of lines to drop cap.
*** 
> Number **dropCapCharacters** 
>
> The number of characters to drop cap.
*** 
> Boolean **keepLinesTogether** 
>
> If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames.
*** 
> Boolean **keepAllLinesTogether** 
>
> If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns.
*** 
> Number **keepWithNext** 
>
> The minimum number of lines to keep with the next paragraph.
*** 
> Number **keepFirstLines** 
>
> The minimum number of lines to keep together in a paragraph before allowing a page break.
*** 
> Number **keepLastLines** 
>
> The minimum number of lines to keep together in a paragraph after a page break.
*** 
> StartParagraph **startParagraph** 
>
> The location at which to start the paragraph.
*** 
> String **composer** 
>
> The text composer to use to compose the text.
*** 
> Number **minimumWordSpacing** 
>
> The minimum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000)
*** 
> Number **maximumWordSpacing** 
>
> The maximum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000)
*** 
> Number **desiredWordSpacing** 
>
> The desired word spacing, specified as a percentage of the font word space value. (Range: 0 to 1000)
*** 
> Number **minimumLetterSpacing** 
>
> The minimum letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified.
*** 
> Number **maximumLetterSpacing** 
>
> The maximum letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified.
*** 
> Number **desiredLetterSpacing** 
>
> The desired letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500)
*** 
> Number **minimumGlyphScaling** 
>
> The minimum width (as a percentage) of individual characters. (Range: 50 to 200)
*** 
> Number **maximumGlyphScaling** 
>
> The maximum width (as a percentage) of individual characters. (Range: 50 to 200)
*** 
> Number **desiredGlyphScaling** 
>
> The desired width (as a percentage) of individual characters. (Range: 50 to 200)
*** 
> Boolean **ruleAbove** 
>
> If true, places a rule above the paragraph.
*** 
> Boolean **ruleAboveOverprint** 
>
> If true, the paragraph rule above will overprint.
*** 
> Measurement Unit (Number or String)=any **ruleAboveLineWeight** 
>
> The line weight of the rule above.
*** 
> Number **ruleAboveTint** 
>
> The tint (as a percentage) of the paragraph rule above. (Range: 0 to 100)
*** 
> Measurement Unit (Number or String)=any **ruleAboveOffset** 
>
> The amount to offset the paragraph rule above from the baseline of the first line the paragraph.
*** 
> Measurement Unit (Number or String)=any **ruleAboveLeftIndent** 
>
> The distance to indent the left edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph.
*** 
> Measurement Unit (Number or String)=any **ruleAboveRightIndent** 
>
> The distance to indent the right edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph.
*** 
> RuleWidth **ruleAboveWidth** 
>
> The basis (text width or column width) used to calculate the width of the paragraph rule above.
*** 
> Mixed **ruleAboveColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule above. Can return: Swatch or String.
*** 
> Mixed **ruleAboveGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule above. Note: Valid only when the paragraph rule above type is not solid. Can return: Swatch or String.
*** 
> Number **ruleAboveGapTint** 
>
> The tint (as a percentage) of the stroke gap color of the paragraph rule. (Range: 0 to 100) Note: Valid only when the rule above type is not solid.
*** 
> Boolean **ruleAboveGapOverprint** 
>
> If true, the stroke gap of the paragraph rule above will overprint. Note: Valid only the rule above type is not solid.
*** 
> Mixed **ruleAboveType** 
>
> The stroke type of the rule above the paragraph. Can return: StrokeStyle or String.
*** 
> Boolean **ruleBelow** 
>
> If true, applies a paragraph rule below.
*** 
> Measurement Unit (Number or String)=any **ruleBelowLineWeight** 
>
> The line weight of the rule below.
*** 
> Number **ruleBelowTint** 
>
> The tint (as a percentage) of the paragraph rule below. (Range: 0 to 100)
*** 
> Measurement Unit (Number or String)=any **ruleBelowOffset** 
>
> The amount to offset the the paragraph rule below from the baseline of the last line of the paragraph.
*** 
> Measurement Unit (Number or String)=any **ruleBelowLeftIndent** 
>
> The distance to indent the left edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph.
*** 
> Measurement Unit (Number or String)=any **ruleBelowRightIndent** 
>
> The distance to indent the right edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph.
*** 
> RuleWidth **ruleBelowWidth** 
>
> The basis (text width or column width) used to calculate the width of the paragraph rule below.
*** 
> Mixed **ruleBelowColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule below. Can return: Swatch or String.
*** 
> Mixed **ruleBelowGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule below. Note: Valid only when the paragraph rule below type is not solid. Can return: Swatch or String.
*** 
> Number **ruleBelowGapTint** 
>
> The tint (as a percentage) of the stroke gap color of the paragraph rule below. (Range: 0 to 100) Note: Valid only when the paragraph rule below type is not solid.
*** 
> Mixed **ruleBelowType** 
>
> The stroke type of the rule below the paragraph. Can return: StrokeStyle or String.
*** 
> Boolean **hyphenateCapitalizedWords** 
>
> If true, allows hyphenation of capitalized words.
*** 
> Boolean **hyphenation** 
>
> If true, allows hyphenation.
*** 
> Number **hyphenateBeforeLast** 
>
> The minimum number of letters at the end of a word that can be broken by a hyphen.
*** 
> Number **hyphenateAfterFirst** 
>
> The mininum number of letters at the beginning of a word that can be broken by a hyphen.
*** 
> Number **hyphenateWordsLongerThan** 
>
> The minimum number of letters a word must have in order to qualify for hyphenation.
*** 
> Number **hyphenateLadderLimit** 
>
> The maximum number of hyphens that can appear on consecutive lines. To specify unlimited consecutive lines, use zero.
*** 
> Measurement Unit (Number or String)=any **hyphenationZone** 
>
> The amount of white space allowed at the end of a line of non-justified text before hypenation begins. Note: Valid when composer is single-line composer.
*** 
> Number **hyphenWeight** 
>
> The relative desirability of better spacing vs. fewer hyphens. A lower value results in greater use of hyphens. (Range: 0 to 100)
*** 
> CharacterStyle **dropCapStyle** 
>
> The character style to apply to the drop cap. Can also accept: String.
*** 
> Mixed **contents** 
>
> The contents of the text. Can return: String or SpecialCharacters enumerator.
*** 
> ParagraphStyle **appliedParagraphStyle** 
>
> The paragraph style applied to the text. Can also accept: String.
*** 
> CharacterStyle **appliedCharacterStyle** 
>
> The character style applied to the text. Can also accept: String.
*** 
> Measurement Unit (Number or String)=any **lastLineIndent** 
>
> The amount to indent the last line in the paragraph.
*** 
> Boolean **hyphenateLastWord** 
>
> If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true.
*** 
> Boolean **otfSlashedZero** 
>
> If true, use a slashed zeroes in OpenType fonts.
*** 
> Boolean **otfHistorical** 
>
> If true, use historical forms in OpenType fonts.
*** 
> Number **otfStylisticSets** 
>
> The stylistic sets to use in OpenType fonts.
*** 
> Number **gradientFillLength** 
>
> The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text.
*** 
> Number **gradientFillAngle** 
>
> The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180)
*** 
> Number **gradientStrokeLength** 
>
> The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text.
*** 
> Number **gradientStrokeAngle** 
>
> The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180)
*** 
> Measurement Unit (Number or String)=any **gradientFillStart** 
>
> The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y].
*** 
> Measurement Unit (Number or String)=any **gradientStrokeStart** 
>
> The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y].
*** 
> Boolean **keepWithPrevious** 
>
> If the first line in the paragraph should be kept with the last line of previous paragraph.
*** 
> Mixed **spanSplitColumnCount** 
>
> The number of columns a paragraph spans or the number of split columns. Can return: Short Integer (1 - 40) or SpanColumnCountOptions enumerator.
*** 
> SpanColumnTypeOptions **spanColumnType** 
>
> Whether a paragraph should be a single column, span columns or split columns
*** 
> Measurement Unit (Number or String)=any **splitColumnInsideGutter** 
>
> The inside gutter if the paragraph splits columns
*** 
> Measurement Unit (Number or String)=any **splitColumnOutsideGutter** 
>
> The outside gutter if the paragraph splits columns
*** 
> Measurement Unit (Number or String)=any **spanColumnMinSpaceBefore** 
>
> The minimum space before a span or a split column
*** 
> Measurement Unit (Number or String)=any **spanColumnMinSpaceAfter** 
>
> The minimum space after a span or a split column
*** 
> Boolean **ruleBelowOverprint** 
>
> If true, the rule below will overprint.
*** 
> Boolean **ruleBelowGapOverprint** 
>
> If true, the gap color of the rule below will overprint.
*** 
> Number **dropcapDetail** 
>
> Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid.
*** 
> Boolean **hyphenateAcrossColumns** 
>
> If true, allows the last word in a text column to be hyphenated.
*** 
> Boolean **keepRuleAboveInFrame** 
>
> If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true.
*** 
> Boolean **ignoreEdgeAlignment** 
>
> If true, ignores optical edge alignment for the paragraph.
*** 
> Boolean **otfMark** 
>
> If true, uses mark positioning in OpenType fonts.
*** 
> Boolean **otfLocale** 
>
> If true, uses localized forms in OpenType fonts.
*** 
> PositionalForms **positionalForm** 
>
> The OpenType positional form.
*** 
> ParagraphDirectionOptions **paragraphDirection** 
>
> Paragraph direction.
*** 
> ParagraphJustificationOptions **paragraphJustification** 
>
> Paragraph justification.
*** 
> Number **miterLimit** 
>
> The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join.
*** 
> TextStrokeAlign **strokeAlignment** 
>
> The stroke alignment applied to the text.
*** 
> OutlineJoin **endJoin** 
>
> The stroke join type applied to the characters of the text.
*** 
> Boolean **otfOverlapSwash** 
>
> If true, use overlapping swash forms in OpenType fonts
*** 
> Boolean **otfStylisticAlternate** 
>
> If true, use stylistic alternate forms in OpenType fonts
*** 
> Boolean **otfJustificationAlternate** 
>
> If true, use alternate justification forms in OpenType fonts
*** 
> Boolean **otfStretchedAlternate** 
>
> If true, use stretched alternate forms in OpenType fonts
*** 
> CharacterDirectionOptions **characterDirection** 
>
> The direction of the character.
*** 
> CharacterDirectionOptions **keyboardDirection** 
>
> The keyboard direction of the character.
*** 
> DigitsTypeOptions **digitsType** 
>
> The digits type.
*** 
> KashidasOptions **kashidas** 
>
> Use of Kashidas for justification
*** 
> DiacriticPositionOptions **diacriticPosition** 
>
> Position of diacriticical characters.
*** 
> Number **xOffsetDiacritic** 
>
> The x (horizontal) offset for diacritic adjustment.
*** 
> Number **yOffsetDiacritic** 
>
> The y (vertical) offset for diacritic adjustment.
*** 
> Mixed **opentypeFeatures** 
>
> OpenType features. Can return: Array of Array of 2 Strings or Long Integers.
*** 
> Boolean **gridAlignFirstLineOnly** 
>
> If true, aligns only the first line to the frame grid or baseline grid. If false, aligns all lines to the grid.
*** 
> GridAlignment **gridAlignment** 
>
> The alignment to the frame grid or baseline grid.
*** 
> Number **gridGyoudori** 
>
> The manual gyoudori setting.
*** 
> Number **autoTcy** 
>
> The number of half-width characters at or below which the characters automatically run horizontally in vertical text.
*** 
> Boolean **autoTcyIncludeRoman** 
>
> If true, auto tcy includes Roman characters.
*** 
> Mixed **kinsokuSet** 
>
> The kinsoku set that determines legitimate line breaks. Can return: KinsokuTable, KinsokuSet enumerator or String.
*** 
> KinsokuType **kinsokuType** 
>
> The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined.
*** 
> KinsokuHangTypes **kinsokuHangType** 
>
> The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect.
*** 
> Boolean **bunriKinshi** 
>
> If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect.
*** 
> Mixed **mojikumi** 
>
> The mojikumi table. For information, see mojikumi table defaults. Can return: MojikumiTable, String or MojikumiTableDefaults enumerator.
*** 
> Boolean **rensuuji** 
>
> If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers.
*** 
> Boolean **rotateSingleByteCharacters** 
>
> If true, rotates Roman characters in vertical text.
*** 
> LeadingModel **leadingModel** 
>
> The point from which leading is measured from line to line.
*** 
> CharacterAlignment **characterAlignment** 
>
> The alignment of small characters to the largest character in the line.
*** 
> Number **tsume** 
>
> The amount of horizontal character compression.
*** 
> Number **leadingAki** 
>
> The amount of space before each character.
*** 
> Number **trailingAki** 
>
> The amount of space after each character.
*** 
> Number **characterRotation** 
>
> The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise.
*** 
> Number **jidori** 
>
> The number of grid squares in which to arrange the text.
*** 
> Number **shataiMagnification** 
>
> The amount (as a percentage) of shatai obliquing to apply.
*** 
> Number **shataiDegreeAngle** 
>
> The shatai lens angle (in degrees).
*** 
> Boolean **shataiAdjustRotation** 
>
> If true, applies shatai rotation.
*** 
> Boolean **shataiAdjustTsume** 
>
> If true, adjusts shatai tsume.
*** 
> Boolean **tatechuyoko** 
>
> If true, makes the character horizontal in vertical text.
*** 
> Number **tatechuyokoXOffset** 
>
> The horizontal offset for horizontal characters in vertical text.
*** 
> Number **tatechuyokoYOffset** 
>
> The vertical offset for horizontal characters in vertical text.
*** 
> Mixed **kentenFillColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of kenten characters. Can return: Swatch or String.
*** 
> Mixed **kentenStrokeColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. Can return: Swatch or String.
*** 
> Number **kentenTint** 
>
> The fill tint (as a percentage) of kenten characters. (Range: 0 to 100)
*** 
> Number **kentenStrokeTint** 
>
> The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100)
*** 
> Number **kentenWeight** 
>
> The stroke weight (in points) of kenten characters.
*** 
> AdornmentOverprint **kentenOverprintFill** 
>
> The method of overprinting the kenten fill.
*** 
> AdornmentOverprint **kentenOverprintStroke** 
>
> The method of overprinting the kenten stroke.
*** 
> KentenCharacter **kentenKind** 
>
> The style of kenten characters.
*** 
> Number **kentenPlacement** 
>
> The distance between kenten characters and their parent characters.
*** 
> KentenAlignment **kentenAlignment** 
>
> The alignment of kenten characters relative to the parent characters.
*** 
> RubyKentenPosition **kentenPosition** 
>
> The kenten position relative to the parent character.
*** 
> Mixed **kentenFont** 
>
> The font to use for kenten characters. Can return: Font or String.
*** 
> Mixed **kentenFontStyle** 
>
> The font style of kenten characters. Can return: String or NothingEnum enumerator.
*** 
> Number **kentenFontSize** 
>
> The size (in points) of kenten characters.
*** 
> Number **kentenXScale** 
>
> The horizontal size of kenten characters as a percent of the original size.
*** 
> Number **kentenYScale** 
>
> The vertical size of kenten charachers as a percent of the original size.
*** 
> String **kentenCustomCharacter** 
>
> The character used for kenten. Note: Valid only when kenten kind is custom.
*** 
> KentenCharacterSet **kentenCharacterSet** 
>
> The character set used for the custom kenten character. Note: Valid only when kenten kind is custom.
*** 
> Mixed **rubyFill** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the fill of ruby characters. Can return: Swatch or String.
*** 
> Mixed **rubyStroke** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. Can return: Swatch or String.
*** 
> Number **rubyTint** 
>
> The tint (as a percentage) of the ruby fill color. (Range: 0 to 100)
*** 
> Number **rubyWeight** 
>
> The stroke weight (in points) of ruby characters.
*** 
> AdornmentOverprint **rubyOverprintFill** 
>
> The method of overprinting the ruby fill.
*** 
> AdornmentOverprint **rubyOverprintStroke** 
>
> The method of overprinting the ruby stroke.
*** 
> Number **rubyStrokeTint** 
>
> The stroke tint (as a percentage) of ruby characters.
*** 
> Mixed **rubyFont** 
>
> The font applied to ruby characters. Can return: Font or String.
*** 
> Mixed **rubyFontStyle** 
>
> The font style of ruby characters. Can return: String or NothingEnum enumerator.
*** 
> Number **rubyFontSize** 
>
> The size (in points) of ruby characters.
*** 
> Boolean **rubyOpenTypePro** 
>
> If true, uses OpenType Pro fonts for ruby.
*** 
> Number **rubyXScale** 
>
> The horizontal size of ruby characters, specified as a percent of the original size.
*** 
> Number **rubyYScale** 
>
> The vertical size of ruby characters, specified as a percent of the original size.
*** 
> RubyTypes **rubyType** 
>
> The ruby type.
*** 
> RubyAlignments **rubyAlignment** 
>
> The ruby alignment.
*** 
> RubyKentenPosition **rubyPosition** 
>
> The position of ruby characters relative to the parent text.
*** 
> Number **rubyXOffset** 
>
> The amount of horizontal space between ruby and parent characters.
*** 
> Number **rubyYOffset** 
>
> The amount of vertical space between ruby and parent characters.
*** 
> RubyParentSpacing **rubyParentSpacing** 
>
> The ruby spacing relative to the parent text.
*** 
> Boolean **rubyAutoAlign** 
>
> If true, auto aligns ruby.
*** 
> Boolean **rubyOverhang** 
>
> If true, constrains ruby overhang to the specified amount. For information on specifying an amount, see ruby parent overhang amount.
*** 
> Boolean **rubyAutoScaling** 
>
> If true, automatically scales ruby to the specified percent of parent text size. For information on specifying a percent, see ruby parent scaling percent.
*** 
> Number **rubyParentScalingPercent** 
>
> The amount (as a percentage) to scale the parent text size to determine the ruby text size.
*** 
> RubyOverhang **rubyParentOverhangAmount** 
>
> The amount by which ruby characters can overhang the parent text.
*** 
> Boolean **warichu** 
>
> If true, turns on warichu.
*** 
> Number **warichuSize** 
>
> The amount (as a percentage) to scale parent text size to determine warichu size.
*** 
> Number **warichuLines** 
>
> The number of lines of warichu within a single normal line.
*** 
> Number **warichuLineSpacing** 
>
> The gap between lines of warichu characters.
*** 
> WarichuAlignment **warichuAlignment** 
>
> The warichu alignment.
*** 
> Number **warichuCharsAfterBreak** 
>
> The minimum number of characters allowed after a line break.
*** 
> Number **warichuCharsBeforeBreak** 
>
> The minimum number of characters allowed before a line break.
*** 
> Boolean **otfProportionalMetrics** 
>
> If true, kerns according to proportional CJK metrics in OpenType fonts.
*** 
> Boolean **otfHVKana** 
>
> If true, switches hiragana fonts, which have different glyphs for horizontal and vertical.
*** 
> Boolean **otfRomanItalics** 
>
> If true, applies italics to half-width alphanumerics.
*** 
> Boolean **scaleAffectsLineHeight** 
>
> If true, the line changes size when characters are scaled.
*** 
> Boolean **cjkGridTracking** 
>
> If true, uses grid tracking to track non-Roman characters in CJK grids.
*** 
> AlternateGlyphForms **glyphForm** 
>
> The glyph variant to substitute for standard glyphs.
*** 
> Boolean **rubyFlag** 
>
> If true, ruby is on.
*** 
> String **rubyString** 
>
> The ruby string contents.
*** 
> Boolean **paragraphGyoudori** 
>
> If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph.
*** 
> Number **rubyAutoTcyDigits** 
>
> The number of digits included in auto tcy (tate-chuu-yoko) in ruby.
*** 
> Boolean **rubyAutoTcyIncludeRoman** 
>
> If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby.
*** 
> Boolean **rubyAutoTcyAutoScale** 
>
> If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em.
*** 
> Boolean **treatIdeographicSpaceAsSpace** 
>
> If true, ideographic spaces will not wrap to the next line like text characters.
*** 
> Boolean **allowArbitraryHyphenation** 
>
> If true, words unassociated with a hyphenation dictionary can break to the next line on any character.
*** 
> ListType **bulletsAndNumberingListType** 
>
> List type for bullets and numbering.
*** 
> Mixed **bulletsCharacterStyle** 
>
> The character style to be used for the text after string. Can return: CharacterStyle or String.
*** 
> Mixed **numberingCharacterStyle** 
>
> The character style to be used for the number string. Can return: CharacterStyle or String.
*** 
> String **numberingExpression** 
>
> The number string expression for numbering.
*** 
> String **bulletsTextAfter** 
>
> The text after string expression for bullets.
*** 
> Mixed **appliedNumberingList** 
>
> The list to be part of. Can return: NumberingList or String.
*** 
> Number **numberingLevel** 
>
> The level of the paragraph.
*** 
> Mixed **numberingFormat** 
>
> Numbering format options. Can return: NumberingStyle enumerator or String.
*** 
> Boolean **numberingContinue** 
>
> Continue the numbering at this level.
*** 
> Number **numberingStartAt** 
>
> Determines starting number in a numbered list.
*** 
> Boolean **numberingApplyRestartPolicy** 
>
> If true, apply the numbering restart policy.
*** 
> ListAlignment **bulletsAlignment** 
>
> The alignment of the bullet character.
*** 
> ListAlignment **numberingAlignment** 
>
> The alignment of the number.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
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
> Boolean **textHasOverrides**( StyleType **charOrParaStyle**, Boolean **charStyleAsOverride** )
> 
> If true, text has local overrides
#### Parameters
| Type | Name | Description |
|---|---|---|
| StyleType | charOrParaStyle | Style type to look at. |
| Boolean | charStyleAsOverride | Whether to consider character styles as overrides or not (Optional) |

*** 
> Boolean **createStyleThumbnailWithProperties**( String **previewText**, Number **pointSize**, ColorSpace **space**, Number **colorValue**, File **to**, StyleType **charOrParaStyle** )
> 
> Create thumbnail for selected text using the applied style and overrides with the given properties.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | previewText | Text to use as sample |
| Number | pointSize | Text font size (in points) |
| ColorSpace | space | Color space RGB, CMYK or LAB |
| Number | colorValue | Color values |
| File | to | The path to the export file. |
| StyleType | charOrParaStyle | The applied style type to use. |

*** 
> PageItem **createOutlines**( Boolean **deleteOriginal** )
> 
> Converts text to outlines. Each line of text becomes a polygon object. When the converted text is a single letter that has no internal spaces or detached parts, the polygon contains only a single path. Note: To determine whether a font allows the creation of outlines, see allow outlines.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | deleteOriginal | If true, deletes the original text. If false, creates the outlines as separate object(s) on top of the text.  (Optional) |

*** 
> **autoTag**()
> 
> Tag the object or the parent story using default tags defined in XML preference.
*** 
> **markup**( XMLElement **using** )
> 
> Associates the page item with the specified XML element while preserving existing content.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLElement | using | The XML element. |

*** 
> **remove**()
> 
> Deletes the TextStyleRange.
*** 
> Table **convertToTable**( String **columnSeparator**, String **rowSeparator**, Number **numberOfColumns** )
> 
> Converts the text to a table.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | columnSeparator | The character that starts a new column in the new table. (Optional) |
| String | rowSeparator | The character starts a new row in the new table. (Optional) |
| Number | numberOfColumns | The number of columns in the table. Note: Valid only when the column and row separator characters are the same. (Optional) |

*** 
> **changecase**( ChangecaseMode **using** )
> 
> Sets the case of the text.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ChangecaseMode | using | The text case option. |

*** 
> **clearOverrides**( OverrideType **overridesToClear** )
> 
> Clears the specified types of override.
#### Parameters
| Type | Name | Description |
|---|---|---|
| OverrideType | overridesToClear | The types of override to clear. (Optional) |

*** 
> **recompose**()
> 
> Recomposes the text in the TextStyleRange.
*** 
> **showText**()
> 
> Jump to the text range.
*** 
> **applyParagraphStyle**( ParagraphStyle **using**, Boolean **clearingOverrides** )
> 
> Apply a paragraph style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ParagraphStyle | using | The paragraph style to apply. |
| Boolean | clearingOverrides | If true, clear any text attributes before applying the style. (Optional) |

*** 
> **applyCharacterStyle**( CharacterStyle **using** )
> 
> Apply a character style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CharacterStyle | using | The character style to apply. |

*** 
> Text **duplicate**( LocationOptions **to**, Mixed **reference** )
> 
> Duplicates the text in the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location relative to the reference object or within the containing object. |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. Can accept: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

*** 
> Text **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the text to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location relative to the reference object or within the containing object. |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. Can accept: Text, Story, Cell, Row, Column, Table or PageItem. (Optional) |

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
> Mixed **place**( File **fileName**, Boolean **showingOptions**, Object **withProperties** )
> 
> Places the file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | fileName | The file to place |
| Boolean | showingOptions | Whether to display the import options dialog (Optional) |
| Object | withProperties | Initial values for properties of the placed object(s) (Optional) |

*** 
> Note **convertToNote**()
> 
> Converts the text to a note.
*** 
> HyperlinkTextSource **findHyperlinks**( RangeSortOrder **sortOrder** )
> 
> Finds hyperlink sources that intersecting with specified text range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| RangeSortOrder | sortOrder | The sort order of found ranges. (Optional) |

*** 
> **createPlainTextQRCode**( String **plainText**, Mixed **qrCodeSwatch**, String **withProperties** )
> 
> Create Plain Text QR Code on the page item
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | plainText | QR code Plain Text  (Optional) |
| Mixed | qrCodeSwatch | Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial values for properties of the new TextStyleRange. Above parameters can also be passed as properties (Optional) |

*** 
> **createHyperlinkQRCode**( String **urlLink**, Mixed **qrCodeSwatch**, String **withProperties** )
> 
> Create Hyperlink QR Code on the page item or document
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | urlLink | QR code Hyperlink URL  (Optional) |
| Mixed | qrCodeSwatch | Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. (Optional) |
| String | withProperties | Initial values for properties of the new TextStyleRange. Above parameters can also be passed as properties (Optional) |

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
| String | withProperties | Initial values for properties of the new TextStyleRange. Above parameters can also be passed as properties (Optional) |

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
| String | withProperties | Initial values for properties of the new TextStyleRange. Above parameters can also be passed as properties (Optional) |

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
| String | withProperties | Initial values for properties of the new TextStyleRange. Above parameters can also be passed as properties (Optional) |

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
> **applyConditions**( Condition **using**, Boolean **removeExisting** )
> 
> Apply one or more conditions.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Condition | using | The condition(s) to apply |
| Boolean | removeExisting | If true, remove existing conditions. (Optional) |

*** 
> **convertBulletsAndNumberingToText**()
> 
> Convert bullets and numbering to text.
*** 
> **select**( SelectionOptions **existingSelection** )
> 
> Selects the object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SelectionOptions | existingSelection | The selection status of the TextStyleRange in relation to previously selected objects. (Optional) |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextStyleRange.
*** 
> TextStyleRange **getElements**()
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


