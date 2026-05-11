# EnablingGroup
A bordered panel that contains an enabling checkbox. A user makes the enabling group active or inactive by clicking the checkbox. An enabling group can contain any type and number of controls.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the EnablingGroup.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the EnablingGroup (a DialogColumn, DialogRow, EnablingGroup or BorderPanel).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the EnablingGroup within its containing object.
*** 
> *Read Only* 
> 
> Events **events** 
>
> A collection of events.
*** 
> *Read Only* 
> 
> EventListeners **eventListeners** 
>
> A collection of event listeners.
*** 
> *Read Only* 
> 
> DialogColumns **dialogColumns** 
>
> A collection of dialog columns.
*** 
> *Read Only* 
> 
> Widgets **widgets** 
>
> A collection of widgets.
*** 
> *Read Only* 
> 
> TextEditboxes **textEditboxes** 
>
> A collection of text editboxes.
*** 
> *Read Only* 
> 
> IntegerEditboxes **integerEditboxes** 
>
> A collection of integer editboxes.
*** 
> *Read Only* 
> 
> MeasurementEditboxes **measurementEditboxes** 
>
> A collection of measurement editboxes.
*** 
> *Read Only* 
> 
> RealEditboxes **realEditboxes** 
>
> A collection of real number editboxes.
*** 
> *Read Only* 
> 
> AngleEditboxes **angleEditboxes** 
>
> A collection of angle editboxes.
*** 
> *Read Only* 
> 
> PercentEditboxes **percentEditboxes** 
>
> A collection of percent editboxes.
*** 
> *Read Only* 
> 
> IntegerComboboxes **integerComboboxes** 
>
> A collection of integer comboboxes.
*** 
> *Read Only* 
> 
> MeasurementComboboxes **measurementComboboxes** 
>
> A collection of measurement comboboxes.
*** 
> *Read Only* 
> 
> RealComboboxes **realComboboxes** 
>
> A collection of real number comboboxes.
*** 
> *Read Only* 
> 
> AngleComboboxes **angleComboboxes** 
>
> A collection of angle comboboxes.
*** 
> *Read Only* 
> 
> PercentComboboxes **percentComboboxes** 
>
> A collection of percent comboboxes.
*** 
> *Read Only* 
> 
> CheckboxControls **checkboxControls** 
>
> A collection of checkbox controls.
*** 
> *Read Only* 
> 
> StaticTexts **staticTexts** 
>
> A collection of static text objects.
*** 
> *Read Only* 
> 
> Dropdowns **dropdowns** 
>
> A collection of dropdowns.
*** 
> *Read Only* 
> 
> BorderPanels **borderPanels** 
>
> A collection of border panels.
*** 
> *Read Only* 
> 
> EnablingGroups **enablingGroups** 
>
> A collection of enabling groups.
*** 
> *Read Only* 
> 
> RadiobuttonGroups **radiobuttonGroups** 
>
> A collection of radiobutton groups.
*** 
> Boolean **checkedState** 
>
> If true, the control is checked by default in the dialog.
*** 
> String **staticLabel** 
>
> Text that appears in the EnablingGroup.
*** 
> Number **minWidth** 
>
> The width of the control. For an editbox or combobox, specifies the minimum width of the box.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the EnablingGroup.
*** 
> EnablingGroup **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
*** 
> String **toSpecifier**()
> 
> Retrieves the object specifier.
*** 
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Adds an event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

*** 
> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Removes the event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |


