# Bullet
Bullet character.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the Bullet (a TextDefault, ParagraphStyle, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story, XmlStory, FindTextPreference, ChangeTextPreference, FindGrepPreference, ChangeGrepPreference, FindTransliteratePreference or ChangeTransliteratePreference).
<HorizontalLine />
> *Read Only* 
> 
> Events **events** 
>
> A collection of events.
<HorizontalLine />
> *Read Only* 
> 
> EventListeners **eventListeners** 
>
> A collection of event listeners.
<HorizontalLine />
> BulletCharacterType **characterType** 
>
> The type of bullet character.
<HorizontalLine />
> Number **characterValue** 
>
> The bullet character as a unicode ID or a glyph ID.
<HorizontalLine />
> Mixed **bulletsFont** 
>
> Font of the bullet character. Can return: Font, String or AutoEnum enumerator.
<HorizontalLine />
> Mixed **bulletsFontStyle** 
>
> Font style of the bullet character. Can return: String, NothingEnum enumerator or AutoEnum enumerator.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the Bullet.
<HorizontalLine />
> Bullet **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
<HorizontalLine />
> String **toSpecifier**()
> 
> Retrieves the object specifier.
<HorizontalLine />
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Adds an event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

<HorizontalLine />
> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Removes the event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |


