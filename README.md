# Example

This example uses npm to build a custom library that will be inserted to be used for rendering React. You may want to do something similar in your own project.

## Set up

1. Ensure node and npm are installed
2. Set up the [V8JS extension](https://github.com/phpv8/v8js) for PHP. [Blog post with instructions](https://labs.chiedo.com/blog/using-v8js-to-render-javascript-on-a-php-server/)
2. `npm install`
3. `npm run make`

This will create several files in the `build/` directory. `bundle-react.js` is what will be passed into the `ReactJS` constructor as `libsrc`. It exposes 3 globals: `React`, `ReactDOM`, and `ReactDOMServer`.

## Credits

This is a slightly modified version of the example created by Facebook [here](https://github.com/reactjs/react-php-v8js/tree/master/example)
