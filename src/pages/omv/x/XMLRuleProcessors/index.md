# XMLRuleProcessors
A collection of XML rule processors.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> XMLRuleProcessor **add**( String **rulePaths**, Mixed **prefixMappingTable**, Object **withProperties** )
> 
> Create a new XMLRuleProcessor
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | rulePaths | The XPath condition paths of the rules in the rule set. |
| Mixed | prefixMappingTable | The namespace mapping table. Can accept: Array of Arrays of 2 Strings. (Optional) |
| Object | withProperties | Initial values for properties of the new XMLRuleProcessor (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the XMLRuleProcessor.
*** 
> XMLRuleProcessor **item**( Mixed **index** )
> 
> Returns the XMLRuleProcessor with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> XMLRuleProcessor **itemByName**( String **name** )
> 
> Returns the XMLRuleProcessor with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> XMLRuleProcessor **itemByID**( Number **id** )
> 
> Returns the XMLRuleProcessor with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> XMLRuleProcessor **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the XMLRuleProcessors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The XMLRuleProcessor, index, or name at the beginning of the range. Can accept: XMLRuleProcessor, Long Integer or String. |
| Mixed | to | The XMLRuleProcessor, index, or name at the end of the range. Can accept: XMLRuleProcessor, Long Integer or String. |

*** 
> XMLRuleProcessor **firstItem**()
> 
> Returns the first XMLRuleProcessor in the collection.
*** 
> XMLRuleProcessor **lastItem**()
> 
> Returns the last XMLRuleProcessor in the collection.
*** 
> XMLRuleProcessor **middleItem**()
> 
> Returns the middle XMLRuleProcessor in the collection.
*** 
> XMLRuleProcessor **previousItem**( XMLRuleProcessor **obj** )
> 
> Returns the XMLRuleProcessor with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLRuleProcessor | obj | The index of the XMLRuleProcessor that follows the desired XMLRuleProcessor. |

*** 
> XMLRuleProcessor **nextItem**( XMLRuleProcessor **obj** )
> 
> Returns the XMLRuleProcessor whose index follows the specified XMLRuleProcessor in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLRuleProcessor | obj | The XMLRuleProcessor whose index comes before the desired XMLRuleProcessor. |

*** 
> XMLRuleProcessor **anyItem**()
> 
> Returns any XMLRuleProcessor in the collection.
*** 
> XMLRuleProcessor **everyItem**()
> 
> Returns every XMLRuleProcessor in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLRuleProcessor.
*** 
> XMLRuleProcessor **[]**( Number **index** )
> 
> Returns the XMLRuleProcessor with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


