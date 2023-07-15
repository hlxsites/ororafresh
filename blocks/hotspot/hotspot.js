// eslint-disable-next-line no-unused-vars
export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r > 0) {
      const nexticondiv = document.createElement('div');
      // nexticondiv.setAttribute('class', `icon${r}`);
      nexticondiv.style.left = [...row.children][1].textContent;
      nexticondiv.style.top = [...row.children][2].textContent;
      nexticondiv.setAttribute('data', [...row.children][0].textContent);
      row.after(nexticondiv);
      // [...row.children][0].setAttribute('class', `popup${r}`);
      // nexticondiv.appendChild([...row.children][0]);
      row.remove();
    }
  });
}
