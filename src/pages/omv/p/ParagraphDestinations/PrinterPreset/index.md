# PrinterPreset
A preset that contains all of the print settings.

## Instance
> *Read Only* 
> 
> String **printerList** 
>
> Available printers.
*** 
> *Read Only* 
> 
> String **ppdList** 
>
> Available PPDs.
*** 
> *Read Only* 
> 
> String **paperSizeList** 
>
> A list of the available paper sizes.
*** 
> *Read Only* 
> 
> String **screeningList** 
>
> Lists the ink screenings available in the PPD. Note: Valid only when color output is separations or in rip separations.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the PrinterPreset (a Application).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the PrinterPreset within its containing object.
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
> String **name** 
>
> The name of the PrinterPreset.
*** 
> Mixed **printer** 
>
> The current printer. Can return: Printer enumerator or String.
*** 
> Mixed **ppd** 
>
> The PPD, specified as a PPD name or an enumeration. Can return: PPDValues enumerator or String.
*** 
> File **printFile** 
>
> The PostScript file to print to. Note: Valid only when the current printer is defined as postscript file.
*** 
> Number **copies** 
>
> The number of copies to print. Note: Not valid when printer is PostScript File.
*** 
> Boolean **collating** 
>
> If true, collate printed copies.
*** 
> Boolean **reverseOrder** 
>
> If true, prints pages in reverse order.
*** 
> Sequences **sequence** 
>
> The sequence of pages to print.
*** 
> Boolean **printSpreads** 
>
> If true, prints each spread with all spread pages on a single sheet. If false, prints spread pages as separate pages.
*** 
> Boolean **printMasterPages** 
>
> If true, prints master pages.
*** 
> Boolean **printNonprinting** 
>
> If true, prints non-printing objects. Note: Valid only when trapping is off.
*** 
> Boolean **printBlankPages** 
>
> If true, prints blank pages. Note: Valid only when trapping is off.
*** 
> Boolean **printGuidesGrids** 
>
> If true, prints visible guides and baseline grids. Note: Valid only when trapping is off.
*** 
> Mixed **paperSize** 
>
> The paper size, specified as either a string or an enumeration. For information on paper size names, see paper size list. Can return: PaperSizes enumerator or String.
*** 
> Mixed **paperHeight** 
>
> The paper height. Note: Valid only when paper size is custom or scale mode is scale width height. Can return: PaperSize enumerator or Unit.
*** 
> Mixed **paperWidth** 
>
> The paper width. Note: Valid only when paper size is custom or scale mode is scale width height. Can return: PaperSize enumerator or Unit.
*** 
> Measurement Unit (Number or String)=any **paperOffset** 
>
> The amount of space to offset the page from the left edge of the imageable area.
*** 
> Measurement Unit (Number or String)=any **paperGap** 
>
> The space between document pages on the printing medium.
*** 
> Boolean **paperTransverse** 
>
> If true, uses transverse orientation.
*** 
> PrintPageOrientation **printPageOrientation** 
>
> The orientation of the printed page.
*** 
> PagePositions **pagePosition** 
>
> The position of the page on the printing medium. Note: Valid only when tile is false.
*** 
> ScaleModes **scaleMode** 
>
> The policy for scaling the page. Note: Valid only when printing from Layout view.
*** 
> Number **scaleWidth** 
>
> The amount (as a percentage)  that the page width is scaled during printing. (Range: 0 to 1000) Note: Valid only when scale mode is scale width height.
*** 
> Number **scaleHeight** 
>
> The amount (as a percentage) that the page height is scaled during printing. (Range: 0 to 1000) Note: Valid only when scale mode is scale width height.
*** 
> Boolean **scaleProportional** 
>
> If true, constrains the proportions of the scaling; uses the most recent value for either scale width or scale height to define both values. Note: Valid only when scale mode is scale width height.
*** 
> Boolean **thumbnails** 
>
> If true, prints thumbnails. Note: Valid only when trapping is off and tile is false.
*** 
> ThumbsPerPage **thumbnailsPerPage** 
>
> The number of thumbnails per page.
*** 
> Boolean **tile** 
>
> If true, tiles pages.
*** 
> TilingTypes **tilingType** 
>
> The tiling type. Note: Valid only when tiling is true.
*** 
> Number **tilingOverlap** 
>
> The amount of tiling overlap. Note: Valid only when tiling is true and tiling type is not manual.
*** 
> Boolean **allPrinterMarks** 
>
> If true, prints all printer marks. If false, prints specified printer marks.
*** 
> Boolean **cropMarks** 
>
> Prints crop marks that define where the page should be trimmed.
*** 
> Boolean **bleedMarks** 
>
> If true, print bleed marks.
*** 
> Boolean **registrationMarks** 
>
> If true, prints small targets outside the page area for aligning color separations.
*** 
> Boolean **colorBars** 
>
> If true, add small squares of color representing the CMYK inks and tints of gray in 10% increments.
*** 
> Boolean **pageInformationMarks** 
>
> If true, prints the filename, page number, current date and time, and color separation name.
*** 
> Mixed **markType** 
>
> The type of printer marks, either an enum value or the name of a custom marks file. Can return: MarkTypes enumerator or String.
*** 
> MarkLineWeight **markLineWeight** 
>
> The stroke weight (in points) for printer marks.
*** 
> Measurement Unit (Number or String)=any **markOffset** 
>
> The distance to offset the page marks from the edge of the page.
*** 
> Boolean **useDocumentBleedToPrint** 
>
> If true, uses the bleed area set for the document.
*** 
> Measurement Unit (Number or String)=any **bleedTop** 
>
> The height of the bleed area at the top of the page. Note: Valid only when use document bleed to print is true.
*** 
> Measurement Unit (Number or String)=any **bleedBottom** 
>
> The height of the bleed area at the bottom of the page. Note: Valid only when use document bleed to print is true.
*** 
> Measurement Unit (Number or String)=any **bleedInside** 
>
> The width of the bleed area at the inside of the page. Note: Valid only when use document bleed to print is true.
*** 
> Measurement Unit (Number or String)=any **bleedOutside** 
>
> The width of the bleed area at the outside of the page. Note: Valid only when use document bleed to print is true.
*** 
> Boolean **includeSlugToPrint** 
>
> If true, includes the slug area in the printed document.
*** 
> ColorOutputModes **colorOutput** 
>
> The color output mode for composites. Note: Not valid when a device-independent PPD is specified.
*** 
> Boolean **textAsBlack** 
>
> If true, prints all text as black unless text has the color None or Paper or a color value that equals white. If false, prints colored text, such as blue hyperlinks, in halftone patterns. Note: Valid only when trapping is off.
*** 
> Trapping **trapping** 
>
> The type of trapping.
*** 
> Flip **flip** 
>
> The direction in which to flip the printed image.
*** 
> Boolean **negative** 
>
> If true, prints the document as a negative.
*** 
> Mixed **screening** 
>
> The ink screening settings for composite gray output in PostScript or PDF format. . Can return: Screeening enumerator or String.
*** 
> Number **compositeAngle** 
>
> The screen angle to use when printing composites. (Range: 0 to 360) Note: Valid only for PostScript or PDF files that use custom screening.
*** 
> Number **compositeFrequency** 
>
> The screen frequency to use when printing composites. (Range: 1 to 500) Note: Valid only for PostScript or PDF files that use custom screening.
*** 
> Boolean **simulateOverprint** 
>
> If true, simulates the effects of overprinting spot inks with different neutral density values by converting spot colors to process colors for printing. Note: Not valid when the color output mode is defined to leave color profiles unchanged.
*** 
> Boolean **printCyan** 
>
> If true, prints the cyan ink. Note: Valid only when trapping is off.
*** 
> Number **cyanAngle** 
>
> The angle override for cyan ink. (Range: 0 to 360)
*** 
> Number **cyanFrequency** 
>
> The frequency override for cyan ink. (Range: 1 to 500)
*** 
> Boolean **printMagenta** 
>
> If true, prints the magenta ink. Note: Valid only when trapping is off.
*** 
> Number **magentaAngle** 
>
> The angle override for magenta ink. (Range: 0 to 360)
*** 
> Number **magentaFrequency** 
>
> The frequency override for magenta ink. (Range: 1 to 500)
*** 
> Boolean **printYellow** 
>
> If true, prints the yellow ink. Note: Valid only when trapping is off.
*** 
> Number **yellowAngle** 
>
> The angle override for yellow ink. (Range: 0 to 360)
*** 
> Number **yellowFrequency** 
>
> The frequency override for yellow ink. (Range: 1 to 500)
*** 
> Boolean **printBlack** 
>
> If true, prints the black ink. Note: Valid only when trapping is off.
*** 
> Number **blackAngle** 
>
> The angle override for black ink. (Range: 0 to 360)
*** 
> Number **blackFrequency** 
>
> The frequency override for black ink. (Range: 1 to 500)
*** 
> ImageDataTypes **sendImageData** 
>
> The image data sent to the printer or file.
*** 
> FontDownloading **fontDownloading** 
>
> Controls how fonts are downloaded to the printer.
*** 
> Boolean **downloadPPDFonts** 
>
> If true, downloads all fonts listed in the selected PPD. Valid only when font downloading is complete or subset.
*** 
> PostScriptLevels **postscriptLevel** 
>
> The PostScript level of the printer.
*** 
> DataFormat **dataFormat** 
>
> The format in which to send image data to the printer.
*** 
> SourceSpaces **sourceSpace** 
>
> The source of the color management system. Note: Valid only when use color management is true.
*** 
> Mixed **profile** 
>
> The color profile. Can return: Profile enumerator or String.
*** 
> Mixed **crd** 
>
> The color-rendering dictionary (CRD), specified as a CRD name or an enumeration value. Note: Valid only when use color management is true. Can return: ColorRenderingDictionary enumerator or String.
*** 
> RenderingIntent **intent** 
>
> The rendering intent. Note: Valid only when use color management is true.
*** 
> Boolean **opiImageReplacement** 
>
> If true, prints graphics that are either OPI comments stored in imported EPS files or linked using OPI comments. For information on linking files using OPI comments, see omit EPS, omit PDF, or omit bitmaps.
*** 
> Boolean **omitEPS** 
>
> If true, replaces EPS images with OPI links.
*** 
> Boolean **omitPDF** 
>
> If true, replaces PDF images with OPI links.
*** 
> Boolean **omitBitmaps** 
>
> If true, replaces bitmap images with OPI links.
*** 
> String **flattenerPresetName** 
>
> The name of the transparency flattener preset.
*** 
> Boolean **ignoreSpreadOverrides** 
>
> If true, ignores flattener spread overrides.
*** 
> Boolean **bleedChain** 
>
> If true, forces all bleed area settings to be the same, using the most recent bleed measurement setting. If false, allows bleed top, bleed bottom, bleed inside, and bleed outside to have different measurements.
*** 
> Boolean **bitmapPrinting** 
>
> If true, uses bitmap printing.
*** 
> Number **bitmapResolution** 
>
> The resolution for bitmap printing. (Range: 72 to 1200) Note: Valid when bitmap printing is true.
*** 
> PrintLayerOptions **printLayers** 
>
> The layers to print.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the PrinterPreset.
*** 
> PrinterPreset **duplicate**()
> 
> Duplicates the PrinterPreset.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PrinterPreset.
*** 
> PrinterPreset **getElements**()
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


