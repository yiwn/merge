# merge

Copy enumerable properties of source to target object.

## Installation

Using [component](https://github.com/component/component)

    $ component install yiwn/merge

Using [npm](http://npmjs.org/) for [browserify](http://browserify.org/)

    $ npm install yiwn-merge

## Usage

Example:

```js
var merge = require('yiwn-merge');

var obj1, obj2;

obj1 = { a: 1, b: null };
obj2 = { c: 3, b: 2 };

merge(obj1, obj2); // -> { a: 1, b: null, c: 3 }
merge(obj1, obj2, true); // -> { a: 1, b: 2, c: 3 }
```


## Test

Run tests with [mocha](http://visionmedia.github.io/mocha/)

    $ make test

## License

The MIT License

