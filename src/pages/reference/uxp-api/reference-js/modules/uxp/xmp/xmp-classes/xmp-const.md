
<a name="xmpconst" id="xmpconst"></a>

# require('uxp').xmp.XMPConst
This object contains the read-only constant definitions for use with the JavaScript XMP API. Some of these are listed in the context in which they are used. Longer lists are provided here.

<br></br>
# Schema namespace string constants
Constant values for the namespace URI strings used in all get and set property operations. See XMPMeta object.

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Access</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>NS_DC</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the Dublin Core schema, http://purl.org/dc/elements/1.1</td>
    </tr>
    <tr>
        <td>NS_IPTC_CORE</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the IPTC Core schema.</td>
    </tr>
    <tr>
        <td>NS_RDF</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for RDF.</td>
    </tr>
    <tr>
        <td>NS_XML</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for XML.</td>
   </tr>
    <tr>
        <td>NS_XMP</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the XMP basic schema.</td>
    </tr>
    <tr>
        <td>NS_XMP_RIGHTS</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the XMP copyright schema.</td>
    </tr>
    <tr>
        <td>NS_XMP_MM</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the XMP digital asset management schema.</td>
    </tr>
    <tr>
        <td>NS_XMP_BJ</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the job management schema.</td>
    </tr>
    <tr>
        <td>NS_XMP_NOTE</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the XMP note schema. An Adobe private namespace; do not create new properties.</td>
    </tr>
    <tr>
        <td>NS_PDF</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the PDF schema.</td>
    </tr>
    <tr>
        <td>NS_PDFX</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the PDFX schema. An Adobe private namespace; do not create new properties.</td>
    </tr>
    <tr>
        <td>NS_PHOTOSHOP</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the Adobe Photoshop custom schema.</td>
    </tr>
    <tr>
        <td>NS_PS_ALBUM</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the Adobe Photoshop Album custom schema.</td>
    </tr>
    <tr>
        <td>NS_EXIF</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for Adobe’s EXIF schema.</td>
    </tr>
    <tr>
        <td>NS_EXIF_AUX</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for Adobe’s EXIF auxiliary schema.</td>
    </tr>
    <tr>
        <td>NS_TIFF</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for Adobe’s TIFF schema.</td>
    </tr>
    <tr>
        <td>NS_PNG</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the PNG schema.</td>
    </tr>
    <tr>
        <td>NS_JPEG</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the JPEG schema.</td>
    </tr>
    <tr>
        <td>NS_SWF</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the Flash small web format schema.</td>
    </tr>
    <tr>
        <td>NS_JPK</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the JPK schema.</td>
    </tr>
    <tr>
        <td>NS_CAMERA_RAW</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the Camera Raw schema.</td>
    </tr>
    <tr>
        <td>NS_DM</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the DM schema.</td>
    </tr>
    <tr>
        <td>NS_ADOBE_STOCK_PHOTO</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the Adobe Stock Photo schema.</td>
    </tr>
    <tr>
        <td>NS_ASF</td>
        <td>string</td>
        <td>Read-only</td>
        <td>The XML namespace for the Microsoft advanced streaming format schema.</td>
    </tr>
</table>

<br></br>
# Type namespace string constants
Constant values for the field-type namespace URI strings used in all structured property operations. See XMPMeta object.

