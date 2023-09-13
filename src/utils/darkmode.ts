export function addDarkClassToHtml() {
  const htmlElement = document.querySelector('html');

  if (htmlElement) {
    htmlElement.classList.add('dark');
  }
}

export function removeDarkClassFromHtml() {
  const htmlElement = document.querySelector('html');

  if (htmlElement) {
    htmlElement.classList.remove('dark');
  }
}
