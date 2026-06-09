# DialogRow
A borderless row for containing controls in a dialog.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the DialogRow.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> DialogColumn **parent** 
>
> The parent of the DialogRow (a DialogColumn).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the DialogRow within its containing object.
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
> *Read Only* 
> 
> DialogColumns **dialogColumns** 
>
> A collection of dialog columns.
<HorizontalLine />
> *Read Only* 
> 
> Widgets **widgets** 
>
> A collection of widgets.
<HorizontalLine />
> *Read Only* 
> 
> TextEditboxes **textEditboxes** 
>
> A collection of text editboxes.
<HorizontalLine />
> *Read Only* 
> 
> IntegerEditboxes **integerEditboxes** 
>
> A collection of integer editboxes.
<HorizontalLine />
> *Read Only* 
> 
> MeasurementEditboxes **measurementEditboxes** 
>
> A collection of measurement editboxes.
<HorizontalLine />
> *Read Only* 
> 
> RealEditboxes **realEditboxes** 
>
> A collection of real number editboxes.
<HorizontalLine />
> *Read Only* 
> 
> AngleEditboxes **angleEditboxes** 
>
> A collection of angle editboxes.
<HorizontalLine />
> *Read Only* 
> 
> PercentEditboxes **percentEditboxes** 
>
> A collection of percent editboxes.
<HorizontalLine />
> *Read Only* 
> 
> IntegerComboboxes **integerComboboxes** 
>
> A collection of integer comboboxes.
<HorizontalLine />
> *Read Only* 
> 
> MeasurementComboboxes **measurementComboboxes** 
>
> A collection of measurement comboboxes.
<HorizontalLine />
> *Read Only* 
> 
> RealComboboxes **realComboboxes** 
>
> A collection of real number comboboxes.
<HorizontalLine />
> *Read Only* 
> 
> AngleComboboxes **angleComboboxes** 
>
> A collection of angle comboboxes.
<HorizontalLine />
> *Read Only* 
> 
> PercentComboboxes **percentComboboxes** 
>
> A collection of percent comboboxes.
<HorizontalLine />
> *Read Only* 
> 
> CheckboxControls **checkboxControls** 
>
> A collection of checkbox controls.
<HorizontalLine />
> *Read Only* 
> 
> StaticTexts **staticTexts** 
>
> A collection of static text objects.
<HorizontalLine />
> *Read Only* 
> 
> Dropdowns **dropdowns** 
>
> A collection of dropdowns.
<HorizontalLine />
> *Read Only* 
> 
> BorderPanels **borderPanels** 
>
> A collection of border panels.
<HorizontalLine />
> *Read Only* 
> 
> EnablingGroups **enablingGroups** 
>
> A collection of enabling groups.
<HorizontalLine />
> *Read Only* 
> 
> RadiobuttonGroups **radiobuttonGroups** 
>
> A collection of radiobutton groups.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the DialogRow.
<HorizontalLine />
> DialogRow **getElements**()
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


