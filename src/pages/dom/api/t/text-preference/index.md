# TextPreference
Text preferences.

## Instance
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
> The parent of the TextPreference (a Application or Document).
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
> Boolean **typographersQuotes** 
>
> If true, converts straight quotes to typographic quotes.
<HorizontalLine />
> Boolean **highlightHjViolations** 
>
> If true, highlights hyphenation and justification rule violations in the text.
<HorizontalLine />
> Boolean **highlightKeeps** 
>
> If true, highlights paragraphs that violate keep options.
<HorizontalLine />
> Boolean **highlightSubstitutedGlyphs** 
>
> If true, highlights substituted glyphs.
<HorizontalLine />
> Boolean **highlightCustomSpacing** 
>
> If true, highlights custom kerned or tracked characters.
<HorizontalLine />
> Boolean **highlightSubstitutedFonts** 
>
> If true, highlights missing fonts.
<HorizontalLine />
> Boolean **useOpticalSize** 
>
> If true, automatically selects the correct optical size.
<HorizontalLine />
> Boolean **useParagraphLeading** 
>
> If true, applies the leading changes made to a text range to the entire paragraph. If false, applies leading changes only to the text range.
<HorizontalLine />
> Number **superscriptSize** 
>
> The size of superscript characters, specified as a percentage of the font size. (Range: 0 to 200)
<HorizontalLine />
> Number **superscriptPosition** 
>
> The position of superscript characters, specified as a percentage of the regular leading. (Range: -500 to 500)
<HorizontalLine />
> Number **subscriptSize** 
>
> The size of subscript characters, specified as a percentage of the font size. (Range: 0 to 200)
<HorizontalLine />
> Number **subscriptPosition** 
>
> The position of subscript characters, specified as a percentage of the regular leading. (Range: -500 to 500)
<HorizontalLine />
> Number **smallCap** 
>
> The size of text formatted as small caps, specified as a percentage of the font size. (Range: 1 to 200)
<HorizontalLine />
> Measurement Unit (Number or String)=any **leadingKeyIncrement** 
>
> The amount that leading increases each time the user presses the option/alt-up arrow keys or decreases each time the user presses the option/alt-down arrow keys. (Range: .001 to 100)
<HorizontalLine />
> Measurement Unit (Number or String)=any **baselineShiftKeyIncrement** 
>
> The amount that the baseline shift increases each time the user presses the option/alt-shift-up arrow keys or decreases each time the user presses the option/alt-shift-down arrow keys. (Range: .001 to 100)
<HorizontalLine />
> Number **kerningKeyIncrement** 
>
> The amount the kerning value per 1000 ems increases each time the user presses of the option/alt-right arrow keys or decreases each time the user presses the option/alt-left arrow keys. (Range: 1 to 100)
<HorizontalLine />
> Boolean **showInvisibles** 
>
> If true, shows hidden characters.
<HorizontalLine />
> Boolean **justifyTextWraps** 
>
> If true, justifies text around text wrap objects.
<HorizontalLine />
> Boolean **abutTextToTextWrap** 
>
> If true, moves wrapped text to the next available leading increment below the text wrap objects (skip by leading).
<HorizontalLine />
> Boolean **zOrderTextWrap** 
>
> If true, text wrap does not affect text on layers above the layer that contains the text wrap object. If false, text wrap affects text on all visible layers.
<HorizontalLine />
> Boolean **linkTextFilesWhenImporting** 
>
> If true, links placed text files and spreadsheet files. If false, embeds the files.
<HorizontalLine />
> Boolean **highlightKinsoku** 
>
> If true, uses on-screen highlighting to identify kinsoku.
<HorizontalLine />
> Boolean **quoteCharactersRotatedInVertical** 
>
> If true, Japanese composer treats quotes as half width and rotates them in vertical.
<HorizontalLine />
> Boolean **smartTextReflowSync** 
>
> If this is True, and if Smart text reflow is also enabled, then this will synchronously add/delete pages after text reflowing
<HorizontalLine />
> Boolean **shapeIndicAndLatinWithHarbuzz** 
>
> If this bool is set to true, shaping of Indic & Latin characters will be done through Harfbuzz Shaping engine, instead of Lipika.
<HorizontalLine />
> Boolean **useNewVerticalScaling** 
>
> If true, reverses X and Y scaling on Roman characters in vertical text.
<HorizontalLine />
> Boolean **useCidMojikumi** 
>
> If true, uses the glyph CID to get the mojikumi class of the character.
<HorizontalLine />
> Boolean **honourTextIndentsWithTextWrap** 
>
> If true, modifies indentation for Bulleted Paragraph and Bullets around a Text Wrap object.
<HorizontalLine />
> Boolean **enableStylePreviewMode** 
>
> If true, highlights character and paragraph styles with colored backgrounds.
<HorizontalLine />
> Boolean **smartTextReflow** 
>
> If true, enable automatic adding and deleting of pages in response to text reflow.
<HorizontalLine />
> AddPageOptions **addPages** 
>
> Specifies where to insert new pages in response to overset text.
<HorizontalLine />
> Boolean **limitToMasterTextFrames** 
>
> Restrict the adding of pages during smart text reflow to overridden master text frames.
<HorizontalLine />
> Boolean **preserveFacingPageSpreads** 
>
> Preserve left-hand and right-and pages when facing pages are enabled during smart text reflow.
<HorizontalLine />
> Boolean **deleteEmptyPages** 
>
> Enable auto-deletion of pages containing empty threaded text frames.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextPreference.
<HorizontalLine />
> TextPreference **getElements**()
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


