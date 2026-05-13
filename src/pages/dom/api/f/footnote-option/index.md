# FootnoteOption
Options for specifying default footnote formatting.

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
> The parent of the FootnoteOption (a Application or Document).
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
> Mixed **footnoteNumberingStyle** 
>
> The footnote numbering style. Can return: FootnoteNumberingStyle enumerator or String.
<HorizontalLine />
> Number **startAt** 
>
> The number at which to start footnote numbering.
<HorizontalLine />
> Mixed **restartNumbering** 
>
> The point at which to restart footnote numbering. Can return: FootnoteRestarting enumerator or String.
<HorizontalLine />
> Mixed **showPrefixSuffix** 
>
> The position of the footnote prefix and/or suffix. Can return: FootnotePrefixSuffix enumerator or String.
<HorizontalLine />
> String **prefix** 
>
> The prefix text of the footnote. (Limit: 0 to 100 characters)
<HorizontalLine />
> String **suffix** 
>
> The suffix text of the footnote. (Limit: 0 to 100 characters)
<HorizontalLine />
> ParagraphStyle **footnoteTextStyle** 
>
> The paragraph style to apply to footnotes. Note: The space before and after the paragraph defined in the paragraph style is ignored for footnotes. To define space above and between footnotes, see spacer and space between.
<HorizontalLine />
> CharacterStyle **footnoteMarkerStyle** 
>
> The character style to apply to footnote reference numbers in the main text.
<HorizontalLine />
> Mixed **markerPositioning** 
>
> The position of footnote reference numbers in the main text. Can return: FootnoteMarkerPositioning enumerator or String.
<HorizontalLine />
> String **separatorText** 
>
> The text to insert between the footnote marker number and the footnote text. (Range: 0 to 100 characters)
<HorizontalLine />
> Measurement Unit (Number or String)=any **spaceBetween** 
>
> The amount of vertical space between footnotes. Note: The space before and space after defined for the paragraph style applied to the footnote is ignored.
<HorizontalLine />
> Measurement Unit (Number or String)=any **spacer** 
>
> The minimum amount of vertical space between the bottom of the text column and the first footnote. Note: The space before amount defined in the paragraph style applied to the footnote is ignored for the first footnote.
<HorizontalLine />
> FootnoteFirstBaseline **footnoteFirstBaselineOffset** 
>
> The distance between the top of the footnote container and the footnote text.
<HorizontalLine />
> Measurement Unit (Number or String)=any **footnoteMinimumFirstBaselineOffset** 
>
> The minimum distance between the baseline of the text and the top of the footnote container.
<HorizontalLine />
> Boolean **eosPlacement** 
>
> If true, footnotes at the end of the story are placed just below the text. If false, footnotes at the end of the story are placed at the bottom of the column.
<HorizontalLine />
> Boolean **noSplitting** 
>
> If true, footnotes cannot split across columns. If false, footnotes flow into succeeding columns when the footnote text causes the footnote area to expand upward to reach the footnote reference number in the main text.
<HorizontalLine />
> Boolean **ruleOn** 
>
> If true, draws a rule between the text and the first footnote in the column.
<HorizontalLine />
> Mixed **ruleType** 
>
> The stroke type of the rule above the first footnote in a column. Note: Valid when rule on is true. Can return: StrokeStyle or String.
<HorizontalLine />
> Measurement Unit (Number or String)=any **ruleLineWeight** 
>
> The stroke weight of the rule above the first footnote in the column. (Range: 0 to 1000) Note: Valid when rule on is true.
<HorizontalLine />
> Mixed **ruleColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the rule above the first footnote in the column. Note: Valid when rule on is true. Can return: Swatch or String.
<HorizontalLine />
> Mixed **ruleGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the rule above the first footnote in the column. Note: Valid when rule type is not solid. Can return: Swatch or String.
<HorizontalLine />
> Number **ruleTint** 
>
> The tint (as a percentage) of the rule above the first footnote in the column. (Range: 0 to 100) Note: Valid when rule on is true.
<HorizontalLine />
> Number **ruleGapTint** 
>
> The tint (as a percentage) of the gap color of the rule above the first footnote in the column. (Range: 0 to 100) Note: Valid when rule type is not solid.
<HorizontalLine />
> Boolean **ruleGapOverprint** 
>
> If true, overprints the gap color of the rule above the first footnote in the column. Note: Valid when rule type is not solid.
<HorizontalLine />
> Boolean **ruleOverprint** 
>
> If true, overprints the rule above the first footnote in the column. Note: Valid when rule on is true.
<HorizontalLine />
> Measurement Unit (Number or String)=any **ruleLeftIndent** 
>
> The amount to left indent the rule above the first footnote in the column. Note: Valid when rule on is true.
<HorizontalLine />
> Measurement Unit (Number or String)=any **ruleWidth** 
>
> The length of the rule above the first footnote in the column. Note: Valid when rule on is true.
<HorizontalLine />
> Measurement Unit (Number or String)=any **ruleOffset** 
>
> The vertical offset of the rule above the first footnote in the column. Note: Valid when rule on is true.
<HorizontalLine />
> Boolean **continuingRuleOn** 
>
> If true, draws a rule above footnote text that continues from a previous column. Note: Valid when no splitting is false or undefined.
<HorizontalLine />
> Mixed **continuingRuleType** 
>
> The stroke type of the rule above continued footnote text. Note: Valid when continuing rule on is true. Can return: StrokeStyle or String.
<HorizontalLine />
> Measurement Unit (Number or String)=any **continuingRuleLineWeight** 
>
> The stroke weight of the rule above continued footnote text. (Range: 0 to 1000) Note: Valid when continuing rule on is true.
<HorizontalLine />
> Mixed **continuingRuleColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the rule above continued footnote text. Note: Valid when continuing rule on is true. Can return: Swatch or String.
<HorizontalLine />
> Mixed **continuingRuleGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the rule above continued footnote text. Note: Valid when continuing rule type is not solid. Can return: Swatch or String.
<HorizontalLine />
> Number **continuingRuleTint** 
>
> The tint (as a percentage) of the rule above continued footnote text. (Range: 0 to 100) Note: Valid when continuing rule type is not solid.
<HorizontalLine />
> Number **continuingRuleGapTint** 
>
> The tint (as a percentage) of the gap color of the rule above continued footnote text. (Range: 0 to 100) Note: Valid when continuing rule type is not solid.
<HorizontalLine />
> Boolean **continuingRuleOverprint** 
>
> If true, overprints the rule above continued footnote text. Note: Valid when continuing rule on is true.
<HorizontalLine />
> Boolean **continuingRuleGapOverprint** 
>
> If true, overprints the gap color of the rule above continued footnote text. Note: Valid when continuing rule type is not solid.
<HorizontalLine />
> Measurement Unit (Number or String)=any **continuingRuleLeftIndent** 
>
> The amount to left indent the rule above continued footnote text. Note: Valid when continuing rule on is true.
<HorizontalLine />
> Measurement Unit (Number or String)=any **continuingRuleWidth** 
>
> The length of the rule above continued footnote text. Note: Valid when continuing rule on is true.
<HorizontalLine />
> Measurement Unit (Number or String)=any **continuingRuleOffset** 
>
> The vertical offset of the rule above continued footnote text. Note: Valid when continuing rule on is true.
<HorizontalLine />
> Boolean **enableStraddling** 
>
> If true, document will have straddling footnotes. If false, document will not have straddling footnotes.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the FootnoteOption.
<HorizontalLine />
> FootnoteOption **getElements**()
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


