# XMLElement
An XML element.

## Instance
> *Read Only* 
> 
> InsertionPoint **storyOffset** 
>
> The insertion point before the table in the story containing the table.
<HorizontalLine />
> *Read Only* 
> 
> Story **parentStory** 
>
> The story that contains the text.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **xmlContent** 
>
> The text content or page item referred to by the element. Can return: Text, Story, PageItem, Movie, Sound, Graphic, Table or Cell.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the XMLElement.
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
> The parent of the XMLElement (a Document or XMLElement).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the XMLElement within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> XMLAttributes **xmlAttributes** 
>
> A collection of XML attributes.
<HorizontalLine />
> *Read Only* 
> 
> XMLElements **xmlElements** 
>
> A collection of XML elements.
<HorizontalLine />
> *Read Only* 
> 
> XMLItems **xmlItems** 
>
> A collection of XML items.
<HorizontalLine />
> *Read Only* 
> 
> XMLComments **xmlComments** 
>
> A collection of XML comments.
<HorizontalLine />
> *Read Only* 
> 
> XMLInstructions **xmlInstructions** 
>
> A collection of XML instructions.
<HorizontalLine />
> *Read Only* 
> 
> PageItems **pageItems** 
>
> The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
<HorizontalLine />
> *Read Only* 
> 
> Images **images** 
>
> A collection of bitmap images in any bitmap file format (including TIFF, JPEG, or GIF).
<HorizontalLine />
> *Read Only* 
> 
> Graphics **graphics** 
>
> A collection of imported graphics in any graphic file format (vector, metafile, or bitmap).
<HorizontalLine />
> *Read Only* 
> 
> EPSs **epss** 
>
> A collection of EPS files.
<HorizontalLine />
> *Read Only* 
> 
> WMFs **wmfs** 
>
> A collection of WMF graphics.
<HorizontalLine />
> *Read Only* 
> 
> PICTs **picts** 
>
> A collection of PICT graphics.
<HorizontalLine />
> *Read Only* 
> 
> PDFs **pdfs** 
>
> A collection of PDF files.
<HorizontalLine />
> *Read Only* 
> 
> Stories **stories** 
>
> A collection of stories.
<HorizontalLine />
> *Read Only* 
> 
> Tables **tables** 
>
> A collection of tables.
<HorizontalLine />
> *Read Only* 
> 
> Cells **cells** 
>
> A collection of table cells.
<HorizontalLine />
> *Read Only* 
> 
> Texts **texts** 
>
> A collection of text objects.
<HorizontalLine />
> *Read Only* 
> 
> Characters **characters** 
>
> A collection of characters.
<HorizontalLine />
> *Read Only* 
> 
> Words **words** 
>
> A collection of words.
<HorizontalLine />
> *Read Only* 
> 
> Lines **lines** 
>
> A collection of lines.
<HorizontalLine />
> *Read Only* 
> 
> TextColumns **textColumns** 
>
> A collection of text columns.
<HorizontalLine />
> *Read Only* 
> 
> Paragraphs **paragraphs** 
>
> A collection of paragraphs.
<HorizontalLine />
> *Read Only* 
> 
> InsertionPoints **insertionPoints** 
>
> A collection of insertion points.
<HorizontalLine />
> *Read Only* 
> 
> TextStyleRanges **textStyleRanges** 
>
> A collection of text style ranges.
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
> SVGs **svgs** 
>
> A collection of SVG files.
<HorizontalLine />
> XMLTag **markupTag** 
>
> The XML tag applied to the element. Can also accept: String.
<HorizontalLine />
> Mixed **contents** 
>
> The contents of the text. Can return: String or SpecialCharacters enumerator.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> Asset **store**( Library **using**, Object **withProperties** )
> 
> Stores the object in the specified library.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Library | using | The library in which to store the object. |
| Object | withProperties | Initial values for properties of the new XMLElement (Optional) |

<HorizontalLine />
> XMLElement **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the element to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location in relation to the reference object or within the containing object. |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. . Can accept: XMLItem or Text. (Optional) |

<HorizontalLine />
> XMLElement **duplicate**()
> 
> Duplicates the XMLElement.
<HorizontalLine />
> **markup**( Mixed **using** )
> 
> Associates the object with the specified XML element while preserving existing content.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | using | The object to mark up. Can accept: PageItem, Movie, Sound, Graphic, Story, Text or Table. |

<HorizontalLine />
> **placeXML**( Mixed **using** )
> 
> Places XML content into the story, replacing the existing content.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | using | The object to place into. Can accept: Story, PageItem, Graphic, Movie or Sound. |

<HorizontalLine />
> **untag**()
> 
> Untags an element.
<HorizontalLine />
> ValidationError **validate**( Number **maximumErrors** )
> 
> Validates the element against a DTD.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | maximumErrors | The maximum number of validation errors to generate. (Optional) |

<HorizontalLine />
> **applyParagraphStyle**( Mixed **using**, Boolean **clearingOverrides** )
> 
> Applies the specified paragraph style to the text content of the XMLElement.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | using | The paragraph style to apply. Can accept: String or ParagraphStyle. |
| Boolean | clearingOverrides | If true, clears any attributes before applying the style. (Optional) |

<HorizontalLine />
> **applyCharacterStyle**( Mixed **using** )
> 
> Applies the specified character style to the text content of the XMLElement.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | using | The character style to apply. Can accept: String or CharacterStyle. |

<HorizontalLine />
> XMLAttribute **convertToAttribute**( String **using** )
> 
> Converts the XMLElement to an attribute of its parent element.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | using | The name to give to the new attribute. (Optional) |

