const isDesktop = window.matchMedia('(min-width: 1200px)');

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
    if (!i) button.classList.add('selected');
    button.addEventListener('click', () => {
      block.scrollTo({ top: 0, left: row.offsetLeft - row.parentNode.offsetLeft, behavior: 'smooth' });
      [...buttons.children].forEach((r) => r.classList.remove('selected'));
      [...block.children].forEach((r) => r.classList.remove('selected'));
      button.classList.add('selected');
      block.children[i].classList.add('selected');
    });
    buttons.append(button);
  });
  block.parentElement.append(buttons);
  if (isDesktop) block.querySelector('.carousel-image picture img').setAttribute('loading', 'eager');
  else block.querySelector('.carousel-image picture:nth-of-type(2) img').setAttribute('loading', 'eager');
}
