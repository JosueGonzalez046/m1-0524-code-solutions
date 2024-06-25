# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  commonly used for debugging and understanding what is happening in your code.

- What is a "model"?
  The Document Object Model, or DOM, is a representation of a web pages content in the form of objects, allowing developers to manipulate the content, structure, and styles of a web page.

- Which "document" is being referred to in the phrase Document Object Model?
  the web page

- What is the word "object" referring to in the phrase Document Object Model?
  a representation of a web pages content in the form of objects

- What is a DOM Tree?
  It's referencing the tree-like structure of HTML elements. Each web page is modeled as a tree of objects, with the HTML document as the root, and other elements (like <body>, <header>, <div>, etc.) as branches and leaves.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  getElementById(id)
  querySelector(selector)

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll

- Why might you want to assign the return value of a DOM query to a variable?
  because once the reference has been saved in a variable, accessing the element again does not require another search.

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  because the browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.

- What does `document.querySelector()` take as its argument and what does it return?
  a specified css selector and it returns the first element that matches a specified CSS selector

- What does `document.querySelectorAll()` take as its argument and what does it return?
  a specified css selector and this method returns a NodeList of all elements in the document that match a specified CSS selector.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
