# EndnoteOption
Options for specifying default endnote formatting.

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
> The parent of the EndnoteOption (a Application or Document).
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
> String **endnoteTitle** 
>
> Title of the endnotes. (Limit: 0 to 100 characters)
*** 
> ParagraphStyle **endnoteTitleStyle** 
>
> The paragraph style to apply to endnote title.
*** 
> Mixed **endnoteNumberingStyle** 
>
> The endnote numbering style. Can return: FootnoteNumberingStyle enumerator or String.
*** 
> Number **startEndnoteNumberAt** 
>
> The number at which to start endnote numbering.
*** 
> Mixed **restartEndnoteNumbering** 
>
> The point at which to restart endnote numbering. Can return: EndnoteRestarting enumerator or String.
*** 
> Mixed **endnoteMarkerPositioning** 
>
> The position of endnote reference numbers in the main text. Can return: FootnoteMarkerPositioning enumerator or String.
*** 
> CharacterStyle **endnoteMarkerStyle** 
>
> The character style to apply to endnote reference numbers in the main text.
*** 
> ParagraphStyle **endnoteTextStyle** 
>
> The paragraph style to apply to endnote text.
*** 
> String **endnoteSeparatorText** 
>
> The text to insert between the endnote marker number and the endnote text. (Range: 0 to 100 characters)
*** 
> Mixed **scopeValue** 
>
> Scope value of the endnotes. Can return: EndnoteScope enumerator or String.
*** 
> Mixed **frameCreateOption** 
>
> Frame creation of the endnotes. Can return: EndnoteFrameCreate enumerator or String.
*** 
> Mixed **showEndnotePrefixSuffix** 
>
> The position of the endnote prefix and/or suffix. Can return: FootnotePrefixSuffix enumerator or String.
*** 
> String **endnotePrefix** 
>
> The prefix text of the endnote. (Limit: 0 to 100 characters)
*** 
> String **endnoteSuffix** 
>
> The suffix text of the endnote. (Limit: 0 to 100 characters)
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the EndnoteOption.
*** 
> EndnoteOption **getElements**()
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


