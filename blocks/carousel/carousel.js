export default function decorate(block) {
  const buttons = document.createElement('div');
  buttons.className = 'carousel-buttons';
  [...block.children].forEach((row, i) => {
    if (!i) row.classList.add('selected');
    const classes = ['image', 'text'];
    classes.forEach((e, j) => {
      row.children[j].classList.add(`carousel-${e}`);
    });
    /* buttons */
    const button = document.createElement('button');
    button.setAttribute('id', `carousel-button-${i}`);
    button.setAttribute('title', 'Slide');
    if (!i) button.classList.add('selected');
    button.addEventListener('click', () => {
      [...buttons.children].forEach((r) => r.classList.remove('selected'));
      [...block.children].forEach((r) => r.classList.remove('selected'));
      button.classList.add('selected');
      block.children[i].classList.add('selected');
    });
    buttons.append(button);
  });
  block.parentElement.append(buttons);
  setInterval(() => { let nextButton = buttons.querySelector('button.selected').nextSibling; if (!nextButton) nextButton = buttons.querySelector('button'); nextButton.click(); }, 10000);
  /* load second image for mobile eagerly for LCP */
  block.querySelector('.carousel.block > div:first-of-type picture:nth-of-type(2) img').setAttribute('loading', 'eager');
}
