class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = "I was created dynamically by JS";
    this.mainContainerEl.append(newParagraph);
  }

  clearParagraphs() {
    const elementToRemove = document.querySelectorAll('p');
    elementToRemove.forEach(paragraph => {
      paragraph.remove();
    })
  }
}

module.exports = View;