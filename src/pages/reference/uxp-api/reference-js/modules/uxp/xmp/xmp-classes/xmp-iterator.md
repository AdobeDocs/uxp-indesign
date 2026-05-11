
<a name="xmpiterator" id="xmpiterator"></a>

# XMPIterator
**Since**: v7.2.0
Created by a call to [XMPMeta.iterator](xmp-meta.md#iteratoroptions-schemans-propname). Walks recursively through the properties and qualifiers of an [XMPMeta object](xmp-meta.md), and returns them as [XMPProperty object](xmp-iterator.md).

The object has no JavaScript properties.  


<a name="xmpiterator-next" id="xmpiterator-next"></a>

## next()
Retrieves the next item in the metadata.

**Returns**: `XMPProperty` \| `null`  


<a name="xmpiterator-skipsiblings" id="xmpiterator-skipsiblings"></a>

## skipSiblings()
Skips the subtree below and the siblings of the current node on the subsequent call to next().



<a name="xmpiterator-skipsubtree" id="xmpiterator-skipsubtree"></a>

## skipSubtree()
Skips the subtree below the current node on the subsequent call to next().


  