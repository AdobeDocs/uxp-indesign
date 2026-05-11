# TextPreference
Text preferences.

## Instance
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
> The parent of the TextPreference (a Application or Document).
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
> Boolean **typographersQuotes** 
>
> If true, converts straight quotes to typographic quotes.
*** 
> Boolean **highlightHjViolations** 
>
> If true, highlights hyphenation and justification rule violations in the text.
*** 
> Boolean **highlightKeeps** 
>
> If true, highlights paragraphs that violate keep options.
*** 
> Boolean **highlightSubstitutedGlyphs** 
>
> If true, highlights substituted glyphs.
*** 
> Boolean **highlightCustomSpacing** 
>
> If true, highlights custom kerned or tracked characters.
*** 
> Boolean **highlightSubstitutedFonts** 
>
> If true, highlights missing fonts.
*** 
> Boolean **useOpticalSize** 
>
> If true, automatically selects the correct optical size.
*** 
> Boolean **useParagraphLeading** 
>
> If true, applies the leading changes made to a text range to the entire paragraph. If false, applies leading changes only to the text range.
*** 
> Number **superscriptSize** 
>
> The size of superscript characters, specified as a percentage of the font size. (Range: 0 to 200)
*** 
> Number **superscriptPosition** 
>
> The position of superscript characters, specified as a percentage of the regular leading. (Range: -500 to 500)
*** 
> Number **subscriptSize** 
>
> The size of subscript characters, specified as a percentage of the font size. (Range: 0 to 200)
*** 
> Number **subscriptPosition** 
>
> The position of subscript characters, specified as a percentage of the regular leading. (Range: -500 to 500)
*** 
> Number **smallCap** 
>
> The size of text formatted as small caps, specified as a percentage of the font size. (Range: 1 to 200)
*** 
> Measurement Unit (Number or String)=any **leadingKeyIncrement** 
>
> The amount that leading increases each time the user presses the option/alt-up arrow keys or decreases each time the user presses the option/alt-down arrow keys. (Range: .001 to 100)
*** 
> Measurement Unit (Number or String)=any **baselineShiftKeyIncrement** 
>
> The amount that the baseline shift increases each time the user presses the option/alt-shift-up arrow keys or decreases each time the user presses the option/alt-shift-down arrow keys. (Range: .001 to 100)
*** 
> Number **kerningKeyIncrement** 
>
> The amount the kerning value per 1000 ems increases each time the user presses of the option/alt-right arrow keys or decreases each time the user presses the option/alt-left arrow keys. (Range: 1 to 100)
*** 
> Boolean **showInvisibles** 
>
> If true, shows hidden characters.
*** 
> Boolean **justifyTextWraps** 
>
> If true, justifies text around text wrap objects.
*** 
> Boolean **abutTextToTextWrap** 
>
> If true, moves wrapped text to the next available leading increment below the text wrap objects (skip by leading).
*** 
> Boolean **zOrderTextWrap** 
>
> If true, text wrap does not affect text on layers above the layer that contains the text wrap object. If false, text wrap affects text on all visible layers.
*** 
> Boolean **linkTextFilesWhenImporting** 
>
> If true, links placed text files and spreadsheet files. If false, embeds the files.
*** 
> Boolean **highlightKinsoku** 
>
> If true, uses on-screen highlighting to identify kinsoku.
*** 
> Boolean **quoteCharactersRotatedInVertical** 
>
> If true, Japanese composer treats quotes as half width and rotates them in vertical.
*** 
> Boolean **smartTextReflowSync** 
>
> If this is True, and if Smart text reflow is also enabled, then this will synchronously add/delete pages after text reflowing
*** 
> Boolean **shapeIndicAndLatinWithHarbuzz** 
>
> If this bool is set to true, shaping of Indic & Latin characters will be done through Harfbuzz Shaping engine, instead of Lipika.
*** 
> Boolean **useNewVerticalScaling** 
>
> If true, reverses X and Y scaling on Roman characters in vertical text.
*** 
> Boolean **useCidMojikumi** 
>
> If true, uses the glyph CID to get the mojikumi class of the character.
*** 
> Boolean **honourTextIndentsWithTextWrap** 
>
> If true, modifies indentation for Bulleted Paragraph and Bullets around a Text Wrap object.
*** 
> Boolean **enableStylePreviewMode** 
>
> If true, highlights character and paragraph styles with colored backgrounds.
*** 
> Boolean **smartTextReflow** 
>
> If true, enable automatic adding and deleting of pages in response to text reflow.
*** 
> AddPageOptions **addPages** 
>
> Specifies where to insert new pages in response to overset text.
*** 
> Boolean **limitToMasterTextFrames** 
>
> Restrict the adding of pages during smart text reflow to overridden master text frames.
*** 
> Boolean **preserveFacingPageSpreads** 
>
> Preserve left-hand and right-and pages when facing pages are enabled during smart text reflow.
*** 
> Boolean **deleteEmptyPages** 
>
> Enable auto-deletion of pages containing empty threaded text frames.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextPreference.
*** 
> TextPreference **getElements**()
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


