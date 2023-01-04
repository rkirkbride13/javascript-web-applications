/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and displays a message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    const inputEl = document.querySelector('#message-input');
    inputEl.value = "Some text in there"
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual("Some text in there");
  });

  it('hides the text', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    expect(document.querySelector('#message')).not.toBeNull();
    const buttonHide = document.querySelector('#hide-message-button');
    buttonHide.click();
    expect(document.querySelector('#message')).toBeNull();
  });
});