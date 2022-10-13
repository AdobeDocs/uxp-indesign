# Pages
A collection of pages.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Page.
*** 
> Page **add**( LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new page.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | at | The location of the new page relative to the reference object or within the document or spread.  (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter value specifies before or after. Can accept: Page, Spread, MasterSpread or Document. (Optional) |
| Object | withProperties | Initial values for properties of the new Page (Optional) |

*** 
> Page **item**( Mixed **index** )
> 
> Returns the Page with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Page **itemByName**( String **name** )
> 
> Returns the Page with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Page **itemByID**( Number **id** )
> 
> Returns the Page with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Page **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Pages within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Page, index, or name at the beginning of the range. Can accept: Page, Long Integer or String. |
| Mixed | to | The Page, index, or name at the end of the range. Can accept: Page, Long Integer or String. |

*** 
> Page **firstItem**()
> 
> Returns the first Page in the collection.
*** 
> Page **lastItem**()
> 
> Returns the last Page in the collection.
*** 
> Page **middleItem**()
> 
> Returns the middle Page in the collection.
*** 
> Page **previousItem**( Page **obj** )
> 
> Returns the Page with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Page | obj | The index of the Page that follows the desired Page. |

*** 
> Page **nextItem**( Page **obj** )
> 
> Returns the Page whose index follows the specified Page in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Page | obj | The Page whose index comes before the desired Page. |

*** 
> Page **anyItem**()
> 
> Returns any Page in the collection.
*** 
> Page **everyItem**()
> 
> Returns every Page in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Page.
*** 
> Page **[]**( Number **index** )
> 
> Returns the Page with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


