# FitOptions
Options for fitting content to a frame.

## Class
> *Read Only* 
> 
> Number **CONTENT_TO_FRAME** = 1668575078
> 
> Resizes content to fit the frame. Note: Content that is a different size than the frame appears stretched or squeezed.
*** 
> *Read Only* 
> 
> Number **CENTER_CONTENT** = 1667591779
> 
> Centers content in the frame; preserves the frame size as well as content size and proportions. Note: If the content is larger than the frame, content around the edges is obscured.
*** 
> *Read Only* 
> 
> Number **PROPORTIONALLY** = 1668247152
> 
> Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space appears in the frame.
*** 
> *Read Only* 
> 
> Number **CONTENT_AWARE_FIT** = 1667327593
> 
> Selects best crop region of the content for the frame based on Adobe Sensei. Note: Preserves frame size but might scale the content size.
*** 
> *Read Only* 
> 
> Number **FRAME_TO_CONTENT** = 1718906723
> 
> Resizes the frame so it fits the content.
*** 
> *Read Only* 
> 
> Number **FILL_PROPORTIONALLY** = 1718185072
> 
> Resizes content to fill the frame while perserving the proportions of the content. If the content and frame have different proportions, some of the content is obscured by the bounding box of the frame.
*** 
> *Read Only* 
> 
> Number **APPLY_FRAME_FITTING_OPTIONS** = 1634100847
> 
> Applies the current frame fitting options to the frame and content. Before using this, do confirm that the expected Frame Fitting Options are applied on the frame. For example, the act of placing an image in a frame set to 'Fit Content Proportionally' can change the crop settings in the Frame Fitting Options, which would then get applied for any subsequent image placement when this API is called.

