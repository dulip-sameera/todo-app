function eventBind(event, element, action) {
  if (element instanceof NodeList) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(event, action);
    }
    return;
  }
  element.addEventListener(event, action);
}

export default eventBind;
