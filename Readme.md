# BetterEventListener.js

The default `el.addEventListener()` for JS kinda annoys me. Mainly because you have to manually provide a fallback solution for IE11 < but also because like many JS developers, I came to JavaScript from jQuery and although I detest jQuery at this point in time, I really like it's `.on()` method for attaching event listeners to elements. I liked the way it would take a list of elements and auto loop through them and apply the listeners. Sometimes, this is really, really handy for quick bit’s of code.

This ES6 module essentially adds a method, that you can name yourself, to the `Object.prototype` (Isn't enumerable). This method, by default is called `.bEvent()`, works just like the normal `.addEventListener()` in regards that it is bound to the `Object.prototype`, takes in an event name as the first parameter and then the callback function as the second. The difference is that the method works if called on a NodeList, not just a single element. The code detects whether it is a single element or array, like jQuery, and add's the event listener on each. The second difference is that it can take an array of event listeners, not just one. The final difference is that it detects support for `.addEventListener()` and provides a fallback if not found.

### Usage
- - - -
1. Installation
```shell
npm install better-event-listener --save
```
or download the `dist/BetterEventListener.js` for manual use.

2. Import the Module
```JavaScript
import BetterEventListener from 'BetterEventListener';
```

3. Instantiate the class (This only ever needs to be run once)
```JavaScript
new BetterEventListener();

// Optional method name override
new BetterEventListener({methodName: 'myBindEvent'});
```

4. Go nuts!
```JavaScript
// Single Element, single event..
button.bEvent('click', function(e) { ... });


// Single Element, multiple events..
button.bEvent(['click', 'touchend'], function(e) { ... });


// Multiple elements, single event..
buttons.bEvent('click', function(e) { ... });


// Multiple elements, multiple events..
buttons.bEvent(events, function(e) ( ... });


// Custom method name..
new BetterEventListener({methodName: 'myBindEvent'});

buttons.myBindEvent(events, function(e) ( ... });
```

#### Disclaimer
I understand adding methods to the `Object.prototype` is considered a bad practise. One being regulation over other packages that may name the method you create the same. This can cause all sorts of complications down the line. As a solution for this, when instanciating the method creation, you can provide an option to set the method name to whatever you want so say there is another package that uses `.bEvent()`, then you can change it to what you want e.g. `bEventer`.

**For this reason however, I recommend against using this package if you are part of a large team.**

## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)