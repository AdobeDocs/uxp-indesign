
<a name="xmpdatetime" id="xmpdatetime"></a>

# require('uxp').xmp.XMPDateTime
**Since**: v7.2.0  


<a name="new-xmpdatetime-new" id="new-xmpdatetime-new"></a>

## XMPDateTime()
XMPDateTime class represents a date and time.
XMP's time includes time zone, and can have up to nanosecond resolution.



<a name="new-xmpdatetime-new" id="new-xmpdatetime-new"></a>

## XMPDateTime(date)
Create XMPDateTime


| Param | Type | Description |
| --- | --- | --- |
| date | `Date` \| `string` | `[Optional]`                  `Date` : A JavaScript Date object. The time zone is set to the local operation-system time-zone value.                         Time can have up to nanosecond resolution; however, when converting to or from a JavaScript Date value,                         time resolution is reduced to milliseconds.<br></br>                  `iso8601Date`: A string containing a date-time in ISO 8601 format; for example: "2007-04-10T17:54:50+01:00" |

**Example**  
```js
// Below example demonstrates how to create XMPDateTime
// Importing XMPDateTime class
const { XMPDateTime } = require("uxp").xmp;

// 1. Creating using Date object
const xdt1 = new XMPDateTime(new Date());

// 2. Creating using iso8601Date
const xdt2 = new XMPDateTime("2007-04-10T17:54:50+01:00");

// 3.  Creating with no arguments
const xdt3 = new XMPDateTime();
```
**Example**  
```js
// Below example demonstrates how to compare two XMPDateTime objects
// Importing XMPDateTime class
const { XMPDateTime } = require("uxp").xmp;

const currentDate = new XMPDateTime(new Date());

const oldDate = new XMPDateTime("2007-04-10T17:54:50+01:00");

currentDate.compareTo(oldDate);
// Returns 1

oldDate.compareTo(currentDate);
// Returns -1

currentDate.compareTo(currentDate);
// Returns 0
```


<a name="xmpdatetime-year" id="xmpdatetime-year"></a>

## year : `number`
The year, in the range [0000…9999].



<a name="xmpdatetime-month" id="xmpdatetime-month"></a>

## month : `number`
The month, in the range [1…12].



<a name="xmpdatetime-day" id="xmpdatetime-day"></a>

## day : `number`
The day, in the range [1…31].



<a name="xmpdatetime-hour" id="xmpdatetime-hour"></a>

## hour : `number`
The hour, in the range [1…23].



<a name="xmpdatetime-minute" id="xmpdatetime-minute"></a>

## minute : `number`
The minute, in the range [1…59].



<a name="xmpdatetime-second" id="xmpdatetime-second"></a>

## second : `number`
The second, in the range [1…59].



<a name="xmpdatetime-nanosecond" id="xmpdatetime-nanosecond"></a>

## nanosecond : `number`
The nanosecond, in the range [0…1e+9 -1].



<a name="xmpdatetime-tzsign" id="xmpdatetime-tzsign"></a>

## tzSign : `number`
The time zone direction of offset. - 0: UTC - -1: west - 1: east



<a name="xmpdatetime-tzhour" id="xmpdatetime-tzhour"></a>

## tzHour : `number`
The time zone hour offset from the prime meridian, in the range [1…23].



<a name="xmpdatetime-tzminute" id="xmpdatetime-tzminute"></a>

## tzMinute : `number`
The time zone minute offset from the prime meridian, in the range [1…59].



<a name="xmpdatetime-compareto" id="xmpdatetime-compareto"></a>

## compareTo(dateTime)
Reports the time order of two date-time values.

**Returns**: `number` - 0 if the two values are the same,<br></br>
                   1 if this date-time is later than the comparison value,<br></br>
                   -1 if this date-time is earlier than the comparison value.<br></br>`number`  

| Param | Type | Description |
| --- | --- | --- |
| dateTime | `XMPDateTime` | Another XMPDateTime object. |



<a name="xmpdatetime-converttolocaltime" id="xmpdatetime-converttolocaltime"></a>

## convertToLocalTime()
Sets the time zone in this object to the local operating-system time zone,
adjusting the time values from the previous time zone, if necessary.



<a name="xmpdatetime-converttoutctime" id="xmpdatetime-converttoutctime"></a>

## convertToUTCTime()
Sets the time zone in this object to UTC (coordinated universal time),
adjusting the time values from the previous time zone, if necessary.



<a name="xmpdatetime-getdate" id="xmpdatetime-getdate"></a>

## getDate()
Converts this date-time value to a JavaScript Date. The time zone is normalized
(time zones are not supported in the JavaScript format), and the accuracy is reduced to milliseconds.

**Returns**: `Date`  


<a name="xmpdatetime-setlocaltimezone" id="xmpdatetime-setlocaltimezone"></a>

## setLocalTimeZone()
Sets the time zone in this object to the current operation-system value,
replacing any existing value. Does not affect other fields.



<a name="xmpdatetime-hasdate" id="xmpdatetime-hasdate"></a>

## hasDate()
To check if the date is available

**Returns**: `boolean`  


<a name="xmpdatetime-hastime" id="xmpdatetime-hastime"></a>

## hasTime()
To check if time is available

**Returns**: `boolean`  


<a name="xmpdatetime-hastimezone" id="xmpdatetime-hastimezone"></a>

## hasTimeZone()
To check if timezone is available

**Returns**: `boolean`  


<a name="xmpdatetime-tostring" id="xmpdatetime-tostring"></a>

## toString()
To get the string value of the object

**Returns**: `string`  

  