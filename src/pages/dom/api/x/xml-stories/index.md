# XmlStories
A collection of xml stories.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the XmlStory.
<HorizontalLine />
> XmlStory **item**( Mixed **index** )
> 
> Returns the XmlStory with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> XmlStory **itemByName**( String **name** )
> 
> Returns the XmlStory with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> XmlStory **itemByID**( Number **id** )
> 
> Returns the XmlStory with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> XmlStory **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the XmlStories within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The XmlStory, index, or name at the beginning of the range. Can accept: XmlStory, Long Integer or String. |
| Mixed | to | The XmlStory, index, or name at the end of the range. Can accept: XmlStory, Long Integer or String. |

<HorizontalLine />
> XmlStory **firstItem**()
> 
> Returns the first XmlStory in the collection.
<HorizontalLine />
> XmlStory **lastItem**()
> 
> Returns the last XmlStory in the collection.
<HorizontalLine />
> XmlStory **middleItem**()
> 
> Returns the middle XmlStory in the collection.
<HorizontalLine />
> XmlStory **previousItem**( XmlStory **obj** )
> 
> Returns the XmlStory with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XmlStory | obj | The index of the XmlStory that follows the desired XmlStory. |

<HorizontalLine />
> XmlStory **nextItem**( XmlStory **obj** )
> 
> Returns the XmlStory whose index follows the specified XmlStory in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XmlStory | obj | The XmlStory whose index comes before the desired XmlStory. |

<HorizontalLine />
> XmlStory **anyItem**()
> 
> Returns any XmlStory in the collection.
<HorizontalLine />
> XmlStory **everyItem**()
> 
> Returns every XmlStory in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the XmlStory.
<HorizontalLine />
> XmlStory **[]**( Number **index** )
> 
> Returns the XmlStory with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


