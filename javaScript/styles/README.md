CSS(Cascading style sheet) Rules Contains three part:
Selector { Property: Value }

## Types of CSS Styles:
1. Inline CSS - Inside the element(Not Recommended <br> `<h1 style="color:blue;">A Blue Heading</h1>`)
2. Internal or Embedded CSS - Inside the head section <br> `<head> <style> h1 {color: red;} </style> </head>`
3. External CSS - In a separate file <br> `<head> <link rel="stylesheet" href="mystyle.css"> </head>`

## CSS Colors:
1. Color Name - red, green, blue, etc.
2. Hexadecimal - #ff0000, #00ff00, #0000ff, etc.
3. RGB - rgb(255, 0, 0), rgb(0, 255, 0), rgb(0, 0, 255), etc.
4. RGBA - rgba(255, 0, 0, 0.3), rgba(0, 255, 0, 0.3), rgba(0, 0, 255, 0.3), etc.
5. HSL - hsl(0, 100%, 50%), hsl(120, 100%, 50%), hsl(240, 100%, 50%), etc.
6. HSLA - hsla(0, 100%, 50%, 0.3), hsla(120, 100%, 50%, 0.3), hsla(240, 100%, 50%, 0.3), etc.

## CSS Classes and Spans:
1. Classes - `<p class="center">This paragraph refers to a class.</p>`
2. Spans - `<p>This is a <span>paragraph</span>.</p>`

## CSS DIVs:
1. `<div>` tag defines a division or a section in an HTML document.
2. `<div>` tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.
3. `<div>` tag is easily styled by using the class or id attribute.
4. Any sort of content can be put inside the `<div>` tag!
5. `<div>` tag is block element.

## CSS IDs:
1. `<p id="intro">This is a paragraph.</p>`
2. The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
3. The id attribute is most used to point to a style in a style sheet, and by JavaScript (via the HTML DOM) to manipulate the element with the specific id.
4. In CSS, to select an element with a specific id, write a hash (#) character, followed by the id of the element.
5. The style rule below will be applied to the HTML element with id="para1":
`#para1 {text-align:center;color:red;}`
6. The id selector is used to specify a style for a single, unique element.
7. The id selector uses the id attribute of the HTML element, and is defined with a "#".
9. An id name cannot start with a number!

## CSS Margins:
1. The CSS margin properties are used to create space around elements, outside of any defined borders.
2. With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).
3. CSS has properties for specifying the margin for each side of an element:
- margin-top
- margin-right
- margin-bottom
- margin-left
4. All the margin properties can have the following values:
- auto - the browser calculates the margin
- length - specifies a margin in px, pt, cm, etc.
- % - specifies a margin in % of the width of the containing element
- inherit - specifies that the margin should be inherited from the parent element

## CSS Padding:
1. The CSS padding properties are used to generate space around an element's content, inside of any defined borders.
2. With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).
3. CSS has properties for specifying the padding for each side of an element:
- padding-top
- padding-right
- padding-bottom
- padding-left
4. All the padding properties can have the following values:
- length - specifies a padding in px, pt, cm, etc.
- % - specifies a padding in % of the width of the containing element
- inherit - specifies that the padding should be inherited from the parent element

## CSS Text properties:
1. The CSS text properties allow you to specify the color of the text, the style of the font, the font weight, and the font size.
2. Text Color - The color property is used to set the color of the text. The color is specified by:
- a color name - like "red"
- a HEX value - like "#ff0000"
- an RGB value - like "rgb(255,0,0)"
3. Text Alignment - The text-align property is used to set the horizontal alignment of a text.
4. Text Decoration - The text-decoration property is used to set or remove decorations from text.
5. Text Transformation - The text-transform property is used to specify uppercase and lowercase letters in a text.
6. Text Indentation - The text-indent property is used to specify the indentation of the first line of a text.
7. Letter Spacing - The letter-spacing property is used to specify the space between the characters in a text.
8. Line Height - The line-height property is used to specify the space between lines.
9. Word Spacing - The word-spacing property is used to specify the space between the words in a text.
10. Text Direction - The direction property specifies the text direction/writing direction.
11. Text Shadow - The text-shadow property adds shadow to text.
12. Vertical Alignment - The vertical-align property sets the vertical alignment of an element.

## CSS Font properties:
1. The CSS font properties define the font family, boldness, size, and the style of a text.
2. Font Family - The font-family property specifies the font for an element.
3. Font Style - The font-style property specifies the font style for an element.
4. Font Size - The font-size property sets the size of a font.
5. Font Weight - The font-weight property sets how thick or thin characters in text should be displayed.
6. Font Variant - The font-variant property specifies whether or not a text should be displayed in a small-caps font.
7. Font Stretch - The font-stretch property allows you to make text wider or narrower.
8. Font Shorthand - The font property is a shorthand property for:
- font-style
- font-variant
- font-weight
- font-size/line-height
- font-family
9. Font Size/Line Height - The font-size property sets the size of a font, and the line-height property sets the space between lines.
10. Google Fonts - Google Fonts is a library of over 800 different typefaces, completely ready to be embedded in your web project.
11. Font Icons - Font icons are icons that can be displayed on a web page by using a font. The advantage of using font icons is that they can be styled with CSS.

