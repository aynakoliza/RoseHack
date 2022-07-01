## Websockets (way to connect in html/css/js)

[Link to Websocket docs](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

## basic websocket docs
```js

// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:5500');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
```

## video tutorial

[link to vid](https://www.youtube.com/watch?v=FduLSXEHLng)


## There are many clients


## learning javascript
https://learnxinyminutes.com/docs/javascript/


### To open a website just use live server extension by ritwick dey, open up localhost:5500 in browser

