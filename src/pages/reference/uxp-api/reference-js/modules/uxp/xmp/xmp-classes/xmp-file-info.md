
<a name="xmpfileinfo" id="xmpfileinfo"></a>

# XMPFileInfo
**Since**: v7.2.0
This object is returned by [XMPFile.getFileInfo](xmp-file.md#getfileinfo). The read-only properties describe the file represented by the [XMPFile object](xmp-file.md).  


<a name="xmpfileinfo-filepath" id="xmpfileinfo-filepath"></a>

## filePath : `string`
**Read only**
The absolute path of the file, in JavaScript notation.



<a name="xmpfileinfo-format" id="xmpfileinfo-format"></a>

## format : `number`
**Read only**
One of the file-format constants. See [File format numeric constants](xmp-const.md#file-format-numeric-constants).



<a name="xmpfileinfo-handlerflags" id="xmpfileinfo-handlerflags"></a>

## handlerFlags : `number`
**Read only**
The features that are supported for this format. A logical OR of these bit-flag constants:<br></br>                 - XMPConst.HANDLER_CAN_INJECT_XMP - Can inject first-time XMP into an existing file.<br></br>                 - XMPConst.HANDLER_CAN_EXPAND - Can expand XMP or other metadata in an existing file.<br></br>                 - XMPConst.HANDLER_CAN_REWRITE - Can copy one file to another, writing new metadata.<br></br>                 - XMPConst.HANDLER_PPEFERS_IN_PLACE - Can expand, but prefers in-place update. <br></br>                 - XMPConst.HANDLER_CAN_RECONCILE - Supports reconciliation between XMP and other forms.<br></br>                 - XMPConst.HANDLER_ALLOWS_ONLY_XMP - Allows access to just the XMP, ignoring other forms.<br></br>                 - XMPConst.HANDLER_RETURNS_RAW_PACKETS - File handler returns raw XMP packet information.<br></br>                 - XMPConst.HANDLER_RETURNS_TNAIL - File handler returns native thumbnail.<br></br>                 - XMPConst.HANDLER_OWNS_FILE - File handler does the file open and close.<br></br>                 - XMPConst.HANDLER_ALLOWS_SAFE_UPDATE - File handler allows crash-safe file updates.<br></br>



<a name="xmpfileinfo-openflags" id="xmpfileinfo-openflags"></a>

## openFlags : `number`
**Read only**
The options with which this file was opened. One of these constants:<br></br>                 - XMPConst.OPEN_FOR_READ - Open for read-only access.<br></br>                 - XMPConst.OPEN_FOR_UPDATE - Open for reading and writing.<br></br>                 - XMPConst.OPEN_ONLY_XMP - Only the XMP is wanted, allows space/time optimizations.<br></br>                 - XMPConst.OPEN_STRICTLY - Be strict about locating XMP and reconciling with other forms.<br></br>                 - XMPConst.OPEN_USE_SMART_HANDLER - Require the use of a smart handler. No packet scanning is performed.<br></br>                 - XMPConst.OPEN_USE_PACKET_SCANNING - Force packet scanning, do not use a smart handler.<br></br>                 - XMPConst.OPEN_LIMITED_SCANNING - Only packet-scan files known to need scanning.


  