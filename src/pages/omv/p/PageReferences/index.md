# PageReferences
A collection of index page references.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> PageReference **add**( Text **source**, PageReferenceType **pageReferenceType**, Mixed **pageReferenceLimit**, CharacterStyle **pageNumberStyleOverride**, Object **withProperties** )
> 
> Creates a new page reference.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Text | source | The text or insertion point to which the page reference points. |
| PageReferenceType | pageReferenceType | The page number for an index page reference or the last page in an index page reference page range. (Optional) |
| Mixed | pageReferenceLimit | The paragraph style or number of paragraphs or pages that defines the last page in a page range. Valid only when page reference type specifies the next use of a paragraph style or a number of paragraphs or pages. . Can accept: ParagraphStyle or Long Integer. (Optional) |
| CharacterStyle | pageNumberStyleOverride | The style override for the page number.  (Optional) |
| Object | withProperties | Initial values for properties of the new PageReference (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the PageReference.
*** 
> PageReference **item**( Mixed **index** )
> 
> Returns the PageReference with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> PageReference **itemByName**( String **name** )
> 
> Returns the PageReference with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> PageReference **itemByID**( Number **id** )
> 
> Returns the PageReference with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> PageReference **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PageReferences within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PageReference, index, or name at the beginning of the range. Can accept: PageReference, Long Integer or String. |
| Mixed | to | The PageReference, index, or name at the end of the range. Can accept: PageReference, Long Integer or String. |

*** 
> PageReference **firstItem**()
> 
> Returns the first PageReference in the collection.
*** 
> PageReference **lastItem**()
> 
> Returns the last PageReference in the collection.
*** 
> PageReference **middleItem**()
> 
> Returns the middle PageReference in the collection.
*** 
> PageReference **previousItem**( PageReference **obj** )
> 
> Returns the PageReference with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageReference | obj | The index of the PageReference that follows the desired PageReference. |

*** 
> PageReference **nextItem**( PageReference **obj** )
> 
> Returns the PageReference whose index follows the specified PageReference in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageReference | obj | The PageReference whose index comes before the desired PageReference. |

*** 
> PageReference **anyItem**()
> 
> Returns any PageReference in the collection.
*** 
> PageReference **everyItem**()
> 
> Returns every PageReference in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PageReference.
*** 
> PageReference **[]**( Number **index** )
> 
> Returns the PageReference with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


