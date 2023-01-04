class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.buttonHide = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.buttonHide.addEventListener('click', () => {
      this.hideMessage();
   });
  }

  displayMessage() {
    const input = document.querySelector('#message-input').value;

    const newDiv = document.createElement("div");
    newDiv.id = "message";
    newDiv.innerText = input;
    document.querySelector('#main-container').append(newDiv);
  }

  hideMessage() {
    document.querySelector('#message').remove()
  }
}

module.exports = MessageView;