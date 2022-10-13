# EditingState
The editing state of the file in Version Cue.

## Class
> *Read Only* 
> 
> Number **EDITING_UNKNOWN** = 1986217301
> 
> The editing status is not known.
*** 
> *Read Only* 
> 
> Number **EDITING_NOWHERE** = 1986217294
> 
> The file is not currently in use and is not locked.
*** 
> *Read Only* 
> 
> Number **EDITING_REMOTELY** = 1986217298
> 
> Lock held but not usable.
*** 
> *Read Only* 
> 
> Number **EDITING_LOCALLY** = 1986217292
> 
> The file has been modified locally and not locked.
*** 
> *Read Only* 
> 
> Number **EDITING_LOCALLY_LOCKED** = 1986217291
> 
> The file has been locked locally and may be modified.
*** 
> *Read Only* 
> 
> Number **EDITING_CONFLICT** = 1986217283
> 
> The file was modified locally or remotely while it was locked and therefore two versions exist.

