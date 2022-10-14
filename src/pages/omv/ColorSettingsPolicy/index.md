# ColorSettingsPolicy
The policy for handling mismatched CMYK configurations.

## Class
> *Read Only* 
> 
> Number **COLOR_POLICY_OFF** = 1129344870
> 
> Turns off color management for documents whose profiles do not match the working space. For imported colors, numeric values override color appearance.
*** 
> *Read Only* 
> 
> Number **PRESERVE_EMBEDDED_PROFILES** = 1129345136
> 
> Preserves embedded color profiles in newly opened documents.
*** 
> *Read Only* 
> 
> Number **CONVERT_TO_WORKING_SPACE** = 1129346931
> 
> Converts newly opened documents to the current working space. For imported colors, color appearance overrides numeric values.
*** 
> *Read Only* 
> 
> Number **COMBINATION_OF_PRESERVE_AND_SAFE_CMYK** = 1129345124
> 
> Preserves raw color numbers and ignores embedded color profiles.

