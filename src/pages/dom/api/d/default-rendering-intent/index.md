# DefaultRenderingIntent
The default rendering intent.

## Class
> *Read Only* 
> 
> Number **PERCEPTUAL** = 1380544611
> 
> Aims to preserve the visual relationship between colors so they are perceived as natural to the human eye, even though the color values themselves may change.
*** 
> *Read Only* 
> 
> Number **SATURATION** = 1380545377
> 
> Tries to produce vivid colors in an image at the expense of color accuracy.
*** 
> *Read Only* 
> 
> Number **RELATIVE_COLORIMETRIC** = 1380545123
> 
> Compares the extreme highlight of the source color space to that of the destination color space and shifts all colors accordingly. Out-of-gamut colors are shifted to the closest reproducible color in the destination color space. Note: Preserves more of the original colors in an image than perceptual rendering intent does.
*** 
> *Read Only* 
> 
> Number **ABSOLUTE_COLORIMETRIC** = 1380540771
> 
> Aims to maintain color accuracy at the expense of color relationshps and is suitable for proofing to simulate the output of a particular device. Note: Leaves colors that fall inside the destination gamut unchanged and clips out-of-gamut colors.

