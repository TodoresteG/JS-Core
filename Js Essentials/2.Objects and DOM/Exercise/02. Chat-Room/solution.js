function solve() {
   let sendButton = document.getElementById('send');

   sendButton.addEventListener('click', function() {
      let myMessageDiv = document.createElement('div');

      myMessageDiv.className = 'message my-message';

      let myMessage = document.getElementById('chat_input');

      let nodeMessage = document.createTextNode(myMessage.value);

      myMessageDiv.appendChild(nodeMessage);

      let chatMessages = document.getElementById('chat_messages');

      chatMessages.appendChild(myMessageDiv);

      myMessage.value = '';
   });
}