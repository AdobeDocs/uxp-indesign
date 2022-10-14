# Books
A collection of books.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Book **add**( File **fullName**, Object **withProperties** )
> 
> Creates a new book.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | fullName | The full path name of the new book file, including the book file extension '.indb'. |
| Object | withProperties | Initial values for properties of the new Book (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Book.
*** 
> Book **item**( Mixed **index** )
> 
> Returns the Book with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Book **itemByName**( String **name** )
> 
> Returns the Book with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Book **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Books within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Book, index, or name at the beginning of the range. Can accept: Book, Long Integer or String. |
| Mixed | to | The Book, index, or name at the end of the range. Can accept: Book, Long Integer or String. |

*** 
> Book **firstItem**()
> 
> Returns the first Book in the collection.
*** 
> Book **lastItem**()
> 
> Returns the last Book in the collection.
*** 
> Book **middleItem**()
> 
> Returns the middle Book in the collection.
*** 
> Book **previousItem**( Book **obj** )
> 
> Returns the Book with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Book | obj | The index of the Book that follows the desired Book. |

*** 
> Book **nextItem**( Book **obj** )
> 
> Returns the Book whose index follows the specified Book in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Book | obj | The Book whose index comes before the desired Book. |

*** 
> Book **anyItem**()
> 
> Returns any Book in the collection.
*** 
> Book **everyItem**()
> 
> Returns every Book in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Book.
*** 
> Book **[]**( Number **index** )
> 
> Returns the Book with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


