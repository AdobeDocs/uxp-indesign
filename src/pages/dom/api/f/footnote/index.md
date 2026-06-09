# Footnote
A footnote.

## Instance
> *Read Only* 
> 
> InsertionPoint **storyOffset** 
>
> The location of the footnote marker in the parent story.
<HorizontalLine />
> *Read Only* 
> 
> PageItem **allPageItems** 
>
> Lists all page items contained by the Footnote.
<HorizontalLine />
> *Read Only* 
> 
> Graphic **allGraphics** 
>
> Lists all graphics contained by the Footnote.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Footnote.
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
> The parent of the Footnote (a XmlStory, Cell, Story, TextFrame, EndnoteTextFrame or InsertionPoint).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Footnote within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> TextColumns **textColumns** 
>
> A collection of text columns.
<HorizontalLine />
> *Read Only* 
> 
> Texts **texts** 
>
> A collection of text objects.
<HorizontalLine />
> *Read Only* 
> 
> TextStyleRanges **textStyleRanges** 
>
> A collection of text style ranges.
<HorizontalLine />
> *Read Only* 
> 
> Paragraphs **paragraphs** 
>
> A collection of paragraphs.
<HorizontalLine />
> *Read Only* 
> 
> Lines **lines** 
>
> A collection of lines.
<HorizontalLine />
> *Read Only* 
> 
> Words **words** 
>
> A collection of words.
<HorizontalLine />
> *Read Only* 
> 
> Characters **characters** 
>
> A collection of characters.
<HorizontalLine />
> *Read Only* 
> 
> InsertionPoints **insertionPoints** 
>
> A collection of insertion points.
<HorizontalLine />
> *Read Only* 
> 
> TextVariableInstances **textVariableInstances** 
>
> A collection of text variable instances.
<HorizontalLine />
> *Read Only* 
> 
> Ovals **ovals** 
>
> A collection of ellipses.
<HorizontalLine />
> *Read Only* 
> 
> SplineItems **splineItems** 
>
> The spline items collection.
<HorizontalLine />
> *Read Only* 
> 
> PageItems **pageItems** 
>
> The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
<HorizontalLine />
> *Read Only* 
> 
> Rectangles **rectangles** 
>
> A collection of rectangles.
<HorizontalLine />
> *Read Only* 
> 
> GraphicLines **graphicLines** 
>
> A collection of graphic lines.
<HorizontalLine />
> *Read Only* 
> 
> TextFrames **textFrames** 
>
> A collection of text frames.
<HorizontalLine />
> *Read Only* 
> 
> Polygons **polygons** 
>
> A collection of polygons.
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
> *Read Only* 
> 
> Groups **groups** 
>
> A collection of groups.
<HorizontalLine />
> *Read Only* 
> 
> EPSTexts **epstexts** 
>
> EPSTexts
<HorizontalLine />
> *Read Only* 
> 
> HiddenTexts **hiddenTexts** 
>
> A collection of hidden text objects.
<HorizontalLine />
> Mixed **contents** 
>
> The text contents of the footnote. Can return: String, SpecialCharacters enumerator or Array of Strings or SpecialCharacters enumerators. Can also accept: NothingEnum enumerator or Array of Strings, SpecialCharacters enumerators or NothingEnum enumerators.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> String **name** 
>
> The name of the Footnote; this is an alias to the Footnote's label property.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the Footnote.
<HorizontalLine />
> Text **convertToText**()
> 
> Converts the footnote to part of the story text and places the converted text at the former location of the footnote marker in the text.
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
> Generates a string which, if executed, will return the Footnote.
<HorizontalLine />
> Footnote **getElements**()
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