<table>
   <tr>
       <th>Name</th>
       <th>Type</th>
       <th>Access</th>
       <th>Description</th>
   </tr>
   <tr>
       <td>TYPE_IDENTIFIER_QUAL</td>
       <td>string</td>
       <td>Read-only</td>
       <td>The XML namespace for qualifiers of the xmp:Identifier property.</td>
   </tr>
   <tr>
       <td>TYPE_DIMENSIONS</td>
       <td>string</td>
       <td>Read-only</td>
       <td>The XML namespace for fields of the Dimensions type.</td>
   </tr>
   <tr>
       <td>TYPE_TEXT</td>
       <td>string</td>
       <td>Read-only</td>
       <td>The XML namespace for the XMP text document schema.</td>
   </tr>
   <tr>
      <td>TYPE_PAGEDFILE</td>
      <td>string</td>
      <td>Read-only</td>
      <td>The XML namespace for the XMP paged document schema.</td>
   </tr>
  <tr>
     <td>TYPE_GRAPHICS</td>
     <td>string</td>
     <td>Read-only</td>
     <td>The XML namespace for a structure containing the characteristics of a colorant (swatch) used in a document.</td>
  </tr>
  <tr>
     <td>TYPE_IMAGE</td>
     <td>string</td>
     <td>Read-only</td>
     <td>The XML namespace for fields of a graphical image. Used for the Thumbnail type.</td>
  </tr>
  <tr>
     <td>TYPE_FONT</td>
     <td>string</td>
     <td>Read-only</td>
     <td>The XML namespace for a structure containing the characteristics of a font used in a document.</td>
  </tr>
  <tr>
     <td>TYPE_RESOURCE_EVENT</td>
     <td>string</td>
     <td>Read-only</td>
     <td>The XML namespace for fields of the ResourceEvent type.</td>
  </tr>
  <tr>
     <td>TYPE_RESOURCE_REF</td>
     <td>string</td>
     <td>Read-only</td>
     <td>The XML namespace for fields of the ResourceRef type.</td>
  </tr>
  <tr>
     <td>TYPE_ST_VERSION</td>
     <td>string</td>
     <td>Read-only</td>
     <td>The XML namespace for fields of the Version type.</td>
  </tr>
  <tr>
     <td>TYPE_ST_JOB</td>
     <td>string</td>
     <td>Read-only</td>
     <td>The XML namespace for fields of the JobRef type.</td>
  </tr>
  <tr>
     <td>TYPE_MANIFEST_ITEM</td>
     <td>string</td>
     <td>Read-only</td>
     <td>The XML namespace for fields of the ManifestItem type.</td>
  </tr>
  <tr>
     <td>TYPE_PDFA_SCHEMA</td>
     <td>string</td>
     <td>Read-only</td>
     <td>The XML namespace for fields of the PDFA schema.</td>
  </tr>
  <tr>
     <td>TYPE_PDFA_PROPERTY</td>
     <td>string</td>
     <td>Read-only</td>
     <td>The XML namespace for fields of the PDFA property.</td>
  </tr>
  <tr>
     <td>TYPE_PDFA_TYPE</td>
     <td>string</td>
     <td>Read-only</td>
     <td>The XML namespace for fields of the PDFA type.</td>
  </tr>
  <tr>
     <td>TYPE_PDFA_FIELD</td>
     <td>string</td>
     <td>Read-only</td>
     <td>The XML namespace for fields of the PDFA field.</td>
  </tr>
  <tr>
     <td>TYPE_PDFA_ID</td>
     <td>string</td>
     <td>Read-only</td>
     <td>The XML namespace for fields of the PDFA ID.</td>
  </tr>
  <tr>
     <td>TYPE_PDFA_EXTENSION</td>
     <td>string</td>
     <td>Read-only</td>
     <td>The XML namespace for PDF subtypes.</td>
   </tr>
 </table>

<br></br>
# File format numeric constants<br></br>
Constant values for supported file types, used in I/O operations. See XMPFile object.

