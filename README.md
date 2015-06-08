# LazyLoad
jQuery function to lazy load parts of the DOM.

Lazy loading is where parts of the HTML DOM are loaded after the main content. Usually when the user needs them. In this exmaple the sections are loaded when the user scrolls near them.

There are some downsides to this:

Search engines will not see the content of the lazy load.
Muliple HTML requests to retrieve static content uses more bandwidth than loading the content in one hit.
Waiting for sections to load can be annoying for the user.
JavaScript events may lose binding.

To use, create a div to holder the content with an id of "lazyLoadHolder".
Call the function with StartLazyLoad()

This will then load sections defined in getSections() JSON object.