## CSS Borders:
1. The CSS border properties allow you to specify the style, width, and color of an element's border.
2. Border Style - The border-style property specifies what kind of border to display.
3. Border Width - The border-width property specifies the width of the four borders.
4. Border Color - The border-color property is used to set the color of the four borders.
5. Rounded Borders - The border-radius property is used to add rounded borders to an element.
6. Border Shorthand - The border property is a shorthand property for the following individual border properties:
- border-width
- border-style (required)
- border-color
7. Border Image - The border-image property allows you to specify an image to be used as the border around an element.
8. Border-Radius - The border-radius property defines the radius of the element's corners.

## CSS Backgrounds:
1. The CSS background properties are used to add background effects for elements.
2. Background Color - The background-color property specifies the background color of an element.(The background color of a page is set like this: body {background-color: lightblue;})
3. Background Image - The background-image property specifies an image to use as the background of an element.(The background image of a page is set like this: body {background-image: url("paper.gif");}
4. Background Repeat - The background-repeat property sets if/how a background image will be repeated.(The background image of a page is set like this: body {background-image: url("paper.gif");}
5. Background Attachment - The background-attachment property sets whether a background image scrolls with the rest of the page, or is fixed.(The background image of a page is set like this: body {background-image: url("paper.gif");}
6. Background Shorthand - The background property is a shorthand property for:
- background-color
- background-image
- background-repeat
- background-attachment
- background-position
7. Background Position - The background-position property sets the starting position of a background image.
8. Background Size - The background-size property specifies the size of the background images.
9. Gradients - CSS gradients are represented by the gradient data type, a special type of image made of a progressive transition between two or more colors.(The following example shows a linear gradient that starts at the top left corner of the <div> element, and ends at the bottom right corner: background-image: linear-gradient(red, yellow);
10. Multiple Backgrounds - The background property is used to set multiple background images on an element.(The following example shows how to specify more than one background image for a <div> element: background-image: url(img_flwr.gif), url(paper.gif);
11. CSS3 Shadows - CSS3 introduces the new box-shadow property to add shadow effects to boxes.(The following example adds a shadow to a <div> element: box-shadow: 10px 10px 5px #888888;)
12. CSS3 Rounded Corners - CSS3 introduces the border-radius property which allows you to add rounded corners to elements.(The following example adds rounded corners to an <img> element: img {border-radius: 50%;})
13. CSS3 Border Images - CSS3 introduces the border-image property, allowing you to turn an image into a border of an element.(The following example shows how to use an image as a border for a <div> element: border-image: url(border.png) 30 30 round;
14. CSS3 Backgrounds - CSS3 introduces the background-size property which allows backgrounds to be stretched or squashed.(The following example stretches a background image to 150 pixels wide and 100 pixels high: background-size: 150px 100px;)
15. CSS3 Colors - CSS3 introduces an entirely new and intuitive way to specify colors using hue, saturation, and lightness values.(The following example sets the color of the text to a light green color: h1 {color: hsl(120, 100%, 75%);})
16. CSS3 Gradients - CSS3 gradients let you display smooth transitions between two or more specified colors.(The following example shows a linear gradient that starts at the top left corner of the <div> element, and ends at the bottom right corner: background-image: linear-gradient(red, yellow);

## CSS Transparencies:
1. CSS3 introduces the opacity property which allows you to specify the opacity of an element and any of its child elements.(The following example sets the opacity of the <div> element to 0.6: div {opacity: 0.6;})
2. CSS3 also introduces the rgba() function which allows you to specify an opacity value for a color.(The following example sets the opacity of the background color and the text color of the <div> element to 0.6: div {background-color: rgba(255, 0, 0, 0.6); color: rgba(0, 255, 0, 0.6);})

## CSS Text on Top of Images:
1. The z-index property specifies the stack order of an element.(An element with greater stack order is always in front of an element with a lower stack order.)
2. Note: z-index only works on positioned elements (position:absolute, position:relative, or position:fixed).
3. Tip: Elements with negative stack order are positioned behind elements with default stack order.
*The following example specifies that the <h1> element should be placed behind the <img> element: ``` h1 {position: relative; z-index: -1;} ```
*The following example specifies that the <h1> element should be placed in front of the <img> element: ``` h1 {position: relative; z-index: 1;} ```

## CSS Width and Height Properties:
1. The width and height properties are used to set the width and height of an element.
2. The width and height of an element does not include padding, borders, or margins! It sets the width/height of the area inside the padding, border, and margin of the element.
3. The following example sets the width and height of all <div> elements to 300 pixels: ``` div {width: 300px; height: 300px;} ```
4. The max-width property is used to set the maximum width of an element.
5. The max-height property is used to set the maximum height of an element.
6. The min-width property is used to set the minimum width of an element.
7. The min-height property is used to set the minimum height of an element. 
8. The following example sets the width of all <div> elements to 300 pixels, and the height to 100 pixels, except for those with a class name of "small", which are 150 pixels wide and 50 pixels high: ``` div {width: 300px; height: 100px;} div.small {width: 150px; height: 50px;} ```
9. The following example sets the width of all <div> elements to 300 pixels, and the height to 100 pixels, except for those with a class name of "small", which are 150 pixels wide and 50 pixels high: ``` div {width: 300px; height: 100px;} div.small {width: 150px; height: 50px;} ```

## CSS Display properties:
1. The display property specifies the display behavior (the type of rendering box) of an element.
2. The following example shows how to display a div element as an inline element: ``` div {display: inline;} ```
3. The following example shows how to display a div element as a block-level element: ``` div {display: block;} ```
4. The following example shows how to display a div element as an inline-block element: ``` div {display: inline-block;} ```
5. The following example shows how to display a div element as a table: ``` div {display: table;} ```
6. The following example shows how to display a div element as a table cell: ``` div {display: table-cell;} ```
7. The following example shows how to display a div element as a table header: ``` div {display: table-header-group;} ```
8. The following example shows how to display a div element as a table footer: ``` div {display: table-footer-group;} ```
9. The following example shows how to display a div element as a table row: ``` div {display: table-row;} ```

## CSS Positioning:
1. The position property specifies the type of positioning method used for an element .
2. There are five different position values:
- static
- relative
- fixed
- absolute
- sticky
3. Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.
4. The following example shows how to position a <div> element using the static value: ``` div.static {position: static; border: 3px solid #73AD21;} ```
5. The following example shows how to position a <div> element using the relative value: ``` div.relative {position: relative; left: 30px; border: 3px solid #73AD21;} ```
6. The following example shows how to position a <div> element using the fixed value: ``` div.fixed {position: fixed; bottom: 0; right: 0; width: 300px; border: 3px solid #73AD21;} ```
7. The following example shows how to position a <div> element using the absolute value: ``` div.absolute {position: absolute; top: 80px; right: 0; width: 200px; height: 100px; border: 3px solid #73AD21;} ```
8. The following example shows how to position a <div> element using the sticky value: ``` div.sticky {position: -webkit-sticky; /* Safari */ position: sticky; top: 0; border: 2px solid #4CAF50;} ```

## CSS Float:
1. The float property is used for positioning and formatting content e.g. let an image float left to the text in a container.
2. The following example shows how to float an image to the left of the text in a container: ``` img {float: left;} ```
3. The following example shows how to float an image to the right of the text in a container: ``` img {float: right;} ```
4. The following example shows how to float an image to the left, and let the text wrap to the right: ``` img {float: left; margin-right: 20px;} ```
5. The following example shows how to float an image to the right, and let the text wrap to the left: ``` img {float: right; margin-left: 20px;} ```
6. The following example shows how to float an image to the left, and let the text wrap around it: ``` img {float: left; margin: 0 20px 20px 0;} ```
7. The following example shows how to float an image to the right, and let the text wrap around it: ``` img {float: right; margin: 0 0 20px 20px;} ```
8. The following example shows how to float an image to the left, and let a paragraph float to the right of the image: ``` img {float: left; margin-right: 20px;} p {float: right; } ```

## CSS Clear:
1. The clear property specifies on which sides of an element floating elements are not allowed to float.
2. The clear property specifies what elements can float beside the cleared element and on which side.
3. The following example shows how to clear the float on both sides of a paragraph: ``` p {clear: both;} ```
4. The following example shows how to clear the float on the left side of a paragraph: ``` p {clear: left;} ```
5. The following example shows how to clear the float on the right side of a paragraph: ``` p {clear: right;} ```

## CSS Z-index:
1. The z-index property specifies the stack order of an element.
2. An element with greater stack order is always in front of an element with a lower stack order.
3. Note: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky).
4. The following example shows how to specify the stack order of an element: ``` div {position: absolute; left: 0; width: 300px; height: 100px; background-color: yellow; z-index: -1;} ```
5. The following example shows how to specify the stack order of an element: ``` div {position: absolute; left: 0; width: 300px; height: 100px; background-color: yellow; z-index: 1;} ```

## CSS Styling Links:
* Link states:
- a:link - a normal, unvisited link
- a:visited - a link the user has visited
- a:hover - a link when the user mouses over it
- a:active - a link the moment it is clicked

* The following example shows how to style links: ``` a:link {color: red;} a:visited {color: green;} a:hover {color: hotpink;} a:active {color: blue;} ```

## CSS Tables:
* The following example shows how to style a table: ``` table {border-collapse: collapse;} table, th, td {border: 1px solid black;} th, td {padding: 15px;} th {text-align: left;} ```

