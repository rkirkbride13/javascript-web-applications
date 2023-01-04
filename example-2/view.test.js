/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays 2 paragraphs', () => {
    const view = new View();
    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('adds a paragraph and displays 3 paragraphs', () => {
    const view = new View();
    view.addParagraph();
    expect(document.querySelectorAll('p').length).toBe(3);
  })

  it('clears all paragraphs and displays 0', () => {
    const view = new View();
    view.addParagraph();
    expect(document.querySelectorAll('p').length).toBe(3);
    view.clearParagraphs();
    expect(document.querySelectorAll('p').length).toBe(0);
  })


});