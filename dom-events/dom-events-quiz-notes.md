# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  commonly used for debugging and understanding what is happening in your code.

- What is the purpose of events and event handling?
  event handlers are functions that respond to user actions or interactions with a web page, such as clicking a button or pressing a key. When an event occurs, JavaScript creates an event object that contains information about the event. This event object is passed as an argument to the event handler function.

- Are all possible parameters required to use a JavaScript method or function?
  no

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener method

- What is a callback function?
  A callback function is a function passed into another function as an argument. In the context of event handling, callback functions are used to respond to events triggered by user interactions or other asynchronous actions.

- What object is passed into an event listener callback when the event fires?
  event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  log event.target and you can use the MDN
  event.target is going to refer to the element that is responsible for firing the event.

- What is the difference between these two snippets of code?
  in the first the callback function is not being called which is correct.
  the second one the callback function is being called which is incorrect.
  the addEventListener will call the function when it listens for a specific event
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

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