<table>
     <tr>
         <th>Name</th>
         <th>Type</th>
         <th>Access</th>
         <th>Description</th>
     </tr>
     <tr>
         <td>FILE_UNKNOWN</td>
         <td>number</td>
         <td>Read-only</td>
         <td>Unknown file-format.</td>
     </tr>
     <tr>
         <td>FILE_PDF</td>
         <td>number</td>
         <td>Read-only</td>
         <td>PDF</td>
     </tr>
     <tr>
          <td>FILE_POSTSCRIPT</td>
         <td>number</td>
         <td>Read-only</td>
         <td>PS, general PostScript following DSC conventions</td>
     </tr>
     <tr>
         <td>FILE_EPS</td>
         <td>number</td>
         <td>Read-only</td>
         <td>EPS, encapsulated PostScript</td>
     </tr>
     <tr>
         <td>FILE_JPEG</td>
         <td>number</td>
         <td>Read-only</td>
         <td>JPEG</td>
     </tr>
     <tr>
         <td>FILE_JPEG2K</td>
         <td>number</td>
         <td>Read-only</td>
         <td>JPX, JPEG 2000 file</td>
     </tr>
     <tr>
         <td>FILE_TIFF</td>
         <td>number</td>
         <td>Read-only</td>
         <td>TIFF</td>
     </tr>
     <tr>
         <td>FILE_GIF</td>
         <td>number</td>
         <td>Read-only</td>
         <td>GIF</td>
     </tr>
     <tr>
         <td>FILE_PNG</td>
         <td>number</td>
         <td>Read-only</td>
          <td>PNG</td>
     </tr>
     <tr>
         <td>FILE_SWF</td>
         <td>number</td>
         <td>Read-only</td>
         <td>SWF, Flash file</td>
     </tr>
     <tr>
         <td>FILE_FLA</td>
         <td>number</td>
         <td>Read-only</td>
         <td>FLA, Flash authoring file</td>
     </tr>
     <tr>
         <td>FILE_FLV</td>
         <td>number</td>
         <td>Read-only</td>
         <td>FLV, Flash video file</td>
     </tr>
     <tr>
         <td>FILE_MOV</td>
         <td>number</td>
         <td>Read-only</td>
         <td>MOV, Quicktime</td>
     </tr>
     <tr>
         <td>FILE_AVI</td>
         <td>number</td>
         <td>Read-only</td>
         <td>AVI</td>
     </tr>
     <tr>
          <td>FILE_CIN</td>
         <td>number</td>
         <td>Read-only</td>
         <td>CIN, Cineon</td>
     </tr>
     <tr>
         <td>FILE_WAV</td>
         <td>number</td>
         <td>Read-only</td>
         <td>WAV</td>
     </tr>
     <tr>
         <td>FILE_MP3</td>
         <td>number</td>
         <td>Read-only</td>
         <td>MP3</td>
     </tr>
     <tr>
         <td>FILE_SES</td>
         <td>number</td>
         <td>Read-only</td>
         <td>SES, Audition session</td>
     </tr>
     <tr>
         <td>FILE_CEL</td>
         <td>number</td>
         <td>Read-only</td>
         <td>CEL, Audition loop</td>
     </tr>
     <tr>
         <td>FILE_MPEG</td>
         <td>number</td>
         <td>Read-only</td>
         <td>MPEG</td>
     </tr>
     <tr>
         <td>FILE_MPEG2</td>
         <td>number</td>
         <td>Read-only</td>
         <td>MPEG2</td>
     </tr>
     <tr>
         <td>FILE_MPEG4</td>
         <td>number</td>
         <td>Read-only</td>
         <td>MPEG4</td>
     </tr>
     <tr>
         <td>FILE_WMAV</td>
         <td>number</td>
         <td>Read-only</td>
         <td>WMAV, Windows Media Audio and Video</td>
     </tr>
     <tr>
         <td>FILE_AIFF</td>
         <td>number</td>
         <td>Read-only</td>
         <td>AIFF</td>
     </tr>
     <tr>
         <td>FILE_HTML</td>
         <td>number</td>
         <td>Read-only</td>
         <td>HTML</td>
     </tr>
     <tr>
         <td>FILE_XML</td>
         <td>number</td>
         <td>Read-only</td>
         <td>XML</td>
     </tr>
     <tr>
         <td>FILE_TEXT</td>
         <td>number</td>
         <td>Read-only</td>
         <td>TEXT</td>
     </tr>
     <tr>
         <td>FILE_PHOTOSHOP</td>
         <td>number</td>
         <td>Read-only</td>
         <td>PSD, Photoshop</td>
     </tr>
     <tr>
         <td>FILE_ILUSTRATOR</td>
         <td>number</td>
         <td>Read-only</td>
         <td>AI, Illustrator</td>
     </tr>
     <tr>
         <td>FILE_INDESIGN</td>
         <td>number</td>
         <td>Read-only</td>
         <td>INDD, InDesign</td>
     </tr>
     <tr>
         <td>FILE_AE_PROJECT</td>
         <td>number</td>
         <td>Read-only</td>
         <td>AEP, After Effects project</td>
     </tr>
     <tr>
         <td>FILE_AE_PROJECT_TEMPLATE</td>
         <td>number</td>
         <td>Read-only</td>
         <td>AET, After Effects project template</td>
     </tr>
     <tr>
         <td>FILE_AE_FILTER_PRESET</td>
          <td>number</td>
         <td>Read-only</td>
         <td>FFX, After Effects filter preset file</td>
     </tr>
     <tr>
         <td>FILE_ENCORE_PROJECT</td>
         <td>number</td>
         <td>Read-only</td>
         <td>NCOR, Encore project file</td>
     </tr>
     <tr>
         <td>FILE_PREMIERE_PROJECT</td>
         <td>number</td>
         <td>Read-only</td>
         <td>PPJ, Premiere project file</td>
     </tr>
     <tr>
         <td>FILE_PREMIERE_TITLE</td>
         <td>number</td>
         <td>Read-only</td>
         <td>PRPROJ, Premiere title file</td>
     </tr>

</table>


  