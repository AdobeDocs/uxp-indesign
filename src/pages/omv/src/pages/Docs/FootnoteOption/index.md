# FootnoteOption
Options for specifying default footnote formatting.

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
> The parent of the FootnoteOption (a Application or Document).
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
> Mixed **footnoteNumberingStyle** 
>
> The footnote numbering style. Can return: FootnoteNumberingStyle enumerator or String.
*** 
> Number **startAt** 
>
> The number at which to start footnote numbering.
*** 
> Mixed **restartNumbering** 
>
> The point at which to restart footnote numbering. Can return: FootnoteRestarting enumerator or String.
*** 
> Mixed **showPrefixSuffix** 
>
> The position of the footnote prefix and/or suffix. Can return: FootnotePrefixSuffix enumerator or String.
*** 
> String **prefix** 
>
> The prefix text of the footnote. (Limit: 0 to 100 characters)
*** 
> String **suffix** 
>
> The suffix text of the footnote. (Limit: 0 to 100 characters)
*** 
> ParagraphStyle **footnoteTextStyle** 
>
> The paragraph style to apply to footnotes. Note: The space before and after the paragraph defined in the paragraph style is ignored for footnotes. To define space above and between footnotes, see spacer and space between.
*** 
> CharacterStyle **footnoteMarkerStyle** 
>
> The character style to apply to footnote reference numbers in the main text.
*** 
> Mixed **markerPositioning** 
>
> The position of footnote reference numbers in the main text. Can return: FootnoteMarkerPositioning enumerator or String.
*** 
> String **separatorText** 
>
> The text to insert between the footnote marker number and the footnote text. (Range: 0 to 100 characters)
*** 
> Measurement Unit (Number or String)=any **spaceBetween** 
>
> The amount of vertical space between footnotes. Note: The space before and space after defined for the paragraph style applied to the footnote is ignored.
*** 
> Measurement Unit (Number or String)=any **spacer** 
>
> The minimum amount of vertical space between the bottom of the text column and the first footnote. Note: The space before amount defined in the paragraph style applied to the footnote is ignored for the first footnote.
*** 
> FootnoteFirstBaseline **footnoteFirstBaselineOffset** 
>
> The distance between the top of the footnote container and the footnote text.
*** 
> Measurement Unit (Number or String)=any **footnoteMinimumFirstBaselineOffset** 
>
> The minimum distance between the baseline of the text and the top of the footnote container.
*** 
> Boolean **eosPlacement** 
>
> If true, footnotes at the end of the story are placed just below the text. If false, footnotes at the end of the story are placed at the bottom of the column.
*** 
> Boolean **noSplitting** 
>
> If true, footnotes cannot split across columns. If false, footnotes flow into succeeding columns when the footnote text causes the footnote area to expand upward to reach the footnote reference number in the main text.
*** 
> Boolean **ruleOn** 
>
> If true, draws a rule between the text and the first footnote in the column.
*** 
> Mixed **ruleType** 
>
> The stroke type of the rule above the first footnote in a column. Note: Valid when rule on is true. Can return: StrokeStyle or String.
*** 
> Measurement Unit (Number or String)=any **ruleLineWeight** 
>
> The stroke weight of the rule above the first footnote in the column. (Range: 0 to 1000) Note: Valid when rule on is true.
*** 
> Mixed **ruleColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the rule above the first footnote in the column. Note: Valid when rule on is true. Can return: Swatch or String.
*** 
> Mixed **ruleGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the rule above the first footnote in the column. Note: Valid when rule type is not solid. Can return: Swatch or String.
*** 
> Number **ruleTint** 
>
> The tint (as a percentage) of the rule above the first footnote in the column. (Range: 0 to 100) Note: Valid when rule on is true.
*** 
> Number **ruleGapTint** 
>
> The tint (as a percentage) of the gap color of the rule above the first footnote in the column. (Range: 0 to 100) Note: Valid when rule type is not solid.
*** 
> Boolean **ruleGapOverprint** 
>
> If true, overprints the gap color of the rule above the first footnote in the column. Note: Valid when rule type is not solid.
*** 
> Boolean **ruleOverprint** 
>
> If true, overprints the rule above the first footnote in the column. Note: Valid when rule on is true.
*** 
> Measurement Unit (Number or String)=any **ruleLeftIndent** 
>
> The amount to left indent the rule above the first footnote in the column. Note: Valid when rule on is true.
*** 
> Measurement Unit (Number or String)=any **ruleWidth** 
>
> The length of the rule above the first footnote in the column. Note: Valid when rule on is true.
*** 
> Measurement Unit (Number or String)=any **ruleOffset** 
>
> The vertical offset of the rule above the first footnote in the column. Note: Valid when rule on is true.
*** 
> Boolean **continuingRuleOn** 
>
> If true, draws a rule above footnote text that continues from a previous column. Note: Valid when no splitting is false or undefined.
*** 
> Mixed **continuingRuleType** 
>
> The stroke type of the rule above continued footnote text. Note: Valid when continuing rule on is true. Can return: StrokeStyle or String.
*** 
> Measurement Unit (Number or String)=any **continuingRuleLineWeight** 
>
> The stroke weight of the rule above continued footnote text. (Range: 0 to 1000) Note: Valid when continuing rule on is true.
*** 
> Mixed **continuingRuleColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the rule above continued footnote text. Note: Valid when continuing rule on is true. Can return: Swatch or String.
*** 
> Mixed **continuingRuleGapColor** 
>
> The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the rule above continued footnote text. Note: Valid when continuing rule type is not solid. Can return: Swatch or String.
*** 
> Number **continuingRuleTint** 
>
> The tint (as a percentage) of the rule above continued footnote text. (Range: 0 to 100) Note: Valid when continuing rule type is not solid.
*** 
> Number **continuingRuleGapTint** 
>
> The tint (as a percentage) of the gap color of the rule above continued footnote text. (Range: 0 to 100) Note: Valid when continuing rule type is not solid.
*** 
> Boolean **continuingRuleOverprint** 
>
> If true, overprints the rule above continued footnote text. Note: Valid when continuing rule on is true.
*** 
> Boolean **continuingRuleGapOverprint** 
>
> If true, overprints the gap color of the rule above continued footnote text. Note: Valid when continuing rule type is not solid.
*** 
> Measurement Unit (Number or String)=any **continuingRuleLeftIndent** 
>
> The amount to left indent the rule above continued footnote text. Note: Valid when continuing rule on is true.
*** 
> Measurement Unit (Number or String)=any **continuingRuleWidth** 
>
> The length of the rule above continued footnote text. Note: Valid when continuing rule on is true.
*** 
> Measurement Unit (Number or String)=any **continuingRuleOffset** 
>
> The vertical offset of the rule above continued footnote text. Note: Valid when continuing rule on is true.
*** 
> Boolean **enableStraddling** 
>
> If true, document will have straddling footnotes. If false, document will not have straddling footnotes.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the FootnoteOption.
*** 
> FootnoteOption **getElements**()
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


