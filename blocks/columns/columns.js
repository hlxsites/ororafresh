import { decorateIcons } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
        const nextLink = picWrapper.querySelector('picture + a');
        if (nextLink) {
          const picLink = document.createElement('a');
          picLink.href = nextLink.href;
          picLink.title = nextLink.textContent;
          picLink.classList.add('linked-picture');
          pic.after(picLink);
          picLink.appendChild(pic);
        }
      }
    });
  });
  decorateIcons(block);
}
