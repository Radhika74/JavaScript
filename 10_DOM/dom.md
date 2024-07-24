# DOM
### Introduction
The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of nodes, with each node representing a part of the document.

## Key Concepts
* Element Nodes: Represent HTML elements.
* Text Nodes: Represent the text within an HTML element. Example: The text inside Hello
* Attribute Nodes: Represent the attributes of HTML elements. Example: class="example".
* Comment Nodes: Represent comments within HTML.

## DOM Tree
The DOM tree is a hierarchical structure consisting of nodes. Each element, attribute, and piece of text in the HTML document is a node in the DOM tree.

![alt text](68747470733a2f2f7777772e66726565636f646563616d702e6f72672f6e6577732f636f6e74656e742f696d616765732f73697a652f77313030302f323032312f30392f446f63756d656e742e6a7067.jpg)

## HTML Elements
| Property                          | Description                                    |
|-----------------------------------|--------------------------------------------    |
| `element.innerHTML = new html content` | Change the inner HTML of an element       |
| `element.attribute = new value`   | Change the attribute value of an HTML element  |
| `element.style.property = new style` | Change the style of an HTML element         |

| Method                               | Description                                |
|--------------------------------------|--------------------------------------------|
| `element.setAttribute(attribute, value)` | Change the attribute value of an HTML element |




## Adding and Deleting Elements
| Method                        | Description                          |
|-------------------------------|--------------------------------------|
| `document.createElement(element)`  | Create an HTML element             |
| `document.removeChild(element)`    | Remove an HTML element             |
| `document.appendChild(element)`    | Add an HTML element                |
| `document.replaceChild(new, old)`  | Replace an HTML element            |
| `document.write(text)`             | Write into the HTML output stream  |



## Finding HTML Objects
| Property                     | Description                                              | DOM |
|------------------------------|----------------------------------------------------------|-----|
| `document.anchors`           | Returns all `<a>` elements that have a name attribute    | 1   |
| `document.applets`           | Deprecated                                               | 1   |
| `document.baseURI`           | Returns the absolute base URI of the document            | 3   |
| `document.body`              | Returns the `<body>` element                             | 1   |
| `document.cookie`            | Returns the document's cookie                            | 1   |
| `document.doctype`           | Returns the document's doctype                           | 3   |
| `document.documentElement`   | Returns the `<html>` element                             | 3   |
| `document.documentMode`      | Returns the mode used by the browser                     | 3   |
| `document.documentURI`       | Returns the URI of the document                          | 3   |
| `document.domain`            | Returns the domain name of the document server           | 1   |
| `document.domConfig`         | Obsolete                                                 | 3   |
| `document.embeds`            | Returns all `<embed>` elements                           | 3   |
| `document.forms`             | Returns all `<form>` elements                            | 1   |
| `document.head`              | Returns the `<head>` element                             | 3   |
| `document.images`            | Returns all `<img>` elements                             | 1   |
| `document.implementation`    | Returns the DOM implementation                           | 3   |
| `document.inputEncoding`     | Returns the document's encoding (character set)          | 3   |
| `document.lastModified`      | Returns the date and time the document was updated       | 3   |
| `document.links`             | Returns all `<area>` and `<a>` elements that have a href attribute | 1   |
| `document.readyState`        | Returns the (loading) status of the document              | 3   |
| `document.referrer`          | Returns the URI of the referrer (the linking document)    | 1   |
| `document.scripts`           | Returns all `<script>` elements                           | 3   |
| `document.strictErrorChecking`| Returns if error checking is enforced                     | 3   |
| `document.title`             | Returns the `<title>` element                             | 1   |
| `document.URL`               | Returns the complete URL of the document                  | 1   |


```html -
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Example</title>
</head>
<body>
    <div id="container">
        <p class="text">Hello, World!</p>
    </div>

    <script>
        // Selecting elements
        const container = document.getElementById('container');
        const paragraph = document.querySelector('.text');

        // Creating a new element
        const newElement = document.createElement('span');
        newElement.textContent = 'This is a new element';

        // Appending the new element
        container.appendChild(newElement);

        // Changing content
        paragraph.textContent = 'Hello, DOM!';
    </script>
</body>
</html>
```


