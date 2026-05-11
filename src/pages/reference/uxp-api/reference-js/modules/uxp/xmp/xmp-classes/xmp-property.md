
<a name="xmpproperty" id="xmpproperty"></a>

# XMPProperty
**Since**: v7.2.0  


<a name="new-xmpproperty-new" id="new-xmpproperty-new"></a>

## XMPProperty()
This object is returned by various property accessor functions of the [XMPMeta object](xmp-meta.md),
such as [xmpmetaobj.getProperty](xmp-meta.md#getpropertyschemans-propname-valuetype). The read-only properties describe a metadata property.



<a name="xmpproperty-locale" id="xmpproperty-locale"></a>

## locale : `string`
**Read only**
The language of the property value. This value is set by calls to getLocalizedText(),which assigns the language of the selected alternative text item,if an appropriate item is found.



<a name="xmpproperty-namespace" id="xmpproperty-namespace"></a>

## namespace : `string`
**Read only**
The namespace of the property; See [Schema namespace string constants](xmp-const.md#schema-namespace-string-constants).Typically used when browsing metadata with an [XMPIterator object](xmp-iterator.md).



<a name="xmpproperty-options" id="xmpproperty-options"></a>

## options : `number`
**Read only**
A constant that describes the property type, 0 for a simple property.<br></br>XMPConst.PROP_IS_ARRAY - The property is an array (of type alt, bag, or seq).<br></br>XMPConst.PROP_IS_STRUCT - The property is a structure with nested fields.<br></br>



<a name="xmpproperty-path" id="xmpproperty-path"></a>

## path : `number`
**Read only**
The property path, including the property name.For a simple property, the entire path is the property name.



<a name="xmpproperty-value" id="xmpproperty-value"></a>

## value : `string` \| `number` \| `boolean` \| `XMPDateTime`
**Read only**
The value of the property, if any.Arrays and non-leaf levels of structures do not have values.



<a name="xmpproperty-tostring" id="xmpproperty-tostring"></a>

## toString()
To get the Property Value as String

**Returns**: `string` - The value of the property as a string.  

  