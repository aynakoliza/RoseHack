let socket = new WebSocket('ws://rosehack-server.herokuapp.com/');

const messageContainer = document.getElementById('send-container')

function sendMessage() {
	let userInput = document.getElementById('message-input').value;
	console.log(userInput);
	socket.send(userInput);
	document.getElementById('message-input').value = '';
}

function load() {
	socket.addEventListener('message', function(event) {
		// thing below is called template strings
		// docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
		document.getElementById('message-container').innerHTML += `
		<h2 class="message">${event.data}</h2>
		<hr />`;
	});

	socket.onopen = function (e) {
		console.log('[open] Connection established');
		console.log('Sending to server');
		socket.send('You are connected!');
	};

	socket.onclose = function (event) {
		if (event.wasClean) {
			console.log(
				`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
			);
		} else {
			// e.g. server process killed or network down
			// event.code is usually 1006 in this case
			console.log('[close] Connection died');
		}
	};

	socket.onerror = function (error) {
		console.log(`[error] ${error.message}`);
	};

	function appendMessage(message) {
		const messageElement = document.createElement('div')
		messageElement.innerText = message
		message.Contaomer.append(messageElement)
	}
}
