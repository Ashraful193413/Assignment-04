
## Answers to Questions:

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById: element selects by Id and return one single element. Id is a unique and powerful element selectors.

getElementByClassName: element selects by class name and return HTMLCollection. more then low powerful of id means getElementByID.

querySelector: Select the first matching element and uses css selectors.

querySelectorAll: Select the all matching element and uses css selectors and return the nodeList.


### 2. How do you create and insert a new element into the DOM?
Dom: Document Object Model. DOM Create element document.createElement() and Add content innerText or innerHTML.
Insert into DOM appendChild() or append().


### 3. What is Event Bubbling? And how does it work?
Event Bubbling when start for the target element and bubble up the parents element means inner to outer or bottom to top.


### 4. What is Event Delegation in JavaScript? Why is it useful?
we should use even delegation because we when parent adding an even listener to a parent element insert so we are already insert child element insert. Is was because of even bubbling.
Better performance and Works for dynamically added elements so work is easy.


### 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the browser’s default behavior / Stop default browser action.

stopPropagation() stops the event from bubbling to parent elements / Stop event from bubbling.