<HorizontalLine />
> Table **convertElementToTable**( XMLTag **rowTag**, XMLTag **cellTag** )
> 
> Converts the content of the XML element to a table.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLTag | rowTag | The XML tag that indicates a table row. |
| XMLTag | cellTag | The XML tag that indicates a table cell. |

<HorizontalLine />
> PageItem **placeIntoInlineFrame**( Measurement Unit (Number or String)=any **dimensions** )
> 
> Places an XML element into an inline frame.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Measurement Unit (Number or String)=any | dimensions | The dimensions of the inline frame in the format [width, height]. |

<HorizontalLine />
> PageItem **placeIntoInlineCopy**( PageItem **copyItem**, Boolean **retainExistingFrame** )
> 
> Associates an existing page item with the XML element and places it into an inline frame.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | copyItem | The page item to copy. |
| Boolean | retainExistingFrame | If true, moves the existing page item. If false, moves a copy of the page item. (Optional) |

<HorizontalLine />
> PageItem **setContent**( String **using**, String **relativeBasePath** )
> 
> Replaces the content of XML element with content imported from a file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | using | The file path to the import file. |
| String | relativeBasePath | Base path used to resolve relative paths. (Optional) |

<HorizontalLine />
> Text **insertTextAsContent**( Mixed **using**, XMLElementPosition **position** )
> 
> Inserts the specified text as content before, in, or after the XML element.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | using | The text to be inserted. Can accept: String or SpecialCharacters enumerator. |
| XMLElementPosition | position | The position at which to insert the text. Note that text inserted before or after the element does not become part of the content of the element. Instead, it becomes content of the parent of the element. |

<HorizontalLine />
> **applyTableStyle**( Mixed **using**, Boolean **clearingOverrides** )
> 
> Applies a table style to the table associated with the XMLElement.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | using | The table style to apply. Can accept: String or TableStyle. |
| Boolean | clearingOverrides | If true, removes local formatting before applying the table style. (Optional) |

<HorizontalLine />
> **applyCellStyle**( Mixed **using**, Boolean **clearingOverrides** )
> 
> Applies a cell style to the table cells associated with the XMLElement.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | using | The cell style to apply. Can accept: String or CellStyle. |
| Boolean | clearingOverrides | If true, removes local formatting before applying the cell style. (Optional) |

<HorizontalLine />
> **applyObjectStyle**( Mixed **using**, Boolean **clearingOverrides**, Boolean **clearingOverridesThroughRootObjectStyle** )
> 
> Applies an object style to the frame associated with the XMLElement.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | using | The object style to apply. Can accept: String or ObjectStyle. |
| Boolean | clearingOverrides | If true, removes local formatting before applying the object style. (Optional) |
| Boolean | clearingOverridesThroughRootObjectStyle | If true, clears unchecked category attributes through the root style. (Optional) |

<HorizontalLine />
> PageItem **placeIntoFrame**( Mixed **on**, Measurement Unit (Number or String)=any **geometricBounds** )
> 
> Places the XML element into a new rectangular page item. If the XML element was already associated with a page item, that page item is deleted.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | on | The page or spread on which to create the new page item. Can accept: Spread, Page or MasterSpread. |
| Measurement Unit (Number or String)=any | geometricBounds | The bounds of the page item excluding the stroke width, in the format [y1, x1, y2, x2]. |

<HorizontalLine />
> PageItem **placeIntoCopy**( Mixed **on**, Measurement Unit (Number or String)=any **placePoint**, PageItem **copyItem**, Boolean **retainExistingFrame** )
> 
> Associates the XML element with a copy of a page item.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | on | The page or spread on which to create the new page item. Can accept: Spread, Page or MasterSpread. |
| Measurement Unit (Number or String)=any | placePoint | The page coordinates of the top left corner of the page item, in the format [y1, x1] |
| PageItem | copyItem | The page item to copy. |
| Boolean | retainExistingFrame | If true, associates the XML element with the existing page item and moves the page item (rather than a copy of the page item). (Optional) |

<HorizontalLine />
> **importXML**( File **from** )
> 
> Imports the specified XML file into an InDesign document.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | from | The XML file. |

<HorizontalLine />
> XMLItem **evaluateXPathExpression**( String **using**, Mixed **prefixMappingTable** )
> 
> Evaluates an XPath expression starting at this XML element in the structure.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | using | The XPath expression. |
| Mixed | prefixMappingTable | The namespace mapping table. Can accept: Array of Arrays of 2 Strings. (Optional) |

<HorizontalLine />
> Text **findText**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

<HorizontalLine />
> Text **changeText**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value and replaces the text with the change to value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

<HorizontalLine />
> Text **findGrep**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

<HorizontalLine />
> Text **changeGrep**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value and replaces the text with the change to value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

<HorizontalLine />
> Text **findTransliterate**( Boolean **reverseOrder** )
> 
> Finds text that matches the find character type value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

<HorizontalLine />
> Text **changeTransliterate**( Boolean **reverseOrder** )
> 
> Finds text that matches the find character type value and replaces the text with the change character type value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

<HorizontalLine />
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

<HorizontalLine />
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

<HorizontalLine />
> **remove**()
> 
> Deletes the XMLElement.
<HorizontalLine />
> **select**( SelectionOptions **existingSelection** )
> 
> Selects the object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SelectionOptions | existingSelection | The selection status of the XMLElement in relation to previously selected objects. (Optional) |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLElement.
<HorizontalLine />
> XMLElement **getElements**()
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


