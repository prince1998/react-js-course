# React State and Working with Events

To add a click event to button in JSX code and use anonymous functino:

```html
<button onClick = {() => {console.log("Title Changed!")}}>Change Title</button>
```

While calling a function we always point to it; so we do not put round brackets around the function while trigerring that function

Eg:
```html
<input type = "text" onChange = {titleChangeHandler}/>
```
Here titleChangeHandler does not end with '()' since its just pointing to titleChangeHandler function already defined
