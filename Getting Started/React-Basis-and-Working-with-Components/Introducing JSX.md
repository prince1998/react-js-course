# Introducing JSX

JSX syntax is developed by React. It allows to put HTML code inside JS.
JSX (JavaScript + XML) since HTML is basically XML.\
App function in App.js code gets transformed into a cryptic function (Inspect -> Sources -> static/js -> 0.chunk.js)

# How React Works?

- With React, we can build our own custom HTML elements.
- React is all about 'components'. And component is just a custom HTML element.
- React follows *declarative* approach in which we just specify what we want to do. Like in App function, we use Paragraph and H2 tag to output.
- JavaScript follows *imperative* approach in which we have to specify each and everything, create element, insert content, append that child element to parent element,etc.

# Building a first custom component

- It is best practice to create separate file for each component
- App.js will be the root component that will get rendered into HTML Page by index.js
- App.js will call other components
- Component in React is just a JS function
- Convention is to keep the function name same as file name

# A closer look at JSX
- JSX is just syntactic sugar which will be converted to browser compatible code by React.
- The transformed code can be be seen using Developer tools -> Sources -> static/js -> main.chunk.js
- Previously, we had to put import React from 'react' in which ever code we used JSX but with create-react-app we do not need to import react anymore.