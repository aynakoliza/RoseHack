## Official docs for ws library

[Link to ws docs](https://github.com/websockets/ws)


## Sending and receiving text data
```js
import WebSocket from 'ws';

const ws = new WebSocket('ws://www.host.com/path');

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});
```

[link to vid](https://www.youtube.com/watch?v=FduLSXEHLng)


## There is only 1 server 

## learning javascript
https://learnxinyminutes.com/docs/javascript/


### HOW TO RUN THE SERVER
1. have node + npm installed
2. On windows: open command prompt/or powershell and type
```terminal
npm -v
```
to verify that you have it installed

On mac: open terminal and type
```terminal
npm -v
```
3. navigate to the server folder  
on Windows:
`dir` -> shows all files in current directory
`cd folderName` -> goes inside folder
`cd ..` -> exits current folder (going up 1 directory)

on Mac:
`ls` -> shows all files in current directory
`cd folderName` -> goes inside folder
`cd ..` -> exits current folder (going up 1 directory)

4. When you type either `dir` or `ls` you should see the contents of server folder 
which has index.js, package.json, README.md, node_modules folder, etc. 

5. node index.js

5a.(OR IF YOU HAVE NODEMON INSTALLED- WHICH RELOADS IMMEDIATELY WHEN YOU SAVE) you can just type `nodemon` instead